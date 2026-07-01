import React, { useState } from 'react';

export default function AITravelAssistant() {
  const [chat, setChat] = useState([{ side: 'ai', msg: 'Hi Manish! Ready to explore Hyderabad? Ask me to evaluate rent benchmarks or map public transport networks near your destination.' }]);
  const [box, setBox] = useState('');

  const send = () => {
    if(!box.trim()) return;
    setChat(p => [...p, { side: 'user', msg: box }, { side: 'ai', msg: 'Analyzing local listings... The baseline rent rate across Ameerpet floats around ₹7,000 - ₹9,000 per month for double sharing rooms.' }]);
    setBox('');
  };

  return (
    <div className="bg-white border border-slate-100 rounded-2xl shadow-sm h-[calc(100vh-140px)] flex flex-col overflow-hidden">
      <div className="bg-slate-50 p-4 border-b border-slate-100 font-bold text-xs text-slate-700">⚡ SmartSafar AI Engine Active</div>
      <div className="flex-1 p-4 overflow-y-auto space-y-4 text-xs">
        {chat.map((c, i) => (
          <div key={i} className={`flex ${c.side === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`p-3 rounded-xl max-w-sm ${c.side === 'user' ? 'bg-indigo-600 text-white rounded-tr-none' : 'bg-slate-100 text-slate-700 rounded-tl-none'}`}>{c.msg}</div>
          </div>
        ))}
      </div>
      <div className="p-3 border-t border-slate-100 flex gap-2">
        <input value={box} onChange={e => setBox(e.target.value)} onKeyDown={e => e.key === 'Enter' && send()} placeholder="Ask AI Assistant..." className="flex-1 text-xs border border-slate-200 rounded-xl px-3 py-2 outline-none focus:border-indigo-500 bg-slate-50"/>
        <button onClick={send} className="bg-indigo-600 text-white font-bold text-xs px-4 rounded-xl hover:bg-indigo-700">Send</button>
      </div>
    </div>
  );
}