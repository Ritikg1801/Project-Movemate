import React from 'react';

import UserProfileView from './UserProfileView';
export default function Dashboard() {
  // Mock data for the featured listings row matching the images

  const [currentView, setCurrentView] = useState('dashboard');
  const featuredPlaces = [
    {
      id: 1,
      title: "Sunny Side PG",
      price: "$8500/mo",
      rating: "4.5",
      location: "12, MG Road, Ind...",
      image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?q=80&w=400"
    },
    {
      id: 2,
      title: "Cozy Living Space",
      price: "$7000/mo",
      rating: "4.2",
      location: "45, HSR Layout, ...",
      image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=400"
    },
    {
      id: 3,
      title: "Green View Stay",
      price: "$9000/mo",
      rating: "4",
      location: "8, Koramangala ...",
      image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=400"
    },
    {
      id: 4,
      title: "Urban Nest Co.",
      price: "$12000/mo",
      rating: "4.3",
      location: "24, Indiranagar ...",
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=400"
    }
  ];

  const quickCategories = [
    { label: "PGs", icon: "🏢", bgColor: "bg-blue-50", iconColor: "text-blue-600" },
    { label: "Rooms", icon: "🛏️", bgColor: "bg-indigo-50", iconColor: "text-indigo-600" },
    { label: "Hotels", icon: "🏨", bgColor: "bg-amber-50", iconColor: "text-amber-500" },
    { label: "Hospitals", icon: "➕", bgColor: "bg-rose-50", iconColor: "text-rose-500" },
    { label: "Restaurants", icon: "🍴", bgColor: "bg-orange-50", iconColor: "text-orange-500" },
    { label: "Colleges", icon: "🎓", bgColor: "bg-emerald-50", iconColor: "text-emerald-500" }
  ];

  return (
    <div className="space-y-10 text-left font-sans max-w-6xl mx-auto pb-12">
      
      {/* Welcome Heading Section */}
      <div>
        <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Welcome back, Traveler!</h1>
        <p className="text-sm font-medium text-slate-400 mt-1">Exploring your new city. Ready to settle in?</p>
      </div>

      {/* Metrics Row Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Total Saved Places Card */}
        <div className="bg-gradient-to-br from-indigo-600 to-indigo-500 text-white rounded-2xl p-6 shadow-md relative overflow-hidden flex flex-col justify-between min-h-[140px]">
          <span className="text-xs font-bold tracking-wide text-indigo-100 uppercase">Total Saved Places</span>
          <div className="flex items-center gap-2.5 mt-4">
            <span className="text-4xl font-black">0</span>
            <span className="text-2xl text-amber-400 animate-pulse">💛</span>
          </div>
        </div>

        {/* Total Places Available Card */}
        <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm flex flex-col justify-between min-h-[140px]">
          <span className="text-xs font-bold tracking-wide text-slate-400 uppercase">Total Places Available</span>
          <span className="text-4xl font-black text-slate-900 mt-4">0</span>
        </div>

        {/* Monthly Average Spend Card */}
        <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm flex flex-col justify-between min-h-[140px]">
          <div>
            <span className="text-xs font-bold tracking-wide text-slate-400 uppercase">Monthly Spend (Avg)</span>
            <p className="text-4xl font-black text-amber-500 mt-3">$1,240</p>
          </div>
          <p className="text-[11px] font-medium text-slate-400">Based on local averages</p>
        </div>
      </div>

      {/* Quick Categories Area */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold text-slate-900 tracking-tight">Quick Categories</h2>
          <button className="text-xs font-bold text-indigo-600 hover:text-indigo-700 flex items-center gap-1 transition-colors">
            View All <span>➔</span>
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {quickCategories.map((cat, idx) => (
            <div key={idx} className="bg-white border border-slate-100 rounded-2xl p-4 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-md transition-all cursor-pointer group">
              <div className={`w-12 h-12 ${cat.bgColor} ${cat.iconColor} rounded-2xl flex items-center justify-center text-xl font-bold mb-3 transition-transform group-hover:scale-105`}>
                {cat.icon}
              </div>
              <span className="text-xs font-bold text-slate-700">{cat.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Location Listings Carousel Row */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold text-slate-900 tracking-tight">Featured in Bangalore</h2>
          <button className="text-xs font-bold text-indigo-600 hover:text-indigo-700 flex items-center gap-1 transition-colors">
            More Recommended <span>➔</span>
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
          {featuredPlaces.map((place) => (
            <div key={place.id} className="bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between group cursor-pointer">
              {/* Photo Frame Container with Badge */}
              <div className="relative h-44 overflow-hidden bg-slate-100">
                <img 
                  src={place.image} 
                  alt={place.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-2.5 right-2.5 bg-white/90 backdrop-blur-sm px-2 py-0.5 rounded-lg flex items-center gap-1 shadow-sm text-[10px] font-black text-slate-800">
                  <span className="text-amber-500 text-[9px]">⭐</span> {place.rating}
                </div>
              </div>

              {/* Description Body Metadata */}
              <div className="p-4 space-y-2">
                <div className="flex items-center justify-between gap-1">
                  <h4 className="text-xs font-bold text-slate-800 truncate">{place.title}</h4>
                  <span className="text-xs font-extrabold text-indigo-600 whitespace-nowrap">{place.price}</span>
                </div>
                <div className="flex items-center gap-1 text-[11px] text-slate-400 font-medium">
                  <span>📍</span>
                  <span className="truncate">{place.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}