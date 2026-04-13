import { Button } from "@/components/ui/button";
import { ArrowRight, Building2, CreditCard } from "lucide-react";

export function HeroSection() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('/assets/generated/hero-cityscape.dim_1600x900.jpg')",
        }}
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-foreground/85 via-foreground/70 to-foreground/50" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary/30 text-primary-foreground/90 text-xs font-body font-semibold px-3 py-1.5 rounded-full mb-6 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
            Trusted Real Estate &amp; Finance Partner
          </div>

          <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-card leading-tight tracking-tight mb-6">
            Your Trusted Partner in{" "}
            <span className="text-secondary">Real Estate</span> &amp; Financial
            Solutions
          </h1>

          <p className="font-body text-lg text-card/80 mb-10 leading-relaxed max-w-xl">
            Buy, sell, invest &amp; get loans easily with expert guidance. Zero
            brokerage options, transparent deals, and free site visits — all
            under one roof.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              onClick={() => scrollTo("#properties")}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-body font-semibold shadow-elevated group"
              data-ocid="hero-cta-properties"
            >
              <Building2 className="w-4 h-4 mr-2" />
              Explore Properties
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
            </Button>
            <Button
              onClick={() => scrollTo("#loans")}
              size="lg"
              variant="outline"
              className="border-card/40 text-card bg-card/10 backdrop-blur-sm hover:bg-card/20 font-body font-semibold"
              data-ocid="hero-cta-loans"
            >
              <CreditCard className="w-4 h-4 mr-2" />
              Apply for Loan
            </Button>
          </div>

          {/* Stats row */}
          <div className="mt-14 grid grid-cols-3 gap-6 max-w-md">
            {[
              { value: "500+", label: "Properties Sold" },
              { value: "₹200Cr+", label: "Loans Disbursed" },
              { value: "98%", label: "Client Satisfaction" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-display font-bold text-2xl text-card">
                  {stat.value}
                </div>
                <div className="font-body text-xs text-card/60 mt-0.5">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
