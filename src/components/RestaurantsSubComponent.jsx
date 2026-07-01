import React from 'react';

export default function RestaurantsSubComponent() {
  const dataset = [
    { name: "Bawarchi Restaurant", location: "RTC X Roads, Hyderabad", type: "Biryani • North Indian", cost: "₹400 for two", rating: "4.4", tag: "Iconic Outlet", img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=400" },
    { name: "Chutneys Vegetarian", location: "Begumpet, Hyderabad", type: "South Indian • Pure Veg", cost: "₹300 for two", rating: "4.3", tag: "Breakfast Specialist", img: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=400" }
  ];

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="text-sm font-black text-slate-800 uppercase tracking-wider">Top Dine-outs & Food Spots</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {dataset.map((item, i) => (
          <div key={i} className="bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-2xs group flex flex-col sm:flex-row p-3 gap-4">
            <img src={item.img} alt={item.name} className="w-full sm:w-28 h-24 rounded-xl object-cover" />
            <div className="flex-1 flex flex-col justify-between text-left">
              <div>
                <div className="flex justify-between items-start">
                  <h4 className="text-xs font-black text-slate-800 line-clamp-1">{item.name}</h4>
                  <span className="bg-emerald-50 text-emerald-600 text-[10px] font-black px-1.5 py-0.5 rounded-md">{item.rating} ★</span>
                </div>
                <p className="text-[10px] font-bold text-orange-500 mt-0.5">{item.type}</p>
                <p className="text-[11px] font-bold text-slate-400">📍 {item.location}</p>
              </div>
              <div className="flex justify-between items-center pt-2 border-t border-slate-50 mt-2">
                <span className="text-[10px] font-bold text-slate-500">{item.cost}</span>
                <span className="bg-orange-50 text-orange-600 text-[9px] font-black px-2 py-0.5 rounded-md">{item.tag}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}