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
    // Explicitly set bg-black and text-white here to override any conflicting styles
    <div className="min-h-screen bg-black text-white font-sans overflow-x-hidden relative selection:bg-blue-500/30">
      <Seo
        title="Our Protocol"
        description="LifeBox NextGen is an enterprise technology company building the digital backbone for modern institutions."
      />

      {/* Decorative Glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Hero Section */}
      <section className="pt-40 pb-24 border-b border-white/5 relative z-10 text-center bg-black">
        <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
          <p className="text-sm font-bold text-blue-500 uppercase tracking-[0.3em] mb-4">The Protocol</p>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 text-white">
            Building the <span className="text-gray-500 italic">NextGen</span> <br /> Digital Backbone.
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed mx-auto max-w-2xl">
            LifeBox NextGen was architected on a single premise: Enterprise infrastructure should be invisible, resilient, and undeniably powerful.
          </p>
        </div>
      </section>

      {/* Stats Grid */}
      <section className="py-16 border-b border-white/5 relative z-10 bg-black">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center divide-x divide-white/5">
            {stats.map(s => (
              <div key={s.label} className="px-4">
                <div className="text-4xl font-extrabold mb-2 font-mono text-white">{s.value}</div>
                <div className="text-xs font-bold text-gray-500 uppercase tracking-[0.2em]">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-32 relative z-10 bg-black">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-24 items-center">
            <div className="group">
              <div className="h-16 w-16 glass text-blue-500 rounded-2xl flex items-center justify-center mb-10 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-xl border border-blue-500/20">
                <Target className="h-8 w-8" />
              </div>
              <h2 className="text-4xl font-bold mb-6 text-white">Our Mission</h2>
              <p className="text-xl text-gray-400 leading-relaxed mb-8">
                To deliver enterprise-grade digital infrastructure that empowers organizations to operate with atomic precision and infinite scale.
              </p>
              <div className="h-1 w-20 bg-blue-600 rounded-full group-hover:w-40 transition-all" />
            </div>
            <div className="glass rounded-[2.5rem] p-12 lg:p-16 border border-white/10 relative group overflow-hidden bg-[#0A0A0A]">
              <div className="absolute -inset-1 bg-gradient-to-tr from-blue-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="h-16 w-16 glass text-blue-400 rounded-2xl flex items-center justify-center mb-10 group-hover:bg-blue-400 group-hover:text-white transition-all relative z-10 shadow-xl border border-blue-400/20">
                <Eye className="h-8 w-8" />
              </div>
              <h2 className="text-4xl font-bold mb-6 relative z-10 text-white">Our Vision</h2>
              <p className="text-xl text-gray-400 leading-relaxed relative z-10">
                To become the trusted architectural partner for the world's most innovative institutions — building the platforms that bridge the gap between present needs and future scale.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-32 bg-[#050505] border-y border-white/5 relative">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4 uppercase tracking-tighter text-white">Engineering Values</h2>
          <p className="text-gray-500 text-lg mb-20 max-w-xl mx-auto font-medium">
            Our culture is defined by technical obsession and zero-compromise excellence.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((v, i) => (
              <div key={v.title} className="glass p-10 rounded-[2rem] border border-white/10 bg-[#0A0A0A] text-left hover:border-blue-500/30 transition-all group">
                <v.icon className="h-10 w-10 text-blue-500 mb-8" />
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-blue-400 transition-colors">{v.title}</h3>
                <p className="text-gray-400 leading-relaxed">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-32 relative z-10 bg-black">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-20 text-white">Executive Leadership</h2>
          <div className="flex justify-center">
            {[
              {
                title: "Bhanu Prakash Syagam Reddy",
                role: "Founder & CEO",
                image: "https://i.ibb.co/JR5JnxxD/Whats-App-Image-2026-02-15-at-09-32-05.jpg",
                quote: "Innovation is not about complexity, it's about making the complex invisible."
              }
            ].map((l, i) => (
              <div key={i} className="group flex flex-col items-center max-w-lg">
                <div className="relative mb-8">
                  <div className="absolute inset-0 bg-blue-600 rounded-full blur-[60px] opacity-20 group-hover:opacity-40 transition-opacity duration-700" />
                  <Avatar className="h-64 w-64 rounded-full border-2 border-white/10 group-hover:border-blue-500/50 transition-all duration-500 ring-4 ring-black shadow-2xl">
                    <AvatarImage src={l.image} alt={l.title} className="object-cover" />
                    <AvatarFallback className="rounded-full bg-white/5">
                      <Building2 className="h-20 w-20 text-gray-700" />
                    </AvatarFallback>
                  </Avatar>
                </div>
                <h3 className="text-3xl font-bold text-white mb-2">{l.title}</h3>
                <p className="text-sm font-bold text-blue-500 uppercase tracking-[0.2em] mb-6">{l.role}</p>
                <p className="text-lg text-gray-400 italic font-light leading-relaxed">"{l.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
