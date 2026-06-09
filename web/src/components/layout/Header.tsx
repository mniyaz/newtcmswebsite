"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import type { HomepageContent } from "@/lib/content/schema";
import { platformNavLinks } from "@/lib/content/solutions";
import { Button } from "@/components/ui/Button";
import { MaterialIcon } from "@/components/ui/MaterialIcon";
import { cn } from "@/lib/utils/cn";

interface HeaderProps {
  navigation: HomepageContent["navigation"];
}

export function Header({ navigation }: HeaderProps) {
  const pathname = usePathname();

  const [platformOpen, setPlatformOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobilePlatformOpen, setMobilePlatformOpen] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  const isPlatformPage = pathname.startsWith("/platform/");

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setPlatformOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const closeMobile = () => {
    setMobileOpen(false);
    setMobilePlatformOpen(false);
  };

  return (
    <header className="fixed top-0 z-50 w-full border-b border-slate-200/80 bg-white/95 backdrop-blur-md">
      <div className="flex h-[4.25rem] items-center justify-between md:h-[4.5rem] px-6 md:px-10">

        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-bold tracking-tight text-[#00327D]"
        >
          {navigation.brand}
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-6 lg:flex">
          {navigation.links.map((link) => {
            if (link.label === "Platform") {
              return (
                <div key={link.label} className="relative" ref={dropdownRef}>
                  <button
                    type="button"
                    onClick={() => setPlatformOpen((p) => !p)}
                    className={cn(
                      "flex items-center gap-1 text-sm font-medium",
                      isPlatformPage
                        ? "text-[#00327D]"
                        : "text-[#434653] hover:text-[#00327D]"
                    )}
                  >
                    Platforms
                    <MaterialIcon
                      name="expand_more"
                      className={cn(
                        "text-[18px] transition-transform",
                        platformOpen && "rotate-180"
                      )}
                    />
                  </button>

                  {platformOpen && (
                    <div className="absolute left-0 top-full z-50 mt-2 w-72 rounded-2xl border bg-white p-2 shadow-card-hover">
                      {platformNavLinks.map((p) => (
                        <Link
                          key={p.href}
                          href={p.href}
                          onClick={() => setPlatformOpen(false)}
                          className="block rounded-xl px-4 py-3 hover:bg-slate-50"
                        >
                          <p className="text-sm font-semibold">{p.label}</p>
                          <p className="text-xs text-slate-500">
                            {p.description}
                          </p>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm text-[#434653] hover:text-[#00327D]"
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          <button className="hidden lg:block text-sm font-semibold text-[#00327D]">
            {navigation.loginLabel}
          </button>
          <div className="hidden lg:block">
          <Button size="sm" className="bg-[#00327D] ">
            {navigation.cta.label}
          </Button>
          </div>

          {/* Hamburger */}
          <button
            className="lg:hidden text-[#00327D]"
            onClick={() => setMobileOpen((p) => !p)}
          >
            <MaterialIcon name={mobileOpen ? "close" : "menu"} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t bg-white px-6 py-4 space-y-4">
          {navigation.links.map((link) => {
            if (link.label === "Platform") {
              return (
                <div key={link.label}>
                  <button
                    onClick={() =>
                      setMobilePlatformOpen((p) => !p)
                    }
                    className="flex w-full items-center justify-between text-sm font-medium text-[#00327D]"
                  >
                    Platforms
                    <MaterialIcon
                      name="expand_more"
                      className={cn(
                        "transition-transform",
                        mobilePlatformOpen && "rotate-180"
                      )}
                    />
                  </button>

                  {mobilePlatformOpen && (
                    <div className="mt-2 pl-3 space-y-2">
                      {platformNavLinks.map((p) => (
                        <Link
                          key={p.href}
                          href={p.href}
                          onClick={closeMobile}
                          className="block text-sm text-slate-600"
                        >
                          {p.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link
                key={link.label}
                href={link.href}
                onClick={closeMobile}
                className="block text-sm text-slate-700"
              >
                {link.label}
              </Link>
            );
          })}

          <div className="pt-3 border-t space-y-2">
            <button className="text-sm text-[#00327D]">
              {navigation.loginLabel}
            </button>
            <Button className="w-full bg-[#00327D]">
              {navigation.cta.label}
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}