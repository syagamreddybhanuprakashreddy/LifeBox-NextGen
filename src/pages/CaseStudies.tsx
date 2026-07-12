import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Building2, ShieldCheck, TrendingUp } from "lucide-react";
import Seo from "@/components/Seo";
import { Link } from "react-router-dom";

const studies = [
  {
    category: "Education",
    client: "Multi-Campus University",
    metric: "60% Efficiency Gain",
    title: "Digital Transformation at Scale",
    desc: "How a 5-campus university unified admissions, finance, and academics into a single ERP system.",
    tags: ["ERP Migration", "Cloud Deployment"],
    icon: Users,
    color: "cyan"
  },
  {
    category: "Recruitment",
    client: "Tech EdHub",
    metric: "40% Placement Boost",
    title: "Automating Technical Interviews",
    desc: "Scaling mock interviews for 2,000+ students using Gnan AI's automated assessment engine.",
    tags: ["AI Implementation", "Student Success"],
    icon: TrendingUp,
    color: "magenta"
  },
  {
    category: "Enterprise",
    client: "Global Logistics Firm",
    metric: "35% Revenue Growth",
    title: "CRM for High-Velocity Sales",
    desc: "Replacing spreadsheets with an intelligent CRM to track leads and automate follow-ups.",
    tags: ["Custom CRM", "Workflow Automation"],
    icon: Building2,
    color: "cyan"
  },
  {
    category: "Assessment",
    client: "National Exam Board",
    metric: "10k Concurrent Users",
    title: "Zero-Downtime Examinations",
    desc: "Conducting secure, proctored online exams for thousands of candidates simultaneously.",
    tags: ["High Availability", "Security Audit"],
    icon: ShieldCheck,
    color: "magenta"
  }
];

const CaseStudies = () => {
  return (
    <div className="min-h-screen pt-24 pb-12 flex flex-col items-center">
      <Seo title="Customer Stories" description="See how leading institutions use LifeBox NextGen to transform their operations." />
      
      <div className="container mx-auto max-w-7xl px-6">
         <div className="text-center mb-16 mt-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-cyan-400/30 bg-cyan-400/5 text-cyan-400 text-xs font-bold uppercase tracking-widest mb-6">
            <span className="w-2 h-2 bg-cyan-400 shadow-[0_0_8px_#00f0ff]"></span>
            Customer Success
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white tracking-tight uppercase">
            Real Problems. <br/><span className="neon-text-magenta">Measurable Outcomes.</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto font-['Inter']">
            See how leading institutions use LifeBox NextGen to transform their operations and accelerate growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {studies.map((s, i) => (
            <div key={i} className="tech-card tech-border-glow p-6 sm:p-8 flex flex-col justify-between group overflow-hidden relative bg-black">
              
              <div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-6 border-b border-white/10 pb-4 gap-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 border flex items-center justify-center shrink-0 ${s.color === 'cyan' ? 'border-cyan-400 text-cyan-400 shadow-[0_0_10px_rgba(0,240,255,0.2)]' : 'border-[#ff00ff] text-[#ff00ff] shadow-[0_0_10px_rgba(255,0,255,0.2)]'}`}>
                      <s.icon className="w-5 h-5" />
                    </div>
                    <span className="font-bold text-white uppercase tracking-wider font-['Space_Grotesk']">{s.category}</span>
                  </div>
                  <Badge variant="outline" className="bg-white/5 text-white border-white/20 self-start font-['Space_Grotesk'] rounded-none uppercase text-[10px] tracking-wider">{s.client}</Badge>
                </div>
                
                <h3 className={`text-2xl font-bold mb-4 font-['Space_Grotesk'] uppercase transition-colors ${s.color === 'cyan' ? 'group-hover:text-cyan-400' : 'group-hover:text-[#ff00ff]'} text-white`}>{s.title}</h3>
                <p className="text-slate-400 mb-6 text-base font-['Inter']">{s.desc}</p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {s.tags.map(t => (
                    <Badge key={t} variant="secondary" className="bg-transparent border border-white/10 text-slate-400 font-normal font-['Space_Grotesk'] rounded-none uppercase text-[10px] tracking-wider">
                      {t}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <div className="p-4 bg-white/5 border border-white/10 flex justify-between items-center transition-colors">
                <div>
                  <p className="text-xs uppercase tracking-widest text-slate-500 mb-1 font-['Space_Grotesk'] font-bold">Key Result</p>
                  <p className={`font-bold text-xl uppercase font-['Space_Grotesk'] ${s.color === 'cyan' ? 'text-cyan-400' : 'text-[#ff00ff]'}`}>{s.metric}</p>
                </div>
                <div className="w-10 h-10 border border-white/20 flex items-center justify-center text-white group-hover:border-cyan-400 group-hover:text-cyan-400 transition-all bg-black">
                  <ArrowRight className="h-5 w-5" />
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="border border-[#ff00ff]/30 bg-[#ff00ff]/5 p-12 md:p-16 text-center relative overflow-hidden flex flex-col items-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white relative z-10 uppercase tracking-wide font-['Space_Grotesk']">Start your <span className="neon-text-magenta">transformation</span></h2>
          <p className="text-slate-400 text-lg mb-8 max-w-xl relative z-10 font-['Inter']">
            Ready to achieve similar results? Our enterprise architects are ready to design your custom AI solution.
          </p>
          <Button asChild className="btn-tech h-14 px-10 rounded-none text-base">
            <Link to="/contact">Book a Consultation</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;
