import type { HomepageContent } from "@/lib/content/schema";
import { Container } from "@/components/ui/Container";
import { MaterialIcon } from "@/components/ui/MaterialIcon";

interface FooterProps {
  footer: HomepageContent["footer"];
}

export function Footer({ footer }: FooterProps) {
  return (
    <footer className="border-t border-slate-200 bg-section-muted">
      <Container className="py-14 md:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-6">
          <div className="sm:col-span-2 lg:col-span-2">
            <div className="text-xl font-bold text-primary">{footer.brand}</div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-600">
              {footer.description}
            </p>
          </div>
          {footer.columns.map((column) => (
            <div key={column.title}>
              <p className="text-xs font-bold uppercase tracking-wider text-primary">
                {column.title}
              </p>
              <ul className="mt-4 space-y-2.5">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-slate-600 transition-colors hover:text-primary"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
      <Container className="flex flex-col items-center justify-between gap-4 border-t border-slate-200 py-6 md:flex-row">
        <p className="text-center text-xs text-slate-500 md:text-left">
          {footer.copyright}
        </p>
        <div className="flex gap-5">
          {footer.socialIcons.map((icon) => (
            <MaterialIcon
              key={icon}
              name={icon}
              className="cursor-pointer text-slate-400 transition-all hover:scale-110 hover:text-primary"
            />
          ))}
        </div>
      </Container>
    </footer>
  );
}
