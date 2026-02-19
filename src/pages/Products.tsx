import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  GraduationCap, Brain, Globe, Building2, Users,
  CheckCircle, BarChart3, Shield, Cpu, FileText, Code, UserCheck, Target, ArrowRight
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
    color: "blue"
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
    color: "cyan"
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
    color: "emerald"
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
    color: "indigo"
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
    color: "purple"
  },
];

const Products = () => {
  return (
    <div className="bg-[#0B0F19] text-white font-sans min-h-screen relative overflow-hidden">
      <Seo
        title="EcoSystem Products"
        description="Our suite of enterprise-grade platforms for education, assessment, and management."
      />

      {/* Decorative background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Header */}
      <section className="pt-40 pb-24 border-b border-white/5 relative z-10">
        <div className="container mx-auto px-6 lg:px-8 max-w-5xl">
          <p className="text-sm font-bold text-blue-500 uppercase tracking-[0.3em] mb-4">The EcoSystem</p>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-tight">
            Infrastructure for the <span className="text-gray-500 italic">Next Generation.</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl leading-relaxed">
            Integrated applications designed to scale. From AI-driven assessment to institutional-grade resource planning.
          </p>
        </div>
      </section>

      {/* Products List */}
      <section className="py-32 relative z-10">
        <div className="container mx-auto px-6 lg:px-8 space-y-40">
          {products.map((p, i) => (
            <div key={p.title} id={p.title.toLowerCase().replace(/\s/g, "-")} className="scroll-mt-40 group">
              <div className="grid gap-20 lg:grid-cols-2 items-center">

                {/* Text Content */}
                <div className={`${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="flex items-center gap-4 mb-8">
                    <div className="h-14 w-14 rounded-2xl glass flex items-center justify-center text-white border-white/10 group-hover:border-blue-500/50 transition-all">
                      <p.icon className="h-7 w-7" />
                    </div>
                    {p.featured && (
                      <Badge className="bg-blue-600/10 text-blue-400 border-blue-500/20 px-3 py-1 text-xs uppercase tracking-widest font-bold">Featured Platform</Badge>
                    )}
                  </div>

                  <h2 className="text-4xl font-bold tracking-tight mb-6">{p.title}</h2>
                  <p className="text-xl font-medium text-blue-400/80 mb-8">{p.tagline}</p>
                  <p className="text-gray-400 text-lg leading-relaxed mb-10">{p.overview}</p>

                  <div className="space-y-12">
                    {/* Features List */}
                    <div>
                      <h4 className="text-xs font-bold text-gray-500 uppercase tracking-[0.2em] mb-6">Key Capabilities</h4>
                      <ul className="grid sm:grid-cols-2 gap-4">
                        {p.features.map(f => (
                          <li key={f} className="flex items-center gap-3 text-[15px] text-gray-300">
                            <div className="h-1.5 w-1.5 rounded-full bg-blue-500 shadow-[0_0_10px_#2563EB]" />
                            {f}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technical Details Box */}
                    <div className="glass rounded-2xl p-8 border-white/5 group-hover:border-white/10 transition-all">
                      <div className="flex items-center gap-3 mb-4">
                        <Code className="h-4 w-4 text-gray-500" />
                        <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">Architecture Stack</span>
                      </div>
                      <p className="font-mono text-sm text-blue-300 tracking-tight">{p.architecture}</p>
                    </div>

                    {/* @ts-ignore */}
                    {p.link && (
                      <Button asChild size="lg" className="h-14 px-8 bg-white text-black hover:bg-gray-100 rounded-xl font-bold transition-transform hover:scale-105 active:scale-95">
                        <a href={p.link} target="_blank" rel="noopener noreferrer">
                          Access Platform <ArrowRight className="ml-2 h-5 w-5" />
                        </a>
                      </Button>
                    )}
                  </div>
                </div>

                {/* Visual Representation */}
                <div className={`${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="relative rounded-[2.5rem] glass p-4 shadow-2xl group-hover:shadow-blue-500/10 transition-all duration-700 animate-float">
                    <div className="absolute -inset-1 bg-gradient-to-tr from-blue-600/20 to-accent/20 rounded-[2.5rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />

                    {/* Abstract Dashboard UI */}
                    <div className="bg-[#0B0F19] rounded-[2rem] border border-white/5 overflow-hidden shadow-inner relative z-10">
                      {/* Window Chrome */}
                      <div className="bg-white/5 border-b border-white/5 px-6 py-4 flex gap-2">
                        <div className="h-3 w-3 rounded-full bg-red-500/50" />
                        <div className="h-3 w-3 rounded-full bg-yellow-500/50" />
                        <div className="h-3 w-3 rounded-full bg-green-500/50" />
                      </div>

                      {/* Wireframe Body */}
                      <div className="p-10 space-y-8 min-h-[400px]">
                        <div className="flex justify-between items-end">
                          <div className="space-y-3">
                            <div className="h-4 w-32 bg-white/5 rounded-full" />
                            <div className="h-10 w-64 bg-white/10 rounded-xl" />
                          </div>
                          <div className="h-12 w-32 bg-blue-600/20 border border-blue-500/30 rounded-xl" />
                        </div>

                        <div className="grid grid-cols-3 gap-6 py-4">
                          {[1, 2, 3].map(k => (
                            <div key={k} className="p-6 rounded-2xl border border-white/5 bg-white/[0.02]">
                              <div className="h-10 w-10 bg-white/5 rounded-lg mb-4" />
                              <div className="h-3 w-20 bg-white/10 rounded-full" />
                            </div>
                          ))}
                        </div>

                        <div className="h-40 bg-white/[0.02] border border-white/5 rounded-2xl flex items-end px-6 pt-6 gap-3">
                          {[40, 70, 45, 90, 60, 80, 50, 95].map((h, k) => (
                            <div key={k} className="flex-1 bg-blue-600/20 rounded-t-lg border-t border-x border-blue-500/20 shadow-[0_0_20px_rgba(37,99,235,0.1)]" style={{ height: `${h}%` }} />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Enterprise CTA */}
      <section className="py-40 border-t border-white/5 relative">
        <div className="absolute inset-0 bg-blue-600/5 blur-[120px] rounded-full translate-y-20 pointer-events-none" />
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold mb-10">Ready to transform?</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Button asChild size="lg" className="h-16 px-10 bg-blue-600 text-white hover:bg-blue-700 rounded-2xl font-bold shadow-[0_0_30px_rgba(37,99,235,0.3)]">
              <Link to="/contact">Request Executive Demo</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="h-16 px-10 glass border-white/10 text-white hover:bg-white/5 rounded-2xl font-bold">
              <Link to="/technology">Technical Specifications</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
