import { useState, useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { HiSwitchHorizontal } from 'react-icons/hi'
import PublicationCard from '@/components/shared/PublicationCard'
import FilterSection from '@/components/shared/FilterSection'
import { mockPublications } from '@/mock/data/library'
import classNames from 'classnames'

const LibraryBrowse = () => {
    const [searchParams] = useSearchParams()
    const [selectedTypes, setSelectedTypes] = useState<string[]>([])
    const [selectedCategories, setSelectedCategories] = useState<string[]>([])
    const [selectedYears, setSelectedYears] = useState<string[]>([])
    const [selectedDepartments, setSelectedDepartments] = useState<string[]>([])
    const [sortBy, setSortBy] = useState<'newest' | 'popular' | 'price-low' | 'price-high'>('popular')
    const [showFilters, setShowFilters] = useState(false)

    // Get category filter from URL if exists
    const categoryParam = searchParams.get('category')

    // Get all unique values for filters
    const publicationTypes = [
        { label: 'Journals', value: 'journal' },
        { label: 'Magazines', value: 'magazine' },
        { label: 'Books', value: 'book' },
        { label: 'Research Papers', value: 'research-paper' },
    ]

    const categories = [
        { label: 'Science', value: 'science' },
        { label: 'Technology', value: 'technology' },
        { label: 'Business', value: 'business' },
        { label: 'Health', value: 'health' },
        { label: 'Education', value: 'education' },
        { label: 'Humanities', value: 'humanities' },
    ]

    const years = [
        { label: '2024', value: '2024' },
        { label: '2023', value: '2023' },
        { label: '2022', value: '2022' },
        { label: '2021 & Earlier', value: '2021' },
    ]

    const departments = [
        { label: 'Computer Science', value: 'Computer Science' },
        { label: 'Business Administration', value: 'Business Administration' },
        { label: 'Natural Sciences', value: 'Natural Sciences' },
        { label: 'Health Sciences', value: 'Health Sciences' },
        { label: 'Education', value: 'Education' },
        { label: 'Economics', value: 'Economics' },
        { label: 'Philosophy', value: 'Philosophy' },
        { label: 'Environmental Science', value: 'Environmental Science' },
    ]

    // Filter publications based on selected filters
    const filteredPublications = useMemo(() => {
        let results = mockPublications

        // Apply category param if exists
        if (categoryParam) {
            results = results.filter((pub) => pub.publicationType === categoryParam)
        }

        // Apply type filter
        if (selectedTypes.length > 0) {
            results = results.filter((pub) => selectedTypes.includes(pub.publicationType))
        }

        // Apply category filter
        if (selectedCategories.length > 0) {
            results = results.filter((pub) => selectedCategories.includes(pub.category))
        }

        // Apply year filter
        if (selectedYears.length > 0) {
            results = results.filter((pub) => {
                if (selectedYears.includes('2024')) return pub.year === 2024
                if (selectedYears.includes('2023')) return pub.year === 2023
                if (selectedYears.includes('2022')) return pub.year === 2022
                if (selectedYears.includes('2021')) return pub.year <= 2021
                return false
            })
        }

        // Apply department filter
        if (selectedDepartments.length > 0) {
            results = results.filter((pub) => pub.department && selectedDepartments.includes(pub.department))
        }

        // Apply sorting
        switch (sortBy) {
            case 'newest':
                results = results.sort((a, b) => b.year - a.year)
                break
            case 'price-low':
                results = results.sort((a, b) => a.price - b.price)
                break
            case 'price-high':
                results = results.sort((a, b) => b.price - a.price)
                break
            case 'popular':
            default:
                results = results.sort((a, b) => (b.reviewCount || 0) - (a.reviewCount || 0))
                break
        }

        return results
    }, [selectedTypes, selectedCategories, selectedYears, selectedDepartments, sortBy, categoryParam])

    const resetFilters = () => {
        setSelectedTypes([])
        setSelectedCategories([])
        setSelectedYears([])
        setSelectedDepartments([])
        setSortBy('popular')
    }

    const hasActiveFilters = selectedTypes.length > 0 || selectedCategories.length > 0 || selectedYears.length > 0 || selectedDepartments.length > 0

    return (
        <div className="bg-white">
            {/* Header */}
            <div className="bg-gray-50 border-b border-gray-200 py-8 px-4 sm:px-8 lg:px-12">
                <div className="max-w-7xl mx-auto">
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">Browse Library</h1>
                    <p className="text-gray-600">
                        Showing{' '}
                        <span className="font-semibold text-gray-900">{filteredPublications.length}</span>{' '}
                        publications
                    </p>
                </div>
            </div>

            <div className="py-8 px-4 sm:px-8 lg:px-12">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col lg:flex-row gap-8">
                        {/* Sidebar Filters */}
                        <div className={classNames('lg:w-64 flex-shrink-0', !showFilters && 'hidden lg:block')}>
                            {/* Filter Header */}
                            <div className="flex items-center justify-between mb-6 lg:mb-0">
                                <h2 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                                    <HiSwitchHorizontal className="w-5 h-5" />
                                    Filters
                                </h2>
                                {hasActiveFilters && (
                                    <button
                                        onClick={resetFilters}
                                        className="text-sm text-indigo-600 hover:text-indigo-700 font-semibold"
                                    >
                                        Reset
                                    </button>
                                )}
                            </div>

                            {/* Filters */}
                            <div className="space-y-4">
                                <FilterSection
                                    title="Publication Type"
                                    options={publicationTypes}
                                    selectedValues={selectedTypes}
                                    onChange={setSelectedTypes}
                                />
                                <FilterSection
                                    title="Category"
                                    options={categories}
                                    selectedValues={selectedCategories}
                                    onChange={setSelectedCategories}
                                />
                                <FilterSection
                                    title="Year"
                                    options={years}
                                    selectedValues={selectedYears}
                                    onChange={setSelectedYears}
                                />
                                <FilterSection
                                    title="Department"
                                    options={departments}
                                    selectedValues={selectedDepartments}
                                    onChange={setSelectedDepartments}
                                />
                            </div>
                        </div>

                        {/* Main Content */}
                        <div className="flex-grow">
                            {/* Toolbar */}
                            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
                                <button
                                    onClick={() => setShowFilters(!showFilters)}
                                    className="lg:hidden flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors font-semibold text-gray-700"
                                >
                                    <HiSwitchHorizontal className="w-5 h-5" />
                                    {showFilters ? 'Hide Filters' : 'Show Filters'}
                                </button>

                                <div className="flex items-center gap-3">
                                    <label htmlFor="sort" className="text-sm font-semibold text-gray-700">
                                        Sort by:
                                    </label>
                                    <select
                                        id="sort"
                                        value={sortBy}
                                        onChange={(e) => setSortBy(e.target.value as any)}
                                        className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                    >
                                        <option value="popular">Most Popular</option>
                                        <option value="newest">Newest</option>
                                        <option value="price-low">Price: Low to High</option>
                                        <option value="price-high">Price: High to Low</option>
                                    </select>
                                </div>
                            </div>

                            {/* Publications Grid */}
                            {filteredPublications.length > 0 ? (
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                                    {filteredPublications.map((publication) => (
                                        <PublicationCard key={publication.id} publication={publication} />
                                    ))}
                                </div>
                            ) : (
                                <div className="text-center py-16">
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">No results found</h3>
                                    <p className="text-gray-600 mb-6">
                                        Try adjusting your filters or search criteria
                                    </p>
                                    <button
                                        onClick={resetFilters}
                                        className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors font-semibold"
                                    >
                                        Reset Filters
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LibraryBrowse
