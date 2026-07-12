import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ShieldCheck, Users, Award } from "lucide-react";
import Seo from "@/components/Seo";

const stats = [
  { label: "Active Nodes", value: "10k+" },
  { label: "Global Partners", value: "50+" },
  { label: "Core Uptime", value: "99.99%" },
  { label: "Data Integrity", value: "SOC-2" },
];

const values = [
  {
    icon: ShieldCheck,
    title: "Zero-Trust Security",
    desc: "We treat data privacy as foundational. Our Zero-Trust architecture ensures every bit is encrypted and every interaction is authenticated.",
    color: "cyan"
  },
  {
    icon: Users,
    title: "User-Centric Complexity",
    desc: "We embrace complexity to simplify user experience. Powerful enterprise capabilities shouldn't mean a steep learning curve.",
    color: "magenta"
  },
  {
    icon: Award,
    title: "Atomic Excellence",
    desc: "Engineering at LifeBox means writing atomic, resilient, and high-performance code that stands the test of global scale.",
    color: "cyan"
  }
];

const About = () => {
  return (
    <div className="min-h-screen pt-24 pb-12 flex flex-col items-center">
      <Seo title="Our Protocol" description="LifeBox NextGen is an enterprise technology company building the digital backbone for modern AI institutions." />
      
      <div className="container mx-auto max-w-7xl px-6">
        
        <div className="text-center mb-20 mt-8 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-[300px] bg-cyan-500/10 rounded-full blur-[80px] -z-10 pointer-events-none"></div>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-cyan-400/30 bg-cyan-400/5 text-cyan-400 text-xs font-bold uppercase tracking-widest mb-6">
            <span className="w-2 h-2 bg-cyan-400 shadow-[0_0_8px_#00f0ff] animate-pulse"></span>
            System Protocol
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white tracking-tight uppercase">
            LifeBox <span className="neon-text-magenta">NextGen</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto font-['Inter']">
            Enterprise AI infrastructure should be invisible, resilient, and undeniably powerful. We build the architecture of tomorrow.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
          {stats.map(s => (
            <div key={s.label} className="border border-white/10 bg-black p-6 text-center group hover:bg-white/5 transition-colors">
              <div className="text-3xl md:text-4xl font-bold mb-2 text-white font-['Space_Grotesk']">{s.value}</div>
              <div className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-cyan-400 font-['Space_Grotesk']">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="mb-20">
          <h2 className="text-2xl font-bold mb-8 uppercase text-white font-['Space_Grotesk'] flex items-center gap-4">
            <span className="w-8 h-px bg-cyan-400"></span>
            Core <span className="neon-text-cyan">Directives</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((v) => (
              <div key={v.title} className="tech-card tech-border-glow p-8 bg-black flex flex-col items-start">
                <div className={`w-12 h-12 border mb-6 flex items-center justify-center ${v.color === 'cyan' ? 'border-cyan-400 text-cyan-400 shadow-[0_0_10px_rgba(0,240,255,0.2)]' : 'border-[#ff00ff] text-[#ff00ff] shadow-[0_0_10px_rgba(255,0,255,0.2)]'}`}>
                  <v.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-white uppercase font-['Space_Grotesk'] tracking-wide">{v.title}</h3>
                <p className="text-slate-400 font-['Inter'] leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-[#ff00ff]/10 rounded-full blur-[80px] -z-10 pointer-events-none translate-y-1/2"></div>
          <h2 className="text-2xl font-bold mb-8 uppercase text-white font-['Space_Grotesk'] flex items-center gap-4">
            <span className="w-8 h-px bg-[#ff00ff]"></span>
            Command <span className="neon-text-magenta">Node</span>
          </h2>
          <div className="tech-card tech-border-glow p-8 md:p-12 bg-black flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="border border-cyan-400 p-2 bg-cyan-400/5 relative shrink-0">
              <div className="absolute top-0 left-0 w-2 h-2 bg-cyan-400"></div>
              <div className="absolute bottom-0 right-0 w-2 h-2 bg-cyan-400"></div>
              <Avatar className="h-32 w-32 md:h-40 md:w-40 rounded-none grayscale hover:grayscale-0 transition-all duration-500">
                <AvatarImage src="https://i.ibb.co/JR5JnxxD/Whats-App-Image-2026-02-15-at-09-32-05.jpg" className="rounded-none object-cover" />
                <AvatarFallback className="rounded-none bg-black text-cyan-400 font-['Space_Grotesk'] text-2xl border border-cyan-400">BSR</AvatarFallback>
              </Avatar>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-white uppercase font-['Space_Grotesk'] mb-2 tracking-wide">Bhanu Prakash Syagam Reddy</h3>
              <p className="font-['Space_Grotesk'] text-cyan-400 uppercase tracking-widest text-xs font-bold mb-6">Founder & CEO / Chief Architect</p>
              <div className="border-l-2 border-[#ff00ff] pl-6 py-2 bg-[#ff00ff]/5">
                <p className="font-['Inter'] text-slate-300 text-lg italic leading-relaxed">
                  "Innovation is not about complexity, it's about making the complex invisible. We build systems that process millions of parameters so our users don't have to."
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;
