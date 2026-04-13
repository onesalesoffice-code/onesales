import { Button } from "@/components/ui/button";
import type { NavLink } from "@/types";
import { Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Properties", href: "#properties" },
  { label: "Loans", href: "#loans" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 12);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-card border-b border-border shadow-subtle"
          : "bg-card/95 backdrop-blur-sm border-b border-border/60"
      }`}
      data-ocid="header-nav"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-18">
          {/* Logo */}
          <button
            type="button"
            onClick={() => handleNavClick("#home")}
            className="flex items-center gap-2 group"
            data-ocid="nav-logo"
          >
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center flex-shrink-0">
              <span className="text-primary-foreground font-display font-bold text-sm">
                OS
              </span>
            </div>
            <span className="font-display font-bold text-xl text-foreground tracking-tight group-hover:text-primary transition-colors duration-200">
              OneSales
            </span>
          </button>

          {/* Desktop Nav */}
          <nav
            className="hidden md:flex items-center gap-1"
            aria-label="Main navigation"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="px-3 py-2 text-sm font-body text-muted-foreground hover:text-primary hover:bg-primary/5 rounded-md transition-colors duration-200"
                data-ocid={`nav-link-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA + Mobile toggle */}
          <div className="flex items-center gap-3">
            <a
              href="tel:9108889858"
              className="hidden sm:flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              <Phone className="w-3.5 h-3.5" />
              <span className="font-body">9108889858</span>
            </a>
            <Button
              onClick={() => handleNavClick("#contact")}
              className="hidden md:inline-flex bg-primary text-primary-foreground hover:bg-primary/90 font-body font-semibold text-sm px-5 shadow-subtle transition-smooth"
              data-ocid="nav-cta-consultation"
            >
              Get Consultation
            </Button>
            <button
              type="button"
              className="md:hidden p-2 rounded-md text-foreground hover:bg-muted transition-colors duration-200"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              data-ocid="nav-mobile-toggle"
            >
              {mobileOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          className="md:hidden border-t border-border bg-card px-4 py-4 flex flex-col gap-1"
          data-ocid="mobile-nav-menu"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href);
              }}
              className="px-3 py-2.5 text-sm font-body text-foreground hover:text-primary hover:bg-primary/5 rounded-md transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
          <Button
            onClick={() => handleNavClick("#contact")}
            className="mt-2 bg-primary text-primary-foreground hover:bg-primary/90 font-body font-semibold"
            data-ocid="mobile-cta-consultation"
          >
            Get Consultation
          </Button>
        </div>
      )}
    </header>
  );
}
