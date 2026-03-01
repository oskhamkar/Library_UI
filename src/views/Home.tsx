import AdvancedSearchHero from '@/components/institutional/AdvancedSearchHero';
import SubjectCategoryGrid from '@/components/institutional/SubjectCategoryGrid';
import ProductCard from '@/components/institutional/ProductCard';
import SubscriptionPackageView from '@/components/institutional/SubscriptionPackage';
import InstitutionalFeatures from '@/components/institutional/InstitutionalFeatures';
import type { Journal, Book, SubscriptionPackage } from '@/@types/institutional';

const mockJournal: Journal = {
    id: 'j-001',
    title: 'International Journal of Advanced Engineering Research',
    publisher: 'Academic Press Publishers',
    subjectCategory: 'Engineering',
    type: 'Journal',
    institutionalPrice: 1250,
    individualPrice: 150,
    issn: '2349-XXXX',
    frequency: 'Quarterly',
    impactFactor: 4.5,
    peerReviewed: true
};

const mockBook: Book = {
    id: 'b-001',
    title: 'Principles of Modern Thermodynamics',
    publisher: 'University Sciences',
    subjectCategory: 'Engineering',
    type: 'Book',
    institutionalPrice: 450,
    individualPrice: 85,
    isbn: '978-3-16-148410-0',
    author: 'Dr. Sarah Jenkins',
    publicationYear: 2023,
    edition: '3rd Edition'
};

const mockBundle: SubscriptionPackage = {
    id: 'sp-001',
    name: 'Complete Engineering Faculty Bundle',
    subjectCategory: 'Engineering',
    publications: [mockJournal, mockBook],
    bundlePrice: 1500,
    description: 'Get total access to the highest-impact engineering research journals, reference books, and conference proceedings curated for tier-1 institutions.'
};

const Home = () => {
    return (
        <div className="flex flex-col min-h-screen relative w-full overflow-hidden">
            <div className="container mx-auto px-4 py-12 relative z-10">
                <AdvancedSearchHero />
            </div>
            <div className="bg-white py-12">
                <div className="container mx-auto px-4">
                    <SubjectCategoryGrid />
                </div>
            </div>

            <section className="bg-slate-50 py-16 border-y border-gray-100">
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between mb-10">
                        <div>
                            <h2 className="text-3xl font-bold text-deep-navy mb-2">Featured Publications</h2>
                            <p className="text-gray-500">High-impact research curated for your institution</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
                        <ProductCard publication={mockJournal} />
                        <ProductCard publication={mockBook} />
                    </div>
                </div>
            </section>

            <section className="bg-white py-16">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-deep-navy mb-8 text-center md:text-left">Institutional Bundles</h2>
                    <SubscriptionPackageView packageData={mockBundle} />
                </div>
            </section>

            <div className="bg-slate-50 py-16">
                <div className="container mx-auto px-4">
                    <InstitutionalFeatures />
                </div>
            </div>
        </div>
    );
}

export default Home;
