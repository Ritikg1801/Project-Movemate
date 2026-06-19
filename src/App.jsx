import React, { useState } from 'react';
import Login from './pages/Login';
import SearchPlanner from './pages/SearchPlanner';

export default function App() {
  // Tracking if user is logged in
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="min-h-screen bg-slate-900 font-sans">
      {!isLoggedIn ? (
        // Show Login Page if not logged in
        <Login onLoginSuccess={() => setIsLoggedIn(true)} />
      ) : (
        // Show Project Frontend Dashboard after logging in
        <div className="min-h-screen w-full relative overflow-hidden bg-linear-to-br from-slate-900 via-emerald-950 to-neutral-900 animate-gradient-xy bg-size-[400%_400%] p-4">
          {/* Animated background blobs for dashboard */}
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-emerald-500/5 rounded-full blur-3xl animate-pulse"></div>
          
          {/* Navigation Bar */}
          <nav className="relative z-10 max-w-6xl mx-auto bg-white/5 backdrop-blur-md text-white p-4 rounded-xl border border-white/10 shadow-xl flex justify-between items-center mb-8">
            <h1 className="text-xl font-bold tracking-wide">🏠 MoveMate</h1>
            <button 
              onClick={() => setIsLoggedIn(false)} 
              className="text-sm bg-white/10 hover:bg-white/20 px-3 py-1.5 rounded-lg border border-white/10 transition"
            >
              Logout
            </button>
          </nav>

          {/* Main Content Area */}
          <main className="relative z-10 pb-12">
            <SearchPlanner />
          </main>
        </div>
      )}
    </div>
  );
}