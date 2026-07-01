import React from 'react';

export default function HospitalsSubComponent() {
  const dataset = [
    { name: "Apollo Healthcare Institute", location: "Jubilee Hills, Hyderabad", timing: "24/7 Emergency Available", phone: "+91 40 2360 7777", types: ["Multispecialty", "ICU", "Trauma Care"], verified: true },
    { name: "Care Hospitals", location: "Banjara Hills, Hyderabad", timing: "24/7 Emergency Available", phone: "+91 40 6165 6565", types: ["Cardiology", "Neurology"], verified: true }
  ];

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="text-sm font-black text-slate-800 uppercase tracking-wider">Emergency & Medical Centers</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {dataset.map((item, i) => (
          <div key={i} className="bg-white border border-rose-100/60 rounded-2xl p-5 shadow-2xs space-y-3 relative overflow-hidden">
            <div className="absolute right-0 top-0 bg-rose-50 text-rose-500 text-[9px] font-black px-3 py-1 rounded-bl-xl tracking-wide">EMERGENCY LISTING</div>
            <div>
              <h4 className="text-xs font-black text-slate-800 flex items-center gap-1.5">
                {item.name} {item.verified && <span className="text-emerald-500 text-[10px]">✔</span>}
              </h4>
              <p className="text-[11px] font-bold text-slate-400 mt-0.5">📍 {item.location}</p>
            </div>
            <div className="bg-slate-50 p-2 rounded-xl text-[10px] font-semibold text-slate-500 space-y-0.5">
              <p className="flex items-center gap-1"><span className="text-rose-500">⏰</span> {item.timing}</p>
              <p className="flex items-center gap-1"><span>📞</span> {item.phone}</p>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {item.types.map((t, idx) => (
                <span key={idx} className="bg-rose-50 border border-rose-100/20 text-rose-600 text-[9px] font-extrabold px-2 py-0.5 rounded-md">{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}