import type { HomepageContent } from "@/lib/content/schema";
import { Container } from "@/components/ui/Container";
import { MaterialIcon } from "@/components/ui/MaterialIcon";

interface FooterProps {
  footer: HomepageContent["footer"];
}

export function Footer({ footer }: FooterProps) {
  return (
    <footer className="md:px-10 px-5 !bg-[#F8F9FA]">
      <div className="py-14 md:py-10">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-6">
          <div className="sm:col-span-2 lg:col-span-2">
            <div className="text-2xl font-bold text-primary">{footer.brand}</div>
            <p className="mt-4 max-w-xs text-base text-[#434653]">
              {footer.description}
            </p>
          </div>
          {footer.columns.map((column) => (
            <div key={column.title}>
              <p className="text-sm font-bold uppercase tracking-wider text-primary">
                {column.title}
              </p>
              <ul className="mt-4 space-y-2.5">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-[#434653] transition-colors hover:text-primary"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col items-center justify-between gap-4 border-t-2 border-[#C3C6D5] py-6 md:flex-row">
        <p className="text-center text-sm text-[#434653] md:text-left">
          {footer.copyright}
        </p>
        <div className="flex gap-5">
          {footer.socialIcons.map((icon) => (
            <MaterialIcon
              key={icon}
              name={icon}
              className="cursor-pointer text-[#434653] transition-all hover:scale-110 hover:text-primary"
            />
          ))}
        </div>
      </div>
    </footer>
  );
}
