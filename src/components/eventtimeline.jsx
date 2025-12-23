import React from 'react';
import { 
ClipboardCheck, CalendarX, Filter, 
Megaphone, CreditCard, Hourglass, Rocket 
} from 'lucide-react';

const TimelineData = [
{ date: "DEC 25", title: "Registration Opens", icon: ClipboardCheck, desc: "Portal live for team details and problem statements." },
{ date: "JAN 08", title: "Registration Closes", icon: CalendarX, desc: "Final deadline; no late entries allowed." },
{ date: "JAN 09", title: "Shortlisting Round", icon: Filter, desc: "Technical evaluation by expert panels." },
{ date: "JAN 10", title: "Results Announcement", icon: Megaphone, desc: "Teams cleared for participation announced." },
{ date: "JAN 10", title: "Payment Window", icon: CreditCard, desc: "Fee submission enabled for shortlisted candidates." },
{ date: "JAN 13", title: "Payment Deadline", icon: Hourglass, desc: "Final cutoff to secure participation slots." },
{ date: "JAN 23–24", title: "Hackathon Kickoff", icon: Rocket, desc: "24-hour innovation sprint and technical demos." },
];

const HackathonTimeline = () => {
return (
<div className="w-full bg-white py-12 px-4 md:px-8 overflow-hidden" style={{ fontFamily: 'serif' }}>
<style dangerouslySetInnerHTML={{ __html: `
@keyframes lineFlow { from { width: 0; } to { width: 100%; } }
@keyframes fadeInUp { from { opacity: 0; transform: translateY(15px); } to { opacity: 1; transform: translateY(0); } }
@keyframes fadeInDown { from { opacity: 0; transform: translateY(-15px); } to { opacity: 1; transform: translateY(0); } }
.animate-line { animation: lineFlow 1.5s ease-in-out forwards; }
.card-top { animation: fadeInDown 0.5s ease-out forwards; }
.card-bottom { animation: fadeInUp 0.5s ease-out forwards; }

.timeline-card { transition: all 0.3s ease-in-out; }
.timeline-card:hover {
background-color: #0B3C5D !important;
transform: translateY(index % 2 === 0 ? -5 : 5) scale(1.02);
z-index: 50;
}
.timeline-card:hover * { color: #FFFFFF !important; border-color: #FFFFFF !important; }
.timeline-card:hover .arrow-down { border-top-color: #0B3C5D !important; }
.timeline-card:hover .arrow-up { border-bottom-color: #0B3C5D !important; }
`}} />

{/* Section Header */}
<div className="max-w-4xl mx-auto text-center mb-16 md:mb-24">
<h2 className="text-4xl md:text-5xl font-bold text-[#0B3C5D] mb-3">
Event Schedule
</h2>
<div className="w-24 h-1 bg-[#0B3C5D] mx-auto mb-4"></div>
<p className="text-[#4A6FA5] tracking-[0.2em] uppercase text-[10px] md:text-xs font-semibold">
Academic Research & Development Conclave
</p>
</div>

<div className="relative max-w-[1300px] mx-auto">
{/* Desktop/Large Tablet Horizontal Layout */}
<div className="hidden lg:block">
{/* Central Axis */}
<div className="absolute top-1/2 left-0 w-full h-[2px] bg-[#0B3C5D]/10 -translate-y-1/2">
<div className="h-full bg-[#0B3C5D] animate-line" />
</div>

<div className="flex justify-between items-center relative min-h-[450px]">
{TimelineData.map((item, index) => {
const isTop = index % 2 === 0; 
const Icon = item.icon;

return (
<div key={item.date + index} className="relative flex flex-col items-center flex-1">
{/* Central Node with Date */}
<div className="w-16 h-16 rounded-full border-2 border-[#0B3C5D] bg-white flex items-center justify-center text-[#0B3C5D] font-bold text-[10px] shadow-sm z-30 whitespace-nowrap px-2">
{item.date}
</div>

{/* Alternating Content Card */}
<div 
className={`timeline-card absolute w-48 p-4 bg-white border-[1.5px] border-[#0B3C5D] rounded-lg shadow-sm
${isTop ? 'top-[-140px] card-top' : 'bottom-[-140px] card-bottom'}`}
style={{ animationDelay: `${0.1 * index}s`, opacity: 0 }}
>
{/* Directional Arrow */}
<div className={`absolute left-1/2 -translate-x-1/2 w-0 h-0 
border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent
${isTop 
? 'border-t-[8px] border-t-[#0B3C5D] -bottom-[8px] arrow-down' 
: 'border-b-[8px] border-b-[#0B3C5D] -top-[8px] arrow-up'}`} 
/>

<div className="flex items-center gap-2 mb-2 border-b border-[#0B3C5D]/10 pb-2 hover:cursor-pointer" >
<Icon size={18} className="text-[#0B3C5D] shrink-0" strokeWidth={2} />
<h3 className="text-[#0B3C5D] font-bold text-sm uppercase leading-tight">
{item.title}
</h3>
</div>
<p className="text-[#4A6FA5] text-sm leading-snug">
{item.desc}
</p>
</div>
</div>
);
})}
</div>
</div>

{/* Mobile & Tablet Vertical Layout */}
<div className="lg:hidden flex flex-col space-y-8 relative before:absolute before:left-6 before:top-0 before:h-full before:w-[2px] before:bg-[#0B3C5D]/20">
{TimelineData.map((item, index) => {
const Icon = item.icon;
return (
<div key={item.date + index} className="relative pl-16 group">
{/* Date Node */}
<div className="absolute left-0 top-2 w-12 h-12 rounded-full border-2 border-[#0B3C5D] bg-white z-10 flex items-center justify-center text-[#0B3C5D] font-bold text-[9px] whitespace-nowrap px-1">
{item.date}
</div>
{/* Content Box */}
<div className="bg-white border border-gray-200 p-5 rounded-xl shadow-sm hover:border-[#0B3C5D] transition-all">
<div className="flex items-center justify-end mb-2">
<Icon size={18} className="text-[#0B3C5D]" strokeWidth={1.5} />
</div>
<h3 className="text-[#0B3C5D] font-bold text-lg mb-1">{item.title}</h3>
<p className="text-[#4A6FA5] text-sm leading-relaxed">{item.desc}</p>
</div>
</div>
);
})}
</div>
</div>
</div>
);
};

export default HackathonTimeline;