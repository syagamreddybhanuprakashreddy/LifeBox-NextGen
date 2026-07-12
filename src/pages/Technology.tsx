import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Server, Database, Cloud, Shield, Terminal, Cpu } from "lucide-react";
import Seo from "@/components/Seo";

const techStack = [
  {
    category: "Frontend Architecture",
    icon: Terminal,
    desc: "Built for performance and accessibility.",
    tools: ["React 18", "TypeScript", "Tailwind CSS", "Next.js", "Radix UI", "Framer Motion"]
  },
  {
    category: "Backend Services",
    icon: Server,
    desc: "Scalable microservices and robust APIs.",
    tools: ["Node.js", "Go", "Python (FastAPI)", "GraphQL", "gRPC", "Docker"]
  },
  {
    category: "Data Infrastructure",
    icon: Database,
    desc: "Secure, consistent, and high-availability storage.",
    tools: ["PostgreSQL", "Redis", "MongoDB", "Elasticsearch", "Kafka"]
  },
  {
    category: "Cloud & DevOps",
    icon: Cloud,
    desc: "Automated deployment and orchestration.",
    tools: ["AWS", "Google Cloud", "Kubernetes", "Terraform", "GitHub Actions", "Prometheus"]
  },
  {
    category: "AI & Machine Learning",
    icon: Cpu,
    desc: "Intelligence at the core.",
    tools: ["TensorFlow", "PyTorch", "OpenAI API", "Hugging Face", "LangChain"]
  },
  {
    category: "Security",
    icon: Shield,
    desc: "Defense in depth.",
    tools: ["OAuth 2.0", "OWASP Standards", "WAF", "End-to-End Encryption"]
  }
];

const Technology = () => {
  return (
    <div className="min-h-screen bg-[#008080] font-['Courier_New'] flex flex-col pt-24 pb-12 px-4 md:px-8">
      <Seo title="Technology Stack" description="Explore the engineering principles and technology stack behind LifeBox NextGen platforms." />
      
      <div className="container mx-auto max-w-4xl">
        <div className="win95-window w-full flex flex-col mb-8">
          <div className="win95-header flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Cpu className="w-4 h-4" />
              <span>Tech_Specs.dll</span>
            </div>
            <div className="flex gap-1">
              <button className="win95-btn w-5 h-5 flex items-center justify-center text-[12px] font-bold pb-1">_</button>
              <button className="win95-btn w-5 h-5 flex items-center justify-center text-[12px] font-bold">□</button>
              <button className="win95-btn w-5 h-5 flex items-center justify-center text-[12px] font-bold">X</button>
            </div>
          </div>
          
          <div className="p-4 md:p-8 bg-[#c0c0c0] text-black">
             <div className="border-2 border-[#808080] border-r-white border-b-white p-6 bg-white mb-8 text-center">
               <h1 className="text-4xl font-bold mb-4">Technology Stack</h1>
               <p className="font-bold text-lg">Built on proven, modern foundations.</p>
             </div>

             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {techStack.map((stack) => (
                  <div key={stack.category} className="border-2 border-[#808080] border-r-white border-b-white p-4 bg-[#c0c0c0]">
                    <div className="flex items-center gap-2 border-b border-[#808080] pb-2 mb-4">
                      <stack.icon className="h-6 w-6 text-[#000080]" />
                      <h3 className="font-bold text-sm underline">{stack.category}</h3>
                    </div>
                    <p className="text-xs font-bold mb-4 h-8">{stack.desc}</p>
                    
                    <div className="win95-input p-2 bg-white">
                      <ul className="list-disc list-inside text-xs font-bold">
                        {stack.tools.map((tool) => (
                          <li key={tool}>{tool}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
             </div>
             
             <div className="border-2 border-white border-r-[#808080] border-b-[#808080] p-6 bg-[#000080] text-white text-center">
               <h2 className="text-2xl font-bold mb-4">Read our Engineering Blog</h2>
               <p className="font-bold mb-6 max-w-lg mx-auto">Deep dives into how we solve complex problems, from scaling real-time notifications to architecting multi-tenant databases.</p>
               <button className="win95-btn h-10 px-8 rounded-none font-bold text-black bg-[#c0c0c0] hover:bg-[#c0c0c0]">Read Articles.txt</button>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technology;
