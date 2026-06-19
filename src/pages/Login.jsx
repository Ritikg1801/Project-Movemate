import React, { useState } from 'react';

// Step 1: Add the custom glowing text style right here
const glowStyle = {
  color: "#ff00ff", // Vibrant magenta-purple from reference
  textShadow: `
    0 0 7px #ff00ff,
    0 0 10px #ff00ff,
    0 0 21px #ff00ff,
    0 0 42px #ff00ff
  ` // Creates the bright glowing effect
};

export default function Login({ onLoginSuccess }) {
  const [isRegister, setIsRegister] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isRegister) {
      if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
      }
      alert("Registration successful! Switching to login...");
      setIsRegister(false);
    } else {
      if (email && password) {
        onLoginSuccess();
      } else {
        alert('Please fill in all fields');
      }
    }
  };

  return (
    // Updated background to match the reference cosmic nebula style
    <div className="min-h-screen w-full flex items-center justify-center relative overflow-hidden bg-[#0a0a20]">
      
      {/* Reference image background elements (nebula glows) */}
      <div className="absolute top-0 left-0 w-full h-full opacity-40 bg-[radial-gradient(circle_at_20%_40%,#5010a0,transparent_40%),radial-gradient(circle_at_80%_60%,#1060a0,transparent_40%)]"></div>

      {/* Main Glassmorphism Auth Card */}
      <div className="relative z-10 w-full max-w-md p-10 mx-4 bg-[#141430]/60 backdrop-blur-xl rounded-3xl border border-white/10 shadow-2xl">
        <div className="text-center mb-10 flex flex-col items-center">
          {/* Main Logo & Name on one line */}
          <div className="flex items-center gap-3 mb-2">
            <span className="text-4xl">🏠</span>
            <h1 className="text-4xl font-extrabold text-white tracking-tight">
              MoveMate
            </h1>
          </div>
          
          {/* Step 2: The updated, glowing text line applied here */}
          {/* The text color is now set to a clean white via Tailwind text-white */}
        <p className="font-semibold text-lg text-white tracking-wide">
             {isRegister ? 'Create your Account' : 'Your Relocation Partner'}
        </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Input Fields (Dark theme to match reference) */}
          <div className="relative">
            <label className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pt-8 text-cyan-400">
               <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            </div>
            <input 
              type="email" 
              placeholder="name@cdac.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-[#101026]/80 border border-white/5 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-cyan-500 transition"
              required
            />
          </div>

          <div className="relative">
            <label className="block text-sm font-medium text-gray-300 mb-2">Password</label>
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pt-8 text-cyan-400">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
            </div>
            <input 
              type="password" 
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-[#101026]/80 border border-white/5 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-cyan-500 transition"
              required
            />
          </div>

          {isRegister && (
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Confirm Password</label>
              <input 
                type="password" 
                placeholder="••••••••"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full px-4 py-3 bg-[#101026]/80 border border-white/5 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-cyan-500 transition"
                required
              />
            </div>
          )}

          {/* Main Button (Cyan glow to match reference) */}
          <button 
            type="submit" 
            className="w-full bg-[#00f0ff] hover:bg-cyan-400 text-[#0a0a20] font-bold py-3 px-4 rounded-xl shadow-[0_0_15px_rgba(0,240,255,0.4)] transform hover:-translate-y-0.5 transition active:translate-y-0"
          >
            {isRegister ? 'Register Account' : 'Sign In'}
          </button>
        </form>

        <div className="mt-8 text-center border-t border-white/5 pt-6">
          <p className="text-sm text-gray-400">
            {isRegister ? 'Already have an account?' : "Don't have an account?"}{' '}
            <button
              onClick={() => setIsRegister(!isRegister)}
              className="text-cyan-400 font-semibold hover:underline focus:outline-none ml-1"
            >
              {isRegister ? 'Sign In here' : 'Register here'}
            </button>
          </p>
        </div>

        {/* Small detail star from reference */}
        <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 text-cyan-500 text-xl">✦</div>

      </div>
    </div>
  );
}