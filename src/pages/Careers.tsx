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

const positions = [
  { title: "Senior Backend Engineer", dept: "Engineering", loc: "Remote (India)", type: "Full-time" },
  { title: "Product Designer", dept: "Design", loc: "Hyderabad / Remote", type: "Full-time" },
  { title: "Enterprise Account Executive", dept: "Sales", loc: "Mumbai", type: "Full-time" },
  { title: "DevOps Specialist", dept: "Infrastructure", loc: "Remote", type: "Contract" },
];

const Careers = () => {
  return (
    <div className="bg-white text-gray-900 font-sans min-h-screen">
      <Seo
        title="Careers at LifeBox"
        description="Join our world-class engineering team. We are building the operating system for modern institutions."
      />

      {/* Hero Section */}
      <section className="pt-32 pb-20 border-b border-gray-100 bg-gray-50/50">
        <div className="container mx-auto px-6 lg:px-8 max-w-4xl text-center">
          <p className="text-sm font-semibold text-blue-600 uppercase tracking-widest mb-4">We are hiring</p>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900 mb-8">
            Build the future of <br />  enterprise software.
          </h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Join a team of builders, designers, and problem solvers obsessed with quality and scale.
          </p>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-left mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our DNA</h2>
            <p className="text-lg text-gray-500 max-w-2xl">
              We are not a typical 9-to-5 company. We are a high-performance team on a mission.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v) => (
              <div key={v.title} className="p-8 border border-gray-100 rounded-2xl bg-white hover:border-gray-200 hover:shadow-sm transition-all">
                <div className="h-12 w-12 bg-gray-50 rounded-xl flex items-center justify-center text-gray-900 mb-6">
                  <v.icon className="h-6 w-6" />
                </div>
                <h3 className="font-bold text-gray-900 mb-3">{v.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Break */}
      <section className="py-24 bg-gray-900 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-900/10 -skew-x-12 transform origin-top-right" />
        <div className="container mx-auto px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Perks & Benefits</h2>
            <div className="grid grid-cols-2 gap-4">
              {["Competitive Equity", "Remote-First Culture", "Premium Health Insurance", "Learning Budget", "Latest MacBook Pro", "Annual Retreats"].map(p => (
                <div key={p} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-blue-400" />
                  <span className="text-gray-300 font-medium">{p}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="h-64 mt-10 md:mt-0 aspect-square bg-gray-800 rounded-2xl border border-gray-700 flex items-center justify-center">
            <span className="text-gray-600 font-mono text-xs p-8 text-center">
                  // Image Placeholder: <br /> Team collaboration / Office vibes
            </span>
          </div>
        </div>
      </section>

      {/* Open Positions List */}
      <section className="py-24" id="openings">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="mb-12 flex justify-between items-end">
            <h2 className="text-3xl font-bold text-gray-900">Open Roles</h2>
            <Button variant="ghost" className="text-blue-600 hover:text-blue-700">View all on Lever <ArrowRight className="ml-2 h-4 w-4" /></Button>
          </div>

          <div className="space-y-4">
            {positions.map((p, i) => (
              <div key={i} className="group flex items-center justify-between p-6 border border-gray-100 rounded-xl hover:border-blue-200 hover:bg-blue-50/30 transition-all cursor-pointer">
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-blue-700 transition-colors">{p.title}</h3>
                  <div className="flex gap-3 text-sm text-gray-500 font-medium">
                    <span>{p.dept}</span>
                    <span>•</span>
                    <span>{p.loc}</span>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Badge variant="secondary" className="bg-gray-100 text-gray-600 font-normal group-hover:bg-white">{p.type}</Badge>
                  <ArrowRight className="h-5 w-5 text-gray-300 group-hover:text-blue-600 transition-colors" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
