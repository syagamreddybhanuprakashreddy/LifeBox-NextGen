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
    featured: true
  },
  {
    icon: Brain,
    title: "Gnan AI",
    link: "https://gnan-ai.in",
    tagline: "AI-driven interview intelligence.",
    overview: "Automate technical screening and behavioral analysis with our advanced AI engine. Reduce hiring time by 70% while improving candidate quality through objective, data-backed assessments.",
    features: [
      "Natural Language Processing (NLP)",
      "Code Execution Sandbox",
      "Plagiarism Detection",
      "Behavioral Sentiment Analysis"
    ],
    architecture: "Python (FastAPI) • TensorFlow • Redis",
    users: "HR Teams, Tech Recruiters, Enterprises",
    benefits: ["Eliminate bias", "Scale hiring instantly", "Deep technical evaluation"],
    featured: true
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
    featured: false
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
    featured: false
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
    featured: false
  },
];

const Products = () => {
  return (
    <div className="bg-white text-gray-900 font-sans min-h-screen">
      <Seo
        title="Products"
        description="Our suite of enterprise-grade platforms for education, assessment, and management."
      />

      {/* Header - Simple & Clean */}
      <section className="pt-32 pb-20 border-b border-gray-100 bg-gray-50/50">
        <div className="container mx-auto px-6 lg:px-8 max-w-5xl">
          <p className="text-sm font-semibold text-blue-600 uppercase tracking-widest mb-4">The Platform</p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6">
            Everything you need to run <br />  a modern digital institution.
          </h1>
          <p className="text-xl text-gray-500 max-w-2xl leading-relaxed">
            Integrated applications designed to work together. From admissions to alumni network, we cover the entire lifecycle.
          </p>
        </div>
      </section>

      {/* Products List - Zig Zag Technical Layout */}
      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-8 space-y-32">
          {products.map((p, i) => (
            <div key={p.title} id={p.title.toLowerCase().replace(/\s/g, "-")} className="scroll-mt-32">
              <div className="grid gap-16 lg:grid-cols-2 items-center">

                {/* Text Content */}
                <div className={`${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="h-10 w-10 rounded-lg bg-gray-100 flex items-center justify-center text-gray-900">
                      <p.icon className="h-5 w-5" />
                    </div>
                    {p.featured && (
                      <span className="inline-flex items-center rounded-full bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">Featured</span>
                    )}
                  </div>

                  <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-4">{p.title}</h2>
                  <p className="text-lg font-medium text-gray-500 mb-6">{p.tagline}</p>
                  <p className="text-gray-600 leading-relaxed mb-8">{p.overview}</p>

                  <div className="space-y-8">
                    {/* Features List */}
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">Components</h4>
                      <ul className="grid sm:grid-cols-2 gap-3">
                        {p.features.map(f => (
                          <li key={f} className="flex items-center gap-2 text-[15px] text-gray-600">
                            <CheckCircle className="h-4 w-4 text-blue-600 flex-shrink-0" />
                            {f}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technical Details Box */}
                    <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                      <div className="flex items-center gap-2 mb-3">
                        <Code className="h-4 w-4 text-gray-400" />
                        <span className="text-xs font-semibold text-gray-500 uppercase tracking-widest">Tech Stack</span>
                      </div>
                      <p className="font-mono text-sm text-gray-700">{p.architecture}</p>
                    </div>

                    {/* @ts-ignore */}
                    {p.link && (
                      <Button asChild size="lg" className="w-full sm:w-auto bg-gray-900 text-white hover:bg-gray-800">
                        <a href={p.link} target="_blank" rel="noopener noreferrer">
                          Visit Platform <ArrowRight className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                    )}
                  </div>
                </div>

                {/* Visual Representation */}
                <div className={`${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="relative rounded-xl bg-gradient-to-tr from-gray-100 to-gray-50 border border-gray-200 p-2 shadow-lg hover:shadow-xl transition-shadow duration-500">
                    <div className="absolute top-0 right-0 -m-2 h-24 w-24 bg-blue-500/5 rounded-full blur-3xl" />

                    {/* Abstract Dashboard UI */}
                    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm">
                      {/* Window Chrome */}
                      <div className="bg-gray-50 border-b border-gray-200 px-4 py-3 flex gap-2">
                        <div className="h-3 w-3 rounded-full bg-gray-200" />
                        <div className="h-3 w-3 rounded-full bg-gray-200" />
                        <div className="h-3 w-3 rounded-full bg-gray-200" />
                      </div>

                      {/* Wireframe Body */}
                      <div className="p-8 space-y-6 bg-white min-h-[300px]">
                        <div className="flex justify-between items-end">
                          <div className="space-y-2">
                            <div className="h-4 w-32 bg-gray-100 rounded" />
                            <div className="h-8 w-48 bg-gray-900 rounded" />
                          </div>
                          <div className="h-8 w-24 bg-blue-600 rounded" />
                        </div>

                        <div className="grid grid-cols-3 gap-4 py-4">
                          {[1, 2, 3].map(k => (
                            <div key={k} className="p-4 rounded border border-gray-100 bg-gray-50/50">
                              <div className="h-8 w-8 bg-white border border-gray-200 rounded mb-3" />
                              <div className="h-2 w-16 bg-gray-200 rounded" />
                            </div>
                          ))}
                        </div>

                        <div className="h-32 bg-gray-50 border border-gray-100 rounded flex items-end px-4 pt-4 gap-2">
                          {[40, 70, 45, 90, 60, 80, 50, 95].map((h, k) => (
                            <div key={k} className="flex-1 bg-blue-100 rounded-t border-t border-x border-blue-200" style={{ height: `${h}%` }} />
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
      <section className="py-24 border-t border-gray-100 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Built for scale.</h2>
          <div className="flex justify-center gap-4">
            <Button asChild className="bg-gray-900 text-white hover:bg-gray-800 h-12 px-8">
              <Link to="/contact">Request Demo</Link>
            </Button>
            <Button asChild variant="outline" className="bg-white border-gray-300 h-12 px-8">
              <Link to="/technology">View Tech Stack</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
