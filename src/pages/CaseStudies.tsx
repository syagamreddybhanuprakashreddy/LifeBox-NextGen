import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, BarChart3, Users, Building2, ShieldCheck } from "lucide-react";
import Seo from "@/components/Seo";

const studies = [
  {
    category: "Education",
    client: "Multi-Campus University",
    metric: "60% Efficiency Gain",
    title: "Digital Transformation at Scale",
    desc: "How a 5-campus university unified admissions, finance, and academics into a single ERP system.",
    tags: ["ERP Migration", "Cloud Deployment"],
    color: "bg-blue-50 text-blue-700 border-blue-100"
  },
  {
    category: "Recruitment",
    client: "Tech EdHub",
    metric: "40% Placement Boost",
    title: "Automating Technical Interviews",
    desc: "Scaling mock interviews for 2,000+ students using Gnan AI's automated assessment engine.",
    tags: ["AI Implementation", "Student Success"],
    color: "bg-purple-50 text-purple-700 border-purple-100"
  },
  {
    category: "Enterprise",
    client: "Global Logistics Firm",
    metric: "35% Revenue Growth",
    title: "CRM for High-Velocity Sales",
    desc: " replacing spreadsheets with an intelligent CRM to track leads and automate follow-ups.",
    tags: ["Custom CRM", "Workflow Automation"],
    color: "bg-emerald-50 text-emerald-700 border-emerald-100"
  },
  {
    category: "Assessment",
    client: "National Exam Board",
    metric: "10k Concurrent Users",
    title: "Zero-Downtime Examinations",
    desc: "Conducting secure, proctored online exams for thousands of candidates simultaneously.",
    tags: ["High Availability", "Security Audit"],
    color: "bg-orange-50 text-orange-700 border-orange-100"
  }
];

const CaseStudies = () => {
  return (
    <div className="bg-white text-gray-900 font-sans min-h-screen">
      <Seo
        title="Customer Stories"
        description="See how leading institutions use LifeBox NextGen to transform their operations."
      />

      {/* Hero Section */}
      <section className="pt-32 pb-20 border-b border-gray-100 bg-gray-50/50">
        <div className="container mx-auto px-6 lg:px-8 max-w-4xl text-center">
          <p className="text-sm font-semibold text-blue-600 uppercase tracking-widest mb-4">Case Studies</p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6">
            Real problems. <br />  Measurable outcomes.
          </h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
            We measure our success by the impact we create for our clients. Here are some of their stories.
          </p>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {studies.map((s, i) => (
              <div key={i} className="group p-8 border border-gray-200 rounded-3xl bg-white hover:border-gray-300 hover:shadow-lg transition-all cursor-pointer flex flex-col justify-between h-full">
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide border ${s.color}`}>
                      {s.category}
                    </span>
                    <span className="text-sm font-medium text-gray-400">{s.client}</span>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-lg text-gray-500 mb-6 leading-relaxed">
                    {s.desc}
                  </p>

                  <div className="flex gap-2 mb-8">
                    {s.tags.map(t => (
                      <span key={t} className="text-xs font-mono text-gray-500 bg-gray-50 px-2 py-1 rounded border border-gray-100">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-auto pt-6 border-t border-gray-100 flex items-center justify-between">
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wide font-semibold">Key Result</p>
                    <p className="text-xl font-bold text-gray-900">{s.metric}</p>
                  </div>
                  <div className="h-10 w-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-blue-600 group-hover:text-white transition-all">
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gray-900 text-white text-center">
        <h2 className="text-3xl font-bold mb-6">Start your transformation</h2>
        <p className="text-gray-400 mb-10 max-w-lg mx-auto text-lg">
          Join the forward-thinking organizations building their future with LifeBox NextGen.
        </p>
        <Button className="bg-white text-gray-900 hover:bg-gray-100 px-8 h-12 rounded-full font-bold">
          <a href="/contact">Book a Consultation</a>
        </Button>
      </section>
    </div>
  );
};

export default CaseStudies;
