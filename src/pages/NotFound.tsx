import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { AlertTriangle, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-red-500/10 rounded-full blur-[100px] -z-10 pointer-events-none"></div>
      
      <div className="tech-card tech-border-glow p-8 max-w-lg w-full flex flex-col items-center text-center relative z-10 bg-black/50 backdrop-blur-sm">
        <div className="w-16 h-16 border border-red-500/50 bg-red-500/10 flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(239,68,68,0.2)]">
          <AlertTriangle className="w-8 h-8 text-red-500" />
        </div>
        
        <h1 className="text-3xl font-bold mb-2 font-['Space_Grotesk'] uppercase text-white tracking-wide">
          <span className="text-red-500">404</span> Fatal Error
        </h1>
        <p className="text-slate-400 font-['Inter'] mb-8">The requested node could not be found in the system registry.</p>
        
        <div className="w-full bg-black/50 border border-white/10 p-4 mb-8 text-left">
           <div className="font-mono text-xs text-red-400 space-y-1">
             <p>&gt; Exception: NODE_NOT_FOUND</p>
             <p>&gt; Path: {location.pathname}</p>
             <p className="animate-pulse">&gt; Awaiting operator input_</p>
           </div>
        </div>

        <Button asChild className="h-12 px-8 rounded-none border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition-all shadow-[0_0_15px_rgba(0,240,255,0.2)] font-['Space_Grotesk'] uppercase tracking-widest bg-transparent">
          <Link to="/"><ArrowLeft className="w-4 h-4 mr-2 inline" /> Return to Core</Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
