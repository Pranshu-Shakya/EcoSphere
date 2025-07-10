import React from 'react';
import { FaLeaf } from 'react-icons/fa';

function LearnVideoCreate() {
  return (
    <div className="flex flex-col items-center justify-center h-[70vh] text-center eco-static-bg text-green-100  p-8  ">
      <FaLeaf className="text-4xl mb-4 text-green-100 animate-bounce" />
      <h1 className="text-3xl font-bold mb-2">EcoVideos Coming Soon </h1>
      <p className="text-green-100 max-w-md">
        We’re working on exciting new content to help you learn about sustainability through interactive videos. Stay tuned and keep exploring!
      </p>
    </div>
  );
}

export default LearnVideoCreate;
