import React from 'react';

export default function CollegesSubComponent() {
  const dataset = [
    { name: "International Institute of Information Technology (IIIT-H)", location: "Gachibowli, Hyderabad", type: "Engineering & Research", ranking: "NIRF Top 50", courses: ["B.Tech CSE", "B.Tech ECE", "M.Tech"] },
    { name: "Jawaharlal Nehru Technological University", location: "Kukatpally, Hyderabad", type: "State University", ranking: "NAAC A+ Grade", courses: ["B.Tech", "M.Tech", "MBA", "MCA"] }
  ];

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="text-sm font-black text-slate-800 uppercase tracking-wider">Colleges & Educational Institutes</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {dataset.map((item, i) => (
          <div key={i} className="bg-white border border-emerald-100/40 rounded-2xl p-5 shadow-2xs space-y-4">
            <div className="flex justify-between items-start gap-4">
              <div>
                <h4 className="text-xs font-black text-slate-800 tracking-tight leading-snug">{item.name}</h4>
                <p className="text-[10px] font-bold text-emerald-600 mt-0.5">{item.type}</p>
                <p className="text-[11px] font-bold text-slate-400 mt-0.5">📍 {item.location}</p>
              </div>
              <span className="bg-emerald-50 text-emerald-600 text-[9px] font-black px-2 py-0.5 rounded-md shrink-0">{item.ranking}</span>
            </div>

            <div className="space-y-1.5 pt-2 border-t border-slate-50">
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Popular Streams Offered</p>
              <div className="flex flex-wrap gap-1.5">
                {item.courses.map((c, idx) => (
                  <span key={idx} className="bg-slate-50 text-slate-600 text-[10px] font-bold px-2 py-1 rounded-md border border-slate-100">{c}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}