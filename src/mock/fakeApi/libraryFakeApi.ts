import { Server } from 'miragejs'

export default function libraryFakeApi(server: Server, apiPrefix: string) {
    server.get(`${apiPrefix}/library/items`, (schema) => {
        // @ts-expect-error miragejs typing
        return schema.db.libraryItems
    })

    server.get(`${apiPrefix}/library/items/:id`, (schema, request) => {
        const { id } = request.params
        // @ts-expect-error miragejs typing
        const item = schema.db.libraryItems.findBy({ id })
        return item || {}
    })

    server.get(`${apiPrefix}/library/featured`, (schema) => {
        // @ts-expect-error miragejs typing
        const items = schema.db.libraryItems.where({ featured: true })
        return items || []
    })
}

