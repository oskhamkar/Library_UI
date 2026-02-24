import { useEffect, useMemo, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import {
    HiOutlineBookmark,
    HiOutlineBookmarkAlt,
    HiOutlineAcademicCap,
} from 'react-icons/hi'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import type { LibraryItem } from '@/@types/library'
import { apiGetLibraryItem } from '@/services/LibraryService'
import useAuth from '@/utils/hooks/useAuth'
import appConfig from '@/configs/app.config'
import { REDIRECT_URL_KEY } from '@/constants/app.constant'

const MAX_RECENT = 8

const ItemDetails = () => {
    const navigate = useNavigate()
    const { id } = useParams<{ id: string }>()
    const { authenticated } = useAuth()

    const [item, setItem] = useState<LibraryItem | null>(null)
    const [loading, setLoading] = useState(true)
    const [previewOpen, setPreviewOpen] = useState(false)
    const [bookmarked, setBookmarked] = useState(false)

    useEffect(() => {
        let mounted = true
        const load = async () => {
            if (!id) return
            try {
                const resp = await apiGetLibraryItem(id)
                if (!mounted) return
                setItem(resp.data || null)
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
    }, [id])

    useEffect(() => {
        if (!id || !item) return
        try {
            const raw = localStorage.getItem('library_recent')
            const current: string[] = raw ? JSON.parse(raw) : []
            const without = current.filter((x) => x !== id)
            const updated = [id, ...without].slice(0, MAX_RECENT)
            localStorage.setItem('library_recent', JSON.stringify(updated))
        } catch {
            // ignore
        }
    }, [id, item])

    useEffect(() => {
        if (!id) return
        try {
            const raw = localStorage.getItem('library_bookmarks')
            const current: string[] = raw ? JSON.parse(raw) : []
            setBookmarked(current.includes(id))
        } catch {
            setBookmarked(false)
        }
    }, [id])

    const handleToggleBookmark = () => {
        if (!id || !item) return
        try {
            const raw = localStorage.getItem('library_bookmarks')
            const current: string[] = raw ? JSON.parse(raw) : []
            let updated: string[]
            if (current.includes(id)) {
                updated = current.filter((x) => x !== id)
                setBookmarked(false)
            } else {
                updated = [...current, id]
                setBookmarked(true)
            }
            localStorage.setItem('library_bookmarks', JSON.stringify(updated))
        } catch {
            // ignore
        }
    }

    const handleBuyNow = () => {
        if (!id || !item) return
        const checkoutPath = `/checkout/${id}`
        if (!authenticated) {
            const params = new URLSearchParams()
            params.set(REDIRECT_URL_KEY, checkoutPath)
            navigate(`${appConfig.unAuthenticatedEntryPath}?${params.toString()}`)
            return
        }
        navigate(checkoutPath)
    }

    const tags = useMemo(() => item?.tags || [], [item])

    const handleAddToCart = () => {
        if (!id || !item) return
        try {
            const raw = localStorage.getItem('library_cart')
            const current: string[] = raw ? JSON.parse(raw) : []
            if (!current.includes(id)) {
                current.push(id)
            }
            localStorage.setItem('library_cart', JSON.stringify(current))
        } catch {
            // ignore
        }
    }

    if (loading) {
        return (
            <div className="flex items-center justify-center h-full">
                <div className="text-sm text-gray-500">Loading publication details…</div>
            </div>
        )
    }

    if (!item) {
        return (
            <div className="flex items-center justify-center h-full">
                <div className="text-sm text-gray-500">
                    We could not find this publication.
                </div>
            </div>
        )
    }

    return (
        <div className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,2.2fr)_minmax(0,1.4fr)] gap-8">
                <div className="flex items-start gap-6">
                    <div className="w-40 sm:w-48 lg:w-56 flex-shrink-0">
                        <div className="aspect-[3/4] overflow-hidden rounded-md bg-gray-100 dark:bg-gray-700 shadow">
                            <img
                                src={item.coverImage || item.thumbnail}
                                alt={item.title}
                                className="h-full w-full object-cover"
                            />
                        </div>
                    </div>
                    <div className="flex-1 space-y-3">
                        <h1 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-gray-50">
                            {item.title}
                        </h1>
                        <p className="text-xs font-semibold uppercase text-gray-500">
                            {item.category === 'books' ? 'Book' : item.category}
                        </p>
                        <div className="border-b border-dashed border-gray-300 pb-2 text-[11px] text-gray-600 dark:text-gray-300 space-y-1">
                            <p>
                                <span className="font-semibold">Categories:</span> {item.department}
                                {' | '}
                                <span className="font-semibold">Publisher Name:</span>{' '}
                                {item.publisher}
                                {' | '}
                                <span className="font-semibold">Year:</span> {item.year}
                            </p>
                            <p>
                                <span className="font-semibold">Author Name:</span> {item.author}
                            </p>
                        </div>
                        <div className="text-[11px] text-gray-600 dark:text-gray-300 space-y-1">
                            <p>
                                <span className="font-semibold">Edition:</span> First (demo)
                                {' | '}
                                <span className="font-semibold">Exclusive:</span> Yes
                                {' | '}
                                <span className="font-semibold">Condition:</span> New
                                {' | '}
                                <span className="font-semibold">Binding:</span> Soft bound
                            </p>
                        </div>
                        {tags.length > 0 && (
                            <div className="flex flex-wrap gap-2 pt-1">
                                {tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="inline-flex items-center rounded-full bg-blue-50 dark:bg-sky-900/40 px-2.5 py-0.5 text-[11px] font-medium text-blue-700 dark:text-sky-200"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        )}
                    </div>
                </div>

                <Card header="Purchase options" bodyClass="space-y-3 text-xs text-gray-700 dark:text-gray-200">
                    <div className="space-y-2">
                        <div className="flex items-center justify-between">
                            <span className="font-semibold">Format</span>
                            <span className="font-semibold">Year</span>
                            <span className="font-semibold">Price</span>
                            <span className="font-semibold sr-only">Actions</span>
                        </div>
                        <div className="h-px bg-gray-200 dark:bg-gray-700" />
                    </div>
                    <div className="space-y-2">
                        <div className="grid grid-cols-[minmax(0,1.2fr)_minmax(0,0.6fr)_minmax(0,1fr)_minmax(0,1.4fr)] items-center gap-2 py-2 border-b border-gray-100 dark:border-gray-700">
                            <span>Print</span>
                            <span className="text-center">{item.year}</span>
                            <span className="font-semibold text-orange-600">
                                ₹ {(item.price * 1.0).toFixed(0)}
                            </span>
                            <div className="flex justify-end gap-2">
                                <Button
                                    size="xs"
                                    variant="plain"
                                    onClick={handleAddToCart}
                                >
                                    Add to cart
                                </Button>
                                <Button
                                    size="xs"
                                    variant="solid"
                                    color="blue-600"
                                    onClick={handleBuyNow}
                                >
                                    Buy now
                                </Button>
                            </div>
                        </div>
                        <div className="grid grid-cols-[minmax(0,1.2fr)_minmax(0,0.6fr)_minmax(0,1fr)_minmax(0,1.4fr)] items-center gap-2 py-2">
                            <span>Online</span>
                            <span className="text-center">{item.year}</span>
                            <span className="font-semibold text-orange-600">
                                ₹ {(item.price * 0.8).toFixed(0)}
                            </span>
                            <div className="flex justify-end gap-2">
                                <Button
                                    size="xs"
                                    variant="plain"
                                    onClick={handleAddToCart}
                                >
                                    Add to cart
                                </Button>
                                <Button
                                    size="xs"
                                    variant="solid"
                                    color="blue-600"
                                    onClick={handleBuyNow}
                                >
                                    Buy now
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div className="pt-2 flex items-center justify-between">
                        <div className="space-y-1">
                            <p>• Free campus-wide delivery for online access.</p>
                            <p>• Access will appear immediately in your My Library dashboard.</p>
                        </div>
                        <Button
                            variant="plain"
                            size="sm"
                            className="flex items-center gap-1 text-blue-600 dark:text-sky-300"
                            onClick={handleToggleBookmark}
                        >
                            {bookmarked ? (
                                <>
                                    <HiOutlineBookmarkAlt />
                                    <span>Bookmarked</span>
                                </>
                            ) : (
                                <>
                                    <HiOutlineBookmark />
                                    <span>Bookmark</span>
                                </>
                            )}
                        </Button>
                    </div>
                </Card>
            </div>

            <Card header="Description" bodyClass="space-y-2 text-sm leading-relaxed">
                <p className="text-gray-700 dark:text-gray-200">{item.description}</p>
            </Card>

            {previewOpen && (
                <Card
                    header="Preview (sample pages)"
                    bodyClass="space-y-2 text-sm leading-relaxed text-gray-600 dark:text-gray-200"
                >
                    <p>
                        This is a limited preview section intended to mirror how a real
                        document viewer would appear in the platform. In a production
                        environment, this would embed a secure PDF or HTML reader.
                    </p>
                    <p className="text-xs text-gray-500">
                        Preview access lets readers validate relevance before purchasing full
                        access to the publication.
                    </p>
                </Card>
            )}
        </div>
    )
}

export default ItemDetails

