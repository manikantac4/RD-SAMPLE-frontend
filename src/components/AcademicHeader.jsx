import React, { useState, useEffect } from 'react';
import Logo from '../assets/logo.webp';
import SpringerLogo from '../assets/srpinger.webp';
import RDLogo from '../assets/rdlogo.webp';
import GoldenLogo from '../assets/golden.png';
import Herosection from "../components/hero";

const AcademicHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="w-full">
      {/* Golden Jubilee Animated Banner - Reduced Height */}
      <div className="relative py-1 overflow-hidden border-b border-yellow-600 golden-banner">
        <div className="absolute inset-0 overflow-hidden">
          <div className="bokeh bokeh-1"></div>
          <div className="bokeh bokeh-2"></div>
          <div className="bokeh bokeh-3"></div>
          <div className="bokeh bokeh-4"></div>
        </div>
        
        <div className="relative z-10 overflow-hidden">
          <div className="whitespace-nowrap text-center">
            <span className="text-xs font-bold tracking-wide text-red-700 sparkle-text">
              Golden Jubilee Year of Siddhartha Academy of General & Technical Education, Vijayawada
            </span>
          </div>
        </div>
      </div>

      {/* Main Header - Reduced Padding and Logo Sizes */}
      <header 
        className={`bg-white transition-all duration-300 sticky top-0 z-50 ${
          isScrolled ? 'shadow-lg' : ''
        }`}
      >
        {/* Main Branding Section - More Compact */}
        <div className="container mx-auto px-4 sm:px-6 py-2">
          <div className="grid grid-cols-3 items-center gap-3">
            
            {/* LEFT DIV: VRS Logo + 50 Years Logo */}
            <div className="flex justify-start items-center gap-4 md:gap-6">
              <img 
                src={Logo}
                alt="V.R. Siddhartha Academy Logo" 
                className="h-12 sm:h-14 md:h-16 lg:h-20 w-auto object-contain"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />

              <img 
                src={GoldenLogo}
                alt="50 Years Golden Jubilee" 
                className="h-12 sm:h-14 md:h-16 lg:h-20 w-auto object-contain"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextElementSibling.style.display = 'flex';
                }}
              />
              {/* Fallback if Golden Logo not found */}
              <div className="hidden bg-gradient-to-br from-yellow-400 to-amber-600 h-12 sm:h-14 md:h-16 lg:h-20 w-12 sm:w-14 md:w-16 lg:w-20 rounded-full items-center justify-center shadow-lg">
                <div className="text-center">
                  <span className="text-white font-black text-lg sm:text-xl block leading-none">50</span>
                  <span className="text-white text-[8px] sm:text-[9px] font-bold">YEARS</span>
                </div>
              </div>
            </div>

            {/* CENTER DIV: Title - More Compact */}
            <div className="flex flex-col items-center text-center">
              <div className="inline-block">
                <h1 className="
                  font-serif
                  font-extrabold
                  text-[20px] sm:text-[26px] md:text-[32px] lg:text-[38px]
                  tracking-[0.06em]
                  leading-none
                  text-[#0b2c6f]
                ">
                  SIDDHARTHA
                </h1>
                <div className="h-[1.5px] md:h-[2px] bg-[#0b2c6f] w-full mt-[1px] md:mt-[2px]"></div>
              </div>

              <p className="
                font-serif
                text-[10px] sm:text-[11px] md:text-[13px] lg:text-[14px]
                font-bold
                tracking-[0.05em]
                text-black
                mt-1
              ">
                ACADEMY OF HIGHER EDUCATION
              </p>

              <p className="
                font-serif
                text-[9px] sm:text-[10px] md:text-[11px] lg:text-[12px]
                text-black
                mt-0.5
              ">
                An Institution <span className="font-bold uppercase">Deemed to be University</span>
              </p>

              <p className="
                font-serif
                text-[8px] sm:text-[9px] md:text-[10px]
                text-black
                mt-0.5
              ">
                (Under Section 3 of UGC Act, 1956)
              </p>

              <p className="
                font-serif
                text-[7px] sm:text-[8px] md:text-[9px]
                text-black
                mt-0.5
              ">
                (Sponsored by Siddhartha Academy), Vijayawada, A.P
              </p>
            </div>

            {/* RIGHT DIV: RD Conclave + Springer Logos */}
            <div className="flex justify-end items-center gap-2">
              {/* Research Conclave Logo */}
              <div className="hidden md:block">
                <img 
                  src={RDLogo}
                  alt="Research Conclave" 
                  className="h-20 sm:h-24 md:h-28 w-auto object-contain"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
              </div>
              
              {/* Springer Logo */}
              <div className="hidden lg:block">
                <img 
                  src={SpringerLogo}
                  alt="Springer" 
                  className="h-20 sm:h-24 md:h-28 w-auto object-contain"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
              </div>
            </div>

          </div>
        </div>

        {/* Navigation Bar - More Compact */}
        <nav className="bg-[#1a2b4a] border-t border-gray-700">
          <div className="container mx-auto px-2 sm:px-4 md:px-6">
            <ul className="flex flex-wrap items-center justify-center gap-0.5">
              {['Home', 'About', 'Industry-Academia Meet', 'inSAHEthon', 'Journal Publication', 'Speakers', 'Schedule', 'Download', 'Contact us'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                    className="block px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 text-white text-[10px] sm:text-xs font-semibold hover:bg-orange-500 hover:text-white transition-all duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </header>

      <style>{`
        .golden-banner {
          background: linear-gradient(135deg, 
            #f4d03f 0%, 
            #f9e79f 25%, 
            #f8c471 50%, 
            #f9e79f 75%, 
            #f4d03f 100%
          );
          background-size: 200% 200%;
          animation: golden-shimmer 8s ease infinite;
        }

        @keyframes golden-shimmer {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        @keyframes bokeh-float {
          0%, 100% {
            transform: translateY(0) scale(1);
            opacity: 0.4;
          }
          50% {
            transform: translateY(-15px) scale(1.2);
            opacity: 0.8;
          }
        }

        .bokeh {
          position: absolute;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(255,255,255,0.8) 0%, rgba(255,215,0,0.4) 50%, transparent 70%);
          filter: blur(8px);
        }

        .bokeh-1 {
          width: 40px;
          height: 40px;
          top: -10px;
          left: 10%;
          animation: bokeh-float 6s ease-in-out infinite;
        }

        .bokeh-2 {
          width: 35px;
          height: 35px;
          top: 5px;
          left: 40%;
          animation: bokeh-float 7s ease-in-out infinite 1s;
        }

        .bokeh-3 {
          width: 45px;
          height: 45px;
          top: -8px;
          left: 70%;
          animation: bokeh-float 8s ease-in-out infinite 2s;
        }

        .bokeh-4 {
          width: 38px;
          height: 38px;
          top: 3px;
          left: 90%;
          animation: bokeh-float 6.5s ease-in-out infinite 3s;
        }

        .sparkle-text {
          font-weight: 700;
          text-shadow: 1px 1px 2px rgba(0,0,0,0.1);
        }
      `}</style>
    </div>
  );
};

export default AcademicHeader;