import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  ArrowRight, Cpu, Layers, Zap, Globe, Database,
  Terminal, BarChart, Smartphone, PenTool, Layout, Box, ShieldCheck, Mail, Code
} from "lucide-react";
import Seo from "@/components/Seo";

const Index = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const extendedServices = [
    { icon: Smartphone, title: "Application Development", desc: "Native & cross-platform mobile solutions.", color: "text-blue-400", border: "border-blue-500/30", bg: "bg-blue-500/10" },
    { icon: BarChart, title: "Business Analytics", desc: "Data-driven insights for strategic growth.", color: "text-green-400", border: "border-green-500/30", bg: "bg-green-500/10" },
    { icon: Smartphone, title: "Android Development", desc: "Optimized performance for the Android ecosystem.", color: "text-emerald-400", border: "border-emerald-500/30", bg: "bg-emerald-500/10" },
    { icon: Code, title: "Custom Software", desc: "Tailored solutions for unique enterprise needs.", color: "text-purple-400", border: "border-purple-500/30", bg: "bg-purple-500/10" },
    { icon: Terminal, title: "SaaS Development", desc: "Scalable cloud-native software products.", color: "text-cyan-400", border: "border-cyan-500/30", bg: "bg-cyan-500/10" },
    { icon: ShieldCheck, title: "Software Testing", desc: "Rigorous QA and automated testing pipelines.", color: "text-red-400", border: "border-red-500/30", bg: "bg-red-500/10" },
    { icon: PenTool, title: "UX Design", desc: "Research-backed user interface design.", color: "text-pink-400", border: "border-pink-500/30", bg: "bg-pink-500/10" },
    { icon: Layout, title: "Web Design", desc: "Modern, responsive, and aesthetic web interfaces.", color: "text-indigo-400", border: "border-indigo-500/30", bg: "bg-indigo-500/10" },
    { icon: Globe, title: "Web Development", desc: "Full-stack web applications and portals.", color: "text-orange-400", border: "border-orange-500/30", bg: "bg-orange-500/10" },
    { icon: Database, title: "Custom Solutions", desc: "End-to-end digital transformation services.", color: "text-teal-400", border: "border-teal-500/30", bg: "bg-teal-500/10" },
  ];

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#008080] font-['Courier_New'] flex flex-col pt-24 pb-12 px-4 md:px-8">
      <Seo
        title="LifeBox NextGen - Enterprise Infrastructure"
        description="LifeBox NextGen - The intelligent digital backbone for modern institutions."
      />

      <div className="container mx-auto max-w-6xl">
        {/* Main Desktop Window */}
        <div className="win95-window w-full flex flex-col mb-8">
          <div className="win95-header flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Terminal className="w-4 h-4" />
              <span>LifeBox_OS_v1.exe</span>
            </div>
            <div className="flex gap-1">
              <button className="win95-btn w-5 h-5 flex items-center justify-center text-[12px] font-bold pb-1">_</button>
              <button className="win95-btn w-5 h-5 flex items-center justify-center text-[12px] font-bold">□</button>
              <button className="win95-btn w-5 h-5 flex items-center justify-center text-[12px] font-bold">X</button>
            </div>
          </div>

          <div className="p-4 md:p-8 bg-[#c0c0c0] text-black">
            <div className="border-2 border-[#808080] border-r-white border-b-white p-6 bg-white flex flex-col items-center text-center mb-8">
              <h1 className="text-4xl md:text-6xl font-bold mb-4 font-['Courier_New']">
                Welcome to LifeBox NextGen
              </h1>
              <div className="w-full max-w-md overflow-hidden bg-black text-[#00ff00] p-2 border-2 border-[#808080] border-r-white border-b-white mb-6">
                <span className="animate-marquee block font-bold">Intelligent Infrastructure for the Future. Loading modules...</span>
              </div>
              <p className="text-lg text-black font-bold max-w-2xl mx-auto mb-8">
                Architect the future of your organization with a unified digital ecosystem.
                Seamlessly integrated AI, ERP, and Identity Management.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Button asChild className="win95-btn h-10 px-8 rounded-none font-bold text-lg hover:bg-[#c0c0c0]">
                  <Link to="/contact">Run setup.exe <ArrowRight className="ml-2 w-4 h-4 inline" /></Link>
                </Button>
                <Button asChild className="win95-btn h-10 px-8 rounded-none font-bold text-lg hover:bg-[#c0c0c0]">
                  <Link to="/products">Browse Directory</Link>
                </Button>
              </div>
            </div>

            {/* Products Folder */}
            <h2 className="text-2xl font-bold mb-4 text-[#000080] underline">C:\Products\</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {[
                { title: "Gnan AI", icon: Cpu, desc: "Automated career intelligence using advanced NLP algorithms." },
                { title: "Enterprise ERP", icon: Layers, desc: "Modular resource planning for complex multi-campus institutions." },
                { title: "Custom Eng.", icon: Zap, desc: "Bespoke high-scale infrastructure development services." }
              ].map((prod, i) => (
                <div key={i} className="border-2 border-[#808080] border-r-white border-b-white p-4 bg-[#c0c0c0] flex flex-col items-center text-center hover:bg-[#a0a0a0] cursor-pointer">
                  <prod.icon className="w-12 h-12 mb-4 text-[#000080]" />
                  <h3 className="text-xl font-bold mb-2">{prod.title}</h3>
                  <p className="text-sm font-bold mb-4">{prod.desc}</p>
                  <Link to="/products" className="win95-btn px-4 py-1 font-bold text-sm">Open</Link>
                </div>
              ))}
            </div>

            {/* Extended Capabilities */}
            <h2 className="text-2xl font-bold mb-4 text-[#000080] underline">C:\Services\</h2>
            <div className="border-2 border-[#808080] border-r-white border-b-white p-4 bg-white max-h-[300px] overflow-y-scroll">
              <table className="w-full text-left border-collapse">
                <thead className="bg-[#c0c0c0] border-b-2 border-[#808080]">
                  <tr>
                    <th className="p-2 border-r-2 border-[#808080]">Service Name</th>
                    <th className="p-2 border-r-2 border-[#808080]">Type</th>
                    <th className="p-2">Size</th>
                  </tr>
                </thead>
                <tbody>
                  {extendedServices.map((service, i) => (
                    <tr key={i} className="hover:bg-[#000080] hover:text-white cursor-pointer group">
                      <td className="p-2 flex items-center gap-2 border-r-2 border-transparent group-hover:border-[#c0c0c0]"><service.icon className="w-4 h-4 group-hover:text-white text-[#000080]" /> {service.title}.sys</td>
                      <td className="p-2 border-r-2 border-transparent group-hover:border-[#c0c0c0]">System File</td>
                      <td className="p-2">1,024 KB</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            {/* Trust Ticker Window */}
            <div className="mt-8 border-2 border-[#808080] border-r-white border-b-white p-4 bg-[#c0c0c0]">
              <h2 className="text-lg font-bold mb-4 border-b border-[#808080] pb-2 text-[#000080]">Network Neighbors</h2>
              <div className="flex flex-wrap gap-6 md:gap-12 items-start justify-center">
                 {['Beliebt', 'NextGenFreedu', 'Chandhan Nilayam', 'Red Sandel', 'BSS'].map((partner, i) => (
                    <div key={i} className="flex flex-col items-center gap-2 cursor-pointer w-24 text-center">
                      <Globe className="w-10 h-10 text-[#000080]" />
                      <span className="text-xs bg-transparent focus:bg-[#000080] focus:text-white px-1 py-[2px] font-bold border border-transparent hover:border-black dotted focus:border-dotted">{partner}</span>
                    </div>
                 ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
