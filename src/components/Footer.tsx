import { Link } from "react-router-dom";
import { Twitter, Linkedin, Github, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#c0c0c0] text-black pt-8 pb-4 win95-window mt-12 mx-4 mb-4">
      <div className="win95-header mb-8 mx-4">
        <span>Footer_Links.exe</span>
      </div>

      <div className="container mx-auto px-4 relative z-10 font-['Courier_New']">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-12">

          {/* Brand */}
          <div className="col-span-2 lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4 w-fit">
              <img
                src="https://i.ibb.co/k6P7hnvb/Whats-App-Image-2026-01-09-at-13-40-57.jpg"
                alt="LifeBox NextGen"
                className="h-8 w-8 object-cover border-2 border-[#808080]"
              />
              <span className="text-xl font-bold tracking-tight text-black">
                LifeBox_NextGen
              </span>
            </Link>
            <p className="text-black font-bold mb-6 text-sm">
              Architecting the resilient digital backbone for modern institutions.<br/>
              SOC-2 Type II Compliant.
            </p>
            <div className="flex gap-2">
              {[
                { icon: Twitter, href: "https://twitter.com" },
                { icon: Linkedin, href: "https://linkedin.com" },
                { icon: Github, href: "https://github.com" },
                { icon: Mail, href: "mailto:contact@lifebox.com" }
              ].map((item, i) => (
                <a key={i} href={item.href} target="_blank" rel="noopener noreferrer" className="h-8 w-8 win95-btn flex items-center justify-center cursor-pointer text-black decoration-none">
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
                { l: "Security", h: "/technology" },
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
            <div key={i} className="col-span-1">
              <h4 className="font-bold text-sm uppercase text-[#000080] mb-4 underline">{col.title}</h4>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link.l}>
                    {link.h.startsWith('http') ? (
                      <a href={link.h} target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-[#0000ee] hover:text-[#ff0000] underline">
                        {link.l}
                      </a>
                    ) : (
                      <Link to={link.h} className="text-sm font-bold text-[#0000ee] hover:text-[#ff0000] underline">
                        {link.l}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-4 border-t-2 border-[#808080] border-b-2 border-b-white flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm font-bold">
            © {new Date().getFullYear()} LIFEBOX NEXTGEN PVT. LTD. // EST. 2024
          </p>
          <div className="flex items-center gap-2 win95-input px-2 py-1 bg-black text-[#00ff00]">
            <div className="h-2 w-2 rounded-none bg-[#00ff00] animate-pulse" />
            <span className="text-sm font-bold uppercase">Systems Normal</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
