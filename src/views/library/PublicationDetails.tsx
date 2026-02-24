import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import {
    HiStar,
    HiOutlineBookmark,
    HiBookmark,
    HiArrowLeft,
    HiEye,
    HiShoppingCart,
    HiCheckCircle,
} from 'react-icons/hi'
import { mockPublications } from '@/mock/data/library'
import classNames from 'classnames'

const PublicationDetails = () => {
    const { id } = useParams<{ id: string }>()
    const navigate = useNavigate()
    const [isBookmarked, setIsBookmarked] = useState(false)
    const [showAddedToCart, setShowAddedToCart] = useState(false)

    const publication = mockPublications.find((pub) => pub.id === id)

    if (!publication) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-gray-900 mb-4">Publication not found</h1>
                    <button
                        onClick={() => navigate('/library')}
                        className="text-indigo-600 hover:text-indigo-700 font-semibold"
                    >
                        Back to Library
                    </button>
                </div>
            </div>
        )
    }

    const handleAddToCart = () => {
        setShowAddedToCart(true)
        setTimeout(() => setShowAddedToCart(false), 2000)
        // Integration point: Add to cart logic
    }

    const handleCheckout = () => {
        navigate('/library/checkout', {
            state: {
                items: [
                    {
                        id: publication.id,
                        publication,
                        quantity: 1,
                        addedDate: new Date().toISOString(),
                    },
                ],
            },
        })
    }

    const badgeColor: Record<string, string> = {
        'research-paper': 'bg-blue-100 text-blue-800',
        journal: 'bg-purple-100 text-purple-800',
        magazine: 'bg-green-100 text-green-800',
        book: 'bg-orange-100 text-orange-800',
    }

    const categoryColor: Record<string, string> = {
        science: 'bg-blue-50 text-blue-700 border-blue-200',
        technology: 'bg-purple-50 text-purple-700 border-purple-200',
        business: 'bg-orange-50 text-orange-700 border-orange-200',
        health: 'bg-red-50 text-red-700 border-red-200',
        education: 'bg-green-50 text-green-700 border-green-200',
        humanities: 'bg-indigo-50 text-indigo-700 border-indigo-200',
    }

    return (
        <div className="bg-white">
            {/* Breadcrumb */}
            <div className="border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 py-4">
                    <button
                        onClick={() => navigate(-1)}
                        className="flex items-center gap-2 text-indigo-600 hover:text-indigo-700 font-semibold"
                    >
                        <HiArrowLeft className="w-5 h-5" />
                        Back
                    </button>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Left: Cover Image */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-24">
                            <div className="bg-gray-100 rounded-lg overflow-hidden mb-6 aspect-[3/4]">
                                <img
                                    src={publication.coverImage}
                                    alt={publication.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Action Buttons */}
                            <div className="space-y-3">
                                <button
                                    onClick={handleCheckout}
                                    className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 rounded-lg transition-colors flex items-center justify-center gap-2"
                                >
                                    <HiShoppingCart className="w-5 h-5" />
                                    Buy Now
                                </button>

                                <button
                                    onClick={handleAddToCart}
                                    className="w-full border border-indigo-600 text-indigo-600 hover:bg-indigo-50 font-semibold py-3 rounded-lg transition-colors"
                                >
                                    {showAddedToCart ? (
                                        <>
                                            <HiCheckCircle className="w-5 h-5 inline mr-2" />
                                            Added to Cart
                                        </>
                                    ) : (
                                        <>
                                            <HiShoppingCart className="w-5 h-5 inline mr-2" />
                                            Add to Cart
                                        </>
                                    )}
                                </button>

                                <button
                                    onClick={() => setIsBookmarked(!isBookmarked)}
                                    className={classNames(
                                        'w-full font-semibold py-3 rounded-lg transition-colors flex items-center justify-center gap-2',
                                        isBookmarked
                                            ? 'bg-yellow-50 text-yellow-700 border border-yellow-200'
                                            : 'bg-gray-50 text-gray-700 border border-gray-200 hover:bg-gray-100'
                                    )}
                                >
                                    {isBookmarked ? (
                                        <>
                                            <HiBookmark className="w-5 h-5" />
                                            Bookmarked
                                        </>
                                    ) : (
                                        <>
                                            <HiOutlineBookmark className="w-5 h-5" />
                                            Bookmark
                                        </>
                                    )}
                                </button>
                            </div>

                            {/* Preview Button */}
                            <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200 text-center">
                                <button className="text-blue-700 hover:text-blue-800 font-semibold flex items-center justify-center gap-2 w-full">
                                    <HiEye className="w-5 h-5" />
                                    Preview Content
                                </button>
                                <p className="text-xs text-blue-600 mt-2">Limited preview available</p>
                            </div>
                        </div>
                    </div>

                    {/* Right: Content */}
                    <div className="lg:col-span-2">
                        {/* Badge & Type */}
                        <div className="flex items-center gap-3 mb-4">
                            <span
                                className={classNames('px-3 py-1 rounded-full text-sm font-semibold capitalize', badgeColor[publication.publicationType])}
                            >
                                {publication.publicationType.replace('-', ' ')}
                            </span>
                            {publication.isFeatured && (
                                <span className="px-3 py-1 rounded-full text-sm font-bold bg-yellow-100 text-yellow-800">
                                    Featured
                                </span>
                            )}
                        </div>

                        {/* Title */}
                        <h1 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">{publication.title}</h1>

                        {/* Author & Publisher */}
                        <div className="mb-6">
                            <p className="text-lg text-gray-600 mb-2">
                                by <span className="font-semibold text-gray-900">{publication.author}</span>
                            </p>
                            <p className="text-gray-600">
                                Published by <span className="font-semibold">{publication.publisher}</span> • {publication.year}
                            </p>
                        </div>

                        {/* Rating */}
                        <div className="flex items-center gap-4 mb-8 pb-8 border-b border-gray-200">
                            <div className="flex items-center gap-2">
                                {[...Array(5)].map((_, i) => (
                                    <HiStar
                                        key={i}
                                        className={classNames(
                                            'w-5 h-5',
                                            i < Math.floor(publication.rating || 0) ? 'text-amber-400' : 'text-gray-300'
                                        )}
                                        fill="currentColor"
                                    />
                                ))}
                            </div>
                            <span className="text-gray-700">
                                {publication.rating} <span className="text-gray-500">({publication.reviewCount} reviews)</span>
                            </span>
                        </div>

                        {/* Key Info Grid */}
                        <div className="grid grid-cols-2 gap-6 mb-8 pb-8 border-b border-gray-200">
                            <div>
                                <p className="text-sm text-gray-600 mb-1">Category</p>
                                <p className="font-semibold text-gray-900 capitalize">{publication.category}</p>
                            </div>
                            {publication.department && (
                                <div>
                                    <p className="text-sm text-gray-600 mb-1">Department</p>
                                    <p className="font-semibold text-gray-900">{publication.department}</p>
                                </div>
                            )}
                            {publication.pages && (
                                <div>
                                    <p className="text-sm text-gray-600 mb-1">Pages</p>
                                    <p className="font-semibold text-gray-900">{publication.pages}</p>
                                </div>
                            )}
                            {publication.isbnOrIssn && (
                                <div>
                                    <p className="text-sm text-gray-600 mb-1">ISBN/ISSN</p>
                                    <p className="font-mono text-sm font-semibold text-gray-900">{publication.isbnOrIssn}</p>
                                </div>
                            )}
                        </div>

                        {/* Description */}
                        <div className="mb-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">About this publication</h2>
                            <p className="text-gray-700 leading-relaxed text-lg">{publication.description}</p>
                        </div>

                        {/* Tags */}
                        {publication.tags && publication.tags.length > 0 && (
                            <div className="mb-8">
                                <h3 className="font-semibold text-gray-900 mb-3">Topics</h3>
                                <div className="flex flex-wrap gap-2">
                                    {publication.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 transition-colors cursor-pointer"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Price Highlight */}
                        <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-6">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-gray-600 mb-2">Unlock full access for</p>
                                    <p className="text-4xl font-bold text-indigo-600">${publication.price.toFixed(2)}</p>
                                </div>
                                <div className="text-right">
                                    <p className="text-sm text-gray-600 mb-4">One-time purchase</p>
                                    <button
                                        onClick={handleCheckout}
                                        className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-lg transition-colors"
                                    >
                                        Purchase Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PublicationDetails
