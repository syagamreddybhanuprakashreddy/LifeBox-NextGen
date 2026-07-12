import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Brain, Mic, Target, Users, BookOpen, BarChart, FileText, Settings, 
  CheckCircle2, ArrowRight, Building, PlayCircle, MessageSquare, Monitor, 
  Cpu, Layout, Sparkles
} from "lucide-react";
import Seo from "@/components/Seo";

const features = [
  { icon: Brain, title: "AI Mock Interviews", desc: "Practice real-time HR, Technical, Behavioral, and Story-Based interviews with an intelligent AI interviewer." },
  { icon: Users, title: "AI Group Discussions", desc: "Participate in realistic AI-driven group discussions with dynamic conversations and communication analysis." },
  { icon: MessageSquare, title: "Story-Based Interviews", desc: "Evaluate problem-solving through situational awareness and immersive scenario simulations." },
  { icon: FileText, title: "Personalized Feedback", desc: "Receive detailed performance reports covering technical knowledge, communication skills, and readiness." },
  { icon: BookOpen, title: "Interview-to-Study Plan", desc: "Automatically generate personalized learning roadmaps and daily study schedules based on performance." },
  { icon: Mic, title: "Speech-to-Text", desc: "Accurate real-time speech recognition designed for interactive interviews and collaborative group discussions." },
  { icon: PlayCircle, title: "Voice AI", desc: "Experience natural AI conversations through intelligent voice-based interactions." },
  { icon: BarChart, title: "Performance Analytics", desc: "Track interview history, readiness scores, and progress trends using advanced analytics dashboards." },
  { icon: Monitor, title: "Candidate Dashboard", desc: "Manage interviews, study plans, and reports from a centralized, intuitive interface." },
  { icon: Sparkles, title: "AI Recommendations", desc: "Receive AI-generated suggestions for improving technical skills, communication, and learning priorities." },
];

const modules = [
  { icon: Brain, title: "Interview Engine", desc: "Adaptive questioning and dynamic response evaluation." },
  { icon: Users, title: "Group Discussion Engine", desc: "Multi-agent simulation and participant tracking." },
  { icon: CheckCircle2, title: "Feedback Engine", desc: "Granular scoring and behavioral sentiment analysis." },
  { icon: BookOpen, title: "Study Plan Engine", desc: "Customized resource aggregation and daily scheduling." },
  { icon: Mic, title: "Voice AI", desc: "Ultra-low latency conversational speech synthesis." },
  { icon: FileText, title: "Speech Recognition", desc: "High-accuracy transcription of technical terminology." },
  { icon: BarChart, title: "Analytics Dashboard", desc: "Enterprise-grade reporting and cohort tracking." },
  { icon: Target, title: "Learning Engine", desc: "Continuous improvement algorithms tailored to candidates." },
];

const steps = [
  { num: "01", title: "Choose Interview Type", desc: "Select from Technical, HR, Behavioral, or Group Discussions tailored to your role." },
  { num: "02", title: "Attend AI Interview", desc: "Interact via voice or text with our conversational AI in a realistic simulation." },
  { num: "03", title: "Receive AI Feedback", desc: "Get an instant, granular breakdown of your strengths and areas for improvement." },
  { num: "04", title: "Get Study Plan", desc: "Follow a personalized roadmap generated specifically to address your knowledge gaps." },
];

const GnanAI = () => {
  return (
    <div className="min-h-screen bg-[#020817] text-slate-200 overflow-x-hidden selection:bg-purple-500/30">
      <Seo 
        title="GNAN-AI - AI-Powered Interview Preparation" 
        description="Experience next-generation AI-powered interview preparation with personalized coaching, intelligent feedback, and adaptive learning."
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[800px] h-[800px] bg-purple-600/20 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[600px] h-[600px] bg-cyan-600/20 rounded-full blur-[100px] pointer-events-none"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
            <div className="flex-1 text-center lg:text-left">
              <div className="flex flex-col lg:flex-row items-center gap-6 mb-8 justify-center lg:justify-start">
                <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 flex items-center justify-center">
                  <img src="/gnan-ai-logo-transparent.png" alt="Gnan AI Logo" className="w-full h-full object-contain drop-shadow-[0_0_25px_rgba(255,0,255,0.8)] scale-110" />
                </div>
                <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 font-bold text-sm shadow-[0_0_20px_rgba(168,85,247,0.2)]">
                  <Sparkles className="w-5 h-5" /> Next-Generation Career Ecosystem
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-tight mb-6 tracking-tight">
                AI-Powered <br className="hidden lg:block"/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Interview & Career</span><br className="hidden lg:block"/> Preparation
              </h1>
              <p className="text-lg md:text-xl text-slate-400 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                GNAN-AI simulates realistic interview environments, evaluates performance, and delivers personalized learning roadmaps to accelerate your career growth.
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                <Button asChild className="h-14 px-8 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-medium text-lg w-full sm:w-auto shadow-[0_0_20px_rgba(147,51,234,0.3)] transition-all">
                  <a href="https://gnan-ai.in">Launch Platform</a>
                </Button>
                <Button asChild variant="outline" className="h-14 px-8 bg-white/5 border-white/10 hover:bg-white/10 text-white rounded-lg font-medium text-lg w-full sm:w-auto backdrop-blur-sm transition-all">
                  <a href="https://gnan-ai.in">Book a Demo</a>
                </Button>
              </div>
            </div>
            
            <div className="flex-1 relative w-full max-w-lg lg:max-w-none">
              {/* Abstract 3D/Tech Illustration Representation */}
              <div className="relative w-full aspect-square md:aspect-[4/3] rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-xl overflow-hidden shadow-2xl flex items-center justify-center group">
                <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:30px_30px]"></div>
                
                {/* Floating Elements */}
                <div className="absolute top-1/4 left-1/4 w-16 h-16 bg-purple-500/20 rounded-2xl border border-purple-500/30 flex items-center justify-center animate-bounce shadow-[0_0_15px_rgba(168,85,247,0.4)] backdrop-blur-md" style={{ animationDuration: '3s' }}>
                  <Mic className="w-8 h-8 text-purple-400" />
                </div>
                <div className="absolute bottom-1/4 right-1/4 w-20 h-20 bg-cyan-500/20 rounded-full border border-cyan-500/30 flex items-center justify-center animate-pulse shadow-[0_0_15px_rgba(6,182,212,0.4)] backdrop-blur-md" style={{ animationDuration: '4s' }}>
                  <Brain className="w-10 h-10 text-cyan-400" />
                </div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-blue-500/10 rounded-full border border-blue-500/20 flex items-center justify-center group-hover:scale-105 transition-transform duration-500 shadow-[0_0_30px_rgba(59,130,246,0.2)] backdrop-blur-md">
                   <div className="text-center">
                     <div className="text-4xl font-bold text-white mb-1">98%</div>
                     <div className="text-xs text-blue-300 uppercase tracking-wider font-medium">Readiness Score</div>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By */}
      <section className="py-10 border-y border-white/5 bg-white/[0.01]">
        <div className="container mx-auto px-6 text-center">
          <p className="text-sm font-medium text-slate-500 uppercase tracking-widest mb-8">Trusted by leading educational institutions & enterprises</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Logos Placeholder */}
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="flex items-center gap-2 font-bold text-xl text-white">
                <Building className="w-6 h-6" /> Partner {i}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">Intelligence at Every Step</h2>
            <p className="text-lg text-slate-400">A seamless, interactive ecosystem designed to evaluate, guide, and elevate candidates to professional excellence.</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-purple-500/0 via-purple-500/50 to-cyan-500/0 -z-10"></div>
            
            {steps.map((step, idx) => (
              <div key={idx} className="relative flex flex-col items-center text-center">
                <div className="w-24 h-24 rounded-2xl bg-slate-900 border border-white/10 flex items-center justify-center mb-6 shadow-xl relative group">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <span className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-white to-slate-500">{step.num}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-slate-400 leading-relaxed text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-24 bg-slate-900/50 relative border-y border-white/5">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-600/10 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">Core Features</h2>
            <p className="text-lg text-slate-400 max-w-2xl">Advanced capabilities driving the next generation of career development.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {features.map((feature, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-purple-500/30 transition-all group hover:bg-white/[0.04]">
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(168,85,247,0)] group-hover:shadow-[0_0_15px_rgba(168,85,247,0.2)]">
                  <feature.icon className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Modules */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">Enterprise Modules</h2>
            <p className="text-lg text-slate-400">Robust, independent engines that combine to form a comprehensive career preparation platform.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {modules.map((mod, idx) => (
              <div key={idx} className="p-5 rounded-xl border border-white/10 bg-black/40 backdrop-blur-sm flex items-start gap-4 hover:border-cyan-500/30 transition-colors">
                <mod.icon className="w-6 h-6 text-cyan-400 shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-white mb-1">{mod.title}</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">{mod.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why GNAN-AI / Value Prop */}
      <section className="py-24 bg-slate-900/50 border-y border-white/5 relative overflow-hidden">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 tracking-tight">Why GNAN-AI?</h2>
              <div className="space-y-6">
                {[
                  "Faster interview preparation with high-fidelity simulations",
                  "Higher placement readiness through objective analytics",
                  "AI-driven learning that adapts to individual weaknesses",
                  "Enterprise scalability for thousands of concurrent users",
                  "Data-driven performance insights for institutions"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-cyan-500/20 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                    </div>
                    <p className="text-lg text-slate-300">{item}</p>
                  </div>
                ))}
              </div>
              <Button asChild className="mt-10 h-12 px-8 bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg font-medium shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-all">
                <a href="https://gnan-ai.in">Initialize Platform</a>
              </Button>
            </div>
            
            {/* Interactive Mockup Representation */}
            <div className="relative aspect-[4/3] rounded-2xl bg-[#0a0f1c] border border-white/10 shadow-2xl overflow-hidden flex flex-col">
              <div className="h-10 bg-white/5 border-b border-white/10 flex items-center px-4 gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                <div className="ml-4 px-3 py-1 rounded bg-white/5 text-xs text-slate-400 font-mono">dashboard.gnan-ai.com</div>
              </div>
              <div className="flex-1 p-6 flex gap-6">
                <div className="w-1/3 flex flex-col gap-4">
                   <div className="h-24 bg-white/5 rounded-lg border border-white/5 animate-pulse"></div>
                   <div className="h-32 bg-white/5 rounded-lg border border-white/5 animate-pulse"></div>
                   <div className="flex-1 bg-white/5 rounded-lg border border-white/5 animate-pulse"></div>
                </div>
                <div className="w-2/3 flex flex-col gap-4">
                   <div className="h-48 bg-gradient-to-br from-purple-500/10 to-cyan-500/10 rounded-lg border border-white/10 flex items-center justify-center">
                     <BarChart className="w-12 h-12 text-slate-600" />
                   </div>
                   <div className="flex-1 bg-white/5 rounded-lg border border-white/5 flex p-4 gap-4">
                      <div className="w-12 h-12 rounded-full bg-white/10 animate-pulse"></div>
                      <div className="flex-1 space-y-2 pt-2">
                         <div className="h-2 w-1/3 bg-white/10 rounded"></div>
                         <div className="h-2 w-3/4 bg-white/10 rounded"></div>
                         <div className="h-2 w-1/2 bg-white/10 rounded"></div>
                      </div>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-24">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-16 tracking-tight">Built For Scale</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              "Universities", "Colleges", "Training Institutes", 
              "Placement Cells", "Recruiters", "Enterprises"
            ].map((industry, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-white/[0.02] border border-white/10 hover:bg-white/[0.05] transition-colors">
                <p className="font-medium text-slate-300">{industry}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-purple-900/20 pointer-events-none"></div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">Transform Interview <br/> Preparation with AI</h2>
          <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto">Prepare Smarter. Perform Better. Get Hired.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild className="h-14 px-10 bg-white text-black hover:bg-slate-200 rounded-lg font-bold text-lg w-full sm:w-auto transition-all shadow-[0_0_30px_rgba(255,255,255,0.2)]">
              <a href="https://gnan-ai.in">Launch Gnan AI Ecosystem</a>
            </Button>
            <Button asChild variant="outline" className="h-14 px-10 bg-transparent border-white/20 hover:bg-white/10 text-white rounded-lg font-medium text-lg w-full sm:w-auto transition-all">
              <Link to="/contact">Contact Sales</Link>
            </Button>
          </div>
        </div>
      </section>
      
    </div>
  );
};

export default GnanAI;
