function ProfileMiddle() {
    return (
        <div className="bg-[#1E1E1E] rounded-2xl p-4 mx-4 text-white border border-gray-700 mt-5 mb-5">
            <div className="flex justify-between items-center mb-2">
                <div className="flex items-center gap-2 text-sm">
                    <span className="bg-yellow-400 text-black px-2 py-0.5 rounded-full text-xs font-medium mb-1">Level 1</span>
                    <span style={{color:"#05C89C"}} className="text-caribbeanGreen font-medium ml-5 mb-1">EcoSphere Explorer</span>
                </div>
            </div>

            <div className="w-full bg-gray-700 h-2 rounded-full overflow-hidden mb-2">
                <div className="bg-purple-400 h-2 w-[0%]"></div>
            </div>

            <div className="flex justify-between text-xs text-gray-400">
                <span>0</span>
                <span className="text-caribbeanGreen font-medium">10 </span>
            </div>
        </div>
    );
}

export default ProfileMiddle;