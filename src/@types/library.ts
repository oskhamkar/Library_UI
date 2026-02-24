/**
 * Digital Library Application Types & Interfaces
 */

export type PublicationType = 'journal' | 'magazine' | 'book' | 'research-paper'

export type ContentCategory = 'science' | 'technology' | 'business' | 'health' | 'education' | 'humanities'

export type UserRole = 'user' | 'admin'

export interface Publication {
    id: string
    title: string
    author: string
    authorId?: string
    publisher: string
    coverImage: string
    thumbnail: string
    description: string
    shortDescription: string
    content?: string
    publicationType: PublicationType
    category: ContentCategory
    year: number
    price: number
    isbnOrIssn?: string
    pages?: number
    language?: string
    previewContent?: string
    isFeatured?: boolean
    rating?: number
    reviewCount?: number
    department?: string
    tags?: string[]
    purchaseCount?: number
}

export interface PurchaseHistory {
    id: string
    userId: string
    publicationId: string
    publicationTitle: string
    purchaseDate: string
    price: number
    accessUntil?: string
}

export interface BookmarkedItem {
    id: string
    userId: string
    publicationId: string
    publication: Publication
    bookmarkedDate: string
}

export interface ViewHistory {
    id: string
    userId: string
    publicationId: string
    title: string
    thumbnail: string
    viewedDate: string
}

export interface CartItem {
    id: string
    publication: Publication
    quantity: number
    addedDate: string
}

export interface Order {
    id: string
    userId: string
    items: CartItem[]
    totalPrice: number
    paymentMethod: 'credit-card' | 'debit-card' | 'paypal' | 'bank-transfer'
    orderDate: string
    status: 'pending' | 'completed' | 'failed' | 'refunded'
    orderNumber: string
}

export interface UserProfile {
    id: string
    email: string
    firstName: string
    lastName: string
    avatar?: string
    role: UserRole
    department?: string
    institution?: string
    createdDate: string
    lastLogin?: string
}

export interface LibraryFilter {
    publicationType?: PublicationType[]
    category?: ContentCategory[]
    yearRange?: {
        from: number
        to: number
    }
    priceRange?: {
        min: number
        max: number
    }
    department?: string[]
    searchQuery?: string
}

export interface LibraryListingResponse {
    publications: Publication[]
    total: number
    page: number
    limit: number
    filters: LibraryFilter
}

export interface CheckoutData {
    items: CartItem[]
    subtotal: number
    tax: number
    total: number
    shippingAddress?: {
        street: string
        city: string
        state: string
        postalCode: string
        country: string
    }
    paymentMethod?: 'credit-card' | 'debit-card' | 'paypal' | 'bank-transfer'
}
