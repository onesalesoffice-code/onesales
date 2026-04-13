export interface NavLink {
  label: string;
  href: string;
}

export interface Service {
  icon: string;
  title: string;
  description: string;
  items?: string[];
}

export interface Property {
  id: string;
  image: string;
  title: string;
  location: string;
  price: string;
  beds: number;
  baths: number;
  sqft: number;
  tag: "Ready to Move" | "Under Construction" | "Premium";
}

export interface WhyChooseItem {
  icon: string;
  title: string;
  description: string;
}

export interface LeadFormData {
  name: string;
  phone: string;
  requirement: string;
}
