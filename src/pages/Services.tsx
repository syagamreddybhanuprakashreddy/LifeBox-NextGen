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
    <div className="bg-[#0B0F19] text-white font-sans min-h-screen relative overflow-hidden">
      <Seo
        title="Engineering Services"
        description="End-to-end engineering services. From custom software development to cloud infrastructure."
      />

      {/* Decorative Glow */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Services Header */}
      <section className="pt-40 pb-24 border-b border-white/5 relative z-10">
        <div className="container mx-auto px-6 lg:px-8 max-w-5xl">
          <p className="text-sm font-bold text-blue-500 uppercase tracking-[0.3em] mb-4">Our Expertise</p>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-tight">
            Engineering for <br /> <span className="text-gray-500 italic">High-Scale Solutions.</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl leading-relaxed">
            We don't just write code. We architect resilient systems that define modern enterprise operations.
          </p>
        </div>
      </section>

      {/* Main Services Grid */}
      <section className="py-32 relative z-10">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s, i) => (
              <div key={s.title} className="group p-10 rounded-[2rem] glass glass-hover flex flex-col items-start animate-fade-in mouse-glow">
                <div className="h-14 w-14 rounded-2xl bg-blue-600/10 flex items-center justify-center text-blue-500 mb-8 border border-blue-500/20 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 shadow-xl">
                  <s.icon className="h-7 w-7" />
                </div>

                <h3 className="text-2xl font-bold mb-4">{s.title}</h3>
                <p className="text-gray-400 mb-10 leading-relaxed text-sm flex-grow">{s.description}</p>

                <div className="w-full space-y-8">
                  <div className="pt-8 border-t border-white/5">
                    <h4 className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em] mb-4">Core Deliverables</h4>
                    <ul className="space-y-3">
                      {s.deliverables.map(d => (
                        <li key={d} className="flex items-center gap-3 text-[13px] text-gray-300 font-medium">
                          <div className="h-1 w-3 bg-blue-600 rounded-full" />
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {s.tech.map(t => (
                      <span key={t} className="px-3 py-1 glass rounded-full text-[10px] uppercase font-bold tracking-widest text-blue-400/80">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}

            {/* Call to Action Card */}
            <div className="p-10 rounded-[2rem] bg-blue-600 flex flex-col justify-center items-start shadow-[0_0_50px_rgba(37,99,235,0.3)] group overflow-hidden relative">
              <div className="absolute -inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <h3 className="text-4xl font-extrabold text-white mb-6 relative z-10">Custom <br />Request?</h3>
              <p className="text-blue-100 mb-10 leading-relaxed text-lg relative z-10">
                Architecting unique solutions for zero-compromise scalability.
              </p>
              <Button asChild className="bg-white text-blue-600 hover:bg-blue-50 h-14 px-8 w-full rounded-2xl font-bold text-lg relative z-10 shadow-xl transition-transform hover:scale-[1.02]">
                <Link to="/contact">Consult an Engineer</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-32 border-t border-white/5 relative">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">Our Engineering Protocol</h2>
              <p className="text-xl text-gray-400 mb-12 max-w-lg leading-relaxed">
                We follow a rigorous protocol to ensure every deployment is atomic, secure, and resilient.
              </p>

              <div className="space-y-12">
                {[
                  { title: "Technical Discovery", desc: "Detailed specifications and infrastructure diagrams before first commit." },
                  { title: "Atomic Development", desc: "Rigorous sprints with continuous integration and real-time observability." },
                  { title: "Audit & Validation", desc: "Multi-layer security audits and automated performance validation." },
                  { title: "Scale Deployment", desc: "Global rollout strategies with zero-downtime guarantees." }
                ].map((item, index) => (
                  <div key={index} className="flex gap-6 group">
                    <div className="flex-shrink-0 h-12 w-12 rounded-2xl glass border-white/5 flex items-center justify-center font-mono text-xs font-bold text-blue-500 group-hover:border-blue-500/50 transition-all">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                      <p className="text-gray-500 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative group">
              <div className="absolute -inset-4 bg-blue-500/10 blur-[80px] rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative glass rounded-[2.5rem] p-10 lg:p-14 overflow-hidden shadow-2xl animate-float">
                <pre className="font-mono text-sm leading-relaxed text-blue-300 overflow-x-auto">
                  {`const EnterpriseProtocol = {
  efficiency: "Sub-atomic",
  security: "Zero-Trust",
  scalability: "Infinite",
  
  deploy: async (params) => {
    const audit = await verify(params);
    if (audit.passed) {
      return await cloud.orchestrate({
        region: "Global",
        resilience: 1.0
      });
    }
  }
};`}
                </pre>
                <div className="mt-12 pt-12 border-t border-white/10">
                  <div className="flex items-center gap-6">
                    <div className="h-14 w-14 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-500 border border-emerald-500/20 shadow-[0_0_20px_rgba(16,185,129,0.2)]">
                      <CheckCircle2 className="h-7 w-7" />
                    </div>
                    <div>
                      <div className="text-lg font-bold">Guaranteed Uptime</div>
                      <div className="text-sm text-gray-500 font-mono">SLA: 99.999% Availability</div>
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
