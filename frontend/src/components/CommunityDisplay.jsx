<<<<<<< HEAD
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { useEffect } from "react";
import { toast } from "sonner";
import axios from "axios";
=======
import React, { useContext, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { useEffect } from "react";
import { toast } from "sonner";
import axios from "axios";
import { ShopContext } from "../contexts/ShopContext";
import { jwtDecode } from "jwt-decode";
import CommunityDisplayLeft from "./CommunityDisplayLeft";
import CommunityDisplayMiddle from "./CommunityDisplayMiddle";
import CommunityDisplayFollowers from "./CommunityDisplayFollowes";
import CommunityDisplayRight from "./CommunityDisplayRight";

>>>>>>> e3a2556 (final updates)


function CommunityDisplay() {
  const location = useLocation();
<<<<<<< HEAD
  const { community } = location.state || {}; // Get full community info from state

  const [activeTab, setActiveTab] = useState("All");
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [chatInputs, setChatInputs] = useState({});
  const [openComments, setOpenComments] = useState({});

  useEffect(() => {
    // fetching post for the community
    const fetchPosts = async () => {
      try {
        const response = await axios.post(
          `${
            import.meta.env.VITE_BACKEND_URL
          }/api/communities/fetch-community-posts`,
          { communityId: community._id },
          { headers: { token: localStorage.getItem("token") } }
        );
        if (response.status === 200) {
          //toast.success("succesfully fetched posts");
          setFilteredPosts(response.data.posts);
        } else {
          //toast.error("Failed to fetch posts");
        }
      } catch (err) {
        // toast.error("error fetching posts");
      }
    };
    fetchPosts();
  }, []);

  const handleInputChange = (id, value) => {
    setChatInputs((prev) => ({ ...prev, [id]: value }));
  };

  const handleAddComment = (id) => {
    const value = chatInputs[id];
    if (value?.trim()) {
      const postIndex = dummyPosts.findIndex((p) => p.id === id);
      dummyPosts[postIndex].comments.push({ user: "You", text: value });
      setChatInputs((prev) => ({ ...prev, [id]: "" }));
=======
  const { id } = useParams()
  const { backendUrl } = useContext(ShopContext);
  const { community } = location.state || {};
  const [joins, setjoins] = useState(0);
  const [loading, setLoading] = useState(false);
  const [members, setMembers] = useState([]);
  const [membersId, setMembersId] = useState([]);
  const [open, setOpen] = useState(false);

  let token = localStorage.getItem("token");
  const userId = token ? jwtDecode(token).id : null;



  const [filteredPosts, setFilteredPosts] = useState([]);
  const [chatInputs, setChatInputs] = useState({});
  const [openComments, setOpenComments] = useState({});

  // fetch community posts
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.post(
          `${backendUrl}/api/communities/fetch-community-posts`,
          { communityId: community._id },
          { headers: { token } }
        );
        if (res.status === 200) {
          setFilteredPosts(res.data.posts);
        }
      } catch { }
    };
    fetchPosts();
  }, [backendUrl, community?._id, token]);

  // fetch members & joins
  const fetchJoins = async () => {
    try {
      const res = await axios.get(`${backendUrl}/api/communities/${id}`);
      setMembers(res.data.members);
      setjoins(res.data.members.length);
      setMembersId(res.data.members.map((member) => {
        return member._id;
      }))
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchJoins();
  }, []);


  // Optimistic Join/Leave handler
  const joiningCommunity = async (communityName, action) => {
    setLoading(true);

    // optimistic update first ui changes then chnges in backend
    if (action === "join") {
      setMembersId((prev) => [...prev, userId]);
      setjoins((prev) => prev + 1);
    } else {
      setMembersId((prev) => prev.filter((id) => id !== userId));
      setjoins((prev) => Math.max(0, prev - 1));
>>>>>>> e3a2556 (final updates)
    }
  };

<<<<<<< HEAD
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
          <h1 className="text-3xl font-bold text-green-50 mb-2">
            {community.name}
          </h1>
          <p className="text-green-50 mb-1"> Admin {community.creator.name}</p>
          <p className="text-green-50 mb-1">Agenda is {community.agenda}</p>
          <p className="text-green-50 mb-1">
            Total Members {community.members.length}
          </p>
        </div>

        <div className="text-center md:text-left">
          <h3 className="text-3xl font-bold text-green-50 mb-2">
            Want to Share or Ask Something?
          </h3>
          <p className="text-green-50 mb-1">
            Post your tips, guides, or initiatives with the community.
          </p>
          <Link
            to={{
              pathname: "/communities/post/new",
              search: `?communityId=${community._id}`,
            }}
          >
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
            className={
              activeTab === tab
                ? "bg-lime-300 text-green-900 font-semibold px-6 py-2 rounded-full shadow-[0_4px_0_#65a30d] hover:translate-y-[1px] hover:shadow-[0_2px_0_#65a30d] active:translate-y-[2px] active:shadow-none transition-all duration-150"
                : "bg-emerald-400 text-green-900 font-semibold px-6 py-2 rounded-full shadow-[0_4px_0_#047857] hover:translate-y-[1px] hover:shadow-[0_2px_0_#047857] active:translate-y-[2px] active:shadow-none transition-all duration-150"
            }
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Post Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 p-5 ">
        {filteredPosts.length === 0 && (
          <div className="flex items-center gap-4">
            <div className="text-gray-200 text-2xl"> No posts available </div>{" "}
            <Link
              to={{
                pathname: "/communities/post/new",
                search: `?communityId=${community._id}`,
              }}
            >
              <button className="bg-lime-300 mt-3 text-green-900 font-semibold px-6 py-2 rounded-full shadow-[0_4px_0_#65a30d] hover:translate-y-[1px] hover:shadow-[0_2px_0_#65a30d] active:translate-y-[2px] active:shadow-none transition-all duration-150">
                + Create post
              </button>
            </Link>
          </div>
        )}
        {filteredPosts.map((post) => (
          <div
            key={post.id}
            className="bg-green-50 rounded-xl shadow-md mb-5 overflow-hidden"
          >
            <div className="relative">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-60 object-cover"
              />
            </div>
            <div className="p-4">
              <h2 className="font-bold text-md uppercase mb-2">{post.title}</h2>
              <p className="text-sm text-green-800 mb-3">{post.content}</p>
              <div className="text-xs text-green-800 flex justify-between  mb-2">
                <div className="bg-green-700 text-white text-xs px-2 py-1 rounded">
                  {post.tag}
                </div>
                <div className="flex justify-between">
                  <div>
                    <button>
                      <FaHeart className="text-green-600 w-10 h-4 transition-colors duration-200" />
                    </button>
                  </div>
                  <div>{post.likes}</div>
                </div>
              </div>

              <div className="flex justify-between mb-5 mt-2">
                <div className="text-sm">Posted by {post.authorId.name}</div>
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
                      <strong className="text-green-800">{cmt.user}:</strong>{" "}
                      {cmt.text}
                    </div>
                  ))}
                  <div className="mt-2 flex gap-2">
                    <input
                      value={chatInputs[post.id] || ""}
                      onChange={(e) =>
                        handleInputChange(post.id, e.target.value)
                      }
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
=======
    try {
      await axios.post(
        `${backendUrl}/api/communities/action-community`,
        { communityName, action },
        { headers: { token } }
      );

      // sync actual server data fetched from backend 
      fetchJoins();
    } catch (err) {
      console.error("Join Error:", err);
      toast.error("Something went wrong");

      import React, { useContext, useState } from "react";
      import { useLocation, useParams } from "react-router-dom";
      import { useEffect } from "react";
      import { toast } from "sonner";
      import axios from "axios";
      import { ShopContext } from "../contexts/ShopContext";
      import jwtDecode from "jwt-decode";
      import CommunityDisplayLeft from "./CommunityDisplayLeft";
      import CommunityDisplayMiddle from "./CommunityDisplayMiddle";
      import CommunityDisplayFollowers from "./CommunityDisplayFollowes";
      import CommunityDisplayRight from "./CommunityDisplayRight";


      function CommunityDisplay() {
        const location = useLocation();
        const { id } = useParams();
        const { backendUrl } = useContext(ShopContext);
        const { community } = location.state || {};
        const [joins, setjoins] = useState(0);
        const [loading, setLoading] = useState(false);
        const [members, setMembers] = useState([]);
        const [membersId, setMembersId] = useState([]);
        const [open, setOpen] = useState(false);

        let token = localStorage.getItem("token");
        const userId = token ? jwtDecode(token).id : null;


        const [filteredPosts, setFilteredPosts] = useState([]);
        const [chatInputs, setChatInputs] = useState({});
        const [openComments, setOpenComments] = useState({});

        // fetch community posts
        useEffect(() => {
          const fetchPosts = async () => {
            try {
              const res = await axios.post(
                `${backendUrl}/api/communities/fetch-community-posts`,
                { communityId: community._id },
                { headers: { token } }
              );
              if (res.status === 200) {
                setFilteredPosts(res.data.posts);
              }
            } catch { }
          };
          fetchPosts();
        }, [backendUrl, community?._id, token]);

        // fetch members & joins
        const fetchJoins = async () => {
          try {
            const res = await axios.get(`${backendUrl}/api/communities/${id}`);
            setMembers(res.data.members);
            setjoins(res.data.members.length);
            setMembersId(res.data.members.map((member) => {
              return member._id;
            }))
          } catch (err) {
            console.log(err);
          }
        };

        useEffect(() => {
          fetchJoins();
        }, []);


        // Optimistic Join/Leave handler
        const joiningCommunity = async (communityName, action) => {
          setLoading(true);

          // optimistic update first ui changes then chnges in backend
          if (action === "join") {
            setMembersId((prev) => [...prev, userId]);
            setjoins((prev) => prev + 1);
          } else {
            setMembersId((prev) => prev.filter((id) => id !== userId));
            setjoins((prev) => Math.max(0, prev - 1));
          }
          try {
            await axios.post(
              `${backendUrl}/api/communities/action-community`,
              { communityName, action },
              { headers: { token } }
            );

            // sync actual server data fetched from backend 
            fetchJoins();
          } catch (err) {
            console.error("Join Error:", err);
            toast.error("Something went wrong");

            // rollback UI if error
            fetchJoins();
          } finally {
            setLoading(false);
          }
        };



        // setting chats input in comments
        const handleInputChange = (id, value) => {
          setChatInputs((prev) => ({ ...prev, [id]: value }));
        };

        // handling comments
        const handleAddComment = (id) => {
          const value = chatInputs[id];
          if (value?.trim()) {
            const postIndex = dummyPosts.findIndex((p) => p.id === id);
            dummyPosts[postIndex].comments.push({ user: "You", text: value });
            setChatInputs((prev) => ({ ...prev, [id]: "" }));
          }
        };

        // comment toggle button
        const toggleComments = (id) => {
          setOpenComments((prev) => ({ ...prev, [id]: !prev[id] }));
        };

        if (!community) {
          return <div className="p-6 text-green-800">Community data not found.</div>;
        }

        // Share handler
        const handleShare = async () => {
          const url = window.location.href;
          const title = community?.title || 'Check this out!';
          const text = `Have a look at this community I found about ${community.agenda} on EcoSphere`;

          if (navigator.share) {
            try {
              await navigator.share({ title, text, url });
            } catch {
              try {
                await navigator.clipboard.writeText(url);
                toast.info('Link copied to clipboard!');
              } catch {
                toast.error('Failed to share link');
              }
            }
          } else {
            try {
              await navigator.clipboard.writeText(url);
              toast.success('Link copied to clipboard!');
            } catch {
              toast.error('Failed to copy link');
            }
          }
        };

        if (!community) {
          return <div className="p-6 text-green-800">Community data not found.</div>;
        }

        return (
          <div className="eco-static-bg min-h-screen grid lg:grid-cols-3 grid-cols-1  justify-between  text-green-900">

            {/* left section for community description */}
            <CommunityDisplayLeft
              community={community}
              joins={joins}
              handleShare={handleShare}
              membersId={membersId}
              token={token}
              loading={loading}
              setLoading={setLoading}
              joiningCommunity={joiningCommunity}
            />

            {/* followers section for small screen */}
            <CommunityDisplayFollowers members={members} />

            {/* middle section for community feed */}
            <CommunityDisplayMiddle
              filteredPosts={filteredPosts}
              handleAddComment={handleAddComment}
              handleInputChange={handleInputChange}
              openComments={openComments}
              toggleComments={toggleComments}
            />

            {/* right section for followers large and medium screen */}
            <CommunityDisplayRight 
            members={members} 
            />

      {/* left section for community description */}
      <CommunityDisplayLeft
        community={community}
        joins={joins}
        handleShare={handleShare}
        membersId={membersId}
        token={token}
        loading={loading}
        setLoading={setLoading}
        joiningCommunity={joiningCommunity}
      />

      {/* followers section for small screen */}
      <CommunityDisplayFollowers members={members} />

      {/* middle section for community feed */}
      <CommunityDisplayMiddle
        filteredPosts={filteredPosts}
        handleAddComment={handleAddComment}
        handleInputChange={handleInputChange}
        openComments={openComments}
        toggleComments={toggleComments}
      />

      {/* right section for followers large and medium screen */}
      <CommunityDisplayRight 
      members={members} 
      />

>>>>>>> e3a2556 (final updates)
    </div>
  );
}

export default CommunityDisplay;

