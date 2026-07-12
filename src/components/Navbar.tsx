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
  const location = useLocation();

  return (
    <header
      className="fixed top-0 left-0 right-0 z-[100] bg-[#c0c0c0] border-b-2 border-b-[#000000] border-t-2 border-t-[#ffffff]"
    >
      <nav className="container mx-auto flex items-center justify-between px-4 h-12">
        <Link to="/" className="flex items-center gap-2 z-50">
          <img
            src="https://i.ibb.co/k6P7hnvb/Whats-App-Image-2026-01-09-at-13-40-57.jpg"
            alt="LifeBox NextGen"
            className="h-6 w-6 object-cover border border-[#808080]"
          />
          <span className="text-xl font-bold tracking-tight text-black font-['Courier_New']">
            LifeBox_NextGen
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={cn(
                "font-bold font-['Courier_New'] underline hover:text-[#ff0000] transition-none",
                location.pathname === link.href ? "text-[#551a8b]" : "text-[#0000ee]"
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-4">
          <Button asChild className="win95-btn px-4 h-8 rounded-none font-bold font-['Courier_New']">
            <Link to="/contact">Contact Sales</Link>
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden win95-btn w-8 h-8 flex items-center justify-center p-1"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="h-5 w-5 text-black" /> : <Menu className="h-5 w-5 text-black" />}
        </button>

        {/* Mobile Menu Overlay */}
        {mobileOpen && (
          <div className="fixed top-12 left-0 right-0 bg-[#c0c0c0] border-b-2 border-b-black p-4 z-40 lg:hidden win95-window">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="font-bold font-['Courier_New'] text-xl underline text-[#0000ee] hover:text-[#ff0000]"
                >
                  {link.label}
                </Link>
              ))}
              <div className="h-[2px] bg-[#808080] border-b border-b-white my-2" />
              <Button asChild className="win95-btn w-full h-10 rounded-none font-bold font-['Courier_New'] text-lg">
                <Link to="/contact" onClick={() => setMobileOpen(false)}>Contact Sales</Link>
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
