import React, { useState } from 'react';
import NearbyPGsView from './NearbyPGsView'; 
import CategoriesView from './Categories'; // Integrated Category Subcomponent
import AIBuddyView from './AIBuddyView'; // Integrated AI Buddy Subcomponent
import ExpensesView from './ExpensesView'; // Integrated Expenses Subcomponent
import SavedPlacesView from './SavedPlacesView'; // Integrated Saved Places Subcomponent
import TravelPlannerView from './TravelPlannerView'; // Integrated Travel Planner Subcomponent
import LocalGuides from './LocalGuides'; // Integrated Local Guide Subcomponent
import ReviewsView from './ReviewsView'; // Integrated Reviews Subcomponent
import RoomsView from './RoomsView'; // Integrated User Profile Subcomponent
import CollegesSubComponent from './CollegesSubComponent'; // Integrated Colleges Subcomponent
import HospitalsSubComponent from './HospitalsSubComponent'; // Integrated Hospitals Subcomponent
import RestaurantssubComponent from './RestaurantssubComponent'; // Integrated Restaurants Subcomponent
import HotelsSubComponent from './HotelsSubComponent'; // Integrated Hotels Subcomponent

export default function OverviewDashboard() {
  // Local state handling which modular subview overlay layer to return
  const [activeSubView, setActiveSubView] = useState(null);

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
    }
  ];

  // FIXED: Every item now has its own unique viewKey string matching your file imports
  const quickCategories = [
    { label: "PGs", icon: "🏢", bgColor: "bg-blue-50", iconColor: "text-blue-600", viewKey: "pgs" },
    { label: "Rooms", icon: "🛏️", bgColor: "bg-indigo-50", iconColor: "text-indigo-600", viewKey: "rooms" },
    { label: "Hotels", icon: "🏨", bgColor: "bg-amber-50", iconColor: "text-amber-500", viewKey: "hotels" },
    { label: "Hospitals", icon: "➕", bgColor: "bg-rose-50", iconColor: "text-rose-500", viewKey: "hospitals" },
    { label: "Restaurants", icon: "🍴", bgColor: "bg-orange-50", iconColor: "text-orange-500", viewKey: "restaurants" },
    { label: "Colleges", icon: "🎓", bgColor: "bg-emerald-50", iconColor: "text-emerald-500", viewKey: "colleges" }
  ];

  // ==========================================
  // MASTER CONDITIONAL SWITCH INTERCEPTORS
  // ==========================================
  if (activeSubView === 'pgs') return <NearbyPGsView onClose={() => setActiveSubView(null)} />;
  if (activeSubView === 'categories') return <CategoriesView onClose={() => setActiveSubView(null)} />;
  if (activeSubView === 'rooms') return <RoomsView onClose={() => setActiveSubView(null)} />;
  if (activeSubView === 'hotels') return <HotelsSubComponent onClose={() => setActiveSubView(null)} />;
  if (activeSubView === 'hospitals') return <HospitalsSubComponent onClose={() => setActiveSubView(null)} />;
  if (activeSubView === 'restaurants') return <RestaurantssubComponent onClose={() => setActiveSubView(null)} />;
  if (activeSubView === 'colleges') return <CollegesSubComponent onClose={() => setActiveSubView(null)} />;
  if (activeSubView === 'aibuddy') return <AIBuddyView onClose={() => setActiveSubView(null)} />;
  if (activeSubView === 'expenses') return <ExpensesView onClose={() => setActiveSubView(null)} />;
  if (activeSubView === 'saved') return <SavedPlacesView onClose={() => setActiveSubView(null)} />;
  if (activeSubView === 'travel') return <TravelPlannerView onClose={() => setActiveSubView(null)} />;
  if (activeSubView === 'guides') return <LocalGuides onClose={() => setActiveSubView(null)} />;
  if (activeSubView === 'reviews') return <ReviewsView onClose={() => setActiveSubView(null)} />;

  return (
    <div className="space-y-10 text-left font-sans max-w-6xl mx-auto pb-12">
      
      {/* Welcome Heading Section */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Welcome back, Traveler!</h1>
          <p className="text-sm font-medium text-slate-400 mt-1">Exploring your new city. Ready to settle in?</p>
        </div>
        <button 
          onClick={() => setActiveSubView('aibuddy')}
          className="bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold px-4 py-2.5 rounded-xl transition-all cursor-pointer shadow-xs"
        >
          🤖 Open AI Buddy
        </button>
      </div>

      {/* Metrics Row Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div 
          onClick={() => setActiveSubView('saved')}
          className="bg-gradient-to-br from-indigo-600 to-indigo-500 text-white rounded-2xl p-6 shadow-md relative overflow-hidden flex flex-col justify-between min-h-[140px] cursor-pointer hover:opacity-95"
        >
          <span className="text-xs font-bold tracking-wide text-indigo-100 uppercase">Total Saved Places</span>
          <div className="flex items-center gap-2.5 mt-4">
            <span className="text-4xl font-black">12</span>
            <span className="text-2xl text-amber-400 animate-pulse">💛</span>
          </div>
        </div>

        <div 
          onClick={() => setActiveSubView('travel')}
          className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm flex flex-col justify-between min-h-[140px] cursor-pointer hover:border-slate-200"
        >
          <span className="text-xs font-bold tracking-wide text-slate-400 uppercase">Total Places Available</span>
          <span className="text-4xl font-black text-slate-900 mt-4">3 Active</span>
        </div>

        <div 
          onClick={() => setActiveSubView('expenses')}
          className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm flex flex-col justify-between min-h-[140px] cursor-pointer hover:border-slate-200"
        >
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
          <button 
            onClick={() => setActiveSubView('categories')}
            className="text-xs font-bold text-indigo-600 hover:text-indigo-700 flex items-center gap-1 transition-colors cursor-pointer"
          >
            View All <span>➔</span>
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {quickCategories.map((cat, idx) => (
            <div 
              key={idx} 
              onClick={() => setActiveSubView(cat.viewKey)}
              className="bg-white border border-slate-100 rounded-2xl p-4 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-md transition-all cursor-pointer group"
            >
              <div className={`w-12 h-12 ${cat.bgColor} ${cat.iconColor} rounded-2xl flex items-center justify-center text-xl font-bold mb-3 transition-transform group-hover:scale-105`}>
                {cat.icon}
              </div>
              <span className="text-xs font-bold text-slate-700">{cat.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Extra Dedicated Quick Action Links */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div 
          onClick={() => setActiveSubView('guides')}
          className="p-4 bg-white border border-slate-100 rounded-xl flex items-center justify-between cursor-pointer hover:border-indigo-100 transition-colors"
        >
          <span className="text-xs font-bold text-slate-700">🗺️ Hire Neighborhood Local Guides</span>
          <span className="text-xs font-bold text-indigo-600">&rarr;</span>
        </div>
        <div 
          onClick={() => setActiveSubView('reviews')}
          className="p-4 bg-white border border-slate-100 rounded-xl flex items-center justify-between cursor-pointer hover:border-indigo-100 transition-colors"
        >
          <span className="text-xs font-bold text-slate-700">⭐ Read Community Resident Reviews</span>
          <span className="text-xs font-bold text-indigo-600">&rarr;</span>
        </div>
      </div>

      {/* Featured Location Listings Carousel Row */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold text-slate-900 tracking-tight">Featured in Bangalore</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
          {featuredPlaces.map((place) => (
            <div key={place.id} className="bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between group cursor-pointer">
              <div className="relative h-44 overflow-hidden bg-slate-100">
                <img src={place.image} alt={place.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute top-2.5 right-2.5 bg-white/90 backdrop-blur-sm px-2 py-0.5 rounded-lg flex items-center gap-1 shadow-sm text-[10px] font-black text-slate-800">
                  <span className="text-amber-500 text-[9px]">⭐</span> {place.rating}
                </div>
              </div>

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