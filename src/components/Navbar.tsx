import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Cpu } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Products", href: "/products" },
  { label: "Solutions", href: "/services" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Company", href: "/about" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] bg-black/80 backdrop-blur-md border-b border-white/10">
      <nav className="container mx-auto max-w-7xl flex items-center justify-between px-6 h-20">
        <Link to="/" className="flex items-center gap-3 z-50 group">
          <div className="relative flex items-center justify-center w-10 h-10 border border-cyan-400 bg-black overflow-hidden shadow-[0_0_15px_rgba(0,240,255,0.2)]">
            <img 
              src="https://i.ibb.co/k6P7hnvb/Whats-App-Image-2026-01-09-at-13-40-57.jpg" 
              alt="LifeBox NextGen" 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            />
          </div>
          <span className="text-2xl font-bold tracking-tight text-white hidden sm:block font-['Space_Grotesk']">
            LifeBox NextGen
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={cn(
                "text-sm font-medium tracking-wide uppercase transition-colors font-['Space_Grotesk']",
                location.pathname === link.href ? "neon-text-cyan" : "text-slate-400 hover:text-white"
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-4">
          <Button asChild className="btn-tech px-6 h-10 rounded-none text-sm">
            <Link to="/contact">Contact Sales</Link>
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden w-10 h-10 flex items-center justify-center border border-white/20 text-white hover:border-cyan-400 hover:text-cyan-400 transition-colors bg-black"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>

        {/* Mobile Menu Overlay */}
        {mobileOpen && (
          <div className="absolute top-full left-0 right-0 bg-black border-b border-white/10 p-6 z-40 lg:hidden flex flex-col gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setMobileOpen(false)}
                className={cn(
                  "text-lg font-medium tracking-wide uppercase transition-colors font-['Space_Grotesk']",
                  location.pathname === link.href ? "neon-text-cyan" : "text-slate-400 hover:text-white"
                )}
              >
                {link.label}
              </Link>
            ))}
            <div className="h-px w-full bg-white/10 my-2" />
            <Button asChild className="btn-tech w-full h-12 rounded-none text-sm">
              <Link to="/contact" onClick={() => setMobileOpen(false)}>Contact Sales</Link>
            </Button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
