import React from 'react';
// import photo1 from '../assets/'
import { FaPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function LearnArticle() {
  const articles = [
    {
      title: "10 Easy Ways to Reduce Your Plastic Usage",
      summary: "Learn simple and practical tips to minimize plastic use in your daily life and contribute to a healthier planet.",
      content: "Sustainable living ka arth hai aisi jeevan shailee apnaana jo prakritik sansadhanon ka samuchit upyog kare aur paryavaran par kam se kam prabhav dale. Aaj ke samay mein jab climate change, pradushan, aur prakritik sansadhanon ki kami jaise samasyaayein badhti ja rahi hain, to har vyakti ka yogdan atyavashyak ho gaya hai. Iske liye humein apne rozmarra ke faislon mein kuch saadhan-vichar laane honge. Hum kam vastu kharidein, unn vastuon ko chunen jo long-lasting aur eco-friendly hoon, aur plastic ka istemal kam karein. Plant-based aur local food lena bhi ek acha kadam hai. Reusable items jaise bottles aur bags ka upyog plastic ke viakalp ke roop mein karna chahiye. Ghar ke liye LED bulbs aur energy-efficient machines chuniye, aur pani bachane ke liye low-flow devices lagaiye. Transport mein cycle, walk, aur public transport ka upyog karke emissions ghatayein. Sustainable tech jaise solar panels aur biodegradable packaging bhi is raaste ko aasan banate hain. Aise jeevan se na keval dharti surakshit hoti hai, balki vyakti ki health aur budget dono behtar hota hai. Jab hum ethical aur local shopping karte hain, to samudaay bhi majboot hota hai. Zaroori hai ki hum har chhoti chhoti chizon par dhyan dein — kya mujhe yah vastu sach mein chahiye, kya isse behtar vikalp hai, aur iska prabhav kya hoga. Global campaigns jaise UN ke SDGs aur carbon neutrality bhi isi disha mein kaam kar rahe hain. Har chhoti koshish maayane rakhti hai. Perfect hone ki zarurat nahi, lekin lagataar aur imaandaar koshish zaroori hai. Aaj agar har vyakti chhoti shuruaat kare, to kal ek hara-bhara, swachh aur surakshit bhavishya tay ho sakta hai.",
      category: "Beginner",
      tags: ["plastic", "sustainability", "eco-friendly"],
      type: "Article",
      author: "GreenPulse Team",
      coverImage: "https://images.pexels.com/photos/1544420/pexels-photo-1544420.jpeg",
      createdAt: new Date("2024-11-10"),
    },
    {
      title: "Understanding Carbon Footprints",
      summary: "A beginner's guide to what carbon footprints are...",
      content: "Carbon footprints measure the total greenhouse gases...",
      category: "Beginner",
      tags: ["carbon", "climate", "greenhouse gases"],
      type: "Article",
      author: "Dr. Anjali Mehta",
      coverImage: "https://images.pexels.com/photos/1542937/pexels-photo-1542937.jpeg",
      createdAt: new Date("2024-10-01"),
    },
    {
      title: "Zero Waste Lifestyle: A Realistic Guide",
      summary: "Going zero waste doesn't have to be extreme...",
      content: "This guide walks you through real-life steps...",
      category: "Advanced",
      tags: ["zero waste", "lifestyle", "urban eco"],
      type: "Article",
      author: "Priya Singh",
      coverImage: "https://images.pexels.com/photos/1089454/pexels-photo-1089454.jpeg",
      createdAt: new Date("2024-09-15"),
    },
    {
      title: "The Truth About Fast Fashion",
      summary: "Explore how the fashion industry contributes to environmental damage...",
      content: "Fast fashion relies on cheap materials and labor...",
      category: "Beginner",
      tags: ["fashion", "waste", "consumerism"],
      type: "Article",
      author: "EcoSphere Editorial",
      coverImage: "https://images.pexels.com/photos/370474/pexels-photo-370474.jpeg",
      createdAt: new Date("2024-08-21"),
    },
    {
      title: "Urban Gardening Tips for Small Spaces",
      summary: "No backyard? No problem...",
      content: "From vertical gardens to container pots...",
      category: "Intermediate",
      tags: ["gardening", "urban", "self-sufficiency"],
      type: "Article",
      author: "Rohan Verma",
      coverImage: "https://images.pexels.com/photos/1151418/pexels-photo-1151418.jpeg",
      createdAt: new Date("2024-07-10"),
    },
    {
      title: "Urban Gardening Tips for Small Spaces",
      summary: "No backyard? No problem...",
      content: "From vertical gardens to container pots...",
      category: "Intermediate",
      tags: ["gardening", "urban", "self-sufficiency"],
      type: "Article",
      author: "Rohan Verma",
      coverImage: "https://images.pexels.com/photos/1151418/pexels-photo-1151418.jpeg",
      createdAt: new Date("2024-07-10"),
    },
    {
      title: "Urban Gardening Tips for Small Spaces",
      summary: "No backyard? No problem...",
      content: "From vertical gardens to container pots...",
      category: "Intermediate",
      tags: ["gardening", "urban", "self-sufficiency"],
      type: "Article",
      author: "Rohan Verma",
      coverImage: "https://images.pexels.com/photos/1151418/pexels-photo-1151418.jpeg",
      createdAt: new Date("2024-07-10"),
    }, {
      title: "Zero Waste Lifestyle: A Realistic Guide",
      summary: "Going zero waste doesn't have to be extreme...",
      content: "This guide walks you through real-life steps...",
      category: "Advanced",
      tags: ["zero waste", "lifestyle", "urban eco"],
      type: "Article",
      author: "Priya Singh",
      coverImage: "https://images.pexels.com/photos/1089454/pexels-photo-1089454.jpeg",
      createdAt: new Date("2024-09-15"),
    },
    {
      title: "10 Easy Ways to Reduce Your Plastic Usage",
      summary: "Learn simple and practical tips to minimize plastic use in your daily life and contribute to a healthier planet.",
      content: "Reducing plastic use starts with small changes like carrying reusable bags...",
      category: "Beginner",
      tags: ["plastic", "sustainability", "eco-friendly"],
      type: "Article",
      author: "GreenPulse Team",
      coverImage: "https://images.pexels.com/photos/1544420/pexels-photo-1544420.jpeg",
      createdAt: new Date("2024-11-10"),
    },
  ];

  return (
    <div className="grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {articles.map((article, index) => (
        <div

          key={index}
          className="bg-emerald-100 shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300"
        >
          <img
            src={article.coverImage}
            alt={article.title}
            className="w-full h-48 object-cover"
          />

          <div className="p-5">
            <div className="flex justify-between items-center mb-2 text-sm text-gray-400">
              <span className="uppercase text-green-800">{article.category}</span>
              <span className="uppercase text-green-800">{new Date(article.createdAt).toLocaleDateString()}</span>
            </div>

            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {article.title}
            </h3>

            <p className="text-green-1000 text-sm mb-4 line-clamp-3">
              {article.summary}
            </p>

            <div className="flex flex-wrap gap-2 text-xs mb-4">
              {article.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-2 py-1 text-center bg-green-800 text-green-100 rounded-full"
                >
                  #{tag}
                </span>
              ))}
            </div>

            <Link
              to={`/learn/article/${index}`}
              state={{ articles }}
              className="inline-block mt-2 text-green-800 hover:underline font-medium text-sm"
            >
              Read More →
            </Link>

          </div>
        </div>
      ))}
    </div>
  );
}

export default LearnArticle;
