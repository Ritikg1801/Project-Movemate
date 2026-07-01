// AIBuddyView.jsx
import React, { useState } from 'react';

export default function AIBuddyView({ onClose }) {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'bot',
      text: "Hi there! I'm your Movemate AI Buddy. I can help you find places, understand local transport, or estimate expenses. What do you need help with?"
    },
    {
      id: 2,
      sender: 'user',
      text: "Can you help me find a good PG under $1500?"
    },
    {
      id: 3,
      sender: 'bot',
      text: "Absolutely! Based on our data, there are several great PGs in that price range. I recommend checking out the 'Nearby PGs' section or the 'Recommended PGs' on your dashboard. Would you like me to filter some options for you?"
    }
  ]);
  
  const [inputValue, setInputValue] = useState('');

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    // Append new user message to state stream
    const userMsg = {
      id: Date.now(),
      sender: 'user',
      text: inputValue
    };

    setMessages(prev => [...prev, userMsg]);
    setInputValue('');

    // Mock an automated buddy response stream
    setTimeout(() => {
      setMessages(prev => [...prev, {
        id: Date.now() + 1,
        sender: 'bot',
        text: "I am analyzing the local map listings for you. Let me know if you would like me to narrow down by specific amenities like WiFi or AC!"
      }]);
    }, 1000);
  };

  return (
    <div className="w-full min-h-screen bg-[#f8fafc] text-left font-sans pb-12">
      <div className="max-w-5xl mx-auto px-6 pt-10">
        
        {/* Top Header Block Structure */}
        <div className="flex justify-between items-start mb-6">
          <div>
            <h1 className="text-3xl font-black text-[#0f172a] tracking-tight">AI Buddy</h1>
            <p className="text-sm font-medium text-slate-400 mt-1">
              Your personal assistant for city navigation.
            </p>
          </div>
          
          {/* Isolation Wrapper Close Handle */}
          {onClose && (
            <button 
              onClick={onClose}
              className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs rounded-xl shadow-xs transition-colors cursor-pointer"
            >
              ← Return to Dashboard
            </button>
          )}
        </div>

        {/* Main Interface Card Container Canvas */}
        <div className="bg-white border border-slate-100 rounded-[24px] shadow-xs flex flex-col justify-between min-h-[580px] overflow-hidden relative">
          
          {/* Message History Scroller Feed Section */}
          <div className="p-6 overflow-y-auto space-y-6 flex-1 max-h-[480px]">
            {messages.map((msg) => {
              const isBot = msg.sender === 'bot';
              return (
                <div 
                  key={msg.id} 
                  className={`flex items-start gap-3 max-w-4xl ${!isBot ? 'justify-end' : 'justify-start'}`}
                >
                  {/* Left Bot Avatar Icon Box */}
                  {isBot && (
                    <div className="w-9 h-9 bg-[#1e293b] text-white rounded-xl flex items-center justify-center shrink-0 shadow-xs text-sm">
                      🤖
                    </div>
                  )}

                  {/* Contextual Speech Text Box Frame */}
                  <div className={`p-4 rounded-[20px] text-xs font-medium leading-relaxed max-w-xl ${
                    isBot 
                      ? 'bg-[#f1f5f9] text-[#1e293b] rounded-tl-none' 
                      : 'bg-[#4f46e5] text-white rounded-tr-none text-left'
                  }`}>
                    {msg.text}
                  </div>

                  {/* Right User Avatar Icon Box */}
                  {!isBot && (
                    <div className="w-9 h-9 bg-[#4f46e5] text-white rounded-full flex items-center justify-center shrink-0 shadow-xs text-xs font-bold">
                      👤
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Interactive Chat Input Bar Section */}
          <form 
            onSubmit={handleSendMessage}
            className="p-5 border-t border-slate-100 bg-white flex items-center gap-3"
          >
            <input 
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Ask anything about relocating..."
              className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-xs text-slate-800 font-medium placeholder-slate-400 focus:border-[#4f46e5] focus:outline-none transition-colors shadow-2xs"
            />
            <button 
              type="submit"
              className="w-10 h-10 bg-[#4f46e5] hover:bg-[#4338ca] text-white rounded-xl flex items-center justify-center shrink-0 transition-all cursor-pointer shadow-xs active:scale-95 text-sm"
            >
              ➔
            </button>
          </form>

        </div>

      </div>
    </div>
  );
}