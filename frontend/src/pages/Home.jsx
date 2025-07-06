import React from 'react'
import Midsec from '../components/Midsec'
import Footer from '../components/Footer'
import Nav from '../components/Navbar'

const Home = () => {
 
      return (

        <>
        <div><Nav/></div>

         <div className="min-h-screen bg-[#00DA93] font-[system-ui,Roboto,Segoe_UI,Arial,sans-serif] text-white">
     

      {/* Main Section */}
      <section className="flex flex-col md:flex-row items-center justify-between px-8 md:px-20 py-16 bg-[#00DA93] text-white">
        {/* Left Content */}
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
  {Array.from("Your Journey to").map((char, i) => (
    <span key={i} className={`letter-animate letter-animate-delay-${i}`}>{char}</span>
  ))}
  <br />
  <span className="text-[#FFAD40]">
    {Array.from("Sustainable Living").map((char, i) => (
      <span key={i} className={`letter-animate letter-animate-delay-${i + 500}`}>{char}</span>
    ))}
  </span>
</h1>

          <p className="text-lg">
            Track your carbon footprint, join eco-communities, create sustainable
            products, and learn from experts – all in one platform.
          </p>
          <div className="flex space-x-4">
            <button className="bg-white text-[#00DA93] px-6 py-2 rounded-md font-semibold shadow hover:opacity-90 transition">
              Start Tracking
            </button>
            <button className="border border-white px-6 py-2 rounded-md font-semibold hover:bg-white hover:text-[#00DA93] transition">
              Join Community
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2 mt-10 md:mt-0">
          <img
            src="https://static.vecteezy.com/system/resources/previews/024/472/833/large_2x/green-earth-day-on-isolated-white-background-care-for-the-environment-and-ecology-resources-that-are-sustainable-renewable-and-green-graphic-resource-generative-ai-free-photo.jpg"
            alt="Sustainable Living"
            className="rounded-xl shadow-lg w-full h-auto"
          />
        </div>
      </section>
    </div>

    <div>
         <Midsec/>
    </div>
    <div>
      <Footer/>
    </div>
    
  
    </>
        
        
   
  )

}

export default Home