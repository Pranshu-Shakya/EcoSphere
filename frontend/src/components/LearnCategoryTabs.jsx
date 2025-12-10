import React, { useState, useRef, useContext, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ShopContext } from "../contexts/ShopContext";

const categories = [
  "All",
  "Climate Change",
  "Sustainable Living",
  "Renewable Energy",
  "Food & Diet",
  "Sustainable Fashion",
  "Eco-Friendly Homes",
  "Waste & Recycling",
  "Biodiversity & Nature",
  "DIY Projects",
];

function ArticleFilters({ isSticky }) {
  const { activeTab, setActiveTab } = useContext(ShopContext);
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -200 : 200,
        behavior: "smooth",
      });
    }
  };

  return (
    <div
      className={`${
        isSticky
          ? 'fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-emerald-600 via-green-600 to-lime-500 shadow-lg py-4'
          : 'py-4'
      } w-full flex items-center justify-center gap-2 transition-all duration-300 ease-in-out`}
    >
      {/* Left Arrow */}
      <button
        onClick={() => scroll("left")}
        className="text-green-100 transition flex-shrink-0"
      >
        <ChevronLeft size={28} />
      </button>

      {/* Scrollable Categories */}
      <div
        ref={scrollRef}
        className="flex gap-3 overflow-x-auto no-scrollbar py-2 "
      >
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveTab(category)}
            className={`px-6 py-2 rounded-full font-semibold whitespace-nowrap transition-all duration-200 flex-shrink-0
              ${
                activeTab === category
                  ? "bg-lime-300 text-green-900 shadow-[0_4px_0_#65a30d]"
                  : "bg-emerald-400 text-green-900 shadow-[0_4px_0_#047857] hover:bg-emerald-500"
              }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Right Arrow */}
      <button
        onClick={() => scroll("right")}
        className="text-green-100 transition flex-shrink-0"
      >
        <ChevronRight size={28} />
      </button>
    </div>
  );
}

export default ArticleFilters;
