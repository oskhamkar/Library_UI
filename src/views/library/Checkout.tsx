import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { HiArrowLeft, HiCheckCircle, HiTrash } from 'react-icons/hi'
import { CartItem, Publication } from '@/@types/library'

const Checkout = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const [currentStep, setCurrentStep] = useState<'cart' | 'payment' | 'confirmation'>('payment')
    const [paymentMethod, setPaymentMethod] = useState<'credit-card' | 'debit-card' | 'paypal' | 'bank-transfer'>(
        'credit-card'
    )
    const [isProcessing, setIsProcessing] = useState(false)

    // Get cart items from navigation state
    const items = (location.state?.items as CartItem[]) || []
    const subtotal = items.reduce((sum, item) => sum + item.publication.price * item.quantity, 0)
    const tax = subtotal * 0.08
    const total = subtotal + tax

    const handleRemoveItem = (id: string) => {
        // In a real app, this would update the cart
    }

    const handleProcessPayment = async () => {
        setIsProcessing(true)
        // Simulate payment processing
        await new Promise((resolve) => setTimeout(resolve, 2000))
        setIsProcessing(false)
        setCurrentStep('confirmation')
    }

    if (items.length === 0 && currentStep !== 'confirmation') {
        return (
            <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-8 lg:px-12">
                <div className="max-w-2xl mx-auto">
                    <div className="text-center">
                        <h1 className="text-2xl font-bold text-gray-900 mb-4">Your cart is empty</h1>
                        <p className="text-gray-600 mb-8">Add some publications to your cart before proceeding to checkout.</p>
                        <button
                            onClick={() => navigate('/library')}
                            className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors font-semibold"
                        >
                            Continue Shopping
                        </button>
                    </div>
                </div>
            </div>
        )
    }

    // Confirmation page
    if (currentStep === 'confirmation') {
        return (
            <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-8 lg:px-12">
                <div className="max-w-2xl mx-auto">
                    <div className="bg-white rounded-lg shadow-lg p-8 text-center">
                        <div className="flex justify-center mb-6">
                            <HiCheckCircle className="w-16 h-16 text-green-500" />
                        </div>

                        <h1 className="text-3xl font-bold text-gray-900 mb-2">Purchase Successful!</h1>
                        <p className="text-gray-600 mb-6">
                            Your order has been confirmed. Check your email for receipt and access details.
                        </p>

                        <div className="bg-gray-50 rounded-lg p-6 mb-8 text-left">
                            <h2 className="font-bold text-gray-900 mb-4">Order Summary</h2>
                            <div className="space-y-2 text-sm mb-4 pb-4 border-b border-gray-200">
                                {items.map((item) => (
                                    <div key={item.id} className="flex justify-between">
                                        <span className="text-gray-700">{item.publication.title}</span>
                                        <span className="font-semibold text-gray-900">
                                            ${(item.publication.price).toFixed(2)}
                                        </span>
                                    </div>
                                ))}
                            </div>
                            <div className="space-y-2 text-sm">
                                <div className="flex justify-between">
                                    <span className="text-gray-700">Subtotal</span>
                                    <span className="font-semibold">${subtotal.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-700">Tax (8%)</span>
                                    <span className="font-semibold">${tax.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between text-base font-bold border-t border-gray-200 pt-2 mt-2">
                                    <span>Total</span>
                                    <span className="text-indigo-600">${total.toFixed(2)}</span>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-3">
                            <button
                                onClick={() => navigate('/library/dashboard')}
                                className="w-full px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors font-semibold"
                            >
                                Go to Dashboard
                            </button>
                            <button
                                onClick={() => navigate('/library')}
                                className="w-full px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-semibold"
                            >
                                Continue Shopping
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    // Payment page
    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-8 lg:px-12">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <button
                    onClick={() => navigate(-1)}
                    className="flex items-center gap-2 text-indigo-600 hover:text-indigo-700 font-semibold mb-8"
                >
                    <HiArrowLeft className="w-5 h-5" />
                    Back
                </button>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left: Order Summary */}
                    <div className="lg:col-span-1">
                        <div className="bg-white rounded-lg shadow-lg p-6 sticky top-24">
                            <h2 className="text-xl font-bold text-gray-900 mb-6">Order Summary</h2>

                            <div className="space-y-4 mb-6 pb-6 border-b border-gray-200">
                                {items.map((item) => (
                                    <div key={item.id} className="flex items-start gap-4">
                                        <img
                                            src={item.publication.thumbnail}
                                            alt={item.publication.title}
                                            className="w-16 h-24 object-cover rounded"
                                        />
                                        <div className="flex-grow">
                                            <p className="font-semibold text-gray-900 text-sm line-clamp-2">
                                                {item.publication.title}
                                            </p>
                                            <p className="text-sm text-gray-600 mt-1">${item.publication.price.toFixed(2)}</p>
                                            <button
                                                onClick={() => handleRemoveItem(item.id)}
                                                className="text-red-600 hover:text-red-700 text-sm font-semibold mt-2 flex items-center gap-1"
                                            >
                                                <HiTrash className="w-4 h-4" />
                                                Remove
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="space-y-3">
                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-600">Subtotal</span>
                                    <span className="font-semibold text-gray-900">${subtotal.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-600">Tax (8%)</span>
                                    <span className="font-semibold text-gray-900">${tax.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between text-lg font-bold border-t border-gray-200 pt-3 mt-3">
                                    <span>Total</span>
                                    <span className="text-indigo-600">${total.toFixed(2)}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Payment Form */}
                    <div className="lg:col-span-2">
                        <div className="bg-white rounded-lg shadow-lg p-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">Payment Method</h2>

                            {/* Payment Options */}
                            <div className="space-y-3 mb-8">
                                {[
                                    { id: 'credit-card', label: 'Credit Card', icon: '💳' },
                                    { id: 'debit-card', label: 'Debit Card', icon: '🏦' },
                                    { id: 'paypal', label: 'PayPal', icon: '🅿️' },
                                    { id: 'bank-transfer', label: 'Bank Transfer', icon: '🏛️' },
                                ].map((method) => (
                                    <label
                                        key={method.id}
                                        className="flex items-center p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors"
                                    >
                                        <input
                                            type="radio"
                                            name="payment"
                                            value={method.id}
                                            checked={paymentMethod === method.id}
                                            onChange={() =>
                                                setPaymentMethod(method.id as 'credit-card' | 'debit-card' | 'paypal' | 'bank-transfer')
                                            }
                                            className="w-4 h-4 cursor-pointer"
                                        />
                                        <span className="ml-3 text-lg">{method.icon}</span>
                                        <span className="ml-3 font-semibold text-gray-900">{method.label}</span>
                                    </label>
                                ))}
                            </div>

                            {/* Payment Form Fields */}
                            <div className="bg-gray-50 rounded-lg p-6 mb-8">
                                {paymentMethod === 'credit-card' || paymentMethod === 'debit-card' ? (
                                    <div className="space-y-4">
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-900 mb-2">
                                                Cardholder Name
                                            </label>
                                            <input
                                                type="text"
                                                placeholder="John Doe"
                                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-900 mb-2">
                                                Card Number
                                            </label>
                                            <input
                                                type="text"
                                                placeholder="4532 •••• •••• 1234"
                                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                                disabled
                                            />
                                        </div>
                                        <div className="grid grid-cols-2 gap-4">
                                            <div>
                                                <label className="block text-sm font-semibold text-gray-900 mb-2">
                                                    Expiry Date
                                                </label>
                                                <input
                                                    type="text"
                                                    placeholder="MM/YY"
                                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-semibold text-gray-900 mb-2">
                                                    CVV
                                                </label>
                                                <input
                                                    type="text"
                                                    placeholder="•••"
                                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                ) : paymentMethod === 'paypal' ? (
                                    <div className="text-center py-8">
                                        <p className="text-gray-700 mb-4">
                                            You will be redirected to PayPal to complete your payment securely.
                                        </p>
                                        <p className="text-sm text-gray-600">
                                            Your PayPal account will be charged: <span className="font-bold">${total.toFixed(2)}</span>
                                        </p>
                                    </div>
                                ) : (
                                    <div className="text-center py-8">
                                        <p className="text-gray-700 mb-4">
                                            Bank transfer details will be provided after confirmation.
                                        </p>
                                        <p className="text-sm text-gray-600">
                                            Please transfer: <span className="font-bold">${total.toFixed(2)}</span>
                                        </p>
                                    </div>
                                )}
                            </div>

                            {/* Terms Checkbox */}
                            <label className="flex items-start gap-3 mb-8">
                                <input type="checkbox" defaultChecked className="w-4 h-4 rounded mt-1" />
                                <span className="text-sm text-gray-700">
                                    I agree to the{' '}
                                    <a href="#" className="text-indigo-600 hover:text-indigo-700 font-semibold">
                                        Terms of Service
                                    </a>{' '}
                                    and{' '}
                                    <a href="#" className="text-indigo-600 hover:text-indigo-700 font-semibold">
                                        Privacy Policy
                                    </a>
                                </span>
                            </label>

                            {/* Action Buttons */}
                            <div className="space-y-3">
                                <button
                                    onClick={handleProcessPayment}
                                    disabled={isProcessing}
                                    className="w-full px-6 py-3 bg-indigo-600 hover:bg-indigo-700 disabled:bg-gray-400 text-white rounded-lg transition-colors font-bold"
                                >
                                    {isProcessing ? 'Processing...' : `Pay $${total.toFixed(2)}`}
                                </button>
                                <button
                                    onClick={() => navigate(-1)}
                                    className="w-full px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-semibold"
                                >
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Checkout
