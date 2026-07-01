import UserProfileView from './components/UserProfileView';
import React, { useState } from 'react';
import OverviewDashboard from './components/OverviewDashboard';

// --- INTEGRATED MODULE SUBCOMPONENTS ---
import NearbyPGsView from './components/NearbyPGsView'; 
import CategoriesView from './components/Categories'; 
import AIBuddyView from './components/AIBuddyView'; 
import ExpensesView from './components/ExpensesView'; 
import SavedPlacesView from './components/SavedPlacesView'; 
import TravelPlannerView from './components/TravelPlannerView'; 
import LocalGuides from './components/LocalGuides'; 
import ReviewsView from './components/ReviewsView';

export default function App() {
  // --- APPLICATION SYSTEM CONTROL STATES ---
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [authView, setAuthView] = useState('login'); // 'login' | 'register_account'
  const [hasCompletedProfile, setHasCompletedProfile] = useState(false); // Controls onboarding form visibility after login
  const [activeTab, setActiveTab] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(false); // Mobile sidebar state toggle

  // --- NEW ENHANCEMENT STATES ---
  const [showProfilePanel, setShowProfilePanel] = useState(false); // Controls profile view overlay
  const [showLogoutMenu, setShowLogoutMenu] = useState(false);     // Controls bottom-left logout dropdown

  // --- IDENTITY & SYSTEM FIELD DATA ---
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Fields for initial account registration
  const [accountForm, setAccountForm] = useState({
    username: '',
    email: '',
    mobile: '',
    password: '',
    confirmPassword: '',
    agreeTerms: false
  });

  // Fields for onboarding profile (Matching reference card specifications exactly)
  const [regForm, setRegForm] = useState({
    name: '',
    dob: '',
    gender: '',
    foodPreference: 'Vegetarian',
    languages: [],
    otherLanguage: '',
    budget: '₹5,000 - ₹10,000',
    currentCity: '',
    movingTo: '',
    locality: '',
    stayPurpose: 'Study',
    occupation: '',
    education: '',
    whoAreYou: 'Student',
    emergencyName: '',
    emergencyNumber: ''
  });

  // 1. When Logging In
  const handleLoginSubmit = (e) => {
    if (e) e.preventDefault();
    if (accountForm.username && !regForm.name) {
      setRegForm(prev => ({ ...prev, name: accountForm.username }));
    }
    setIsLoggedIn(true); 
  };

  // Google OAuth Login Simulation Handler
  const handleGoogleLogin = () => {
    setRegForm(prev => ({ ...prev, name: "Traveler Account" }));
    setIsLoggedIn(true);
  };

  // 2. When Registering
  const handleAccountRegisterSubmit = (e) => {
    e.preventDefault();
    setEmail(accountForm.email);
    setAuthView('login'); 
  };

  // 3. When Saving Onboarding Profile Data
  const handleProfileRegisterSubmit = (e) => {
    e.preventDefault();
    setHasCompletedProfile(true); 
  };

  // 4. Secure Session Termination / Logout Action
  const handleLogoutAction = () => {
    setIsLoggedIn(false);
    setHasCompletedProfile(false);
    setShowLogoutMenu(false);
    setShowProfilePanel(false);
    setActiveTab('dashboard');
    setAuthView('login');
  };

  const handleLanguageCheckbox = (lang) => {
    setRegForm(prev => {
      const current = [...prev.languages];
      if (current.includes(lang)) {
        return { ...prev, languages: current.filter(l => l !== lang) };
      } else {
        return { ...prev, languages: [...current, lang] };
      }
    });
  };

  // --- NAVIGATION CONFIGURATION AS SHOWN IN THE DASHBOARD SCREENSHOT ---
  // Note: Search option removed here to prevent sidebar layout generation
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: '📋', desc: 'Overview of your relocations and active tracking metrics.' },
    { id: 'recommended-pgs', label: 'Recommended PGs', icon: '⭐', desc: 'Curated accommodations matching your profile choices.' },
    { id: 'categories', label: 'Categories', icon: '🗂️', desc: 'Browse places by categories like Rooms, Hotels, and more.' },
    { id: 'ai-buddy', label: 'AI Buddy', icon: '🤖', desc: 'Your AI-powered relocation assistant.' },
    { id: 'expenses', label: 'Expenses', icon: '💳', desc: 'Track and manage your operational travel and move expenses.' },
    { id: 'saved-places', label: 'Saved Places', icon: '❤️', desc: 'View your bookmarked destinations.' },
    { id: 'travel-planner', label: 'Travel Planner', icon: '📅', desc: 'Plan and organize your itinerary timeline.' },
    { id: 'local-guide', label: 'Local Guide', icon: '🗺️', desc: 'Get insights about your destination.' },
    { id: 'reviews', label: 'Reviews', icon: '💬', desc: 'Read and write community reviews.' },
  ];

  // Render helper for Workspace inner dashboard tabs
  const renderTabContent = () => {
    // Render user profile panel layout aligned cleanly to the Saharan onboarding fields
    if (showProfilePanel) {
      return (
        <div className="bg-white border border-slate-100 p-6 md:p-8 rounded-3xl shadow-sm text-left max-w-4xl w-full animate-fadeIn">
          {/* Header Area */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-[#4f46e5] text-white flex items-center justify-center text-xl font-bold shadow-md">
                {regForm.name ? regForm.name.charAt(0).toUpperCase() : 'T'}
              </div>
              <div>
                <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight">{regForm.name || 'Traveler'}</h1>
                <p className="text-slate-400 text-xs font-semibold uppercase tracking-wider mt-0.5">{regForm.whoAreYou || 'Explorer'} • Movemate Account</p>
              </div>
            </div>
            <button 
              onClick={() => setShowProfilePanel(false)}
              className="px-4 py-2 bg-slate-50 hover:bg-slate-100 text-slate-700 rounded-xl text-xs font-bold transition-all border border-slate-200"
            >
              ➔ Return to Workspace Dashboard
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            {/* Box 1: Core Details */}
            <div className="bg-white border border-slate-100 p-5 rounded-2xl shadow-xs space-y-4">
              <h3 className="text-xs font-bold uppercase text-[#4f46e5] tracking-wider flex items-center gap-2">👤 1. Basic Information</h3>
              <div className="grid grid-cols-2 gap-4 pt-2">
                <div>
                  <p className="text-[11px] font-medium text-slate-400">Full Name</p>
                  <p className="text-xs font-bold text-slate-800 mt-1">{regForm.name || 'Not provided'}</p>
                </div>
                <div>
                  <p className="text-[11px] font-medium text-slate-400">Date of Birth</p>
                  <p className="text-xs font-bold text-slate-800 mt-1">{regForm.dob || 'Not provided'}</p>
                </div>
                <div>
                  <p className="text-[11px] font-medium text-slate-400">Gender</p>
                  <p className="text-xs font-bold text-slate-800 mt-1">{regForm.gender || 'Not provided'}</p>
                </div>
                <div>
                  <p className="text-[11px] font-medium text-slate-400">Email Reference</p>
                  <p className="text-xs font-bold text-slate-800 mt-1 truncate">{email || 'member@movemate.com'}</p>
                </div>
              </div>
            </div>

            {/* Box 2: Preferences */}
            <div className="bg-white border border-slate-100 p-5 rounded-2xl shadow-xs space-y-4">
              <h3 className="text-xs font-bold uppercase text-[#4f46e5] tracking-wider flex items-center gap-2">❤️ 2. Your Preferences</h3>
              <div className="grid grid-cols-2 gap-4 pt-2">
                <div>
                  <p className="text-[11px] font-medium text-slate-400">Food Preference</p>
                  <p className="text-xs font-bold text-slate-800 mt-1">{regForm.foodPreference}</p>
                </div>
                <div>
                  <p className="text-[11px] font-medium text-slate-400">Monthly Budget Range</p>
                  <p className="text-xs font-bold text-[#eab308] mt-1">{regForm.budget}</p>
                </div>
                <div className="col-span-2">
                  <p className="text-[11px] font-medium text-slate-400">Preferred Languages</p>
                  <div className="flex flex-wrap gap-1.5 mt-1.5">
                    {regForm.languages.length > 0 ? (
                      regForm.languages.map(l => (
                        <span key={l} className="bg-slate-100 text-slate-700 text-[10px] font-semibold px-2 py-0.5 rounded-md">{l}</span>
                      ))
                    ) : (
                      <span className="text-xs font-medium text-slate-400">English</span>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Box 3: Relocation Info */}
            <div className="bg-white border border-slate-100 p-5 rounded-2xl shadow-xs space-y-4">
              <h3 className="text-xs font-bold uppercase text-[#4f46e5] tracking-wider flex items-center gap-2">📍 3. Location Details</h3>
              <div className="grid grid-cols-2 gap-4 pt-2">
                <div>
                  <p className="text-[11px] font-medium text-slate-400">Current City</p>
                  <p className="text-xs font-bold text-slate-800 mt-1">{regForm.currentCity || 'Not specified'}</p>
                </div>
                <div>
                  <p className="text-[11px] font-medium text-slate-400">Moving To</p>
                  <p className="text-xs font-bold text-slate-800 mt-1">{regForm.movingTo || 'Not specified'}</p>
                </div>
                <div>
                  <p className="text-[11px] font-medium text-slate-400">Preferred Locality</p>
                  <p className="text-xs font-bold text-slate-800 mt-1">{regForm.locality || 'Any'}</p>
                </div>
                <div>
                  <p className="text-[11px] font-medium text-slate-400">Purpose of Stay</p>
                  <p className="text-xs font-bold text-slate-800 mt-1">{regForm.stayPurpose}</p>
                </div>
              </div>
            </div>

            {/* Box 4: Background and Emergency Context */}
            <div className="bg-white border border-slate-100 p-5 rounded-2xl shadow-xs space-y-4">
              <h3 className="text-xs font-bold uppercase text-[#4f46e5] tracking-wider flex items-center gap-2">🛡️ 4. Additional & Emergency Context</h3>
              <div className="grid grid-cols-2 gap-4 pt-2">
                <div>
                  <p className="text-[11px] font-medium text-slate-400">Occupation</p>
                  <p className="text-xs font-bold text-slate-800 mt-1">{regForm.occupation || 'Student'}</p>
                </div>
                <div>
                  <p className="text-[11px] font-medium text-slate-400">Education</p>
                  <p className="text-xs font-bold text-slate-800 mt-1">{regForm.education || 'Not stated'}</p>
                </div>
                <div>
                  <p className="text-[11px] font-medium text-slate-400">Emergency Name</p>
                  <p className="text-xs font-bold text-slate-800 mt-1 truncate">{regForm.emergencyName || 'None listed'}</p>
                </div>
                <div>
                  <p className="text-[11px] font-medium text-slate-400">Emergency Number</p>
                  <p className="text-xs font-bold text-slate-800 mt-1">{regForm.emergencyNumber ? `+91 ${regForm.emergencyNumber}` : 'None listed'}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }

    // --- INNER CONTENT ROUTER ---
    switch (activeTab) {
      case 'dashboard':
        return <OverviewDashboard onViewChange={(tab) => setActiveTab(tab)} />;
      case 'search':
        return <DiscoverPlaces onClose={() => setActiveTab('dashboard')} />;
      case 'recommended-pgs':
        return <NearbyPGsView onClose={() => setActiveTab('dashboard')} />;
      case 'categories':
        return <CategoriesView onClose={() => setActiveTab('dashboard')} />;
      case 'ai-buddy':
        return <AIBuddyView onClose={() => setActiveTab('dashboard')} />;
      case 'expenses':
        return <ExpensesView onClose={() => setActiveTab('dashboard')} />;
      case 'saved-places':
        return <SavedPlacesView onClose={() => setActiveTab('dashboard')} />;
      case 'travel-planner':
        return <TravelPlannerView onClose={() => setActiveTab('dashboard')} />;
      case 'local-guide':
        return <LocalGuides onClose={() => setActiveTab('dashboard')} />;
      case 'reviews':
        return <ReviewsView onClose={() => setActiveTab('dashboard')} />;
      default:
        return <OverviewDashboard onViewChange={(tab) => setActiveTab(tab)} />;
    }
  };

  // --- UNAUTHENTICATED LAYER (LOGIN & REGISTRATION) ---
  if (!isLoggedIn) {
    if (authView === 'login') {
      return (
        <div 
          className="min-h-screen w-full relative bg-cover bg-center flex items-center justify-between px-6 md:px-16 font-sans overflow-y-auto select-none"
          style={{ 
            backgroundImage: `linear-gradient(to right, rgba(15, 23, 42, 0.9) 30%, rgba(15, 23, 42, 0.6) 70%), url('https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1920')` 
          }}
        >
          <div className="max-w-xl space-y-6 pr-8 my-12 text-left hidden lg:block">
            <div className="space-y-2">
              <div className="flex items-center gap-3 text-white">
                <span className="text-4xl">🧭</span>
                <span className="font-black text-4xl tracking-tight text-white">Movemate</span>
              </div>
            </div>
            <p className="text-slate-300 text-base leading-relaxed font-medium">
              Explore your new city, discover verified PGs, rooms, and track localized budget estimates in real-time.
            </p>
          </div>

          <div className="w-full max-w-md bg-slate-900/80 backdrop-blur-xl border border-white/10 p-8 rounded-3xl shadow-2xl relative mx-auto lg:mr-0 my-12 text-left">
            <div className="text-center space-y-1 mb-8">
              <h2 className="text-2xl font-extrabold text-white tracking-tight">Welcome back!</h2>
              <p className="text-slate-400 text-xs font-medium">Exploring your new city. Ready to settle in?</p>
            </div>

            <form onSubmit={handleLoginSubmit} className="space-y-4">
              <div className="relative flex items-center">
                <span className="absolute left-4 text-slate-500 text-xs">✉️</span>
                <input 
                  type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="name@company.com" 
                  className="w-full bg-slate-950/60 border border-slate-800 rounded-xl pl-10 pr-4 py-3.5 text-xs text-slate-200 outline-none focus:border-indigo-500"
                />
              </div>

              <div className="relative flex items-center">
                <span className="absolute left-4 text-slate-500 text-xs">🔒</span>
                <input 
                  type="password" required value={password} onChange={(e) => setPassword(e.target.value)} placeholder="••••••••" 
                  className="w-full bg-slate-950/60 border border-slate-800 rounded-xl pl-10 pr-4 py-3.5 text-xs text-slate-200 outline-none focus:border-indigo-500"
                />
              </div>

              <button 
                type="button"
                onClick={handleGoogleLogin}
                className="w-full bg-slate-950 text-slate-200 border border-slate-800 font-bold text-xs py-3 rounded-xl transition-all flex items-center justify-center gap-2.5 mt-4"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24"><path fill="#EA4335" d="M12.24 10.285V14.4h6.887c-.275 1.565-1.88 4.604-6.887 4.604-4.33 0-7.866-3.577-7.866-8s3.536-8 7.866-8c2.46 0 4.105 1.025 5.047 1.926l3.227-3.11C18.281 1.051 15.542 0 12.24 0 5.58 0 0 5.37 0 12s5.58 12 12.24 12c6.96 0 11.57-4.854 11.57-11.77 0-.79-.085-1.39-.19-1.945H12.24z"/></svg>
                Sign in with Google
              </button>

              <button type="submit" className="w-full bg-[#4f46e5] hover:bg-indigo-600 text-white font-bold text-xs py-3.5 rounded-xl transition-all shadow-lg flex items-center justify-center gap-2 mt-4">
                Login Now
              </button>
            </form>

            <p className="text-center text-[11px] text-slate-500 font-medium mt-6">
              Don't have an account? <span onClick={() => setAuthView('register_account')} className="text-indigo-400 hover:underline cursor-pointer font-bold">Register here</span>
            </p>
          </div>
        </div>
      );
    }

    if (authView === 'register_account') {
      return (
        <div 
          className="min-h-screen w-full relative bg-cover bg-center flex items-center justify-center px-4 font-sans select-none"
          style={{ backgroundImage: `linear-gradient(to bottom, rgba(15, 23, 42, 0.85), rgba(15, 23, 42, 0.85)), url('https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1920')` }}
        >
          <div className="w-full max-w-md bg-slate-900/80 backdrop-blur-xl border border-white/10 p-8 rounded-3xl shadow-2xl text-left">
            <div className="text-center space-y-1 mb-6">
              <h2 className="text-2xl font-extrabold text-white tracking-tight">Create Account</h2>
              <p className="text-emerald-400 text-xs font-bold">Register to get started</p>
            </div>

            <form onSubmit={handleAccountRegisterSubmit} className="space-y-4">
              <div>
                <label className="text-xs font-bold text-slate-300 block mb-1">Username</label>
                <input type="text" required placeholder="John Doe" value={accountForm.username} onChange={e => setAccountForm({...accountForm, username: e.target.value})} className="w-full bg-slate-950/60 border border-slate-800 rounded-xl px-4 py-3 text-xs text-slate-200 outline-none focus:border-indigo-500" />
              </div>
              <div>
                <label className="text-xs font-bold text-slate-300 block mb-1">Email Address</label>
                <input type="email" required placeholder="name@company.com" value={accountForm.email} onChange={e => setAccountForm({...accountForm, email: e.target.value})} className="w-full bg-slate-950/60 border border-slate-800 rounded-xl px-4 py-3 text-xs text-slate-200 outline-none focus:border-indigo-500" />
              </div>
              <div>
                <label className="text-xs font-bold text-slate-300 block mb-1">Mobile Number</label>
                <input type="tel" required placeholder="9876543210" value={accountForm.mobile} onChange={e => setAccountForm({...accountForm, mobile: e.target.value})} className="w-full bg-slate-950/60 border border-slate-800 rounded-xl px-4 py-3 text-xs text-slate-200 outline-none focus:border-indigo-500" />
              </div>
              <div>
                <label className="text-xs font-bold text-slate-300 block mb-1">Password</label>
                <input type="password" required placeholder="••••••••" value={accountForm.password} onChange={e => setAccountForm({...accountForm, password: e.target.value})} className="w-full bg-slate-950/60 border border-slate-800 rounded-xl px-4 py-3 text-xs text-slate-200 outline-none focus:border-indigo-500" />
              </div>
              <div className="flex items-center gap-2 pt-1">
                <input type="checkbox" required checked={accountForm.agreeTerms} onChange={e => setAccountForm({...accountForm, agreeTerms: e.target.checked})} className="accent-indigo-600 rounded border-slate-800" />
                <span className="text-[11px] font-bold text-slate-400">I agree to the <span className="text-blue-400 hover:underline cursor-pointer">Terms & Conditions</span></span>
              </div>
              <button type="submit" className="w-full bg-[#10b981] hover:bg-emerald-600 text-white font-bold text-xs py-3 rounded-xl transition-all shadow-md mt-2">Register</button>
            </form>
            <p className="text-center text-[11px] text-slate-400 font-medium mt-4">Already have an account? <span onClick={() => setAuthView('login')} className="text-blue-400 hover:underline cursor-pointer font-bold">Login here</span></p>
          </div>
        </div>
      );
    }
  }

  // --- POST-LOGIN LEVEL 1: PROFILE ONBOARDING COMPONENT ---
  if (!hasCompletedProfile) {
    return (
      <div className="min-h-screen bg-[#f8fafc] font-sans text-slate-700 pb-12 antialiased">
        <div className="w-full bg-white pt-8 pb-10 px-4 text-center border-b border-slate-200/60">
          <div className="max-w-4xl mx-auto flex flex-col items-center justify-center space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🧭</span>
              <h1 className="font-black text-2xl tracking-tight text-slate-900">SAHARA</h1>
            </div>
            <p className="text-[11px] font-bold text-indigo-600 uppercase tracking-wider">Explore. Connect. Belong.</p>
            <h2 className="text-xl font-bold text-slate-900 pt-2">Welcome to Sahara! 👋</h2>
            <p className="text-xs text-slate-500">Let's personalize your experience. Please provide a few details to get better recommendations.</p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 mt-8">
          <form onSubmit={handleProfileRegisterSubmit} className="space-y-6">
            {/* Card 1 */}
            <div className="bg-white shadow-xs rounded-2xl p-6 text-left border border-slate-100 space-y-4">
              <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wide flex items-center gap-2">👤 1. Basic Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Full Name</label>
                  <input type="text" required value={regForm.name} onChange={e => setRegForm({...regForm, name: e.target.value})} placeholder="Enter your full name" className="w-full border border-slate-200 rounded-xl px-3 py-2 text-xs outline-none focus:border-indigo-500" />
                </div>
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Date of Birth</label>
                  <input type="date" required value={regForm.dob} onChange={e => setRegForm({...regForm, dob: e.target.value})} className="w-full border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-600 outline-none" />
                </div>
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Gender</label>
                  <select required value={regForm.gender} onChange={e => setRegForm({...regForm, gender: e.target.value})} className="w-full border border-slate-200 rounded-xl px-3 py-2 text-xs bg-white text-slate-600 outline-none">
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white shadow-xs rounded-2xl p-6 text-left border border-slate-100 space-y-4">
              <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wide flex items-center gap-2">❤️ 2. Your Preferences</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h4 className="text-xs font-bold text-slate-700 mb-1.5">Food Preference</h4>
                  {['Vegetarian', 'Non-Vegetarian', 'Eggetarian', 'Vegan'].map(food => (
                    <label key={food} className="flex items-center gap-2 text-xs text-slate-600 py-1 cursor-pointer"><input type="radio" name="foodPreference" checked={regForm.foodPreference === food} onChange={() => setRegForm({...regForm, foodPreference: food})} className="accent-indigo-600" />{food}</label>
                  ))}
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-700 mb-1.5">Preferred Language(s)</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {['English', 'Hindi', 'Telugu', 'Tamil'].map(lang => (
                      <label key={lang} className="flex items-center gap-1.5 text-xs text-slate-600 cursor-pointer"><input type="checkbox" checked={regForm.languages.includes(lang)} onChange={() => handleLanguageCheckbox(lang)} className="accent-indigo-600" />{lang}</label>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-700 mb-1.5">Monthly Budget Range (₹)</h4>
                  <select value={regForm.budget} onChange={e => setRegForm({...regForm, budget: e.target.value})} className="w-full border border-slate-200 rounded-xl px-3 py-2 text-xs bg-white text-slate-700 outline-none">
                    <option>₹5,000 - ₹10,000</option>
                    <option>₹10,000 - ₹15,000</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white shadow-xs rounded-2xl p-6 text-left border border-slate-100 space-y-4">
              <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wide flex items-center gap-2">📍 3. Location</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Current City</label>
                  <select value={regForm.currentCity} onChange={e => setRegForm({...regForm, currentCity: e.target.value})} className="w-full border border-slate-200 rounded-xl px-3 py-2 text-xs bg-white text-slate-600 outline-none">
                    <option value="">Select Current City</option>
                    <option value="Mumbai">Mumbai</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Bangalore">Bangalore</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Moving To</label>
                  <select value={regForm.movingTo} onChange={e => setRegForm({...regForm, movingTo: e.target.value})} className="w-full border border-slate-200 rounded-xl px-3 py-2 text-xs bg-white text-slate-600 outline-none">
                    <option value="">Select Preferred City</option>
                    <option value="Bangalore">Bangalore</option>
                    <option value="Pune">Pune</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Preferred Locality</label>
                  <input type="text" value={regForm.locality} onChange={e => setRegForm({...regForm, locality: e.target.value})} placeholder="e.g. Koramangala" className="w-full border border-slate-200 rounded-xl px-3 py-2 text-xs outline-none" />
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-white shadow-xs rounded-2xl p-6 text-left border border-slate-100 space-y-4">
              <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wide flex items-center gap-2">🎓 4. Additional Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Occupation</label>
                  <input type="text" value={regForm.occupation} onChange={e => setRegForm({...regForm, occupation: e.target.value})} placeholder="Select Occupation" className="w-full border border-slate-200 rounded-xl px-3 py-2 text-xs outline-none" />
                </div>
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Education</label>
                  <input type="text" value={regForm.education} onChange={e => setRegForm({...regForm, education: e.target.value})} placeholder="Select Education" className="w-full border border-slate-200 rounded-xl px-3 py-2 text-xs outline-none" />
                </div>
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Who are you?</label>
                  <select value={regForm.whoAreYou} onChange={e => setRegForm({...regForm, whoAreYou: e.target.value})} className="w-full border border-slate-200 rounded-xl px-3 py-2 text-xs bg-white text-slate-700 outline-none">
                    <option>Student</option>
                    <option>Working Professional</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Card 5 */}
            <div className="bg-white shadow-xs rounded-2xl p-6 text-left border border-slate-100 space-y-4">
              <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wide flex items-center gap-2">🛡️ (Optional but Recommended)</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Emergency Contact Name</label>
                  <input type="text" value={regForm.emergencyName} onChange={e => setRegForm({...regForm, emergencyName: e.target.value})} placeholder="Enter contact name" className="w-full border border-slate-200 rounded-xl px-3 py-2 text-xs outline-none" />
                </div>
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Emergency Contact Number</label>
                  <input type="tel" value={regForm.emergencyNumber} onChange={e => setRegForm({...regForm, emergencyNumber: e.target.value})} placeholder="Enter contact number" className="w-full border border-slate-200 rounded-xl px-3 py-2 text-xs outline-none" />
                </div>
              </div>
            </div>

            <button type="submit" className="w-full bg-[#4f46e5] text-white font-bold text-xs py-3 rounded-xl shadow-md flex items-center justify-center gap-2">
              Save & Continue <span>➔</span>
            </button>
          </form>
        </div>
      </div>
    );
  }

  // --- POST-LOGIN LEVEL 2: COMPREHENSIVE WORKSPACE DASHBOARD VIEW ---
  return (
    <div className="min-h-screen bg-[#fafafb] flex font-sans overflow-x-hidden relative">
      {/* Sidebar Mobile Mask Overlay */}
      {sidebarOpen && (
        <div onClick={() => setSidebarOpen(false)} className="fixed inset-0 bg-slate-950/40 z-30 lg:hidden backdrop-blur-xs" />
      )}

      {/* Main Side Navigation Panel */}
      <aside className={`
        fixed inset-y-0 left-0 w-64 bg-[#0c111d] text-slate-400 flex flex-col p-5 shadow-2xl z-40 transition-transform duration-300 lg:translate-x-0
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        {/* Brand Header */}
        <div className="flex items-center gap-3 px-2 py-4 border-b border-slate-900 mb-6">
          <span className="text-2xl">🧭</span>
          <span className="font-black text-lg tracking-tight text-white uppercase">Movemate</span>
        </div>

        {/* Scrollable Navigation Menu List */}
        <nav className="flex-1 space-y-1 overflow-y-auto pr-1">
          {menuItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  setShowProfilePanel(false);
                  setSidebarOpen(false); // Auto-collapse mobile tray
                }}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-bold transition-all text-left group ${
                  isActive 
                    ? 'bg-[#4f46e5] text-white shadow-lg shadow-indigo-600/10' 
                    : 'hover:bg-slate-900 hover:text-slate-200'
                }`}
              >
                <span className={`text-base transition-transform group-hover:scale-105 ${isActive ? 'text-white' : 'text-slate-500'}`}>
                  {item.icon}
                </span>
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Footer User Profile Account Settings Grid */}
        <div className="border-t border-slate-900 pt-4 relative">
          {showLogoutMenu && (
            <div className="absolute bottom-16 left-0 w-full bg-slate-900 border border-slate-800 rounded-xl p-1.5 shadow-xl animate-fadeIn z-50">
              <button 
                onClick={() => {
                  setShowProfilePanel(true);
                  setShowLogoutMenu(false);
                }}
                className="w-full text-left text-xs font-bold text-slate-300 hover:bg-slate-800 px-3 py-2 rounded-lg transition-colors"
              >
                👤 View Account Profile
              </button>
              <button 
                onClick={handleLogoutAction}
                className="w-full text-left text-xs font-bold text-rose-400 hover:bg-rose-500/10 px-3 py-2 rounded-lg transition-colors mt-0.5"
              >
                🚪 Secure Terminate Session
              </button>
            </div>
          )}

          <div 
            onClick={() => setShowLogoutMenu(!showLogoutMenu)}
            className="flex items-center justify-between p-2 rounded-xl hover:bg-slate-900 cursor-pointer transition-colors group"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-indigo-600 text-white flex items-center justify-center font-black text-xs">
                {regForm.name ? regForm.name.charAt(0).toUpperCase() : 'T'}
              </div>
              <div className="text-left">
                <p className="text-xs font-bold text-white max-w-[120px] truncate">{regForm.name || 'Traveler'}</p>
                <p className="text-[10px] text-slate-500 truncate max-w-[120px]">{email || 'member@movemate.com'}</p>
              </div>
            </div>
            <span className="text-slate-600 text-xs group-hover:text-slate-400">•••</span>
          </div>
        </div>
      </aside>

      {/* Core Dynamic Content Shell View Container */}
      <div className="flex-1 lg:pl-64 min-h-screen flex flex-col">
        {/* Mobile Header Banner Bar Component */}
        <header className="bg-white border-b border-slate-100 px-6 py-4 flex items-center justify-between lg:hidden shrink-0">
          <div className="flex items-center gap-2">
            <span className="text-xl">🧭</span>
            <span className="font-black text-sm tracking-tight text-slate-900 uppercase">Movemate</span>
          </div>
          <button 
            onClick={() => setSidebarOpen(true)}
            className="p-2 hover:bg-slate-50 text-slate-700 rounded-xl border border-slate-200 text-xs font-bold transition-all"
          >
            ☰ Menu
          </button>
        </header>

        {/* Scrollable Main Panels Canvas Area */}
        <main className="flex-1 p-6 md:p-10 overflow-y-auto max-w-[1400px] mx-auto w-full">
          {renderTabContent()}
        </main>
      </div>
    </div>
  );
}