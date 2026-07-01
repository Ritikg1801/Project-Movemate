import React, { useState } from 'react';

export default function RoomsView() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');

  const places = [
    {
      id: 1,
      title: "Sunrise...",
      price: "$8500",
      rating: "4.5",
      reviewsCount: "42",
      type: "Pg",
      location: "12, MG Road,...",
      distance: "0.8 km away",
      tags: ["WiFi", "AC", "Meals"],
      extraTagsCount: 2,
      image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?q=80&w=400"
    },
    {
      id: 2,
      title: "Comfor...",
      price: "$7000",
      rating: "4.2",
      reviewsCount: "31",
      type: "Pg",
      location: "45, HSR Layout, Secto...",
      distance: "1.2 km away",
      tags: ["WiFi", "Meals", "Gym"],
      extraTagsCount: 1,
      image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=400"
    },
    {
      id: 3,
      title: "Green...",
      price: "$9000",
      rating: "4",
      reviewsCount: "18",
      type: "Pg",
      location: "8, Koramangala 4th...",
      distance: "2.1 km away",
      tags: ["WiFi", "AC", "Parking"],
      extraTagsCount: 2,
      image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=400"
    }
  ];

  return (
    <div className="w-full min-h-screen bg-[#fafafa] text-left font-sans pb-16">
      <div className="max-w-7xl mx-auto px-6 pt-10 space-y-8">
        
        {/* HEADER BRANDING TYPOGRAPHY BLOCK */}
        <div className="space-y-2">
          <h1 className="text-3xl font-black text-[#1e293b] tracking-tight">
            Discover Places
          </h1>
          <p className="text-sm font-semibold text-slate-400 tracking-wide">
            Search across PGs, rooms, hospitals, and more.
          </p>
        </div>

        {/* SEARCH AND FILTER CONTROL FLOATING BLOCK FRAME */}
        <div className="bg-white border border-slate-100 rounded-2xl p-4 shadow-xs grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
          <div className="md:col-span-2 relative flex items-center">
            <span className="absolute left-4 text-slate-400 text-base">🔍</span>
            <input 
              type="text" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by name, city, or address..."
              className="w-full bg-[#f8fafc] border border-slate-200/80 rounded-xl pl-11 pr-4 py-3 text-sm font-semibold text-slate-700 placeholder-slate-400 focus:outline-none focus:border-indigo-500/50"
            />
          </div>
          
          <div className="relative">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full bg-[#f8fafc] border border-slate-200/80 rounded-xl px-4 py-3 text-sm font-bold text-slate-600 appearance-none cursor-pointer focus:outline-none"
            >
              <option>All Categories</option>
              <option>PGs</option>
              <option>Rooms</option>
              <option>Hospitals</option>
            </select>
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-slate-400 pointer-events-none">▼</span>
          </div>
        </div>

        {/* ROOM CARDS MAIN COLUMN REGION */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 relative">
          {places.map((place) => (
            <div 
              key={place.id}
              className="bg-white border border-slate-100 rounded-[24px] overflow-hidden shadow-2xs hover:shadow-xs transition-all flex flex-col group cursor-pointer"
            >
              {/* Card Thumbnail Asset Frame */}
              <div className="relative h-56 bg-slate-100">
                <img 
                  src={place.image} 
                  alt={place.title} 
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.01]"
                />
                
                {/* Upper Left Categorization Round Badge */}
                <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-xs text-slate-800 text-xs font-black px-3 py-1 rounded-full shadow-2xs">
                  {place.type}
                </span>

                {/* Upper Right Reviews Scoring Ribbon */}
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-xs px-2.5 py-1 rounded-full flex items-center gap-1 shadow-2xs text-xs font-black text-slate-800">
                  <span className="text-amber-500 text-[11px]">★</span> {place.rating}
                  <span className="text-slate-400 font-semibold text-[10px]">({place.reviewsCount})</span>
                </div>
              </div>

              {/* Card Meta Container Row */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                
                {/* Title and Pricing Header Unit */}
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-lg font-extrabold text-slate-800 tracking-tight truncate">
                    {place.title}
                  </h3>
                  <span className="bg-[#eef2ff] text-[#4f46e5] text-xs font-black px-3 py-1 rounded-lg shrink-0">
                    {place.price}<span className="text-[10px] font-semibold text-[#4f46e5]/70">/mo</span>
                  </span>
                </div>

                {/* Location and Proximity Subtexts */}
                <div className="space-y-2 text-left">
                  <p className="text-xs font-bold text-slate-400 flex items-center gap-1.5 truncate">
                    <span className="text-indigo-400 text-sm">📍</span> {place.location}
                  </p>
                  
                  <div className="inline-block bg-slate-50 border border-slate-100 px-2.5 py-1 rounded-md text-[10px] font-black text-slate-600">
                    {place.distance}
                  </div>
                </div>

                {/* Facilities Badges Footer Inline List */}
                <div className="pt-3 border-t border-slate-50 flex flex-wrap items-center gap-1.5">
                  {place.tags.map((tag, idx) => (
                    <span 
                      key={idx} 
                      className="bg-slate-50/80 text-slate-500 text-[10px] font-extrabold px-2.5 py-1 rounded-md border border-slate-100"
                    >
                      {tag}
                    </span>
                  ))}
                  {place.extraTagsCount > 0 && (
                    <span className="text-[10px] font-bold text-slate-400 pl-1">
                      +{place.extraTagsCount}
                    </span>
                  )}
                </div>

              </div>
            </div>
          ))}

          {/* Right Floating Native Desktop Scroll Bar indicator element as shown in the image */}
          <div className="absolute right-[-14px] top-1/4 bottom-1/4 w-1.5 bg-slate-300 rounded-full hidden lg:block opacity-60" />
        </div>

      </div>
    </div>
  );
}