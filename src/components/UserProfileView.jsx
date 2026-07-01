// UserProfileView.jsx
import React, { useState } from 'react';

export default function UserProfileView({ initialUserData, onSaveProfile, onClose }) {
  const [isEditing, setIsEditing] = useState(false);
  
  const [formData, setFormData] = useState(initialUserData || {
    fullName: "Traveler Account",
    dob: "2002-12-10",
    gender: "Male",
    email: "member@movemate.com",
    foodPreference: "Vegetarian",
    budgetRange: "₹5,000 - ₹10,000",
    preferredLanguages: "English",
    currentCity: "Delhi",
    movingTo: "Pune",
    preferredLocality: "vakilpeth",
    purposeOfStay: "Study",
    occupation: "ggg",
    education: "ttt",
    emergencyName: "None listed",
    emergencyNumber: "None listed"
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    if (onSaveProfile) {
      onSaveProfile(formData);
    }
    setIsEditing(false);
  };

  return (
    <div className="w-full min-h-screen bg-[#f8fafc] p-8 text-left font-sans">
      <div className="max-w-6xl mx-auto bg-white rounded-3xl p-8 shadow-xs border border-slate-100 relative">
        
        {/* Header Block */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-100 pb-6 mb-8 gap-4">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-[#4f46e5] text-white rounded-2xl flex items-center justify-center font-bold text-2xl shadow-sm">
              {formData.fullName.charAt(0).toUpperCase()}
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 tracking-tight">{formData.fullName}</h2>
              <p className="text-xs font-bold text-slate-400 tracking-wide uppercase mt-0.5">STUDENT • MOVEMATE ACCOUNT</p>
            </div>
          </div>
          
          {/* Action Buttons */}
          <div className="flex items-center gap-3">
            {isEditing ? (
              <>
                <button onClick={() => setIsEditing(false)} className="px-4 py-2 text-xs font-bold text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-xl cursor-pointer">
                  Cancel
                </button>
                <button onClick={handleSave} className="px-4 py-2 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-sm cursor-pointer">
                  Save Changes
                </button>
              </>
            ) : (
              <>
                <button onClick={() => setIsEditing(true)} className="px-4 py-2 text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 rounded-xl cursor-pointer">
                  ✏️ Edit Profile
                </button>
                {onClose && (
                  <button onClick={onClose} className="px-4 py-2 text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl cursor-pointer">
                    Return to Dashboard
                  </button>
                )}
              </>
            )}
          </div>
        </div>

        {/* Form Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* 1. Basic Information */}
          <div className="border border-slate-100 rounded-2xl p-6 bg-slate-50/40">
            <h3 className="text-xs font-black tracking-wider text-blue-600 bg-blue-50 inline-block px-2.5 py-1 rounded-md uppercase mb-4">👥 1. Basic Information</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] font-bold text-slate-400">Full Name</label>
                {isEditing ? <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} className="w-full bg-white border border-slate-200 rounded-lg p-1.5 text-xs text-slate-800 font-bold mt-1 outline-none focus:border-blue-500" /> : <p className="text-xs font-bold text-slate-800 mt-1">{formData.fullName}</p>}
              </div>
              <div>
                <label className="block text-[11px] font-bold text-slate-400">Date of Birth</label>
                {isEditing ? <input type="date" name="dob" value={formData.dob} onChange={handleChange} className="w-full bg-white border border-slate-200 rounded-lg p-1.5 text-xs text-slate-800 font-bold mt-1 outline-none focus:border-blue-500" /> : <p className="text-xs font-bold text-slate-800 mt-1">{formData.dob}</p>}
              </div>
              <div>
                <label className="block text-[11px] font-bold text-slate-400">Gender</label>
                {isEditing ? (
                  <select name="gender" value={formData.gender} onChange={handleChange} className="w-full bg-white border border-slate-200 rounded-lg p-1.5 text-xs text-slate-800 font-bold mt-1 outline-none cursor-pointer focus:border-blue-500">
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                ) : <p className="text-xs font-bold text-slate-800 mt-1">{formData.gender}</p>}
              </div>
              <div>
                <label className="block text-[11px] font-bold text-slate-400">Email Reference</label>
                {isEditing ? <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full bg-white border border-slate-200 rounded-lg p-1.5 text-xs text-slate-800 font-bold mt-1 outline-none focus:border-blue-500" /> : <p className="text-xs font-bold text-slate-800 mt-1 truncate">{formData.email}</p>}
              </div>
            </div>
          </div>

          {/* 2. Your Preferences */}
          <div className="border border-slate-100 rounded-2xl p-6 bg-slate-50/40">
            <h3 className="text-xs font-black tracking-wider text-pink-600 bg-pink-50 inline-block px-2.5 py-1 rounded-md uppercase mb-4">💖 2. Your Preferences</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] font-bold text-slate-400">Food Preference</label>
                {isEditing ? <input type="text" name="foodPreference" value={formData.foodPreference} onChange={handleChange} className="w-full bg-white border border-slate-200 rounded-lg p-1.5 text-xs text-slate-800 font-bold mt-1 outline-none focus:border-blue-500" /> : <p className="text-xs font-bold text-slate-800 mt-1">{formData.foodPreference}</p>}
              </div>
              <div>
                <label className="block text-[11px] font-bold text-slate-400">Monthly Budget Range</label>
                {isEditing ? <input type="text" name="budgetRange" value={formData.budgetRange} onChange={handleChange} className="w-full bg-white border border-slate-200 rounded-lg p-1.5 text-xs text-slate-800 font-bold mt-1 outline-none focus:border-blue-500" /> : <p className="text-xs font-bold text-amber-500 mt-1">{formData.budgetRange}</p>}
              </div>
              <div className="col-span-2">
                <label className="block text-[11px] font-bold text-slate-400">Preferred Languages</label>
                {isEditing ? <input type="text" name="preferredLanguages" value={formData.preferredLanguages} onChange={handleChange} className="w-full bg-white border border-slate-200 rounded-lg p-1.5 text-xs text-slate-800 font-bold mt-1 outline-none focus:border-blue-500" /> : <span className="inline-block bg-slate-100 text-slate-700 font-bold text-xs px-2.5 py-1 rounded-lg mt-1.5">{formData.preferredLanguages}</span>}
              </div>
            </div>
          </div>

          {/* 3. Location Details */}
          <div className="border border-slate-100 rounded-2xl p-6 bg-slate-50/40">
            <h3 className="text-xs font-black tracking-wider text-purple-600 bg-purple-50 inline-block px-2.5 py-1 rounded-md uppercase mb-4">📍 3. Location Details</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] font-bold text-slate-400">Current City</label>
                {isEditing ? <input type="text" name="currentCity" value={formData.currentCity} onChange={handleChange} className="w-full bg-white border border-slate-200 rounded-lg p-1.5 text-xs text-slate-800 font-bold mt-1 outline-none focus:border-blue-500" /> : <p className="text-xs font-bold text-slate-800 mt-1">{formData.currentCity}</p>}
              </div>
              <div>
                <label className="block text-[11px] font-bold text-slate-400">Moving To</label>
                {isEditing ? <input type="text" name="movingTo" value={formData.movingTo} onChange={handleChange} className="w-full bg-white border border-slate-200 rounded-lg p-1.5 text-xs text-slate-800 font-bold mt-1 outline-none focus:border-blue-500" /> : <p className="text-xs font-bold text-slate-800 mt-1">{formData.movingTo}</p>}
              </div>
              <div>
                <label className="block text-[11px] font-bold text-slate-400">Preferred Locality</label>
                {isEditing ? <input type="text" name="preferredLocality" value={formData.preferredLocality} onChange={handleChange} className="w-full bg-white border border-slate-200 rounded-lg p-1.5 text-xs text-slate-800 font-bold mt-1 outline-none focus:border-blue-500" /> : <p className="text-xs font-bold text-slate-800 mt-1">{formData.preferredLocality}</p>}
              </div>
              <div>
                <label className="block text-[11px] font-bold text-slate-400">Purpose of Stay</label>
                {isEditing ? <input type="text" name="purposeOfStay" value={formData.purposeOfStay} onChange={handleChange} className="w-full bg-white border border-slate-200 rounded-lg p-1.5 text-xs text-slate-800 font-bold mt-1 outline-none focus:border-blue-500" /> : <p className="text-xs font-bold text-slate-800 mt-1">{formData.purposeOfStay}</p>}
              </div>
            </div>
          </div>

          {/* 4. Additional & Emergency Context */}
          <div className="border border-slate-100 rounded-2xl p-6 bg-slate-50/40">
            <h3 className="text-xs font-black tracking-wider text-teal-600 bg-teal-50 inline-block px-2.5 py-1 rounded-md uppercase mb-4">🔷 4. Additional & Emergency Context</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] font-bold text-slate-400">Occupation</label>
                {isEditing ? <input type="text" name="occupation" value={formData.occupation} onChange={handleChange} className="w-full bg-white border border-slate-200 rounded-lg p-1.5 text-xs text-slate-800 font-bold mt-1 outline-none focus:border-blue-500" /> : <p className="text-xs font-bold text-slate-800 mt-1">{formData.occupation}</p>}
              </div>
              <div>
                <label className="block text-[11px] font-bold text-slate-400">Education</label>
                {isEditing ? <input type="text" name="education" value={formData.education} onChange={handleChange} className="w-full bg-white border border-slate-200 rounded-lg p-1.5 text-xs text-slate-800 font-bold mt-1 outline-none focus:border-blue-500" /> : <p className="text-xs font-bold text-slate-800 mt-1">{formData.education}</p>}
              </div>
              <div>
                <label className="block text-[11px] font-bold text-slate-400">Emergency Name</label>
                {isEditing ? <input type="text" name="emergencyName" value={formData.emergencyName} onChange={handleChange} className="w-full bg-white border border-slate-200 rounded-lg p-1.5 text-xs text-slate-800 font-bold mt-1 outline-none focus:border-blue-500" /> : <p className="text-xs font-bold text-slate-800 mt-1">{formData.emergencyName}</p>}
              </div>
              <div>
                <label className="block text-[11px] font-bold text-slate-400">Emergency Number</label>
                {isEditing ? <input type="text" name="emergencyNumber" value={formData.emergencyNumber} onChange={handleChange} className="w-full bg-white border border-slate-200 rounded-lg p-1.5 text-xs text-slate-800 font-bold mt-1 outline-none focus:border-blue-500" /> : <p className="text-xs font-bold text-slate-800 mt-1">{formData.emergencyNumber}</p>}
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}