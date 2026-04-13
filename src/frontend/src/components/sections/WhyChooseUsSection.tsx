import {
  BadgeCheck,
  FileCheck,
  MapPin,
  ShieldCheck,
  Star,
  Zap,
} from "lucide-react";

const reasons = [
  {
    icon: BadgeCheck,
    title: "Zero Brokerage Options",
    description:
      "Save lakhs with our direct-deal model. No inflated prices, no surprise fees.",
  },
  {
    icon: Star,
    title: "Trusted Advisory",
    description:
      "Over 5 years of local market expertise. We know every micro-market in the city.",
  },
  {
    icon: Zap,
    title: "Quick Loan Processing",
    description:
      "Loan approvals in as little as 48 hours with our partner network of 20+ banks.",
  },
  {
    icon: FileCheck,
    title: "Transparent Deals",
    description:
      "Clear pricing, legal verification support, and complete documentation assistance.",
  },
  {
    icon: MapPin,
    title: "Free Site Visit",
    description:
      "Complimentary pickup and drop service so you can view properties at your convenience.",
  },
  {
    icon: ShieldCheck,
    title: "End-to-End Support",
    description:
      "One dedicated advisor from first inquiry to final handover — always reachable.",
  },
];

export function WhyChooseUsSection() {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-xs font-body font-semibold uppercase tracking-widest text-primary mb-3">
            Why OneSales
          </p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground">
            The OneSales Difference
          </h2>
          <p className="font-body text-base text-muted-foreground mt-4 max-w-xl mx-auto">
            We don't just help you find a property or a loan — we build lasting
            relationships based on trust and results.
          </p>
        </div>

        <div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          data-ocid="why-choose-us-grid"
        >
          {reasons.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="group p-6 bg-card rounded-xl border border-border shadow-subtle hover:shadow-elevated hover:border-primary/20 transition-smooth"
            >
              <div className="w-11 h-11 rounded-xl bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center mb-4 transition-colors duration-200">
                <Icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-display font-semibold text-base text-foreground mb-2">
                {title}
              </h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
