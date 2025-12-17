import React, { useState, useEffect } from 'react';
import Logo from './assets/logo.webp';
import SpringerLogo from './assets/srpinger.webp';
import RDLogo from './assets/rdlogo.webp';
import GoldenLogo from './assets/golden.png';

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
        
        <div className="relative z-10">
          <div className="animate-slide inline-flex whitespace-nowrap">
            <span className="text-sm font-bold tracking-wide px-8 text-red-700 sparkle-text">
              Golden Jubilee Year of Siddhartha Academy of General & Technical Education, Vijayawada
            </span>
            <span className="text-sm font-bold tracking-wide px-8 text-red-700 sparkle-text">
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
        {/* Main Branding Section */}
        <div className="container mx-auto px-6 py-1.5">
          <div className="flex items-center justify-between gap-4">
            {/* Left: V.R. Siddhartha Logo */}
            <div className="flex items-center flex-shrink-0">
              <img 
                src={Logo}
                alt="V.R. Siddhartha Academy Logo" 
                className="h-28 w-auto object-contain"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextElementSibling.style.display = 'flex';
                }}
              />
              {/* Fallback if image not found */}
              <div className="hidden w-28 h-28 flex items-center justify-center">
                <div className="text-center border-2 border-gray-300 p-2">
                  <div className="text-purple-600 font-bold text-xs">VRS LOGO</div>
                </div>
              </div>
            </div>

            {/* Center: Primary Branding */}
<div className="flex-1 flex flex-col items-center text-center px-4">
  {/* SIDDHARTHA + underline */}
  <div className="inline-block">
    <h1 className="
      font-serif
      font-extrabold
      text-[40px] md:text-[44px]
      tracking-[0.06em]
      leading-none
      text-[#0b2c6f]
    ">
      SIDDHARTHA
    </h1>

    {/* underline exactly matching text width */}
    <div className="h-[2.5px] bg-[#0b2c6f] w-full mt-[3px]"></div>
  </div>

  {/* Academy line */}
  <p className="
    font-serif
    text-[16px]
    font-bold
    tracking-[0.06em]
    text-black
    mt-1
  ">
    ACADEMY OF HIGHER EDUCATION
  </p>

  {/* Deemed line */}
  <p className="
    font-serif
    text-[14px]
    text-black
    mt-[2px]
  ">
    An Institution <span className="font-bold uppercase">Deemed to be University</span>
  </p>

  {/* UGC line */}
  <p className="
    font-serif
    text-[12.5px]
    text-black
  ">
    (Under Section 3 of UGC Act, 1956)
  </p>

  {/* Address line */}
  <p className="
    font-serif
    text-[11.5px]
    text-black
    mt-[2px]
  ">
    (Sponsored by Siddhartha Academy of General & Technical Education), Vijayawada, A.P
  </p>
</div>

            {/* Right: Partner Logos */}
            <div className="flex items-center gap-3 flex-shrink-0">
              {/* Springer Logo */}
              <div className="flex flex-col items-center">
                <div className="w-24 h-24 flex items-center justify-center">
                  <img 
                    src={SpringerLogo}
                    alt="Springer" 
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      e.target.src = '';
                      e.target.alt = 'S';
                      e.target.className = 'hidden';
                      e.target.nextElementSibling.style.display = 'flex';
                    }}
                  />
                  <span className="hidden text-2xl font-bold">S</span>
                </div>
              </div>
              
              {/* Research Conclave Logo */}
              <div className="w-24 h-24 flex items-center justify-center">
                <img 
                  src={RDLogo}
                  alt="Research Conclave" 
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    e.target.src = '';
                    e.target.alt = 'RC';
                    e.target.className = 'hidden';
                    e.target.nextElementSibling.style.display = 'flex';
                  }}
                />
                <span className="hidden text-xl font-bold text-blue-600">RC</span>
              </div>
              
              {/* 50 Years Golden Jubilee Logo */}
              <div className="w-24 h-24 flex items-center justify-center">
                <img 
                  src={GoldenLogo}
                  alt="50 Years Golden Jubilee" 
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    e.target.src = '';
                    e.target.className = 'hidden';
                    e.target.nextElementSibling.style.display = 'flex';
                  }}
                />
                <div className="hidden bg-gradient-to-br from-yellow-400 to-amber-600 w-full h-full flex items-center justify-center">
                  <div className="text-center">
                    <span className="text-white font-black text-2xl block leading-none">50</span>
                    <span className="text-white text-xs font-bold">YEARS</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Bar */}
        <nav className="bg-[#1a2b4a] border-t border-gray-700">
          <div className="container mx-auto px-6">
            <ul className="flex items-center justify-center gap-1">
              <li>
                <a 
                  href="#home" 
                  className="block px-5 py-2.5 text-white text-sm font-semibold hover:bg-orange-500 hover:text-white transition-all duration-300"
                >
                  Home
                </a>
              </li>
              <li>
                <a 
                  href="#about" 
                  className="block px-5 py-2.5 text-white text-sm font-semibold hover:bg-orange-500 hover:text-white transition-all duration-300"
                >
                  About
                </a>
              </li>
              <li>
                <a 
                  href="#industry-academia" 
                  className="block px-5 py-2.5 text-white text-sm font-semibold hover:bg-orange-500 hover:text-white transition-all duration-300"
                >
                  Industry-Academia Meet
                </a>
              </li>
              <li>
                <a 
                  href="#insahethon" 
                  className="block px-5 py-2.5 text-white text-sm font-semibold hover:bg-orange-500 hover:text-white transition-all duration-300"
                >
                  inSAHEthon
                </a>
              </li>
              <li>
                <a 
                  href="#journal" 
                  className="block px-5 py-2.5 text-white text-sm font-semibold hover:bg-orange-500 hover:text-white transition-all duration-300"
                >
                  Journal Publication
                </a>
              </li>
              <li>
                <a 
                  href="#speakers" 
                  className="block px-5 py-2.5 text-white text-sm font-semibold hover:bg-orange-500 hover:text-white transition-all duration-300"
                >
                  Speakers
                </a>
              </li>
              <li>
                <a 
                  href="#schedule" 
                  className="block px-5 py-2.5 text-white text-sm font-semibold hover:bg-orange-500 hover:text-white transition-all duration-300"
                >
                  Schedule
                </a>
              </li>
              <li>
                <a 
                  href="#download" 
                  className="block px-5 py-2.5 text-white text-sm font-semibold hover:bg-orange-500 hover:text-white transition-all duration-300"
                >
                  Download
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  className="block px-5 py-2.5 text-white text-sm font-semibold hover:bg-orange-500 hover:text-white transition-all duration-300"
                >
                  Contact us
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      <style jsx>{`
        /* Slide Animation for Banner - Seamless Loop */
        @keyframes slide {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-slide {
          animation: slide 20s linear infinite;
          display: inline-flex;
        }

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

        /* Siddhartha Heading Style - Larger, bolder */
        .siddhartha-heading {
          font-family: 'Arial Black', 'Arial Bold', sans-serif;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #000000;
          font-weight: 900;
          margin-bottom: 0.15rem;
        }

        /* Underline that matches SIDDHARTHA width exactly */
        .siddhartha-underline {
          width: 100%;
          max-width: 580px;
          height: 3px;
          background-color: #000000;
          margin: 0 auto 0.5rem auto;
        }

        /* Academy Subtitle - Larger */
        .academy-subtitle {
          color: #000000;
          font-weight: 700;
          letter-spacing: 0.05em;
        }

        /* Deemed text styling */
        .deemed-text {
          letter-spacing: 0.02em;
        }
        
        @media (max-width: 768px) {
          .animate-slide {
            animation: slide 15s linear infinite;
          }
          
          .siddhartha-heading {
            font-size: 2rem;
          }
        }
      `}</style>
    </div>
  );
};

export default AcademicHeader;