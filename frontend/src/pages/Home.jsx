import HomeHero from '../components/HomeHero';
import IntroLeftHome from '../components/IntroLeftHome';
import calcImg from '../assets/calculator-image.png'; 
import comImg from '../assets/community-image.png'
import initImg from '../assets/initiative-image.png'
import learnImg from '../assets/learn-image.png'
import shopImg from '../assets/shopping-green.png'
import IntroRightHome from '../components/IntroRightHome';


const Home = () => {
  return (
    <div>
      <HomeHero />


      <div className='eco-static-bg'>
        <h1 className="text-white text-3xl md:text-5xl font-extrabold tracking-wide mb-4 text-shadow p-5 text-center mb-15">
          We help you with?
        </h1>
        <IntroLeftHome
          header="Carbon Footprint Calculator"
          info="The Carbon Footprint Calculator is a simple yet powerful tool within EcoSphere that helps users estimate their environmental impact based on their lifestyle choices. By entering data about daily activities such as transportation, energy usage, diet, and consumption habits, users receive a personalized carbon footprint score."
          visitLink="/eco-calculator"
          imgURL={calcImg}

        />
        <IntroRightHome
          header="Communities support"
          info="The Community feature in EcoSphere helps users connect with others who share a passion for sustainability. Users can join or create groups based on interests like clean energy, waste reduction, or eco-friendly living. These communities enable members to share tips, take part in eco-challenges, discuss ideas, and collaborate on green projects. It’s a space to learn, act, and grow together—turning individual actions into collective impact."
          visitLink="/communities"
          imgURL={comImg}
        />
        <IntroLeftHome
          header="Take and join Intiatives"
          info='The Initiatives feature empowers users to take real-world climate action by creating and joining impactful sustainability campaigns. Whether is organizing a local tree plantation drive, a community clean-up, or a plastic-free challenge, users can launch initiatives aligned with their values. Others can discover, join, and contribute to these causes—making it easy to collaborate, track progress, and drive meaningful change together.'
          visitLink='/initiatives'
          imgURL={initImg} />
        <IntroRightHome
          header='Learn and grow with us'
          info="The Learn & Grow section is your personal sustainability classroom—designed to educate, inspire, and empower. Explore curated articles, engaging videos, and interactive tips on eco-conscious living, climate change, and green innovation. Whether you're a beginner or an enthusiast, this space helps you build knowledge and adopt habits that create lasting environmental impact."
          visitLink="/learn"
          imgURL={learnImg}
        />
        <IntroLeftHome
          header='Recyled and Green Shop'
          info="EcoShop is your dedicated marketplace for recycled and upcycled products made from waste. Discover a curated collection of eco-conscious items crafted from discarded materials—turning trash into treasure. Every product supports sustainability, empowers artisans, and helps reduce landfill waste. Shop smarter, live greener."
          visitLink='/eco-shop'
          imgURL={shopImg}
        />
      </div>

    </div>

  );

};

export default Home;
