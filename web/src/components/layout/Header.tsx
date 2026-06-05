import type { HomepageContent } from "@/lib/content/schema";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils/cn";

interface HeaderProps {
  navigation: HomepageContent["navigation"];
}

export function Header({ navigation }: HeaderProps) {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-slate-200/80 bg-white/95 backdrop-blur-md">
      <Container className="flex h-[4.25rem] items-center justify-between md:h-[4.5rem]">
        <div className="text-xl font-bold tracking-tight text-primary md:text-[1.35rem]">
          {navigation.brand}
        </div>
        <nav className="hidden items-center gap-8 lg:flex">
          {navigation.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors",
                link.isActive
                  ? "border-b-2 border-primary pb-0.5 text-primary"
                  : "text-slate-600 hover:text-primary",
              )}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3 md:gap-4">
          <button
            type="button"
            className="hidden text-sm font-semibold text-primary transition-colors hover:text-primary-dark md:block"
          >
            {navigation.loginLabel}
          </button>
          <Button size="sm" className="uppercase tracking-wide">
            {navigation.cta.label}
          </Button>
        </div>
      </Container>
    </header>
  );
}
