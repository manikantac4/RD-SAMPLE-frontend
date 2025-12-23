import React, { useState, useEffect } from 'react';
import { Users, DollarSign, Coffee, MapPin } from 'lucide-react';

const EventRegistration = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [prevTime, setPrevTime] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  const serifStyle = { fontFamily: '"Times New Roman", Times, serif' };

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
      <div className="evt-countdown-container">
        <div className="evt-countdown-box">
          <div className="evt-countdown-number">
            <div className={`evt-flip-card ${hasChanged ? 'evt-flipping' : ''}`}>
              <div className="evt-flip-card-inner">
                <div className="evt-flip-card-front">
                  <span style={serifStyle}>{String(prevValue).padStart(2, '0')}</span>
                </div>
                <div className="evt-flip-card-back">
                  <span style={serifStyle}>{String(value).padStart(2, '0')}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="evt-countdown-label" style={serifStyle}>{label}</div>
        </div>
      </div>
    );
  };

  const InfoCard = ({ icon: Icon, title, description }) => (
    <div className="evt-info-card">
      <div className="evt-card-content">
        <div className="evt-icon-wrapper">
          <Icon className="evt-card-icon" strokeWidth={2} />
        </div>
        <div className="evt-card-text">
          <h3 className="evt-card-title" style={serifStyle}>{title}</h3>
          <p className="evt-card-description" style={serifStyle}>{description}</p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="evt-event-section" style={serifStyle}>
      <div className="evt-container">
        {/* Header */}
        <div className="evt-header-section">
          <h1 className="evt-main-title" style={serifStyle}>Event Starts In</h1>
        </div>

        {/* Countdown Timer */}
        <div className="evt-countdown-wrapper">
          <CountdownUnit value={timeLeft.days} prevValue={prevTime.days} label="Days" />
          <CountdownUnit value={timeLeft.hours} prevValue={prevTime.hours} label="Hours" />
          <CountdownUnit value={timeLeft.minutes} prevValue={prevTime.minutes} label="Minutes" />
          <CountdownUnit value={timeLeft.seconds} prevValue={prevTime.seconds} label="Seconds" />
        </div>

        {/* Register Button */}
        <div className="evt-button-wrapper">
          <div className="evt-button-container">
            <button className="evt-register-button" style={serifStyle}>
              <span className="evt-button-shine"></span>
              <span className="evt-button-text">Register Now</span>
              <div className="evt-button-glow"></div>
            </button>
          </div>
        </div>

        {/* Info Cards */}
        <div className="evt-cards-grid">
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
        .evt-event-section {
          min-height: 100vh;
          background: #ffffff;
          padding: 50px 20px;
          font-family: 'Times New Roman', Times, serif;
        }

        .evt-container {
          max-width: 1100px;
          margin: 0 auto;
        }

        .evt-header-section {
          text-align: center;
          margin-bottom: 40px;
        }

        .evt-main-title {
          font-size: 42px;
          font-weight: 700;
          color: #1a2b4a;
          letter-spacing: -0.5px;
        }

        .evt-countdown-wrapper {
          display: flex;
          justify-content: center;
          gap: 16px;
          margin-bottom: 45px;
          flex-wrap: wrap;
        }

        .evt-countdown-container {
          perspective: 1000px;
        }

        .evt-countdown-box {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .evt-countdown-number {
          position: relative;
          width: 105px;
          height: 105px;
          margin-bottom: 12px;
        }

        .evt-flip-card {
          position: relative;
          width: 100%;
          height: 100%;
          transform-style: preserve-3d;
        }

        .evt-flip-card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          transform-style: preserve-3d;
          transform-origin: center;
        }

        .evt-flip-card.evt-flipping .evt-flip-card-inner {
          animation: evt-flipAnimation 0.6s ease-in-out;
        }

        @keyframes evt-flipAnimation {
          0% { transform: rotateX(0deg); }
          50% { transform: rotateX(90deg); }
          100% { transform: rotateX(0deg); }
        }

        .evt-flip-card-front,
        .evt-flip-card-back {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          background: #ffffff;
          border: 2px solid #e2e8f0;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 12px rgba(26, 43, 74, 0.08);
        }

        .evt-flip-card-front { transform: rotateX(0deg); }
        .evt-flip-card-back { transform: rotateX(180deg); }

        .evt-flip-card.evt-flipping .evt-flip-card-front { animation: evt-flipFront 0.6s ease-in-out; }
        .evt-flip-card.evt-flipping .evt-flip-card-back { animation: evt-flipBack 0.6s ease-in-out; }

        @keyframes evt-flipFront {
          0% { transform: rotateX(0deg); opacity: 1; }
          50% { transform: rotateX(90deg); opacity: 0; }
          100% { transform: rotateX(90deg); opacity: 0; }
        }

        @keyframes evt-flipBack {
          0% { transform: rotateX(-90deg); opacity: 0; }
          50% { transform: rotateX(-90deg); opacity: 0; }
          100% { transform: rotateX(0deg); opacity: 1; }
        }

        .evt-flip-card-front span,
        .evt-flip-card-back span {
          font-size: 48px;
          font-weight: 700;
          color: #1a2b4a;
        }

        .evt-countdown-label {
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.8px;
          color: #64748b;
          text-transform: capitalize;
        }

        .evt-button-wrapper {
          display: flex;
          justify-content: center;
          margin-bottom: 50px;
        }

        .evt-button-container {
          position: relative;
        }

        .evt-register-button {
          position: relative;
          padding: 18px 56px;
          font-size: 20px;
          font-weight: 700;
          color: #ffffff;
          background: linear-gradient(135deg, #7c3aed 0%, #5b21b6 50%, #6b21a8 100%);
          border: none;
          border-radius: 12px;
          cursor: pointer;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 
            0 8px 24px rgba(124, 58, 237, 0.35),
            0 4px 12px rgba(124, 58, 237, 0.25),
            inset 0 1px 0 rgba(255, 255, 255, 0.2);
        }

        .evt-register-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
          transition: left 0.6s ease;
        }

        .evt-register-button:hover::before { left: 100%; }

        .evt-register-button:hover {
          transform: translateY(-3px) scale(1.02);
          box-shadow: 
            0 14px 35px rgba(124, 58, 237, 0.45),
            0 6px 18px rgba(124, 58, 237, 0.35),
            inset 0 1px 0 rgba(255, 255, 255, 0.3);
        }

        .evt-register-button:active {
          transform: translateY(-1px) scale(1.01);
          box-shadow: 
            0 6px 18px rgba(124, 58, 237, 0.4),
            0 3px 10px rgba(124, 58, 237, 0.3);
        }

        .evt-button-shine {
          position: absolute;
          top: 0;
          left: -75%;
          width: 50%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
          transform: skewX(-25deg);
          animation: evt-shine 3s infinite;
        }

        @keyframes evt-shine {
          0%, 100% { left: -75%; }
          50% { left: 125%; }
        }

        .evt-button-text {
          position: relative;
          z-index: 2;
          text-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
        }

        .evt-button-glow {
          position: absolute;
          inset: -2px;
          border-radius: 12px;
          background: linear-gradient(135deg, #7c3aed, #6b21a8);
          opacity: 0;
          filter: blur(12px);
          z-index: -1;
          transition: opacity 0.4s ease;
        }

        .evt-register-button:hover .evt-button-glow { opacity: 0.8; }

        .evt-cards-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 18px;
          max-width: 950px;
          margin: 0 auto;
        }

        .evt-info-card {
          background: #ffffff;
          border: 2px solid #e2e8f0;
          border-radius: 16px;
          padding: 26px 24px;
          box-shadow: 0 3px 10px rgba(26, 43, 74, 0.06);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          min-height: 125px;
        }

        .evt-info-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 32px rgba(26, 43, 74, 0.12);
          border-color: #cbd5e1;
        }

        .evt-card-content {
          display: flex;
          align-items: flex-start;
          gap: 18px;
          height: 100%;
        }

        .evt-icon-wrapper {
          flex-shrink: 0;
          width: 52px;
          height: 52px;
          border-radius: 12px;
          background: linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }

        .evt-info-card:hover .evt-icon-wrapper {
          background: linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%);
          transform: scale(1.08) rotate(5deg);
        }

        .evt-card-icon {
          width: 24px;
          height: 24px;
          color: #1a2b4a;
        }

        .evt-card-text {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .evt-card-title {
          font-size: 17px;
          font-weight: 700;
          color: #1a2b4a;
          margin-bottom: 6px;
          line-height: 1.3;
        }

        .evt-card-description {
          font-size: 14.5px;
          color: #64748b;
          line-height: 1.5;
          font-weight: 500;
        }

        @media (max-width: 768px) {
          .evt-main-title { font-size: 34px; }
          .evt-countdown-wrapper { gap: 14px; margin-bottom: 40px; }
          .evt-countdown-number { width: 90px; height: 90px; margin-bottom: 10px; }
          .evt-flip-card-front span, .evt-flip-card-back span { font-size: 40px; }
          .evt-countdown-label { font-size: 12px; }
          .evt-register-button { padding: 16px 44px; font-size: 18px; }
          .evt-button-wrapper { margin-bottom: 40px; }
          .evt-cards-grid { grid-template-columns: 1fr; gap: 16px; }
          .evt-info-card { padding: 24px 20px; min-height: 115px; }
          .evt-icon-wrapper { width: 48px; height: 48px; }
          .evt-card-icon { width: 22px; height: 22px; }
        }

        @media (max-width: 480px) {
          .evt-event-section { padding: 40px 16px; }
          .evt-header-section { margin-bottom: 35px; }
          .evt-main-title { font-size: 30px; }
          .evt-countdown-number { width: 80px; height: 80px; }
          .evt-flip-card-front span, .evt-flip-card-back span { font-size: 36px; }
          .evt-register-button { padding: 15px 38px; font-size: 17px; }
          .evt-info-card { padding: 22px 18px; }
        }
      `}</style>
    </div>
  );
};

export default EventRegistration;