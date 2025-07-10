import { useState } from "react";
import { Link } from "react-router-dom";

const faqs = [
  {
    question: "How do I join a community?",
    answer: "Go to the Communities page and click 'Join' next to the community you're interested in.",
  },
  {
    question: "What is the EcoScore?",
    answer: "EcoScore is a rating based on your sustainable actions tracked through EcoSphere tools.",
  },
  {
    question: "How do I track my carbon footprint?",
    answer: "Use the Carbon Tracker tool under the Learn section to log daily activities and get estimates.",
  },
  {
    question: "How do I reset my password?",
    answer: "Go to Login > Forgot Password and follow the instructions.",
  },
  {
    question: "Can I sell handmade eco-products?",
    answer: "Yes, visit the EcoShop page and register as a seller.",
  },
  {
    question: "How to delete my account?",
    answer: "Send a request through the support form at the bottom with the subject 'Account Deletion'.",
  },
];

function Support() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const helpTopics = [
    {
      title: "Getting Started",
      desc: "Setup your profile and begin your journey",
      icon: (
        <svg className="w-6 h-6 text-lime-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.83892 12.4543s1.24988-3.08822-.21626-5.29004C8.15656 4.96245 4.58671 4.10885 4.39794 4.2436c-.18877.13476-1.11807 3.32546.34803 5.52727 1.4661 2.20183 5.09295 2.68343 5.09295 2.68343Zm0 0C10.3389 13.4543 12 15 12 18v2c0-2-.4304-3.4188 2.0696-5.9188m0 0s-.4894-2.7888 1.1206-4.35788c1.6101-1.56907 4.4903-1.54682 4.6701-1.28428.1798.26254.4317 2.84376-1.0809 4.31786-1.61 1.5691-4.7098 1.3243-4.7098 1.3243Z" />
        </svg>
      ),
      navigate: "/",
    },
    {
      title: "Communities",
      desc: "Explore and join like-minded eco-groups",
      icon: (
        <svg className="w-6 h-6 text-lime-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 0 0-5.356-1.857M10 20v-2a3 3 0 0 0-5.356-1.857M5 8h.01M19 8h.01M11.8 16a6 6 0 1 0-3.6 0h3.6Z" />
        </svg>
      ),
      navigate: "/communities",
    },
    {
      title: "Learn & Grow",
      desc: "Browse educational content on sustainability",
      icon: (
        <svg className="w-6 h-6 text-lime-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.78552 9.5 12.7855 14l9-4.5-9-4.5-8.99998 4.5Zm0 0V17m3-6v6.2222c0 .3483 2 1.7778 5.99998 1.7778 4 0 6-1.3738 6-1.7778V11" />
        </svg>
      ),
      navigate: "/learn",
    },
    {
      title: "Using the Carbon Tracker",
      desc: "Learn how to log your emissions and track EcoScore",
      icon: (
        <svg className="w-6 h-6 text-lime-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M6 4v10m0 0a2 2 0 1 0 0 4m0-4a2 2 0 1 1 0 4m0 0v2m6-16v2m0 0a2 2 0 1 0 0 4m0-4a2 2 0 1 1 0 4m0 0v10m6-16v10m0 0a2 2 0 1 0 0 4m0-4a2 2 0 1 1 0 4m0 0v2" />
        </svg>
      ),
      navigate: "/calculator",
    },
    {
      title: "EcoShop Help",
      desc: "How to buy and sell eco-products",
      icon: (
        <svg className="w-6 h-6 text-lime-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7H5a2 2 0 0 0-2 2v4m5-6h8M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2m0 0h3a2 2 0 0 1 2 2v4m0 0v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-6m18 0s-4 2-9 2-9-2-9-2m9-2h.01" />
        </svg>
      ),
      navigate: "/eco-shop",
    },
    {
      title: "Join Initiatives",
      desc: "Be a part of the green community",
      icon: (
        <svg className="w-6 h-6 text-lime-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" strokeLinecap="square" strokeLinejoin="round" strokeWidth="2" d="M10 19H5a1 1 0 0 1-1-1v-1a3 3 0 0 1 3-3h2m10 1a3 3 0 0 1-3 3m3-3a3 3 0 0 0-3-3m3 3h1m-4 3a3 3 0 0 1-3-3m3 3v1m-3-4a3 3 0 0 1 3-3m-3 3h-1m4-3v-1m-2.121 1.879-.707-.707m5.656 5.656-.707-.707m-4.242 0-.707.707m5.656-5.656-.707.707M12 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
        </svg>
      ),
      navigate: "/initiatives",
    },
  ];

  return (
    <div className="eco-static-bg text-white">
      <section className="py-10 text-center px-4">
        <h1 className="text-4xl font-bold text-white mb-2">How can we help you?</h1>
        <p className="text-lg text-green-100 mb-6">Get quick help on common issues or contact our team.</p>
      </section>

      <section className="max-w-4xl mx-auto py-12 px-4 bg-black rounded-lg">
        <h2 className="text-2xl font-semibold mb-6 text-white">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border border-lime-700 rounded-md">
              <button
                onClick={() => toggleFAQ(idx)}
                className="w-full text-left px-4 py-3 hover:bg-lime-950 focus:outline-none transition"
              >
                <span className="font-medium text-lg text-white">{faq.question}</span>
              </button>
              {activeIndex === idx && (
                <div className="px-4 py-3">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="py-12 px-4">
        <h2 className="text-2xl font-semibold text-lime-300 text-center mb-10">
          Help Topics & Guides
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {helpTopics.map((card, i) => (
            <div
              key={i}
              className="border border-lime-700 p-6 rounded-xl shadow-lg hover:shadow-4xl transition duration-200"
            >
              <div className="mb-3">{card.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-white">{card.title}</h3>
              <p className="text-green-100">{card.desc}</p>
              <Link
                to={card.navigate}
                className="mt-2 inline-block hover:underline text-lime-300"
              >
                Learn More →
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Support;
