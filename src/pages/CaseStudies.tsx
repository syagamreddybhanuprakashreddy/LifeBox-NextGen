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
    // Explicitly set bg-black and text-white here to override any conflicting styles
    <div className="min-h-screen bg-black text-white font-sans overflow-x-hidden selection:bg-blue-500/30">
      <Seo
        title="Customer Stories"
        description="See how leading institutions use LifeBox NextGen to transform their operations."
      />

      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 pb-20 border-b border-white/5 bg-black">
        <div className="absolute inset-0 bg-blue-900/10 blur-[100px] pointer-events-none" />
        <div className="container mx-auto px-6 lg:px-8 max-w-4xl text-center relative z-10">
          <p className="text-xs font-bold text-blue-500 uppercase tracking-[0.3em] mb-4">Case Studies</p>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6">
            Real problems. <br /> <span className="text-gray-500">Measurable outcomes.</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            We measure our success by the impact we create for our clients. Here are some of their stories.
          </p>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {studies.map((s, i) => (
              <div key={i} className="group p-8 border border-white/10 rounded-[2rem] bg-[#0A0A0A] hover:border-white/20 hover:bg-[#0F0F0F] hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col justify-between h-full relative overflow-hidden">

                {/* Glow Effect */}
                <div className={`absolute top-0 right-0 w-64 h-64 rounded-full blur-[80px] opacity-0 group-hover:opacity-20 transition-opacity pointer-events-none ${s.color.split(' ')[2].replace('/10', '/30')}`} />

                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-8">
                    <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border ${s.color}`}>
                      {s.category}
                    </span>
                    <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">{s.client}</span>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-lg text-gray-400 mb-8 leading-relaxed font-light">
                    {s.desc}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {s.tags.map(t => (
                      <span key={t} className="text-[10px] font-bold text-gray-500 bg-white/5 px-2 py-1 rounded border border-white/5 uppercase tracking-wide">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between relative z-10">
                  <div>
                    <p className="text-[10px] text-gray-500 uppercase tracking-widest font-bold mb-1">Key Result</p>
                    <p className="text-xl font-bold text-white font-mono">{s.metric}</p>
                  </div>
                  <div className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 group-hover:bg-white group-hover:text-black transition-all">
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-black text-white text-center border-t border-white/5 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/5 blur-[100px] rounded-full pointer-events-none" />
        <div className="relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Start your transformation</h2>
          <p className="text-gray-400 mb-10 max-w-lg mx-auto text-lg">
            Join the forward-thinking organizations building their future with LifeBox NextGen.
          </p>
          <Button size="lg" className="bg-white text-black hover:bg-gray-200 px-8 h-12 rounded-full font-bold shadow-[0_0_20px_rgba(255,255,255,0.1)]" asChild>
            <Link to="/contact">Book a Consultation</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;
