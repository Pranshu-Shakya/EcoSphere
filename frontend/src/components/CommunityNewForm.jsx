import React, { useState, useContext } from "react";
import { ShopContext } from "../contexts/ShopContext";
import axios from "axios";
import { toast } from "react-toastify";

const CommunityNewForm = () => {
  const { token, backendUrl, navigate, refresh, setRefresh } = useContext(ShopContext);

  const [form, setForm] = useState({
    name: "",
    agenda: "",
    description: "",
    coverImage: "",
    category:""
  });

  const [error, setError] = useState("");

  //function using await, and attaching proper Authorization header
  const postCommunity = async () => {
    try {
      await axios.post(`${backendUrl}/api/communities/new-community`, form,{headers: {token}});

      toast.success("EcoCommunity created");
      return true;
    } catch (err) {
      console.error(err);
      toast.error("EcoCommunity Creation failed");
      return false;
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!form.name || !form.agenda || !form.description) {
      setError("Please fill in all required fields.");
      return;
    }
    if(form.coverImage.trim()==="")
      form.coverImage="https://images.unsplash.com/photo-1716547286289-3e650d7bdf7a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHVuc3BhbHNofGVufDB8fDB8fHww";
    const isCreated = await postCommunity();
    if (isCreated) {
      setRefresh(!refresh);        
      navigate("/communities");     
    }


    setForm({
      name: "",
      agenda: "",
      description: "",
      coverImage: "",
      category:" ",
    });

    setError("");
  };

  return (
    <div className="eco-static-bg p-10">
      <h2 className="text-4xl font-bold text-white text-center mb-4 tracking-wide">
        Start a New EcoCommunity
      </h2>
      <p className="text-green-50 mb-5 text-lg text-center">
        Unite people under a shared environmental mission. Start a community and inspire action.
      </p>

      <div className="max-w-3xl mx-auto p-6 bg-green-50 rounded-lg shadow-md">
        {error && <p className="text-red-500 mb-2">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Community Name"
            className="w-full text-green-900 border-b-1 border-green-800 focus:border-green-600 outline-none py-2"
          />

          <input
            type="text"
            name="agenda"
            value={form.agenda}
            onChange={handleChange}
            placeholder="Community Agenda "
            className="w-full text-green-900 border-b-1 border-green-800 focus:border-green-600 outline-none py-2"
          />

          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            placeholder="Short Description"
            rows={4}
            className="w-full text-green-900 border-b-1 border-green-800 focus:border-green-600 outline-none py-2"
          />

          <input
            type="text"
            name="coverImage"
            value={form.coverImage}
            onChange={handleChange}
            placeholder="Cover Image URL (optional)"
            className="w-full text-green-900 border-b-1 border-green-800 focus:border-green-600 outline-none py-2"
          />

          <div className="flex flex-wrap gap-4">
            <select
              name="category"
              value={form.category}
              onChange={handleChange}
              className="w-full text-green-900 border-b border-green-800 focus:border-green-600 outline-none py-2"
            >
              <option value="All">Others</option>
              <option value="Environment">Environment</option>
              <option value="Energy">Energy</option>
              <option value="Waste Management">Waste Management</option>
              <option value="Sustainability">Sustainability</option>
              <option value="Lifestyle">Lifestyle</option>
              <option value="Food & Agriculture">Food & Agriculture</option>
              <option value="Water Resources">Water Resources</option>
              <option value="Technology & Innovation">Technology & Innovation</option>
              <option value="Health & Wellness">Health & Wellness</option>
              <option value="Community Development">Community Development</option>
              <option value="Education & Awareness">Education & Awareness</option>
              <option value="Biodiversity">Biodiversity</option>
              <option value="Policy & Governance">Policy & Governance</option>
            </select>
          </div>

          <button
            type="submit"
            className="bg-emerald-400 text-green-900 font-semibold px-6 py-2 rounded-full shadow-[0_4px_0_#047857] hover:translate-y-[1px] hover:shadow-[0_2px_0_#047857] active:translate-y-[2px] active:shadow-none transition-all duration-150"
            onClick={()=>{handleSubmit()}}
          >
            Create Community
          </button>
        </form>
      </div>
    </div>
  );
};

export default CommunityNewForm;
