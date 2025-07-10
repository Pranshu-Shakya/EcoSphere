import React, { useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';

function LearnArticleInDetail() {
  const { id } = useParams();
  const location = useLocation();
  const articles = location.state?.articles || [];

  const article = articles[parseInt(id)];

  // Like state
  const [likes, setLikes] = useState(0);
  const [liked, setLiked] = useState(false);

  // Like handler
  const handleLike = () => {
    if (liked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setLiked(!liked);
  };

  if (!article) {
    return (
      <div className="text-center text-red-500 p-6">
        Article not found.
      </div>
    );
  }

  return (
    <div className='eco-static-bg'>
      <div className="max-w-3xl mx-auto p-6">
        <div className="bg-green-50 shadow-lg rounded-lg overflow-hidden">
          <img
            src={article.coverImage}
            alt={article.title}
            className="w-full h-64 object-cover"
          />
          <div className="p-6">
            <h1 className="text-3xl font-bold text-green-800 mb-2">{article.title}</h1>
            <div className="flex justify-between text-sm text-green-900 mb-4">
              <span>By {article.author}</span>
              <span>{new Date(article.createdAt).toLocaleDateString()}</span>
            </div>

        
            <div className="mb-4 flex items-center gap-2">
              <button
                onClick={handleLike}
                className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-200 ${
                  liked ? 'bg-green-800 text-green-100' : 'bg-green-200 text-green-800'
                }`}
              >
                {liked ? 'Liked' : 'Like'}
              </button>
              <span className="text-green-800 text-sm">{likes} {likes === 1 ? 'like' : 'likes'}</span>
            </div>

            <p className="text-green-900 text-base leading-relaxed">{article.content}</p>

            <div className="mt-4 flex flex-wrap gap-2">
              {article.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="bg-green-200 text-green-800 px-2 py-1 rounded-full text-xs"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LearnArticleInDetail;
