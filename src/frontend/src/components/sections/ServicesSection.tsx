import { Badge } from "@/components/ui/badge";
import {
  Briefcase,
  Building,
  Car,
  Factory,
  Home,
  Landmark,
  TrendingUp,
  User,
} from "lucide-react";

const realEstateServices = [
  { icon: Home, label: "Residential Properties" },
  { icon: Building, label: "Commercial Properties" },
  { icon: Landmark, label: "Under Construction" },
  { icon: Briefcase, label: "Ready to Move" },
  { icon: TrendingUp, label: "Investment Consulting" },
  { icon: Building, label: "Site Visit Assistance" },
];

const loanServices = [
  { icon: Home, label: "Home Loan", desc: "Best rates, fast approval" },
  { icon: Car, label: "Car Loan", desc: "Flexible EMI options" },
  { icon: User, label: "Personal Loan", desc: "Quick disbursal" },
  { icon: Factory, label: "MSME / Business Loan", desc: "Grow your business" },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-20 lg:py-28 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-xs font-body font-semibold uppercase tracking-widest text-primary mb-3">
            What We Offer
          </p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground">
            Comprehensive Services for Every Need
          </h2>
          <p className="font-body text-base text-muted-foreground mt-4 max-w-xl mx-auto">
            From finding your dream home to securing the right financial product
            — we've got you covered.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Real Estate */}
          <div
            className="bg-card rounded-2xl border border-border shadow-subtle p-8"
            data-ocid="services-real-estate"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <Building className="w-5 h-5 text-primary" />
              </div>
              <div>
                <Badge variant="secondary" className="text-xs mb-1">
                  Real Estate
                </Badge>
                <h3 className="font-display font-bold text-lg text-foreground">
                  Property Services
                </h3>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {realEstateServices.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-2.5 p-3 rounded-lg bg-background border border-border hover:border-primary/30 hover:bg-primary/5 transition-smooth cursor-default"
                >
                  <Icon className="w-4 h-4 text-primary flex-shrink-0" />
                  <span className="font-body text-sm text-foreground leading-tight">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Loans */}
          <div
            id="loans"
            className="bg-card rounded-2xl border border-border shadow-subtle p-8"
            data-ocid="services-loans"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <Landmark className="w-5 h-5 text-primary" />
              </div>
              <div>
                <Badge variant="secondary" className="text-xs mb-1">
                  Finance
                </Badge>
                <h3 className="font-display font-bold text-lg text-foreground">
                  Loan &amp; Finance Services
                </h3>
              </div>
            </div>
            <div className="space-y-3">
              {loanServices.map(({ icon: Icon, label, desc }) => (
                <div
                  key={label}
                  className="flex items-center gap-4 p-4 rounded-lg bg-background border border-border hover:border-primary/30 hover:bg-primary/5 transition-smooth cursor-default"
                >
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-4 h-4 text-primary" />
                  </div>
                  <div className="min-w-0">
                    <div className="font-body font-semibold text-sm text-foreground">
                      {label}
                    </div>
                    <div className="font-body text-xs text-muted-foreground">
                      {desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-4 text-xs font-body text-muted-foreground border-t border-border pt-4">
              ✦ Loan assistance with the best rates &amp; fast approval from
              leading banks and NBFCs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
