import axios from 'axios';
import React, { useEffect, useState, useContext } from 'react';

import { Link } from 'react-router-dom';
import { ShopContext } from '../contexts/ShopContext';
import { toast } from 'react-toastify';

function LearnArticle({ isVideo }) {
  const { backendUrl, refresh, articles, setArticles, activeTab, setActiveTab } = useContext(ShopContext);


  // function to fetch all articles
  const fetchArticles = () => {

    axios.get(`${backendUrl}/api/learn/all-articles`).then((res) => {
      setArticles(res.data.allArticles);
      console.log(res.data.allArticles);
    }).catch((err) => {
      toast.error("Article server error");
    });

  }

  // re-rendering on refresh or adding new article
  useEffect(() => {
    fetchArticles();
  }

    , [refresh, backendUrl]);

        // <div className="max-w-8xl  ">


  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6   py-4 lg:px-16 md:px-8">
      <Link className="bg-emerald-100 shadow-md rounded-lg overflow-hidden hover:shadow-xl hover:-translate-y-2 p-20
               transition-all duration-200 ease-out
               text-green-900 text-center flex items-center justify-center" to={isVideo ? "/learn/video/new" : "/learn/article/new"}>

        <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-square-plus-icon lucide-square-plus"><rect width="18" height="18" x="3" y="3" rx="2" /><path d="M8 12h8" /><path d="M12 8v8" /></svg>

      </Link>
      {articles
        .filter((article) => activeTab === "All" ? true : article.category == activeTab)

        .map((article) => (
          <div

            key={article._id}
            className="bg-emerald-100 shadow-md rounded-lg overflow-hidden hover:shadow-xl hover:-translate-y-2 
               transition-all duration-200 ease-out"
          >
            <img
              src={article.coverImage}
              alt={article.title}
              className="w-full h-48 object-cover"
            />
            <Link
              to={`/learn/article/${article._id}`}
              state={{ articles }}
            >
              <div className="p-5">
                <div className="flex justify-between items-center mb-2 text-sm text-gray-400">
                  <span className="  uppercase text-green-900">{article.author?.name || "Unknown"} </span>
                  <span className="uppercase text-green-900">{new Date(article.createdAt).toLocaleDateString()}</span>
                </div>

                <h3 className="text-xl text-start font-semibold text-green-900 mb-2">
                  {article.title}
                </h3>

                <p className="text-green-900 text-start text-sm mb-4 line-clamp-3">
                  {article.summary}
                </p>



                <Link
                  to={`/learn/article/${article._id}`}
                  state={{ articles }}
                  className="text-green-900 flex font-medium hover:underline"
                >
                  Read More →
                </Link>


              </div>
            </Link>
          </div>
        ))}

    </div>
  );
}

export default LearnArticle;
