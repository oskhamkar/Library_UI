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
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,2fr)_minmax(0,1.5fr)] gap-8">
            <div className="space-y-4">
                <div className="flex items-start gap-4">
                    <div className="w-40 sm:w-48 lg:w-56 flex-shrink-0">
                        <div className="aspect-[3/4] overflow-hidden rounded-xl bg-gray-100 dark:bg-gray-700 shadow-md">
                            <img
                                src={item.coverImage || item.thumbnail}
                                alt={item.title}
                                className="h-full w-full object-cover"
                            />
                        </div>
                    </div>
                    <div className="flex-1 space-y-2">
                        <div className="flex items-center gap-2 text-xs text-blue-600 dark:text-sky-300">
                            <HiOutlineAcademicCap />
                            <span className="uppercase tracking-wide">
                                {item.category.toUpperCase()}
                            </span>
                        </div>
                        <h1 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-gray-50">
                            {item.title}
                        </h1>
                        <p className="text-sm text-gray-700 dark:text-gray-300">
                            {item.author} • {item.publisher}
                        </p>
                        <p className="text-xs text-gray-500">
                            {item.department} • {item.year}
                        </p>

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
                            Preview access lets readers validate relevance before purchasing
                            full access to the publication.
                        </p>
                    </Card>
                )}
            </div>

            <div className="space-y-4">
                <Card bodyClass="space-y-4">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-xs text-gray-500 uppercase font-semibold">
                                Access price
                            </p>
                            <p className="mt-1 text-2xl font-semibold text-gray-900 dark:text-gray-50">
                                ${item.price.toFixed(2)}
                            </p>
                        </div>
                        <Button
                            variant="plain"
                            size="sm"
                            className="flex items-center gap-1 text-xs text-blue-600 dark:text-sky-300"
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
                    <div className="space-y-2 text-xs text-gray-600 dark:text-gray-300">
                        <p>• Unlimited re-access from your personal dashboard.</p>
                        <p>• Single-institution academic license (demo).</p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <Button
                            variant="twoTone"
                            className="w-full"
                            onClick={() => setPreviewOpen(true)}
                        >
                            Preview (limited)
                        </Button>
                        <Button
                            variant="solid"
                            color="blue-600"
                            className="w-full"
                            onClick={handleBuyNow}
                        >
                            Buy now
                        </Button>
                    </div>
                </Card>

                <Card header="Access information" bodyClass="space-y-2 text-xs text-gray-600 dark:text-gray-300">
                    <p>• Login is required before completing any purchase.</p>
                    <p>
                        • Once purchased, this title will appear in{' '}
                        <span className="font-medium">My Library</span> along with your reading
                        history.
                    </p>
                </Card>
            </div>
        </div>
    )
}

export default ItemDetails

