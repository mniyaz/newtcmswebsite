import Link from "next/link";

interface FooterColumn {
  title: string;
  links: { label: string; href: string; active?: boolean }[];
}

interface CommandCenterFooterProps {
  columns: FooterColumn[];
  tagline?: string;
  legalLinks?: string[];
}

export function CommandCenterFooter({
  columns,
  tagline = "© 2024 TCMS.ai. Enterprise Intelligence for Global Freight.",
  legalLinks = [
    "SLA Standards",
    "Privacy Policy",
    "Terms of Service",
    "Carrier Network",
    "Sustainability",
    "Global Support",
  ],
}: CommandCenterFooterProps) {
  return (
    <footer className="mt-12 border-t border-slate-200 bg-white">
      <div className="mx-auto grid max-w-[1200px] gap-10 px-4 py-12 sm:grid-cols-2 sm:px-6 lg:grid-cols-5 lg:px-8">
        <div className="sm:col-span-2 lg:col-span-1">
          <Link href="/" className="text-xl font-bold text-primary">
            TCMS.ai
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-500">
            {tagline}
          </p>
        </div>
        {columns.map((column) => (
          <div key={column.title}>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
              {column.title}
            </h4>
            <ul className="mt-4 space-y-2">
              {column.links.map((link) => (
                <li key={link.label}>
                  {link.href.startsWith("/") ? (
                    <Link
                      href={link.href}
                      className={
                        link.active
                          ? "text-sm font-bold text-primary"
                          : "text-sm text-slate-500 hover:text-primary"
                      }
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <span
                      className={
                        link.active
                          ? "text-sm font-bold text-primary"
                          : "text-sm text-slate-500"
                      }
                    >
                      {link.label}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mx-auto flex max-w-[1200px] flex-wrap gap-4 border-t border-slate-100 px-4 py-6 sm:px-6 lg:px-8">
        {legalLinks.map((link) => (
          <span key={link} className="text-xs text-slate-400">
            {link}
          </span>
        ))}
      </div>
    </footer>
  );
}
