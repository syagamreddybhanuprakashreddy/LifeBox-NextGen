import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, BarChart3, Users, Building2, ShieldCheck } from "lucide-react";
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
    color: "text-blue-400 border-blue-500/30 bg-blue-500/10"
  },
  {
    category: "Recruitment",
    client: "Tech EdHub",
    metric: "40% Placement Boost",
    title: "Automating Technical Interviews",
    desc: "Scaling mock interviews for 2,000+ students using Gnan AI's automated assessment engine.",
    tags: ["AI Implementation", "Student Success"],
    color: "text-purple-400 border-purple-500/30 bg-purple-500/10"
  },
  {
    category: "Enterprise",
    client: "Global Logistics Firm",
    metric: "35% Revenue Growth",
    title: "CRM for High-Velocity Sales",
    desc: "Replacing spreadsheets with an intelligent CRM to track leads and automate follow-ups.",
    tags: ["Custom CRM", "Workflow Automation"],
    color: "text-emerald-400 border-emerald-500/30 bg-emerald-500/10"
  },
  {
    category: "Assessment",
    client: "National Exam Board",
    metric: "10k Concurrent Users",
    title: "Zero-Downtime Examinations",
    desc: "Conducting secure, proctored online exams for thousands of candidates simultaneously.",
    tags: ["High Availability", "Security Audit"],
    color: "text-orange-400 border-orange-500/30 bg-orange-500/10"
  }
];

const CaseStudies = () => {
  return (
    <div className="min-h-screen bg-[#008080] font-['Courier_New'] flex flex-col pt-24 pb-12 px-4 md:px-8">
      <Seo title="Customer Stories" description="See how leading institutions use LifeBox NextGen to transform their operations." />
      
      <div className="container mx-auto max-w-4xl">
        <div className="win95-window w-full flex flex-col mb-8">
          <div className="win95-header flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              <span>Customer_Stories.mdb</span>
            </div>
            <div className="flex gap-1">
              <button className="win95-btn w-5 h-5 flex items-center justify-center text-[12px] font-bold pb-1">_</button>
              <button className="win95-btn w-5 h-5 flex items-center justify-center text-[12px] font-bold">□</button>
              <button className="win95-btn w-5 h-5 flex items-center justify-center text-[12px] font-bold">X</button>
            </div>
          </div>
          
          <div className="p-4 md:p-8 bg-[#c0c0c0] text-black">
             <div className="border-2 border-[#808080] border-r-white border-b-white p-6 bg-white mb-8 text-center">
               <h1 className="text-4xl font-bold mb-4">Customer Stories</h1>
               <p className="font-bold text-lg mb-4">Real problems. Measurable outcomes.</p>
             </div>

             <div className="grid md:grid-cols-2 gap-6">
                {studies.map((s, i) => (
                  <div key={i} className="border-2 border-[#808080] border-r-white border-b-white p-4 bg-[#c0c0c0] flex flex-col justify-between">
                    <div>
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4 border-b border-[#808080] pb-2 gap-2">
                        <span className="font-bold underline text-[#000080]">{s.category}</span>
                        <span className="text-sm font-bold bg-white px-1 border border-[#808080] self-start">{s.client}</span>
                      </div>
                      <h3 className="text-xl font-bold mb-2">{s.title}</h3>
                      <p className="font-bold text-sm mb-4">{s.desc}</p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {s.tags.map(t => (
                          <span key={t} className="text-[10px] font-bold bg-white border border-[#808080] px-1 uppercase">{t}</span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="win95-input p-2 bg-black text-[#00ff00] flex justify-between items-center mt-4">
                      <div>
                        <p className="text-[10px] uppercase font-bold text-white underline">Key Result</p>
                        <p className="font-bold">{s.metric}</p>
                      </div>
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>
                ))}
             </div>
             
             <div className="mt-8 border-2 border-[#808080] border-r-white border-b-white p-6 bg-white text-center">
               <h2 className="text-2xl font-bold mb-4">Start your transformation</h2>
               <Button asChild className="win95-btn h-10 px-8 rounded-none font-bold text-black bg-[#c0c0c0] hover:bg-[#c0c0c0]">
                 <Link to="/contact">Book a Consultation</Link>
               </Button>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;
