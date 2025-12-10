import React, { useState, useEffect, useRef } from 'react';
import LearnVideo from './LearnVideo';
import LearnArticle from './LearnArticle';
import LearnCategoryTabs from './LearnCategoryTabs';

function LearnHeader() {
    const [isVideo, setIsVideo] = useState(0);
    const [isSticky, setIsSticky] = useState(false);
    const headerRef = useRef(null);
    const stickyRef = useRef(null);

    const handleFilter = (e) => {
        e.preventDefault();
        setIsVideo(1);
    }

    // sticky header logic
    useEffect(() => {
        const handleScroll = () => {
            if (headerRef.current) {
                const headerBottom = headerRef.current.offsetTop + headerRef.current.offsetHeight;
                const scrollPosition = window.scrollY;
                setIsSticky(scrollPosition > headerBottom);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <section className="w-full eco-static-bg py-16 px-6 md:px-20 text-center">
                <div ref={headerRef} className="max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Learn and Grow
                    </h1>
                    <p className="text-green-100 text-lg md:text-xl mb-6">
                        Empowering you with knowledge for a greener future. 
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
                {/* <hr className='my-10 text-green-100 text-muted '></hr> */}
                
                {/* Sticky Category Tabs */}
                <div 
                    ref={stickyRef}
                    className={`${
                        isSticky 
                            ? 'fixed top-0 left-0 right-0 z-50   eco-static-bg shadow-lg' 
                            : 'mt-10  py-4 lg:px-16 md:px-8'
                    } `}
                >
                    <LearnCategoryTabs isVideo={isVideo}/>
                </div>
                
                {/* Add spacing when sticky to prevent content jump */}
                {isSticky && <div style={{ height: stickyRef.current?.offsetHeight || 0 }} />}
                
                {isVideo===1? <LearnVideo/> : <LearnArticle isVideo={isVideo}/>} 
            </section>
        </>
    );
}

export default LearnHeader;