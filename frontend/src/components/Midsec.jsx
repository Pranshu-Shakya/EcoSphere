// File: src/App.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FiCalendar, FiUsers } from 'react-icons/fi';

const initiatives = [
  {
    title: "Community Tree Planting",
    location: "Central Park, NYC",
    description:
      "Join us for a weekend tree planting event. We aim to plant 200 trees to help combat climate change and beautify our community.",
    date: "Dec 15, 2024",
    joined: 42,
    status: "Active",
    badgeColor: "bg-green-100 text-green-700",
    iconBg: "bg-green-100 text-green-600",
  },
  {
    title: "Beach Cleanup Drive",
    location: "Santa Monica Beach",
    description:
      "Help us clean up the beach and protect marine life. Bring gloves and reusable bags - we'll provide the rest!",
    date: "Dec 8, 2024",
    joined: 28,
    status: "Tomorrow",
    badgeColor: "bg-orange-100 text-orange-700",
    iconBg: "bg-green-100 text-green-600",
  },
];

const chats = [
  { user: "JD", message: "Great turnout for the tree planting event! 🌱", time: "2 min ago" },
  { user: "SM", message: "Can't wait for the beach cleanup tomorrow!", time: "5 min ago" },
  { user: "AR", message: "Has anyone tried reusable gloves?", time: "10 min ago" },
];

export default function Midsec() {
  return (
    <div className="font-sans bg-[#F9FBFC] min-h-screen p-6">
      <h1 className="text-3xl font-bold text-center text-[#01523F]">Eco-Communities & Initiatives</h1>
      <p className="text-center text-gray-600 mt-2 mb-6">
        Join local initiatives, connect with like-minded individuals, and make a real impact together
      </p>

      <div className="flex flex-wrap justify-between gap-6">
        {/* Left - Initiatives */}
        <div className="flex-1 min-w-[300px]">
          <h2 className="text-xl font-semibold mb-4">Active Initiatives</h2>
          <p className="text-gray-600 mb-4">Join or create eco-friendly initiatives in your area</p>

          <div className="space-y-4">
            {initiatives.map((i, index) => (
              <div key={index} className="bg-white rounded-xl p-4 shadow-sm">
                <div className="flex items-start justify-between">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${i.iconBg}`}>
                    <span className="text-xl">{i.title.includes('Tree') ? '🌱' : '♻️'}</span>
                  </div>
                  <span className={`text-sm px-3 py-1 rounded-full font-medium ${i.badgeColor}`}>{i.status}</span>
                </div>

                <h3 className="font-semibold text-lg mt-2">{i.title}</h3>
                <p className="text-sm text-gray-600">{i.location}</p>
                <p className="text-sm text-gray-700 mt-2">{i.description}</p>

                <div className="flex items-center text-sm text-gray-500 mt-3 space-x-4">
                  <span className="flex items-center gap-1"><FiCalendar /> {i.date}</span>
                  <span className="flex items-center gap-1"><FiUsers /> {i.joined} joined</span>
                </div>

                <div className="flex items-center mt-3 text-sm">
                  <div className="flex -space-x-1">
                    <div className="w-6 h-6 rounded-full bg-yellow-400 border-2 border-white" />
                    <div className="w-6 h-6 rounded-full bg-green-600 border-2 border-white" />
                    <div className="w-6 h-6 rounded-full bg-orange-400 border-2 border-white" />
                  </div>
                  <span className="ml-2 text-gray-600">+{i.joined - 3} others</span>
                </div>

                <a href="#" className="text-green-600 text-sm mt-2 inline-block font-medium">Join Initiative</a>
              </div>
            ))}
          </div>
        </div>

        {/* Right - Community Chat */}
        <div className="w-full max-w-sm bg-white rounded-xl shadow-sm p-4">
          <h2 className="text-xl font-semibold mb-4">Community Chat</h2>
          <div className="space-y-4">
            {chats.map((c, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-green-500 text-white font-bold flex items-center justify-center">
                  {c.user}
                </div>
                <div>
                  <p className="text-sm text-gray-700">{c.message}</p>
                  <p className="text-xs text-gray-400 mt-1">{c.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Create Initiative Button */}
      <Link to="/Initiative">
  <button className="bg-green-600 text-white px-6 py-3 rounded-xl hover:bg-green-700 transition-all">
    + Create Initiative
  </button>
</Link>
    </div>
  );
}
