import React, { useState, useEffect, useContext, useRef } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { ShopContext } from "../contexts/ShopContext";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { toast } from "react-toastify";

function CommunityLanding() {
  const { backendUrl, navigate, refresh, setRefresh, token } =
    useContext(ShopContext);

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [communities, setCommunities] = useState([]);
  const [isSticky, setIsSticky] = useState(false);

  const scrollRef = useRef(null);
  const headerRef = useRef(null);
  const stickyRef = useRef(null);

  // scroll logic
  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft } = scrollRef.current;
      const scrollAmount = 300;
      scrollRef.current.scrollTo({
        left: direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    }
  };

  // sticky header logic
  useEffect(() => {
    const handleScroll = () => {
      if (headerRef.current) {
        const headerBottom =
          headerRef.current.offsetTop + headerRef.current.offsetHeight;
        const scrollPosition = window.scrollY;
        setIsSticky(scrollPosition > headerBottom);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const communityCategories = [
    "All",
    "Environment",
    "Energy",
    "Waste Management",
    "Sustainability",
    "Lifestyle",
    "Food & Agriculture",
    "Water Resources",
    "Technology & Innovation",
    "Health & Wellness",
    "Community Development",
    "Education & Awareness",
    "Biodiversity",
    "Policy & Governance",
  ];

  const fetchCommunity = async () => {
    try {
      const res = await axios.get(`${backendUrl}/api/communities/all-communities`);
      setCommunities(res.data);
      console.log("Successfully fetched communities");
    } catch (err) {
      console.error("Community fetch failed", err);
    }
  };

  useEffect(() => {
    fetchCommunity();
  }, [refresh]);

  const joiningCommunity = async (communityName) => {
    try {
      await axios.post(
        `${backendUrl}/api/communities/join-community`,
        { communityName },
        { headers: { token } }
      );
      toast.success("Successfully joined the community!");
      return true;
    } catch (err) {
      console.error(err);
      toast.error("Failed to join the community.");
      return false;
    }
  };

  const handleCreateCommunity = () => {
    navigate("/communities/new");
  };

  // filter logic
  const filtered =
    selectedCategory === "All"
      ? communities
      : communities.filter((c) => c.category === selectedCategory);

  return (
    <div className="eco-static-bg min-h-screen text-green-900">
      <div className="relative h-41 w-full overflow-hidden" ref={headerRef}>
        <div className="absolute inset-0 flex flex-col justify-center items-center z-20 text-center px-4 -translate-y-10">
          <h1 className="text-4xl mt-46 md:text-5xl font-bold text-white mb-4">
            EcoCommunities
          </h1>
          <p className="text-green-100 text-lg md:text-xl p-2 mb-8">
            Here you can join communities of like-minded people who share your
            environmental goals.
          </p>
        </div>
        <div className="absolute inset-0 z-10" />
      </div>

      {/* Sticky Category Filter */}
      <div
        ref={stickyRef}
        className={`${isSticky
          ? "fixed top-0 left-0 right-0  z-50 eco-static-bg shadow-lg"
          : "relative p-4"
          } transition-all duration-300 ease-in-out`}
      >
        <div className=" max-w-8xl  py-4 lg:px-16 md:px-8  ">
          <section className="flex mb-2 items-center gap-3">
            <button
              onClick={() => scroll("left")}
              className="text-green-100 flex-shrink-0"
            >
              <ChevronLeft size={32} />
            </button>

            {/* Scrollable Categories */}
            <div
              ref={scrollRef}
              className="flex gap-3 overflow-x-auto no-scrollbar  py-2"
            >
              {communityCategories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-full font-semibold whitespace-nowrap transition-all duration-200 flex-shrink-0
                  ${selectedCategory === category
                      ? "bg-lime-300 text-green-900 shadow-[0_4px_0_#65a30d]"
                      : "bg-emerald-400 text-green-900 shadow-[0_4px_0_#047857] hover:bg-emerald-500"
                    }`}
                >
                  {category}
                </button>
              ))}
            </div>

            <button
              onClick={() => scroll("right")}
              className="text-green-100 hover:text-green-900 flex-shrink-0"
            >
              <ChevronRight size={32} />
            </button>
          </section>
        </div>
      </div>

      {/* Community Cards */}
      <div className="grid lg:grid-cols-3 lg:px-24 md:px-16 px-8 md:grid-cols-2 sm-grid-cols-1 gap-6 pb-10">
        {/* Create Community Card */}
        <button
          className="bg-emerald-100 rounded-2xl flex flex-col items-center justify-center hover:-translate-y-2 
               transition-all duration-200 ease-out min-h-80"
          onClick={handleCreateCommunity}
        >
          <Link>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="200"
              height="200"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-square-plus"
            >
              <rect width="18" height="18" x="3" y="3" rx="2" />
              <path d="M8 12h8" />
              <path d="M12 8v8" />
            </svg>
          </Link>
        </button>

        {filtered.map((comm) => (
          <div
            key={comm._id}
            className="bg-emerald-100 shadow-md rounded-lg overflow-hidden hover:shadow-xl hover:-translate-y-2 
               transition-all duration-200 ease-out"
          >

            <img
              src={comm.coverImage}
              alt={`${comm.name} cover`}
              className="w-full h-48 object-cover"
            />
            <Link
              to={`/community/${comm._id}`}
              state={{ community: comm }}>

              <div className="p-5">
                <div>
                  <h2 className="text-xl font-semibold text-green-900">
                    {comm.name}
                  </h2>
                </div>
                <div className="my-2">
                  <p className="text-green-900 overflow-hidden line-clamp-2">
                    {comm.agenda}
                  </p>
                </div>

                <div>
                  <Link
                    to={`/community/${comm._id}`}
                    state={{ community: comm }}
                    className="text-green-900 font-medium hover:underline"
                  >
                    Explore →
                  </Link>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CommunityLanding;
