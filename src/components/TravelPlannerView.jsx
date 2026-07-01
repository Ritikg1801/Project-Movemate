import React, { useState } from 'react';

export default function TravelPlannerView() {
  const [activeTab, setActiveTab] = useState('My Trips');

  const tabs = ['My Trips', 'Explore', 'Itinerary Templates'];

  const metrics = [
    { label: "Days", value: "5", icon: "📅", bg: "bg-blue-50 text-blue-600" },
    { label: "Places", value: "12", icon: "📍", bg: "bg-pink-50 text-pink-600" },
    { label: "Est. Budget", value: "₹18,450", icon: "💳", bg: "bg-amber-50 text-amber-600" },
    { label: "Travelers", value: "4", icon: "👥", bg: "bg-indigo-50 text-indigo-600" }
  ];

  const itineraryDays = [
    {
      day: 1,
      title: "Arrival & Local Exploration",
      locations: "Charminar, Laad Bazaar, Salar Jung Museum",
      time: "9:00 AM - 8:00 PM",
      image: "https://images.unsplash.com/photo-1608958416715-da9f1cf206d2?q=80&w=300"
    },
    {
      day: 2,
      title: "Historical Hyderabad",
      locations: "Golconda Fort, Qutub Shahi Tombs, Taramati Baradari",
      time: "9:00 AM - 7:30 PM",
      image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=300"
    },
    {
      day: 3,
      title: "Ramoji Film City",
      locations: "Full day at Ramoji Film City",
      time: "9:00 AM - 6:00 PM",
      image: "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?q=80&w=300"
    },
    {
      day: 4,
      title: "Hussain Sagar & Tank Bund",
      locations: "Boat ride, Lumbini Park, Necklace Road",
      time: "4:00 PM - 10:00 PM",
      image: "https://images.unsplash.com/photo-1605130284535-11dd9eedc58a?q=80&w=300"
    },
    {
      day: 5,
      title: "Shopping & Departure",
      locations: "Inorbit Mall, Local Shopping",
      time: "10:00 AM - 3:00 PM",
      image: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?q=80&w=300"
    }
  ];

  const quickActions = [
    { title: "Add Destination", desc: "Add places to your trip", icon: "📍", bg: "bg-pink-50 text-pink-600" },
    { title: "Add Activity", desc: "Add activities / experiences", icon: "⭐", bg: "bg-orange-50 text-orange-600" },
    { title: "Find Stay", desc: "Find hotels or PGs", icon: "🏢", bg: "bg-blue-50 text-blue-600" },
    { title: "Estimate Budget", desc: "Calculate trip budget", icon: "📊", bg: "bg-emerald-50 text-emerald-600" },
    { title: "Share Trip", desc: "Share with friends", icon: "🔗", bg: "bg-indigo-50 text-indigo-600" },
    { title: "Export Itinerary", desc: "Download your trip plan", icon: "📥", bg: "bg-purple-50 text-purple-600" }
  ];

  const budgetItems = [
    { name: "Stay", amount: "₹8,000", color: "bg-indigo-600" },
    { name: "Food", amount: "₹4,200", color: "bg-emerald-500" },
    { name: "Transport", amount: "₹3,000", color: "bg-amber-400" },
    { name: "Activities", amount: "₹2,250", color: "bg-sky-400" },
    { name: "Shopping", amount: "₹1,000", color: "bg-rose-400" }
  ];

  return (
    <div className="w-full min-h-screen bg-[#f8fafc] text-left font-sans pb-16">
      <div className="max-w-7xl mx-auto px-6 pt-6 space-y-6">
        
        {/* HEADER SECTION */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-black text-slate-900 tracking-tight flex items-center gap-2">
              Traveler Planner <span className="text-[#4f46e5] text-xl">✈️</span>
            </h1>
            <p className="text-xs font-semibold text-slate-400 mt-0.5">
              Plan your trip, day by day
            </p>
          </div>
          <button className="bg-[#4f46e5] hover:bg-[#4338ca] text-white text-xs font-bold px-4 py-2.5 rounded-xl flex items-center gap-2 shadow-xs transition-colors cursor-pointer self-start sm:self-auto">
            <span>+</span> Create New Trip
          </button>
        </div>

        {/* PILL SUB-TABS NAVIGATION */}
        <div className="flex items-center gap-2 border-b border-slate-100 pb-1">
          {tabs.map((tab) => {
            const isSelected = activeTab === tab;
            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-1.5 text-xs font-bold rounded-xl border transition-all cursor-pointer ${
                  isSelected 
                    ? 'bg-[#eef2ff] border-[#4f46e5]/20 text-[#4f46e5]' 
                    : 'bg-white border-slate-200 text-slate-500 hover:bg-slate-50'
                }`}
              >
                {tab}
              </button>
            );
          })}
        </div>

        {/* MAIN WORKSPACE TWO-COLUMN SPLIT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* LEFT SIDE: MAIN TRIP TIMELINE STREAM */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* HERO TRIP BANNER PROFILE CARD */}
            <div className="bg-white border border-slate-100 rounded-[24px] overflow-hidden shadow-2xs">
              <div className="relative h-48 bg-slate-900">
                <img 
                  src="https://images.unsplash.com/photo-1608958416715-da9f1cf206d2?q=80&w=1000" 
                  alt="Hyderabad Getaway" 
                  className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent" />
                
                {/* Banner Upper Floating Avatars & Controls */}
                <div className="absolute top-4 right-4 flex items-center gap-2.5">
                  <div className="flex -space-x-2 overflow-hidden bg-black/10 p-1 rounded-full backdrop-blur-xs">
                    <img className="inline-block h-5 w-5 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80" alt="user" />
                    <img className="inline-block h-5 w-5 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80" alt="user" />
                    <img className="inline-block h-5 w-5 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80" alt="user" />
                    <div className="inline-block h-5 w-5 rounded-full ring-2 ring-white bg-slate-200 flex items-center justify-center text-[8px] font-black text-slate-600">+2</div>
                  </div>
                  <button className="w-6 h-6 bg-white/20 hover:bg-white/30 text-white rounded-full flex items-center justify-center text-xs backdrop-blur-xs font-bold">
                    ⋮
                  </button>
                </div>

                {/* Banner Context Details Text Overlay */}
                <div className="absolute bottom-4 left-5 space-y-2 text-left">
                  <div className="flex items-center gap-2">
                    <h2 className="text-xl font-black text-white tracking-tight">Hyderabad Getaway</h2>
                    <span className="text-white/60 text-xs cursor-pointer">✏️</span>
                  </div>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[11px] font-semibold text-slate-200/90">
                    <span className="flex items-center gap-1">📅 12 May - 16 May 2024</span>
                    <span className="flex items-center gap-1">⏱️ 5 Days / 4 Nights</span>
                    <span className="flex items-center gap-1">📍 Hyderabad, India</span>
                  </div>
                  <span className="inline-block bg-[#10b981] text-white text-[9px] font-extrabold px-2 py-0.5 rounded-md tracking-wider uppercase">
                    Upcoming
                  </span>
                </div>
              </div>

              {/* CARD FOOTER SUB-ROW SUMMARY METRICS */}
              <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-slate-100 border-t border-slate-50 bg-white p-3">
                {metrics.map((m, idx) => (
                  <div key={idx} className="flex items-center justify-center gap-2.5 py-1">
                    <div className={`w-8 h-8 ${m.bg} rounded-xl flex items-center justify-center text-sm`}>
                      {m.icon}
                    </div>
                    <div className="text-left">
                      <p className="text-xs font-black text-slate-800 leading-none">{m.value}</p>
                      <p className="text-[10px] font-semibold text-slate-400 mt-0.5 leading-none">{m.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* DAY BY DAY TIMELINE SECTION */}
            <div className="space-y-4">
              <h3 className="text-xs font-black text-slate-800 uppercase tracking-wider">Day by Day Itinerary</h3>
              
              <div className="relative border-l-2 border-dashed border-slate-200 pl-6 ml-4 space-y-4">
                {itineraryDays.map((item) => (
                  <div key={item.day} className="relative bg-white border border-slate-100 rounded-2xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-2xs hover:shadow-xs transition-all group">
                    
                    {/* Left Absolute Round Chrono Badge Icon */}
                    <div className="absolute -left-[35px] top-4 sm:top-1/2 sm:-translate-y-1/2 w-6 h-6 bg-[#eef2ff] border border-indigo-200 rounded-full flex flex-col items-center justify-center text-center shadow-xs">
                      <span className="text-[9px] font-black text-indigo-600 leading-none">{item.day}</span>
                      <span className="text-[6px] text-indigo-400 font-bold uppercase tracking-tight leading-none">Day</span>
                    </div>

                    {/* Left Main Information Blocks */}
                    <div className="space-y-1 flex-1 text-left">
                      <h4 className="text-xs font-black text-slate-800 tracking-tight group-hover:text-[#4f46e5] transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-[11px] font-bold text-slate-500 flex items-center gap-1">
                        <span className="text-indigo-400">📍</span> {item.locations}
                      </p>
                      <p className="text-[10px] font-semibold text-slate-400 flex items-center gap-1">
                        <span>🕒</span> {item.time}
                      </p>
                    </div>

                    {/* Right Media Thumbnail & Accordion Handler */}
                    <div className="flex items-center gap-3 self-end sm:self-auto shrink-0">
                      <div className="w-24 h-14 bg-slate-100 rounded-xl overflow-hidden shadow-2xs">
                        <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                      </div>
                      <span className="text-slate-300 text-xs font-bold cursor-pointer group-hover:text-slate-400 transition-colors">
                        ▼
                      </span>
                    </div>

                  </div>
                ))}
              </div>

              {/* Explicit "Add Day" Interactive Bottom Button Frame */}
              <button className="w-full border border-dashed border-slate-200 hover:border-[#4f46e5]/40 bg-white py-2.5 rounded-xl text-center text-xs font-bold text-[#4f46e5] flex items-center justify-center gap-1.5 transition-colors shadow-2xs cursor-pointer">
                <span>+</span> Add Day
              </button>
            </div>

          </div>

          {/* RIGHT SIDEBAR MODULE PANELS STACK */}
          <div className="space-y-6">
            
            {/* PANEL 1: DONUT CHART BUDGET OVERVIEW PANEL */}
            <div className="bg-white border border-slate-100 rounded-[24px] p-5 shadow-2xs space-y-4">
              <h3 className="text-xs font-black text-slate-800 uppercase tracking-wider">Trip Overview</h3>
              
              {/* Graphical Segment Representation Wrapper */}
              <div className="flex flex-col items-center py-2">
                <div className="relative w-32 h-32 flex items-center justify-center rounded-full border-[10px] border-indigo-600 border-t-emerald-500 border-r-amber-400 border-l-sky-400">
                  <div className="text-center">
                    <span className="text-sm font-black text-slate-800 tracking-tight">₹18,450</span>
                    <p className="text-[8px] font-bold text-slate-400 uppercase tracking-wider mt-0.5">Total Budget</p>
                  </div>
                </div>
              </div>

              {/* Data Rows Breakdown List */}
              <div className="space-y-2 pt-2 border-t border-slate-50">
                {budgetItems.map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between text-[11px] font-bold text-slate-600">
                    <div className="flex items-center gap-2">
                      <span className={`w-2 h-2 rounded-full ${item.color}`} />
                      <span className="text-slate-500 font-semibold">{item.name}</span>
                    </div>
                    <span className="text-slate-800 font-extrabold">{item.amount}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* PANEL 2: QUICK ACTIONS INTERACTIVE BADGE LIST */}
            <div className="bg-white border border-slate-100 rounded-[24px] p-5 shadow-2xs space-y-3">
              <h3 className="text-xs font-black text-slate-800 uppercase tracking-wider">Quick Actions</h3>
              
              <div className="grid grid-cols-1 gap-2.5">
                {quickActions.map((action, idx) => (
                  <div 
                    key={idx}
                    className="bg-white border border-slate-100/60 rounded-xl p-2.5 flex items-center gap-3 shadow-2xs hover:shadow-xs transition-all cursor-pointer group"
                  >
                    <div className={`w-8 h-8 ${action.bg} rounded-xl flex items-center justify-center text-sm font-bold shrink-0`}>
                      {action.icon}
                    </div>
                    <div className="truncate text-left">
                      <h4 className="text-xs font-black text-slate-800 tracking-tight group-hover:text-[#4f46e5] transition-colors">
                        {action.title}
                      </h4>
                      <p className="text-[10px] font-medium text-slate-400 mt-0.5 truncate">
                        {action.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* PANEL 3: CAROUSEL TRAVEL TIP HIGHLIGHT MODULE */}
            <div className="bg-white border border-slate-100 rounded-[24px] p-5 shadow-2xs space-y-3 text-left">
              <h3 className="text-xs font-black text-slate-800 uppercase tracking-wider">Travel Tips</h3>
              
              <div className="bg-amber-50/60 border border-amber-100/60 rounded-xl p-3.5 space-y-2">
                <p className="text-[11px] font-medium text-slate-600 leading-relaxed">
                  ☀️ Best time to visit Hyderabad is from <strong>October to March</strong> when the weather is pleasant.
                </p>
              </div>

              {/* Indicator Pips Dots */}
              <div className="flex items-center justify-center gap-1 pt-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#4f46e5]" />
                <span className="w-1 h-1 rounded-full bg-slate-200" />
                <span className="w-1 h-1 rounded-full bg-slate-200" />
                <span className="w-1 h-1 rounded-full bg-slate-200" />
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}