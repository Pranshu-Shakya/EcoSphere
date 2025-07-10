function ProfileMiddle() {
  return (
    <div className="rounded-2xl p-4 mt-5 mb-5 bg-green-100 text-green-900 shadow-sm">
      
      {/* Level Badge and Title */}
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center gap-3 text-sm">
          <span className="bg-[#BFFF00] text-[#0b3d2e] px-3 py-0.5 rounded-full text-xs font-semibold shadow-sm">
            Level 1
          </span>
          <span className="text-green-800 font-medium tracking-wide">
            EcoSphere Explorer
          </span>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-full h-2 bg-green-900 rounded-full overflow-hidden mb-2">
        <div
          className="bg-[#05C89C] h-2 w-[0%] transition-all duration-500 ease-out"
          style={{ width: "0%" }}
        ></div>
      </div>

      {/* Min-Max Points */}
      <div className="flex justify-between text-xs text-green-800 px-0.5">
        <span className="opacity-100">0</span>
        <span className="font-semibold">10</span>
      </div>
    </div>
  );
}

export default ProfileMiddle;
