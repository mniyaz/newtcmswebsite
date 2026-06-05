"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import type { HomepageContent } from "@/lib/content/schema";

interface CmsEditorProps {
  initialContent: HomepageContent;
}

type SectionKey =
  | "metadata"
  | "navigation"
  | "hero"
  | "painPoints"
  | "pricing"
  | "finalCta"
  | "footer";

const sections: { key: SectionKey; label: string }[] = [
  { key: "metadata", label: "SEO & Metadata" },
  { key: "navigation", label: "Navigation" },
  { key: "hero", label: "Hero" },
  { key: "painPoints", label: "Pain Points" },
  { key: "pricing", label: "Pricing" },
  { key: "finalCta", label: "Final CTA" },
  { key: "footer", label: "Footer" },
];

function Field({
  label,
  value,
  onChange,
  multiline = false,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  multiline?: boolean;
}) {
  return (
    <label className="block">
      <span className="mb-1 block font-label-md uppercase text-on-surface-variant">
        {label}
      </span>
      {multiline ? (
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          rows={3}
          className="w-full rounded-lg border border-outline-variant p-3 outline-none focus:ring-2 focus:ring-primary"
        />
      ) : (
        <input
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full rounded-lg border border-outline-variant p-3 outline-none focus:ring-2 focus:ring-primary"
        />
      )}
    </label>
  );
}

export function CmsEditor({ initialContent }: CmsEditorProps) {
  const router = useRouter();
  const [content, setContent] = useState(initialContent);
  const [activeSection, setActiveSection] = useState<SectionKey>("hero");
  const [status, setStatus] = useState<string>("");
  const [isSaving, setIsSaving] = useState(false);

  const editor = useMemo(() => {
    switch (activeSection) {
      case "metadata":
        return (
          <div className="space-y-4">
            <Field
              label="Page Title"
              value={content.metadata.title}
              onChange={(title) =>
                setContent((prev) => ({ ...prev, metadata: { ...prev.metadata, title } }))
              }
            />
            <Field
              label="Meta Description"
              value={content.metadata.description}
              multiline
              onChange={(description) =>
                setContent((prev) => ({
                  ...prev,
                  metadata: { ...prev.metadata, description },
                }))
              }
            />
          </div>
        );
      case "navigation":
        return (
          <div className="space-y-4">
            <Field
              label="Brand Name"
              value={content.navigation.brand}
              onChange={(brand) =>
                setContent((prev) => ({
                  ...prev,
                  navigation: { ...prev.navigation, brand },
                }))
              }
            />
            <Field
              label="Login Label"
              value={content.navigation.loginLabel}
              onChange={(loginLabel) =>
                setContent((prev) => ({
                  ...prev,
                  navigation: { ...prev.navigation, loginLabel },
                }))
              }
            />
            <Field
              label="Primary CTA"
              value={content.navigation.cta.label}
              onChange={(label) =>
                setContent((prev) => ({
                  ...prev,
                  navigation: {
                    ...prev.navigation,
                    cta: { ...prev.navigation.cta, label },
                  },
                }))
              }
            />
          </div>
        );
      case "hero":
        return (
          <div className="space-y-4">
            <Field
              label="Headline"
              value={content.hero.headline}
              onChange={(headline) =>
                setContent((prev) => ({ ...prev, hero: { ...prev.hero, headline } }))
              }
            />
            <Field
              label="Headline Highlight"
              value={content.hero.headlineHighlight}
              onChange={(headlineHighlight) =>
                setContent((prev) => ({
                  ...prev,
                  hero: { ...prev.hero, headlineHighlight },
                }))
              }
            />
            <Field
              label="Description"
              value={content.hero.description}
              multiline
              onChange={(description) =>
                setContent((prev) => ({ ...prev, hero: { ...prev.hero, description } }))
              }
            />
            <Field
              label="Primary CTA"
              value={content.hero.primaryCta.label}
              onChange={(label) =>
                setContent((prev) => ({
                  ...prev,
                  hero: {
                    ...prev.hero,
                    primaryCta: { ...prev.hero.primaryCta, label },
                  },
                }))
              }
            />
            <Field
              label="Hero Image URL"
              value={content.hero.image.src}
              onChange={(src) =>
                setContent((prev) => ({
                  ...prev,
                  hero: { ...prev.hero, image: { ...prev.hero.image, src } },
                }))
              }
            />
          </div>
        );
      case "painPoints":
        return (
          <div className="space-y-6">
            <Field
              label="Section Title"
              value={content.painPoints.title}
              onChange={(title) =>
                setContent((prev) => ({
                  ...prev,
                  painPoints: { ...prev.painPoints, title },
                }))
              }
            />
            <Field
              label="Section Subtitle"
              value={content.painPoints.subtitle}
              multiline
              onChange={(subtitle) =>
                setContent((prev) => ({
                  ...prev,
                  painPoints: { ...prev.painPoints, subtitle },
                }))
              }
            />
            {content.painPoints.items.map((item, index) => (
              <div
                key={item.title}
                className="rounded-xl border border-outline-variant p-4"
              >
                <p className="mb-3 font-semibold text-primary">Pain Point {index + 1}</p>
                <div className="space-y-3">
                  <Field
                    label="Title"
                    value={item.title}
                    onChange={(title) =>
                      setContent((prev) => {
                        const items = [...prev.painPoints.items];
                        items[index] = { ...items[index], title };
                        return {
                          ...prev,
                          painPoints: { ...prev.painPoints, items },
                        };
                      })
                    }
                  />
                  <Field
                    label="Description"
                    value={item.description}
                    multiline
                    onChange={(description) =>
                      setContent((prev) => {
                        const items = [...prev.painPoints.items];
                        items[index] = { ...items[index], description };
                        return {
                          ...prev,
                          painPoints: { ...prev.painPoints, items },
                        };
                      })
                    }
                  />
                </div>
              </div>
            ))}
          </div>
        );
      case "pricing":
        return (
          <div className="space-y-6">
            <Field
              label="Section Title"
              value={content.pricing.title}
              onChange={(title) =>
                setContent((prev) => ({
                  ...prev,
                  pricing: { ...prev.pricing, title },
                }))
              }
            />
            {content.pricing.plans.map((plan, index) => (
              <div
                key={plan.name}
                className="rounded-xl border border-outline-variant p-4"
              >
                <p className="mb-3 font-semibold text-primary">Plan {index + 1}</p>
                <div className="space-y-3">
                  <Field
                    label="Name"
                    value={plan.name}
                    onChange={(name) =>
                      setContent((prev) => {
                        const plans = [...prev.pricing.plans];
                        plans[index] = { ...plans[index], name };
                        return { ...prev, pricing: { ...prev.pricing, plans } };
                      })
                    }
                  />
                  <Field
                    label="Price"
                    value={plan.price}
                    onChange={(price) =>
                      setContent((prev) => {
                        const plans = [...prev.pricing.plans];
                        plans[index] = { ...plans[index], price };
                        return { ...prev, pricing: { ...prev.pricing, plans } };
                      })
                    }
                  />
                  <Field
                    label="Description"
                    value={plan.description}
                    multiline
                    onChange={(description) =>
                      setContent((prev) => {
                        const plans = [...prev.pricing.plans];
                        plans[index] = { ...plans[index], description };
                        return { ...prev, pricing: { ...prev.pricing, plans } };
                      })
                    }
                  />
                </div>
              </div>
            ))}
          </div>
        );
      case "finalCta":
        return (
          <div className="space-y-4">
            <Field
              label="Title"
              value={content.finalCta.title}
              onChange={(title) =>
                setContent((prev) => ({
                  ...prev,
                  finalCta: { ...prev.finalCta, title },
                }))
              }
            />
            <Field
              label="Description"
              value={content.finalCta.description}
              multiline
              onChange={(description) =>
                setContent((prev) => ({
                  ...prev,
                  finalCta: { ...prev.finalCta, description },
                }))
              }
            />
            <Field
              label="CTA Label"
              value={content.finalCta.cta.label}
              onChange={(label) =>
                setContent((prev) => ({
                  ...prev,
                  finalCta: {
                    ...prev.finalCta,
                    cta: { ...prev.finalCta.cta, label },
                  },
                }))
              }
            />
          </div>
        );
      case "footer":
        return (
          <div className="space-y-4">
            <Field
              label="Brand"
              value={content.footer.brand}
              onChange={(brand) =>
                setContent((prev) => ({
                  ...prev,
                  footer: { ...prev.footer, brand },
                }))
              }
            />
            <Field
              label="Description"
              value={content.footer.description}
              multiline
              onChange={(description) =>
                setContent((prev) => ({
                  ...prev,
                  footer: { ...prev.footer, description },
                }))
              }
            />
            <Field
              label="Copyright"
              value={content.footer.copyright}
              onChange={(copyright) =>
                setContent((prev) => ({
                  ...prev,
                  footer: { ...prev.footer, copyright },
                }))
              }
            />
          </div>
        );
      default:
        return null;
    }
  }, [activeSection, content]);

  async function handleSave() {
    setIsSaving(true);
    setStatus("");

    const response = await fetch("/api/content", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(content),
    });

    if (!response.ok) {
      const payload = (await response.json()) as { error?: string };
      setStatus(payload.error ?? "Failed to save content.");
      setIsSaving(false);
      return;
    }

    setStatus("Content saved. Homepage revalidated.");
    router.refresh();
    setIsSaving(false);
  }

  async function handleReset() {
    if (!confirm("Reset all content to defaults? This cannot be undone.")) return;

    setIsSaving(true);
    const response = await fetch("/api/content", { method: "DELETE" });
    if (response.ok) {
      const resetContent = (await response.json()) as HomepageContent;
      setContent(resetContent);
      setStatus("Content reset to defaults.");
      router.refresh();
    }
    setIsSaving(false);
  }

  async function handleLogout() {
    await fetch("/api/auth", { method: "DELETE" });
    router.refresh();
  }

  return (
    <div className="min-h-screen bg-surface-container-low">
      <header className="border-b border-outline-variant bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div>
            <p className="font-label-md uppercase text-primary">TCMS CMS</p>
            <h1 className="font-headline-md text-headline-md">Content Management</h1>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="/"
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border border-outline-variant px-4 py-2 text-sm font-medium"
            >
              View Site
            </a>
            <button
              type="button"
              onClick={handleLogout}
              className="rounded-lg border border-outline-variant px-4 py-2 text-sm font-medium"
            >
              Logout
            </button>
          </div>
        </div>
      </header>

      <div className="mx-auto grid max-w-7xl gap-6 px-6 py-8 lg:grid-cols-[240px_1fr]">
        <aside className="rounded-xl border border-outline-variant bg-white p-4">
          <nav className="space-y-1">
            {sections.map((section) => (
              <button
                key={section.key}
                type="button"
                onClick={() => setActiveSection(section.key)}
                className={`w-full rounded-lg px-3 py-2 text-left text-sm font-medium transition-colors ${
                  activeSection === section.key
                    ? "bg-primary text-on-primary"
                    : "text-on-surface-variant hover:bg-surface-container"
                }`}
              >
                {section.label}
              </button>
            ))}
          </nav>
        </aside>

        <main className="rounded-xl border border-outline-variant bg-white p-6">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="font-title-lg text-title-lg">
              {sections.find((s) => s.key === activeSection)?.label}
            </h2>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={handleReset}
                disabled={isSaving}
                className="rounded-lg border border-outline-variant px-4 py-2 text-sm font-medium"
              >
                Reset Defaults
              </button>
              <button
                type="button"
                onClick={handleSave}
                disabled={isSaving}
                className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-on-primary disabled:opacity-60"
              >
                {isSaving ? "Saving..." : "Save Changes"}
              </button>
            </div>
          </div>

          {editor}

          {status && (
            <p className="mt-6 rounded-lg bg-secondary-container/20 px-4 py-3 text-sm text-secondary">
              {status}
            </p>
          )}
        </main>
      </div>
    </div>
  );
}
