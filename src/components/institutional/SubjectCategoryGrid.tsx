import React from 'react';
import { HiOutlineBeaker, HiOutlineHeart, HiOutlineCog, HiOutlineBriefcase } from 'react-icons/hi';

const categories = [
    {
        id: 'engineering',
        name: 'Engineering',
        description: 'Journals, proceedings, and monographs in civil, mechanical, and electrical engineering.',
        icon: HiOutlineCog,
        color: 'text-blue-500',
        bgHover: 'hover:bg-blue-50',
    },
    {
        id: 'medical',
        name: 'Medical',
        description: 'Comprehensive medical research, clinical studies, and health sciences texts.',
        icon: HiOutlineHeart,
        color: 'text-red-500',
        bgHover: 'hover:bg-red-50',
    },
    {
        id: 'pharmacy',
        name: 'Pharmacy',
        description: 'Pharmacology, drug research, and pharmaceutical sciences publications.',
        icon: HiOutlineBeaker,
        color: 'text-emerald-500',
        bgHover: 'hover:bg-emerald-50',
    },
    {
        id: 'management',
        name: 'Management',
        description: 'Business administration, finance, and organizational behavior journals.',
        icon: HiOutlineBriefcase,
        color: 'text-amber-600',
        bgHover: 'hover:bg-orange-50',
    }
];

const SubjectCategoryGrid = () => {
    return (
        <section className="mb-16">
            <div className="flex items-center justify-between mb-8">
                <div>
                    <h2 className="text-3xl font-bold text-deep-navy mb-2">Browse by Subject</h2>
                    <p className="text-soft-slate text-gray-500">Explore curated collections for your institution</p>
                </div>
                <button className="text-academic-blue font-semibold hover:underline hidden sm:block">
                    View All Subjects &rarr;
                </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {categories.map((category) => {
                    const IconComponent = category.icon;
                    return (
                        <div
                            key={category.id}
                            className={`group cursor-pointer border border-gray-200 rounded-xl p-6 bg-white transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${category.bgHover}`}
                        >
                            <div className={`w-14 h-14 rounded-lg bg-gray-50 flex items-center justify-center mb-6 group-hover:bg-white transition-colors border border-gray-100`}>
                                <IconComponent className={`text-3xl ${category.color}`} />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">{category.name}</h3>
                            <p className="text-sm text-gray-500 leading-relaxed mb-4">
                                {category.description}
                            </p>
                            <div className="text-academic-blue font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                                Explore Collection &rarr;
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default SubjectCategoryGrid;
