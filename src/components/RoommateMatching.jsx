import React from 'react';

export default function RoommateMatching() {
  const roommates = [
    { id: 1, name: "Rahul Sharma", profession: "Software Intern", budget: "₹7,000", habits: ["Non-smoker", "Early bird"], match: "95%" },
    { id: 2, name: "Sneha Patel", profession: "Student", budget: "₹5,500", habits: ["Vegetarian", "Studious"], match: "88%" }
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {roommates.map((person) => (
          <div key={person.id} className="p-5 border border-slate-100 rounded-2xl flex justify-between items-start hover:border-cyan-100 transition-all shadow-sm bg-white">
            <div>
              <h3 className="font-bold text-slate-800 text-lg">{person.name}</h3>
              <p className="text-sm text-cyan-600 font-semibold mt-0.5">{person.profession}</p>
              <p className="text-sm text-slate-500 mt-2">Target Budget: <b className="text-slate-700">{person.budget}</b></p>
              <div className="flex flex-wrap gap-1.5 mt-4">
                {person.habits.map((h, i) => (
                  <span key={i} className="text-[11px] bg-slate-100 text-slate-600 px-2.5 py-1 rounded-md font-medium">{h}</span>
                ))}
              </div>
            </div>
            <div className="text-right flex flex-col justify-between h-full min-h-[110px]">
              <span className="inline-block bg-emerald-50 text-emerald-700 font-bold px-3 py-1 rounded-lg text-xs">
                {person.match} Match
              </span>
              <button className="bg-gradient-to-r from-cyan-500 to-indigo-600 text-white text-xs px-4 py-2.5 rounded-xl font-bold shadow-sm hover:opacity-90 transition-opacity">
                Connect
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}