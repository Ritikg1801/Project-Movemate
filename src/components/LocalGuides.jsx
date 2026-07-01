import React from 'react';

export default function LocalGuides() {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold text-slate-800">Meet Local Guides</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {['Rahul Sharma', 'Priya Patel', 'Arjun Reddy'].map((guide, i) => (
          <div key={i} className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm space-y-4">
            <div className="flex gap-3 items-center">
              <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center text-lg">👨‍💼</div>
              <div>
                <h4 className="font-bold text-sm text-slate-800">{guide}</h4>
                <p className="text-[11px] text-slate-400 font-medium">Authorized City Advisor • {4 + i} Years Exp.</p>
              </div>
            </div>
            <div className="text-[11px] text-slate-500 space-y-1">
              <p>🗣️ Speaks: English, Hindi, Telugu</p>
              <p>✅ Verified Broker License Framework</p>
            </div>
            <button className="w-full bg-slate-900 text-white font-bold text-xs py-2 rounded-xl hover:bg-slate-800">Contact Advisor</button>
          </div>
        ))}
      </div>
    </div>
  );
}