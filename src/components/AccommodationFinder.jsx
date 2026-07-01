import React, { useState, useEffect } from 'react';

export default function AccommodationFinder() {
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // API request handshake over to Spring Boot server
    fetch('http://localhost:5000/api/accommodations')
      .then((res) => {
        if (!res.ok) throw new Error('Network error mapping active records.');
        return res.json();
      })
      .then((data) => {
        setListings(data);
        setLoading(false);
      })
      .catch((err) => {
        // Fallback to mock data if Spring Boot isn't running yet so the UI doesn't crash
        console.log("Spring Boot offline, using local mock data.");
        setListings([
          { _id: '1', name: "Stanza Living - Verona House", type: "PG", price: 8500, area: "Viman Nagar", rating: 4.5, image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=400' },
          { _id: '2', name: "Zolo Stay - Elite Luxury", type: "Hostel", price: 6200, area: "Hinjewadi", rating: 4.2, image: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?q=80&w=400' },
          { _id: '3', name: "Cozy 2BHK Shared Flat", type: "Flat", price: 12000, area: "Koregaon Park", rating: 4.8, image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=400' }
        ]);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="text-center py-12 text-slate-500 font-medium">⏳ Syncing property database...</div>;

  return (
    <div>
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <input 
          type="text" 
          placeholder="Search by neighborhood area..." 
          className="flex-1 px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-cyan-500 outline-none text-sm text-slate-800"
        />
        <select className="px-4 py-3 border border-slate-200 rounded-xl bg-white text-sm text-slate-600 font-medium cursor-pointer">
          <option>Filter Price: Low to High</option>
          <option>Filter Price: High to Low</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {listings.map((item) => (
          <div key={item._id} className="border border-slate-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between group bg-white">
            <div>
              <div className="h-44 bg-slate-100 overflow-hidden relative">
                <img src={item.image} alt={item.name} className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-5">
                <span className="text-[10px] font-extrabold uppercase tracking-widest bg-cyan-50 text-cyan-600 px-2.5 py-1 rounded-md">{item.type}</span>
                <h3 className="font-bold text-slate-800 text-lg mt-3 truncate">{item.name}</h3>
                <p className="text-sm text-slate-500 mt-1">📍 {item.area}</p>
              </div>
            </div>
            <div className="p-5 pt-0">
              <div className="flex justify-between items-center pt-4 border-t border-slate-50">
                <span className="text-xl font-black text-slate-900">₹{item.price}<span className="text-xs text-slate-400 font-normal">/mo</span></span>
                <span className="text-sm font-semibold text-amber-500 bg-amber-50 px-2 py-0.5 rounded-md">⭐ {item.rating}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}