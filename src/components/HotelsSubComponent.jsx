import React from 'react';

export default function HotelsSubComponent() {
  const dataset = [
    { name: "Grand Plaza Stay", location: "Gachibowli, Hyderabad", price: "₹3,200/night", rating: "4.7", specs: ["Free WiFi", "Pool", "AC", "Breakfast"], img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=400" },
    { name: "Oakwood Residency", location: "Hitech City, Hyderabad", price: "₹2,800/night", rating: "4.5", specs: ["Free WiFi", "Gym", "AC"], img: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=400" }
  ];

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="text-sm font-black text-slate-800 uppercase tracking-wider">Premium & Budget Hotels</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {dataset.map((item, i) => (
          <div key={i} className="bg-white border border-slate-100 rounded-2xl overflow-hidden p-4 flex gap-4 shadow-2xs">
            <img src={item.img} alt={item.name} className="w-28 h-24 rounded-xl object-cover shrink-0" />
            <div className="flex-1 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start">
                  <h4 className="text-xs font-black text-slate-800 truncate">{item.name}</h4>
                  <span className="text-[10px] font-bold text-amber-500">⭐ {item.rating}</span>
                </div>
                <p className="text-[11px] font-bold text-slate-400">📍 {item.location}</p>
              </div>
              <div className="flex flex-wrap gap-1">
                {item.specs.map((s, idx) => (
                  <span key={idx} className="bg-slate-50 text-slate-400 text-[9px] px-1.5 py-0.5 rounded-md font-bold">{s}</span>
                ))}
              </div>
              <div className="flex justify-between items-center pt-1 border-t border-slate-50">
                <span className="text-xs font-black text-indigo-600">{item.price}</span>
                <button className="bg-indigo-600 text-white text-[10px] font-bold px-2.5 py-1 rounded-md cursor-pointer">Book Room</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}