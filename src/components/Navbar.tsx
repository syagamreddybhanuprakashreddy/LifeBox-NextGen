import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Products", href: "/products" },
  { label: "Solutions", href: "/services" },
  { label: "Customers", href: "/case-studies" },
  { label: "Company", href: "/about" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-[100] transition-all duration-300",
        scrolled
          ? "bg-[#0A0A0A]/80 backdrop-blur-xl border-b border-white/[0.05]"
          : "bg-transparent border-b border-transparent py-4"
      )}
    >
      <nav className="container mx-auto flex items-center justify-between px-6 lg:px-8 h-16">
        <Link to="/" className="flex items-center gap-3 z-50 group">
          <div className="relative">
            <div className="absolute inset-0 bg-blue-500 rounded-full blur opacity-20 group-hover:opacity-40 transition-opacity" />
            <img
              src="https://i.ibb.co/k6P7hnvb/Whats-App-Image-2026-01-09-at-13-40-57.jpg"
              alt="LifeBox NextGen"
              className="relative h-8 w-8 object-cover rounded-full border border-white/10"
            />
          </div>
          <span className="text-lg font-bold tracking-tight text-white group-hover:text-blue-200 transition-colors">
            LifeBox<span className="text-blue-500 font-normal">NextGen</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={cn(
                "text-[13px] font-medium tracking-wide uppercase transition-all hover:text-white relative group py-2",
                location.pathname === link.href ? "text-white" : "text-gray-400"
              )}
            >
              {link.label}
              <span className={cn(
                "absolute bottom-0 left-0 h-[1px] bg-blue-500 transition-all duration-300",
                location.pathname === link.href ? "w-full" : "w-0 group-hover:w-full"
              )} />
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-4">
          <Link to="/contact" className="text-[13px] font-bold text-gray-400 hover:text-white transition-colors uppercase tracking-wider">
            Contact Sales
          </Link>
          <Button asChild className="bg-white text-black hover:bg-white/90 font-bold px-6 h-10 rounded-full transition-all text-sm shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]">
            <Link to="/contact">Get Started</Link>
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden p-2 text-white z-50 hover:bg-white/10 rounded-lg transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        {/* Mobile Menu Overlay */}
        {mobileOpen && (
          <div className="fixed inset-0 bg-[#0A0A0A] z-40 pt-24 px-6 lg:hidden animate-in fade-in duration-300">
            <div className="flex flex-col gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-3xl font-bold text-white tracking-tight hover:text-blue-400 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <div className="h-px bg-white/10 my-4" />
              <Link to="/contact" onClick={() => setMobileOpen(false)} className="text-xl font-medium text-gray-400">
                Contact Sales
              </Link>
              <Button asChild className="bg-blue-600 text-white w-full h-14 text-xl font-bold rounded-2xl shadow-xl">
                <Link to="/contact" onClick={() => setMobileOpen(false)}>Get Started</Link>
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
