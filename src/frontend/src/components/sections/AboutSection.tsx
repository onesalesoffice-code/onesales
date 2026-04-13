import { CheckCircle2, ShieldCheck, Users } from "lucide-react";

const values = [
  {
    icon: CheckCircle2,
    title: "Zero Brokerage Options",
    description:
      "Direct deals between buyers and sellers — no hidden charges, no middleman markup.",
  },
  {
    icon: Users,
    title: "Customer-First Approach",
    description:
      "Every decision we make puts your best interest first. We work for you, not commissions.",
  },
  {
    icon: ShieldCheck,
    title: "End-to-End Support",
    description:
      "From property search and site visits to loan processing and documentation — we handle it all.",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Left: text */}
          <div>
            <p className="text-xs font-body font-semibold uppercase tracking-widest text-primary mb-3">
              About Us
            </p>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground leading-snug mb-5">
              Redefining Real Estate with{" "}
              <span className="text-primary">Integrity &amp; Expertise</span>
            </h2>
            <p className="font-body text-base text-muted-foreground leading-relaxed mb-6">
              OneSales is a full-service real estate advisory and financial
              solutions firm based in Bengaluru. We help individuals, families,
              and businesses navigate property transactions and financial
              products — with complete transparency and expert guidance at every
              step.
            </p>
            <p className="font-body text-base text-muted-foreground leading-relaxed">
              From residential apartments and commercial spaces to
              construction-linked plans and investment portfolios, we bring
              together deep market knowledge and a genuine commitment to your
              goals.
            </p>
          </div>

          {/* Right: value cards */}
          <div className="space-y-5" data-ocid="about-values-list">
            {values.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="flex gap-4 p-5 bg-card rounded-xl border border-border shadow-subtle hover:shadow-elevated transition-smooth"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-base text-foreground mb-1">
                    {title}
                  </h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
