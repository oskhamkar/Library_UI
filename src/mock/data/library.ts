/**
 * Mock Data for Digital Library
 */

import { Publication, PurchaseHistory, ViewHistory, UserProfile } from '@/@types/library'

// Sample publications database
export const mockPublications: Publication[] = [
    {
        id: 'pub-001',
        title: 'Advances in Quantum Computing',
        author: 'Dr. Sarah Johnson',
        publisher: 'Academic Press International',
        coverImage: 'https://images.unsplash.com/photo-1516979187457-635ffe35ff15?w=500&h=700&fit=crop',
        thumbnail: 'https://images.unsplash.com/photo-1516979187457-635ffe35ff15?w=200&h=300&fit=crop',
        description:
            'A comprehensive exploration of quantum computing principles, applications, and future implications. This research paper delves into quantum algorithms, quantum error correction, and potential real-world applications in cryptography, drug discovery, and optimization problems.',
        shortDescription: 'Latest breakthroughs in quantum computing research',
        publicationType: 'research-paper',
        category: 'technology',
        year: 2024,
        price: 29.99,
        isbnOrIssn: '978-1-234567-89-0',
        pages: 156,
        language: 'English',
        department: 'Computer Science',
        isFeatured: true,
        rating: 4.8,
        reviewCount: 234,
        tags: ['quantum', 'computing', 'algorithms', 'technology'],
    },
    {
        id: 'pub-002',
        title: 'The Modern CEO: Leadership in Digital Era',
        author: 'Michael Chen',
        publisher: 'Business Insights Publishing',
        coverImage: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=700&fit=crop',
        thumbnail: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=200&h=300&fit=crop',
        description:
            'An in-depth analysis of contemporary leadership challenges and strategies. Explores digital transformation, team dynamics, remote work management, and sustainable business practices. Based on interviews with 100+ executives.',
        shortDescription: 'Essential leadership strategies for modern businesses',
        publicationType: 'book',
        category: 'business',
        year: 2023,
        price: 39.99,
        isbnOrIssn: '978-0-987654-32-1',
        pages: 328,
        language: 'English',
        department: 'Business Administration',
        isFeatured: true,
        rating: 4.6,
        reviewCount: 512,
        tags: ['leadership', 'business', 'management', 'digital'],
    },
    {
        id: 'pub-003',
        title: 'Nature Reviews - Volume 48',
        author: 'Various Authors',
        publisher: 'Nature Publishing Group',
        coverImage: 'https://images.unsplash.com/photo-1507842217343-583f20270319?w=500&h=700&fit=crop',
        thumbnail: 'https://images.unsplash.com/photo-1507842217343-583f20270319?w=200&h=300&fit=crop',
        description:
            'The latest edition of Nature Reviews featuring cutting-edge research across biology, chemistry, and physics. Includes peer-reviewed articles on climate change, biodiversity, and sustainable energy solutions.',
        shortDescription: 'Leading scientific journal covering latest research',
        publicationType: 'journal',
        category: 'science',
        year: 2024,
        price: 49.99,
        isbnOrIssn: 'ISSN-0028-0836',
        language: 'English',
        department: 'Natural Sciences',
        isFeatured: true,
        rating: 4.9,
        reviewCount: 1023,
        tags: ['science', 'research', 'nature', 'journal'],
    },
    {
        id: 'pub-004',
        title: 'Health Technology Quarterly - Issue 3/2024',
        author: 'Editorial Board',
        publisher: 'Medical Publications Inc',
        coverImage: 'https://images.unsplash.com/photo-1631217314831-c6227db76b6e?w=500&h=700&fit=crop',
        thumbnail: 'https://images.unsplash.com/photo-1631217314831-c6227db76b6e?w=200&h=300&fit=crop',
        description:
            'A quarterly magazine dedicated to health technology innovations, telemedicine advances, and digital health solutions. Features case studies, expert opinions, and emerging trends in healthcare technology.',
        shortDescription: 'Latest innovations in healthcare technology',
        publicationType: 'magazine',
        category: 'health',
        year: 2024,
        price: 19.99,
        isbnOrIssn: 'ISSN-2045-7464',
        language: 'English',
        department: 'Health Sciences',
        rating: 4.5,
        reviewCount: 187,
        tags: ['health', 'technology', 'medicine', 'innovation'],
    },
    {
        id: 'pub-005',
        title: 'Artificial Intelligence: Foundations and Future',
        author: 'Prof. Emma Davis',
        publisher: 'Tech Education Press',
        coverImage: 'https://images.unsplash.com/photo-1677442d019cecf74f6cac8af8a84ca0b66672b59?w=500&h=700&fit=crop',
        thumbnail: 'https://images.unsplash.com/photo-1677442d019cecf74f6cac8af8a84ca0b66672b59?w=200&h=300&fit=crop',
        description:
            'A comprehensive textbook covering machine learning, deep learning, natural language processing, and computer vision. Includes practical code examples, exercises, and real-world applications.',
        shortDescription: 'Complete guide to artificial intelligence',
        publicationType: 'book',
        category: 'technology',
        year: 2024,
        price: 59.99,
        isbnOrIssn: '978-1-567890-12-3',
        pages: 512,
        language: 'English',
        department: 'Computer Science',
        isFeatured: true,
        rating: 4.7,
        reviewCount: 678,
        tags: ['AI', 'machine-learning', 'technology', 'education'],
    },
    {
        id: 'pub-006',
        title: 'Environmental Studies Quarterly - 2024 Edition',
        author: 'Dr. James Wilson',
        publisher: 'Environmental Science Journal',
        coverImage: 'https://images.unsplash.com/photo-1559502867-b699fbb3cb74?w=500&h=700&fit=crop',
        thumbnail: 'https://images.unsplash.com/photo-1559502867-b699fbb3cb74?w=200&h=300&fit=crop',
        description:
            'Quarterly publication focusing on environmental conservation, climate science, and sustainability initiatives. Includes research on ecosystem management and green technologies.',
        shortDescription: 'Research on environmental conservation',
        publicationType: 'journal',
        category: 'science',
        year: 2024,
        price: 34.99,
        isbnOrIssn: 'ISSN-1234-5678',
        language: 'English',
        department: 'Environmental Science',
        rating: 4.6,
        reviewCount: 234,
        tags: ['environment', 'sustainability', 'science', 'climate'],
    },
    {
        id: 'pub-007',
        title: 'Inside Behavioral Economics',
        author: 'Dr. Robert Thompson',
        publisher: 'Economics Today',
        coverImage: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&h=700&fit=crop',
        thumbnail: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=200&h=300&fit=crop',
        description:
            'An exploration of how human psychology influences economic decisions. Covers behavioral biases, consumer choices, market dynamics, and practical applications for business and policy.',
        shortDescription: 'Psychology of economic decision-making',
        publicationType: 'magazine',
        category: 'business',
        year: 2024,
        price: 24.99,
        isbnOrIssn: 'ISSN-9876-5432',
        language: 'English',
        department: 'Economics',
        rating: 4.4,
        reviewCount: 156,
        tags: ['economics', 'behavior', 'psychology', 'business'],
    },
    {
        id: 'pub-008',
        title: 'The Future of Education: Digital Learning Paradigms',
        author: 'Dr. Patricia Brown',
        publisher: 'Educational Research Press',
        coverImage: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=500&h=700&fit=crop',
        thumbnail: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=200&h=300&fit=crop',
        description:
            'A research-driven analysis of digital transformation in education. Covers online learning platforms, AI tutoring, adaptive learning technologies, and their impact on student outcomes.',
        shortDescription: 'Digital education transformation and innovations',
        publicationType: 'research-paper',
        category: 'education',
        year: 2024,
        price: 27.99,
        isbnOrIssn: '978-1-112233-44-5',
        pages: 198,
        language: 'English',
        department: 'Education',
        isFeatured: true,
        rating: 4.5,
        reviewCount: 289,
        tags: ['education', 'digital-learning', 'technology', 'innovation'],
    },
    {
        id: 'pub-009',
        title: 'Clinical Neuroscience Review',
        author: 'Dr. Helen Martinez',
        publisher: 'Medical Research Publishing',
        coverImage: 'https://images.unsplash.com/photo-1576091160549-112173f31446?w=500&h=700&fit=crop',
        thumbnail: 'https://images.unsplash.com/photo-1576091160549-112173f31446?w=200&h=300&fit=crop',
        description:
            'Comprehensive review of recent advances in neuroscience, including neuroplasticity research, brain imaging techniques, and treatments for neurological disorders.',
        shortDescription: 'Latest advances in clinical neuroscience',
        publicationType: 'journal',
        category: 'health',
        year: 2024,
        price: 44.99,
        isbnOrIssn: 'ISSN-1111-2222',
        language: 'English',
        department: 'Health Sciences',
        rating: 4.7,
        reviewCount: 421,
        tags: ['neuroscience', 'health', 'research', 'medical'],
    },
    {
        id: 'pub-010',
        title: 'Philosophy Today - Spring 2024',
        author: 'Various Philosophers',
        publisher: 'Academic Philosophy Press',
        coverImage: 'https://images.unsplash.com/photo-1507842217343-583f20270319?w=500&h=700&fit=crop',
        thumbnail: 'https://images.unsplash.com/photo-1507842217343-583f20270319?w=200&h=300&fit=crop',
        description:
            'Quarterly journal featuring articles on contemporary philosophical issues, ethics, metaphysics, epistemology, and applied philosophy in modern society.',
        shortDescription: 'Contemporary philosophical discussions',
        publicationType: 'journal',
        category: 'humanities',
        year: 2024,
        price: 22.99,
        isbnOrIssn: 'ISSN-3333-4444',
        language: 'English',
        department: 'Philosophy',
        rating: 4.3,
        reviewCount: 145,
        tags: ['philosophy', 'humanities', 'ethics', 'research'],
    },
]

// Sample user profile
export const mockUserProfile: UserProfile = {
    id: 'user-001',
    email: 'student@university.edu',
    firstName: 'John',
    lastName: 'Doe',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop',
    role: 'user',
    department: 'Computer Science',
    institution: 'State University',
    createdDate: '2023-01-15',
    lastLogin: new Date().toISOString(),
}

// Sample purchase history
export const mockPurchaseHistory: PurchaseHistory[] = [
    {
        id: 'order-001',
        userId: 'user-001',
        publicationId: 'pub-001',
        publicationTitle: 'Advances in Quantum Computing',
        purchaseDate: '2024-01-10',
        price: 29.99,
        accessUntil: '2025-01-10',
    },
    {
        id: 'order-002',
        userId: 'user-001',
        publicationId: 'pub-005',
        publicationTitle: 'Artificial Intelligence: Foundations and Future',
        purchaseDate: '2024-02-05',
        price: 59.99,
        accessUntil: '2025-02-05',
    },
]

// Sample view history
export const mockViewHistory: ViewHistory[] = [
    {
        id: 'view-001',
        userId: 'user-001',
        publicationId: 'pub-003',
        title: 'Nature Reviews - Volume 48',
        thumbnail: 'https://images.unsplash.com/photo-1507842217343-583f20270319?w=200&h=300&fit=crop',
        viewedDate: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
    },
    {
        id: 'view-002',
        userId: 'user-001',
        publicationId: 'pub-008',
        title: 'The Future of Education: Digital Learning Paradigms',
        thumbnail: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=200&h=300&fit=crop',
        viewedDate: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),
    },
]

// Get featured publications
export const getFeaturedPublications = () => {
    return mockPublications.filter((pub) => pub.isFeatured).slice(0, 6)
}

// Get publications by category
export const getPublicationsByCategory = (category: string) => {
    return mockPublications.filter((pub) => pub.category === category)
}

// Get publications by type
export const getPublicationsByType = (type: string) => {
    return mockPublications.filter((pub) => pub.publicationType === type)
}

// Search publications
export const searchPublications = (query: string) => {
    const lowerQuery = query.toLowerCase()
    return mockPublications.filter(
        (pub) =>
            pub.title.toLowerCase().includes(lowerQuery) ||
            pub.author.toLowerCase().includes(lowerQuery) ||
            pub.description.toLowerCase().includes(lowerQuery) ||
            pub.tags?.some((tag) => tag.toLowerCase().includes(lowerQuery))
    )
}
