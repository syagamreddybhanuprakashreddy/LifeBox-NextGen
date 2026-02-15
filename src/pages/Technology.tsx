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
    <div className="bg-white text-gray-900 font-sans min-h-screen">
      <Seo
        title="Technology Stack"
        description="Explore the engineering principles and technology stack behind LifeBox NextGen platforms."
      />

      <section className="pt-32 pb-20 border-b border-gray-100 bg-gray-50/50">
        <div className="container mx-auto px-6 lg:px-8 max-w-4xl text-center">
          <p className="text-sm font-semibold text-blue-600 uppercase tracking-widest mb-4">Under the hood</p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6">
            Built on proven, <br /> modern foundations.
          </h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
            We chose a technology stack that prioritizes developer experience, system reliability, and long-term maintainability.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {techStack.map((stack) => (
              <div key={stack.category} className="p-8 border border-gray-200 rounded-2xl bg-white hover:border-blue-300 hover:shadow-md transition-all">
                <div className="h-10 w-10 bg-gray-50 rounded-lg flex items-center justify-center text-gray-900 mb-6 border border-gray-100">
                  <stack.icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{stack.category}</h3>
                <p className="text-sm text-gray-500 mb-6">{stack.desc}</p>

                <div className="flex flex-wrap gap-2">
                  {stack.tools.map((tool) => (
                    <span key={tool} className="px-2.5 py-1 bg-gray-50 border border-gray-200 rounded text-xs font-medium text-gray-600 font-mono">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 border-t border-gray-100">
        <div className="container mx-auto px-6 lg:px-8 bg-gray-900 rounded-3xl p-10 lg:p-20 text-white text-center">
          <h2 className="text-3xl font-bold mb-6">Read our Engineering Blog</h2>
          <p className="text-gray-400 mb-10 max-w-2xl mx-auto">
            Deep dives into how we solve complex problems, from scaling real-time notifications to architecting multi-tenant databases.
          </p>
          <button className="bg-white text-gray-900 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors">
            Read Articles
          </button>
        </div>
      </section>
    </div>
  );
};

export default Technology;
