import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const categories = [
  'All',
  'Tree Plantation',
  'Waste Management',
  'Sustainable Living',
  'Awareness Drives',
  'Community Cleanups',
  'Workshops',
];

const featured = [
  {
    title: 'Green Roots: Tree Plantation Drive',
    image: 'https://www.aces.edu/wp-content/uploads/2019/03/GettyImages-1096104376.jpg',
    description: 'Join our mission to plant 1000 trees across urban zones.',
    category: 'Tree Plantation',
  },
  {
    title: 'Zero-Waste Week Challenge',
    image: 'https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?q=80&w=1170&auto=format&fit=crop',
    description: 'Live a week without generating waste. Are you in?',
    category: 'Waste Management',
  },
  {
    title: 'Eco Talks in Schools',
    image: 'https://hindustanuniv.ac.in/assets/img/events/2023/jan/road-safety-awareness3.jpg',
    description: 'Spreading awareness through education in rural schools.',
    category: 'Awareness Drives',
  },
];

const images = [
  'https://images.unsplash.com/photo-1638560926839-cb90ababd947?q=80&w=2070&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1679580447808-b5b6911aacea?q=80&w=1170&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1591184510259-b6f1be3d7aff?q=80&w=1170&auto=format&fit=crop',
];

const Initiatives = () => {
  const [current, setCurrent] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    const slide = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(slide);
  }, []);

  const filteredInitiatives =
    selectedCategory === 'All'
      ? featured
      : featured.filter((item) => item.category === selectedCategory);

  return (
    <div className="eco-static-bg text-green-900 min-h-screen scroll-smooth">
      {/* Header Section with Slider */}
      <section className="relative h-[70vh] flex items-center justify-center text-center bg-green-50 overflow-hidden">
        {/* Image Slider */}
        <div className="absolute inset-0 z-0">
          {images.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`Slide ${i}`}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                i === current ? 'opacity-80' : 'opacity-0'
              }`}
            />
          ))}
        </div>

        {/* Content on top */}
        <div className="relative z-10 px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-green-900 mb-4">Our Initiatives for a Greener Future</h1>
          <p className="mt-4 text-green-900 font-semibold max-w-2xl mx-auto">
            Explore environmental campaigns and projects making real change — join, support, or create your own.
          </p>
          <div className="mt-6 flex flex-col md:flex-row justify-center gap-4">
            <Link
              style={{ fontFamily: 'Raleway, sans-serif' }}
              to="/initiatives/form-page"
              className="bg-lime-300 text-emerald-1000 font-semibold px-6 py-2 rounded-full shadow-[0_4px_0_#65a30d] hover:translate-y-[1px] hover:shadow-[0_2px_0_#65a30d] active:translate-y-[2px] active:shadow-none transition-all duration-150"
            >
              + Create Initiative
            </Link>

            <a
              href="#initiatives"
              style={{ fontFamily: 'Raleway, sans-serif' }}
              className="bg-lime-300 text-green-900 font-semibold px-6 py-2 rounded-full shadow-[0_4px_0_#65a30d] hover:translate-y-[1px] hover:shadow-[0_2px_0_#65a30d] active:translate-y-[2px] active:shadow-none transition-all duration-150"
            >
              Explore All Initiatives
            </a>
          </div>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="eco-static-bg py-6 px-4 border border-green-100">
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((cat, i) => (
            <button
              key={i}
              className={
                selectedCategory === cat
                  ? 'bg-lime-300 text-emerald-1000 font-semibold px-6 py-2 rounded-full shadow-[0_4px_0_#65a30d] hover:translate-y-[1px] hover:shadow-[0_2px_0_#65a30d] active:translate-y-[2px] active:shadow-none transition-all duration-150 '
                  : 'bg-emerald-400 text-emerald-1000 font-semibold px-6 py-2 rounded-full shadow-[0_4px_0_#047857] hover:translate-y-[1px] hover:shadow-[0_2px_0_#047857] active:translate-y-[2px] active:shadow-none transition-all duration-150'
              }
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* All Initiatives Grid */}
      <section id="initiatives" className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-green-100 mb-6">
          {selectedCategory === 'All' ? 'All Initiatives' : `${selectedCategory} Initiatives`}
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {filteredInitiatives.map((item, i) => (
            <div key={i} className="bg-emerald-100 shadow-md rounded-md p-4 space-y-3">
              <img
                src={item.image}
                alt="Initiative"
                className="w-full h-40 object-cover rounded"
              />
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-sm text-green-1000">Location: India | Status: Active</p>
              <span className="inline-block bg-green-800 text-green-100 px-2 py-1 text-xs rounded">
                {item.category}
              </span>
              <button className="block text-green-800 font-medium hover:underline">Join</button>
            </div>
          ))}
        </div>

        {filteredInitiatives.length === 0 && (
          <p className="text-center text-green-100 mt-4">No initiatives found in this category.</p>
        )}
      </section>
    </div>
  );
};

export default Initiatives;
