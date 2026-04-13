import { Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { SiFacebook, SiInstagram } from "react-icons/si";
import { SiX } from "react-icons/si";

const year = new Date().getFullYear();
const hostname =
  typeof window !== "undefined"
    ? encodeURIComponent(window.location.hostname)
    : "onesales";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Properties", href: "#properties" },
  { label: "Contact", href: "#contact" },
];

const serviceLinks = [
  { label: "Residential Properties", href: "#services" },
  { label: "Commercial Properties", href: "#services" },
  { label: "Home Loans", href: "#loans" },
  { label: "Personal Loans", href: "#loans" },
  { label: "Business Loans", href: "#loans" },
  { label: "Investment Consulting", href: "#services" },
];

const socialLinks = [
  { Icon: SiFacebook, href: "https://facebook.com", label: "Facebook" },
  { Icon: SiX, href: "https://x.com", label: "X (Twitter)" },
  { Icon: SiInstagram, href: "https://instagram.com", label: "Instagram" },
  { Icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
];

export function Footer() {
  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-foreground text-background" data-ocid="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-display font-bold text-sm">
                  OS
                </span>
              </div>
              <span className="font-display font-bold text-xl text-background tracking-tight">
                OneSales
              </span>
            </div>
            <p className="text-sm leading-relaxed opacity-70 max-w-xs">
              Your trusted partner in real estate sales, advisory, and loan
              origination. Zero brokerage options with end-to-end support.
            </p>
            <div className="flex items-center gap-3 pt-1">
              {socialLinks.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-8 h-8 rounded-full bg-background/10 hover:bg-primary flex items-center justify-center transition-colors duration-200"
                >
                  <Icon className="w-3.5 h-3.5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-sm uppercase tracking-widest opacity-50 mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className="text-sm opacity-70 hover:opacity-100 hover:text-primary transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold text-sm uppercase tracking-widest opacity-50 mb-4">
              Services
            </h4>
            <ul className="space-y-2.5">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className="text-sm opacity-70 hover:opacity-100 hover:text-primary transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-sm uppercase tracking-widest opacity-50 mb-4">
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 mt-0.5 opacity-60 flex-shrink-0" />
                <a
                  href="tel:9108889858"
                  className="text-sm opacity-70 hover:opacity-100 transition-colors duration-200"
                >
                  9108889858
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 mt-0.5 opacity-60 flex-shrink-0" />
                <a
                  href="mailto:onesalesoffice@gmail.com"
                  className="text-sm opacity-70 hover:opacity-100 transition-colors duration-200 break-all"
                >
                  onesalesoffice@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 mt-0.5 opacity-60 flex-shrink-0" />
                <span className="text-sm opacity-70">
                  Bengaluru, Karnataka, India
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-background/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs opacity-60">
          <span>© {year} OneSales. All rights reserved.</span>
          <span>
            Built with love using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${hostname}`}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:opacity-100 transition-opacity duration-200"
            >
              caffeine.ai
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
