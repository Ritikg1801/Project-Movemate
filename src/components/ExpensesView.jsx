import React from 'react';

export default function ExpensesView({ onAddExpense }) {
  const transactions = [
    {
      id: 1,
      title: "Books – Flipkart",
      category: "Education",
      date: "25/06/2026",
      amount: "$680"
    },
    {
      id: 2,
      title: "Auto to station",
      category: "Transport",
      date: "24/06/2026",
      amount: "$120"
    },
    {
      id: 3,
      title: "Breakfast – Cafe Cubana",
      category: "Food",
      date: "22/06/2026",
      amount: "$280"
    },
    {
      id: 4,
      title: "Movie – PVR Cinemas",
      category: "Entertainment",
      date: "20/06/2026",
      amount: "$500"
    },
    {
      id: 5,
      title: "Pharmacy – medicines",
      category: "Medical",
      date: "18/06/2026",
      amount: "$140"
    }
  ];

  return (
    <div className="w-full min-h-screen bg-[#f8fafc] text-left font-sans pb-12">
      <div className="max-w-7xl mx-auto px-6 pt-8">
        
        {/* TOP HEADER SECTION */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-black text-[#0f172a] tracking-tight">Expenses</h1>
            <p className="text-sm font-medium text-slate-400 mt-1">
              Track your relocation and living costs.
            </p>
          </div>
          
          <button 
            onClick={onAddExpense}
            className="bg-[#4f46e5] hover:bg-[#4338ca] text-white text-xs font-bold px-5 py-2.5 rounded-xl flex items-center gap-1.5 shadow-xs transition-colors cursor-pointer"
          >
            <span className="text-sm font-semibold">+</span> Add Expense
          </button>
        </div>

        {/* MAIN STRUCTURAL LAYOUT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* LEFT SIDEBAR COLUMN (Width: 4/12) */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* This Month Highlight Banner Box */}
            <div className="bg-[#4f46e5] rounded-[24px] p-6 text-white min-h-[140px] flex flex-col justify-between shadow-xs">
              <div className="flex items-center gap-1.5 text-xs font-bold text-indigo-100/90 tracking-wide">
                <span>📅</span> This Month
              </div>
              <div className="text-4xl font-black tracking-tight mt-4">$0</div>
            </div>

            {/* Breakdown Ring Chart Presentation Box */}
            <div className="bg-white border border-slate-100 rounded-[24px] p-6 shadow-xs flex flex-col justify-between min-h-[380px]">
              <h3 className="text-base font-black text-slate-800 tracking-tight">Breakdown</h3>
              
              {/* SVG Ring Graph Emulation */}
              <div className="relative flex items-center justify-center my-6">
                <svg className="w-44 h-44 transform -rotate-90" viewBox="0 0 100 100">
                  {/* rent segment */}
                  <circle cx="50" cy="50" r="40" stroke="#2dd4bf" strokeWidth="10" fill="transparent" strokeDasharray="140 251.2" />
                  {/* food segment */}
                  <circle cx="50" cy="50" r="40" stroke="#818cf8" strokeWidth="10" fill="transparent" strokeDasharray="50 251.2" strokeDashoffset="-140" />
                  {/* transport segment */}
                  <circle cx="50" cy="50" r="40" stroke="#fbc02d" strokeWidth="10" fill="transparent" strokeDasharray="25 251.2" strokeDashoffset="-190" />
                  {/* medical segment */}
                  <circle cx="50" cy="50" r="40" stroke="#f87171" strokeWidth="10" fill="transparent" strokeDasharray="15 251.2" strokeDashoffset="-215" />
                  {/* entertainment segment */}
                  <circle cx="50" cy="50" r="40" stroke="#fb923c" strokeWidth="10" fill="transparent" strokeDasharray="12 251.2" strokeDashoffset="-230" />
                  {/* education segment */}
                  <circle cx="50" cy="50" r="40" stroke="#c084fc" strokeWidth="10" fill="transparent" strokeDasharray="9 251.2" strokeDashoffset="-242" />
                </svg>

                {/* Simulated rent hover tag label match verbatim */}
                <div className="absolute top-12 right-6 bg-white border border-slate-100 rounded-md px-3 py-1.5 shadow-sm text-center text-xs font-bold text-slate-800 pointer-events-none">
                  rent : $17000
                </div>
              </div>

              {/* Legend Badges Row Grid layout */}
              <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 pt-2 border-t border-slate-50">
                <span className="flex items-center gap-1.5 text-xs font-bold text-[#2dd4bf]"><span className="w-2.5 h-2.5 rounded-full bg-[#2dd4bf]" />rent</span>
                <span className="flex items-center gap-1.5 text-xs font-bold text-[#818cf8]"><span className="w-2.5 h-2.5 rounded-full bg-[#818cf8]" />food</span>
                <span className="flex items-center gap-1.5 text-xs font-bold text-[#fbc02d]"><span className="w-2.5 h-2.5 rounded-full bg-[#fbc02d]" />transport</span>
                <span className="flex items-center gap-1.5 text-xs font-bold text-[#f87171]"><span className="w-2.5 h-2.5 rounded-full bg-[#f87171]" />medical</span>
                <span className="flex items-center gap-1.5 text-xs font-bold text-[#c084fc]"><span className="w-2.5 h-2.5 rounded-full bg-[#c084fc]" />education</span>
                <span className="flex items-center gap-1.5 text-xs font-bold text-[#fb923c]"><span className="w-2.5 h-2.5 rounded-full bg-[#fb923c]" />entertainment</span>
              </div>
            </div>

          </div>

          {/* RIGHT CONTENT COLUMN (Width: 8/12) */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Total Spent Stat Box */}
            <div className="bg-white border border-slate-100 rounded-[24px] p-6 shadow-xs min-h-[140px] flex flex-col justify-between">
              <div className="flex items-center gap-1.5 text-xs font-bold text-slate-400 tracking-wide">
                <span>📈</span> Total Spent
              </div>
              <div className="text-4xl font-black text-slate-900 tracking-tight mt-4">$27450</div>
            </div>

            {/* Recent Transactions Interactive Feed Box */}
            <div className="bg-white border border-slate-100 rounded-[24px] p-6 shadow-xs min-h-[380px] flex flex-col">
              <h3 className="text-base font-black text-slate-800 tracking-tight mb-5">Recent Transactions</h3>
              
              {/* Virtual Scroll Area */}
              <div className="flex-1 overflow-y-auto max-h-[290px] pr-2 space-y-0.5 custom-scrollbar">
                {transactions.map((tx) => (
                  <div 
                    key={tx.id} 
                    className="flex items-center justify-between py-4 border-b border-slate-100/70 last:border-b-0 group hover:bg-slate-50/40 px-2 rounded-xl transition-colors"
                  >
                    <div className="space-y-1.5 text-left">
                      <h4 className="text-xs font-bold text-slate-800 tracking-tight group-hover:text-indigo-600 transition-colors">
                        {tx.title}
                      </h4>
                      <div className="flex items-center gap-2.5 text-[10px] font-semibold text-slate-400">
                        <span className="bg-slate-100 text-slate-500 px-2 py-0.5 rounded-md text-[9px] uppercase tracking-wide">
                          {tx.category}
                        </span>
                        <span>{tx.date}</span>
                      </div>
                    </div>

                    <div className="text-xs font-black text-slate-900 tracking-tight">
                      {tx.amount}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}