import React from 'react';
function CommunityDisplayFollowers({members}) {
    return (
        <>
            {/* followers card horizontally scrollable for small screen only */}
            <div className="eco-static-bg border border-y-green-100 sm:hidden w-full px-5 py-4">
                <div className="overflow-x-auto no-scrollbar flex gap-4 pb-2">
                    {members.map((member, index) => (
                        <div
                            key={index}
                            className="bg-green-100 text-green-900 p-4 rounded-xl shadow flex flex-col items-center min-w-[140px]"
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
                            <button className="px-4 py-1 rounded-full font-semibold whitespace-nowrap transition-all duration-200 flex-shrink-0 bg-emerald-400 text-green-900 shadow-[0_4px_0_#047857] hover:bg-emerald-500">
                                Follow
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default CommunityDisplayFollowers;