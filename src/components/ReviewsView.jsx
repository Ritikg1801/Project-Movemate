import React, { useState } from 'react';

export default function ReviewsView() {
  const [activeFilter, setActiveFilter] = useState('All Reviews');

  const stats = [
    { label: "Total Reviews", value: "1,286", meta: "All time reviews", icon: "⭐", bg: "bg-purple-50 text-purple-600" },
    { label: "Average Rating", value: "4.6", meta: "Out of 5", icon: "📈", bg: "bg-emerald-50 text-emerald-600", stars: true },
    { label: "Helpful Votes", value: "3,542", meta: "People found helpful", icon: "👍", bg: "bg-blue-50 text-blue-600" },
    { label: "Happy Users", value: "92%", meta: "Would recommend", icon: "👥", bg: "bg-amber-50 text-amber-500" }
  ];

  const ratingDistribution = [
    { stars: 5, percentage: "70%", count: "902", color: "bg-emerald-500" },
    { stars: 4, percentage: "20%", count: "257", color: "bg-emerald-400" },
    { stars: 3, percentage: "7%", count: "90", color: "bg-amber-400" },
    { stars: 2, percentage: "2%", count: "23", color: "bg-orange-400" },
    { stars: 1, percentage: "1%", count: "14", color: "bg-rose-500" }
  ];

  const categories = ["All Reviews", "Accommodation", "Local Guides", "City", "Roommates", "AI Buddy"];

  const topCategories = [
    { name: "Accommodation", rating: "4.7", reviews: "356", icon: "🏠", bg: "bg-blue-50 text-blue-600" },
    { name: "Local Guides", rating: "4.6", reviews: "245", icon: "👤", bg: "bg-emerald-50 text-emerald-600" },
    { name: "Explore City", rating: "4.5", reviews: "182", icon: "📍", bg: "bg-sky-50 text-sky-600" },
    { name: "Roommates", rating: "4.4", reviews: "92", icon: "👥", bg: "bg-rose-50 text-rose-600" },
    { name: "AI Buddy", rating: "4.8", reviews: "55", icon: "🤖", bg: "bg-purple-50 text-purple-600" }
  ];

  const recentReviews = [
    {
      id: 1,
      author: "Rohit Sharma",
      date: "2 days ago",
      rating: 5.0,
      verified: true,
      target: "Green Leaf PG, Ameerpet",
      comment: "Very clean rooms, good environment and excellent food. Staff is very supportive. Highly recommended!",
      tags: ["Cleanliness", "Food", "Location", "Staff"],
      likes: 24,
      image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?q=80&w=300"
    },
    {
      id: 2,
      author: "Priya Patel",
      date: "4 days ago",
      rating: 4.5,
      verified: true,
      target: "Rahul Sharma - Local Guide",
      comment: "Rahul is a fantastic guide! Knows every hidden place in Hyderabad. Very polite and helpful.",
      tags: ["Communication", "Knowledge", "Punctuality"],
      likes: 18,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300"
    },
    {
      id: 3,
      author: "Ankit Verma",
      date: "1 week ago",
      rating: 4.0,
      verified: true,
      target: "Hyderabad City Tour",
      comment: "The city tour was amazing. Covered major attractions and tried local food. Great experience!",
      tags: ["Sightseeing", "Food", "Value For Money"],
      likes: 15,
      image: "https://images.unsplash.com/photo-1608958416715-da9f1cf206d2?q=80&w=300"
    }
  ];

  const mostHelpful = [
    { name: "Rohit Sharma", target: "Green Leaf PG", votes: 34, icon: "👤" },
    { name: "Priya Patel", target: "Local Guide", votes: 28, icon: "👤" },
    { name: "Ankit Verma", target: "City Tour", votes: 18, icon: "👤" },
    { name: "Sneha Kulkarni", target: "Sunrise Residency PG", votes: 15, icon: "👤" },
    { name: "Karthik Iyer", target: "Hostel Stay", votes: 10, icon: "👤" }
  ];

  return (
    <div className="w-full min-h-screen bg-[#f8fafc] text-left font-sans pb-16">
      <div className="max-w-7xl mx-auto px-6 pt-6 space-y-6">
        
        {/* BREADCRUMB & HEADER */}
        <div className="space-y-1">
          <p className="text-[11px] font-bold text-slate-400 tracking-wide">
            Home &nbsp;➔&nbsp; <span className="text-slate-600">Reviews & Ratings</span>
          </p>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-1">
            <div>
              <h1 className="text-2xl font-black text-slate-900 tracking-tight flex items-center gap-2">
                Reviews & Ratings <span className="text-amber-400 text-xl">⭐</span>
              </h1>
              <p className="text-xs font-semibold text-slate-400 mt-0.5">
                See what people are saying about PGs, Local Guides and Cities
              </p>
            </div>
            
            <div className="flex items-center gap-3">
              <button className="bg-[#4f46e5] hover:bg-[#4338ca] text-white text-xs font-bold px-4 py-2.5 rounded-xl flex items-center gap-2 shadow-xs transition-colors cursor-pointer">
                📝 Write a Review
              </button>
              <button className="bg-white border border-slate-200 text-slate-700 text-xs font-bold px-4 py-2.5 rounded-xl shadow-2xs hover:bg-slate-50 transition-colors">
                📂 My Reviews
              </button>
            </div>
          </div>
        </div>

        {/* TOP LEVEL STATS ROw */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {stats.map((stat, i) => (
            <div key={i} className="bg-white border border-slate-100 rounded-2xl p-5 flex items-center gap-4 shadow-2xs">
              <div className={`w-11 h-11 ${stat.bg} rounded-full flex items-center justify-center text-lg font-bold shrink-0`}>
                {stat.icon}
              </div>
              <div>
                <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">{stat.label}</p>
                <div className="flex items-baseline gap-2 mt-0.5">
                  <span className="text-xl font-black text-slate-800">{stat.value}</span>
                  {stat.stars && <span className="text-amber-400 text-xs">★★★★★</span>}
                </div>
                <p className="text-[10px] font-medium text-slate-400 mt-0.5">{stat.meta}</p>
              </div>
            </div>
          ))}
        </div>

        {/* MIDDLE SECTION - METRICS AND CATEGORY GRAPH BAR SPLIT */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* RATINGS OVERVIEW CARD */}
          <div className="lg:col-span-2 bg-white border border-slate-100 rounded-2xl p-6 shadow-2xs grid grid-cols-1 md:grid-cols-3 gap-6 items-center relative">
            
            {/* Circular score box */}
            <div className="flex flex-col items-center justify-center text-center space-y-1.5 border-r border-slate-100/80 pr-2">
              <p className="text-xs font-bold text-slate-500 uppercase tracking-wide">Ratings Overview</p>
              <div className="relative w-28 h-28 flex items-center justify-center rounded-full border-8 border-emerald-500 border-t-amber-400">
                <div className="text-center">
                  <span className="text-3xl font-black text-slate-800 tracking-tight">4.6</span>
                  <p className="text-[10px] font-bold text-amber-500">★</p>
                </div>
              </div>
              <div className="text-center">
                <p className="text-xs font-bold text-slate-700">★★★★★</p>
                <p className="text-[10px] font-medium text-slate-400 mt-0.5">(1,286 Reviews)</p>
              </div>
            </div>

            {/* Distribution Progression Rows */}
            <div className="md:col-span-2 space-y-2">
              {ratingDistribution.map((row) => (
                <div key={row.stars} className="flex items-center gap-3 text-xs font-bold text-slate-600">
                  <span className="w-3 text-right">{row.stars}★</span>
                  <div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden">
                    <div className={`h-full ${row.color}`} style={{ width: row.percentage }}></div>
                  </div>
                  <span className="w-8 text-right text-slate-700">{row.percentage}</span>
                  <span className="w-10 text-right text-slate-400 font-medium">({row.count})</span>
                </div>
              ))}
              <p className="text-[10px] font-semibold text-slate-400 pt-1 text-center md:text-left">Rating distribution of all services</p>
            </div>

            {/* Floating Floating "Rate This App" Promo container inside */}
            <div className="absolute bottom-4 right-4 bg-slate-50/50 border border-slate-200/50 rounded-xl p-3 text-center hidden md:block w-40">
              <p className="text-[10px] font-bold text-slate-700">Rate This App</p>
              <p className="text-amber-400 text-xs my-1">☆☆☆☆☆</p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-[9px] px-2.5 py-1 rounded-md tracking-wide transition-colors">
                Rate Now
              </button>
            </div>
          </div>

          {/* RIGHT SIDE: TOP RATED CATEGORIES LIST */}
          <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-2xs flex flex-col justify-between">
            <div className="flex items-center justify-between border-b border-slate-50 pb-2.5">
              <h3 className="text-xs font-black text-slate-800 uppercase tracking-wide">Top Rated Categories</h3>
              <span className="text-[11px] font-bold text-blue-600 cursor-pointer hover:underline">View All</span>
            </div>

            <div className="space-y-2.5 pt-2.5">
              {topCategories.map((cat, idx) => (
                <div key={idx} className="flex items-center justify-between text-xs font-bold text-slate-700 p-1.5 rounded-lg hover:bg-slate-50/60 transition-colors">
                  <div className="flex items-center gap-2.5">
                    <div className={`w-7 h-7 ${cat.bg} rounded-md flex items-center justify-center text-xs`}>
                      {cat.icon}
                    </div>
                    <span className="text-slate-800">{cat.name}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-right">
                    <span className="text-slate-800">{cat.rating}★</span>
                    <span className="text-slate-400 font-medium">({cat.reviews})</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* GRID FILTER PILL TABS BAR */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-1">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => {
              const isSelected = activeFilter === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`px-3.5 py-1.5 text-xs font-bold rounded-full border transition-all cursor-pointer ${
                    isSelected 
                      ? 'bg-blue-600 border-blue-600 text-white shadow-xs' 
                      : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
          <span className="text-xs font-bold text-slate-400 cursor-pointer flex items-center gap-1">🎛️ Filter</span>
        </div>

        {/* BOTTOM CONTENT STREAM AREA */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* LEFT RECENT REVIEW BLOCK LIST */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-sm font-black text-slate-800 uppercase tracking-wide">Recent Reviews</h2>
              <span className="text-xs font-bold text-blue-600 cursor-pointer hover:underline">View All Reviews</span>
            </div>

            {recentReviews.map((rev) => (
              <div key={rev.id} className="bg-white border border-slate-100 rounded-2xl p-4 flex flex-col md:flex-row gap-4 shadow-2xs hover:shadow-xs transition-all">
                {/* Image Banner Container */}
                <div className="w-full md:w-36 h-24 bg-slate-100 rounded-xl overflow-hidden shrink-0 relative">
                  <img src={rev.image} alt="target" className="w-full h-full object-cover" />
                  <div className="absolute top-2 right-2 w-5 h-5 bg-white/80 backdrop-blur-xs rounded-full flex items-center justify-center text-[10px]">💙</div>
                </div>

                {/* Review Metadata Content Box */}
                <div className="flex-1 flex flex-col justify-between space-y-2">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-black text-slate-800">{rev.author}</span>
                        {rev.verified && <span className="bg-emerald-50 text-emerald-600 text-[9px] font-extrabold px-1.5 py-0.5 rounded-md">✔ Verified</span>}
                        <span className="text-[10px] text-slate-400 font-medium">{rev.date}</span>
                      </div>
                      <h4 className="text-xs font-black text-indigo-600 mt-1">{rev.target}</h4>
                    </div>
                    <span className="text-slate-300 text-sm cursor-pointer">⋮</span>
                  </div>

                  <p className="text-xs font-medium text-slate-500 leading-relaxed line-clamp-2">
                    "{rev.comment}"
                  </p>

                  {/* Horizontal pill category tags row */}
                  <div className="flex flex-wrap items-center justify-between gap-2 pt-1 border-t border-slate-50">
                    <div className="flex flex-wrap gap-1.5">
                      {rev.tags.map((tag, idx) => (
                        <span key={idx} className="bg-slate-50 border border-slate-100 text-slate-500 font-bold text-[9px] px-2 py-0.5 rounded-md">
                          • {tag}
                        </span>
                      ))}
                    </div>

                    <button className="bg-slate-50 hover:bg-slate-100 text-slate-600 border border-slate-200/60 font-bold text-[10px] px-2.5 py-1 rounded-lg flex items-center gap-1 transition-colors">
                      👍 {rev.likes}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT PANELS ADJACENT FLOW CONTAINER */}
          <div className="space-y-5">
            
            {/* PANEL 1: MOST HELPFUL REVIEWS STACK */}
            <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-2xs">
              <div className="flex items-center justify-between border-b border-slate-50 pb-2.5">
                <h3 className="text-xs font-black text-slate-800 uppercase tracking-wide">Most Helpful Reviews</h3>
                <span className="text-[11px] font-bold text-blue-600 cursor-pointer hover:underline">View All</span>
              </div>

              <div className="space-y-3 pt-3">
                {mostHelpful.map((user, i) => (
                  <div key={i} className="flex items-center justify-between text-xs font-bold text-slate-700">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 bg-slate-100 rounded-full flex items-center justify-center text-[11px]">
                        {user.icon}
                      </div>
                      <div>
                        <p className="text-slate-800 font-black tracking-tight">{user.name}</p>
                        <p className="text-[10px] text-slate-400 font-medium">{user.target}</p>
                      </div>
                    </div>
                    <span className="bg-emerald-50 text-emerald-600 text-[10px] px-1.5 py-0.5 rounded-md">
                      👍 {user.votes}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* PANEL 2: SHARE YOUR EXPERIENCE FOOTER PROMO */}
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 border border-indigo-100/40 rounded-2xl p-5 shadow-2xs relative overflow-hidden">
              <h4 className="text-xs font-black text-slate-800 uppercase tracking-wide">Share Your Experience</h4>
              <p className="text-[11px] font-medium text-slate-500 mt-1 max-w-[200px]">
                Help others by sharing your honest review now.
              </p>
              
              <div className="flex items-center gap-1.5 my-3">
                <span className="bg-amber-100 text-amber-600 font-bold text-[10px] px-2 py-0.5 rounded-sm">★ ★ ★ ★ ★</span>
              </div>

              <button className="w-full bg-[#4f46e5] hover:bg-[#4338ca] text-white text-xs font-bold py-2 rounded-xl shadow-xs transition-colors cursor-pointer text-center">
                Write Review Now
              </button>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}