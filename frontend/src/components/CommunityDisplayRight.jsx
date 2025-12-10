import React from 'react';
function CommunityDisplayRight({ members }) {
    return (
        <>
            <div className="eco-static-bg border hidden md:block border-l-green-100 w-full px-5 py-4 ">
                <div className="bg-green-100 text-green-900 h-10 w-full mb-4 flex justify-center rounded-xl items-center text-2xl">Community Members</div>
                {/* followers card */}
                <div className="h-[600px] overflow-y-auto no-scrollbar">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 ">

                        {members.map((member, index) => (
                            <div
                                key={index}
                                className="bg-green-100 text-green-900 p-4 rounded-xl shadow flex flex-col items-center"
                            >
                                {/* Avatar */}
                                <img
                                    className="bg-green-900 rounded-full h-20 w-20 p-1 mb-3"
                                    src="https://png.pngtree.com/png-vector/20231019/ourlarge/pngtree-user-profile-avatar-png-image_10211467.png"
                                    alt={member.name}
                                />

                                {/* Name */}
                                <div className="font-medium text-green-900 mb-3 text-center">{member.name}</div>

                                {/* Follow Button */}
                                <button className="px-6 py-1 rounded-full font-semibold whitespace-nowrap transition-all duration-200 flex-shrink-0 bg-emerald-400 text-green-900 shadow-[0_4px_0_#047857] hover:bg-emerald-500">
                                    Follow
                                </button>
                            </div>
                        ))}
                    </div>
                </div>


            </div>

        </>
    );
}

export default CommunityDisplayRight;