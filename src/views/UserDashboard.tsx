import { useEffect, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import type { LibraryItem } from '@/@types/library'
import { apiGetLibraryItems } from '@/services/LibraryService'
import { useAppSelector } from '@/store'
import useAuth from '@/utils/hooks/useAuth'

type PurchaseRecord = {
    id: string
    purchasedAt: string
}

const UserDashboard = () => {
    const navigate = useNavigate()
    const { signOut } = useAuth()
    const user = useAppSelector((state) => state.auth.user)

    const [items, setItems] = useState<LibraryItem[]>([])
    const [purchases, setPurchases] = useState<PurchaseRecord[]>([])
    const [recentIds, setRecentIds] = useState<string[]>([])

    useEffect(() => {
        let mounted = true
        const load = async () => {
            try {
                const resp = await apiGetLibraryItems()
                if (!mounted) return
                setItems(resp.data || [])
            } catch {
                // ignore
            }
        }
        load()
        return () => {
            mounted = false
        }
    }, [])

    useEffect(() => {
        try {
            const rawPurchases = localStorage.getItem('library_purchases')
            const parsedPurchases: PurchaseRecord[] = rawPurchases
                ? JSON.parse(rawPurchases)
                : []
            setPurchases(parsedPurchases)

            const rawRecent = localStorage.getItem('library_recent')
            const parsedRecent: string[] = rawRecent ? JSON.parse(rawRecent) : []
            setRecentIds(parsedRecent)
        } catch {
            setPurchases([])
            setRecentIds([])
        }
    }, [])

    const purchasedItems = useMemo(() => {
        const byId = new Map(items.map((i) => [i.id, i]))
        return purchases
            .map((p) => ({ ...p, item: byId.get(p.id) }))
            .filter((p) => p.item) as (PurchaseRecord & { item: LibraryItem })[]
    }, [items, purchases])

    const recentItems = useMemo(() => {
        const byId = new Map(items.map((i) => [i.id, i]))
        return recentIds
            .map((id) => byId.get(id))
            .filter((x): x is LibraryItem => Boolean(x))
    }, [items, recentIds])

    const isAdmin = (user.authority || []).includes('admin')

    return (
        <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-[minmax(0,2.2fr)_minmax(0,1.3fr)] gap-6">
                <Card header="Purchased items" bodyClass="space-y-3">
                    {purchasedItems.length === 0 ? (
                        <p className="text-sm text-gray-500">
                            You have not purchased any publications yet.
                        </p>
                    ) : (
                        <div className="space-y-3">
                            {purchasedItems.map((p) => (
                                <div
                                    key={`${p.id}-${p.purchasedAt}`}
                                    className="flex items-center gap-3"
                                >
                                    <div className="w-14 flex-shrink-0">
                                        <div className="aspect-[3/4] overflow-hidden rounded-md bg-gray-100 dark:bg-gray-700">
                                            <img
                                                src={p.item.thumbnail || p.item.coverImage}
                                                alt={p.item.title}
                                                className="h-full w-full object-cover"
                                            />
                                        </div>
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className="text-sm font-medium text-gray-900 dark:text-gray-50 truncate">
                                            {p.item.title}
                                        </p>
                                        <p className="text-xs text-gray-500 truncate">
                                            {p.item.author}
                                        </p>
                                        <p className="text-[11px] text-gray-400">
                                            Purchased on{' '}
                                            {new Date(p.purchasedAt).toLocaleDateString()}
                                        </p>
                                    </div>
                                    <Button
                                        size="xs"
                                        variant="plain"
                                        className="text-blue-600 dark:text-sky-300"
                                        onClick={() => navigate(`/item/${p.item.id}`)}
                                    >
                                        Open
                                    </Button>
                                </div>
                            ))}
                        </div>
                    )}
                </Card>

                <Card header="Profile & settings" bodyClass="space-y-4">
                    <div className="flex items-center gap-3">
                        <div className="h-10 w-10 flex items-center justify-center rounded-full bg-blue-600 text-white text-sm font-semibold uppercase">
                            {user.userName
                                ? user.userName
                                      .split(' ')
                                      .map((p) => p[0])
                                      .join('')
                                      .slice(0, 2)
                                : 'U'}
                        </div>
                        <div>
                            <p className="text-sm font-semibold text-gray-900 dark:text-gray-50">
                                {user.userName || 'Library user'}
                            </p>
                            <p className="text-xs text-gray-500">{user.email}</p>
                            <p className="text-[11px] text-gray-400">
                                Roles: {(user.authority || []).join(', ') || 'User'}
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <Button
                            size="sm"
                            variant="twoTone"
                            className="w-full"
                            onClick={() => navigate('/catalog')}
                        >
                            Browse catalog
                        </Button>
                        {isAdmin && (
                            <Button
                                size="sm"
                                variant="plain"
                                className="w-full"
                                onClick={() => navigate('/admin')}
                            >
                                Open admin panel
                            </Button>
                        )}
                        <Button
                            size="sm"
                            variant="plain"
                            className="w-full text-red-600"
                            onClick={signOut}
                        >
                            Logout
                        </Button>
                    </div>
                </Card>
            </div>

            <Card header="Reading history" bodyClass="space-y-3">
                {recentItems.length === 0 ? (
                    <p className="text-sm text-gray-500">
                        Your reading history will appear here as you open publications.
                    </p>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                        {recentItems.map((item) => (
                            <div
                                key={item.id}
                                className="flex items-center gap-3 cursor-pointer"
                                onClick={() => navigate(`/item/${item.id}`)}
                            >
                                <div className="w-12 flex-shrink-0">
                                    <div className="aspect-[3/4] overflow-hidden rounded-md bg-gray-100 dark:bg-gray-700">
                                        <img
                                            src={item.thumbnail || item.coverImage}
                                            alt={item.title}
                                            className="h-full w-full object-cover"
                                        />
                                    </div>
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="text-xs font-medium text-gray-900 dark:text-gray-50 truncate">
                                        {item.title}
                                    </p>
                                    <p className="text-[11px] text-gray-500 truncate">
                                        {item.author}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </Card>
        </div>
    )
}

export default UserDashboard

