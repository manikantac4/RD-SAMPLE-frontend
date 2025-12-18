import React, { useEffect, useRef } from "react";

const CodeFusionHero = () => {
  const canvasRef = useRef(null);

  /* ================= BACKGROUND PARTICLES ================= */
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId;
    const dpr = window.devicePixelRatio || 1;
    const particles = [];
    const COUNT = 60;

    const resize = () => {
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      ctx.scale(dpr, dpr);
    };

    class Particle {
      constructor() { this.reset(); }
      reset() {
        this.x = Math.random() * window.innerWidth;
        this.y = Math.random() * window.innerHeight;
        this.r = Math.random() * 2 + 0.5;
        this.vy = Math.random() * 0.15 + 0.05;
        this.a = Math.random() * 0.2 + 0.05;
      }
      update() {
        this.y -= this.vy;
        if (this.y < -10) this.y = window.innerHeight + 10;
      }
      draw() {
        ctx.fillStyle = `rgba(12, 74, 110, ${this.a})`; // Deep sea blue particles
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const init = () => {
      resize();
      particles.length = 0;
      for (let i = 0; i < COUNT; i++) particles.push(new Particle());
    };

    const animate = () => {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      particles.forEach(p => { p.update(); p.draw(); });
      animationId = requestAnimationFrame(animate);
    };

    init();
    animate();
    window.addEventListener("resize", init);
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", init);
    };
  }, []);

  const title = "CODEFUSION";

  return (
    <section className="relative w-full h-[60vh] bg-white overflow-hidden flex flex-col items-center justify-center font-serif">
      
      {/* CLEAN BACKGROUND PARTICLES */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0 pointer-events-none opacity-40" />

      {/* DARK SEA BLUE TITLE */}
      <h1 className="relative z-10 flex dark-blue-title text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black">
        {title.split("").map((char, i) => (
          <span
            key={i}
            className="blue-letter"
            style={{ animationDelay: `${i * 0.15}s` }} // Slower staggered entrance
          >
            {char}
          </span>
        ))}
      </h1>

      {/* ANIMATED DATE - SLOWER FADE */}
      <p className="relative z-10 mt-10 text-lg md:text-xl tracking-[0.4em] uppercase text-[#0c4a6e] animate-fade-in-long" 
         style={{ animationDelay: '2s' }}>
        January 23–24, 2026
      </p>

      {/* ANIMATED DIVIDER - SLOWER GROW */}
      <div className="relative z-10 h-px bg-[#0ea5e9] mt-6 opacity-30 animate-grow-width-long" 
           style={{ animationDelay: '2.5s' }} />

      {/* ANIMATED TAGLINE - SLOWER REVEAL */}
      <p className="relative z-10 mt-6 text-xs md:text-sm italic tracking-[0.3em] text-[#334155] animate-reveal-text-long"
         style={{ animationDelay: '3s' }}>
        Innovation with Discipline • Academic Hackathon
      </p>

      <style>{`
        .dark-blue-title { perspective: 1500px; }

        .blue-letter {
          position: relative;
          display: inline-block;
          margin: 0 0.05em;
          opacity: 0;
          transform: translateY(60px) rotateX(-90deg);
          filter: blur(10px);
          animation: 
            heavyRise 1.4s cubic-bezier(0.19, 1, 0.22, 1) forwards,
            liquidFlow 8s ease-in-out infinite;
          
          /* ✨ DEEP SEA BLUE GRADIENT */
          background: linear-gradient(
            to bottom,
            #0ea5e9 0%,   /* Bright surface blue */
            #0c4a6e 50%,  /* Deep sea blue */
            #082f49 100%  /* Midnight blue base */
          );
          background-size: 100% 200%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;

          /* Subtle 3D Depth for white background */
          text-shadow: 0 10px 20px rgba(12, 74, 110, 0.15);
        }

        /* INCREASED ANIMATION TRANSITIONS */
        @keyframes heavyRise {
          to { 
            opacity: 1; 
            transform: translateY(0) rotateX(0deg); 
            filter: blur(0);
          }
        }

        @keyframes liquidFlow {
          0%, 100% { background-position: 50% 0%; }
          50% { background-position: 50% 100%; }
        }

        .animate-fade-in-long {
          opacity: 0;
          transform: translateY(20px);
          animation: slowFade 2s ease-out forwards;
        }

        .animate-grow-width-long {
          width: 0;
          animation: slowGrow 1.5s cubic-bezier(0.65, 0, 0.35, 1) forwards;
        }

        .animate-reveal-text-long {
          opacity: 0;
          animation: slowReveal 2.5s ease-out forwards;
        }

        @keyframes slowFade {
          to { opacity: 0.8; transform: translateY(0); }
        }

        @keyframes slowGrow {
          to { width: 200px; }
        }

        @keyframes slowReveal {
          to { opacity: 0.6; }
        }
      `}</style>
    </section>
  );
};

export default CodeFusionHero;