import { z } from "zod";

export const navLinkSchema = z.object({
  label: z.string().min(1),
  href: z.string().min(1),
  isActive: z.boolean().optional(),
});

export const ctaButtonSchema = z.object({
  label: z.string().min(1),
  href: z.string().optional(),
  variant: z.enum(["primary", "secondary", "outline"]).default("primary"),
});

export const iconItemSchema = z.object({
  icon: z.string().min(1),
  title: z.string().min(1),
  description: z.string().min(1),
});

export const imageAssetSchema = z.object({
  src: z.string().url(),
  alt: z.string().min(1),
});

export const trustBadgeSchema = z.object({
  icon: z.string().min(1),
  label: z.string().min(1),
});

export const painPointSchema = z.object({
  icon: z.string().min(1),
  title: z.string().min(1),
  description: z.string().min(1),
  link: z.string().min(1),
});

export const featureItemSchema = z.object({
  icon: z.string().min(1),
  title: z.string().min(1),
  description: z.string().min(1),
});

export const shipmentStepSchema = z.object({
  status: z.enum(["completed", "active", "pending"]),
  title: z.string().min(1),
  subtitle: z.string().min(1),
});

export const fuelBarSchema = z.object({
  label: z.string().min(1),
  value: z.string().min(1),
  heightPercent: z.number().min(0).max(100),
  variant: z.enum(["manual", "tcms"]),
});

export const complianceCardSchema = z.object({
  icon: z.string().min(1),
  title: z.string().min(1),
  description: z.string().min(1),
});

export const ecosystemNodeSchema = z.object({
  icon: z.string().min(1),
  label: z.string().min(1),
});

export const statSchema = z.object({
  value: z.number(),
  prefix: z.string().optional(),
  suffix: z.string().optional(),
  decimals: z.number().optional(),
  label: z.string().min(1),
});

export const testimonialSchema = z.object({
  quote: z.string().min(1),
  name: z.string().min(1),
  role: z.string().min(1),
  avatar: imageAssetSchema,
});

export const pricingFeatureSchema = z.object({
  label: z.string().min(1),
  included: z.boolean(),
});

export const pricingPlanSchema = z.object({
  name: z.string().min(1),
  description: z.string().min(1),
  price: z.string().min(1),
  period: z.string().optional(),
  isFeatured: z.boolean().optional(),
  badge: z.string().optional(),
  features: z.array(pricingFeatureSchema),
  cta: ctaButtonSchema,
});

export const footerColumnSchema = z.object({
  title: z.string().min(1),
  links: z.array(z.object({ label: z.string(), href: z.string() })),
});

export const homepageContentSchema = z.object({
  metadata: z.object({
    title: z.string().min(1),
    description: z.string().min(1),
  }),
  navigation: z.object({
    brand: z.string().min(1),
    links: z.array(navLinkSchema),
    loginLabel: z.string().min(1),
    cta: ctaButtonSchema,
  }),
  hero: z.object({
    headline: z.string().min(1),
    headlineHighlight: z.string().min(1),
    description: z.string().min(1),
    primaryCta: ctaButtonSchema,
    secondaryCta: ctaButtonSchema,
    image: imageAssetSchema,
    trustBadges: z.array(trustBadgeSchema),
  }),
  painPoints: z.object({
    title: z.string().min(1),
    subtitle: z.string().min(1),
    items: z.array(painPointSchema),
    ctaBanner: z.object({
      title: z.string().min(1),
      cta: ctaButtonSchema,
    }),
  }),
  visibility: z.object({
    title: z.string().min(1),
    titleHighlight: z.string().min(1),
    image: imageAssetSchema,
    features: z.array(featureItemSchema),
  }),
  customerExperience: z.object({
    title: z.string().min(1),
    subtitle: z.string().min(1),
    features: z.array(featureItemSchema),
    shipment: z.object({
      id: z.string().min(1),
      status: z.string().min(1),
      steps: z.array(shipmentStepSchema),
    }),
  }),
  fuelCost: z.object({
    title: z.string().min(1),
    features: z.array(featureItemSchema),
    chart: z.object({
      title: z.string().min(1),
      bars: z.array(fuelBarSchema),
      savingsLabel: z.string().min(1),
    }),
  }),
  compliance: z.object({
    title: z.string().min(1),
    subtitle: z.string().min(1),
    items: z.array(complianceCardSchema),
  }),
  ecosystem: z.object({
    title: z.string().min(1),
    subtitle: z.string().min(1),
    hubLabel: z.string().min(1),
    hubSublabel: z.string().min(1),
    nodes: z.array(ecosystemNodeSchema),
  }),
  roiCalculator: z.object({
    title: z.string().min(1),
    fleetSizeDefault: z.number().min(1),
    fuelSpendPlaceholder: z.string().min(1),
    adminHoursPlaceholder: z.string().min(1),
    results: z.object({
      fuelSavingsLabel: z.string().min(1),
      adminTimeLabel: z.string().min(1),
      collectionLabel: z.string().min(1),
    }),
    cta: ctaButtonSchema,
  }),
  socialProof: z.object({
    stats: z.array(statSchema),
    testimonials: z.array(testimonialSchema),
  }),
  pricing: z.object({
    title: z.string().min(1),
    subtitle: z.string().min(1),
    plans: z.array(pricingPlanSchema),
  }),
  finalCta: z.object({
    title: z.string().min(1),
    description: z.string().min(1),
    cta: ctaButtonSchema,
    footnote: z.string().min(1),
  }),
  footer: z.object({
    brand: z.string().min(1),
    description: z.string().min(1),
    columns: z.array(footerColumnSchema),
    copyright: z.string().min(1),
    socialIcons: z.array(z.string()),
  }),
});

export type HomepageContent = z.infer<typeof homepageContentSchema>;
export type NavLink = z.infer<typeof navLinkSchema>;
export type CtaButton = z.infer<typeof ctaButtonSchema>;
export type ImageAsset = z.infer<typeof imageAssetSchema>;
export type TrustBadge = z.infer<typeof trustBadgeSchema>;
export type PainPoint = z.infer<typeof painPointSchema>;
export type FeatureItem = z.infer<typeof featureItemSchema>;
export type ShipmentStep = z.infer<typeof shipmentStepSchema>;
export type FuelBar = z.infer<typeof fuelBarSchema>;
export type ComplianceCard = z.infer<typeof complianceCardSchema>;
export type EcosystemNode = z.infer<typeof ecosystemNodeSchema>;
export type Stat = z.infer<typeof statSchema>;
export type Testimonial = z.infer<typeof testimonialSchema>;
export type PricingPlan = z.infer<typeof pricingPlanSchema>;
export type FooterColumn = z.infer<typeof footerColumnSchema>;
