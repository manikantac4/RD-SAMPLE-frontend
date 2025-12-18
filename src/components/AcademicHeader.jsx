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
      {/* Golden Jubilee Animated Banner */}
      <div className="relative py-2 overflow-hidden border-b-2 border-yellow-600 golden-banner">
        <div className="absolute inset-0 overflow-hidden">
          <div className="bokeh bokeh-1"></div>
          <div className="bokeh bokeh-2"></div>
          <div className="bokeh bokeh-3"></div>
          <div className="bokeh bokeh-4"></div>
          <div className="bokeh bokeh-5"></div>
          <div className="bokeh bokeh-6"></div>
          <div className="bokeh bokeh-7"></div>
          <div className="bokeh bokeh-8"></div>
        </div>
        
        <div className="relative z-10 overflow-hidden">
         <div className="whitespace-nowrap text-center">

            <span className="text-sm font-bold tracking-wide text-red-700 sparkle-text">
              Golden Jubilee Year of Siddhartha Academy of General & Technical Education, Vijayawada
            </span>
          </div>
        </div>
        
        <div className="absolute inset-0 pointer-events-none z-20">
          <div className="text-sparkle sparkle-1"></div>
          <div className="text-sparkle sparkle-2"></div>
          <div className="text-sparkle sparkle-3"></div>
          <div className="text-sparkle sparkle-4"></div>
        </div>
      </div>

      {/* Main Header */}
      <header 
        className={`bg-white transition-all duration-300 sticky top-0 z-50 ${
          isScrolled ? 'shadow-lg' : ''
        }`}
      >
        {/* Main Branding Section - 3 Column Layout */}
        <div className="container mx-auto px-4 sm:px-6 py-3">
          <div className="grid grid-cols-3 items-center gap-4">
            
            {/* LEFT DIV: VRS Logo + 50 Years Logo - Left Aligned */}
            <div className="flex justify-start items-center gap-8 md:gap-12 lg:gap-16">
              <img 
  src={Logo}
  alt="V.R. Siddhartha Academy Logo" 
  className="h-[5.4rem] sm:h-[6.3rem] md:h-[7.2rem] lg:h-[8.1rem] w-auto object-contain"
  onError={(e) => {
    e.target.style.display = 'none';
  }}
/>

              <img 
                src={GoldenLogo}
                alt="50 Years Golden Jubilee" 
                className="h-20 sm:h-24 md:h-28 lg:h-32 w-auto object-contain"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextElementSibling.style.display = 'flex';
                }}
              />
              {/* Fallback if Golden Logo not found */}
              <div className="hidden bg-gradient-to-br from-yellow-400 to-amber-600 h-20 sm:h-24 md:h-28 lg:h-32 w-20 sm:w-24 md:w-28 lg:w-32 rounded-full items-center justify-center shadow-lg">
                <div className="text-center">
                  <span className="text-white font-black text-2xl sm:text-3xl block leading-none">50</span>
                  <span className="text-white text-xs sm:text-sm font-bold">YEARS</span>
                </div>
              </div>
            </div>

            {/* CENTER DIV: Title - Center Aligned */}
            <div className="flex flex-col items-center text-center">
              {/* SIDDHARTHA + underline */}
              <div className="inline-block">
                <h1 className="
                  font-serif
                  font-extrabold
                  text-[28px] sm:text-[36px] md:text-[44px] lg:text-[52px]
                  tracking-[0.06em]
                  leading-none
                  text-[#0b2c6f]
                ">
                  SIDDHARTHA
                </h1>
                <div className="h-[2px] md:h-[3px] bg-[#0b2c6f] w-full mt-[2px] md:mt-[3px]"></div>
              </div>

              {/* Academy line */}
              <p className="
                font-serif
                text-[12px] sm:text-[14px] md:text-[17px] lg:text-[18px]
                font-bold
                tracking-[0.06em]
                text-black
                mt-2
              ">
                ACADEMY OF HIGHER EDUCATION
              </p>

              {/* Deemed line */}
              <p className="
                font-serif
                text-[11px] sm:text-[12px] md:text-[14px] lg:text-[15px]
                text-black
                mt-1
              ">
                An Institution <span className="font-bold uppercase">Deemed to be University</span>
              </p>

              {/* UGC line */}
              <p className="
                font-serif
                text-[10px] sm:text-[11px] md:text-[13px]
                text-black
                mt-0.5
              ">
                (Under Section 3 of UGC Act, 1956)
              </p>

              {/* Address line */}
              <p className="
                font-serif
                text-[9px] sm:text-[10px] md:text-[12px]
                text-black
                mt-0.5
              ">
                (Sponsored by Siddhartha Academy of General & Technical Education), Vijayawada, A.P
              </p>
            </div>

            {/* RIGHT DIV: RD Conclave + Springer Logos - Right Aligned */}
            <div className="flex justify-end items-center gap-3">
              {/* Research Conclave Logo */}
              <div className="hidden md:block">
                <img 
                  src={RDLogo}
                  alt="Research Conclave" 
                  className="h-32 sm:h-36 md:h-40 w-auto object-contain"
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
                  className="h-32 sm:h-36 md:h-40 w-auto object-contain"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
              </div>
            </div>

          </div>
        </div>

        {/* Navigation Bar */}
        <nav className="bg-[#1a2b4a] border-t border-gray-700">
          <div className="container mx-auto px-2 sm:px-4 md:px-6">
            <ul className="flex flex-wrap items-center justify-center gap-0.5 sm:gap-1">
              <li>
                <a 
                  href="#home" 
                  className="block px-2 sm:px-3 md:px-5 py-2 sm:py-2.5 text-white text-xs sm:text-sm font-semibold hover:bg-orange-500 hover:text-white transition-all duration-300"
                >
                  Home
                </a>
              </li>
              <li>
                <a 
                  href="#about" 
                  className="block px-2 sm:px-3 md:px-5 py-2 sm:py-2.5 text-white text-xs sm:text-sm font-semibold hover:bg-orange-500 hover:text-white transition-all duration-300"
                >
                  About
                </a>
              </li>
              <li>
                <a 
                  href="#industry-academia" 
                  className="block px-2 sm:px-3 md:px-5 py-2 sm:py-2.5 text-white text-xs sm:text-sm font-semibold hover:bg-orange-500 hover:text-white transition-all duration-300"
                >
                  Industry-Academia Meet
                </a>
              </li>
              <li>
                <a 
                  href="#insahethon" 
                  className="block px-2 sm:px-3 md:px-5 py-2 sm:py-2.5 text-white text-xs sm:text-sm font-semibold hover:bg-orange-500 hover:text-white transition-all duration-300"
                >
                  inSAHEthon
                </a>
              </li>
              <li>
                <a 
                  href="#journal" 
                  className="block px-2 sm:px-3 md:px-5 py-2 sm:py-2.5 text-white text-xs sm:text-sm font-semibold hover:bg-orange-500 hover:text-white transition-all duration-300"
                >
                  Journal Publication
                </a>
              </li>
              <li>
                <a 
                  href="#speakers" 
                  className="block px-2 sm:px-3 md:px-5 py-2 sm:py-2.5 text-white text-xs sm:text-sm font-semibold hover:bg-orange-500 hover:text-white transition-all duration-300"
                >
                  Speakers
                </a>
              </li>
              <li>
                <a 
                  href="#schedule" 
                  className="block px-2 sm:px-3 md:px-5 py-2 sm:py-2.5 text-white text-xs sm:text-sm font-semibold hover:bg-orange-500 hover:text-white transition-all duration-300"
                >
                  Schedule
                </a>
              </li>
              <li>
                <a 
                  href="#download" 
                  className="block px-2 sm:px-3 md:px-5 py-2 sm:py-2.5 text-white text-xs sm:text-sm font-semibold hover:bg-orange-500 hover:text-white transition-all duration-300"
                >
                  Download
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  className="block px-2 sm:px-3 md:px-5 py-2 sm:py-2.5 text-white text-xs sm:text-sm font-semibold hover:bg-orange-500 hover:text-white transition-all duration-300"
                >
                  Contact us
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
<Herosection/>
      <style>{`
  

        /* Golden Background with Bokeh Effect */
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

        /* Bokeh Light Effects */
        @keyframes bokeh-float {
          0%, 100% {
            transform: translateY(0) scale(1);
            opacity: 0.4;
          }
          50% {
            transform: translateY(-20px) scale(1.2);
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
          width: 60px;
          height: 60px;
          top: -15px;
          left: 5%;
          animation: bokeh-float 6s ease-in-out infinite;
        }

        .bokeh-2 {
          width: 50px;
          height: 50px;
          top: 8px;
          left: 20%;
          animation: bokeh-float 7s ease-in-out infinite 1s;
        }

        .bokeh-3 {
          width: 70px;
          height: 70px;
          top: -20px;
          left: 40%;
          animation: bokeh-float 8s ease-in-out infinite 2s;
        }

        .bokeh-4 {
          width: 55px;
          height: 55px;
          top: 5px;
          left: 60%;
          animation: bokeh-float 6.5s ease-in-out infinite 3s;
        }

        .bokeh-5 {
          width: 65px;
          height: 65px;
          top: -10px;
          left: 75%;
          animation: bokeh-float 7.5s ease-in-out infinite 4s;
        }

        .bokeh-6 {
          width: 45px;
          height: 45px;
          top: 12px;
          left: 88%;
          animation: bokeh-float 6.8s ease-in-out infinite 2.5s;
        }

        .bokeh-7 {
          width: 52px;
          height: 52px;
          top: 6px;
          left: 12%;
          animation: bokeh-float 7.2s ease-in-out infinite 1.5s;
        }

        .bokeh-8 {
          width: 58px;
          height: 58px;
          top: -8px;
          left: 50%;
          animation: bokeh-float 6.3s ease-in-out infinite 3.5s;
        }

        /* Red Text Styling */
        .sparkle-text {
          font-weight: 700;
          text-shadow: 1px 1px 2px rgba(0,0,0,0.1);
        }

        /* Subtle Sparkle Animation for Red Text */
        @keyframes text-sparkle {
          0%, 100% {
            opacity: 0;
            transform: scale(0);
          }
          50% {
            opacity: 0.8;
            transform: scale(1);
          }
        }

        .text-sparkle {
          position: absolute;
          width: 3px;
          height: 3px;
          background: radial-gradient(circle, #fff 0%, rgba(255,255,255,0.5) 50%, transparent 100%);
          border-radius: 50%;
          box-shadow: 0 0 4px rgba(255,255,255,0.8);
        }

        .sparkle-1 {
          top: 30%;
          left: 20%;
          animation: text-sparkle 3s ease-in-out infinite;
        }

        .sparkle-2 {
          top: 60%;
          left: 50%;
          animation: text-sparkle 3.5s ease-in-out infinite 0.8s;
        }

        .sparkle-3 {
          top: 35%;
          left: 70%;
          animation: text-sparkle 3.2s ease-in-out infinite 1.5s;
        }

        .sparkle-4 {
          top: 55%;
          left: 85%;
          animation: text-sparkle 3.8s ease-in-out infinite 2.2s;
        }
        
        @media (max-width: 768px) {
          .animate-slide {
            animation: slide 12s linear infinite;
          }
        }
        
        @media (max-width: 640px) {
          .animate-slide {
            animation: slide 10s linear infinite;
          }
        }
      `}</style>
    </div>
  );
};

export default AcademicHeader;