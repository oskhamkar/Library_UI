export type LibraryCategory = 'journals' | 'magazines' | 'books' | 'research'

export interface LibraryItem {
    id: string
    title: string
    author: string
    publisher: string
    description: string
    category: LibraryCategory
    year: number
    department: string
    price: number
    thumbnail: string
    coverImage: string
    featured?: boolean
    popular?: boolean
    tags?: string[]
}

