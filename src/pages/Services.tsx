import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Server, Code, Cloud, Palette, Megaphone, ArrowRight, CheckCircle2,
  Database, Shield, Zap, Layout
} from "lucide-react";
import Seo from "@/components/Seo";

const services = [
  {
    icon: Server,
    title: "Enterprise Infrastructure",
    description: "Fragmented systems reduce productivity. We build integrated ERPs and portals that unify operations under a single digital infrastructure.",
    deliverables: ["Custom ERP Systems", "Employee Portals", "Workflow Automation"],
    tech: ["React", "PostgreSQL", "Docker"]
  },
  {
    icon: Code,
    title: "Product Engineering",
    description: "Off-the-shelf software rarely fits unique needs. We architect custom high-performance applications designed for security and scalability.",
    deliverables: ["SaaS Development", "Mobile Apps", "Legacy Modernization"],
    tech: ["TypeScript", "Go", "GraphQL"]
  },
  {
    icon: Cloud,
    title: "Cloud Orchestration",
    description: "Legacy infrastructure limits growth. We execute secure cloud migrations and set up auto-scaling architectures.",
    deliverables: ["AWS/GCP Migration", "DevOps & CI/CD", "Infrastructure as Code"],
    tech: ["Terraform", "Kubernetes", "AWS"]
  },
  {
    icon: Palette,
    title: "Digital Experience",
    description: "Poor UX erodes trust. We design research-backed interfaces and design systems that create professional, cohesive brand experiences.",
    deliverables: ["UI/UX Desgin", "Design Systems", "Brand Identity"],
    tech: ["Figma", "Motion", "A11y"]
  },
  {
    icon: Megaphone,
    title: "Growth Engineering",
    description: "Great products need visibility. We integrate analytics and set up data-driven performance marketing infrastructure.",
    deliverables: ["SEO Architecture", "Conversion Optimization", "Analytics Setup"],
    tech: ["Google Analytics", "Segment", "HubSpot"]
  }
];

const Services = () => {
  return (
    <div className="min-h-screen bg-[#008080] font-['Courier_New'] flex flex-col pt-24 pb-12 px-4 md:px-8">
      <Seo title="Engineering Services" description="End-to-end engineering services." />
      
      <div className="container mx-auto max-w-5xl">
        <div className="win95-window w-full flex flex-col mb-8">
          <div className="win95-header flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Server className="w-4 h-4" />
              <span>Services_Config.sys</span>
            </div>
            <div className="flex gap-1">
              <button className="win95-btn w-5 h-5 flex items-center justify-center text-[12px] font-bold pb-1">_</button>
              <button className="win95-btn w-5 h-5 flex items-center justify-center text-[12px] font-bold">□</button>
              <button className="win95-btn w-5 h-5 flex items-center justify-center text-[12px] font-bold">X</button>
            </div>
          </div>
          
          <div className="p-4 md:p-8 bg-[#c0c0c0] text-black">
             <div className="border-2 border-[#808080] border-r-white border-b-white p-6 bg-white mb-8">
               <h1 className="text-4xl font-bold mb-4">Engineering Services</h1>
               <p className="font-bold text-lg">We architect resilient systems that define modern enterprise operations.</p>
             </div>

             <div className="grid md:grid-cols-2 gap-6">
               {services.map((s, i) => (
                 <div key={s.title} className="border-2 border-[#808080] border-r-white border-b-white p-4 bg-[#c0c0c0]">
                   <div className="flex items-center gap-4 border-b border-[#808080] pb-2 mb-4">
                     <s.icon className="h-6 w-6 text-[#000080]" />
                     <h3 className="text-xl font-bold">{s.title}</h3>
                   </div>
                   
                   <p className="font-bold text-sm mb-4 h-16">{s.description}</p>
                   
                   <div className="win95-input p-2 bg-white mb-2">
                     <h4 className="font-bold text-xs underline mb-1">Deliverables:</h4>
                     <ul className="list-disc list-inside text-xs font-bold">
                       {s.deliverables.map(d => <li key={d}>{d}</li>)}
                     </ul>
                   </div>
                   
                   <div className="flex gap-2">
                     {s.tech.map(t => (
                       <span key={t} className="bg-black text-[#00ff00] px-1 text-xs font-bold border border-[#808080]">{t}</span>
                     ))}
                   </div>
                 </div>
               ))}
               
               <div className="border-2 border-white border-r-[#808080] border-b-[#808080] p-4 bg-[#000080] text-white flex flex-col justify-center items-center text-center">
                 <h3 className="text-2xl font-bold mb-4">Custom Request?</h3>
                 <Button asChild className="win95-btn h-10 px-8 rounded-none font-bold text-black bg-[#c0c0c0] hover:bg-[#c0c0c0]">
                   <Link to="/contact">Consult an Engineer</Link>
                 </Button>
               </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
