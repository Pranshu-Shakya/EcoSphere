import React, { useState } from 'react';
import { FaHome, FaUsers, FaSeedling, FaBullseye, FaFireAlt, FaLeaf } from 'react-icons/fa';


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
    <div className="bg-black text-white px-4 pt-4 pb-20 font-sans">
      {/* === Tabs === */}
      <div className="bg-[#1E1E1E] p-1 rounded-full flex justify-between text-sm font-medium mb-6">
        {["Achievements", "Reports", "Footprint"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex-1 py-2 rounded-full transition-all ${
              activeTab === tab ? "bg-purple-400 text-black" : "text-white"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* === Achievements === */}
      {activeTab === "Achievements" && (
        <div  className="grid grid-cols-2 gap-4 bg-black">
          {stats.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#1E1E1E] rounded-xl p-4 flex flex-col items-center text-center shadow"
            >
              <div className="text-2xl mb-2 text-caribbeanGreen">{item.icon}</div>
              <p className="text-xl font-bold">{item.value}</p>
              <p className="text-xs text-gray-400 mt-1">{item.label}</p>
            </div>
          ))}
        </div>
      )}

      {/* === Reports === */}
      {activeTab === "Reports" && (
        <div>
          {/* Header + Dropdowns */}
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">My Savings</h3>
            <div className="flex gap-2 text-sm">
              <select className="bg-[#1E1E1E] text-white px-2 py-1 rounded-full border border-gray-700">
                <option>All</option>
                <option>Home</option>
              </select>
              <select className="bg-[#1E1E1E] text-white px-2 py-1 rounded-full border border-gray-700">
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
                className={`px-4 py-1 rounded-full text-sm ${
                  filter === btn
                    ?  "bg-[#05C89C]"
                    : "bg-[#1E1E1E] text-gray-300"
                }`}
              >
                {btn}
              </button>
            ))}
          </div>

          {/* Progress Bars */}
          <div className="bg-[#1E1E1E] rounded-xl p-4 space-y-4">
            {categories.map((cat) => (
              <div key={cat}>
                <div className="flex justify-between text-sm text-gray-400 mb-1">
                  <span>{cat} (0%)</span>
                </div>
                <div className="w-full h-3 bg-gray-700 rounded-full overflow-hidden">
                  <div className="bg-purple-400 h-3 w-[0%]"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* === Footprint === */}
      {activeTab === "Footprint" && (
        <div className="flex flex-col items-center justify-center mt-12 text-center">
          <p className="text-sm text-gray-300">
            Your Carbon Footprint is not yet calculated!
          </p>
        </div>
      )}
    </div>
  );
}

export default ProfileBottom;
