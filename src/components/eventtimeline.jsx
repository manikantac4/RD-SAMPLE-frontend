import React, { useEffect, useState } from 'react';

const RDConclaveTimeline = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const events = [
    { date: "Dec 25", title: "Registration Opens", desc: "Official portal launches for team registration", icon: "unlock" },
    { date: "Jan 8", title: "Registration Closes", desc: "Final deadline for team submissions", icon: "lock" },
    { date: "Jan 9", title: "Shortlist Round", desc: "Shortlisting announcements released", icon: "clipboard" },
    { date: "Jan 10", title: "Results Announced", desc: "Selected teams revealed", icon: "check" },
    { date: "Jan 10", title: "Payment Unlocked", desc: "Payment gateway opens for fees", icon: "credit-card" },
    { date: "Jan 13", title: "Payment Closes", desc: "Final date to confirm participation", icon: "hourglass" },
    { date: "Jan 23", title: "Hackstart", desc: "Hackathon officially begins", icon: "rocket" },
    { date: "Jan 24", title: "Hack Kick-off", desc: "Main event day & submissions open", icon: "trophy" },
  ];

  const SVGIcon = ({ type }) => {
    const icons = {
      unlock: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
          <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
        </svg>
      ),
      lock: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
          <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
          <circle cx="12" cy="16" r="1"></circle>
        </svg>
      ),
      clipboard: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
          <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
          <line x1="9" y1="14" x2="15" y2="14"></line>
          <line x1="9" y1="10" x2="15" y2="10"></line>
        </svg>
      ),
      check: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
      ),
      "credit-card": (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect>
          <line x1="1" y1="10" x2="23" y2="10"></line>
        </svg>
      ),
      hourglass: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M6 2h12v8H6V2z"></path>
          <path d="M6 14h12v8H6v-8z"></path>
          <path d="M12 10v4"></path>
        </svg>
      ),
      rocket: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 17v3a1 1 0 0 0 1 1h2"></path>
          <path d="M20 17v3a1 1 0 0 1-1 1h-2"></path>
          <path d="M12 2v13"></path>
          <path d="M12 2l3.5 2.5M12 2l-3.5 2.5"></path>
          <circle cx="12" cy="7" r="2"></circle>
        </svg>
      ),
      trophy: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M6 9H4a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2"></path>
          <path d="M18 9h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2"></path>
          <path d="M8 3h8v3H8z"></path>
          <path d="M12 6v4M8 6v5a3 3 0 0 0 3 3h2a3 3 0 0 0 3-3v-5"></path>
          <line x1="8" y1="18" x2="16" y2="18"></line>
        </svg>
      ),
    };
    return icons[type] || null;
  };

  return (
    <div className="timeline-wrapper">
      <div className="timeline-container">
        <div className="header-section">
          <h1 className="main-title">RD Conclave 2025</h1>
          <p className="subtitle">Event Timeline & Roadmap</p>
        </div>

        <div className="timeline-content">
          {/* Desktop Timeline */}
          <div className="desktop-timeline">
            <div className={`timeline-line ${isLoaded ? 'line-animate' : ''}`}></div>

            <div className="timeline-events">
              {events.map((event, index) => (
                <div
                  key={index}
                  className={`timeline-event ${isLoaded ? 'event-visible' : ''}`}
                  style={{ transitionDelay: `${index * 80}ms` }}
                >
                  <div className={`event-marker ${isLoaded ? 'marker-pop' : ''}`} style={{ transitionDelay: `${index * 80}ms` }}>
                    <div className="marker-dot"></div>
                  </div>

                  <div className={`event-card ${index % 2 === 0 ? 'card-left' : 'card-right'}`}>
                    <div className="card-icon">
                      <SVGIcon type={event.icon} />
                    </div>
                    <div className="card-content">
                      <p className="event-date">{event.date}</p>
                      <h3 className="event-title">{event.title}</h3>
                      <p className="event-description">{event.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Timeline */}
          <div className="mobile-timeline">
            <div className={`mobile-line ${isLoaded ? 'mobile-line-animate' : ''}`}></div>

            {events.map((event, index) => (
              <div
                key={index}
                className={`mobile-event ${isLoaded ? 'mobile-event-visible' : ''}`}
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                <div className="mobile-marker"></div>
                <div className="mobile-card">
                  <div className="mobile-card-top">
                    <div className="mobile-icon">
                      <SVGIcon type={event.icon} />
                    </div>
                    <div>
                      <p className="mobile-date">{event.date}</p>
                      <h3 className="mobile-title">{event.title}</h3>
                    </div>
                  </div>
                  <p className="mobile-description">{event.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        * {
          box-sizing: border-box;
        }

        .timeline-wrapper {
          width: 100%;
          min-height: 100vh;
          background: #f5f7fa;
          padding: 80px 20px;
        }

        .timeline-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .header-section {
          text-align: center;
          margin-bottom: 100px;
          animation: slideDown 0.8s ease-out;
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .main-title {
          font-size: 48px;
          font-weight: 700;
          color: #003d82;
          margin: 0 0 12px 0;
          letter-spacing: -0.5px;
        }

        .subtitle {
          font-size: 16px;
          color: #5a6b7d;
          margin: 0;
          font-weight: 500;
        }

        .timeline-content {
          display: flex;
          justify-content: center;
        }

        /* Desktop Timeline */
        .desktop-timeline {
          display: flex;
          flex-direction: column;
          position: relative;
          width: 100%;
          max-width: 900px;
        }

        .timeline-line {
          position: absolute;
          top: 0;
          left: 50%;
          width: 2px;
          height: 0%;
          background: #003d82;
          transform: translateX(-50%);
          z-index: 1;
          transition: height 2.5s ease-out;
        }

        .line-animate {
          height: 100%;
        }

        .timeline-events {
          display: flex;
          flex-direction: column;
          gap: 80px;
          position: relative;
          z-index: 2;
        }

        .timeline-event {
          display: flex;
          gap: 50px;
          align-items: center;
          opacity: 0;
          transition: opacity 0.6s ease-out;
        }

        .event-visible {
          opacity: 1;
        }

        .timeline-event:nth-child(odd) {
          flex-direction: row;
        }

        .timeline-event:nth-child(even) {
          flex-direction: row-reverse;
        }

        .event-marker {
          position: relative;
          flex-shrink: 0;
          z-index: 3;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .marker-pop {
          animation: popIn 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        @keyframes popIn {
          0% {
            transform: scale(0);
          }
          100% {
            transform: scale(1);
          }
        }

        .marker-dot {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: white;
          border: 3px solid #003d82;
          box-shadow: 0 0 0 4px #f5f7fa, 0 4px 12px rgba(0, 61, 130, 0.15);
        }

        .event-card {
          flex: 1;
          max-width: 340px;
          background: white;
          border-radius: 8px;
          padding: 28px 24px;
          box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
          transition: all 0.4s ease;
          border-left: 4px solid #003d82;
          display: flex;
          gap: 16px;
          align-items: flex-start;
        }

        .event-card:hover {
          box-shadow: 0 8px 24px rgba(0, 61, 130, 0.12);
          transform: translateY(-2px);
        }

        .card-icon {
          width: 44px;
          height: 44px;
          background: #e8eff9;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          color: #003d82;
        }

        .card-icon svg {
          width: 22px;
          height: 22px;
          stroke-linecap: round;
          stroke-linejoin: round;
        }

        .card-content {
          flex: 1;
        }

        .event-date {
          color: #003d82;
          font-size: 12px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.8px;
          margin: 0 0 6px 0;
        }

        .event-title {
          color: #003d82;
          font-size: 18px;
          font-weight: 700;
          margin: 0 0 8px 0;
        }

        .event-description {
          color: #5a6b7d;
          font-size: 13px;
          margin: 0;
          line-height: 1.5;
        }

        /* Mobile Timeline */
        .mobile-timeline {
          display: none;
          flex-direction: column;
          position: relative;
          width: 100%;
        }

        .mobile-line {
          position: absolute;
          top: 0;
          left: 18px;
          width: 2px;
          height: 0%;
          background: #003d82;
          transition: height 2.5s ease-out;
        }

        .mobile-line-animate {
          height: 100%;
        }

        .mobile-event {
          display: flex;
          gap: 16px;
          margin-bottom: 48px;
          opacity: 0;
          transition: opacity 0.6s ease-out;
          position: relative;
          z-index: 2;
        }

        .mobile-event-visible {
          opacity: 1;
        }

        .mobile-marker {
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background: white;
          border: 3px solid #003d82;
          flex-shrink: 0;
          margin-top: 4px;
          box-shadow: 0 0 0 3px #f5f7fa, 0 2px 8px rgba(0, 61, 130, 0.12);
        }

        .mobile-card {
          flex: 1;
          background: white;
          border-radius: 8px;
          padding: 20px;
          border-left: 4px solid #003d82;
          box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
          transition: all 0.3s ease;
        }

        .mobile-card:hover {
          box-shadow: 0 6px 18px rgba(0, 61, 130, 0.1);
          transform: translateY(-2px);
        }

        .mobile-card-top {
          display: flex;
          gap: 12px;
          align-items: flex-start;
          margin-bottom: 12px;
        }

        .mobile-icon {
          width: 36px;
          height: 36px;
          background: #e8eff9;
          border-radius: 6px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          color: #003d82;
        }

        .mobile-icon svg {
          width: 18px;
          height: 18px;
          stroke-linecap: round;
          stroke-linejoin: round;
        }

        .mobile-date {
          color: #003d82;
          font-size: 11px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.6px;
          margin: 0 0 4px 0;
        }

        .mobile-title {
          color: #003d82;
          font-size: 16px;
          font-weight: 700;
          margin: 0;
        }

        .mobile-description {
          color: #5a6b7d;
          font-size: 13px;
          margin: 0;
          line-height: 1.5;
        }

        /* Responsive Design */
        @media (max-width: 1024px) {
          .main-title {
            font-size: 40px;
          }

          .timeline-events {
            gap: 70px;
          }

          .event-card {
            max-width: 300px;
            padding: 24px 20px;
          }
        }

        @media (max-width: 768px) {
          .timeline-wrapper {
            padding: 60px 16px;
          }

          .header-section {
            margin-bottom: 60px;
          }

          .main-title {
            font-size: 36px;
          }

          .subtitle {
            font-size: 15px;
          }

          .desktop-timeline {
            display: none;
          }

          .mobile-timeline {
            display: flex;
          }
        }

        @media (max-width: 480px) {
          .timeline-wrapper {
            padding: 40px 12px;
          }

          .main-title {
            font-size: 28px;
          }

          .header-section {
            margin-bottom: 40px;
          }

          .mobile-card {
            padding: 16px;
          }

          .mobile-icon {
            width: 32px;
            height: 32px;
          }

          .mobile-title {
            font-size: 14px;
          }

          .mobile-description {
            font-size: 12px;
          }

          .mobile-event {
            margin-bottom: 40px;
          }
        }
      `}</style>
    </div>
  );
};

export default RDConclaveTimeline;
