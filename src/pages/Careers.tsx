import { Link } from "react-router-dom";
import { Zap, Users, Heart, Globe, Terminal } from "lucide-react";
import Seo from "@/components/Seo";

const values = [
  { icon: Zap, title: "High Velocity", desc: "We ship fast. We iterate. We don't let bureaucracy slow us down.", color: "cyan" },
  { icon: Users, title: "Radical Candor", desc: "We care personally and challenge directly. Feedback is a gift.", color: "magenta" },
  { icon: Heart, title: "Customer Obsession", desc: "We start with the customer and work backwards.", color: "cyan" },
  { icon: Globe, title: "Global Mindset", desc: "We are building for the world, not just a local market.", color: "magenta" },
];

const positions: any[] = [];

const Careers = () => {
  return (
    <div className="min-h-screen pt-24 pb-12 flex flex-col items-center">
      <Seo title="Careers at LifeBox" description="Join our world-class engineering team." />
      
      <div className="container mx-auto max-w-6xl px-6">
        
        <div className="text-center mb-20 mt-8 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-[300px] bg-cyan-500/10 rounded-full blur-[80px] -z-10 pointer-events-none"></div>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-[#ff00ff]/30 bg-[#ff00ff]/5 text-[#ff00ff] text-xs font-bold uppercase tracking-widest mb-6">
            <span className="w-2 h-2 bg-[#ff00ff] shadow-[0_0_8px_#ff00ff]"></span>
            Join The Network
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white tracking-tight uppercase">
            Build The <span className="neon-text-cyan">Future</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto font-['Inter']">
            Join our world-class engineering team and architect the AI infrastructure of tomorrow.
          </p>
        </div>

        <div className="mb-20">
          <h2 className="text-2xl font-bold mb-8 uppercase text-white font-['Space_Grotesk'] flex items-center gap-4">
            <span className="w-8 h-px bg-cyan-400"></span>
            Node <span className="neon-text-cyan">Culture</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="tech-card tech-border-glow p-6 bg-black flex flex-col items-start">
                <div className={`w-10 h-10 border mb-4 flex items-center justify-center ${v.color === 'cyan' ? 'border-cyan-400 text-cyan-400 shadow-[0_0_10px_rgba(0,240,255,0.2)]' : 'border-[#ff00ff] text-[#ff00ff] shadow-[0_0_10px_rgba(255,0,255,0.2)]'}`}>
                  <v.icon className="h-5 w-5" />
                </div>
                <h3 className="font-bold text-sm uppercase font-['Space_Grotesk'] tracking-wider mb-2 text-white">{v.title}</h3>
                <p className="text-slate-400 text-sm font-['Inter']">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-8 uppercase text-white font-['Space_Grotesk'] flex items-center gap-4">
            <span className="w-8 h-px bg-[#ff00ff]"></span>
            Active <span className="neon-text-magenta">Processes</span>
          </h2>
          <div className="tech-card tech-border-glow p-8 bg-black">
            {positions.length > 0 ? (
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse font-['Inter']">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="p-4 text-xs uppercase tracking-widest text-slate-500 font-['Space_Grotesk']">Title</th>
                      <th className="p-4 text-xs uppercase tracking-widest text-slate-500 font-['Space_Grotesk']">Dept</th>
                      <th className="p-4 text-xs uppercase tracking-widest text-slate-500 font-['Space_Grotesk']">Location</th>
                      <th className="p-4 text-xs uppercase tracking-widest text-slate-500 font-['Space_Grotesk']">Type</th>
                    </tr>
                  </thead>
                  <tbody>
                    {positions.map((p, i) => (
                      <tr key={i} className="border-b border-white/10 hover:bg-white/5 transition-colors cursor-pointer group">
                        <td className="p-4 font-bold text-white group-hover:text-cyan-400">{p.title}</td>
                        <td className="p-4 text-slate-300">{p.dept}</td>
                        <td className="p-4 text-slate-300">{p.loc}</td>
                        <td className="p-4 text-slate-300">{p.type}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <Terminal className="w-12 h-12 text-slate-600 mb-4" />
                <p className="text-cyan-400 font-mono text-sm mb-2 uppercase">System Message: 0 nodes available.</p>
                <p className="text-slate-400 font-['Inter'] max-w-sm">Currently, there are no open roles. Please check back later for network expansion.</p>
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Careers;
