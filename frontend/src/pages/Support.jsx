import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Rocket,
  Users,
  GraduationCap,
  TrendingUp,
  ShoppingBag,
  Handshake,
} from "lucide-react";

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
  const [x,setx]=useState(0);

  useEffect(()=>{//if the faqs incrwses or are fetched 
    setx(faqs.length)
  },[faqs])

  const [activeIndex, setActiveIndex] = useState(() => Array(x).fill(null));// array of statevar of faqs

  const toggleFAQ = (index) => {
    setActiveIndex((prev)=>{
      const next=[...prev];
      next[index]=!next[index];
      return next;
    });
  };

  const helpTopics = [
    {
      title: "Getting Started",
      desc: "Setup your profile and begin your journey",
      icon: <Rocket className="w-6 h-6 text-white" />,
      navigate: "/getting-started",
    },
    {
      title: "Communities",
      desc: "Explore and join like-minded eco-groups",
      icon: <Users className="w-6 h-6 text-white" />,
      navigate: "/community",
    },
    {
      title: "Learn & Grow",
      desc: "Browse educational content on sustainability",
      icon: <GraduationCap className="w-6 h-6 text-white" />,
      navigate: "/learn-grow",
    },
    {
      title: "Using the Carbon Tracker",
      desc: "Learn how to log your emissions and track EcoScore",
      icon: <TrendingUp className="w-6 h-6 text-white" />,
      navigate: "/carbon-tracker",
    },
    {
      title: "EcoShop Help",
      desc: "How to buy and sell eco-products",
      icon: <ShoppingBag className="w-6 h-6 text-white" />,
      navigate: "/eco",
    },
    {
      title: "Join Initiatives",
      desc: "Be a part of the green community",
      icon: <Handshake className="w-6 h-6 text-white" />,
      navigate: "/initiate",
    },
  ];

  return (
    <div className="eco-static-bg text-white min-h-screen">
      <section className="py-10 text-center px-4">
        <h1 className="text-4xl font-bold mb-2">How can we help you?</h1>
        <p className="text-lg text-white/80 mb-6">Get quick help on common issues or contact our team.</p>
      </section>

      <section className="max-w-4xl mx-auto py-12 px-4 bg-white rounded-lg mb-8 text-black">
        <h2 className="text-2xl font-semibold mb-6">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border border-green-700 rounded-md">
              <button
                onClick={() => toggleFAQ(idx)}
                className="w-full text-left px-4 py-3 hover:bg-green-100 focus:outline-none transition"
              >
                <span className="font-medium text-lg">{faq.question}</span>
              </button>
              {activeIndex[idx] && (
                <div className="px-4 py-3 text-gray-700">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="py-12 px-4">
        <h2 className="text-2xl font-semibold text-white text-center mb-10">
          Help Topics & Guides
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {helpTopics.map((card, i) => (
            <div
              key={i}
              className="border border-green-700 p-6 rounded-xl shadow-lg hover:shadow-xl hover:bg-eco-static-bg hover:text-white transition duration-200 cursor-pointer"
            >
              <div className="mb-3">{card.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
              <p className="text-sm mb-4">{card.desc}</p>
              <Link
                to={card.navigate}
                className="inline-block hover:underline text-white"
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
