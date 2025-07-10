import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const categories = [
  'Tree Plantation',
  'Waste Management',
  'Sustainable Living',
  'Awareness Drives',
  'Community Cleanups',
  'Workshops',
];

const statuses = ['Active', 'Upcoming', 'Completed'];

const CreateInitiative = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    image: '',
    description: '',
    category: '',
    location: '',
    status: '',
  });

  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted Initiative:', formData);
    alert('Initiative Created Successfully!');
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-green-900 py-10 px-4 flex justify-center items-center">
      <form 
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-lg p-8 w-3/4 space-y-6 mx-auto"
      >
        <h2 className="text-2xl font-bold text-green-800">Launch Your Green Initiative 🌱</h2>

        <div>
          <label className="block text-green-700 font-medium">Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            className="w-full mt-1 border border-green-300 rounded px-3 py-2"
          />
        </div>

        <div>
          <label className="block text-green-700 font-medium">Image URL</label>
          <input
            type="text"
            name="image"
            value={formData.image}
            onChange={handleChange}
            required
            placeholder="https://example.com/image.jpg"
            className="w-full mt-1 border border-green-300 rounded px-3 py-2"
          />
        </div>

        <div>
          <label className="block text-green-700 font-medium">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            className="w-full mt-1 border border-green-300 rounded px-3 py-2 h-24"
          ></textarea>
        </div>

        <div>
          <label className="block text-green-700 font-medium">Category</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
            className="w-full mt-1 border border-green-300 rounded px-3 py-2 bg-white"
          >
            <option value="">Select Category</option>
            {categories.map((cat, i) => (
              <option key={i} value={cat}>{cat}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-green-700 font-medium">Location</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
            className="w-full mt-1 border border-green-300 rounded px-3 py-2"
          />
        </div>

        <div>
          <label className="block text-green-700 font-medium">Status</label>
          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            required
            className="w-full mt-1 border border-green-300 rounded px-3 py-2 bg-white"
          >
            <option value="">Select Status</option>
            {statuses.map((status, i) => (
              <option key={i} value={status}>{status}</option>
            ))}
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-green-600 text-white font-semibold py-2 rounded hover:bg-green-700 transition"
        >
          Submit Initiative
        </button>
      </form>
    </div>
  );
};

export default CreateInitiative;
