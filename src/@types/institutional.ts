export type PublicationType = 'Journal' | 'Magazine' | 'Book';
export type Frequency = 'Monthly' | 'Quarterly' | 'Bi-Annual' | 'Annual' | 'One-Time';

export interface BasePublication {
    id: string;
    title: string;
    publisher: string;
    subjectCategory: string;
    type: PublicationType;
    description?: string;
    coverImageUrl?: string;
    institutionalPrice: number;
    individualPrice: number;
}

export interface Journal extends BasePublication {
    type: 'Journal';
    issn: string;
    frequency: Frequency;
    impactFactor?: number;
    peerReviewed: boolean;
}

export interface Magazine extends BasePublication {
    type: 'Magazine';
    issn: string;
    frequency: Frequency;
    issueNumber?: string;
}

export interface Book extends BasePublication {
    type: 'Book';
    isbn: string;
    author: string;
    publicationYear: number;
    edition?: string;
}

export type Publication = Journal | Magazine | Book;

export interface SubscriptionPackage {
    id: string;
    name: string; // e.g., 'Full Engineering Bundle'
    subjectCategory: string;
    publications: Publication[];
    bundlePrice: number; // Discounted total price for institutions
    description: string;
}

export interface InstitutionalUser {
    id: string;
    institutionName: string; // e.g., 'MIT Library'
    contactPerson: string;
    email: string;
    phoneNumber?: string;
    billingAddress: string;
    deliveryAddress: string;
    activeSubscriptions: SubscriptionPackage[];
    isVerified: boolean;
}
