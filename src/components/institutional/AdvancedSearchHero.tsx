import React, { useState } from 'react';
import { HiOutlineSearch, HiOutlineCollection } from 'react-icons/hi';

const AdvancedSearchHero = () => {
    const [searchType, setSearchType] = useState<'standard' | 'issn'>('standard');

    return (
        <div className="bg-deep-navy text-white rounded-2xl p-10 mt-6 mb-12 shadow-2xl relative overflow-hidden">
            {/* Background Accent */}
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-academic-blue rounded-full opacity-20 blur-3xl mix-blend-screen pointer-events-none"></div>

            <div className="relative z-10 max-w-4xl mx-auto text-center">
                <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-white tracking-tight">
                    Academic Content Hub
                </h1>
                <p className="text-lg md:text-xl text-soft-slate opacity-90 mb-8 max-w-2xl mx-auto font-light">
                    The premier institutional portal for Journals, Magazines, and E-Books.
                </p>

                <div className="bg-white p-2 rounded-lg flex flex-col md:flex-row shadow-xl border border-gray-200 gap-2">
                    {/* Subject Category Select */}
                    <div className="flex-none w-full md:w-48 bg-gray-50 rounded-md border-r border-gray-100 text-gray-800">
                        <select className="w-full h-full p-3 bg-transparent outline-none cursor-pointer text-sm font-semibold">
                            <option value="">All Subjects</option>
                            <option value="engineering">Engineering</option>
                            <option value="medical">Medical</option>
                            <option value="law">Law</option>
                            <option value="pharmacy">Pharmacy</option>
                        </select>
                    </div>

                    {/* Search Input */}
                    <div className="flex-grow flex items-center bg-white px-3 relative">
                        <HiOutlineSearch className="text-gray-400 text-xl" />
                        <input
                            type="text"
                            className="w-full p-3 outline-none text-gray-800 placeholder-gray-400"
                            placeholder={searchType === 'issn' ? "Enter ISSN or ISBN number..." : "Search publications, authors, or topics..."}
                        />
                    </div>

                    {/* Action Button */}
                    <button className="bg-apex-orange hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-md transition-colors duration-200">
                        Search
                    </button>
                </div>

                {/* Toggles */}
                <div className="flex justify-center items-center gap-6 mt-6 text-sm">
                    <label className="flex items-center gap-2 cursor-pointer cursor-pointer hover:text-apex-orange transition-colors">
                        <input
                            type="radio"
                            name="searchType"
                            checked={searchType === 'standard'}
                            onChange={() => setSearchType('standard')}
                            className="accent-apex-orange"
                        />
                        <span>Standard Search</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer hover:text-apex-orange transition-colors">
                        <input
                            type="radio"
                            name="searchType"
                            checked={searchType === 'issn'}
                            onChange={() => setSearchType('issn')}
                            className="accent-apex-orange"
                        />
                        <span>ISSN / ISBN</span>
                    </label>
                </div>
            </div>
        </div>
    );
};

export default AdvancedSearchHero;
