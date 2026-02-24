import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { HiSearch, HiBookOpen, HiNewspaper, HiAcademicCap, HiSparkles } from 'react-icons/hi'
import CategoryCard from '@/components/shared/CategoryCard'
import PublicationCard from '@/components/shared/PublicationCard'
import { mockPublications, getFeaturedPublications } from '@/mock/data/library'

const LibraryHome = () => {
    const navigate = useNavigate()
    const [searchQuery, setSearchQuery] = useState('')
    const featuredPublications = getFeaturedPublications()

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault()
        if (searchQuery.trim()) {
            navigate(`/library/search?q=${encodeURIComponent(searchQuery)}`)
        }
    }

    const categories = [
        {
            icon: <HiAcademicCap />,
            title: 'Journals',
            description: 'Access peer-reviewed research journals across all disciplines',
            color: 'bg-gradient-to-br from-blue-500 to-blue-600',
            categoryPath: '/library/category/journal',
            count: mockPublications.filter((p) => p.publicationType === 'journal').length,
        },
        {
            icon: <HiNewspaper />,
            title: 'Magazines',
            description: 'Explore industry insights and feature articles',
            color: 'bg-gradient-to-br from-purple-500 to-purple-600',
            categoryPath: '/library/category/magazine',
            count: mockPublications.filter((p) => p.publicationType === 'magazine').length,
        },
        {
            icon: <HiBookOpen />,
            title: 'Books',
            description: 'Complete access to comprehensive academic books',
            color: 'bg-gradient-to-br from-orange-500 to-orange-600',
            categoryPath: '/library/category/book',
            count: mockPublications.filter((p) => p.publicationType === 'book').length,
        },
        {
            icon: <HiSparkles />,
            title: 'Research Papers',
            description: 'Discover cutting-edge research and academic papers',
            color: 'bg-gradient-to-br from-pink-500 to-pink-600',
            categoryPath: '/library/category/research-paper',
            count: mockPublications.filter((p) => p.publicationType === 'research-paper').length,
        },
    ]

    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-r from-indigo-600 via-indigo-600 to-blue-700 text-white py-20 px-4 sm:px-8 lg:px-12">
                <div className="max-w-6xl mx-auto">
                    {/* Headline */}
                    <div className="mb-8 text-center">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                            Gateway to Unlimited Knowledge
                        </h1>
                        <p className="text-lg sm:text-xl text-indigo-100 max-w-2xl mx-auto">
                            Access millions of journals, magazines, books, and research papers from top institutions and publishers worldwide.
                        </p>
                    </div>

                    {/* Search Bar */}
                    <form onSubmit={handleSearch} className="max-w-2xl mx-auto">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search by title, author, or keyword..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full px-6 py-4 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                            />
                            <button
                                type="submit"
                                className="absolute right-3 top-1/2 -translate-y-1/2 p-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                            >
                                <HiSearch className="w-6 h-6" />
                            </button>
                        </div>
                    </form>
                </div>
            </section>

            {/* Categories Section */}
            <section className="py-16 px-4 sm:px-8 lg:px-12 bg-gray-50">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Browse by Category</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {categories.map((category) => (
                            <CategoryCard key={category.title} {...category} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Publications Section */}
            <section className="py-16 px-4 sm:px-8 lg:px-12">
                <div className="max-w-6xl mx-auto">
                    <div className="flex items-center justify-between mb-12">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900">Featured Publications</h2>
                            <p className="text-gray-600 mt-2">Discover our most popular and highly-rated content</p>
                        </div>
                        <button
                            onClick={() => navigate('/library/browse')}
                            className="hidden sm:inline-block px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors font-semibold"
                        >
                            View All
                        </button>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {featuredPublications.map((publication) => (
                            <PublicationCard key={publication.id} publication={publication} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Seasonal Campaigns / Informational Section */}
            <section className="py-16 px-4 sm:px-8 lg:px-12 bg-indigo-50">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white rounded-lg p-8 text-center">
                            <div className="text-4xl font-bold text-indigo-600 mb-2">10M+</div>
                            <p className="text-gray-600">Publications Available</p>
                        </div>
                        <div className="bg-white rounded-lg p-8 text-center">
                            <div className="text-4xl font-bold text-indigo-600 mb-2">500K+</div>
                            <p className="text-gray-600">Active Users</p>
                        </div>
                        <div className="bg-white rounded-lg p-8 text-center">
                            <div className="text-4xl font-bold text-indigo-600 mb-2">4.8★</div>
                            <p className="text-gray-600">Average Rating</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default LibraryHome
