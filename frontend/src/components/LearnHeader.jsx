import React, { useState } from 'react';
import LearnVideo from './LearnVideo';
import LearnArticle from './LearnArticle';
import LearnCategoryTabs from './LearnCategoryTabs';

function LearnHeader() {
    const [isVideo, setIsVideo] = useState(0);

    const handleFilter = (e) => {
        e.preventDefault();
        setIsVideo(1);
    }



    return (
        <section className="w-full eco-static-bg py-16 px-6 md:px-20 text-center ">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                    Learn and Grow
                </h1>
                <p className="text-green-100 text-lg md:text-xl mb-6">
                    Empowering you with knowledge for a greener future. Discover tips, articles, and tools to lead a more sustainable life.
                </p>

                {/* Filter Buttons */}
                <div className="flex flex-wrap justify-center gap-3">

                    <button
                        onClick={(e)=> setIsVideo(0)}
                        style={{ fontFamily: "Raleway, sans-serif" }}
                        className="bg-lime-300 text-green-900 font-semibold px-6 py-2 rounded-full shadow-[0_4px_0_#65a30d] hover:translate-y-[1px] hover:shadow-[0_2px_0_#65a30d] active:translate-y-[2px] active:shadow-none transition-all duration-150"
                    >
                        Articles
                    </button>
                    <button
                        onClick={(e)=> setIsVideo(1)}
                        style={{ fontFamily: "Raleway, sans-serif" }}
                        className={"bg-lime-300 text-green-900 font-semibold px-6 py-2 rounded-full shadow-[0_4px_0_#65a30d] hover:translate-y-[1px] hover:shadow-[0_2px_0_#65a30d] active:translate-y-[2px] active:shadow-none transition-all duration-150"}
                    >
                        Videos
                    </button>
                </div>
            </div>
            <LearnCategoryTabs isVideo={isVideo}/>
            {isVideo===1? <LearnVideo/> : <LearnArticle/>}
         </section>
    );
}

export default LearnHeader;
