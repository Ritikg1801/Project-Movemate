import React from 'react';

export default function ExpenseTracker() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm"><p className="text-xs text-slate-400 font-bold uppercase">Budget Cap</p><h3 className="text-xl font-black text-slate-800 mt-1">₹20,000</h3></div>
        <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm"><p className="text-xs text-slate-400 font-bold uppercase">Utilized Cash</p><h3 className="text-xl font-black text-rose-500 mt-1">₹12,450</h3></div>
        <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm"><p className="text-xs text-slate-400 font-bold uppercase">Available Float</p><h3 className="text-xl font-black text-emerald-500 mt-1">₹7,550</h3></div>
      </div>
      <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
        <h4 className="font-bold text-sm text-slate-800 mb-4">Flat Maintenance Shared Ledger</h4>
        <div className="space-y-2.5">
          {[{ name: 'Apartment Security Deposit', val: '₹7,500', cat: 'Housing' }, { name: 'Highspeed Fiber Internet', val: '₹450', cat: 'Utilities' }].map((row, i) => (
            <div key={i} className="flex justify-between items-center text-xs p-3.5 bg-slate-50 rounded-xl border border-slate-100">
              <div>
                <p className="font-bold text-slate-700">{row.name}</p>
                <span className="text-[9px] bg-slate-200/70 text-slate-600 font-bold px-2 py-0.5 rounded mt-1 inline-block uppercase tracking-wide">{row.cat}</span>
              </div>
              <span className="font-black text-slate-800">{row.val}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}