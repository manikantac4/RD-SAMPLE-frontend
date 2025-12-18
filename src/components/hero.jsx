import React, { useEffect, useRef } from "react";
import handImg from "./assets/hand.png";

const CodeFusionHero = () => {
  const canvasRef = useRef(null);

  /* ================= BACKGROUND PARTICLES ================= */
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationId;
    const dpr = window.devicePixelRatio || 1;

    const particles = [];
    const COUNT = 140;

    const resize = () => {
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = "100%";
      canvas.style.height = "100%";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    class Particle {
      constructor() {
        this.reset();
      }
      reset() {
        this.x = Math.random() * window.innerWidth;
        this.y = Math.random() * window.innerHeight;
        this.r = Math.random() * 1.2 + 0.6;
        this.vy = Math.random() * 0.25 + 0.05;
        this.vx = Math.random() * 0.1 - 0.05;
        this.a = Math.random() * 0.2 + 0.05;
      }
      update() {
        this.y -= this.vy;
        this.x += this.vx;
        if (this.y < -20) this.y = window.innerHeight + 20;
      }
      draw() {
        ctx.fillStyle = `rgba(150,150,150,${this.a})`;
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
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        p.update();
        p.draw();
      });
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

  /* ================= IMAGE HAND ================= */
  const ImageHand = ({ side }) => {
    const isLeft = side === "left";

    return (
      <div
        className={`
          absolute top-[45%] -translate-y-1/2
          ${isLeft ? "left-[-6vw]" : "right-[-6vw]"}
          w-[34vw] max-w-[520px]
          opacity-80 hidden md:block
        `}
      >
        <img
          src={handImg}
          alt="Particle Hand"
          className={`w-full h-auto ${!isLeft ? "scale-x-[-1]" : ""}`}
        />

        {/* Fingertip glow */}
        <div
          className={`
            absolute top-[38%]
            ${isLeft ? "right-[6%]" : "left-[6%]"}
            w-4 h-4
            bg-violet-500
            rounded-full
            blur-md
            animate-pulse
          `}
        />
      </div>
    );
  };

  return (
    <section className="relative w-full h-screen bg-white overflow-hidden flex items-center justify-center font-serif">
      {/* Background particles */}
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />

      {/* Soft center highlight */}
      <div className="absolute w-[520px] h-[260px] bg-[#f2f2f2] blur-3xl opacity-70" />

      {/* CONTENT */}
      <div className="relative z-10 text-center px-6 animate-fadeIn">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#1f1f1f]">
          CODEFUSION
        </h1>

        <p className="mt-4 text-lg md:text-xl tracking-[0.28em] uppercase text-[#5f5f5f]">
          January 23–24, 2026
        </p>

        <div className="h-px w-24 bg-[#9a9a9a] mx-auto mt-6 opacity-60" />

        <p className="mt-4 text-xs md:text-sm italic tracking-widest text-[#7a7a7a]">
          Innovation with Discipline • Academic Hackathon
        </p>
      </div>

      {/* HANDS */}
      <ImageHand side="left" />
      <ImageHand side="right" />

      {/* Bottom fade */}
      <div className="absolute bottom-0 w-full h-40 bg-gradient-to-t from-[#f5f5f5] to-transparent" />

      {/* ANIMATIONS */}
      <style jsx>{`
        .animate-fadeIn {
          animation: fadeIn 1.6s ease forwards;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default CodeFusionHero;