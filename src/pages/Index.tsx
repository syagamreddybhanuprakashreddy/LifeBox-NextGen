import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  ArrowRight, Cpu, Layers, Zap, Globe, Database,
  Terminal, BarChart, Smartphone, PenTool, Layout, Box, ShieldCheck, Mail, Code
} from "lucide-react";
import Seo from "@/components/Seo";

const Index = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const extendedServices = [
    { icon: Smartphone, title: "Application Development", desc: "Native & cross-platform mobile solutions.", color: "text-blue-400", border: "border-blue-500/30", bg: "bg-blue-500/10" },
    { icon: BarChart, title: "Business Analytics", desc: "Data-driven insights for strategic growth.", color: "text-green-400", border: "border-green-500/30", bg: "bg-green-500/10" },
    { icon: Smartphone, title: "Android Development", desc: "Optimized performance for the Android ecosystem.", color: "text-emerald-400", border: "border-emerald-500/30", bg: "bg-emerald-500/10" },
    { icon: Code, title: "Custom Software", desc: "Tailored solutions for unique enterprise needs.", color: "text-purple-400", border: "border-purple-500/30", bg: "bg-purple-500/10" },
    { icon: Terminal, title: "SaaS Development", desc: "Scalable cloud-native software products.", color: "text-cyan-400", border: "border-cyan-500/30", bg: "bg-cyan-500/10" },
    { icon: ShieldCheck, title: "Software Testing", desc: "Rigorous QA and automated testing pipelines.", color: "text-red-400", border: "border-red-500/30", bg: "bg-red-500/10" },
    { icon: PenTool, title: "UX Design", desc: "Research-backed user interface design.", color: "text-pink-400", border: "border-pink-500/30", bg: "bg-pink-500/10" },
    { icon: Layout, title: "Web Design", desc: "Modern, responsive, and aesthetic web interfaces.", color: "text-indigo-400", border: "border-indigo-500/30", bg: "bg-indigo-500/10" },
    { icon: Globe, title: "Web Development", desc: "Full-stack web applications and portals.", color: "text-orange-400", border: "border-orange-500/30", bg: "bg-orange-500/10" },
    { icon: Database, title: "Custom Solutions", desc: "End-to-end digital transformation services.", color: "text-teal-400", border: "border-teal-500/30", bg: "bg-teal-500/10" },
  ];

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    // Explicitly set bg-black and text-white here to override any conflicting styles
    <div className="min-h-screen bg-black text-white font-sans overflow-x-hidden selection:bg-blue-500/30">
      <Seo
        title="NextGen Enterprise Infrastructure"
        description="LifeBox NextGen - The intelligent digital backbone for modern institutions."
      />

      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 pb-32 lg:pt-48 lg:pb-40 overflow-hidden bg-black">
        {/* Force Dark Background Layer */}
        <div className="absolute inset-0 bg-black z-0 pointer-events-none" />

        {/* Glow Effects */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <div className="absolute top-[-20%] left-[20%] w-[500px] h-[500px] bg-blue-600/20 blur-[150px] rounded-full mix-blend-screen opacity-60 animate-pulse-glow" />
          <div className="absolute bottom-[-10%] right-[10%] w-[400px] h-[400px] bg-purple-500/10 blur-[120px] rounded-full mix-blend-screen opacity-40 animate-float" />
        </div>

        <div className="container mx-auto px-6 lg:px-8 relative z-10 flex flex-col items-center justify-center text-center">



          {/* Headline - Using explicitly white text */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">
            <span className="block">Intelligent</span>
            <span className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent pb-2">Infrastructure.</span>
          </h1>

          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed mb-12 font-light tracking-wide">
            Architect the future of your organization with a unified digital ecosystem.
            Seamlessly integrated AI, ERP, and Identity Management.
          </p>

          {/* Core Graphic */}
          <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto mb-16 perspective-1000">
            <div className="absolute inset-0 bg-gradient-to-b from-blue-500/60 to-purple-600/60 rounded-full blur-3xl opacity-50 animate-pulse-glow" />
            <div className="absolute inset-0 border border-white/20 rounded-full animate-[spin_10s_linear_infinite]" />
            <div className="absolute inset-4 border border-blue-400/30 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
            <div className="absolute inset-12 border border-purple-400/30 rounded-full animate-[spin_20s_linear_infinite]" />

            {/* Center Icon */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white/90">
              <Globe className="h-16 w-16 opacity-80 animate-float" />
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full sm:w-auto">
            <Button size="lg" className="h-14 px-10 text-base bg-blue-600 hover:bg-blue-700 text-white shadow-[0_0_25px_rgba(37,99,235,0.4)] rounded-full font-bold border border-blue-400/50 transition-all hover:scale-105" asChild>
              <Link to="/contact">
                Start Transformation <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="h-14 px-10 text-base bg-transparent border-white/20 text-white hover:bg-white/10 hover:text-white rounded-full font-bold backdrop-blur-sm transition-all" asChild>
              <Link to="/products">Explore Ecosystem</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* --- PRODUCTS SECTION --- */}
      <section className="py-24 relative z-10 bg-[#050505]">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="mb-16 max-w-2xl">
            <h2 className="text-3xl font-bold text-white mb-4">Unified Ecosystem</h2>
            <p className="text-gray-400 text-lg">Powerful individually. Unstoppable together.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Product 1 */}
            <div className="bg-[#0f0f11] border border-white/10 rounded-3xl p-8 hover:border-blue-500/50 transition-colors group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-blue-500/20 transition-colors" />
              <div className="relative z-10">
                <div className="h-12 w-12 bg-blue-500/20 rounded-xl flex items-center justify-center text-blue-400 mb-6 border border-blue-500/30">
                  <Cpu className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Gnan AI</h3>
                <p className="text-gray-400 mb-6 leading-relaxed text-sm">Automated career intelligence using advanced NLP algorithms.</p>
                <Link to="/products#gnan-ai" className="text-blue-400 font-bold text-sm hover:text-white transition-colors flex items-center gap-2">
                  View Specs <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Product 2 */}
            <div className="bg-[#0f0f11] border border-white/10 rounded-3xl p-8 hover:border-purple-500/50 transition-colors group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-purple-500/20 transition-colors" />
              <div className="relative z-10">
                <div className="h-12 w-12 bg-purple-500/20 rounded-xl flex items-center justify-center text-purple-400 mb-6 border border-purple-500/30">
                  <Layers className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Enterprise ERP</h3>
                <p className="text-gray-400 mb-6 leading-relaxed text-sm">Modular resource planning for complex multi-campus institutions.</p>
                <Link to="/products" className="text-purple-400 font-bold text-sm hover:text-white transition-colors flex items-center gap-2">
                  Learn More <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Product 3 */}
            <div className="bg-[#0f0f11] border border-white/10 rounded-3xl p-8 hover:border-yellow-500/50 transition-colors group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-500/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-yellow-500/20 transition-colors" />
              <div className="relative z-10">
                <div className="h-12 w-12 bg-yellow-500/20 rounded-xl flex items-center justify-center text-yellow-400 mb-6 border border-yellow-500/30">
                  <Zap className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Custom Engineering</h3>
                <p className="text-gray-400 mb-6 leading-relaxed text-sm">Bespoke high-scale infrastructure development services.</p>
                <Link to="/services" className="text-yellow-400 font-bold text-sm hover:text-white transition-colors flex items-center gap-2">
                  Start Project <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- EXTENDED ENGINEERING CAPABILITIES --- */}
      <section className="py-24 relative z-10 bg-gradient-to-b from-[#050505] to-[#0A0A0A] border-t border-white/5 overflow-hidden">
        {/* Subtle Background Glow */}
        <div className="absolute top-0 right-1/4 w-[600px] h-[400px] bg-blue-900/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="container mx-auto px-6 lg:px-8 mb-12 flex flex-col md:flex-row justify-between items-end gap-6">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold text-white mb-2">Extended Capabilities</h2>
            <p className="text-gray-500 text-sm">Supporting services that enhance, scale, and optimize your digital products.</p>
          </div>

          {/* Scroll Controls (Desktop) */}
          <div className="hidden md:flex gap-2">
            <button onClick={scrollLeft} className="h-10 w-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/5 transition-colors">
              <ArrowRight className="h-5 w-5 rotate-180" />
            </button>
            <button onClick={scrollRight} className="h-10 w-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/5 transition-colors">
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Floating Cards Container */}
        <div className="relative w-full">
          <div
            ref={scrollContainerRef}
            className="flex md:overflow-x-auto overflow-y-hidden pb-12 px-6 lg:px-8 gap-6 scrollbar-hide snap-x"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {extendedServices.map((service, idx) => (
              <div
                key={idx}
                className="group min-w-[280px] md:min-w-[320px] bg-white/[0.02] backdrop-blur-xl border border-white/5 p-6 rounded-2xl hover:border-white/10 hover:bg-white/[0.04] transition-all duration-500 hover:-translate-y-2 snap-center relative overflow-hidden"
              >
                {/* Idle Float Animation for Icon */}
                <div className={`h-12 w-12 rounded-xl ${service.bg} flex items-center justify-center ${service.color} mb-6 border ${service.border} animate-float`} style={{ animationDelay: `${idx * 0.5}s` }}>
                  <service.icon className="h-6 w-6" />
                </div>

                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-200 transition-colors">{service.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{service.desc}</p>

                {/* Hover Glow */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="container mx-auto px-6 lg:px-8 mt-4 text-center">
          <div className="inline-block p-[1px] rounded-full bg-gradient-to-r from-transparent via-blue-500/50 to-transparent">
            <div className="bg-[#0A0A0A] rounded-full px-8 py-4 flex flex-col md:flex-row items-center gap-6">
              <span className="text-gray-300 font-medium text-sm">Need a specialized custom software solution?</span>
              <Button size="sm" className="h-10 px-6 bg-blue-600 hover:bg-blue-500 text-white rounded-full font-bold shadow-[0_0_15px_rgba(37,99,235,0.5)] animate-pulse-glow" asChild>
                <Link to="/contact">Contact Engineers</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* --- TRUST TICKER --- */}
      <section className="py-16 border-y border-white/10 bg-black">
        <div className="container mx-auto px-6 text-center">
          <p className="text-xs font-bold text-gray-600 uppercase tracking-[0.3em] mb-10">Trusted By Industry Leaders</p>
          <div className="flex flex-wrap justify-center gap-12 md:gap-20 opacity-30">
            <span className="text-2xl font-mono font-bold text-white">ACME<span className="text-gray-600">CORP</span></span>
            <span className="text-2xl font-mono font-bold text-white">GLOBAL<span className="text-gray-600">SYS</span></span>
            <span className="text-2xl font-mono font-bold text-white">VERTEX<span className="text-gray-600">EDU</span></span>
            <span className="text-2xl font-mono font-bold text-white">ALPHA<span className="text-gray-600">NET</span></span>
          </div>
        </div>
      </section>

      {/* --- FINAL CTA --- */}
      <section className="py-32 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-900/10 blur-[100px] pointer-events-none" />
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl font-bold text-white mb-8">Ready to scale?</h2>
          <Button size="lg" className="h-16 px-12 bg-white text-black hover:bg-gray-200 font-bold rounded-full text-lg shadow-xl" asChild>
            <Link to="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
