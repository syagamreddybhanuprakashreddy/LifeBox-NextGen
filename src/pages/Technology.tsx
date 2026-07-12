import { Badge } from "@/components/ui/badge";
import { Server, Database, Cloud, Shield, Terminal, Cpu } from "lucide-react";
import Seo from "@/components/Seo";

const techStack = [
  {
    category: "Frontend Architecture",
    icon: Terminal,
    desc: "Built for performance and accessibility.",
    tools: ["React 18", "TypeScript", "Tailwind CSS", "Next.js", "Radix UI", "Framer Motion"],
    color: "cyan"
  },
  {
    category: "Backend Services",
    icon: Server,
    desc: "Scalable microservices and robust APIs.",
    tools: ["Node.js", "Go", "Python (FastAPI)", "GraphQL", "gRPC", "Docker"],
    color: "magenta"
  },
  {
    category: "Data Infrastructure",
    icon: Database,
    desc: "Secure, consistent, and high-availability storage.",
    tools: ["PostgreSQL", "Redis", "MongoDB", "Elasticsearch", "Kafka"],
    color: "cyan"
  },
  {
    category: "Cloud & DevOps",
    icon: Cloud,
    desc: "Automated deployment and orchestration.",
    tools: ["AWS", "Google Cloud", "Kubernetes", "Terraform", "GitHub Actions", "Prometheus"],
    color: "magenta"
  },
  {
    category: "AI & Machine Learning",
    icon: Cpu,
    desc: "Intelligence at the core.",
    tools: ["TensorFlow", "PyTorch", "OpenAI API", "Hugging Face", "LangChain"],
    color: "cyan"
  },
  {
    category: "Security",
    icon: Shield,
    desc: "Defense in depth.",
    tools: ["OAuth 2.0", "OWASP Standards", "WAF", "End-to-End Encryption"],
    color: "magenta"
  }
];

const Technology = () => {
  return (
    <div className="min-h-screen pt-24 pb-12 flex flex-col items-center">
      <Seo title="Technology Stack" description="Explore the engineering principles and technology stack behind LifeBox NextGen platforms." />
      
      <div className="container mx-auto max-w-7xl px-6">
        <div className="text-center mb-16 mt-8 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-[300px] bg-cyan-500/10 rounded-full blur-[80px] -z-10 pointer-events-none"></div>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-cyan-400/30 bg-cyan-400/5 text-cyan-400 text-xs font-bold uppercase tracking-widest mb-6">
            <span className="w-2 h-2 bg-cyan-400 shadow-[0_0_8px_#00f0ff]"></span>
            Engineering Excellence
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white tracking-tight uppercase">
            Technology <span className="neon-text-magenta">Stack</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto font-['Inter']">
            Built on proven, modern foundations to ensure scalability, security, and performance at an enterprise AI level.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {techStack.map((stack) => (
            <div key={stack.category} className="tech-card tech-border-glow p-6 sm:p-8 flex flex-col h-full bg-black">
              <div className="flex items-center gap-4 border-b border-white/10 pb-6 mb-6">
                <div className={`w-12 h-12 border flex items-center justify-center shrink-0 ${stack.color === 'cyan' ? 'border-cyan-400 text-cyan-400 shadow-[0_0_10px_rgba(0,240,255,0.2)]' : 'border-[#ff00ff] text-[#ff00ff] shadow-[0_0_10px_rgba(255,0,255,0.2)]'}`}>
                  <stack.icon className="h-6 w-6" />
                </div>
                <h3 className="font-bold text-xl text-white uppercase font-['Space_Grotesk'] tracking-wide">{stack.category}</h3>
              </div>
              <p className="text-slate-400 mb-6 font-['Inter']">{stack.desc}</p>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                {stack.tools.map((tool) => (
                  <Badge key={tool} variant="secondary" className="bg-white/5 hover:bg-white/10 text-slate-300 border-white/10 font-['Space_Grotesk'] uppercase text-[10px] tracking-wider rounded-none">
                    {tool}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="border border-cyan-400/30 bg-cyan-400/5 p-12 text-center relative overflow-hidden flex flex-col items-center">
          <h2 className="text-3xl font-bold mb-4 text-white relative z-10 uppercase font-['Space_Grotesk'] tracking-wide">
            Read our <span className="neon-text-cyan">Engineering Blog</span>
          </h2>
          <p className="text-slate-400 mb-8 max-w-2xl mx-auto relative z-10 text-base md:text-lg font-['Inter']">
            Deep dives into how we solve complex problems, from scaling real-time notifications to architecting multi-tenant databases.
          </p>
          <button className="btn-tech px-8 h-12 relative z-10">
            Explore Articles
          </button>
        </div>
      </div>
    </div>
  );
};

export default Technology;
