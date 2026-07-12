import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Cpu, Layers, Cloud, Database, Terminal, ShieldCheck, Network, Brain, GraduationCap, Star, Quote, Globe, Users, Building2, ChevronRight, CheckCircle2, Activity } from "lucide-react";
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

      {/* Trusted By Marquee */}
      <section className="w-full border-y border-white/5 bg-black/50 py-8 overflow-hidden relative z-20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-[10px] uppercase tracking-[0.3em] text-slate-500 mb-6 font-bold">Trusted by Forward-Thinking Enterprises</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            <span className="text-xl font-bold font-['Space_Grotesk'] text-white">NEXUS<span className="text-cyan-400">CORP</span></span>
            <span className="text-xl font-bold font-serif italic text-white">Aether Financial</span>
            <span className="text-xl font-bold tracking-widest text-white">SYNERGY</span>
            <span className="text-xl font-bold font-mono text-white">QUANTUM_LABS</span>
            <span className="text-xl font-black uppercase text-white">Omni<span className="text-[#ff00ff]">Tech</span></span>
          </div>
        </div>
      </section>

      {/* About LifeBox */}
      <section className="w-full bg-white/[0.02] border-y border-white/10 py-16 sm:py-24 relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-[80px] pointer-events-none -translate-y-1/2"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-cyan-400/30 bg-cyan-400/5 text-cyan-400 text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-6">
                <span className="w-2 h-2 bg-cyan-400 shadow-[0_0_8px_#00f0ff]"></span>
                About LifeBox NextGen
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white uppercase tracking-wide mb-6">
                Architecting <span className="neon-text-cyan">Tomorrow's</span> Digital Infrastructure
              </h2>
              <p className="text-slate-400 text-lg leading-relaxed font-['Inter'] mb-8">
                LifeBox NextGen is a premier technology incubator and product suite designed to bridge the gap between complex AI research and practical enterprise application. We build scalable, secure, and intelligent systems that power the next generation of digital experiences.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                {[
                  { value: "99.9%", label: "System Uptime", icon: Activity },
                  { value: "50+", label: "Enterprise Partners", icon: Building2 },
                  { value: "10x", label: "Workflow Acceleration", icon: Terminal },
                  { value: "AES-256", label: "Data Encryption", icon: ShieldCheck }
                ].map((stat, i) => (
                  <div key={i} className="flex flex-col border-l-2 border-cyan-400/30 pl-4">
                    <stat.icon className="w-5 h-5 text-cyan-400 mb-2" />
                    <span className="text-2xl font-bold text-white font-['Space_Grotesk']">{stat.value}</span>
                    <span className="text-sm text-slate-500 uppercase tracking-wider">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square border border-white/10 bg-black p-8 relative flex items-center justify-center overflow-hidden tech-border-glow">
                <div className="absolute inset-0 bg-white/[0.02] opacity-50" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.1) 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
                <div className="relative z-10 w-full h-full border border-white/5 bg-white/[0.02] flex items-center justify-center rounded-full animate-[spin_60s_linear_infinite]">
                  <div className="w-3/4 h-3/4 border border-cyan-400/20 rounded-full flex items-center justify-center">
                    <div className="w-1/2 h-1/2 border border-[#ff00ff]/20 rounded-full flex items-center justify-center">
                       <Brain className="w-12 h-12 text-white animate-pulse" />
                    </div>
                  </div>
                </div>
                
                {/* Orbiting Elements */}
                <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-cyan-400 rounded-full shadow-[0_0_10px_#00f0ff] animate-ping"></div>
                <div className="absolute bottom-1/4 right-1/4 w-3 h-3 bg-[#ff00ff] rounded-full shadow-[0_0_10px_#ff00ff] animate-ping" style={{ animationDelay: '1s' }}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="w-full max-w-7xl mx-auto px-6 py-16 sm:py-24 border-t border-white/10 relative">
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-12 sm:mb-16 text-center text-white uppercase tracking-wide">
          Featured <span className="neon-text-magenta">Products</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {[
            { title: "Gnan AI", link: "/gnan-ai", desc: "Advanced career intelligence ecosystem leveraging NLP and behavioral modeling.", icon: Brain, imgLogo: "/gnan-ai-logo-transparent.png", color: "magenta" },
            { title: "NextGenFreedu", link: "https://nextgenfreedu.site", desc: "Accessible professional education platform with rigorous testing and certification.", icon: GraduationCap, color: "cyan" },
            { title: "LifeOS", link: "https://lifebox-community.web.app/", desc: "Unified digital ecosystem offering single sign-on and cross-app data synchronization.", icon: Globe, color: "cyan" },
            { title: "Enterprise ERP", link: "/products", desc: "Modular, scalable resource planning architectures built on fault-tolerant cloud infrastructure.", icon: Building2, color: "magenta" },
            { title: "CRM Platform", link: "/products", desc: "Intelligent relationship management capturing, tracking, and nurturing leads.", icon: Users, color: "cyan" },
            { title: "Quantum Security", link: "/products", desc: "Zero-trust networks and military-grade encryption protocols for absolute data sovereignty.", icon: ShieldCheck, color: "cyan" }
          ].map((prod, i) => {
            const content = (
              <>
                {i === 0 && (
                  <div className="absolute top-0 right-0 bg-[#ff00ff]/20 text-[#ff00ff] text-[10px] font-bold px-2 py-1 uppercase tracking-widest border-b border-l border-[#ff00ff]/30 z-10">
                    Main Product
                  </div>
                )}
                <div className={`${prod.imgLogo ? 'w-32 h-32 sm:w-40 sm:h-40 -ml-4 -mt-4 mb-2' : 'w-16 h-16 mb-6'} flex items-center justify-center ${prod.imgLogo ? '' : `border ${prod.color === 'cyan' ? 'border-cyan-400 text-cyan-400 shadow-[0_0_10px_rgba(0,240,255,0.2)]' : 'border-[#ff00ff] text-[#ff00ff] shadow-[0_0_10px_rgba(255,0,255,0.2)] bg-white/5'} p-4`}`}>
                  {prod.imgLogo ? (
                    <img src={prod.imgLogo} alt={prod.title} className="w-full h-full object-contain drop-shadow-[0_0_12px_rgba(255,0,255,0.6)]" />
                  ) : (
                    <prod.icon className="w-8 h-8" />
                  )}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-4 text-white font-['Space_Grotesk'] uppercase group-hover:text-cyan-400 transition-colors">{prod.title}</h3>
                <p className="text-slate-400 flex-grow leading-relaxed font-['Inter'] text-sm sm:text-base">
                  {prod.desc}
                </p>
              </>
            );

            const className = "tech-card tech-border-glow p-6 sm:p-8 flex flex-col h-full bg-black relative group cursor-pointer block hover:bg-white/[0.02] transition-colors";

            return prod.link.startsWith('/') ? (
              <Link key={i} to={prod.link} className={className}>
                {content}
              </Link>
            ) : (
              <a key={i} href={prod.link} className={className}>
                {content}
              </a>
            );
          })}
        </div>
      </section>

      {/* Integration Protocol */}
      <section className="w-full max-w-7xl mx-auto px-6 py-16 sm:py-24 relative">
        <div className="absolute right-0 top-1/2 w-[400px] h-[400px] bg-magenta-500/5 rounded-full blur-[100px] pointer-events-none -translate-y-1/2"></div>
        <div className="text-center mb-16 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-[#ff00ff]/30 bg-[#ff00ff]/5 text-[#ff00ff] text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-6">
            <span className="w-2 h-2 bg-[#ff00ff] shadow-[0_0_8px_#ff00ff]"></span>
            System Architecture
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white uppercase tracking-wide mb-4">
            Deployment <span className="neon-text-magenta">Protocol</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto font-['Inter']">Seamless integration architecture designed for zero-downtime enterprise migration.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
          {[
            { step: "01", title: "Infrastructure Audit", desc: "Deep-dive analysis of your existing monolithic structures and data pipelines.", icon: Database },
            { step: "02", title: "AI Model Training", desc: "Custom deployment of neural networks tailored to your specific operational datasets.", icon: Brain },
            { step: "03", title: "Global Scaling", desc: "Automated container orchestration and load balancing across edge nodes.", icon: Cloud }
          ].map((phase, i) => (
            <div key={i} className="relative border border-white/10 bg-black p-8 hover:border-cyan-400/50 transition-colors group">
              <div className="absolute top-0 right-0 p-4 text-4xl font-black text-white/5 group-hover:text-cyan-400/10 transition-colors font-['Space_Grotesk']">
                {phase.step}
              </div>
              <phase.icon className="w-10 h-10 text-cyan-400 mb-6" />
              <h3 className="text-xl font-bold text-white uppercase tracking-wide mb-3 font-['Space_Grotesk']">{phase.title}</h3>
              <p className="text-slate-400 font-['Inter'] text-sm leading-relaxed">{phase.desc}</p>
              
              {/* Connecting line for desktop */}
              {i < 2 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-px bg-white/20 z-20"></div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Tech Services */}
      <section className="w-full bg-white/[0.02] border-t border-white/10 py-16 sm:py-24 mt-8 sm:mt-12 relative overflow-hidden">
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
              <Link to="/services" key={i} className="border border-white/10 bg-black p-6 hover:bg-white/5 transition-colors cursor-pointer group flex flex-col items-center text-center block">
                <service.icon className="w-10 h-10 text-slate-500 group-hover:text-cyan-400 transition-colors mb-4" />
                <h3 className="text-base sm:text-lg font-bold text-slate-300 group-hover:text-white uppercase tracking-wider font-['Space_Grotesk']">{service.title}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Case Studies */}
      <section className="w-full max-w-7xl mx-auto px-6 py-16 sm:py-24 border-t border-white/10 relative">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div>
             <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-[#ff00ff]/30 bg-[#ff00ff]/5 text-[#ff00ff] text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-4">
                <span className="w-2 h-2 bg-[#ff00ff] shadow-[0_0_8px_#ff00ff]"></span>
                Impact Reports
              </div>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white uppercase tracking-wide mb-4">
              Proven <span className="neon-text-cyan">Impact</span>
            </h2>
          </div>
          <Button asChild className="btn-tech h-12 px-6 sm:px-8 rounded-none shrink-0 border-[#ff00ff]/50 text-[#ff00ff] hover:bg-[#ff00ff]/10">
            <Link to="/case-studies">Read All Case Studies <ArrowRight className="ml-2 w-4 h-4 inline" /></Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { metric: "300%", title: "Global Tech Inc: Accelerating Hiring Velocity", category: "Gnan AI Implementation", desc: "How a fortune 500 company utilized Gnan AI to automate their technical screening, resulting in a 300% increase in hiring efficiency while maintaining top-tier engineering talent." },
              { metric: "Zero", title: "FinSecure: Zero-Trust Network Deployment", category: "Quantum Security", desc: "Implementing a military-grade zero-trust architecture across 12 international offices, achieving absolute data sovereignty and eliminating internal breach vectors." }
            ].map((study, i) => (
              <Link to="/case-studies" key={i} className="group border border-white/10 bg-black hover:bg-white/[0.02] transition-colors flex flex-col cursor-pointer block">
                <div className="p-8 border-b border-white/10 flex items-center justify-between">
                  <div>
                    <p className="text-cyan-400 text-xs font-bold uppercase tracking-widest mb-1">{study.category}</p>
                    <h3 className="text-2xl font-bold text-white font-['Space_Grotesk']">{study.metric} ROI</h3>
                  </div>
                  <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:border-cyan-400 group-hover:bg-cyan-400/10 transition-all">
                    <ArrowRight className="w-5 h-5 text-white group-hover:text-cyan-400 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                  </div>
                </div>
                <div className="p-8">
                  <h4 className="text-xl font-bold text-white uppercase tracking-wide mb-4 font-['Space_Grotesk'] group-hover:text-cyan-400 transition-colors">{study.title}</h4>
                  <p className="text-slate-400 font-['Inter'] leading-relaxed">{study.desc}</p>
                </div>
              </Link>
            ))}
        </div>
      </section>

      {/* Gnan AI Testimonials */}
      <section className="w-full max-w-7xl mx-auto px-6 py-16 sm:py-24 border-t border-white/10 relative">
        <div className="absolute left-0 bottom-0 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="text-center mb-16 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-[#ff00ff]/30 bg-[#ff00ff]/5 text-[#ff00ff] text-xs font-bold uppercase tracking-widest mb-6">
            <span className="w-2 h-2 bg-[#ff00ff] shadow-[0_0_8px_#ff00ff]"></span>
            Gnan AI Success
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white uppercase tracking-wide">
            Industry <span className="neon-text-magenta">Validation</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
          {[
            {
              quote: "Gnan AI has completely transformed our technical screening process. We've reduced our time-to-hire by 70% while simultaneously increasing the quality of our engineering candidates.",
              author: "Sarah Jenkins",
              role: "VP of Engineering, TechFlow Inc.",
              company: "TechFlow"
            },
            {
              quote: "The behavioral sentiment analysis provided by Gnan AI gives us unprecedented insight into candidate cultural fit. It's not just about code anymore; it's about building cohesive teams.",
              author: "Michael Chang",
              role: "Director of Talent Acquisition",
              company: "Global Systems Corp"
            }
          ].map((testimonial, i) => (
            <div key={i} className="border border-white/10 bg-black/50 backdrop-blur-sm p-8 relative flex flex-col h-full hover:border-[#ff00ff]/50 transition-colors duration-300 group">
              <Quote className="absolute top-6 right-6 w-8 h-8 text-white/5 group-hover:text-[#ff00ff]/20 transition-colors" />
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-cyan-400 text-cyan-400" />
                ))}
              </div>
              <p className="text-slate-300 font-['Inter'] text-lg leading-relaxed mb-8 italic flex-grow">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center font-bold text-white font-['Space_Grotesk']">
                  {testimonial.author.charAt(0)}
                </div>
                <div>
                  <h4 className="text-white font-bold font-['Space_Grotesk'] uppercase">{testimonial.author}</h4>
                  <p className="text-cyan-400 text-sm font-['Inter']">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Global CTA */}
      <section className="w-full border-t border-white/10 bg-black py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-white/[0.02]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.05) 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-64 bg-cyan-500/10 blur-[100px] pointer-events-none"></div>
        
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-cyan-400/30 bg-cyan-400/5 text-cyan-400 text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-6">
            <span className="w-2 h-2 bg-cyan-400 shadow-[0_0_8px_#00f0ff]"></span>
            System Ready
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white uppercase tracking-tight mb-8">
            Ready to <span className="neon-text-cyan">Deploy?</span>
          </h2>
          <p className="text-lg sm:text-xl text-slate-400 mb-10 font-['Inter'] max-w-2xl mx-auto">
            Join the vanguard of digital transformation. Integrate LifeBox NextGen's enterprise solutions to accelerate your operational velocity.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild className="btn-tech w-full sm:w-auto h-14 px-10 text-base rounded-none">
              <Link to="/contact">Request Integration Demo</Link>
            </Button>
            <Button asChild variant="outline" className="w-full sm:w-auto h-14 px-10 rounded-none border-white/20 text-white bg-black hover:bg-white hover:text-black font-['Space_Grotesk'] uppercase tracking-wider text-base transition-colors">
              <Link to="/products">View Documentation</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
