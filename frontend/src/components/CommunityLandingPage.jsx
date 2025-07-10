import React, { useState } from "react";
import { Link } from "react-router-dom";

const dummyCommunities = [
    {
        id: 1,
        name: "Green Warriors",
        agenda: "Promote urban gardening in cities.",
        description: "A group for city dwellers passionate about planting and greenery.",
        members: 124,
        creator: "Anchal Mishra",
        joined: false,
        coverImage: "https://img.freepik.com/premium-vector/save-planet-text-banner-poster-design_1639-47265.jpg?w=2000"
    },
    {
        id: 2,
        name: "Zero Waste Champs",
        agenda: "Live with less plastic and waste.",
        description: "Tips, ideas, and support for going zero waste.",
        members: 89,
        creator: "Dev Singh",
        joined: true,
        coverImage: "https://static.vecteezy.com/system/resources/previews/022/448/299/large_2x/save-earth-day-poster-environment-day-nature-green-ai-generative-glossy-background-images-tree-and-water-free-photo.jpg"
    },
    {
        id: 3,
        name: "Clean Air Collective",
        agenda: "Fight air pollution and raise awareness.",
        description: "Organizing clean-air drives and pollution awareness events.",
        members: 56,
        creator: "Riya Verma",
        joined: false,
        coverImage: "https://www.sierraexperts.com/wp-content/uploads/2022/02/shutterstock_1910312269-scaled.jpg"
    },
];


function CommunityLanding() {
    const [tab, setTab] = useState("all");
    const [communities, setCommunities] = useState(dummyCommunities);

    const toggleJoin = (id) => {
        setCommunities(prev =>
            prev.map(comm =>
                comm.id === id ? { ...comm, joined: !comm.joined } : comm
            )
        );
    };

    const filtered = tab === "joined"
        ? communities.filter(c => c.joined)
        : communities;

    return (
        <div className="eco-static-bg min-h-screen text-green-900 ">
            <div className="relative h-[60vh] w-full overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0 mb-20 flex flex-col justify-center items-center z-20 text-center px-4 -translate-y-10">
                    <h1 className="text-5xl mb-md:text-5xl font-extrabold text-white">
                        EcoCommunities <br />
                    </h1>

                    <p className="text-white text-lg font-semibold text-center">
                        Here you can join communities of like-minded people who share your environmental goals. <br />
                        Connect, share ideas, and spark conversations through posts and comments.
                    </p>
                    <Link to='/communities/new'>
                    <button className=' mt-5 bg-lime-300 text-green-900 font-semibold px-6 py-2 rounded-full shadow-[0_4px_0_#65a30d] hover:translate-y-[1px] hover:shadow-[0_2px_0_#65a30d] active:translate-y-[2px] active:shadow-none transition-all duration-150'>
                        + Create Community
                    </button>
                    </Link>

                </div>

                <img style={{ width: "95%" }}
                    src="https://cdn.pixabay.com/photo/2018/11/29/21/51/social-media-3846597_1280.png"
                    alt="Community Banner"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/30 z-10" />
            </div>
            {/* Tabs */}
            <div className="flex gap-3 p-4 mt-5">
                <button
                    onClick={() => setTab("all")}
                    className={tab === "all" ? 'bg-lime-300 text-green-900 font-semibold px-6 py-2 rounded-full shadow-[0_4px_0_#65a30d] hover:translate-y-[1px] hover:shadow-[0_2px_0_#65a30d] active:translate-y-[2px] active:shadow-none transition-all duration-150'
                        : 'bg-emerald-400 text-green-900 font-semibold px-6 py-2 rounded-full shadow-[0_4px_0_#047857] hover:translate-y-[1px] hover:shadow-[0_2px_0_#047857] active:translate-y-[2px] active:shadow-none transition-all duration-150'
                    }
                >
                    All Communities
                </button>
                <button
                    onClick={() => setTab("joined")}
                    className={tab === "joined" ? 'bg-lime-300 text-green-900 font-semibold px-6 py-2 rounded-full shadow-[0_4px_0_#65a30d] hover:translate-y-[1px] hover:shadow-[0_2px_0_#65a30d] active:translate-y-[2px] active:shadow-none transition-all duration-150'
                        : 'bg-emerald-400 text-green-900 font-semibold px-6 py-2 rounded-full shadow-[0_4px_0_#047857] hover:translate-y-[1px] hover:shadow-[0_2px_0_#047857] active:translate-y-[2px] active:shadow-none transition-all duration-150'
                    }
                >
                    Joined Communities
                </button>
            </div>


            {/* Community Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4 pb-10 mt-5">
                {filtered.map((comm) => (
                    <div
                        key={comm.id}
                        className="bg-green-50 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
                    >
                        {/* Cover Image */}
                        <img
                            src={comm.coverImage}
                            alt={`${comm.name} cover`}
                            className="w-full h-40 "
                        />

                        {/* Card Content */}
                        <div className="p-5 mt-5">
                            <h2 className="text-2xl font-extrabold text-green-900 mb-2">{comm.name}</h2>
                            <p className="text-md font-semibold text-green-800 mb-1"> {comm.agenda}</p>
                            <p className="text-sm text-green-700 mb-1">{comm.description}</p>
                            <p className="text-sm text-green-700 mb-3"> {comm.members} members</p>

                            <div className="flex justify-between items-center mt-4">
                                <button
                                    onClick={() => toggleJoin(comm.id)}
                                    className={comm.joined
                                        ? 'bg-lime-300 text-green-900 font-semibold px-6 py-2 rounded-full shadow-[0_4px_0_#65a30d] hover:translate-y-[1px] hover:shadow-[0_2px_0_#65a30d] active:translate-y-[2px] active:shadow-none transition-all duration-150'
                                        : 'bg-emerald-400 text-green-900 font-semibold px-6 py-2 rounded-full shadow-[0_4px_0_#047857] hover:translate-y-[1px] hover:shadow-[0_2px_0_#047857] active:translate-y-[2px] active:shadow-none transition-all duration-150'
                                    }
                                >
                                    {comm.joined ? "Joined" : "Join"}
                                </button>

                                <Link
                                    to={`/community/${comm.id}`}
                                    state={{ community: comm }}
                                    className="text-sm text-green-700 font-medium hover:underline hover:text-green-900"
                                >
                                    Explore →
                                </Link>
                            </div>
                        </div>

                    </div>
                ))}

            </div>


        </div>
    );
}

export default CommunityLanding;
