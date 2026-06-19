import React, { useState } from 'react';

export default function SearchPlanner() {
  const [city, setCity] = useState('Pune');
  const [budget, setBudget] = useState(10000);

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded-xl shadow-md border border-gray-200">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Smart Relocation Planner</h2>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-semibold text-gray-600 mb-1">Target City</label>
          <select value={city} onChange={(e) => setCity(e.target.value)} className="w-full border p-2 rounded-lg bg-gray-50">
            <option value="Pune">Pune</option>
            <option value="Bangalore">Bangalore</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-600 mb-1">Max Monthly Budget (INR)</label>
          <input type="number" value={budget} onChange={(e) => setBudget(e.target.value)} className="w-full border p-2 rounded-lg bg-gray-50" />
        </div>

        <button onClick={() => alert(`Searching for PGs in ${city} under ₹${budget}`)} className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2 rounded-lg transition">
          Generate Settlement Plan
        </button>
      </div>
    </div>
  );
}