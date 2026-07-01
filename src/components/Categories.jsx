// CategoriesView.jsx
import React from 'react';

export default function CategoriesView({ onClose }) {
  const categoriesList = [
    {
      title: "Paying Guests",
      description: "Find comfortable shared stays",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      bgColor: "bg-[#e8f0fe]",
      iconColor: "text-[#1a73e8]"
    },
    {
      title: "Rooms for Rent",
      description: "Private rooms for longer stays",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      bgColor: "bg-[#eef2ff]",
      iconColor: "text-[#4f46e5]"
    },
    {
      title: "Hotels",
      description: "Short term accommodations",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      bgColor: "bg-[#fff7ed]",
      iconColor: "text-[#ea580c]"
    },
    {
      title: "Hospitals & Clinics",
      description: "Medical care facilities",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
        </svg>
      ),
      bgColor: "bg-[#fef2f2]",
      iconColor: "text-[#ef4444]"
    },
    {
      title: "Restaurants",
      description: "Local food and dining",
      icon: (
        <span className="text-xl font-bold tracking-tight select-none">Ψ⦵</span>
      ),
      bgColor: "bg-[#fff7ed]",
      iconColor: "text-[#f97316]"
    },
    {
      title: "Colleges",
      description: "Educational institutions",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-5.825-3 forest 12.083 12.083 0 01.665-6.48l6.16 3.425z" />
        </svg>
      ),
      bgColor: "bg-[#ecfdf5]",
      iconColor: "text-[#10b981]"
    }
  ];

  return (
    <div className="w-full min-h-screen bg-[#f8fafc] text-left font-sans pb-16">
      <div className="max-w-7xl mx-auto px-6 pt-10">
        
        {/* Header Block Section */}
        <div className="flex justify-between items-start mb-8">
          <div>
            <h1 className="text-3xl font-black text-[#0f172a] tracking-tight">Categories</h1>
            <p className="text-sm font-medium text-slate-400 mt-1.5">
              Explore everything you need in your new city.
            </p>
          </div>
          
          {/* Dashboard Return Trigger */}
          {onClose && (
            <button 
              onClick={onClose}
              className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs rounded-xl transition-all cursor-pointer shadow-xs"
            >
              ← Return to Dashboard
            </button>
          )}
        </div>

        {/* 3-Column Card Matrix Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categoriesList.map((category, index) => (
            <div 
              key={index}
              className="bg-white border border-slate-100 rounded-[22px] p-6 flex items-center gap-5 shadow-xs hover:shadow-sm transition-all duration-200 cursor-pointer group"
            >
              {/* Left Square Icon Element Layout */}
              <div className={`w-14 h-14 ${category.bgColor} ${category.iconColor} rounded-[18px] flex items-center justify-center shrink-0 transition-transform group-hover:scale-[1.02]`}>
                {category.icon}
              </div>

              {/* Card Meta Description Text */}
              <div className="space-y-1 truncate">
                <h3 className="text-base font-bold text-slate-900 tracking-tight">
                  {category.title}
                </h3>
                <p className="text-xs font-medium text-slate-400 tracking-normal truncate">
                  {category.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}