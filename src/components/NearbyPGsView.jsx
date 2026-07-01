// NearbyPGsView.jsx
import React from 'react';

export default function NearbyPGsView({ onClose }) {
  const pgListings = [
    {
      id: 1,
      title: "Sunrise PG for Girls",
      price: "$8500/mo",
      rating: "4.5",
      location: "12, MG Road, Indiranagar, Bangalore",
      distance: "0.8 km away",
      image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?q=80&w=600",
      tags: ["WiFi", "AC", "Meals"]
    },
    {
      id: 2,
      title: "Comfort Stay PG",
      price: "$7000/mo",
      rating: "4.2",
      location: "45, HSR Layout, Sector 6, Bangalore",
      distance: "1.2 km away",
      image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=600",
      tags: ["WiFi", "Meals", "Gym"]
    },
    {
      id: 3,
      title: "Green Valley PG",
      price: "$9000/mo",
      rating: "4",
      location: "8, Koramangala 4th Block, Bangalore",
      distance: "2.1 km away",
      image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=600",
      tags: ["WiFi", "AC", "Parking"]
    },
    {
      id: 4,
      title: "Urban Nest PG",
      price: "$12000/mo",
      rating: "3.9",
      location: "24, Indiranagar, Bangalore",
      distance: "1.5 km away",
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=600",
      tags: ["WiFi", "AC", "Power Backup"]
    }
  ];

  return (
    <div className="w-full min-h-screen bg-[#f8fafc] text-left font-sans pb-16">
      <div className="max-w-6xl mx-auto px-4 pt-8">
        
        {/* Navigation back and Header Row */}
        <div className="flex justify-between items-start mb-6">
          <div>
            <h1 className="text-3xl font-black text-[#0f172a] tracking-tight">Nearby PGs & Rooms</h1>
            <p className="text-sm font-medium text-slate-500 mt-1.5">
              Find the best places to stay closest to your current location.
            </p>
          </div>
          <button 
            onClick={onClose}
            className="px-4 py-2 bg-slate-900 text-white font-bold text-xs rounded-xl hover:bg-slate-800 transition-colors cursor-pointer"
          >
            ← Back to Dashboard
          </button>
        </div>

        {/* Listings Grid matching reference snapshot */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pgListings.map((pg) => (
            <div 
              key={pg.id} 
              className="bg-white border border-slate-100 rounded-[24px] overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between group cursor-pointer"
            >
              {/* Card Image Wrapper with Badges */}
              <div className="relative h-56 bg-slate-100 overflow-hidden">
                <img 
                  src={pg.image} 
                  alt={pg.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
                {/* Left Floating PG pill badge */}
                <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-xs px-2.5 py-0.5 rounded-md font-bold text-[10px] text-slate-800 shadow-xs">
                  Pg
                </span>
                {/* Right Floating Star Rating pill badge */}
                <div className="absolute top-3 right-3 bg-white px-2.5 py-0.5 rounded-md flex items-center gap-1 shadow-xs text-[11px] font-extrabold text-slate-800">
                  <span className="text-amber-500 text-[10px]">⭐</span> {pg.rating}
                </div>
              </div>

              {/* Information Body Area */}
              <div className="p-5 space-y-4">
                {/* Title and Pricing Bar */}
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-base font-black text-slate-800 tracking-tight leading-tight line-clamp-1">
                    {pg.title}
                  </h3>
                  <span className="text-[11px] font-black text-[#4f46e5] bg-[#eef2ff] px-2.5 py-1 rounded-md whitespace-nowrap">
                    {pg.price}
                  </span>
                </div>

                {/* Location pin with detailed address structure */}
                <div className="space-y-2">
                  <div className="flex items-start gap-1.5 text-xs text-slate-400 font-medium">
                    <span className="text-indigo-500 mt-0.5 shrink-0">📍</span>
                    <span className="text-slate-500/90 leading-relaxed line-clamp-2">{pg.location}</span>
                  </div>

                  {/* Relative Distance Tag */}
                  <div className="inline-block bg-[#eff6ff] text-[#2563eb] text-[10px] font-black px-2.5 py-1 rounded-md">
                    {pg.distance}
                  </div>
                </div>

                {/* Bottom Amenity Feature Badges */}
                <div className="flex flex-wrap gap-2 pt-1 border-t border-slate-50 mt-2">
                  {pg.tags.map((tag, idx) => (
                    <span 
                      key={idx} 
                      className="bg-slate-50 text-slate-400 text-[10px] font-bold px-2.5 py-0.5 rounded-md border border-slate-100/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
}