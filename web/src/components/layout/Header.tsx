"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import type { HomepageContent } from "@/lib/content/schema";
import { solutionNavLinks } from "@/lib/content/solutions";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { MaterialIcon } from "@/components/ui/MaterialIcon";
import { cn } from "@/lib/utils/cn";

interface HeaderProps {
  navigation: HomepageContent["navigation"];
}

export function Header({ navigation }: HeaderProps) {
  const pathname = usePathname();
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const isSolutionPage = pathname.startsWith("/solutions/");

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setSolutionsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-slate-200/80 bg-white/95 backdrop-blur-md">
      <Container className="flex h-[4.25rem] items-center justify-between md:h-[4.5rem]">
        <Link
          href="/"
          className="text-xl font-bold tracking-tight text-primary md:text-[1.35rem]"
        >
          {navigation.brand}
        </Link>
        <nav className="hidden items-center gap-6 lg:flex">
          <div className="relative" ref={dropdownRef}>
            <button
              type="button"
              onClick={() => setSolutionsOpen((open) => !open)}
              className={cn(
                "flex items-center gap-1 text-sm font-medium transition-colors",
                isSolutionPage
                  ? "border-b-2 border-primary pb-0.5 text-primary"
                  : "text-slate-600 hover:text-primary",
              )}
            >
              Solutions
              <MaterialIcon
                name="expand_more"
                className={cn(
                  "text-[18px] transition-transform",
                  solutionsOpen && "rotate-180",
                )}
              />
            </button>
            {solutionsOpen && (
              <div className="absolute left-0 top-full z-50 mt-2 w-72 rounded-2xl border border-slate-200 bg-white p-2 shadow-card-hover">
                {solutionNavLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setSolutionsOpen(false)}
                    className={cn(
                      "block rounded-xl px-4 py-3 transition-colors hover:bg-slate-50",
                      pathname === link.href && "bg-primary/5",
                    )}
                  >
                    <p className="text-sm font-semibold text-slate-900">{link.label}</p>
                    <p className="text-xs text-slate-500">{link.description}</p>
                  </Link>
                ))}
              </div>
            )}
          </div>
          {navigation.links
            .filter((link) => link.label !== "Solutions")
            .map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors",
                  link.isActive && !isSolutionPage
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
