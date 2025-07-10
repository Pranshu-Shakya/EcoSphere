import React, { useState } from "react";

const CommunityPostForm = ({ onCreate }) => {
  const [form, setForm] = useState({
    title: "",
    content: "",
    author: "",
    tag: "General",
    image: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.title || !form.content || !form.author) {
      setError("Title, Content, and Author are required.");
      return;
    }

    const newPost = {
      id: Date.now(),
      ...form,
      time: "Just now",
      likes: 0,
      comments: [],
    };

    if (onCreate) onCreate(newPost);

    setForm({
      title: "",
      content: "",
      author: "",
      tag: "General",
      image: "",
    });

    setError("");
  };

  return (
    <div className="eco-static-bg p-10">
      <h2 className="text-4xl font-bold text-white text-center mb-4 tracking-wide">
        Grow Green Conversations
      </h2>
      <p className="text-green-50 mb-5 text-lg text-center">
        Share your actions, thoughts, or tips with the community and inspire others to live sustainably.
      </p>

      <div className="max-w-3xl mx-auto p-6 bg-green-50 rounded-lg shadow-md">
        {error && <p className="text-red-500 mb-2">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            type="text"
            name="title"
            value={form.title}
            onChange={handleChange}
            placeholder="Title *"
            className="w-full text-green-900 border-b-1 border-green-800 focus:border-green-600 outline-none py-2"
          />

          <textarea
            name="content"
            value={form.content}
            onChange={handleChange}
            placeholder="What's on your mind? *"
            rows={5}
            className="w-full text-green-900 border-b-1 border-green-800 focus:border-green-600 outline-none py-2"
          />

          <input
            type="text"
            name="author"
            value={form.author}
            onChange={handleChange}
            placeholder="Your Name *"
            className="w-full text-green-900 border-b-1 border-green-800 focus:border-green-600 outline-none py-2"
          />

          <input
            type="text"
            name="image"
            value={form.image}
            onChange={handleChange}
            placeholder="Cover Image URL"
            className="w-full text-green-900 border-b-1 border-green-800 focus:border-green-600 outline-none py-2"
          />

          <select
            name="tag"
            value={form.tag}
            onChange={handleChange}
            className="w-full text-green-900 border-b-1 border-green-800 focus:border-green-600 outline-none py-2"
          >
            <option value="General">General</option>
            <option value="Gardening">Gardening</option>
            <option value="Waste">Waste</option>
            <option value="Air">Air</option>
            <option value="Energy">Energy</option>
            <option value="Water">Water</option>
          </select>

          <button
            type="submit"
            className="bg-emerald-400 text-green-900 font-semibold px-6 py-2 rounded-full shadow-[0_4px_0_#047857] hover:translate-y-[1px] hover:shadow-[0_2px_0_#047857] active:translate-y-[2px] active:shadow-none transition-all duration-150"
          >
            Post
          </button>
        </form>
      </div>
    </div>
  );
};

export default CommunityPostForm;
