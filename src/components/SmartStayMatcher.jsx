import React from 'react';

export default function SmartStayMatcher() {
  const listings = [
    { title: 'Green Leaf PG', price: '₹7,500', loc: 'Ameerpet, Hyderabad', dist: '1.2 km away', rate: '⭐ 4.5' },
    { title: 'Sunrise Residency', price: '₹10,000', loc: 'Kukatpally, Hyderabad', dist: '2.5 km away', rate: '⭐ 4.8' },
    { title: 'Blue Bell Apartments', price: '₹11,500', loc: 'Hitech City, Hyderabad', dist: '0.8 km away', rate: '⭐ 4.6' }
  ];

  return (
    <div className="space-y-6">
      {/* Filtering Strip Header */}
      <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm flex flex-wrap gap-4 items-center justify-between">
        <div className="flex gap-4 items-center flex-wrap flex-1">
          <select className="bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs font-semibold focus:outline-indigo-500"><option>Hyderabad</option></select>
          <select className="bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs font-semibold focus:outline-indigo-500"><option>₹7,000 - ₹15,000</option></select>
          <select className="bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs font-semibold focus:outline-indigo-500"><option>PG / Hostel</option></select>
        </div>
        <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs px-5 py-2 rounded-xl shadow-md shadow-indigo-600/10">Search</button>
      </div>

      {/* Grid List */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {listings.map((item, idx) => (
          <div key={idx} className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden hover:translate-y-[-2px] transition-all">
            <div className="h-44 bg-slate-900 flex items-center justify-center relative text-white text-xs font-bold">
              <span className="opacity-40">📸 Property View Slot</span>
              <span className="absolute top-3 left-3 bg-indigo-600 text-white text-[10px] px-2 py-0.5 rounded-md font-bold uppercase">Featured</span>
              <span className="absolute bottom-3 right-3 bg-slate-950/70 backdrop-blur text-[10px] px-2 py-0.5 rounded-md font-bold">{item.rate}</span>
            </div>
            <div className="p-5 space-y-2">
              <h4 className="font-bold text-slate-800 text-base">{item.title}</h4>
              <p className="text-xs text-slate-400">📍 {item.loc} • {item.dist}</p>
              <div className="pt-3 border-t border-slate-50 flex justify-between items-center">
                <span className="text-indigo-600 font-extrabold text-sm">{item.price}/month</span>
                <button className="text-[11px] font-bold bg-slate-50 border border-slate-200 text-slate-700 px-3 py-1.5 rounded-lg hover:bg-slate-100">Details</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}