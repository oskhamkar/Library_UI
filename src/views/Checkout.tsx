import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import Radio from '@/components/ui/Radio'
import type { LibraryItem } from '@/@types/library'
import { apiGetLibraryItem } from '@/services/LibraryService'

type PaymentMethod = 'card' | 'upi' | 'netbanking' | 'wallet'

const Checkout = () => {
    const navigate = useNavigate()
    const { id } = useParams<{ id: string }>()

    const [item, setItem] = useState<LibraryItem | null>(null)
    const [loading, setLoading] = useState(true)
    const [method, setMethod] = useState<PaymentMethod>('card')
    const [submitting, setSubmitting] = useState(false)

    useEffect(() => {
        let mounted = true
        const load = async () => {
            if (!id) return
            try {
                const resp = await apiGetLibraryItem(id)
                if (!mounted) return
                setItem(resp.data || null)
            } finally {
                if (mounted) setLoading(false)
            }
        }
        load()
        return () => {
            mounted = false
        }
    }, [id])

    const handleConfirm = () => {
        if (!item || !id) return
        setSubmitting(true)
        setTimeout(() => {
            try {
                const raw = localStorage.getItem('library_purchases')
                const current: { id: string; purchasedAt: string }[] = raw
                    ? JSON.parse(raw)
                    : []
                current.push({ id, purchasedAt: new Date().toISOString() })
                localStorage.setItem('library_purchases', JSON.stringify(current))
            } catch {
                // ignore
            }
            setSubmitting(false)
            navigate(`/checkout/success?id=${id}`)
        }, 600)
    }

    if (loading) {
        return (
            <div className="flex items-center justify-center h-full">
                <div className="text-sm text-gray-500">Preparing checkout…</div>
            </div>
        )
    }

    if (!item) {
        return (
            <div className="flex items-center justify-center h-full">
                <div className="text-sm text-gray-500">
                    We could not find this publication for checkout.
                </div>
            </div>
        )
    }

    return (
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,2fr)_minmax(0,1.5fr)] gap-6">
            <Card header="Order summary" bodyClass="space-y-4">
                <div className="flex gap-4">
                    <div className="w-24 flex-shrink-0">
                        <div className="aspect-[3/4] overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-700">
                            <img
                                src={item.thumbnail || item.coverImage}
                                alt={item.title}
                                className="h-full w-full object-cover"
                            />
                        </div>
                    </div>
                    <div className="flex-1 space-y-1">
                        <p className="text-sm font-semibold text-gray-900 dark:text-gray-50">
                            {item.title}
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                            {item.author}
                        </p>
                        <p className="text-xs text-gray-400">
                            {item.department} • {item.year}
                        </p>
                    </div>
                    <div className="text-right">
                        <p className="text-sm font-semibold text-gray-900 dark:text-gray-50">
                            ${item.price.toFixed(2)}
                        </p>
                    </div>
                </div>
                <div className="border-t border-gray-200 dark:border-gray-700 pt-4 text-sm space-y-1">
                    <div className="flex items-center justify-between">
                        <span className="text-gray-500">Subtotal</span>
                        <span>${item.price.toFixed(2)}</span>
                    </div>
                    <div className="flex items-center justify-between">
                        <span className="text-gray-500">Institutional access fee</span>
                        <span>$0.00</span>
                    </div>
                    <div className="flex items-center justify-between font-semibold pt-2">
                        <span>Total</span>
                        <span>${item.price.toFixed(2)}</span>
                    </div>
                </div>
            </Card>

            <Card header="Payment method" bodyClass="space-y-4">
                <div className="space-y-3 text-sm">
                    <Radio
                        checked={method === 'card'}
                        onChange={() => setMethod('card')}
                    >
                        Credit / Debit card
                    </Radio>
                    <Radio checked={method === 'upi'} onChange={() => setMethod('upi')}>
                        UPI / QR
                    </Radio>
                    <Radio
                        checked={method === 'netbanking'}
                        onChange={() => setMethod('netbanking')}
                    >
                        Net banking
                    </Radio>
                    <Radio
                        checked={method === 'wallet'}
                        onChange={() => setMethod('wallet')}
                    >
                        Campus wallet (demo)
                    </Radio>
                </div>
                <div className="pt-2 text-xs text-gray-500 space-y-1">
                    <p>This is a demo checkout – no real payment is processed.</p>
                    <p>
                        Confirming purchase will grant you access via the{' '}
                        <span className="font-medium">My Library</span> dashboard.
                    </p>
                </div>
                <div className="pt-2 flex flex-col gap-2">
                    <Button
                        variant="solid"
                        color="blue-600"
                        className="w-full"
                        loading={submitting}
                        onClick={handleConfirm}
                    >
                        Confirm purchase
                    </Button>
                    <Button
                        variant="plain"
                        className="w-full"
                        onClick={() => navigate(-1)}
                    >
                        Back
                    </Button>
                </div>
            </Card>
        </div>
    )
}

export default Checkout

