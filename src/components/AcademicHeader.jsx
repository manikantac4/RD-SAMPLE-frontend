import React, { useState, useEffect } from 'react';
import Logo from '../assets/logo.webp';
import SpringerLogo from '../assets/srpinger.webp';
import RDLogo from '../assets/rdlogo.webp';
import GoldenLogo from '../assets/golden.png';
import Herosection from "../components/hero";
import Aboutsection from "../components/about";
import Eventtimeline from "../components/eventtimeline";
const AcademicHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id) => {
    setActiveSection(id);
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'tracks', label: 'Tracks' },
    { id: 'prizes', label: 'Prizes' },
    { id: 'timeline', label: 'Hack Timeline' },
    { id: 'faq', label: 'FAQ' },
    { id: 'contact', label: 'Contact Us' }
  ];

  return (
    <div className="w-full">
      {/* Golden Jubilee Animated Banner */}
      <div className="relative py-2 sm:py-3 overflow-hidden border-b-2 border-yellow-600 golden-banner">
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
          <div className="whitespace-nowrap text-center px-4">
            <span className="text-xs sm:text-sm md:text-base font-bold tracking-wide text-red-700 sparkle-text">
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

      {/* Main Header - Non-Fixed */}
      <header className="bg-white shadow-md">
        {/* Main Branding Section */}
        <div className="container mx-auto px-3 sm:px-4 md:px-6 py-3 sm:py-4 md:py-5">
          <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-4 md:gap-6">
            
            {/* LEFT: VRS Logo + 50 Years Logo */}
            <div className="flex justify-center md:justify-start items-center gap-4 sm:gap-6 md:gap-8 lg:gap-12">
              <img 
                src={Logo}
                alt="V.R. Siddhartha Academy Logo" 
                className="h-16 sm:h-20 md:h-24 lg:h-28 xl:h-32 w-auto object-contain"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
              <img 
                src={GoldenLogo}
                alt="50 Years Golden Jubilee" 
                className="h-16 sm:h-20 md:h-24 lg:h-28 xl:h-32 w-auto object-contain"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextElementSibling.style.display = 'flex';
                }}
              />
              {/* Fallback */}
              <div className="hidden bg-gradient-to-br from-yellow-400 to-amber-600 h-16 sm:h-20 md:h-24 lg:h-28 w-16 sm:w-20 md:w-24 lg:w-28 rounded-full items-center justify-center shadow-lg">
                <div className="text-center">
                  <span className="text-white font-black text-xl sm:text-2xl md:text-3xl block leading-none">50</span>
                  <span className="text-white text-[10px] sm:text-xs md:text-sm font-bold">YEARS</span>
                </div>
              </div>
            </div>

            {/* CENTER: Title */}
            <div className="flex flex-col items-center text-center">
              <div className="inline-block">
                <h1 className="font-serif font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl tracking-wider leading-none text-[#0b2c6f]">
                  SIDDHARTHA
                </h1>
                <div className="h-[2px] md:h-[3px] bg-[#0b2c6f] w-full mt-1"></div>
              </div>
              <p className="font-serif text-[11px] sm:text-xs md:text-sm lg:text-base xl:text-lg font-bold tracking-wider text-black mt-2">
                ACADEMY OF HIGHER EDUCATION
              </p>
              <p className="font-serif text-[10px] sm:text-xs md:text-sm lg:text-base text-black mt-1">
                An Institution <span className="font-bold uppercase">Deemed to be University</span>
              </p>
              <p className="font-serif text-[9px] sm:text-[10px] md:text-xs lg:text-sm text-black mt-0.5">
                (Under Section 3 of UGC Act, 1956)
              </p>
              <p className="font-serif text-[8px] sm:text-[9px] md:text-[11px] lg:text-xs text-black mt-0.5 px-2">
                (Sponsored by Siddhartha Academy of General & Technical Education), Vijayawada, A.P
              </p>
            </div>

            {/* RIGHT: RD Conclave + Springer Logos */}
            <div className="flex justify-center md:justify-end items-center gap-3 sm:gap-4">
              <div className="block">
                <img 
                  src={RDLogo}
                  alt="Research Conclave" 
                  className="h-20 sm:h-24 md:h-28 lg:h-32 xl:h-36 w-auto object-contain"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
              </div>
              <div className="hidden lg:block">
                <img 
                  src={SpringerLogo}
                  alt="Springer" 
                  className="h-28 lg:h-32 xl:h-36 w-auto object-contain"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Professional Full-Width Navigation Bar - Sticky Position */}
      <nav className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'shadow-2xl' : 'shadow-lg'
      }`}>
        <div className="bg-[#2a2a2a] px-4 sm:px-6 md:px-8 lg:px-12 py-3 sm:py-3.5">
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center justify-center" style={{ gap: '1.5cm' }}>
            {/* Home Icon */}
            <a 
              href="#home"
              onClick={() => handleNavClick('home')}
              className={`
                flex items-center justify-center w-11 h-11 xl:w-12 xl:h-12 rounded-full transition-all duration-300
                ${activeSection === 'home' 
                  ? 'bg-white text-black shadow-lg' 
                  : 'text-gray-400 hover:text-white hover:bg-gray-700'
                }
              `}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
              </svg>
            </a>

            {/* Navigation Items */}
            {navItems.slice(1, -1).map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => handleNavClick(item.id)}
                className={`
                  px-5 xl:px-6 py-2.5 text-sm xl:text-base font-medium rounded-full transition-all duration-300 whitespace-nowrap
                  ${activeSection === item.id 
                    ? 'text-black bg-white shadow-lg scale-105' 
                    : 'text-gray-300 hover:text-white hover:bg-gray-700 hover:scale-105'
                  }
                `}
              >
                {item.label}
              </a>
            ))}

            {/* Contact Button */}
            <a
              href="#contact"
              onClick={() => handleNavClick('contact')}
              className="px-6 xl:px-8 py-2.5 text-sm xl:text-base font-medium text-black bg-white rounded-full hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 whitespace-nowrap"
            >
              Contact Us
            </a>
          </div>

          {/* Tablet Navigation (md to lg) */}
          <div className="hidden md:flex lg:hidden items-center justify-center gap-6">
            {/* Home Icon */}
            <a 
              href="#home"
              onClick={() => handleNavClick('home')}
              className={`
                flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300
                ${activeSection === 'home' 
                  ? 'bg-white text-black shadow-lg' 
                  : 'text-gray-400 hover:text-white hover:bg-gray-700'
                }
              `}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
              </svg>
            </a>

            {/* Navigation Items */}
            {navItems.slice(1, -1).map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => handleNavClick(item.id)}
                className={`
                  px-4 py-2 text-xs font-medium rounded-full transition-all duration-300 whitespace-nowrap
                  ${activeSection === item.id 
                    ? 'text-black bg-white shadow-lg' 
                    : 'text-gray-300 hover:text-white hover:bg-gray-700'
                  }
                `}
              >
                {item.label}
              </a>
            ))}

            {/* Contact Button */}
            <a
              href="#contact"
              onClick={() => handleNavClick('contact')}
              className="px-5 py-2 text-xs font-medium text-black bg-white rounded-full hover:bg-gray-100 transition-all duration-300 shadow-lg whitespace-nowrap"
            >
              Contact Us
            </a>
          </div>

          {/* Mobile Navigation - Hamburger */}
          <div className="lg:hidden flex items-center justify-between">
            <div className="flex items-center gap-4">
              {/* Home Icon Mobile */}
              <a 
                href="#home"
                onClick={() => handleNavClick('home')}
                className={`
                  flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300
                  ${activeSection === 'home' 
                    ? 'bg-white text-black shadow-lg' 
                    : 'text-gray-400 hover:text-white hover:bg-gray-700'
                  }
                `}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                </svg>
              </a>
              <span className="text-white font-medium text-sm">Menu</span>
            </div>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="flex items-center justify-center w-10 h-10 bg-white rounded-full text-black hover:bg-gray-100 transition-all duration-300"
            >
              {isMobileMenuOpen ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Side Navigation */}
        <div className={`
          lg:hidden fixed top-0 right-0 h-full w-72 bg-[#1a1a1a] shadow-2xl transform transition-transform duration-300 ease-in-out z-50
          ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}
        `}>
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-800">
            <h3 className="text-white font-bold text-lg">Menu</h3>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Mobile Navigation Items */}
          <nav className="py-6 px-4 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => handleNavClick(item.id)}
                className={`
                  flex items-center gap-3 px-5 py-3.5 rounded-xl text-sm font-medium transition-all duration-300
                  ${activeSection === item.id 
                    ? 'bg-white text-black' 
                    : 'text-gray-300 hover:text-white hover:bg-gray-800'
                  }
                `}
              >
                {item.id === 'home' && (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                  </svg>
                )}
                {item.id === 'contact' && (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                )}
                {item.label}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Footer */}
          <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-800">
            <a
              href="#contact"
              onClick={() => handleNavClick('contact')}
              className="block w-full px-5 py-3 text-sm font-medium text-center text-white bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg"
            >
              Get in Touch
            </a>
          </div>
        </div>

        {/* Mobile Overlay */}
        {isMobileMenuOpen && (
          <div
            className="lg:hidden fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40"
            onClick={() => setIsMobileMenuOpen(false)}
          ></div>
        )}
      </nav>

      <Herosection/>
      <Aboutsection/>
      <Eventtimeline/>

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

        /* Subtle Sparkle Animation */
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

        /* Smooth scrolling */
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
};

export default AcademicHeader;