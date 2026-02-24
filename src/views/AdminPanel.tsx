import { useEffect, useMemo, useState } from 'react'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'
import Select from '@/components/ui/Select'
import type { LibraryItem, LibraryCategory } from '@/@types/library'
import { apiGetLibraryItems } from '@/services/LibraryService'

const categoryOptions: { value: LibraryCategory; label: string }[] = [
    { value: 'journals', label: 'Journals' },
    { value: 'magazines', label: 'Magazines' },
    { value: 'books', label: 'Books' },
    { value: 'research', label: 'Research papers' },
]

const AdminPanel = () => {
    const [items, setItems] = useState<LibraryItem[]>([])

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

    const stats = useMemo(() => {
        const total = items.length
        const totalJournals = items.filter((i) => i.category === 'journals').length
        const totalBooks = items.filter((i) => i.category === 'books').length
        return { total, totalJournals, totalBooks }
    }, [items])

    return (
        <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <Card bodyClass="space-y-1">
                    <p className="text-xs text-gray-500 uppercase font-semibold">
                        Total publications
                    </p>
                    <p className="text-2xl font-semibold text-gray-900 dark:text-gray-50">
                        {stats.total}
                    </p>
                </Card>
                <Card bodyClass="space-y-1">
                    <p className="text-xs text-gray-500 uppercase font-semibold">
                        Journals
                    </p>
                    <p className="text-2xl font-semibold text-gray-900 dark:text-gray-50">
                        {stats.totalJournals}
                    </p>
                </Card>
                <Card bodyClass="space-y-1">
                    <p className="text-xs text-gray-500 uppercase font-semibold">
                        Books
                    </p>
                    <p className="text-2xl font-semibold text-gray-900 dark:text-gray-50">
                        {stats.totalBooks}
                    </p>
                </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.7fr)_minmax(0,1.3fr)] gap-6">
                <Card header="Upload new content" bodyClass="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <Input placeholder="Title" />
                        <Input placeholder="Author" />
                        <Input placeholder="Publisher" />
                        <Select
                            placeholder="Category"
                            options={categoryOptions}
                            className="min-w-[120px]"
                        />
                        <Input placeholder="Department" />
                        <Input placeholder="Year" type="number" />
                        <Input placeholder="Price" type="number" />
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between pt-2">
                        <p className="text-xs text-gray-500">
                            This is a demo form. Submitting will not persist data but reflects the
                            upload workflow.
                        </p>
                        <Button variant="solid" color="blue-600">
                            Save draft
                        </Button>
                    </div>
                </Card>

                <Card header="Users & access" bodyClass="space-y-3">
                    <div className="text-sm text-gray-600 dark:text-gray-200 space-y-1">
                        <p>
                            User management is mocked for this demo. The default account has both{' '}
                            <span className="font-semibold">admin</span> and{' '}
                            <span className="font-semibold">user</span> roles assigned.
                        </p>
                        <p className="text-xs text-gray-500">
                            Extend this section to connect to your identity provider or campus SSO.
                        </p>
                    </div>
                    <div className="border border-dashed border-gray-300 dark:border-gray-700 rounded-md p-3 text-xs text-gray-600 dark:text-gray-300">
                        <p className="font-semibold mb-1">Example admin user</p>
                        <p>Username: admin</p>
                        <p>Password: 123Qwe</p>
                        <p>Roles: admin, user</p>
                    </div>
                </Card>
            </div>
        </div>
    )
}

export default AdminPanel

