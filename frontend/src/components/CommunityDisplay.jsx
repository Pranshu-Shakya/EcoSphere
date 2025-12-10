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



function CommunityDisplay() {
  const location = useLocation();
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

    </div>
  );
}

export default CommunityDisplay;

