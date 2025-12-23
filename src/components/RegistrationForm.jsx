import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Users, Mail, Phone, Building2, GraduationCap, FileText, Send, CheckCircle } from 'lucide-react';

// Registration Form Component
const RegistrationForm = () => {
  const navigate = useNavigate();
  const serifStyle = { fontFamily: '"Times New Roman", Times, serif' };
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    teamName: '',
    teamSize: '3',
    problemStatement: '',
    leaderName: '',
    leaderEmail: '',
    leaderPhone: '',
    leaderCollege: '',
    leaderDepartment: '',
    leaderYear: '',
    member2Name: '',
    member2Email: '',
    member2Phone: '',
    member3Name: '',
    member3Email: '',
    member3Phone: '',
    member4Name: '',
    member4Email: '',
    member4Phone: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds and show success message
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        teamName: '',
        teamSize: '3',
        problemStatement: '',
        leaderName: '',
        leaderEmail: '',
        leaderPhone: '',
        leaderCollege: '',
        leaderDepartment: '',
        leaderYear: '',
        member2Name: '',
        member2Email: '',
        member2Phone: '',
        member3Name: '',
        member3Email: '',
        member3Phone: '',
        member4Name: '',
        member4Email: '',
        member4Phone: ''
      });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8" style={serifStyle}>
      {/* Header with Back Button */}
      <div className="max-w-4xl mx-auto mb-8">
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-[#1a2b4a] hover:text-[#7c3aed] transition-colors mb-6 group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          <span style={serifStyle} className="font-semibold">Back to Home</span>
        </button>

        <div className="text-center">
          <h1 style={serifStyle} className="text-4xl md:text-5xl font-bold text-[#1a2b4a] mb-3">
            Team Registration
          </h1>
          <div className="w-24 h-1 bg-[#7c3aed] mx-auto mb-4"></div>
          <p style={serifStyle} className="text-lg text-[#64748b] italic">
            Academic Research & Development Conclave • CodeFusion 2025
          </p>
        </div>
      </div>

      {/* Success Message */}
      {isSubmitted && (
        <div className="max-w-4xl mx-auto mb-8 bg-green-50 border-2 border-green-500 rounded-xl p-6 flex items-center gap-4 animate-fade-in">
          <CheckCircle size={32} className="text-green-500 flex-shrink-0" />
          <div>
            <h3 style={serifStyle} className="text-xl font-bold text-green-800 mb-1">
              Registration Successful!
            </h3>
            <p style={serifStyle} className="text-green-700">
              Your team has been registered. Check your email for confirmation details.
            </p>
          </div>
        </div>
      )}

      {/* Registration Form */}
      <div className="max-w-4xl mx-auto">
        <form onSubmit={handleSubmit} className="bg-white border-2 border-[#e2e8f0] rounded-2xl shadow-lg p-8 md:p-12">
          
          {/* Team Details Section */}
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-[#7c3aed] flex items-center justify-center">
                <Users size={20} className="text-white" />
              </div>
              <h2 style={serifStyle} className="text-2xl font-bold text-[#1a2b4a]">
                Team Information
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="md:col-span-2">
                <label style={serifStyle} className="block text-base font-bold text-[#1a2b4a] mb-2">
                  Team Name *
                </label>
                <input
                  type="text"
                  name="teamName"
                  value={formData.teamName}
                  onChange={handleInputChange}
                  required
                  style={serifStyle}
                  className="w-full h-12 px-4 border-2 border-[#e2e8f0] rounded-lg focus:border-[#7c3aed] focus:ring-2 focus:ring-[#7c3aed]/20 outline-none transition-all"
                  placeholder="Enter your team name"
                />
              </div>

              <div>
                <label style={serifStyle} className="block text-base font-bold text-[#1a2b4a] mb-2">
                  Team Size *
                </label>
                <select
                  name="teamSize"
                  value={formData.teamSize}
                  onChange={handleInputChange}
                  required
                  style={serifStyle}
                  className="w-full h-12 px-4 border-2 border-[#e2e8f0] rounded-lg focus:border-[#7c3aed] focus:ring-2 focus:ring-[#7c3aed]/20 outline-none transition-all"
                >
                  <option value="3">3 Members</option>
                  <option value="4">4 Members</option>
                </select>
              </div>

              <div>
                <label style={serifStyle} className="block text-base font-bold text-[#1a2b4a] mb-2">
                  Problem Statement *
                </label>
                <select
                  name="problemStatement"
                  value={formData.problemStatement}
                  onChange={handleInputChange}
                  required
                  style={serifStyle}
                  className="w-full h-12 px-4 border-2 border-[#e2e8f0] rounded-lg focus:border-[#7c3aed] focus:ring-2 focus:ring-[#7c3aed]/20 outline-none transition-all"
                >
                  <option value="">Select Problem Statement</option>
                  <option value="ai-ml">AI & Machine Learning</option>
                  <option value="blockchain">Blockchain Technology</option>
                  <option value="iot">Internet of Things</option>
                  <option value="healthcare">Healthcare Innovation</option>
                  <option value="education">Education Tech</option>
                  <option value="sustainability">Sustainability</option>
                </select>
              </div>
            </div>
          </div>

          {/* Team Leader Section */}
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-[#1a2b4a] flex items-center justify-center">
                <GraduationCap size={20} className="text-white" />
              </div>
              <h2 style={serifStyle} className="text-2xl font-bold text-[#1a2b4a]">
                Team Leader Details
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label style={serifStyle} className="block text-base font-bold text-[#1a2b4a] mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="leaderName"
                  value={formData.leaderName}
                  onChange={handleInputChange}
                  required
                  style={serifStyle}
                  className="w-full h-12 px-4 border-2 border-[#e2e8f0] rounded-lg focus:border-[#7c3aed] focus:ring-2 focus:ring-[#7c3aed]/20 outline-none transition-all"
                  placeholder="Enter full name"
                />
              </div>

              <div>
                <label style={serifStyle} className="block text-base font-bold text-[#1a2b4a] mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="leaderEmail"
                  value={formData.leaderEmail}
                  onChange={handleInputChange}
                  required
                  style={serifStyle}
                  className="w-full h-12 px-4 border-2 border-[#e2e8f0] rounded-lg focus:border-[#7c3aed] focus:ring-2 focus:ring-[#7c3aed]/20 outline-none transition-all"
                  placeholder="student@university.edu"
                />
              </div>

              <div>
                <label style={serifStyle} className="block text-base font-bold text-[#1a2b4a] mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="leaderPhone"
                  value={formData.leaderPhone}
                  onChange={handleInputChange}
                  required
                  style={serifStyle}
                  className="w-full h-12 px-4 border-2 border-[#e2e8f0] rounded-lg focus:border-[#7c3aed] focus:ring-2 focus:ring-[#7c3aed]/20 outline-none transition-all"
                  placeholder="+91 98765 43210"
                />
              </div>

              <div>
                <label style={serifStyle} className="block text-base font-bold text-[#1a2b4a] mb-2">
                  College/Institution *
                </label>
                <input
                  type="text"
                  name="leaderCollege"
                  value={formData.leaderCollege}
                  onChange={handleInputChange}
                  required
                  style={serifStyle}
                  className="w-full h-12 px-4 border-2 border-[#e2e8f0] rounded-lg focus:border-[#7c3aed] focus:ring-2 focus:ring-[#7c3aed]/20 outline-none transition-all"
                  placeholder="Enter institution name"
                />
              </div>

              <div>
                <label style={serifStyle} className="block text-base font-bold text-[#1a2b4a] mb-2">
                  Department *
                </label>
                <input
                  type="text"
                  name="leaderDepartment"
                  value={formData.leaderDepartment}
                  onChange={handleInputChange}
                  required
                  style={serifStyle}
                  className="w-full h-12 px-4 border-2 border-[#e2e8f0] rounded-lg focus:border-[#7c3aed] focus:ring-2 focus:ring-[#7c3aed]/20 outline-none transition-all"
                  placeholder="e.g., Computer Science"
                />
              </div>

              <div>
                <label style={serifStyle} className="block text-base font-bold text-[#1a2b4a] mb-2">
                  Year of Study *
                </label>
                <select
                  name="leaderYear"
                  value={formData.leaderYear}
                  onChange={handleInputChange}
                  required
                  style={serifStyle}
                  className="w-full h-12 px-4 border-2 border-[#e2e8f0] rounded-lg focus:border-[#7c3aed] focus:ring-2 focus:ring-[#7c3aed]/20 outline-none transition-all"
                >
                  <option value="">Select Year</option>
                  <option value="1">1st Year</option>
                  <option value="2">2nd Year</option>
                  <option value="3">3rd Year</option>
                  <option value="4">4th Year</option>
                </select>
              </div>
            </div>
          </div>

          {/* Team Members Section */}
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-[#7c3aed] flex items-center justify-center">
                <Users size={20} className="text-white" />
              </div>
              <h2 style={serifStyle} className="text-2xl font-bold text-[#1a2b4a]">
                Team Members
              </h2>
            </div>

            {/* Member 2 */}
            <div className="mb-6 p-6 bg-[#f8fafc] rounded-xl border-2 border-[#e2e8f0]">
              <h3 style={serifStyle} className="text-lg font-bold text-[#1a2b4a] mb-4">
                Member 2 *
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <input
                  type="text"
                  name="member2Name"
                  value={formData.member2Name}
                  onChange={handleInputChange}
                  required
                  style={serifStyle}
                  className="h-12 px-4 border-2 border-[#e2e8f0] rounded-lg focus:border-[#7c3aed] focus:ring-2 focus:ring-[#7c3aed]/20 outline-none transition-all bg-white"
                  placeholder="Full Name"
                />
                <input
                  type="email"
                  name="member2Email"
                  value={formData.member2Email}
                  onChange={handleInputChange}
                  required
                  style={serifStyle}
                  className="h-12 px-4 border-2 border-[#e2e8f0] rounded-lg focus:border-[#7c3aed] focus:ring-2 focus:ring-[#7c3aed]/20 outline-none transition-all bg-white"
                  placeholder="Email Address"
                />
                <input
                  type="tel"
                  name="member2Phone"
                  value={formData.member2Phone}
                  onChange={handleInputChange}
                  required
                  style={serifStyle}
                  className="h-12 px-4 border-2 border-[#e2e8f0] rounded-lg focus:border-[#7c3aed] focus:ring-2 focus:ring-[#7c3aed]/20 outline-none transition-all bg-white"
                  placeholder="Phone Number"
                />
              </div>
            </div>

            {/* Member 3 */}
            <div className="mb-6 p-6 bg-[#f8fafc] rounded-xl border-2 border-[#e2e8f0]">
              <h3 style={serifStyle} className="text-lg font-bold text-[#1a2b4a] mb-4">
                Member 3 *
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <input
                  type="text"
                  name="member3Name"
                  value={formData.member3Name}
                  onChange={handleInputChange}
                  required
                  style={serifStyle}
                  className="h-12 px-4 border-2 border-[#e2e8f0] rounded-lg focus:border-[#7c3aed] focus:ring-2 focus:ring-[#7c3aed]/20 outline-none transition-all bg-white"
                  placeholder="Full Name"
                />
                <input
                  type="email"
                  name="member3Email"
                  value={formData.member3Email}
                  onChange={handleInputChange}
                  required
                  style={serifStyle}
                  className="h-12 px-4 border-2 border-[#e2e8f0] rounded-lg focus:border-[#7c3aed] focus:ring-2 focus:ring-[#7c3aed]/20 outline-none transition-all bg-white"
                  placeholder="Email Address"
                />
                <input
                  type="tel"
                  name="member3Phone"
                  value={formData.member3Phone}
                  onChange={handleInputChange}
                  required
                  style={serifStyle}
                  className="h-12 px-4 border-2 border-[#e2e8f0] rounded-lg focus:border-[#7c3aed] focus:ring-2 focus:ring-[#7c3aed]/20 outline-none transition-all bg-white"
                  placeholder="Phone Number"
                />
              </div>
            </div>

            {/* Member 4 (Optional) */}
            {formData.teamSize === '4' && (
              <div className="p-6 bg-[#f8fafc] rounded-xl border-2 border-[#e2e8f0]">
                <h3 style={serifStyle} className="text-lg font-bold text-[#1a2b4a] mb-4">
                  Member 4 (Optional)
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <input
                    type="text"
                    name="member4Name"
                    value={formData.member4Name}
                    onChange={handleInputChange}
                    style={serifStyle}
                    className="h-12 px-4 border-2 border-[#e2e8f0] rounded-lg focus:border-[#7c3aed] focus:ring-2 focus:ring-[#7c3aed]/20 outline-none transition-all bg-white"
                    placeholder="Full Name"
                  />
                  <input
                    type="email"
                    name="member4Email"
                    value={formData.member4Email}
                    onChange={handleInputChange}
                    style={serifStyle}
                    className="h-12 px-4 border-2 border-[#e2e8f0] rounded-lg focus:border-[#7c3aed] focus:ring-2 focus:ring-[#7c3aed]/20 outline-none transition-all bg-white"
                    placeholder="Email Address"
                  />
                  <input
                    type="tel"
                    name="member4Phone"
                    value={formData.member4Phone}
                    onChange={handleInputChange}
                    style={serifStyle}
                    className="h-12 px-4 border-2 border-[#e2e8f0] rounded-lg focus:border-[#7c3aed] focus:ring-2 focus:ring-[#7c3aed]/20 outline-none transition-all bg-white"
                    placeholder="Phone Number"
                  />
                </div>
              </div>
            )}
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              style={serifStyle}
              className="px-12 py-4 text-lg font-bold text-white bg-gradient-to-r from-[#7c3aed] to-[#6b21a8] rounded-xl hover:from-[#6b21a8] hover:to-[#5b21b6] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 flex items-center gap-3"
            >
              <span>Submit Registration</span>
              <Send size={20} />
            </button>
          </div>
        </form>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }
      `}</style>
    </div>
  );
};

// Home Page Component (Placeholder)
export default RegistrationForm;