import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { Property } from "@/types";
import { Bath, BedDouble, MapPin, Maximize2 } from "lucide-react";

const properties: Property[] = [
  {
    id: "p1",
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
    title: "Prestige Lakeside Residences",
    location: "Whitefield, Bengaluru",
    price: "₹85 Lakhs",
    beds: 3,
    baths: 2,
    sqft: 1450,
    tag: "Ready to Move",
  },
  {
    id: "p2",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    title: "Brigade Gateway Heights",
    location: "Rajajinagar, Bengaluru",
    price: "₹1.2 Crores",
    beds: 4,
    baths: 3,
    sqft: 2100,
    tag: "Premium",
  },
  {
    id: "p3",
    image:
      "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=800&q=80",
    title: "Sobha Dream Acres",
    location: "Panathur, Bengaluru",
    price: "₹62 Lakhs",
    beds: 2,
    baths: 2,
    sqft: 1050,
    tag: "Under Construction",
  },
  {
    id: "p4",
    image:
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80",
    title: "Godrej Splendour",
    location: "Hoodi, Bengaluru",
    price: "₹74 Lakhs",
    beds: 3,
    baths: 2,
    sqft: 1320,
    tag: "Ready to Move",
  },
  {
    id: "p5",
    image:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80",
    title: "Purva Zenium",
    location: "Hebbal, Bengaluru",
    price: "₹1.05 Crores",
    beds: 3,
    baths: 3,
    sqft: 1780,
    tag: "Premium",
  },
  {
    id: "p6",
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80",
    title: "Total Environment Windmills",
    location: "Doddaballapur Rd, Bengaluru",
    price: "₹55 Lakhs",
    beds: 2,
    baths: 2,
    sqft: 980,
    tag: "Under Construction",
  },
];

const tagVariantMap: Record<
  Property["tag"],
  "default" | "secondary" | "outline"
> = {
  "Ready to Move": "default",
  Premium: "secondary",
  "Under Construction": "outline",
};

function PropertyCard({ property }: { property: Property }) {
  const scrollToContact = () =>
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });

  return (
    <div
      className="bg-card rounded-2xl border border-border shadow-subtle hover:shadow-elevated overflow-hidden group transition-smooth"
      data-ocid={`property-card-${property.id}`}
    >
      <div className="relative overflow-hidden h-48">
        <img
          src={property.image}
          alt={property.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute top-3 left-3">
          <Badge
            variant={tagVariantMap[property.tag]}
            className="text-xs shadow-xs font-body font-semibold"
          >
            {property.tag}
          </Badge>
        </div>
      </div>
      <div className="p-5">
        <h3 className="font-display font-semibold text-base text-foreground mb-1 truncate">
          {property.title}
        </h3>
        <div className="flex items-center gap-1.5 text-muted-foreground mb-3">
          <MapPin className="w-3.5 h-3.5 flex-shrink-0" />
          <span className="font-body text-xs truncate">
            {property.location}
          </span>
        </div>
        <div className="flex items-center gap-4 text-xs text-muted-foreground font-body mb-4">
          <span className="flex items-center gap-1">
            <BedDouble className="w-3.5 h-3.5" />
            {property.beds} Beds
          </span>
          <span className="flex items-center gap-1">
            <Bath className="w-3.5 h-3.5" />
            {property.baths} Baths
          </span>
          <span className="flex items-center gap-1">
            <Maximize2 className="w-3.5 h-3.5" />
            {property.sqft} sqft
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="font-display font-bold text-lg text-primary">
            {property.price}
          </span>
          <Button
            size="sm"
            variant="outline"
            onClick={scrollToContact}
            className="text-xs font-body border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-smooth"
            data-ocid={`property-view-details-${property.id}`}
          >
            View Details
          </Button>
        </div>
      </div>
    </div>
  );
}

export function PropertiesSection() {
  const scrollToContact = () =>
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="properties" className="py-20 lg:py-28 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <p className="text-xs font-body font-semibold uppercase tracking-widest text-primary mb-3">
              Featured Listings
            </p>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground">
              Properties Handpicked For You
            </h2>
          </div>
          <Button
            variant="outline"
            onClick={scrollToContact}
            className="flex-shrink-0 border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground font-body font-semibold transition-smooth"
            data-ocid="properties-view-all"
          >
            Request Full Listing
          </Button>
        </div>

        <div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          data-ocid="properties-grid"
        >
          {properties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </div>
    </section>
  );
}
