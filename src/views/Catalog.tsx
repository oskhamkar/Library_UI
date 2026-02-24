import { useEffect, useMemo, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import Select from '@/components/ui/Select'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'
import type { LibraryItem, LibraryCategory } from '@/@types/library'
import { apiGetLibraryItems } from '@/services/LibraryService'

type SortOption = 'newest' | 'popular' | 'priceAsc' | 'priceDesc'

const categoryOptions: { value: LibraryCategory | 'all'; label: string }[] = [
    { value: 'all', label: 'All categories' },
    { value: 'journals', label: 'Journals' },
    { value: 'magazines', label: 'Magazines' },
    { value: 'books', label: 'Books' },
    { value: 'research', label: 'Research papers' },
]

const priceRangeOptions = [
    { value: 'all', label: 'Any price' },
    { value: 'under20', label: 'Under $20' },
    { value: '20to50', label: '$20 – $50' },
    { value: 'above50', label: 'Above $50' },
]

const sortOptions: { value: SortOption; label: string }[] = [
    { value: 'newest', label: 'Newest' },
    { value: 'popular', label: 'Popular' },
    { value: 'priceAsc', label: 'Price: Low to High' },
    { value: 'priceDesc', label: 'Price: High to Low' },
]

const Catalog = () => {
    const navigate = useNavigate()
    const [searchParams, setSearchParams] = useSearchParams()

    const [items, setItems] = useState<LibraryItem[]>([])
    const [loading, setLoading] = useState(true)
    const [query, setQuery] = useState(searchParams.get('q') || '')
    const [category, setCategory] = useState<LibraryCategory | 'all'>(
        (searchParams.get('category') as LibraryCategory) || 'all'
    )
    const [year, setYear] = useState<string>('all')
    const [department, setDepartment] = useState<string>('all')
    const [priceRange, setPriceRange] = useState<string>('all')
    const [sort, setSort] = useState<SortOption>('newest')

    useEffect(() => {
        let mounted = true
        const load = async () => {
            try {
                const resp = await apiGetLibraryItems()
                if (!mounted) return
                setItems(resp.data || [])
            } finally {
                if (mounted) {
                    setLoading(false)
                }
            }
        }
        load()
        return () => {
            mounted = false
        }
    }, [])

    const years = useMemo(() => {
        const set = new Set<number>()
        items.forEach((i) => set.add(i.year))
        return Array.from(set).sort((a, b) => b - a)
    }, [items])

    const departments = useMemo(() => {
        const set = new Set<string>()
        items.forEach((i) => {
            if (i.department) set.add(i.department)
        })
        return Array.from(set).sort()
    }, [items])

    const filteredItems = useMemo(() => {
        let result = [...items]

        if (category !== 'all') {
            result = result.filter((i) => i.category === category)
        }

        if (query.trim()) {
            const q = query.trim().toLowerCase()
            result = result.filter(
                (i) =>
                    i.title.toLowerCase().includes(q) ||
                    i.author.toLowerCase().includes(q) ||
                    i.publisher.toLowerCase().includes(q)
            )
        }

        if (year !== 'all') {
            const y = parseInt(year, 10)
            result = result.filter((i) => i.year === y)
        }

        if (department !== 'all') {
            result = result.filter((i) => i.department === department)
        }

        if (priceRange !== 'all') {
            result = result.filter((i) => {
                if (priceRange === 'under20') return i.price < 20
                if (priceRange === '20to50') return i.price >= 20 && i.price <= 50
                if (priceRange === 'above50') return i.price > 50
                return true
            })
        }

        result.sort((a, b) => {
            if (sort === 'newest') {
                return b.year - a.year
            }
            if (sort === 'popular') {
                const aScore = (a.popular ? 1 : 0) + (a.featured ? 1 : 0)
                const bScore = (b.popular ? 1 : 0) + (b.featured ? 1 : 0)
                return bScore - aScore
            }
            if (sort === 'priceAsc') {
                return a.price - b.price
            }
            if (sort === 'priceDesc') {
                return b.price - a.price
            }
            return 0
        })

        return result
    }, [items, category, query, year, department, priceRange, sort])

    const handleApplyFiltersToUrl = () => {
        const params = new URLSearchParams()
        if (query.trim()) params.set('q', query.trim())
        if (category !== 'all') params.set('category', category)
        setSearchParams(params)
    }

    const handleClearFilters = () => {
        setQuery('')
        setCategory('all')
        setYear('all')
        setDepartment('all')
        setPriceRange('all')
        setSort('newest')
        setSearchParams({})
    }

    return (
        <div className="flex flex-col lg:flex-row gap-6 h-full">
            <aside className="w-full lg:w-72 flex-shrink-0">
                <Card header="Filters" headerBorder bodyClass="space-y-4">
                    <div className="space-y-2">
                        <p className="text-xs font-semibold text-gray-500 uppercase">
                            Search
                        </p>
                        <Input
                            placeholder="Search titles, authors…"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            onBlur={handleApplyFiltersToUrl}
                        />
                    </div>

                    <div className="space-y-2">
                        <p className="text-xs font-semibold text-gray-500 uppercase">
                            Category
                        </p>
                        <Select
                            options={categoryOptions}
                            value={categoryOptions.find((o) => o.value === category)}
                            onChange={(opt) =>
                                setCategory(
                                    (opt as { value: LibraryCategory | 'all' }).value
                                )
                            }
                            onBlur={handleApplyFiltersToUrl}
                        />
                    </div>

                    <div className="space-y-2">
                        <p className="text-xs font-semibold text-gray-500 uppercase">
                            Year
                        </p>
                        <Select
                            isClearable={false}
                            options={[
                                { value: 'all', label: 'Any year' },
                                ...years.map((y) => ({ value: String(y), label: String(y) })),
                            ]}
                            value={
                                year === 'all'
                                    ? { value: 'all', label: 'Any year' }
                                    : { value: year, label: year }
                            }
                            onChange={(opt) =>
                                setYear((opt as { value: string }).value || 'all')
                            }
                        />
                    </div>

                    <div className="space-y-2">
                        <p className="text-xs font-semibold text-gray-500 uppercase">
                            Department
                        </p>
                        <Select
                            isClearable={false}
                            options={[
                                { value: 'all', label: 'Any department' },
                                ...departments.map((d) => ({
                                    value: d,
                                    label: d,
                                })),
                            ]}
                            value={
                                department === 'all'
                                    ? { value: 'all', label: 'Any department' }
                                    : { value: department, label: department }
                            }
                            onChange={(opt) =>
                                setDepartment((opt as { value: string }).value || 'all')
                            }
                        />
                    </div>

                    <div className="space-y-2">
                        <p className="text-xs font-semibold text-gray-500 uppercase">
                            Price range
                        </p>
                        <Select
                            options={priceRangeOptions}
                            value={priceRangeOptions.find((o) => o.value === priceRange)}
                            onChange={(opt) =>
                                setPriceRange((opt as { value: string }).value || 'all')
                            }
                        />
                    </div>

                    <div className="pt-2 flex items-center justify-between gap-3">
                        <Button
                            size="sm"
                            variant="plain"
                            className="text-xs"
                            onClick={handleClearFilters}
                        >
                            Clear all
                        </Button>
                    </div>
                </Card>
            </aside>

            <section className="flex-1 flex flex-col gap-4">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                    <div>
                        <p className="text-xs text-gray-500">
                            {loading
                                ? 'Loading catalog…'
                                : `${filteredItems.length} of ${items.length} items`}
                        </p>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-xs text-gray-500">Sort by</span>
                        <Select
                            className="min-w-[180px]"
                            options={sortOptions}
                            value={sortOptions.find((o) => o.value === sort)}
                            onChange={(opt) =>
                                setSort((opt as { value: SortOption }).value)
                            }
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4">
                    {filteredItems.map((item) => (
                        <Card
                            key={item.id}
                            className="flex flex-col hover:shadow-md transition-shadow duration-150"
                            clickable
                            onClick={() => navigate(`/item/${item.id}`)}
                        >
                            <div className="aspect-[3/4] w-full mb-3 overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-700">
                                <img
                                    src={item.thumbnail || item.coverImage}
                                    alt={item.title}
                                    className="h-full w-full object-cover"
                                />
                            </div>
                            <div className="flex-1 space-y-1">
                                <p className="text-sm font-semibold text-gray-900 dark:text-gray-50 line-clamp-2">
                                    {item.title}
                                </p>
                                <p className="text-xs text-gray-500 dark:text-gray-400">
                                    {item.author}
                                </p>
                                <p className="text-xs text-gray-400">
                                    {item.department} • {item.year}
                                </p>
                            </div>
                            <div className="mt-3 flex items-center justify-between">
                                <p className="text-sm font-semibold text-blue-600 dark:text-sky-300">
                                    ${item.price.toFixed(2)}
                                </p>
                                <Button
                                    size="xs"
                                    variant="twoTone"
                                    onClick={(e) => {
                                        e.stopPropagation()
                                        navigate(`/item/${item.id}`)
                                    }}
                                >
                                    View details
                                </Button>
                            </div>
                        </Card>
                    ))}
                </div>

                {!loading && filteredItems.length === 0 && (
                    <div className="mt-6 text-center text-sm text-gray-500">
                        No publications match your filters. Try adjusting your search.
                    </div>
                )}
            </section>
        </div>
    )
}

export default Catalog

