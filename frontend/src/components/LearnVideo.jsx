import React from 'react';

function LearnVideo() {
  const videos = [
    
  {
    title: "What is a Carbon Footprint?",
    description: "A simple explanation of what carbon footprints are and why they matter.",
    category: "Carbon Basics",
    tags: ["carbon", "footprint", "environment"],
    author: "Sustainable Human",
    type: "Video",
    thumbnail: "https://img.youtube.com/vi/8q7_aV8eLUE/hqdefault.jpg",
    url: "https://www.youtube.com/embed/8q7_aV8eLUE",
    createdAt: new Date("2024-11-02"),
  },
  {
    title: "Zero Waste Lifestyle Explained",
    description: "A beginner-friendly guide to start your zero waste journey.",
    category: "Zero Waste",
    tags: ["zero waste", "plastic free", "eco tips"],
    author: "Our Changing Climate",
    type: "Video",
    thumbnail: "https://img.youtube.com/vi/7UM73CEvwMY/hqdefault.jpg",
    url: "https://www.youtube.com/embed/7UM73CEvwMY",
    createdAt: new Date("2024-10-15"),
  },
  {
    title: "5 DIY Reuse Projects",
    description: "Creative and practical DIY ideas using common household waste.",
    category: "DIY Reuse Projects",
    tags: ["diy", "reuse", "recycle"],
    author: "BuzzFeed Nifty",
    type: "Video",
    thumbnail: "https://img.youtube.com/vi/qBb3T_KZNwQ/hqdefault.jpg",
    url: "https://www.youtube.com/embed/qBb3T_KZNwQ",
    createdAt: new Date("2024-09-28"),
  },
  {
    title: "Green Technology: The Future of Sustainability",
    description: "How technology is helping us build a greener planet.",
    category: "Green Tech",
    tags: ["tech", "green", "future"],
    author: "TED-Ed",
    type: "Video",
    thumbnail: "https://img.youtube.com/vi/Ev46o-ARz6k/hqdefault.jpg",
    url: "https://www.youtube.com/embed/Ev46o-ARz6k",
    createdAt: new Date("2024-08-12"),
  },
  {
    title: "Urban Gardening Tips for Beginners",
    description: "Grow your own food at home, even without a backyard!",
    category: "DIY Reuse Projects",
    tags: ["gardening", "urban", "sustainable living"],
    author: "Garden Up",
    type: "Video",
    thumbnail: "https://img.youtube.com/vi/WaRI0wG9kqU/hqdefault.jpg",
    url: "https://www.youtube.com/embed/WaRI0wG9kqU",
    createdAt: new Date("2024-07-01"),
  }
,
    {
      title: "How to Compost at Home",
      description: "Learn practical composting techniques for apartment and home gardens.",
      videoUrl: "https://www.youtube.com/embed/9GorqroigqM",
      category: "Intermediate",
      tags: ["compost", "gardening", "zero waste"],
      author: "Priya Singh",
      createdAt: new Date("2024-09-12"),
    },
    {
      title: "Carbon Footprint Explained Visually",
      description: "An animated guide to understanding carbon emissions and their global impact.",
      videoUrl: "https://www.youtube.com/embed/8q7_aV8eLUE",
      category: "All",
      tags: ["carbon", "climate change", "science"],
      author: "GreenPulse Edu",
      createdAt: new Date("2024-11-01"),
    },
    {
    title: "What is a Carbon Footprint?",
    description: "A simple explanation of what carbon footprints are and why they matter.",
    category: "Carbon Basics",
    tags: ["carbon", "footprint", "environment"],
    author: "EcoSphere Media",
    type: "Video",
    thumbnail: "/images/video-thumbs/carbon-footprint.jpg",
    url: "https://www.youtube.com/embed/kHp5u3MdKMI",
    createdAt: new Date("2024-11-02"),
  },
  {
    title: "How to Start a Zero-Waste Lifestyle",
    description: "Begin your zero-waste journey with these simple yet powerful tips.",
    category: "Zero Waste",
    tags: ["zero waste", "plastic free", "sustainability"],
    author: "GreenLiving",
    type: "Video",
    thumbnail: "/images/video-thumbs/zero-waste.jpg",
    url: "https://www.youtube.com/embed/YFz5S6FdiKk",
    createdAt: new Date("2024-10-15"),
  },
  {
    title: "5 DIY Projects to Reuse Household Waste",
    description: "Turn everyday waste into useful items with these fun DIY ideas.",
    category: "DIY Reuse Projects",
    tags: ["reuse", "diy", "recycle"],
    author: "EcoCraft",
    type: "Video",
    thumbnail: "/images/video-thumbs/diy-reuse.jpg",
    url: "https://www.youtube.com/embed/bhYw9JnA37E",
    createdAt: new Date("2024-09-28"),
  },
  {
    title: "Green Technology in Daily Life",
    description: "Learn how green tech is transforming homes, cities, and our future.",
    category: "Green Tech",
    tags: ["tech", "innovation", "eco-friendly"],
    author: "FutureEarth",
    type: "Video",
    thumbnail: "/images/video-thumbs/green-tech.jpg",
    url: "https://www.youtube.com/embed/V1BFLitBkco",
    createdAt: new Date("2024-08-12"),
  },
  {
    title: "Urban Gardening Tips in 3 Minutes",
    description: "No backyard? No problem. Use your balcony or kitchen to grow your greens.",
    category: "DIY Reuse Projects",
    tags: ["gardening", "balcony", "urban"],
    author: "GrowMore",
    type: "Video",
    thumbnail: "/images/video-thumbs/urban-garden.jpg",
    url: "https://www.youtube.com/embed/8U5h-sntYPw",
    createdAt: new Date("2024-07-01"),
  }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {videos.map((video, index) => (
        <div
          key={index}
          className="bg-green-100 shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300"
        >
          <div className="relative w-full h-56">
            <iframe
              className="w-full h-full"
              src={video.videoUrl}
              title={video.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          <div className="p-4">
            <div className="flex justify-between items-center text-sm text-green-800 mb-2">
              <span className="uppercase">{video.category}</span>
              <span>{new Date(video.createdAt).toLocaleDateString()}</span>
            </div>

            <h3 className="text-lg font-semibold text-gray-800 mb-1">
              {video.title}
            </h3>

            <p className="text-green-1000 text-sm mb-3 line-clamp-3">
              {video.description}
            </p>

            <div className="flex flex-wrap gap-2 text-xs">
              {video.tags.map((tag, i) => (
                <span
                  key={i}
                  className="px-2 py-1 bg-green-800 text-green-100 rounded-full"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default LearnVideo;
