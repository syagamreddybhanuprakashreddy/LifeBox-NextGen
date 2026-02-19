import { Link } from "react-router-dom";
import { Twitter, Linkedin, Github, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-[#050505] text-white pt-32 pb-12 border-t border-white/[0.05] overflow-hidden">

      {/* Footer Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-blue-600/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12 mb-24">

          {/* Brand */}
          <div className="col-span-2 lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-8 group w-fit">
              <div className="bg-white/5 p-1 rounded-full border border-white/10 group-hover:border-blue-500/50 transition-colors">
                <img
                  src="https://i.ibb.co/k6P7hnvb/Whats-App-Image-2026-01-09-at-13-40-57.jpg"
                  alt="LifeBox NextGen"
                  className="h-8 w-8 object-cover rounded-full"
                />
              </div>
              <span className="text-xl font-bold tracking-tight text-gray-200 group-hover:text-white transition-colors">
                LifeBox NextGen
              </span>
            </Link>
            <p className="text-gray-500 leading-relaxed mb-8 max-w-sm text-sm">
              Architecting the resilient digital backbone for modern institutions.
              SOC-2 Type II Compliant.
            </p>
            <div className="flex gap-4">
              {[Twitter, Linkedin, Github, Mail].map((Icon, i) => (
                <div key={i} className="h-10 w-10 glass rounded-xl flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all cursor-pointer">
                  <Icon className="h-4 w-4" />
                </div>
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
                { l: "Security", h: "/about" },
                { l: "Contact", h: "/contact" }
              ]
            },
            {
              title: "Resources",
              links: [
                { l: "Documentation", h: "#" },
                { l: "API Status", h: "#" },
                { l: "Case Studies", h: "/case-studies" },
                { l: "Privacy Policy", h: "#" }
              ]
            }
          ].map((col, i) => (
            <div key={i} className="col-span-1">
              <h4 className="font-bold text-xs uppercase tracking-[0.2em] text-gray-600 mb-8">{col.title}</h4>
              <ul className="space-y-4">
                {col.links.map((link) => (
                  <li key={link.l}>
                    <Link to={link.h} className="text-sm text-gray-400 hover:text-blue-400 transition-colors font-medium">
                      {link.l}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-12 border-t border-white/[0.05] flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-gray-600 font-mono">
            © {new Date().getFullYear()} LIFEBOX NEXTGEN PVT. LTD. // EST. 2024
          </p>
          <div className="flex gap-8">
            <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-xs text-gray-500 font-mono uppercase">Systems Normal</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
