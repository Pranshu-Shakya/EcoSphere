import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaHeart } from 'react-icons/fa';

const dummyPosts = [
    {
        id: 1,
        title: "Started balcony garden",
        content: "Just added 5 new herbs in pots today. Anyone doing vertical gardening?",
        author: "Anchal Mishra",
        time: "2 hrs ago",
        tag: "Gardening",
        likes: 50,
        image: "https://www.hdwallpapers.in/download/save_earth-HD.jpg",
        comments: [
            { user: "Dev", text: "That’s awesome! Share pics." },
            { user: "Riya", text: "I love gardening too!" },
        ],
    },
    {
        id: 2,
        title: "DIY composting bin!",
        content: "Shared a video guide on how to build one with old buckets. ",
        author: "Dev Singh",
        time: "1 day ago",
        tag: "Waste",
        likes: 100,
        image: "https://cff2.earth.com/uploads/2017/04/21191605/shutterstock_261496850.jpg",
        comments: [],
    },
];

const tabs = ["All", "Gardening", "Waste"];

function CommunityDisplay() {
    const location = useLocation();
    const { community } = location.state || {}; // Get full community info from state

    const [activeTab, setActiveTab] = useState("All");
    const [chatInputs, setChatInputs] = useState({});
    const [openComments, setOpenComments] = useState({});

    const filteredPosts = activeTab === "All"
        ? dummyPosts
        : dummyPosts.filter((post) => post.tag === activeTab);

    const handleInputChange = (id, value) => {
        setChatInputs((prev) => ({ ...prev, [id]: value }));
    };

    const handleAddComment = (id) => {
        const value = chatInputs[id];
        if (value?.trim()) {
            const postIndex = dummyPosts.findIndex((p) => p.id === id);
            dummyPosts[postIndex].comments.push({ user: "You", text: value });
            setChatInputs((prev) => ({ ...prev, [id]: "" }));
        }
    };

    const toggleComments = (id) => {
        setOpenComments((prev) => ({ ...prev, [id]: !prev[id] }));
    };

    if (!community) {
        return <div className="p-6 text-green-800">Community data not found.</div>;
    }

    return (
        <div className="eco-static-bg min-h-screen text-green-900">

            <div className="align-items-center">
                <img
                    src={community.coverImage}
                    alt={`${community.name} cover`}
                    className=" h-100 w-full"
                ></img>
            </div>
            <div className="flex flex-col md:flex-row justify-between items-center pl-15 pr-15 mb-10  mt-10 ">

                <div className="text-left">
                    <h1 className="text-3xl font-bold text-green-50 mb-2">{community.name}</h1>
                    <p className="text-green-50 mb-1"> Admin {community.creator}</p>
                    <p className="text-green-50 mb-1">Agenda is {community.agenda}</p>
                    <p className="text-green-50 mb-1">Total Members {community.members}</p>
                </div>


                <div className="text-center md:text-left">
                    <h3 className="text-3xl font-bold text-green-50 mb-2">Want to Share or Ask Something?</h3>
                    <p className="text-green-50 mb-1">
                        Post your tips, guides, or initiatives with the community.
                    </p>
                    <Link to='/communities/post/new'>
                                       <button className="bg-lime-300 mt-3 text-green-900 font-semibold px-6 py-2 rounded-full shadow-[0_4px_0_#65a30d] hover:translate-y-[1px] hover:shadow-[0_2px_0_#65a30d] active:translate-y-[2px] active:shadow-none transition-all duration-150">
                        + Create post
                    </button>

                    </Link>
 

                </div>



            </div>

            <hr className="text-green-100 mb-10"></hr>
            {/* Tabs */}
            <div className="flex mb-5 gap-3 ml-5">
                {tabs.map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={activeTab === tab ? 'bg-lime-300 text-green-900 font-semibold px-6 py-2 rounded-full shadow-[0_4px_0_#65a30d] hover:translate-y-[1px] hover:shadow-[0_2px_0_#65a30d] active:translate-y-[2px] active:shadow-none transition-all duration-150'
                            : 'bg-emerald-400 text-green-900 font-semibold px-6 py-2 rounded-full shadow-[0_4px_0_#047857] hover:translate-y-[1px] hover:shadow-[0_2px_0_#047857] active:translate-y-[2px] active:shadow-none transition-all duration-150'}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            {/* Post Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 p-5 ">
                {filteredPosts.map((post) => (
                    <div key={post.id} className="bg-green-50 rounded-xl shadow-md mb-5 overflow-hidden">
                        <div className="relative">
                            <img src={post.image} alt={post.title} className="w-full h-60 object-cover" />

                        </div>
                        <div className="p-4">
                            <h2 className="font-bold text-md uppercase mb-2">{post.title}</h2>
                            <p className="text-sm text-green-800 mb-3">{post.content}</p>
                            <div className="text-xs text-green-800 flex justify-between  mb-2">
                                <div className="bg-green-700 text-white text-xs px-2 py-1 rounded">
                                    {post.tag}
                                </div>
                                <div className="flex justify-between">
                                    <div><button><FaHeart className='text-green-600 w-10 h-4 transition-colors duration-200' /></button></div>
                                    <div>{post.likes}</div>
                                </div>
                            </div>

                            <div className="flex justify-between mb-5 mt-2">
                                <div className="text-sm">Posted by {post.author}</div>
                                <div className="text-sm">{post.time}</div>
                            </div>


                            <button
                                onClick={() => toggleComments(post.id)}
                                className="text-green-700 text-sm font-medium hover:underline"
                            >
                                {openComments[post.id] ? "Hide Comments" : "View Comments"}
                            </button>

                            {openComments[post.id] && (
                                <div className="mt-4 border-t pt-3">
                                    <h4 className="text-green-700 font-medium mb-2">Comments</h4>
                                    {post.comments.map((cmt, idx) => (
                                        <div key={idx} className="text-sm text-gray-800 mb-1">
                                            <strong className="text-green-800">{cmt.user}:</strong> {cmt.text}
                                        </div>
                                    ))}
                                    <div className="mt-2 flex gap-2">
                                        <input
                                            value={chatInputs[post.id] || ''}
                                            onChange={(e) => handleInputChange(post.id, e.target.value)}
                                            className="flex-1 border border-green-300 px-3 py-1 rounded-md text-sm"
                                            placeholder="Add a comment..."
                                        />
                                        <button
                                            onClick={() => handleAddComment(post.id)}
                                            className="bg-green-600 text-white px-4 py-1 rounded hover:bg-green-700 text-sm"
                                        >
                                            Send
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>


        </div>
    );
}

export default CommunityDisplay;
