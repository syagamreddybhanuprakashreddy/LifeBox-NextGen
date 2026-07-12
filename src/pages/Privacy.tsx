import { ShieldAlert, Lock, Database, Globe } from "lucide-react";
import Seo from "@/components/Seo";

const Privacy = () => {
  return (
    <div className="min-h-screen pt-24 pb-12 flex flex-col items-center">
      <Seo title="Security & Privacy Policy" description="Security and Privacy Protocols for LifeBox NextGen" />
      
      <div className="container mx-auto max-w-4xl px-6">
        <div className="text-center mb-16 mt-8 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-[300px] bg-cyan-500/10 rounded-full blur-[80px] -z-10 pointer-events-none"></div>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-[#ff00ff]/30 bg-[#ff00ff]/5 text-[#ff00ff] text-xs font-bold uppercase tracking-widest mb-6">
            <span className="w-2 h-2 bg-[#ff00ff] shadow-[0_0_8px_#ff00ff] animate-pulse"></span>
            System Protocol 0x1A
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white tracking-tight uppercase">
            Data <span className="neon-text-cyan">Privacy</span> Protocol
          </h1>
          <p className="text-lg text-slate-400 font-['Inter']">
            Last Updated: SYSTIME_CURRENT
          </p>
        </div>

        <div className="tech-card tech-border-glow p-8 md:p-12 bg-black space-y-12">
          
          <section>
            <div className="flex items-center gap-4 border-b border-white/10 pb-4 mb-6">
              <Database className="w-6 h-6 text-cyan-400" />
              <h2 className="text-2xl font-bold uppercase font-['Space_Grotesk'] text-white">1. Data Collection & Telemetry</h2>
            </div>
            <div className="font-['Inter'] text-slate-400 space-y-4 leading-relaxed">
              <p>
                LifeBox NextGen collects high-fidelity telemetry and system diagnostics to maintain operational stability and neural network optimization. We strictly adhere to minimal data ingestion principles.
              </p>
              <p>
                All personal and enterprise parameters are encrypted at the edge before traversing our network architecture.
              </p>
            </div>
          </section>

          <section>
            <div className="flex items-center gap-4 border-b border-white/10 pb-4 mb-6">
              <Globe className="w-6 h-6 text-[#ff00ff]" />
              <h2 className="text-2xl font-bold uppercase font-['Space_Grotesk'] text-white">2. Utilization Directives</h2>
            </div>
            <div className="font-['Inter'] text-slate-400 space-y-4 leading-relaxed">
              <p>
                Ingested metrics are utilized exclusively for autonomous system patching, latency reduction, and advanced threat detection models. Data is never syndicated, brokered, or transferred outside the LifeBox ecosystem without cryptographic authorization.
              </p>
            </div>
          </section>

          <section>
            <div className="flex items-center gap-4 border-b border-white/10 pb-4 mb-6">
              <Lock className="w-6 h-6 text-cyan-400" />
              <h2 className="text-2xl font-bold uppercase font-['Space_Grotesk'] text-white">3. Zero-Trust Security</h2>
            </div>
            <div className="font-['Inter'] text-slate-400 space-y-4 leading-relaxed">
              <p>
                We enforce a rigorous Zero-Trust architecture across all nodes. Implementations include AES-256 encryption at rest and TLS 1.3 in transit. Our infrastructure undergoes continuous adversarial testing by autonomous red-team agents.
              </p>
            </div>
          </section>
          
          <div className="mt-8 p-6 bg-cyan-400/5 border border-cyan-400/30 flex items-start gap-4">
            <ShieldAlert className="w-6 h-6 text-cyan-400 shrink-0 mt-1" />
            <div>
               <h3 className="text-white font-bold uppercase font-['Space_Grotesk'] mb-2 tracking-wide">Compliance Verified</h3>
               <p className="text-slate-400 text-sm font-['Inter']">This protocol supersedes all previous directives and aligns with global enterprise compliance standards (SOC-2 Type II, ISO 27001).</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Privacy;
