import React from 'react';
import type { Publication } from '@/@types/institutional';
import { HiOutlineShoppingCart, HiOutlineDocumentText, HiOutlineBadgeCheck } from 'react-icons/hi';
import Badge from '@/components/ui/Badge';

interface ProductCardProps {
    publication: Publication;
}

const ProductCard = ({ publication }: ProductCardProps) => {
    return (
        <div className="flex flex-col border border-gray-200 bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 w-full overflow-hidden">
            {/* Header / Type Label */}
            <div className="px-5 py-3 border-b flex justify-between items-center bg-gray-50 border-gray-100">
                <span className="text-xs font-bold uppercase tracking-wider text-gray-500">
                    {publication.type}
                </span>
                {publication.type === 'Journal' && publication.peerReviewed && (
                    <span className="flex items-center text-xs text-academic-blue font-semibold gap-1">
                        <HiOutlineBadgeCheck /> Peer Reviewed
                    </span>
                )}
            </div>

            {/* Body */}
            <div className="p-6 flex-grow flex flex-col md:flex-row gap-6">
                {/* Book Cover Placeholder */}
                <div className="w-full md:w-32 h-44 bg-soft-slate rounded border border-gray-100 flex-shrink-0 flex items-center justify-center relative overflow-hidden">
                    {publication.coverImageUrl ? (
                        <img src={publication.coverImageUrl} alt={publication.title} className="w-full h-full object-cover" />
                    ) : (
                        <span className="text-gray-300 font-bold text-4xl">{publication.title.charAt(0)}</span>
                    )}
                </div>

                {/* Metadata */}
                <div className="flex-grow">
                    <h3 className="text-xl font-bold text-deep-navy mb-2 leading-tight">
                        {publication.title}
                    </h3>
                    <div className="flex items-center gap-2 mb-4 text-sm">
                        <span className="bg-emerald-50 text-emerald-700 px-2 py-1 rounded font-medium border border-emerald-100">
                            {publication.subjectCategory}
                        </span>
                        <span className="text-gray-500 font-medium">|</span>
                        <span className="text-gray-600 font-medium">{publication.publisher}</span>
                    </div>

                    <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm text-gray-600 mb-6">
                        {publication.type === 'Journal' && (
                            <>
                                <div><span className="font-semibold text-gray-800">ISSN:</span> {publication.issn}</div>
                                <div><span className="font-semibold text-gray-800">Frequency:</span> {publication.frequency}</div>
                                {publication.impactFactor && <div><span className="font-semibold text-gray-800">Impact Factor:</span> {publication.impactFactor}</div>}
                            </>
                        )}
                        {publication.type === 'Book' && (
                            <>
                                <div><span className="font-semibold text-gray-800">ISBN:</span> {publication.isbn}</div>
                                <div><span className="font-semibold text-gray-800">Author:</span> {publication.author}</div>
                                <div><span className="font-semibold text-gray-800">Published:</span> {publication.publicationYear}</div>
                            </>
                        )}
                        {publication.type === 'Magazine' && (
                            <>
                                <div><span className="font-semibold text-gray-800">ISSN:</span> {publication.issn}</div>
                                <div><span className="font-semibold text-gray-800">Frequency:</span> {publication.frequency}</div>
                            </>
                        )}
                    </div>

                    {/* Pricing */}
                    <div className="flex items-center gap-6 mt-auto">
                        <div>
                            <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider mb-1">Institutional</p>
                            <p className="text-2xl font-bold text-gray-900">${publication.institutionalPrice}</p>
                        </div>
                        <div className="pl-6 border-l border-gray-200">
                            <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider mb-1">Individual</p>
                            <p className="text-xl font-semibold text-gray-500">${publication.individualPrice}</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Actions */}
            <div className="p-5 border-t border-gray-100 bg-white flex flex-col sm:flex-row gap-4 justify-end">
                <button className="flex items-center justify-center gap-2 px-6 py-2 border border-gray-300 text-gray-700 font-medium rounded-md hover:bg-gray-50 transition-colors">
                    <HiOutlineDocumentText className="text-lg" />
                    Request Quote
                </button>
                <button className="flex items-center justify-center gap-2 px-6 py-2 bg-apex-orange text-white font-medium rounded-md hover:bg-orange-600 transition-colors">
                    <HiOutlineShoppingCart className="text-lg" />
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

export default ProductCard;
