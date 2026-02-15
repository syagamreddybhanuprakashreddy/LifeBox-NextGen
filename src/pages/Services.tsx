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
    title: "Enterprise Solutions",
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
    title: "Cloud Interface",
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
    <div className="bg-white text-gray-900 font-sans min-h-screen">
      <Seo
        title="Services"
        description="End-to-end engineering services. From custom software development to cloud infrastructure."
      />

      {/* Services Header */}
      <section className="pt-32 pb-20 border-b border-gray-100 bg-gray-50/50">
        <div className="container mx-auto px-6 lg:px-8 max-w-5xl">
          <p className="text-sm font-semibold text-blue-600 uppercase tracking-widest mb-4">Our Expertise</p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6">
            Engineering services <br /> for high-scale problems.
          </h1>
          <p className="text-xl text-gray-500 max-w-2xl leading-relaxed">
            We don't just write code. We architect systems that drive business outcomes.
          </p>
        </div>
      </section>

      {/* Main Services Grid */}
      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s, i) => (
              <div key={s.title} className="group p-8 rounded-2xl border border-gray-200 bg-white hover:border-gray-300 hover:shadow-lg transition-all duration-300 flex flex-col items-start">
                <div className="h-12 w-12 rounded-lg bg-gray-100 flex items-center justify-center text-gray-900 mb-6 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
                  <s.icon className="h-6 w-6" />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">{s.title}</h3>
                <p className="text-gray-500 mb-8 leading-relaxed text-sm flex-grow">{s.description}</p>

                <div className="w-full space-y-6">
                  <div className="pt-6 border-t border-gray-100">
                    <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Deliverables</h4>
                    <ul className="space-y-2">
                      {s.deliverables.map(d => (
                        <li key={d} className="flex items-center gap-2 text-sm text-gray-700 font-medium">
                          <div className="h-1.5 w-1.5 rounded-full bg-blue-600" />
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {s.tech.map(t => (
                      <span key={t} className="px-2 py-1 bg-gray-50 border border-gray-200 rounded text-[10px] uppercase font-mono text-gray-500">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}

            {/* Call to Action Card */}
            <div className="p-8 rounded-2xl border border-blue-100 bg-blue-50 flex flex-col justify-center items-start">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Need something specific?</h3>
              <p className="text-blue-700 mb-8 leading-relaxed">
                We specialize in solving unique technical challenges. Let's discuss your specific requirements.
              </p>
              <Button asChild className="bg-blue-600 text-white hover:bg-blue-700 h-12 px-6 w-full">
                <Link to="/contact">Book Technical Call <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-24 border-t border-gray-100">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-6">Our Engineering Approach</h2>
              <p className="text-lg text-gray-500 mb-8 max-w-lg leading-relaxed">
                We follow a rigorous, transparent process to ensure every project is delivered on time and bug-free.
              </p>

              <div className="space-y-8">
                {[
                  { title: "Discovery & Architecture", desc: "Detailed technical specs and system design before a single line of code is written." },
                  { title: "Iterative Development", desc: "Two-week sprints with demonstrable progress and continuous feedback loops." },
                  { title: "Quality Assurance", desc: "Automated testing, manual reviews, and security audits integrated into the pipeline." },
                  { title: "Deployment & Scale", desc: "Production rollout strategies that ensure zero downtime and instant scalability." }
                ].map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0 h-8 w-8 rounded-full border border-gray-200 bg-gray-50 flex items-center justify-center font-mono text-xs font-bold text-gray-600">
                      {index + 1}
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-gray-900 mb-1">{item.title}</h4>
                      <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-blue-100 rounded-3xl transform rotate-3" />
              <div className="relative bg-gray-900 rounded-3xl p-8 lg:p-12 shadow-2xl text-white">
                <pre className="font-mono text-sm leading-relaxed text-blue-100 overflow-x-auto">
                  {`const Methodology = {
  efficiency: "High",
  security: "Enterprise-Grade",
  transparency: 100,
  
  deploy: async () => {
    await analyze();
    await build();
    await test();
    return "Success";
  }
};`}
                </pre>
                <div className="mt-8 pt-8 border-t border-gray-800">
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-full bg-green-500/10 flex items-center justify-center text-green-500">
                      <CheckCircle2 className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-sm font-bold">Guaranteed Delivery</div>
                      <div className="text-xs text-gray-400">On Time. On Budget.</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
