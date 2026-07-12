import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Cpu, Layers, Cloud, Database, Terminal, ShieldCheck, Network } from "lucide-react";
import Seo from "@/components/Seo";

const Index = () => {
  return (
    <div className="min-h-screen pt-24 pb-12 flex flex-col items-center overflow-x-hidden">
      <Seo
        title="LifeBox NextGen - AI Products & Tech Services"
        description="Building the AI Future. Enterprise-grade AI products and advanced technology services."
      />

      {/* Hero Section */}
      <section className="w-full max-w-7xl mx-auto px-6 pt-16 pb-24 text-center flex flex-col items-center gap-8 relative">
        {/* Glow Effects */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-cyan-500/10 rounded-full blur-[100px] -z-10 pointer-events-none"></div>
        <div className="absolute top-1/3 left-[10%] md:left-1/3 w-2 h-2 sm:w-3 sm:h-3 bg-cyan-400 rounded-full shadow-[0_0_15px_#00f0ff] animate-pulse"></div>
        <div className="absolute top-2/3 right-[10%] md:right-1/3 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-fuchsia-500 rounded-full shadow-[0_0_15px_#ff00ff] animate-pulse" style={{ backgroundColor: '#ff00ff' }}></div>

        <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-cyan-400/30 bg-cyan-400/5 text-cyan-400 text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-4">
          <span className="w-2 h-2 bg-cyan-400 shadow-[0_0_8px_#00f0ff]"></span>
          LifeBox OS v2.0 - Core AI Engine Online
        </div>
        
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white leading-[1.1] uppercase max-w-4xl mx-auto">
          Building the <br className="hidden sm:block" />
          <span className="neon-text-cyan">AI Future</span>
        </h1>
        
        <p className="text-base sm:text-lg md:text-xl text-slate-400 max-w-2xl leading-relaxed mx-auto font-['Inter']">
          LifeBox NextGen delivers groundbreaking AI products and elite technology services designed to scale your enterprise architecture into the next decade.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 pt-8 w-full max-w-md mx-auto">
          <Button asChild className="btn-tech w-full h-14 rounded-none text-sm sm:text-base">
            <Link to="/products">Explore Products</Link>
          </Button>
          <Button asChild variant="outline" className="w-full h-14 rounded-none border-white/20 text-white bg-black hover:bg-white hover:text-black font-['Space_Grotesk'] uppercase tracking-wider text-sm transition-colors">
            <Link to="/contact">Contact Sales</Link>
          </Button>
        </div>
      </section>

      {/* Featured Products */}
      <section className="w-full max-w-7xl mx-auto px-6 py-16 sm:py-24 border-t border-white/10 relative">
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-12 sm:mb-16 text-center text-white uppercase tracking-wide">
          Featured <span className="neon-text-magenta">Products</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {[
            { title: "Gnan AI Engine", desc: "Automated intelligence models tailored for institutional data pipelines and real-time processing.", icon: Cpu, color: "cyan" },
            { title: "Enterprise ERP", desc: "Modular, scalable resource planning architectures built on fault-tolerant cloud infrastructure.", icon: Layers, color: "magenta" },
            { title: "Quantum Security", desc: "Zero-trust networks and military-grade encryption protocols for absolute data sovereignty.", icon: ShieldCheck, color: "cyan" }
          ].map((prod, i) => (
            <div key={i} className="tech-card tech-border-glow p-6 sm:p-8 flex flex-col h-full bg-black">
              <div className={`w-12 h-12 border ${prod.color === 'cyan' ? 'border-cyan-400 text-cyan-400 shadow-[0_0_10px_rgba(0,240,255,0.2)]' : 'border-[#ff00ff] text-[#ff00ff] shadow-[0_0_10px_rgba(255,0,255,0.2)]'} flex items-center justify-center mb-6`}>
                <prod.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-4 text-white font-['Space_Grotesk'] uppercase">{prod.title}</h3>
              <p className="text-slate-400 flex-grow leading-relaxed font-['Inter'] text-sm sm:text-base">
                {prod.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Tech Services */}
      <section className="w-full bg-white/[0.02] border-y border-white/10 py-16 sm:py-24 mt-8 sm:mt-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-magenta-500/5 rounded-full blur-[80px] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 sm:mb-16 gap-6 sm:gap-8">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white uppercase tracking-wide mb-4">
                Tech <span className="neon-text-cyan">Services</span>
              </h2>
              <p className="text-slate-400 max-w-xl text-base sm:text-lg font-['Inter']">
                Elite engineering teams deploying high-scale infrastructure and custom algorithms for industry leaders.
              </p>
            </div>
            <Button asChild className="btn-tech h-12 px-6 sm:px-8 rounded-none shrink-0 w-full md:w-auto">
              <Link to="/services">View All Services <ArrowRight className="ml-2 w-4 h-4 inline" /></Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              { title: "Machine Learning", icon: Network },
              { title: "Cloud Architecture", icon: Cloud },
              { title: "DevOps & CI/CD", icon: Terminal },
              { title: "Data Engineering", icon: Database }
            ].map((service, i) => (
              <div key={i} className="border border-white/10 bg-black p-6 hover:bg-white/5 transition-colors cursor-pointer group flex flex-col items-center text-center">
                <service.icon className="w-10 h-10 text-slate-500 group-hover:text-cyan-400 transition-colors mb-4" />
                <h3 className="text-base sm:text-lg font-bold text-slate-300 group-hover:text-white uppercase tracking-wider font-['Space_Grotesk']">{service.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
