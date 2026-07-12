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
    <div className="min-h-screen bg-[#008080] font-['Courier_New'] flex flex-col pt-24 pb-12 px-4 md:px-8">
      <Seo title="EcoSystem Products" description="Our suite of enterprise-grade platforms." />
      
      <div className="container mx-auto max-w-5xl">
        <div className="win95-window w-full flex flex-col mb-8">
          <div className="win95-header flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4" />
              <span>Products_Directory.exe</span>
            </div>
            <div className="flex gap-1">
              <button className="win95-btn w-5 h-5 flex items-center justify-center text-[12px] font-bold pb-1">_</button>
              <button className="win95-btn w-5 h-5 flex items-center justify-center text-[12px] font-bold">□</button>
              <button className="win95-btn w-5 h-5 flex items-center justify-center text-[12px] font-bold">X</button>
            </div>
          </div>
          
          <div className="p-4 md:p-8 bg-[#c0c0c0] text-black">
             <div className="border-2 border-[#808080] border-r-white border-b-white p-6 bg-white mb-8">
               <h1 className="text-4xl font-bold mb-4">Infrastructure for the Next Generation</h1>
               <p className="font-bold text-lg">Integrated applications designed to scale. From AI-driven assessment to institutional-grade resource planning.</p>
             </div>

             <div className="space-y-8">
               {products.map((p, i) => (
                 <div key={p.title} className="border-2 border-[#808080] border-r-white border-b-white p-4 bg-[#c0c0c0]">
                   <div className="flex items-center gap-4 border-b-2 border-[#808080] pb-2 mb-4">
                     <p.icon className="h-8 w-8 text-[#000080]" />
                     <h2 className="text-2xl font-bold text-[#000080]">{p.title}</h2>
                     {p.featured && <span className="ml-auto bg-yellow-300 text-black px-2 font-bold border border-black text-xs">FEATURED</span>}
                   </div>
                   
                   <p className="font-bold mb-4">{p.overview}</p>
                   
                   <div className="grid md:grid-cols-2 gap-4 mb-4">
                     <div className="win95-input p-2 bg-white">
                       <h3 className="font-bold underline mb-2">Features</h3>
                       <ul className="list-disc list-inside text-sm font-bold">
                         {p.features.map(f => <li key={f}>{f}</li>)}
                       </ul>
                     </div>
                     <div className="win95-input p-2 bg-black text-[#00ff00]">
                       <h3 className="font-bold underline mb-2 text-white">System Info</h3>
                       <p className="text-sm font-bold mb-2">Arch: {p.architecture}</p>
                       <p className="text-sm font-bold">Users: {p.users}</p>
                     </div>
                   </div>

                   {/* @ts-ignore */}
                   {p.link && (
                     <Button asChild className="win95-btn h-8 rounded-none font-bold">
                       <a href={p.link} target="_blank" rel="noopener noreferrer">Launch Application</a>
                     </Button>
                   )}
                 </div>
               ))}
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
