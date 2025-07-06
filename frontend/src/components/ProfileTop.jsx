import React from 'react';
import { FaShareAlt, FaCog } from "react-icons/fa";
function ProfileTop() {
    return (
    <div className="flex items-center justify-between px-4 py-3 text-white">
      <div className="flex items-center gap-3">
        <div className="w-14 h-14 bg-purple-500 rounded-full flex items-center justify-center text-xl font-bold">
          D
        </div>
        <div>
          <h3 style={{color:"White"}} className="font-semibold text-lg">Dev & Dreams</h3>
          <p className="text-sm text-gray-400">myselfdevsingh123@gmail.com</p>
        </div>
      </div>
      <div style={{color:"	#05C89C"}}className="flex items-center gap-3 text-gray-300 text-lg">
        <FaShareAlt />
        <FaCog />
      </div>
    </div>

    );
}

export default ProfileTop;