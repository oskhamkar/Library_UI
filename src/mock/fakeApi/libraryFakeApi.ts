import { Server } from 'miragejs'
import { mockPublications, mockPurchaseHistory, mockViewHistory } from '@/mock/data/library'

export default function libraryFakeApi(server: Server, apiPrefix: string) {
    // Get all publications
    server.get(`${apiPrefix}/publications`, (schema) => {
        return {
            data: mockPublications,
            total: mockPublications.length,
        }
    })

    // Get publication by ID
    server.get(`${apiPrefix}/publications/:id`, (schema, request) => {
        const id = request.params.id
        const publication = mockPublications.find((p) => p.id === id)
        return { data: publication }
    })

    // Search publications
    server.get(`${apiPrefix}/publications/search`, (schema, request) => {
        const query = request.queryParams.q.toLowerCase()
        const results = mockPublications.filter(
            (pub) =>
                pub.title.toLowerCase().includes(query) ||
                pub.author.toLowerCase().includes(query) ||
                pub.description.toLowerCase().includes(query)
        )
        return {
            data: results,
            total: results.length,
        }
    })

    // Get publications by category
    server.get(`${apiPrefix}/publications/category/:category`, (schema, request) => {
        const category = request.params.category
        const results = mockPublications.filter((pub) => pub.category === category)
        return {
            data: results,
            total: results.length,
        }
    })

    // Get publications by type
    server.get(`${apiPrefix}/publications/type/:type`, (schema, request) => {
        const type = request.params.type
        const results = mockPublications.filter((pub) => pub.publicationType === type)
        return {
            data: results,
            total: results.length,
        }
    })

    // Get featured publications
    server.get(`${apiPrefix}/publications/featured`, (schema) => {
        const featured = mockPublications.filter((pub) => pub.isFeatured)
        return {
            data: featured,
            total: featured.length,
        }
    })

    // Create order/Purchase
    server.post(`${apiPrefix}/orders`, (schema, { requestBody }) => {
        const { items, totalPrice } = JSON.parse(requestBody)
        const orderId = `order-${Date.now()}`
        const orderNumber = `ORD-${Math.floor(Math.random() * 1000000)}`

        return {
            data: {
                id: orderId,
                orderNumber,
                items,
                totalPrice,
                status: 'completed',
                createdAt: new Date().toISOString(),
            },
        }
    })

    // Get user purchase history
    server.get(`${apiPrefix}/user/purchases`, (schema) => {
        return {
            data: mockPurchaseHistory,
            total: mockPurchaseHistory.length,
        }
    })

    // Get user view history
    server.get(`${apiPrefix}/user/history`, (schema) => {
        return {
            data: mockViewHistory,
            total: mockViewHistory.length,
        }
    })

    // Add to reading history
    server.post(`${apiPrefix}/user/history`, (schema, { requestBody }) => {
        const { publicationId } = JSON.parse(requestBody)
        const publication = mockPublications.find((p) => p.id === publicationId)

        if (publication) {
            return {
                data: {
                    id: `view-${Date.now()}`,
                    publicationId,
                    title: publication.title,
                    thumbnail: publication.thumbnail,
                    viewedDate: new Date().toISOString(),
                },
            }
        }

        return {
            error: 'Publication not found',
        }
    })

    // Bookmark a publication
    server.post(`${apiPrefix}/user/bookmarks`, (schema, { requestBody }) => {
        const { publicationId } = JSON.parse(requestBody)
        const publication = mockPublications.find((p) => p.id === publicationId)

        if (publication) {
            return {
                data: {
                    id: `bookmark-${Date.now()}`,
                    publicationId,
                    publication,
                    bookmarkedDate: new Date().toISOString(),
                },
            }
        }

        return {
            error: 'Publication not found',
        }
    })

    // Get user bookmarks
    server.get(`${apiPrefix}/user/bookmarks`, (schema) => {
        return {
            data: [],
            total: 0,
        }
    })

    // Upload new publication (Admin)
    server.post(`${apiPrefix}/admin/publications`, (schema, { requestBody }) => {
        const publication = JSON.parse(requestBody)
        const newId = `pub-${Date.now()}`

        return {
            data: {
                id: newId,
                ...publication,
                createdAt: new Date().toISOString(),
            },
        }
    })

    // Update publication (Admin)
    server.put(`${apiPrefix}/admin/publications/:id`, (schema, request) => {
        const id = request.params.id
        const data = JSON.parse(request.requestBody)

        return {
            data: {
                id,
                ...data,
                updatedAt: new Date().toISOString(),
            },
        }
    })

    // Delete publication (Admin)
    server.delete(`${apiPrefix}/admin/publications/:id`, (schema, request) => {
        const id = request.params.id
        return {
            success: true,
            message: 'Publication deleted successfully',
        }
    })

    // Get analytics (Admin)
    server.get(`${apiPrefix}/admin/analytics`, (schema) => {
        return {
            data: {
                totalPublications: mockPublications.length,
                totalRevenue: mockPurchaseHistory.reduce((sum, p) => sum + p.price, 0),
                totalUsers: 500,
                monthlyGrowth: 12.5,
                topPublications: mockPublications.slice(0, 5),
            },
        }
    })
}
