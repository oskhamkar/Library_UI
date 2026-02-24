import { useEffect, useMemo, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { HiOutlineSearch, HiOutlineBookmark } from 'react-icons/hi'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'
import type { LibraryItem, LibraryCategory } from '@/@types/library'
import { apiGetFeaturedLibraryItems, apiGetLibraryItems } from '@/services/LibraryService'

type SearchState = {
    query: string
}

const categoryMeta: {
    key: LibraryCategory
    label: string
    description: string
}[] = [
    {
        key: 'journals',
        label: 'Journals',
        description: 'Peer‑reviewed academic and scientific journals.',
    },
    {
        key: 'magazines',
        label: 'Magazines',
        description: 'Curated academic and campus magazines.',
    },
    {
        key: 'books',
        label: 'Books',
        description: 'Textbooks, monographs, and reference titles.',
    },
    {
        key: 'research',
        label: 'Research Papers',
        description: 'Conference papers and technical reports.',
    },
]

const Home = () => {
    const navigate = useNavigate()
    const [searchParams] = useSearchParams()
    const initialQuery = searchParams.get('q') || ''

    const [search, setSearch] = useState<SearchState>({ query: initialQuery })
    const [featured, setFeatured] = useState<LibraryItem[]>([])
    const [allItems, setAllItems] = useState<LibraryItem[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        let mounted = true
        const load = async () => {
            try {
                const [featuredResp, allResp] = await Promise.all([
                    apiGetFeaturedLibraryItems(),
                    apiGetLibraryItems(),
                ])
                if (!mounted) return
                setFeatured(featuredResp.data || [])
                setAllItems(allResp.data || [])
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

    const handleSearch = () => {
        const params = new URLSearchParams()
        if (search.query.trim()) {
            params.set('q', search.query.trim())
        }
        navigate(`/catalog?${params.toString()}`)
    }

    const handleCategoryClick = (category: LibraryCategory) => {
        const params = new URLSearchParams()
        params.set('category', category)
        navigate(`/catalog?${params.toString()}`)
    }

    const recentlyViewed = useMemo(() => {
        try {
            const raw = localStorage.getItem('library_recent')
            if (!raw) return []
            const ids: string[] = JSON.parse(raw)
            const byId = new Map(allItems.map((i) => [i.id, i]))
            const items = ids
                .map((id) => byId.get(id))
                .filter((x): x is LibraryItem => Boolean(x))
            return items
        } catch {
            return []
        }
    }, [allItems])

    return (
        <div className="space-y-8">
            <section className="relative overflow-hidden rounded-none lg:rounded-2xl bg-[#0073cf] text-white shadow-lg">
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top,_#ffffff60,_transparent_55%)]" />
                <div className="relative px-6 py-10 lg:px-10 lg:py-14 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">
                    <div className="max-w-xl space-y-4">
                        <p className="text-sm font-semibold tracking-wide uppercase text-sky-100">
                            Digital Knowledge Hub
                        </p>
                        <h1 className="text-3xl lg:text-4xl font-bold tracking-tight">
                            Trusted Source for Journals,
                            <br />
                            eBooks & Publishing
                        </h1>
                        <p className="text-sky-100 text-sm lg:text-base">
                            Smart solutions for smarter libraries. Seamless access to journals,
                            books, magazines and research papers in one unified portal.
                        </p>
                        <div className="mt-6 flex flex-col sm:flex-row sm:items-center gap-3 max-w-xl">
                            <div className="flex-1">
                                <Input
                                    placeholder="Search journals, books, magazines…"
                                    prefix={<HiOutlineSearch className="text-gray-400" />}
                                    value={search.query}
                                    onChange={(e) =>
                                        setSearch((s) => ({ ...s, query: e.target.value }))
                                    }
                                />
                            </div>
                            <Button
                                variant="solid"
                                color="blue-600"
                                className="shadow-sm bg-[#ff8a00] hover:bg-[#ff9e2e] border-none"
                                onClick={handleSearch}
                            >
                                Search
                            </Button>
                        </div>
                        <div className="flex flex-wrap mt-4 text-xs text-sky-100 gap-x-4 gap-y-1">
                            <span>• Smart subscription management</span>
                            <span>• Campus-wide entitlement</span>
                            <span>• Secure digital delivery</span>
                        </div>
                    </div>
                    <div className="lg:w-[420px]">
                        <div className="bg-white rounded-2xl px-6 py-6 shadow-md flex flex-col items-center gap-4">
                            <div className="flex gap-4 justify-center">
                                {(featured.length ? featured : allItems)
                                    .slice(0, 3)
                                    .map((item) => (
                                        <div
                                            key={item.id}
                                            className="w-28 sm:w-32 cursor-pointer"
                                            onClick={() => navigate(`/item/${item.id}`)}
                                        >
                                            <div className="aspect-[3/4] overflow-hidden rounded-lg bg-gray-100">
                                                <img
                                                    src={item.thumbnail || item.coverImage}
                                                    alt={item.title}
                                                    className="h-full w-full object-cover"
                                                />
                                            </div>
                                        </div>
                                    ))}
                            </div>
                            <div className="flex items-center justify-center gap-4 text-xs text-gray-500">
                                <button
                                    type="button"
                                    className="h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center bg-white"
                                >
                                    ‹
                                </button>
                                <span>Featured covers</span>
                                <button
                                    type="button"
                                    className="h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center bg-white"
                                >
                                    ›
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="space-y-4">
                <div className="flex items-center justify-between gap-2">
                    <h2 className="text-base font-semibold text-gray-900 dark:text-gray-100">
                        Browse by category
                    </h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {categoryMeta.map((cat) => (
                        <Card
                            key={cat.key}
                            className="hover:shadow-lg transition-shadow duration-150"
                            clickable
                            onClick={() => handleCategoryClick(cat.key)}
                        >
                            <div className="space-y-2">
                                <p className="text-sm font-semibold text-gray-900 dark:text-gray-50">
                                    {cat.label}
                                </p>
                                <p className="text-xs text-gray-500 dark:text-gray-400">
                                    {cat.description}
                                </p>
                                <Button
                                    size="sm"
                                    variant="plain"
                                    className="px-0 text-xs text-blue-600 dark:text-sky-300"
                                >
                                    View {cat.label.toLowerCase()}
                                </Button>
                            </div>
                        </Card>
                    ))}
                </div>
            </section>

            <section className="space-y-4">
                <div className="text-center">
                    <h2 className="text-base font-semibold text-gray-900 dark:text-gray-100">
                        Weekly Popular
                    </h2>
                    <div className="mt-2 h-[2px] w-16 bg-[#ff8a00] mx-auto rounded-full" />
                </div>
                <div className="overflow-x-auto">
                    <div className="flex gap-4 min-w-max pb-1">
                        {featured.map((item) => (
                            <Card
                                key={item.id}
                                className="w-48 sm:w-56 flex-shrink-0 hover:shadow-md transition-shadow duration-150"
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
                                <p className="text-xs font-semibold text-gray-900 dark:text-gray-50 line-clamp-2">
                                    {item.title}
                                </p>
                                <p className="text-[11px] text-gray-500 dark:text-gray-400">
                                    {item.author}
                                </p>
                            </Card>
                        ))}
                        {!loading && featured.length === 0 && (
                            <p className="text-sm text-gray-500">
                                No featured titles available yet. Check back soon.
                            </p>
                        )}
                    </div>
                </div>
            </section>

            {recentlyViewed.length > 0 && (
                <section className="space-y-4">
                    <div className="flex items-center justify-between gap-2">
                        <h2 className="text-base font-semibold text-gray-900 dark:text-gray-100">
                            Recently viewed
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {recentlyViewed.map((item) => (
                            <Card
                                key={`recent-${item.id}`}
                                className="flex flex-col hover:shadow-md transition-shadow duration-150"
                            >
                                <div className="aspect-[3/4] w-full mb-3 overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-700">
                                    <img
                                        src={item.thumbnail || item.coverImage}
                                        alt={item.title}
                                        className="h-full w-full object-cover"
                                    />
                                </div>
                                <p className="text-sm font-semibold text-gray-900 dark:text-gray-50 line-clamp-2">
                                    {item.title}
                                </p>
                                <p className="text-xs text-gray-500 dark:text-gray-400">
                                    {item.author}
                                </p>
                                <div className="mt-3 flex items-center justify-between">
                                    <p className="text-xs text-gray-400">
                                        {item.category.toUpperCase()}
                                    </p>
                                    <Button
                                        size="xs"
                                        variant="plain"
                                        className="text-blue-600 dark:text-sky-300"
                                        onClick={() => navigate(`/item/${item.id}`)}
                                    >
                                        Open
                                    </Button>
                                </div>
                            </Card>
                        ))}
                    </div>
                </section>
            )}
        </div>
    )
}

export default Home
