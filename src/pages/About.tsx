import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Target, Eye, ShieldCheck, Users, Award, Building2 } from "lucide-react";
import Seo from "@/components/Seo";

const stats = [
  { label: "Active Nodes", value: "10k+" },
  { label: "Global Partners", value: "50+" },
  { label: "Core Uptime", value: "99.99%" },
  { label: "Data Integrity", value: "SOC-2" },
];

const values = [
  {
    icon: ShieldCheck,
    title: "Zero-Trust Security",
    desc: "We treat data privacy as foundational. Our Zero-Trust architecture ensures every bit is encrypted and every interaction is authenticated."
  },
  {
    icon: Users,
    title: "User-Centric Complexity",
    desc: "We embrace complexity to simplify user experience. Powerful enterprise capabilities shouldn't mean a steep learning curve."
  },
  {
    icon: Award,
    title: "Atomic Excellence",
    desc: "Engineering at LifeBox means writing atomic, resilient, and high-performance code that stands the test of global scale."
  }
];

const About = () => {
  return (
    <div className="min-h-screen bg-[#008080] font-['Courier_New'] flex flex-col pt-24 pb-12 px-4 md:px-8">
      <Seo title="Our Protocol" description="LifeBox NextGen is an enterprise technology company building the digital backbone for modern institutions." />
      
      <div className="container mx-auto max-w-4xl">
        <div className="win95-window w-full flex flex-col mb-8">
          <div className="win95-header flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              <span>About_Us.txt</span>
            </div>
            <div className="flex gap-1">
              <button className="win95-btn w-5 h-5 flex items-center justify-center text-[12px] font-bold pb-1">_</button>
              <button className="win95-btn w-5 h-5 flex items-center justify-center text-[12px] font-bold">□</button>
              <button className="win95-btn w-5 h-5 flex items-center justify-center text-[12px] font-bold">X</button>
            </div>
          </div>
          
          <div className="p-4 md:p-8 bg-[#c0c0c0] text-black">
             <div className="border-2 border-[#808080] border-r-white border-b-white p-6 bg-white mb-8">
               <h1 className="text-4xl font-bold mb-4">LifeBox_NextGen</h1>
               <p className="font-bold text-lg mb-4">Enterprise infrastructure should be invisible, resilient, and undeniably powerful.</p>
               
               <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                 {stats.map(s => (
                   <div key={s.label} className="border-2 border-[#808080] border-r-white border-b-white bg-[#c0c0c0] p-2 text-center">
                     <div className="text-xl font-bold mb-1">{s.value}</div>
                     <div className="text-xs font-bold underline">{s.label}</div>
                   </div>
                 ))}
               </div>
             </div>

             <h2 className="text-2xl font-bold mb-4 underline text-[#000080]">C:\Values\</h2>
             <div className="grid md:grid-cols-3 gap-6 mb-8">
                {values.map((v, i) => (
                  <div key={v.title} className="border-2 border-[#808080] border-r-white border-b-white p-4 bg-[#c0c0c0]">
                    <v.icon className="h-8 w-8 mb-2 text-[#000080]" />
                    <h3 className="text-lg font-bold mb-2">{v.title}</h3>
                    <p className="text-sm font-bold">{v.desc}</p>
                  </div>
                ))}
             </div>

             <h2 className="text-2xl font-bold mb-4 underline text-[#000080]">C:\Leadership\</h2>
             <div className="border-2 border-[#808080] border-r-white border-b-white p-4 bg-white flex flex-col md:flex-row items-center gap-6">
                <div className="border-4 border-[#c0c0c0] p-1 bg-black">
                  <Avatar className="h-32 w-32 rounded-none">
                    <AvatarImage src="https://i.ibb.co/JR5JnxxD/Whats-App-Image-2026-02-15-at-09-32-05.jpg" className="rounded-none object-cover" />
                    <AvatarFallback className="rounded-none bg-[#c0c0c0] text-black">BSR</AvatarFallback>
                  </Avatar>
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Bhanu Prakash Syagam Reddy</h3>
                  <p className="font-bold mb-2">Founder & CEO</p>
                  <div className="win95-input p-2 bg-white italic font-bold">
                    "Innovation is not about complexity, it's about making the complex invisible."
                  </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
