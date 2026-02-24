import { useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { HiStar, HiOutlineBookmark, HiBookmark } from 'react-icons/hi'
import Card from './Card'
import { Publication } from '@/@types/library'
import classNames from 'classnames'

interface PublicationCardProps {
    publication: Publication
    isBookmarked?: boolean
    onBookmarkChange?: (publicationId: string, isBookmarked: boolean) => void
}

const PublicationCard = ({ publication, isBookmarked = false, onBookmarkChange }: PublicationCardProps) => {
    const navigate = useNavigate()

    const badgeColor = useMemo(() => {
        const colors: Record<string, string> = {
            'research-paper': 'bg-blue-100 text-blue-800',
            journal: 'bg-purple-100 text-purple-800',
            magazine: 'bg-green-100 text-green-800',
            book: 'bg-orange-100 text-orange-800',
        }
        return colors[publication.publicationType] || 'bg-gray-100 text-gray-800'
    }, [publication.publicationType])

    const handleBookmarkClick = (e: React.MouseEvent) => {
        e.stopPropagation()
        onBookmarkChange?.(publication.id, !isBookmarked)
    }

    const handleViewDetails = () => {
        navigate(`/library/publication/${publication.id}`)
    }

    return (
        <Card clickable onClick={handleViewDetails} className="overflow-hidden h-full flex flex-col">
            {/* Image Container */}
            <div className="relative w-full h-56 bg-gray-100 overflow-hidden">
                <img
                    src={publication.thumbnail}
                    alt={publication.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />

                {/* Badge */}
                <div
                    className={classNames(
                        'absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold capitalize',
                        badgeColor
                    )}
                >
                    {publication.publicationType.replace('-', ' ')}
                </div>

                {/* Bookmark Button */}
                <button
                    onClick={handleBookmarkClick}
                    className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow"
                >
                    {isBookmarked ? (
                        <HiBookmark className="w-5 h-5 text-amber-500" />
                    ) : (
                        <HiOutlineBookmark className="w-5 h-5 text-gray-400" />
                    )}
                </button>

                {/* Featured Badge */}
                {publication.isFeatured && (
                    <div className="absolute bottom-3 left-3 bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-xs font-bold">
                        Featured
                    </div>
                )}
            </div>

            {/* Content */}
            <div className="p-4 flex-grow flex flex-col">
                {/* Title */}
                <h3 className="text-sm font-bold text-gray-900 line-clamp-2 mb-2">{publication.title}</h3>

                {/* Author */}
                <p className="text-xs text-gray-600 mb-3">{publication.author}</p>

                {/* Description */}
                <p className="text-xs text-gray-500 line-clamp-2 mb-3 flex-grow">{publication.shortDescription}</p>

                {/* Rating and Reviews */}
                {publication.rating && (
                    <div className="flex items-center gap-1 mb-3">
                        <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                                <HiStar
                                    key={i}
                                    className={classNames(
                                        'w-4 h-4',
                                        i < Math.floor(publication.rating || 0) ? 'text-amber-400' : 'text-gray-300'
                                    )}
                                    fill="currentColor"
                                />
                            ))}
                        </div>
                        <span className="text-xs text-gray-600">
                            {publication.rating} ({publication.reviewCount || 0} reviews)
                        </span>
                    </div>
                )}

                {/* Footer - Year and Price */}
                <div className="flex items-center justify-between pt-3 border-t border-gray-200">
                    <span className="text-xs text-gray-500">{publication.year}</span>
                    <div className="text-right">
                        <span className="text-lg font-bold text-indigo-600">${publication.price.toFixed(2)}</span>
                    </div>
                </div>
            </div>
        </Card>
    )
}

export default PublicationCard
