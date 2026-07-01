import React, { useState } from 'react';

export default function SavedPlacesView() {
  const [activeTab, setActiveTab] = useState('All Places');

  const categories = [
    { name: 'All Places', count: 12 },
    { name: 'Accommodation', count: 4 },
    { name: 'Food & Restaurants', count: 3 },
    { name: 'Local Guides', count: 2 },
    { name: 'Travel & Experiences', count: 3 },
  ];

  const savedPlaces = [
    {
      id: 1,
      title: "Green Leaf PG",
      subtitle: "Ameerpet, Hyderabad",
      category: "PG Accommodation",
      categoryIcon: "🏠",
      verified: true,
      price: "₹8,000 / month",
      rating: "4.6",
      image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?q=80&w=400"
    },
    {
      id: 2,
      title: "Paradise Biryani",
      subtitle: "Banjara Hills, Hyderabad",
      extraText: "Biryani, North Indian, Chinese",
      category: "Restaurant",
      categoryIcon: "🍴",
      rating: "4.3",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=400"
    },
    {
      id: 3,
      title: "Rohit Verma",
      subtitle: "Tour Guide",
      extraText: "Speaks: English, Hindi, Telugu",
      category: "Local Guide",
      categoryIcon: "👤",
      rating: "4.8",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400"
    },
    {
      id: 4,
      title: "Charminar",
      subtitle: "Old City, Hyderabad",
      extraText: "Historical Place",
      category: "Travel Spot",
      categoryIcon: "✈",
      rating: "4.7",
      image: "https://images.unsplash.com/photo-1608958416715-da9f1cf206d2?q=80&w=400"
    }
  ];

  const savedLists = [
    { id: 1, name: "Weekend Getaway", count: 5, icon: "❤️", iconBg: "bg-rose-50 text-rose-500", hasAvatars: true },
    { id: 2, name: "PG Options", count: 4, icon: "🏠", iconBg: "bg-purple-50 text-purple-500" },
    { id: 3, name: "Must Try Food", count: 3, icon: "🍴", iconBg: "bg-emerald-50 text-emerald-500" },
    { id: 4, name: "Places to Visit", count: 6, icon: "📷", iconBg: "bg-blue-50 text-blue-500" }
  ];

  const quickActions = [
    { title: "Add New Place", description: "Save a new place to your list", icon: "➕", iconBg: "bg-indigo-50 text-indigo-600" },
    { title: "Create New List", description: "Organize places in a list", icon: "📋", iconBg: "bg-purple-50 text-purple-600" },
    { title: "Share Places", description: "Share with friends", icon: "🔗", iconBg: "bg-blue-50 text-blue-600" },
    { title: "View Map", description: "See all places on map", icon: "📍", iconBg: "bg-indigo-50 text-indigo-600" }
  ];

  return (
    <div className="w-full min-h-screen bg-[#f8fafc] text-left font-sans pb-16">
      <div className="max-w-7xl mx-auto px-6 pt-8 space-y-8">
        
        {/* HEADER SECTION */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-2xl font-black text-[#0f172a] tracking-tight flex items-center gap-2">
              Saved Places <span className="text-indigo-500 font-normal text-xl">💜</span>
            </h1>
            <p className="text-xs font-semibold text-slate-400 mt-1">
              All the places you saved for later
            </p>
          </div>
          <button className="bg-[#4f46e5] hover:bg-[#4338ca] text-white text-xs font-bold px-4 py-2.5 rounded-xl flex items-center gap-2 shadow-xs transition-colors cursor-pointer">
            <span className="text-sm font-medium">+</span> Add New Place
          </button>
        </div>

        {/* CONTROLS BAR: CATEGORY PILLS AND SORT DROPDOWN */}
        <div className="flex flex-col lg:flex-row justify-between gap-4 border-b border-slate-100 pb-2">
          <div className="flex flex-wrap gap-2.5">
            {categories.map((cat) => {
              const isSelected = activeTab === cat.name;
              return (
                <button
                  key={cat.name}
                  onClick={() => setActiveTab(cat.name)}
                  className={`px-3.5 py-2 text-xs font-bold rounded-xl transition-all cursor-pointer border ${
                    isSelected 
                      ? 'bg-[#eef2ff] border-[#4f46e5]/30 text-[#4f46e5]' 
                      : 'bg-white border-slate-200/60 text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  {cat.name} <span className={`ml-0.5 font-medium ${isSelected ? 'text-[#4f46e5]/70' : 'text-slate-400'}`}>({cat.count})</span>
                </button>
              );
            })}
          </div>

          <div className="relative inline-block self-start">
            <button className="bg-white border border-slate-200 px-3.5 py-2 text-xs font-bold text-slate-700 rounded-xl flex items-center gap-2 shadow-2xs">
              Recently Added <span className="text-[10px] text-slate-400">▼</span>
            </button>
          </div>
        </div>

        {/* GRID LAYOUT: SAVED PLACES CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {savedPlaces.map((place) => (
            <div 
              key={place.id}
              className="bg-white border border-slate-100 rounded-[22px] overflow-hidden shadow-2xs hover:shadow-sm transition-all flex flex-col justify-between group cursor-pointer"
            >
              {/* Card Image Area */}
              <div className="relative h-44 bg-slate-100 overflow-hidden">
                <img 
                  src={place.image} 
                  alt={place.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                />
                
                {/* Upper Left Floating Custom Category Badge */}
                <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-xs px-2.5 py-1 rounded-md flex items-center gap-1 shadow-2xs text-[10px] font-bold text-white">
                  <span>{place.categoryIcon}</span> {place.category}
                </div>

                {/* Upper Right Heart Icon Action */}
                <button className="absolute top-3 right-3 w-7 h-7 bg-white rounded-full flex items-center justify-center text-rose-500 shadow-sm text-xs font-bold">
                  ❤️
                </button>

                {/* Bottom Left Optional Verified Badge */}
                {place.verified && (
                  <span className="absolute bottom-3 left-3 bg-[#10b981] text-white text-[9px] font-extrabold px-2 py-0.5 rounded-md tracking-wide shadow-xs">
                    Verified
                  </span>
                )}
              </div>

              {/* Card Contents Area */}
              <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                <div className="space-y-1">
                  <h3 className="text-sm font-black text-slate-800 tracking-tight line-clamp-1 group-hover:text-indigo-600 transition-colors">
                    {place.title}
                  </h3>
                  <p className="text-[11px] font-bold text-slate-400 line-clamp-1">
                    {place.subtitle}
                  </p>
                  {place.extraText && (
                    <p className="text-[10px] font-medium text-slate-400/90 line-clamp-1">
                      {place.extraText}
                    </p>
                  )}
                </div>

                {/* Card Footer Bar */}
                <div className="flex items-center justify-between pt-2 border-t border-slate-50">
                  {place.price ? (
                    <span className="text-[11px] font-black text-indigo-600 bg-indigo-50/50 px-2 py-0.5 rounded-md">
                      {place.price}
                    </span>
                  ) : (
                    <div className="h-4" />
                  )}

                  <div className="bg-amber-50/70 border border-amber-100/50 px-1.5 py-0.5 rounded-md flex items-center gap-0.5 text-[10px] font-black text-slate-700">
                    <span className="text-amber-500 text-[9px]">⭐</span> {place.rating}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* BOTTOM SECTIONS SPLIT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pt-4">
          
          {/* LEFT BOTTOM ROW: SAVED LISTS */}
          <div className="lg:col-span-2 space-y-4">
            <div>
              <h2 className="text-base font-black text-slate-800 tracking-tight">Saved Lists</h2>
              <p className="text-[11px] font-semibold text-slate-400">Organize your saved places</p>
            </div>

            <div className="bg-white border border-slate-100 rounded-[22px] p-2 space-y-1.5 shadow-2xs">
              {savedLists.map((list) => (
                <div 
                  key={list.id}
                  className="flex items-center justify-between p-3 rounded-xl hover:bg-slate-50 transition-colors cursor-pointer group"
                >
                  <div className="flex items-center gap-3.5">
                    <div className={`w-9 h-9 ${list.iconBg} rounded-xl flex items-center justify-center font-bold text-sm shrink-0`}>
                      {list.icon}
                    </div>
                    <div>
                      <h4 className="text-xs font-black text-slate-800 tracking-tight group-hover:text-indigo-600 transition-colors">
                        {list.name}
                      </h4>
                      <p className="text-[10px] font-semibold text-slate-400 mt-0.5">
                        {list.count} places
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    {/* Mock Profile Stack if enabled */}
                    {list.hasAvatars && (
                      <div className="flex -space-x-2 overflow-hidden select-none">
                        <img className="inline-block h-5 w-5 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100" alt="user" />
                        <img className="inline-block h-5 w-5 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100" alt="user" />
                        <img className="inline-block h-5 w-5 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100" alt="user" />
                        <div className="inline-block h-5 w-5 rounded-full ring-2 ring-white bg-slate-100 flex items-center justify-center text-[8px] font-black text-slate-500">+2</div>
                      </div>
                    )}
                    <span className="text-slate-300 font-medium text-xs transition-transform group-hover:translate-x-0.5">➔</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT BOTTOM ROW: QUICK ACTIONS LIST */}
          <div className="space-y-4">
            <div>
              <h2 className="text-base font-black text-slate-800 tracking-tight">Quick Actions</h2>
            </div>

            <div className="grid grid-cols-1 gap-3">
              {quickActions.map((action, idx) => (
                <div 
                  key={idx}
                  className="bg-white border border-slate-100 rounded-xl p-4 flex items-center gap-4 shadow-2xs hover:shadow-xs transition-all cursor-pointer group"
                >
                  <div className={`w-9 h-9 ${action.iconBg} rounded-xl flex items-center justify-center text-sm font-bold shrink-0`}>
                    {action.icon}
                  </div>
                  <div className="truncate">
                    <h4 className="text-xs font-black text-slate-800 tracking-tight group-hover:text-indigo-600 transition-colors">
                      {action.title}
                    </h4>
                    <p className="text-[10px] font-medium text-slate-400 mt-0.5 truncate">
                      {action.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}