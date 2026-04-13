import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useSubmitLead } from "@/hooks/useQueries";
import type { LeadFormData } from "@/types";
import { CheckCircle2, Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import { SiWhatsapp } from "react-icons/si";

const contactDetails = [
  { icon: Phone, label: "Phone", value: "9108889858", href: "tel:9108889858" },
  {
    icon: Mail,
    label: "Email",
    value: "onesalesoffice@gmail.com",
    href: "mailto:onesalesoffice@gmail.com",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Bengaluru, Karnataka, India",
    href: null,
  },
];

export function ContactSection() {
  const { mutate: submitLead, isPending, isSuccess, isError } = useSubmitLead();

  const [form, setForm] = useState<LeadFormData>({
    name: "",
    phone: "",
    requirement: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submitLead(form);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-xs font-body font-semibold uppercase tracking-widest text-primary mb-3">
            Get in Touch
          </p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground">
            Ready to Take the Next Step?
          </h2>
          <p className="font-body text-base text-muted-foreground mt-4 max-w-xl mx-auto">
            Leave your details and our expert advisors will reach out within 24
            hours. No obligations, no pressure.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-14 items-start">
          {/* Contact info */}
          <div>
            <div className="space-y-5 mb-8" data-ocid="contact-details-list">
              {contactDetails.map(({ icon: Icon, label, value, href }) => (
                <div
                  key={label}
                  className="flex items-start gap-4 p-4 bg-card rounded-xl border border-border shadow-subtle"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-4.5 h-4.5 text-primary" />
                  </div>
                  <div className="min-w-0">
                    <p className="font-body text-xs text-muted-foreground mb-0.5">
                      {label}
                    </p>
                    {href ? (
                      <a
                        href={href}
                        className="font-body font-semibold text-foreground hover:text-primary transition-colors duration-200 break-all"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="font-body font-semibold text-foreground">
                        {value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/919108889858"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 rounded-xl bg-[#25D366]/10 border border-[#25D366]/30 hover:bg-[#25D366]/20 transition-smooth group"
              data-ocid="contact-whatsapp-cta"
            >
              <SiWhatsapp className="w-6 h-6 text-[#25D366] flex-shrink-0" />
              <div>
                <p className="font-body font-semibold text-foreground text-sm">
                  Chat on WhatsApp
                </p>
                <p className="font-body text-xs text-muted-foreground">
                  Quick responses during business hours
                </p>
              </div>
            </a>
          </div>

          {/* Lead form */}
          <div
            className="bg-card rounded-2xl border border-border shadow-subtle p-8"
            data-ocid="contact-form-card"
          >
            {isSuccess ? (
              <div
                className="flex flex-col items-center justify-center py-12 text-center gap-4"
                data-ocid="contact-form-success"
              >
                <CheckCircle2 className="w-12 h-12 text-primary" />
                <h3 className="font-display font-bold text-xl text-foreground">
                  We've received your request!
                </h3>
                <p className="font-body text-sm text-muted-foreground max-w-xs">
                  Our advisor will contact you within 24 hours. You can also
                  reach us directly on WhatsApp.
                </p>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() =>
                    setForm({ name: "", phone: "", requirement: "" })
                  }
                  className="mt-2 border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground font-body font-semibold transition-smooth"
                >
                  Submit Another Request
                </Button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-5"
                data-ocid="contact-form"
              >
                <div className="space-y-1.5">
                  <Label
                    htmlFor="name"
                    className="font-body text-sm font-semibold text-foreground"
                  >
                    Full Name <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="e.g. Rahul Sharma"
                    value={form.name}
                    onChange={handleChange}
                    className="font-body"
                    data-ocid="contact-input-name"
                  />
                </div>
                <div className="space-y-1.5">
                  <Label
                    htmlFor="phone"
                    className="font-body text-sm font-semibold text-foreground"
                  >
                    Phone Number <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    placeholder="e.g. 9108889858"
                    value={form.phone}
                    onChange={handleChange}
                    className="font-body"
                    data-ocid="contact-input-phone"
                  />
                </div>
                <div className="space-y-1.5">
                  <Label
                    htmlFor="requirement"
                    className="font-body text-sm font-semibold text-foreground"
                  >
                    Your Requirement
                  </Label>
                  <Textarea
                    id="requirement"
                    name="requirement"
                    rows={4}
                    placeholder="E.g. Looking for a 3BHK in Whitefield under ₹90 lakhs, or need a home loan of ₹50 lakhs..."
                    value={form.requirement}
                    onChange={handleChange}
                    className="font-body resize-none"
                    data-ocid="contact-input-requirement"
                  />
                </div>
                {isError && (
                  <p className="text-sm text-destructive font-body">
                    Something went wrong. Please try again or reach us on
                    WhatsApp.
                  </p>
                )}
                <Button
                  type="submit"
                  disabled={isPending}
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-body font-semibold shadow-subtle transition-smooth"
                  data-ocid="contact-form-submit"
                >
                  {isPending ? "Submitting…" : "Request Free Consultation"}
                </Button>
                <p className="text-xs font-body text-muted-foreground text-center">
                  Your details are private and will never be shared with third
                  parties.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
