import React from 'react';

export default function RoommateMatcher() {
  const users = [
    { name: 'Rahul Verma', role: 'Software Engineer', match: '96%' },
    { name: 'Ankit Sharma', role: 'Data Analyst', match: '91%' },
    { name: 'Siddharth K.', role: 'Student', match: '88%' }
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold text-slate-800">Find Compatible Roommates</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {users.map((peer, i) => (
          <div key={i} className="bg-white border border-slate-100 rounded-2xl p-6 text-center shadow-sm relative space-y-4">
            <span className="absolute top-4 right-4 bg-emerald-50 text-emerald-600 font-black text-[10px] px-2.5 py-1 rounded-full border border-emerald-200">{peer.match} Match</span>
            <div className="w-16 h-16 bg-gradient-to-tr from-indigo-500 to-purple-500 text-white font-bold text-xl rounded-full flex items-center justify-center mx-auto shadow-inner">{peer.name[0]}</div>
            <div>
              <h4 className="font-bold text-slate-800">{peer.name}</h4>
              <p className="text-xs text-slate-400 font-medium mt-0.5">{peer.role}</p>
            </div>
            <div className="bg-slate-50 rounded-xl p-3 text-left text-[11px] text-slate-500 space-y-1 font-medium">
              <p>🚭 Non-smoker • 🥦 Veg Only</p>
              <p>🏠 Preferred Location: Hitech City</p>
            </div>
            <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs py-2.5 rounded-xl transition-colors">Send Connection Hook</button>
          </div>
        ))}
      </div>
    </div>
  );
}