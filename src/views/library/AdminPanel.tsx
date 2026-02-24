import { useState } from 'react'
import { HiArrowUp, HiArrowDown, HiUser, HiBook, HiCurrencyDollar, HiPlus } from 'react-icons/hi'
import { mockPublications, mockPurchaseHistory } from '@/mock/data/library'
import classNames from 'classnames'

const AdminPanel = () => {
    const [activeTab, setActiveTab] = useState<'dashboard' | 'publications' | 'users' | 'analytics'>('dashboard')
    const [showUploadForm, setShowUploadForm] = useState(false)

    // Calculate stats
    const totalPublications = mockPublications.length
    const totalRevenue = mockPurchaseHistory.reduce((sum, order) => sum + order.price, 0)
    const totalUsers = 500 // Mock data
    const monthlyGrowth = 12.5 // Mock percentage

    const stats = [
        {
            title: 'Total Publications',
            value: totalPublications,
            icon: <HiBook className="w-6 h-6" />,
            color: 'bg-blue-100 text-blue-600',
            trend: 8,
        },
        {
            title: 'Total Revenue',
            value: `$${totalRevenue.toFixed(2)}`,
            icon: <HiCurrencyDollar className="w-6 h-6" />,
            color: 'bg-green-100 text-green-600',
            trend: 15,
        },
        {
            title: 'Active Users',
            value: totalUsers,
            icon: <HiUser className="w-6 h-6" />,
            color: 'bg-purple-100 text-purple-600',
            trend: monthlyGrowth,
        },
    ]

    return (
        <div className="bg-gray-50 min-h-screen">
            {/* Header */}
            <div className="bg-white border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 py-8">
                    <h1 className="text-3xl font-bold text-gray-900">Admin Panel</h1>
                    <p className="text-gray-600 mt-2">Manage your digital library platform</p>
                </div>
            </div>

            {/* Navigation */}
            <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
                    <div className="flex gap-8 overflow-x-auto">
                        {[
                            { id: 'dashboard', label: 'Dashboard' },
                            { id: 'publications', label: 'Publications' },
                            { id: 'users', label: 'Users' },
                            { id: 'analytics', label: 'Analytics' },
                        ].map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id as any)}
                                className={classNames(
                                    'py-4 px-1 border-b-2 font-semibold transition-colors whitespace-nowrap',
                                    activeTab === tab.id
                                        ? 'border-indigo-600 text-indigo-600'
                                        : 'border-transparent text-gray-600 hover:text-gray-900'
                                )}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 py-12">
                {activeTab === 'dashboard' && (
                    <div>
                        {/* Stats Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                            {stats.map((stat, index) => (
                                <div key={index} className="bg-white rounded-lg border border-gray-200 p-6">
                                    <div className="flex items-start justify-between">
                                        <div>
                                            <p className="text-sm font-semibold text-gray-600">{stat.title}</p>
                                            <p className="text-3xl font-bold text-gray-900 mt-2">{stat.value}</p>
                                            <p className={classNames('text-sm font-semibold mt-2', stat.trend > 0 ? 'text-green-600' : 'text-red-600')}>
                                                {stat.trend > 0 ? <HiArrowUp className="w-4 h-4 inline mr-1" /> : <HiArrowDown className="w-4 h-4 inline mr-1" />}
                                                {Math.abs(stat.trend)}% from last month
                                            </p>
                                        </div>
                                        <div className={classNames('p-3 rounded-lg', stat.color)}>
                                            {stat.icon}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Recent Publications */}
                        <div className="bg-white rounded-lg border border-gray-200 p-6">
                            <h2 className="text-lg font-bold text-gray-900 mb-6">Recent Publications</h2>
                            <div className="overflow-x-auto">
                                <table className="w-full text-sm">
                                    <thead>
                                        <tr className="border-b border-gray-200">
                                            <th className="text-left py-3 px-4 font-semibold text-gray-900">Title</th>
                                            <th className="text-left py-3 px-4 font-semibold text-gray-900">Author</th>
                                            <th className="text-left py-3 px-4 font-semibold text-gray-900">Type</th>
                                            <th className="text-left py-3 px-4 font-semibold text-gray-900">Price</th>
                                            <th className="text-left py-3 px-4 font-semibold text-gray-900">Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {mockPublications.slice(0, 5).map((pub) => (
                                            <tr key={pub.id} className="border-b border-gray-200 hover:bg-gray-50">
                                                <td className="py-3 px-4 text-gray-900 font-semibold">{pub.title}</td>
                                                <td className="py-3 px-4 text-gray-600">{pub.author}</td>
                                                <td className="py-3 px-4">
                                                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold capitalize">
                                                        {pub.publicationType.replace('-', ' ')}
                                                    </span>
                                                </td>
                                                <td className="py-3 px-4 text-gray-900 font-semibold">${pub.price.toFixed(2)}</td>
                                                <td className="py-3 px-4">
                                                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold">
                                                        Published
                                                    </span>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === 'publications' && (
                    <div>
                        <div className="flex items-center justify-between mb-8">
                            <h2 className="text-2xl font-bold text-gray-900">Manage Publications</h2>
                            <button
                                onClick={() => setShowUploadForm(!showUploadForm)}
                                className="flex items-center gap-2 px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors font-semibold"
                            >
                                <HiPlus className="w-5 h-5" />
                                Upload Publication
                            </button>
                        </div>

                        {showUploadForm && (
                            <div className="bg-white rounded-lg border border-gray-200 p-8 mb-8">
                                <h3 className="text-lg font-bold text-gray-900 mb-6">Upload New Publication</h3>
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-900 mb-2">Title</label>
                                        <input
                                            type="text"
                                            placeholder="Publication title"
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-900 mb-2">Author</label>
                                        <input
                                            type="text"
                                            placeholder="Author name"
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-900 mb-2">Type</label>
                                        <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500">
                                            <option>Journal</option>
                                            <option>Magazine</option>
                                            <option>Book</option>
                                            <option>Research Paper</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-900 mb-2">Price</label>
                                        <input
                                            type="number"
                                            placeholder="29.99"
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                        />
                                    </div>
                                    <div className="lg:col-span-2">
                                        <label className="block text-sm font-semibold text-gray-900 mb-2">Description</label>
                                        <textarea
                                            placeholder="Publication description"
                                            rows={4}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                        />
                                    </div>
                                    <div className="lg:col-span-2">
                                        <label className="block text-sm font-semibold text-gray-900 mb-2">Cover Image</label>
                                        <input
                                            type="file"
                                            accept="image/*"
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                        />
                                    </div>
                                </div>
                                <div className="flex gap-4 mt-6">
                                    <button className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors font-semibold">
                                        Upload
                                    </button>
                                    <button
                                        onClick={() => setShowUploadForm(false)}
                                        className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-semibold"
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </div>
                        )}

                        <div className="bg-white rounded-lg border border-gray-200 p-6">
                            <div className="overflow-x-auto">
                                <table className="w-full text-sm">
                                    <thead>
                                        <tr className="border-b border-gray-200">
                                            <th className="text-left py-3 px-4 font-semibold text-gray-900">Title</th>
                                            <th className="text-left py-3 px-4 font-semibold text-gray-900">Author</th>
                                            <th className="text-left py-3 px-4 font-semibold text-gray-900">Type</th>
                                            <th className="text-left py-3 px-4 font-semibold text-gray-900">Price</th>
                                            <th className="text-left py-3 px-4 font-semibold text-gray-900">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {mockPublications.map((pub) => (
                                            <tr key={pub.id} className="border-b border-gray-200 hover:bg-gray-50">
                                                <td className="py-3 px-4 text-gray-900 font-semibold">{pub.title}</td>
                                                <td className="py-3 px-4 text-gray-600">{pub.author}</td>
                                                <td className="py-3 px-4 capitalize text-gray-600">{pub.publicationType}</td>
                                                <td className="py-3 px-4 text-gray-900 font-semibold">${pub.price.toFixed(2)}</td>
                                                <td className="py-3 px-4 flex gap-2">
                                                    <button className="text-indigo-600 hover:text-indigo-700 font-semibold text-sm">
                                                        Edit
                                                    </button>
                                                    <button className="text-red-600 hover:text-red-700 font-semibold text-sm">
                                                        Delete
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === 'users' && (
                    <div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-8">Manage Users</h2>
                        <div className="bg-white rounded-lg border border-gray-200 p-6">
                            <div className="overflow-x-auto">
                                <table className="w-full text-sm">
                                    <thead>
                                        <tr className="border-b border-gray-200">
                                            <th className="text-left py-3 px-4 font-semibold text-gray-900">Name</th>
                                            <th className="text-left py-3 px-4 font-semibold text-gray-900">Email</th>
                                            <th className="text-left py-3 px-4 font-semibold text-gray-900">Role</th>
                                            <th className="text-left py-3 px-4 font-semibold text-gray-900">Joined</th>
                                            <th className="text-left py-3 px-4 font-semibold text-gray-900">Status</th>
                                            <th className="text-left py-3 px-4 font-semibold text-gray-900">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {[
                                            {
                                                name: 'John Doe',
                                                email: 'john@university.edu',
                                                role: 'User',
                                                joined: '2024-01-15',
                                                status: 'Active',
                                            },
                                            {
                                                name: 'Jane Smith',
                                                email: 'jane@university.edu',
                                                role: 'User',
                                                joined: '2024-02-10',
                                                status: 'Active',
                                            },
                                            {
                                                name: 'Admin User',
                                                email: 'admin@university.edu',
                                                role: 'Admin',
                                                joined: '2023-12-01',
                                                status: 'Active',
                                            },
                                        ].map((user, index) => (
                                            <tr key={index} className="border-b border-gray-200 hover:bg-gray-50">
                                                <td className="py-3 px-4 text-gray-900 font-semibold">{user.name}</td>
                                                <td className="py-3 px-4 text-gray-600">{user.email}</td>
                                                <td className="py-3 px-4">
                                                    <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-semibold">
                                                        {user.role}
                                                    </span>
                                                </td>
                                                <td className="py-3 px-4 text-gray-600">{user.joined}</td>
                                                <td className="py-3 px-4">
                                                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold">
                                                        {user.status}
                                                    </span>
                                                </td>
                                                <td className="py-3 px-4 flex gap-2">
                                                    <button className="text-indigo-600 hover:text-indigo-700 font-semibold text-sm">
                                                        View
                                                    </button>
                                                    <button className="text-red-600 hover:text-red-700 font-semibold text-sm">
                                                        Suspend
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === 'analytics' && (
                    <div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-8">Analytics</h2>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            <div className="bg-white rounded-lg border border-gray-200 p-6">
                                <h3 className="text-lg font-bold text-gray-900 mb-6">Top Publications by Sales</h3>
                                <div className="space-y-4">
                                    {mockPublications.slice(0, 5).map((pub, index) => (
                                        <div key={pub.id} className="flex items-center justify-between">
                                            <div className="flex items-center gap-3">
                                                <span className="text-sm font-bold text-gray-600 w-6">{index + 1}</span>
                                                <span className="text-sm font-semibold text-gray-900 line-clamp-1">
                                                    {pub.title}
                                                </span>
                                            </div>
                                            <span className="text-sm text-gray-600">
                                                {pub.purchaseCount || Math.floor(Math.random() * 100)} sales
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="bg-white rounded-lg border border-gray-200 p-6">
                                <h3 className="text-lg font-bold text-gray-900 mb-6">Category Distribution</h3>
                                <div className="space-y-4">
                                    {['Science', 'Technology', 'Business', 'Health', 'Education', 'Humanities'].map((category, index) => {
                                        const percentage = Math.floor(Math.random() * 40) + 10
                                        return (
                                            <div key={index}>
                                                <div className="flex items-center justify-between mb-2">
                                                    <span className="text-sm font-semibold text-gray-900">{category}</span>
                                                    <span className="text-sm text-gray-600">{percentage}%</span>
                                                </div>
                                                <div className="w-full bg-gray-200 rounded-full h-2">
                                                    <div
                                                        className="bg-indigo-600 h-2 rounded-full"
                                                        style={{ width: `${percentage}%` }}
                                                    />
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default AdminPanel
