import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-[#008080] font-['Courier_New'] flex items-center justify-center p-4">
      <div className="win95-window max-w-md w-full flex flex-col">
        <div className="win95-header flex items-center justify-between bg-[#000080]">
          <div className="flex items-center gap-2">
            <span className="font-bold text-white">Error 404</span>
          </div>
          <button className="win95-btn w-5 h-5 flex items-center justify-center text-[12px] font-bold text-black">X</button>
        </div>
        
        <div className="p-6 bg-[#c0c0c0] text-black text-center border-2 border-white border-r-[#808080] border-b-[#808080]">
           <div className="flex items-center gap-4 mb-6">
             <div className="w-12 h-12 rounded-full bg-red-600 text-white font-bold flex items-center justify-center text-3xl border-2 border-white border-r-[#808080] border-b-[#808080]">X</div>
             <div className="text-left">
               <h1 className="text-2xl font-bold mb-1">Fatal Error</h1>
               <p className="font-bold text-sm">The requested file could not be found.</p>
             </div>
           </div>
           
           <div className="win95-input p-2 bg-black text-[#00ff00] text-left mb-6 font-bold text-xs">
             Exception: PAGE_NOT_FOUND<br/>
             Module: {location.pathname}<br/>
             Action: Press any key to continue...
           </div>

           <a href="/" className="win95-btn inline-block px-8 py-2 font-bold bg-[#c0c0c0] text-black decoration-none border-2 border-white border-r-[#808080] border-b-[#808080] hover:bg-[#c0c0c0]">
             Return to Desktop
           </a>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
