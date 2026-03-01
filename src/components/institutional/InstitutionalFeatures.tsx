import React from 'react';
import { HiOutlineLibrary, HiOutlineTruck, HiOutlineBookOpen, HiOutlineShieldCheck } from 'react-icons/hi';

const features = [
    {
        id: 'invoicing',
        title: 'Centralized Invoicing',
        description: 'Manage all departmental and institutional subscriptions through a single, unified billing system tailored for universities.',
        icon: HiOutlineLibrary
    },
    {
        id: 'delivery',
        title: 'Delivery Management',
        description: 'Track physical journal shipments, manage claims for missing issues, and oversee multi-campus distribution effortlessly.',
        icon: HiOutlineTruck
    },
    {
        id: 'ebook_access',
        title: 'E-Book Access',
        description: 'Instant IP-based or Ezproxy authentication for digital libraries, ensuring seamless remote access for students and faculty.',
        icon: HiOutlineBookOpen
    },
    {
        id: 'plagiarism',
        title: 'Plagiarism Support',
        description: 'Access integrated anti-plagiarism tools and resources to maintain the highest standards of academic integrity.',
        icon: HiOutlineShieldCheck
    }
];

const InstitutionalFeatures = () => {
    return (
        <section className="mt-16 bg-soft-slate rounded-2xl p-10 border border-gray-100">
            <div className="text-center mb-12">
                <div className="inline-block px-3 py-1 bg-amber-gold bg-opacity-10 text-amber-gold rounded-full text-sm font-bold tracking-wide uppercase mb-4">
                    Why Choose Us
                </div>
                <h2 className="text-3xl lg:text-4xl font-extrabold text-deep-navy mb-4">
                    Built for the Academic Ecosystem
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                    We provide the infrastructure and services required by modern libraries and research institutions to thrive.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {features.map((feature) => {
                    const Icon = feature.icon;
                    return (
                        <div key={feature.id} className="flex flex-col items-center text-center p-4">
                            <div className="w-16 h-16 bg-white rounded-full shadow-sm flex items-center justify-center mb-6 text-academic-blue border border-gray-100">
                                <Icon className="text-3xl" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    );
                })}
            </div>

            <div className="mt-12 text-center">
                <button className="bg-white border-2 border-apex-orange text-apex-orange hover:bg-apex-orange hover:text-white font-bold py-3 px-8 rounded-md transition-colors duration-300 shadow-sm">
                    Learn More About Institutional Plans
                </button>
            </div>
        </section>
    );
};

export default InstitutionalFeatures;
