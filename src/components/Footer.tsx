import { Link } from "react-router-dom";
import { Twitter, Linkedin, Github, Mail } from "lucide-react";

const footerContent = [
  {
    title: "Product",
    links: [
      { label: "Gnan AI", href: "https://gnan-ai.in" },
      { label: "NextGenFreedu", href: "https://nextgenfreedu.site" },
      { label: "LifeOS", href: "https://lifebox-community.web.app/" },
      { label: "ERP Systems", href: "/products" },
    ]
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "/contact" },
      { label: "Customers", href: "/case-studies" },
    ]
  },
  {
    title: "Resources",
    links: [
      { label: "Documentation", href: "/technology" },
      { label: "API Reference", href: "/technology" },
      { label: "System Status", href: "#" },
      { label: "Security", href: "/about" },
    ]
  }
];

const Footer = () => {
  return (
    <footer className="bg-[#0B1120] text-white pt-24 pb-12 border-t border-gray-800">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-20">
          <div className="col-span-2 lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <img
                src="https://i.ibb.co/k6P7hnvb/Whats-App-Image-2026-01-09-at-13-40-57.jpg"
                alt="LifeBox NextGen"
                className="h-10 w-10 object-cover rounded-full border-2 border-white/10"
              />
              <span className="text-xl font-bold tracking-tight text-white">
                LifeBox<span className="text-gray-400">NextGen</span>
              </span>
            </Link>
            <p className="text-gray-400 leading-relaxed mb-8 max-w-sm">
              Building the digital infrastructure for modern enterprises. Scalable, secure, and intelligent platforms for the future of work.
            </p>
            <div className="flex gap-4">
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="h-10 w-10 flex items-center justify-center rounded-full bg-gray-800 text-gray-400 hover:bg-white hover:text-black transition-all duration-300">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="h-10 w-10 flex items-center justify-center rounded-full bg-gray-800 text-gray-400 hover:bg-white hover:text-black transition-all duration-300">
                <Linkedin className="h-4 w-4" />
              </a>
              <a href="https://github.com" target="_blank" rel="noreferrer" className="h-10 w-10 flex items-center justify-center rounded-full bg-gray-800 text-gray-400 hover:bg-white hover:text-black transition-all duration-300">
                <Github className="h-4 w-4" />
              </a>
              <a href="mailto:careers@lifeboxnetgen.co.site" className="h-10 w-10 flex items-center justify-center rounded-full bg-gray-800 text-gray-400 hover:bg-white hover:text-black transition-all duration-300">
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>

          {footerContent.map((col) => (
            <div key={col.title}>
              <h4 className="font-bold mb-6 text-sm uppercase tracking-wider text-gray-500">{col.title}</h4>
              <ul className="space-y-4">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link to={link.href} className="text-sm text-gray-300 hover:text-white transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} LifeBox NextGen Pvt. Ltd. All rights reserved.
          </p>
          <div className="flex gap-8 text-sm text-gray-500">
            <Link to="#" className="hover:text-white transition-colors">Privacy</Link>
            <Link to="#" className="hover:text-white transition-colors">Terms</Link>
            <Link to="#" className="hover:text-white transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
