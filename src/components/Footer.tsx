import { Link } from "react-router-dom";
import { Twitter, Linkedin, Github, Mail, Hexagon } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black border-t border-white/10 pt-16 pb-8 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[100px] -z-10 pointer-events-none translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="container mx-auto max-w-7xl px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12 mb-16">

          {/* Brand */}
          <div className="col-span-2 lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-6 w-fit group">
              <div className="w-10 h-10 border border-cyan-400/50 bg-black overflow-hidden flex items-center justify-center shrink-0 shadow-[0_0_10px_rgba(0,240,255,0.1)]">
                <img 
                  src="https://i.ibb.co/k6P7hnvb/Whats-App-Image-2026-01-09-at-13-40-57.jpg" 
                  alt="LifeBox NextGen" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <span className="text-xl font-bold tracking-tight text-white uppercase font-['Space_Grotesk']">
                LifeBox NextGen
              </span>
            </Link>
            <p className="text-slate-400 font-['Inter'] mb-8 text-sm leading-relaxed max-w-sm">
              Architecting the resilient digital backbone for modern institutions.<br/>
              SOC-2 Type II Compliant.
            </p>
            <div className="flex gap-4">
              {[
                { icon: Twitter, href: "https://twitter.com" },
                { icon: Linkedin, href: "https://linkedin.com" },
                { icon: Github, href: "https://github.com" },
                { icon: Mail, href: "mailto:contact@lifebox.com" }
              ].map((item, i) => (
                <a key={i} href={item.href} target="_blank" rel="noopener noreferrer" className="h-10 w-10 border border-white/20 flex items-center justify-center cursor-pointer text-slate-400 hover:text-cyan-400 hover:border-cyan-400 transition-colors bg-black">
                  <item.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          {[
            {
              title: "Platform",
              links: [
                { l: "Gnan AI", h: "/products#gnan-ai" },
                { l: "LifeOS", h: "https://lifebox-community.web.app/" },
                { l: "ERP Core", h: "/products" },
                { l: "Services", h: "/services" }
              ]
            },
            {
              title: "Company",
              links: [
                { l: "Leadership", h: "/about" },
                { l: "Careers", h: "/careers" },
                { l: "Technology", h: "/technology" },
                { l: "Contact", h: "/contact" }
              ]
            },
            {
              title: "Resources",
              links: [
                { l: "Documentation", h: "/technology" },
                { l: "API Status", h: "https://status.lifebox.com" },
                { l: "Case Studies", h: "/case-studies" },
                { l: "Privacy Policy", h: "/privacy" }
              ]
            }
          ].map((col, i) => (
            <div key={i} className="col-span-1 sm:col-span-2 md:col-span-1">
              <h4 className="font-bold text-xs uppercase tracking-widest text-slate-300 mb-6 font-['Space_Grotesk']">{col.title}</h4>
              <ul className="space-y-4">
                {col.links.map((link) => (
                  <li key={link.l}>
                    {link.h.startsWith('http') ? (
                      <a href={link.h} target="_blank" rel="noopener noreferrer" className="text-sm font-['Inter'] text-slate-500 hover:text-white transition-colors flex items-center gap-2">
                         {link.l}
                      </a>
                    ) : (
                      <Link to={link.h} className="text-sm font-['Inter'] text-slate-500 hover:text-white transition-colors flex items-center gap-2">
                         {link.l}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-slate-500 font-['Space_Grotesk'] uppercase tracking-widest">
            © {new Date().getFullYear()} LIFEBOX NEXTGEN PVT. LTD. // EST. 2024
          </p>
          <div className="flex items-center gap-3 border border-cyan-400/30 px-3 py-1.5 bg-cyan-400/5">
            <div className="h-1.5 w-1.5 bg-cyan-400 shadow-[0_0_8px_#00f0ff] animate-pulse" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-cyan-400 font-['Space_Grotesk']">All Systems Nominal</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
