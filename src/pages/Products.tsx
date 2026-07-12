import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  GraduationCap, Brain, Globe, Building2, Users, ArrowRight
} from "lucide-react";
import Seo from "@/components/Seo";

const products = [
  {
    icon: GraduationCap,
    title: "NextGenFreedu",
    link: "https://nextgenfreedu.site",
    tagline: "Accessible professional education platform.",
    overview: "A structured learning environment designed to bridge the gap between academic theory and industry reality. Features rigorous testing, secure certification, and verifiable skill profiles.",
    features: [
      "Role-Based Access Control (RBAC)",
      "Secure Exam Proctoring",
      "Real-time Analytics Dashboard",
      "Automated Certification Workflow"
    ],
    architecture: "React • Node.js • PostgreSQL",
    users: "Universities, Training Institutes, Students",
    benefits: ["Standardized assessment", "Fraud-proof certification", "Data-driven student insights"],
    featured: true,
    color: "cyan"
  },
  {
    icon: Brain,
    title: "Gnan AI",
    tagline: "AI-driven interview intelligence.",
    overview: "Gnan AI is an advanced career intelligence ecosystem designed to automate technical screening and behavioral analysis. By leveraging state-of-the-art NLP and behavioral modeling, it reduces hiring time by 70% while ensuring objective, data-backed candidate matching for modern enterprises.",
    features: [
      "Natural Language Processing (NLP)",
      "Code Execution Sandbox",
      "Plagiarism Detection",
      "Behavioral Sentiment Analysis"
    ],
    architecture: "Python (FastAPI) • TensorFlow • Redis",
    users: "HR Teams, Tech Recruiters, Enterprises",
    benefits: ["Eliminate bias", "Scale hiring instantly", "Deep technical evaluation"],
    featured: true,
    color: "magenta"
  },
  {
    icon: Globe,
    title: "LifeOS",
    link: "https://lifebox-community.web.app/",
    tagline: "Unified digital ecosystem.",
    overview: "One identity for all your digital services. LifeOS connects disparate applications into a single, cohesive experience with unified authentication and data sharing.",
    features: [
      "Single Sign-On (SSO)",
      "Microservices Architecture",
      "Centralized User Profile",
      "Cross-App Data Sync"
    ],
    architecture: "Go • gRPC • Kubernetes",
    users: "Large Enterprises, Campus Networks",
    benefits: ["Seamless user experience", "Simplified IT management", "Enhanced security"],
    featured: false,
    color: "cyan"
  },
  {
    icon: Building2,
    title: "Enterprise ERP",
    tagline: "Complete institutional management.",
    overview: "A modular ERP system handling everything from admission to alumni. Streamline administrative workflows, finance, HR, and academic planning in one secure platform.",
    features: [
      "Financial Management Module",
      "Student Information System (SIS)",
      "HR & Payroll Automation",
      "Inventory & Asset Tracking"
    ],
    architecture: "Java (Spring Boot) • Oracle/Postgres",
    users: "Universities, Colleges, Schools",
    benefits: ["Operational efficiency", "Real-time reporting", "Reduced admin overhead"],
    featured: false,
    color: "magenta"
  },
  {
    icon: Users,
    title: "CRM Platform",
    tagline: "Intelligent relationship management.",
    overview: "Capture, track, and nurture leads with precision. Our CRM offers deep insights into customer behavior, automating follow-ups and driving conversion growth.",
    features: [
      "Lead Scoring & Segmentation",
      "Automated Email Sequences",
      "Sales Pipeline Visualization",
      "Customer Activity Timeline"
    ],
    architecture: "Node.js • MongoDB • Elasticsearch",
    users: "Sales Teams, Marketing Agencies",
    benefits: ["Higher conversion rates", "Better customer retention", "Data-driven sales strategy"],
    featured: false,
    color: "cyan"
  },
];

const Products = () => {
  return (
    <div className="min-h-screen pt-24 pb-12 flex flex-col items-center">
      <Seo title="EcoSystem Products" description="Our suite of enterprise-grade AI platforms." />
      
      <div className="container mx-auto max-w-5xl px-6">
        <div className="text-center mb-16 mt-8 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-cyan-500/10 rounded-full blur-[80px] -z-10 pointer-events-none"></div>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-cyan-400/30 bg-cyan-400/5 text-cyan-400 text-xs font-bold uppercase tracking-widest mb-6">
            <span className="w-2 h-2 bg-cyan-400 shadow-[0_0_8px_#00f0ff]"></span>
            Product Architecture
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white tracking-tight uppercase">
            Ecosystem <span className="neon-text-magenta">Products</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto font-['Inter']">
            Integrated applications designed to scale. From AI-driven assessment to institutional-grade resource planning.
          </p>
        </div>

        <div className="space-y-8 mb-16">
          {products.map((p) => (
            <div key={p.title} className="tech-card tech-border-glow p-8 bg-black">
              <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-white/10 pb-6 mb-6 gap-4">
                <div className="flex items-center gap-4">
                  <div className={`w-14 h-14 border flex items-center justify-center shrink-0 ${p.color === 'cyan' ? 'border-cyan-400 text-cyan-400 shadow-[0_0_10px_rgba(0,240,255,0.2)]' : 'border-[#ff00ff] text-[#ff00ff] shadow-[0_0_10px_rgba(255,0,255,0.2)]'}`}>
                    <p.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h2 className={`text-2xl font-bold uppercase font-['Space_Grotesk'] tracking-wide ${p.color === 'cyan' ? 'text-white' : 'text-white'}`}>{p.title}</h2>
                    <p className={`text-sm uppercase tracking-widest font-['Space_Grotesk'] font-bold ${p.color === 'cyan' ? 'text-cyan-400' : 'text-[#ff00ff]'}`}>{p.tagline}</p>
                  </div>
                </div>
                {p.featured && (
                  <Badge variant="outline" className="border-cyan-400 text-cyan-400 bg-cyan-400/10 font-['Space_Grotesk'] rounded-none uppercase text-xs tracking-wider shrink-0 self-start md:self-center shadow-[0_0_10px_rgba(0,240,255,0.2)]">
                    CORE MODULE
                  </Badge>
                )}
              </div>
              
              <p className="text-slate-400 mb-8 font-['Inter'] leading-relaxed text-lg">{p.overview}</p>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="font-['Space_Grotesk'] font-bold uppercase tracking-wider text-white mb-4 text-sm flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-white"></span> Features
                  </h3>
                  <ul className="space-y-3 font-['Inter']">
                    {p.features.map(f => (
                      <li key={f} className="text-slate-400 flex items-start gap-2">
                        <span className="text-cyan-400 mt-1">▹</span> {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-white/5 border border-white/10 p-6">
                  <h3 className="font-['Space_Grotesk'] font-bold uppercase tracking-wider text-white mb-4 text-sm flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#ff00ff]"></span> System Specs
                  </h3>
                  <div className="space-y-4 font-['Inter']">
                    <div>
                      <p className="text-xs uppercase tracking-widest text-slate-500 font-bold mb-1">Architecture</p>
                      <p className="text-slate-300 font-mono text-sm">{p.architecture}</p>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-widest text-slate-500 font-bold mb-1">Target End-Users</p>
                      <p className="text-slate-300 text-sm">{p.users}</p>
                    </div>
                  </div>
                </div>
              </div>

              {p.link && (
                <Button asChild className="btn-tech h-12 px-8 text-sm">
                  <a href={p.link} target="_blank" rel="noopener noreferrer">
                    Initialize Application <ArrowRight className="ml-2 w-4 h-4 inline" />
                  </a>
                </Button>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
