import { useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { HiOutlineCheckCircle } from 'react-icons/hi'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import type { LibraryItem } from '@/@types/library'
import { apiGetLibraryItem } from '@/services/LibraryService'

const CheckoutSuccess = () => {
    const navigate = useNavigate()
    const [searchParams] = useSearchParams()
    const id = searchParams.get('id') || ''

    const [item, setItem] = useState<LibraryItem | null>(null)

    useEffect(() => {
        let mounted = true
        const load = async () => {
            if (!id) return
            try {
                const resp = await apiGetLibraryItem(id)
                if (!mounted) return
                setItem(resp.data || null)
            } catch {
                // ignore
            }
        }
        load()
        return () => {
            mounted = false
        }
    }, [id])

    return (
        <div className="flex items-center justify-center h-full">
            <Card className="max-w-lg w-full" bodyClass="space-y-4">
                <div className="flex items-center gap-3">
                    <div className="h-10 w-10 flex items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                        <HiOutlineCheckCircle className="text-xl" />
                    </div>
                    <div>
                        <p className="text-sm font-semibold text-gray-900 dark:text-gray-50">
                            Purchase successful
                        </p>
                        <p className="text-xs text-gray-500">
                            Access to your publication has been added to your account.
                        </p>
                    </div>
                </div>

                {item && (
                    <div className="flex gap-3 text-sm">
                        <div className="w-16 flex-shrink-0">
                            <div className="aspect-[3/4] overflow-hidden rounded-md bg-gray-100 dark:bg-gray-700">
                                <img
                                    src={item.thumbnail || item.coverImage}
                                    alt={item.title}
                                    className="h-full w-full object-cover"
                                />
                            </div>
                        </div>
                        <div className="flex-1 space-y-1">
                            <p className="font-medium text-gray-900 dark:text-gray-50 line-clamp-2">
                                {item.title}
                            </p>
                            <p className="text-xs text-gray-500">{item.author}</p>
                            <p className="text-xs text-gray-400">
                                {item.department} • {item.year}
                            </p>
                        </div>
                    </div>
                )}

                <div className="pt-2 flex flex-col sm:flex-row gap-2 sm:justify-end">
                    {item && (
                        <Button
                            variant="twoTone"
                            className="sm:w-auto"
                            onClick={() => navigate(`/item/${item.id}`)}
                        >
                            Start reading
                        </Button>
                    )}
                    <Button
                        variant="solid"
                        color="blue-600"
                        className="sm:w-auto"
                        onClick={() => navigate('/dashboard')}
                    >
                        Go to My Library
                    </Button>
                </div>
            </Card>
        </div>
    )
}

export default CheckoutSuccess

