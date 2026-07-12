import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Users, Zap, Heart, Globe, Award, CheckCircle2 } from "lucide-react";
import Seo from "@/components/Seo";

const values = [
  { icon: Zap, title: "High Velocity", desc: "We ship fast. We iterate. We don't let bureaucracy slow us down." },
  { icon: Users, title: "Radical Candor", desc: "We care personally and challenge directly. Feedback is a gift." },
  { icon: Heart, title: "Customer Obsession", desc: "We start with the customer and work backwards." },
  { icon: Globe, title: "Global Mindset", desc: "We are building for the world, not just a local market." },
];

const positions: any[] = [];

const Careers = () => {
  return (
    <div className="min-h-screen bg-[#008080] font-['Courier_New'] flex flex-col pt-24 pb-12 px-4 md:px-8">
      <Seo title="Careers at LifeBox" description="Join our world-class engineering team." />
      
      <div className="container mx-auto max-w-4xl">
        <div className="win95-window w-full flex flex-col mb-8">
          <div className="win95-header flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              <span>Careers.exe</span>
            </div>
            <div className="flex gap-1">
              <button className="win95-btn w-5 h-5 flex items-center justify-center text-[12px] font-bold pb-1">_</button>
              <button className="win95-btn w-5 h-5 flex items-center justify-center text-[12px] font-bold">□</button>
              <button className="win95-btn w-5 h-5 flex items-center justify-center text-[12px] font-bold">X</button>
            </div>
          </div>
          
          <div className="p-4 md:p-8 bg-[#c0c0c0] text-black">
             <div className="border-2 border-[#808080] border-r-white border-b-white p-6 bg-white mb-8 text-center">
               <h1 className="text-4xl font-bold mb-4">Join Our Team</h1>
               <p className="font-bold text-lg mb-4">Build the future of enterprise software.</p>
             </div>

             <h2 className="text-2xl font-bold mb-4 underline text-[#000080]">C:\Culture\</h2>
             <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {values.map((v) => (
                  <div key={v.title} className="border-2 border-[#808080] border-r-white border-b-white p-2 bg-[#c0c0c0] flex flex-col items-center text-center">
                    <v.icon className="h-6 w-6 mb-2 text-[#000080]" />
                    <h3 className="font-bold text-sm underline mb-1">{v.title}</h3>
                    <p className="text-xs font-bold leading-tight">{v.desc}</p>
                  </div>
                ))}
             </div>

             <h2 className="text-2xl font-bold mb-4 underline text-[#000080]">C:\Jobs\Openings\</h2>
             <div className="border-2 border-[#808080] border-r-white border-b-white p-4 bg-white">
                {positions.length > 0 ? (
                  <table className="w-full text-left border-collapse">
                    <thead className="bg-[#c0c0c0] border-b-2 border-black">
                      <tr>
                        <th className="p-2 border-r-2 border-black">Title</th>
                        <th className="p-2 border-r-2 border-black">Dept</th>
                        <th className="p-2 border-r-2 border-black">Location</th>
                        <th className="p-2">Type</th>
                      </tr>
                    </thead>
                    <tbody>
                      {positions.map((p, i) => (
                        <tr key={i} className="hover:bg-[#000080] hover:text-white cursor-pointer group">
                          <td className="p-2 border-r-2 border-transparent group-hover:border-[#c0c0c0] font-bold underline">{p.title}</td>
                          <td className="p-2 border-r-2 border-transparent group-hover:border-[#c0c0c0]">{p.dept}</td>
                          <td className="p-2 border-r-2 border-transparent group-hover:border-[#c0c0c0]">{p.loc}</td>
                          <td className="p-2">{p.type}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                ) : (
                  <div className="win95-input p-4 bg-black text-[#00ff00] text-center font-bold">
                    System Message: 0 positions found.<br/>
                    Currently, there are no open roles. Please check back later.
                  </div>
                )}
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Careers;
