import React from 'react';
import { Mail, Phone, MessageCircle, Instagram } from 'lucide-react';

const AcademicContact = () => {
  const serifStyle = { fontFamily: '"Times New Roman", Times, serif' };

  const coordinators = [
    {
      role: "Faculty Coordinator",
      name: "Dr. Rajesh Kumar",
      phone: "+91 98765 43210"
    },
    {
      role: "Faculty Coordinator",
      name: "Dr. Priya Sharma",
      phone: "+91 98765 43211"
    },
    {
      role: "Student Coordinator",
      name: "Arjun Patel",
      phone: "+91 98765 43212"
    },
    {
      role: "Student Coordinator",
      name: "Meera Singh",
      phone: "+91 98765 43213"
    }
  ];

  return (
    <section className="w-full bg-[#FFFFFF] py-12 md:py-24 overflow-hidden">
      <div className="max-w-[1120px] mx-auto px-6 md:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-16">
          <h2 
            style={serifStyle}
            className="text-3xl md:text-4xl lg:text-[42px] font-semibold text-[#0B3C5D] leading-tight mb-4"
          >
            Get in Touch
          </h2>
          <div className="w-24 h-1 bg-[#0B3C5D] mx-auto mb-6"></div>
          <p 
            style={serifStyle}
            className="text-base md:text-lg text-[#6B7280] max-w-2xl mx-auto leading-relaxed italic"
          >
            Reach out for queries, academic collaborations, or event-related information. 
            Our team typically responds within two business days.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Email Section */}
          <div className="bg-white border-[1.5px] border-[#0B3C5D] rounded-[12px] p-6 md:p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-[#0B3C5D] flex items-center justify-center">
                <Mail size={22} className="text-white" />
              </div>
              <h3 style={serifStyle} className="text-xl md:text-2xl font-bold text-[#0B3C5D]">
                Email Us
              </h3>
            </div>
            <a 
              href="mailto:contact@university.edu" 
              style={serifStyle}
              className="text-lg md:text-xl text-[#6B7280] hover:text-[#0B3C5D] transition-colors underline underline-offset-4 block"
            >
              contact@university.edu
            </a>
          </div>

          {/* Social Links Section */}
          <div className="bg-white border-[1.5px] border-[#0B3C5D] rounded-[12px] p-6 md:p-8 shadow-sm">
            <h3 style={serifStyle} className="text-xl md:text-2xl font-bold text-[#0B3C5D] mb-6">
              Connect With Us
            </h3>
            <div className="flex items-center gap-6">
              <a
                href="#"
                className="flex items-center gap-3 group"
                aria-label="WhatsApp Group"
              >
                <div className="w-12 h-12 rounded-full bg-[#25D366] flex items-center justify-center group-hover:scale-110 transition-transform">
                  <MessageCircle size={22} className="text-white" />
                </div>
                <span style={serifStyle} className="text-base font-semibold text-[#6B7280] group-hover:text-[#25D366] transition-colors">
                  WhatsApp Group
                </span>
              </a>
              
              <a
                href="#"
                className="flex items-center gap-3 group"
                aria-label="Instagram"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#F77737] flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Instagram size={22} className="text-white" />
                </div>
                <span style={serifStyle} className="text-base font-semibold text-[#6B7280] group-hover:text-[#833AB4] transition-colors">
                  Instagram
                </span>
              </a>
            </div>
          </div>

        </div>

        {/* Coordinators Section */}
        <div className="mt-12">
          <h3 
            style={serifStyle}
            className="text-2xl md:text-3xl font-bold text-[#0B3C5D] text-center mb-8"
          >
            Event Coordinators
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {coordinators.map((coordinator, index) => (
              <div 
                key={index}
                className="bg-white border-[1.5px] border-[#0B3C5D] rounded-[12px] p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <p 
                  style={serifStyle}
                  className="text-xs md:text-sm font-bold text-[#D97706] uppercase tracking-[0.2em] mb-3"
                >
                  {coordinator.role}
                </p>
                <h4 
                  style={serifStyle}
                  className="text-lg md:text-xl font-bold text-[#0B3C5D] mb-3"
                >
                  {coordinator.name}
                </h4>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#0B3C5D]/10 flex items-center justify-center">
                    <Phone size={18} className="text-[#0B3C5D]" />
                  </div>
                  <a 
                    href={`tel:${coordinator.phone.replace(/\s/g, '')}`}
                    style={serifStyle}
                    className="text-base md:text-lg text-[#6B7280] hover:text-[#0B3C5D] transition-colors"
                  >
                    {coordinator.phone}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default AcademicContact;