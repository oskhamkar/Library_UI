import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { HiUser, HiBookmark, HiClock, HiDownload, HiEye, HiCog } from 'react-icons/hi'
import { mockPurchaseHistory, mockViewHistory, mockPublications, mockUserProfile } from '@/mock/data/library'
import classNames from 'classnames'

const Dashboard = () => {
    const navigate = useNavigate()
    const [activeTab, setActiveTab] = useState<'purchased' | 'reading-history' | 'bookmarks' | 'settings'>('purchased')
    const [userProfile] = useState(mockUserProfile)

    const tabs = [
        { id: 'purchased', label: 'Purchased Items', icon: <HiDownload className="w-5 h-5" /> },
        { id: 'reading-history', label: 'Reading History', icon: <HiClock className="w-5 h-5" /> },
        { id: 'bookmarks', label: 'Bookmarks', icon: <HiBookmark className="w-5 h-5" /> },
        { id: 'settings', label: 'Settings', icon: <HiCog className="w-5 h-5" /> },
    ]

    return (
        <div className="bg-gray-50 min-h-screen">
            {/* Header */}
            <div className="bg-white border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 py-8">
                    <div className="flex items-center gap-6">
                        <div className="w-20 h-20 rounded-full bg-gray-200 overflow-hidden">
                            {userProfile.avatar ? (
                                <img src={userProfile.avatar} alt={userProfile.firstName} className="w-full h-full object-cover" />
                            ) : (
                                <div className="w-full h-full flex items-center justify-center">
                                    <HiUser className="w-10 h-10 text-gray-400" />
                                </div>
                            )}
                        </div>
                        <div>
                            <h1 className="text-3xl font-bold text-gray-900">
                                Welcome, {userProfile.firstName}!
                            </h1>
                            <p className="text-gray-600 mt-1">{userProfile.email}</p>
                            {userProfile.institution && (
                                <p className="text-gray-600">
                                    {userProfile.institution} • {userProfile.department}
                                </p>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Navigation Tabs */}
            <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
                    <div className="flex gap-8 overflow-x-auto">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id as any)}
                                className={classNames(
                                    'py-4 px-1 border-b-2 font-semibold transition-colors whitespace-nowrap flex items-center gap-2',
                                    activeTab === tab.id
                                        ? 'border-indigo-600 text-indigo-600'
                                        : 'border-transparent text-gray-600 hover:text-gray-900'
                                )}
                            >
                                {tab.icon}
                                {tab.label}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 py-12">
                {/* Purchased Items */}
                {activeTab === 'purchased' && (
                    <div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-8">My Purchases</h2>
                        {mockPurchaseHistory.length > 0 ? (
                            <div className="space-y-4">
                                {mockPurchaseHistory.map((purchase) => {
                                    const publication = mockPublications.find((p) => p.id === purchase.publicationId)
                                    return (
                                        <div
                                            key={purchase.id}
                                            className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow"
                                        >
                                            <div className="flex items-start gap-6">
                                                {publication && (
                                                    <img
                                                        src={publication.thumbnail}
                                                        alt={publication.title}
                                                        className="w-24 h-32 object-cover rounded"
                                                    />
                                                )}
                                                <div className="flex-grow">
                                                    <h3 className="text-lg font-bold text-gray-900">
                                                        {purchase.publicationTitle}
                                                    </h3>
                                                    <p className="text-sm text-gray-600 mt-2">
                                                        Purchased on {new Date(purchase.purchaseDate).toLocaleDateString()}
                                                    </p>
                                                    {purchase.accessUntil && (
                                                        <p className="text-sm text-gray-600">
                                                            Access until{' '}
                                                            <span className="font-semibold text-gray-900">
                                                                {new Date(purchase.accessUntil).toLocaleDateString()}
                                                            </span>
                                                        </p>
                                                    )}
                                                    <div className="flex items-center gap-4 mt-4">
                                                        <button
                                                            onClick={() => navigate(`/library/publication/${purchase.publicationId}`)}
                                                            className="px-4 py-2 bg-indigo-100 text-indigo-700 rounded-lg hover:bg-indigo-200 transition-colors font-semibold flex items-center gap-2"
                                                        >
                                                            <HiEye className="w-4 h-4" />
                                                            View
                                                        </button>
                                                        <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-semibold">
                                                            Download
                                                        </button>
                                                    </div>
                                                </div>
                                                <div className="text-right">
                                                    <p className="text-lg font-bold text-indigo-600">${purchase.price.toFixed(2)}</p>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        ) : (
                            <div className="bg-white rounded-lg border border-gray-200 p-12 text-center">
                                <p className="text-gray-600 mb-6">You haven't purchased any items yet.</p>
                                <button
                                    onClick={() => navigate('/library')}
                                    className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors font-semibold"
                                >
                                    Explore Library
                                </button>
                            </div>
                        )}
                    </div>
                )}

                {/* Reading History */}
                {activeTab === 'reading-history' && (
                    <div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-8">Reading History</h2>
                        {mockViewHistory.length > 0 ? (
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                                {mockViewHistory.map((view) => (
                                    <div
                                        key={view.id}
                                        onClick={() => navigate(`/library/publication/${view.publicationId}`)}
                                        className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
                                    >
                                        <img
                                            src={view.thumbnail}
                                            alt={view.title}
                                            className="w-full h-32 object-cover"
                                        />
                                        <div className="p-4">
                                            <h3 className="font-semibold text-gray-900 line-clamp-2">{view.title}</h3>
                                            <p className="text-xs text-gray-600 mt-2">
                                                Viewed {new Date(view.viewedDate).toLocaleDateString()}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="bg-white rounded-lg border border-gray-200 p-12 text-center">
                                <p className="text-gray-600">Your reading history is empty.</p>
                            </div>
                        )}
                    </div>
                )}

                {/* Bookmarks */}
                {activeTab === 'bookmarks' && (
                    <div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-8">Bookeared Items</h2>
                        <div className="bg-white rounded-lg border border-gray-200 p-12 text-center">
                            <HiBookmark className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                            <p className="text-gray-600 mb-6">You haven't bookmarked any items yet.</p>
                            <button
                                onClick={() => navigate('/library')}
                                className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors font-semibold"
                            >
                                Browse Publications
                            </button>
                        </div>
                    </div>
                )}

                {/* Settings */}
                {activeTab === 'settings' && (
                    <div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-8">Account Settings</h2>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            {/* Profile Information */}
                            <div className="bg-white rounded-lg border border-gray-200 p-6">
                                <h3 className="text-lg font-bold text-gray-900 mb-6">Profile Information</h3>
                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-900 mb-2">
                                            First Name
                                        </label>
                                        <input
                                            type="text"
                                            defaultValue={userProfile.firstName}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-900 mb-2">
                                            Last Name
                                        </label>
                                        <input
                                            type="text"
                                            defaultValue={userProfile.lastName}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-900 mb-2">
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            defaultValue={userProfile.email}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                        />
                                    </div>
                                    <button className="w-full px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors font-semibold mt-6">
                                        Save Changes
                                    </button>
                                </div>
                            </div>

                            {/* Password & Security */}
                            <div className="bg-white rounded-lg border border-gray-200 p-6">
                                <h3 className="text-lg font-bold text-gray-900 mb-6">Password & Security</h3>
                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-900 mb-2">
                                            Current Password
                                        </label>
                                        <input
                                            type="password"
                                            placeholder="••••••••"
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-900 mb-2">
                                            New Password
                                        </label>
                                        <input
                                            type="password"
                                            placeholder="••••••••"
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-900 mb-2">
                                            Confirm Password
                                        </label>
                                        <input
                                            type="password"
                                            placeholder="••••••••"
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                        />
                                    </div>
                                    <button className="w-full px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors font-semibold mt-6">
                                        Update Password
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Dashboard
