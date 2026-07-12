import Seo from "@/components/Seo";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-[#008080] font-['Courier_New'] flex flex-col pt-24 pb-12 px-4 md:px-8">
      <Seo title="Privacy Policy" description="Privacy Policy for LifeBox NextGen" />
      
      <div className="container mx-auto max-w-4xl">
        <div className="win95-window w-full flex flex-col mb-8">
          <div className="win95-header flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span>Privacy_Policy.txt</span>
            </div>
            <div className="flex gap-1">
              <button className="win95-btn w-5 h-5 flex items-center justify-center text-[12px] font-bold pb-1">_</button>
              <button className="win95-btn w-5 h-5 flex items-center justify-center text-[12px] font-bold">□</button>
              <button className="win95-btn w-5 h-5 flex items-center justify-center text-[12px] font-bold">X</button>
            </div>
          </div>
          
          <div className="p-4 md:p-8 bg-[#c0c0c0] text-black">
             <div className="border-2 border-[#808080] border-r-white border-b-white p-6 bg-white mb-8">
               <h1 className="text-3xl font-bold mb-4 underline">Privacy Policy</h1>
               <p className="font-bold text-sm mb-4">Last Updated: January 1, 1995</p>
               
               <h2 className="text-xl font-bold mt-6 mb-2">1. Data Collection</h2>
               <p className="font-bold text-sm mb-4">
                 We collect telemetry and error reports to improve system stability. Your personal directory data remains encrypted on our secure servers.
               </p>

               <h2 className="text-xl font-bold mt-6 mb-2">2. Usage of Information</h2>
               <p className="font-bold text-sm mb-4">
                 Data is utilized strictly for system diagnostics, patching, and to ensure you have the best experience possible while browsing the web.
               </p>

               <h2 className="text-xl font-bold mt-6 mb-2">3. Security</h2>
               <p className="font-bold text-sm mb-4">
                 We implement 128-bit SSL encryption to protect your data transmissions across the world wide web.
               </p>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
