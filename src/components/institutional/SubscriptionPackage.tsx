import React, { useState } from 'react';
import type { SubscriptionPackage, Publication } from '@/@types/institutional';
import { HiOutlineCheckCircle } from 'react-icons/hi';
import Badge from '@/components/ui/Badge';

interface SubscriptionPackageProps {
    packageData: SubscriptionPackage;
}

const SubscriptionPackageView = ({ packageData }: SubscriptionPackageProps) => {
    const [selectedPublications, setSelectedPublications] = useState<Set<string>>(
        new Set(packageData.publications.map(p => p.id))
    );

    const togglePublication = (id: string) => {
        const newSelected = new Set(selectedPublications);
        if (newSelected.has(id)) {
            newSelected.delete(id);
        } else {
            newSelected.add(id);
        }
        setSelectedPublications(newSelected);
    };

    const isAllSelected = selectedPublications.size === packageData.publications.length;
    const isBundle = packageData.publications.length > 1;

    // Calculate dynamic pricing if they deselect items, though institutional bundles usually price the whole block.
    // For this UI, we will just show the bundle discount.
    const standardTotal = packageData.publications.reduce((acc, pub) => acc + pub.institutionalPrice, 0);
    const savings = standardTotal - packageData.bundlePrice;

    return (
        <div className="border-2 border-amber-gold rounded-xl overflow-hidden shadow-lg bg-soft-slate">
            {/* Header */}
            <div className="bg-amber-gold text-white px-6 py-4 flex flex-col md:flex-row md:items-center justify-between">
                <div>
                    <h2 className="text-2xl font-bold tracking-tight mb-1">{packageData.name}</h2>
                    <p className="text-amber-100 font-medium">{packageData.subjectCategory} Collection</p>
                </div>
                <div className="mt-4 md:mt-0 text-left md:text-right">
                    <p className="text-3xl font-extrabold">${packageData.bundlePrice.toLocaleString()}</p>
                    <p className="text-amber-100 font-medium text-sm">per institution / year</p>
                </div>
            </div>

            <div className="p-6 md:p-8 bg-white">
                <div className="mb-6 pb-6 border-b border-gray-100 flex flex-col md:flex-row justify-between items-center bg-amber-50 rounded-lg p-4">
                    <p className="text-gray-800 font-medium mb-4 md:mb-0">
                        {packageData.description}
                    </p>
                    {isBundle && (
                        <div className="text-right whitespace-nowrap">
                            <span className="bg-green-100 text-green-800 font-bold px-3 py-1 rounded text-sm">
                                Save ${savings.toLocaleString()}
                            </span>
                            <p className="text-xs text-gray-500 mt-1">vs individual subscriptions</p>
                        </div>
                    )}
                </div>

                <div className="flex justify-between items-center mb-4">
                    <h3 className="font-bold text-lg text-deep-navy">Included Journals ({packageData.publications.length})</h3>
                    <button
                        onClick={() => {
                            if (isAllSelected) {
                                setSelectedPublications(new Set());
                            } else {
                                setSelectedPublications(new Set(packageData.publications.map(p => p.id)));
                            }
                        }}
                        className="text-sm font-semibold text-academic-blue hover:underline"
                    >
                        {isAllSelected ? "Deselect All" : "Select All"}
                    </button>
                </div>

                {/* Publications List */}
                <div className="space-y-3">
                    {packageData.publications.map((pub) => {
                        const isSelected = selectedPublications.has(pub.id);
                        return (
                            <label
                                key={pub.id}
                                className={`flex items-center p-4 border rounded-lg cursor-pointer transition-colors ${isSelected ? 'border-amber-gold bg-amber-50 opacity-100' : 'border-gray-200 bg-white opacity-60'}`}
                            >
                                <input
                                    type="checkbox"
                                    className="w-5 h-5 accent-amber-gold mr-4 flex-shrink-0"
                                    checked={isSelected}
                                    onChange={() => togglePublication(pub.id)}
                                />
                                <div className="flex-grow">
                                    <h4 className="font-bold text-gray-900">{pub.title}</h4>
                                    <p className="text-sm text-gray-500">{pub.publisher} &bull; ISSN: {pub.type === 'Journal' || pub.type === 'Magazine' ? pub.issn : pub.id}</p>
                                </div>
                                <div className="text-right hidden sm:block">
                                    <p className="font-semibold text-gray-900">${pub.institutionalPrice}</p>
                                    <p className="text-xs text-gray-500">Value</p>
                                </div>
                            </label>
                        );
                    })}
                </div>

                <div className="mt-8 pt-6 border-t flex flex-col md:flex-row gap-4 items-center justify-between">
                    <div className="flex items-center text-sm font-medium text-gray-600 gap-2">
                        <HiOutlineCheckCircle className="text-green-500 text-xl" />
                        Includes multi-campus IP authorization & Ezproxy
                    </div>
                    <button
                        disabled={selectedPublications.size === 0}
                        className="w-full md:w-auto px-8 py-3 bg-academic-blue text-white font-bold rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        Request Institutional Quote
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SubscriptionPackageView;
