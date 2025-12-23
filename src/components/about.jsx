import React, { useState, useEffect } from 'react';
import { Users, DollarSign, Coffee, MapPin } from 'lucide-react';

const EventRegistration = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [prevTime, setPrevTime] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const targetDate = new Date('2026-01-23T00:00:00+05:30');
      const now = new Date();
      const difference = targetDate - now;

      if (difference > 0) {
        const newTime = {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        };
        
        setPrevTime(timeLeft);
        setTimeLeft(newTime);
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const CountdownUnit = ({ value, prevValue, label }) => {
    const hasChanged = value !== prevValue;
    
    return (
      <div className="countdown-container">
        <div className="countdown-box">
          <div className="countdown-number">
            <div className={`flip-card ${hasChanged ? 'flipping' : ''}`}>
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <span>{String(prevValue).padStart(2, '0')}</span>
                </div>
                <div className="flip-card-back">
                  <span>{String(value).padStart(2, '0')}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="countdown-label">{label}</div>
        </div>
      </div>
    );
  };

  const InfoCard = ({ icon: Icon, title, description }) => (
    <div className="info-card">
      <div className="card-content">
        <div className="icon-wrapper">
          <Icon className="card-icon" strokeWidth={2} />
        </div>
        <div className="card-text">
          <h3 className="card-title">{title}</h3>
          <p className="card-description">{description}</p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="event-section">
      <div className="container">
        
        {/* Header */}
        <div className="header-section">
          <h1 className="main-title">Event Starts In</h1>
        </div>

        {/* Countdown Timer */}
        <div className="countdown-wrapper">
          <CountdownUnit value={timeLeft.days} prevValue={prevTime.days} label="Days" />
          <CountdownUnit value={timeLeft.hours} prevValue={prevTime.hours} label="Hours" />
          <CountdownUnit value={timeLeft.minutes} prevValue={prevTime.minutes} label="Minutes" />
          <CountdownUnit value={timeLeft.seconds} prevValue={prevTime.seconds} label="Seconds" />
        </div>

        {/* Register Button */}
        <div className="button-wrapper">
          <div className="button-container">
            <button className="register-button">
              <span className="button-shine"></span>
              <span className="button-text">Register Now</span>
              <div className="button-glow"></div>
            </button>
          </div>
        </div>

        {/* Info Cards */}
        <div className="cards-grid">
          <InfoCard 
            icon={Users}
            title="Team Size"
            description="3–4 Members per Team"
          />
          <InfoCard 
            icon={DollarSign}
            title="Registration Fee"
            description="₹500 per Team"
          />
          <InfoCard 
            icon={Coffee}
            title="Food & Refreshments"
            description="Food & Snacks Provided"
          />
          <InfoCard 
            icon={MapPin}
            title="Venue"
            description="Siddhartha Academy of Higher Education, Vijayawada"
          />
        </div>

      </div>

      <style jsx>{`
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        .event-section {
          min-height: 100vh;
          background: #ffffff;
          padding: 70px 20px;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .header-section {
          text-align: center;
          margin-bottom: 50px;
        }

        .main-title {
          font-size: 44px;
          font-weight: 700;
          color: #1a2b4a;
          letter-spacing: -0.5px;
        }

        .countdown-wrapper {
          display: flex;
          justify-content: center;
          gap: 24px;
          margin-bottom: 60px;
          flex-wrap: wrap;
        }

        .countdown-container {
          perspective: 1000px;
        }

        .countdown-box {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .countdown-number {
          position: relative;
          width: 120px;
          height: 120px;
          margin-bottom: 16px;
        }

        .flip-card {
          position: relative;
          width: 100%;
          height: 100%;
          transform-style: preserve-3d;
        }

        .flip-card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          transform-style: preserve-3d;
          transform-origin: center;
        }

        .flip-card.flipping .flip-card-inner {
          animation: flipAnimation 0.6s ease-in-out;
        }

        @keyframes flipAnimation {
          0% {
            transform: rotateX(0deg);
          }
          50% {
            transform: rotateX(90deg);
          }
          100% {
            transform: rotateX(0deg);
          }
        }

        .flip-card-front,
        .flip-card-back {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          background: #ffffff;
          border: 2px solid #e2e8f0;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 6px 16px rgba(26, 43, 74, 0.1);
        }

        .flip-card-front {
          transform: rotateX(0deg);
        }

        .flip-card-back {
          transform: rotateX(180deg);
        }

        .flip-card.flipping .flip-card-front {
          animation: flipFront 0.6s ease-in-out;
        }

        .flip-card.flipping .flip-card-back {
          animation: flipBack 0.6s ease-in-out;
        }

        @keyframes flipFront {
          0% {
            transform: rotateX(0deg);
            opacity: 1;
          }
          50% {
            transform: rotateX(90deg);
            opacity: 0;
          }
          100% {
            transform: rotateX(90deg);
            opacity: 0;
          }
        }

        @keyframes flipBack {
          0% {
            transform: rotateX(-90deg);
            opacity: 0;
          }
          50% {
            transform: rotateX(-90deg);
            opacity: 0;
          }
          100% {
            transform: rotateX(0deg);
            opacity: 1;
          }
        }

        .flip-card-front span,
        .flip-card-back span {
          font-size: 52px;
          font-weight: 700;
          color: #1a2b4a;
        }

        .countdown-label {
          font-size: 14px;
          font-weight: 600;
          letter-spacing: 0.8px;
          color: #64748b;
          text-transform: capitalize;
        }

        .button-wrapper {
          display: flex;
          justify-content: center;
          margin-bottom: 70px;
        }

        .button-container {
          position: relative;
        }

        .register-button {
          position: relative;
          padding: 20px 64px;
          font-size: 22px;
          font-weight: 700;
          color: #ffffff;
          background: linear-gradient(135deg, #7c3aed 0%, #5b21b6 50%, #6b21a8 100%);
          border: none;
          border-radius: 14px;
          cursor: pointer;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 
            0 10px 30px rgba(124, 58, 237, 0.35),
            0 4px 12px rgba(124, 58, 237, 0.25),
            inset 0 1px 0 rgba(255, 255, 255, 0.2);
        }

        .register-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
          transition: left 0.6s ease;
        }

        .register-button:hover::before {
          left: 100%;
        }

        .register-button:hover {
          transform: translateY(-4px) scale(1.02);
          box-shadow: 
            0 16px 40px rgba(124, 58, 237, 0.45),
            0 8px 20px rgba(124, 58, 237, 0.35),
            inset 0 1px 0 rgba(255, 255, 255, 0.3);
        }

        .register-button:active {
          transform: translateY(-2px) scale(1.01);
          box-shadow: 
            0 8px 20px rgba(124, 58, 237, 0.4),
            0 4px 12px rgba(124, 58, 237, 0.3);
        }

        .button-shine {
          position: absolute;
          top: 0;
          left: -75%;
          width: 50%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
          transform: skewX(-25deg);
          animation: shine 3s infinite;
        }

        @keyframes shine {
          0%, 100% {
            left: -75%;
          }
          50% {
            left: 125%;
          }
        }

        .button-text {
          position: relative;
          z-index: 2;
          text-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
        }

        .button-glow {
          position: absolute;
          inset: -2px;
          border-radius: 14px;
          background: linear-gradient(135deg, #7c3aed, #6b21a8);
          opacity: 0;
          filter: blur(12px);
          z-index: -1;
          transition: opacity 0.4s ease;
        }

        .register-button:hover .button-glow {
          opacity: 0.8;
        }

        .cards-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
          max-width: 1000px;
          margin: 0 auto;
        }

        .info-card {
          background: #ffffff;
          border: 2px solid #e2e8f0;
          border-radius: 20px;
          padding: 32px 28px;
          box-shadow: 0 4px 12px rgba(26, 43, 74, 0.06);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          min-height: 140px;
        }

        .info-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 16px 40px rgba(26, 43, 74, 0.14);
          border-color: #cbd5e1;
        }

        .card-content {
          display: flex;
          align-items: flex-start;
          gap: 20px;
          height: 100%;
        }

        .icon-wrapper {
          flex-shrink: 0;
          width: 56px;
          height: 56px;
          border-radius: 14px;
          background: linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }

        .info-card:hover .icon-wrapper {
          background: linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%);
          transform: scale(1.08) rotate(5deg);
        }

        .card-icon {
          width: 26px;
          height: 26px;
          color: #1a2b4a;
        }

        .card-text {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .card-title {
          font-size: 18px;
          font-weight: 700;
          color: #1a2b4a;
          margin-bottom: 8px;
          line-height: 1.3;
        }

        .card-description {
          font-size: 15px;
          color: #64748b;
          line-height: 1.5;
          font-weight: 500;
        }

        @media (max-width: 768px) {
          .main-title {
            font-size: 34px;
          }

          .countdown-wrapper {
            gap: 16px;
          }

          .countdown-number {
            width: 95px;
            height: 95px;
          }

          .flip-card-front span,
          .flip-card-back span {
            font-size: 42px;
          }

          .countdown-label {
            font-size: 12px;
          }

          .register-button {
            padding: 18px 48px;
            font-size: 19px;
          }

          .cards-grid {
            grid-template-columns: 1fr;
            gap: 18px;
          }

          .info-card {
            padding: 28px 24px;
            min-height: 120px;
          }

          .icon-wrapper {
            width: 52px;
            height: 52px;
          }

          .card-icon {
            width: 24px;
            height: 24px;
          }
        }

        @media (max-width: 480px) {
          .event-section {
            padding: 50px 16px;
          }

          .main-title {
            font-size: 30px;
          }

          .countdown-number {
            width: 80px;
            height: 80px;
          }

          .flip-card-front span,
          .flip-card-back span {
            font-size: 36px;
          }

          .register-button {
            padding: 16px 40px;
            font-size: 17px;
          }
        }
      `}</style>
    </div>
  );
};

export default EventRegistration;