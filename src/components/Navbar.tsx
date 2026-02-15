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
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-200 border-b",
        scrolled ? "bg-white/90 backdrop-blur-md border-gray-200 py-3" : "bg-white border-transparent py-5"
      )}
    >
      <nav className="container mx-auto flex items-center justify-between px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-3 z-50">
          <img
            src="https://i.ibb.co/k6P7hnvb/Whats-App-Image-2026-01-09-at-13-40-57.jpg"
            alt="LifeBox NextGen"
            className="h-10 w-10 object-cover rounded-full"
          />
          <span className="text-lg font-bold tracking-tight text-gray-900">
            LifeBox<span className="text-gray-500 font-normal">NextGen</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={cn(
                "text-[15px] font-medium transition-colors hover:text-black",
                location.pathname === link.href ? "text-black" : "text-gray-500"
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-4">
          <Link to="/contact" className="text-[15px] font-medium text-gray-500 hover:text-black transition-colors">
            Contact Sales
          </Link>
          <Button asChild className="bg-black text-white hover:bg-gray-800 font-medium px-5 h-10 rounded-md transition-all shadow-sm">
            <Link to="/contact">Get Started</Link>
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden p-2 text-gray-900 z-50"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        {/* Mobile Menu Overlay */}
        {mobileOpen && (
          <div className="fixed inset-0 bg-white z-40 pt-24 px-6 lg:hidden animate-in slide-in-from-top-4 duration-200">
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-2xl font-semibold text-gray-900 tracking-tight"
                >
                  {link.label}
                </Link>
              ))}
              <div className="h-px bg-gray-100 my-2" />
              <Link to="/contact" onClick={() => setMobileOpen(false)} className="text-xl text-gray-500">
                Contact Sales
              </Link>
              <Button asChild className="bg-black text-white w-full h-12 text-lg">
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
