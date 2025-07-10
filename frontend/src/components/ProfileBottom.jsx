import React, { useState } from 'react';
import { FaSeedling, FaBullseye, FaFireAlt, FaLeaf } from 'react-icons/fa';

function ProfileBottom() {
  const [activeTab, setActiveTab] = useState("Footprint");
  const [filter, setFilter] = useState("Cool Points");

  const stats = [
    { label: "Total Cool Points", value: 0, icon: <FaSeedling /> },
    { label: "Completed Actions", value: 1, icon: <FaBullseye /> },
    { label: "Ongoing Streak", value: "0 days", icon: <FaFireAlt /> },
    { label: "Saved Emissions", value: "67 kg CO₂eq", icon: <FaLeaf /> },
  ];

  const categories = ["Travel", "Energy", "Food", "Waste"];

  return (
    <div style={{borderRadius:"10px"}} className="bg-green-100 text-white px-4 pt-6 pb-20 font-sans rounded-t-3xl  border border-green-100">
      
      {/* Tabs */}
      <div className="bg-[#0c2d1a] border border-green-100 rounded-full flex justify-between text-sm font-medium mb-8 overflow-hidden">
        {["Achievements", "Reports", "Footprint"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex-1 py-2 transition-all duration-200 ${
              activeTab === tab
                ? "bg-[#BFFF00] text-[#012E1C] font-semibold"
                : "text-lime-100 hover:bg-[#194d30]"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* === Achievements Tab === */}
      {activeTab === "Achievements" && (
        <div className="grid grid-cols-2 gap-4">
          {stats.map((item, idx) => (
            <div
              key={idx}
              className="bg-green-50 text-[#012E1C] rounded-xl p-4 flex flex-col items-center text-center shadow-md hover:shadow-lg transition"
            >
              <div className="text-2xl mb-2 text-[#0f7039]">{item.icon}</div>
              <p className="text-xl font-bold">{item.value}</p>
              <p className="text-xs text-green-900 mt-1">{item.label}</p>
            </div>
          ))}
        </div>
      )}

      {/* === Reports Tab === */}
      {activeTab === "Reports" && (
        <div>
          {/* Header & Filters */}
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-green-800">My Savings</h3>
            <div className="flex gap-2 text-sm">
              <select className="bg-[#0c2d1a] border border-green-100 text-green-100 px-3 py-1 rounded-full">
                <option>All</option>
                <option>Home</option>
              </select>
              <select className="bg-[#0c2d1a] border border-lime-500 text-green-100 px-3 py-1 rounded-full">
                <option>2024</option>
                <option>2023</option>
              </select>
            </div>
          </div>

          {/* Filter Buttons */}
          <div className="flex gap-2 mb-6">
            {["Cool Points", "Emissions"].map((btn) => (
              <button
                key={btn}
                onClick={() => setFilter(btn)}
                className={`px-4 py-1 rounded-full text-sm transition ${
                  filter === btn
                    ? "bg-[#BFFF00] text-green-900 font-semibold"
                    : "bg-[#0c2d1a] text-green-200"
                }`}
              >
                {btn}
              </button>
            ))}
          </div>

          {/* Progress Bars */}
          <div className="bg-[#154734] rounded-xl p-4 space-y-4 border border-green-100">
            {categories.map((cat) => (
              <div key={cat}>
                <div className="flex justify-between text-sm text-green-100 mb-1">
                  <span>{cat} (0%)</span>
                </div>
                <div className="w-full h-3 bg-green-900 rounded-full overflow-hidden">
                  <div className="bg-lime-400 h-3 w-[0%]"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* === Footprint Tab === */}
      {activeTab === "Footprint" && (
        <div className="flex flex-col items-center justify-center mt-12 text-center">
          <p className="text-sm text-green-800">
            Your Carbon Footprint is not yet calculated!
          </p>
        </div>
      )}
    </div>
  );
}

export default ProfileBottom;
