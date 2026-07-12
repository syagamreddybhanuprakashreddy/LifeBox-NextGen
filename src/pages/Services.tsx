import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Server, Code, Cloud, Palette, Megaphone, ArrowRight
} from "lucide-react";
import Seo from "@/components/Seo";

const services = [
  {
    icon: Server,
    title: "Enterprise Infrastructure",
    description: "Fragmented systems reduce productivity. We build integrated ERPs and portals that unify operations under a single digital infrastructure.",
    deliverables: ["Custom ERP Systems", "Employee Portals", "Workflow Automation"],
    tech: ["React", "PostgreSQL", "Docker"],
    color: "cyan"
  },
  {
    icon: Code,
    title: "Product Engineering",
    description: "Off-the-shelf software rarely fits unique needs. We architect custom high-performance applications designed for security and scalability.",
    deliverables: ["SaaS Development", "Mobile Apps", "Legacy Modernization"],
    tech: ["TypeScript", "Go", "GraphQL"],
    color: "magenta"
  },
  {
    icon: Cloud,
    title: "Cloud Orchestration",
    description: "Legacy infrastructure limits growth. We execute secure cloud migrations and set up auto-scaling architectures.",
    deliverables: ["AWS/GCP Migration", "DevOps & CI/CD", "Infrastructure as Code"],
    tech: ["Terraform", "Kubernetes", "AWS"],
    color: "cyan"
  },
  {
    icon: Palette,
    title: "Digital Experience",
    description: "Poor UX erodes trust. We design research-backed interfaces and design systems that create professional, cohesive brand experiences.",
    deliverables: ["UI/UX Desgin", "Design Systems", "Brand Identity"],
    tech: ["Figma", "Motion", "A11y"],
    color: "magenta"
  },
  {
    icon: Megaphone,
    title: "Growth Engineering",
    description: "Great products need visibility. We integrate analytics and set up data-driven performance marketing infrastructure.",
    deliverables: ["SEO Architecture", "Conversion Optimization", "Analytics Setup"],
    tech: ["Google Analytics", "Segment", "HubSpot"],
    color: "cyan"
  }
];

const Services = () => {
  return (
    <div className="min-h-screen pt-24 pb-12 flex flex-col items-center">
      <Seo title="Engineering Services" description="End-to-end AI engineering services." />
      
      <div className="container mx-auto max-w-7xl px-6">
        <div className="text-center mb-16 mt-8 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-[300px] bg-[#ff00ff]/10 rounded-full blur-[80px] -z-10 pointer-events-none"></div>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-[#ff00ff]/30 bg-[#ff00ff]/5 text-[#ff00ff] text-xs font-bold uppercase tracking-widest mb-6">
            <span className="w-2 h-2 bg-[#ff00ff] shadow-[0_0_8px_#ff00ff]"></span>
            Engineering Division
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white tracking-tight uppercase">
            Engineering <span className="neon-text-cyan">Services</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto font-['Inter']">
            We architect resilient systems and state-of-the-art AI infrastructure that define modern enterprise operations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {services.map((s) => (
            <div key={s.title} className="tech-card tech-border-glow p-6 sm:p-8 flex flex-col h-full bg-black">
              <div className="flex items-center gap-4 border-b border-white/10 pb-6 mb-6">
                <div className={`w-12 h-12 border flex items-center justify-center shrink-0 ${s.color === 'cyan' ? 'border-cyan-400 text-cyan-400 shadow-[0_0_10px_rgba(0,240,255,0.2)]' : 'border-[#ff00ff] text-[#ff00ff] shadow-[0_0_10px_rgba(255,0,255,0.2)]'}`}>
                  <s.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-white uppercase font-['Space_Grotesk'] tracking-wide">{s.title}</h3>
              </div>
              
              <p className="text-slate-400 mb-6 font-['Inter'] flex-grow">{s.description}</p>
              
              <div className="bg-white/5 border border-white/10 p-4 mb-4">
                <h4 className="font-bold text-[10px] uppercase tracking-widest font-['Space_Grotesk'] text-slate-500 mb-2">Deliverables</h4>
                <ul className="space-y-1">
                  {s.deliverables.map(d => (
                    <li key={d} className="text-sm font-['Inter'] text-slate-300 flex items-center gap-2">
                      <span className={`${s.color === 'cyan' ? 'text-cyan-400' : 'text-[#ff00ff]'}`}>▹</span> {d}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                {s.tech.map(t => (
                  <Badge key={t} variant="secondary" className="bg-transparent border border-white/20 text-slate-400 font-['Space_Grotesk'] uppercase text-[10px] tracking-wider rounded-none">
                    {t}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
          
          <div className="border border-cyan-400/30 bg-cyan-400/5 p-8 flex flex-col justify-center items-center text-center relative overflow-hidden h-full min-h-[300px]">
            <h3 className="text-2xl font-bold mb-4 text-white uppercase font-['Space_Grotesk']">Custom <span className="neon-text-cyan">Architecture?</span></h3>
            <p className="text-slate-400 mb-8 font-['Inter'] max-w-sm">Require a specialized integration or bespoke AI model deployment?</p>
            <Button asChild className="btn-tech px-8 h-12">
              <Link to="/contact">Consult an Engineer</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
