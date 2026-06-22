"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import type { HomepageContent } from "@/lib/content/schema";
import { platformMenu } from "@/lib/content/solutions";
import { Button } from "@/components/ui/Button";
import { MaterialIcon } from "@/components/ui/MaterialIcon";
import { cn } from "@/lib/utils/cn";

interface HeaderProps {
  navigation: HomepageContent["navigation"];
}

export function Header({ navigation }: HeaderProps) {
  const pathname = usePathname();
  const [tcmsOpen, setTcmsOpen] = useState(false);
  const [mobileTcmsOpen, setMobileTcmsOpen] = useState(false);
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
    setMobileTcmsOpen(false);
  };

  return (
    <header className="fixed top-0 z-50 w-full border-b border-slate-200/80 bg-white/95 backdrop-blur-md">
      <div className="flex h-[4.25rem] items-center justify-between md:h-[4.5rem] px-6 lg:px-10 xl:px-0 container mx-auto">

        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-bold tracking-tight text-[#00327D]"
        >
          {navigation.brand}
        </Link>

        {/* Desktop Nav */}
        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 lg:flex">
          {navigation.links.map((link) => {
            if (link.label === "Platforms") {
              return (
                <div key={link.label} className="relative" ref={dropdownRef}>
                  <button
                    type="button"
                    onClick={() => setPlatformOpen((p) => !p)}
                    className={cn(
                      "relative flex items-center gap-1 text-sm font-medium transition-colors",
                      "after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:bg-[#00327D] after:transition-all after:duration-300",
                      isPlatformPage
                        ? "text-[#00327D] after:w-full"
                        : "text-[#434653] hover:text-[#00327D] after:w-0 hover:after:w-full"
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
                    <div className="absolute left-0 top-full z-50 mt-2 w-72 rounded-2xl border border-[#c3c6d5] bg-white p-2 shadow-card-hover">
                      {/* GPS */}
                      <Link
                        href="/platform/gps"
                        onClick={() => setPlatformOpen(false)}
                        className="block rounded-xl px-4 py-3 hover:bg-slate-200"
                      >
                        <p className="text-sm font-semibold">GPS</p>
                        <p className="text-xs text-slate-500">
                          Live vehicle tracking
                        </p>
                      </Link>

                      {/* TCMS Parent */}
                      <button
                        onClick={() => setTcmsOpen((prev) => !prev)}
                        className="flex w-full items-center justify-between rounded-xl px-4 py-3 hover:bg-slate-50"
                      >
                        <div className="text-left">
                          <p className="text-sm font-semibold">TCMS</p>
                          <p className="text-xs text-slate-500">
                            Transport Management Suite
                          </p>
                        </div>

                        <MaterialIcon
                          name="chevron_right"
                          className={cn(
                            "transition-transform",
                            tcmsOpen && "rotate-90"
                          )}
                        />
                      </button>

                      {/* TCMS Submenu */}
                      {tcmsOpen && (
                        <div className="ml-4 border-l border-[#c3c6d5] pl-3">
                          {platformMenu[1].children?.map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              onClick={() => {
                                setPlatformOpen(false);
                                setTcmsOpen(false);
                              }}
                              className="block rounded-lg px-3 py-2 hover:bg-slate-200"
                            >
                              <p className="text-sm font-medium">
                                {item.label}
                              </p>
                              <p className="text-xs text-slate-500">
                                {item.description}
                              </p>
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            }

            const isActive =
              pathname === link.href ||
              (link.href !== "/" && pathname.startsWith(link.href));

            return (
              <Link
                key={link.label}
                href={link.href}
                className={cn(
                  "relative text-sm font-medium transition-colors",
                  "after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:bg-[#00327D] after:transition-all after:duration-300",
                  isActive
                    ? "text-[#00327D] after:w-full"
                    : "text-[#434653] hover:text-[#00327D] after:w-0 hover:after:w-full"
                )}
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
            <Link href="/#demoBook">
              <Button size="sm" className="bg-[#00327D]  cursor-pointer">
                {navigation.cta.label}
              </Button>
            </Link>
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
            if (link.label === "Platforms") {
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
                    <div className="mt-3 space-y-2">

                      {/* GPS */}
                      <Link
                        href="/platform/gps"
                        onClick={closeMobile}
                        className="block rounded-lg px-3 py-2 text-sm text-slate-700 hover:bg-slate-100"
                      >
                        GPS
                      </Link>

                      {/* TCMS */}
                      <div>
                        <button
                          onClick={() => setMobileTcmsOpen((prev) => !prev)}
                          className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100"
                        >
                          TCMS

                          <MaterialIcon
                            name="expand_more"
                            className={cn(
                              "transition-transform",
                              mobileTcmsOpen && "rotate-180"
                            )}
                          />
                        </button>

                        {mobileTcmsOpen && (
                          <div className="ml-4 mt-2 border-l border-slate-200 pl-3 space-y-2">
                            {platformMenu[1].children?.map((item) => (
                              <Link
                                key={item.href}
                                href={item.href}
                                onClick={closeMobile}
                                className="block rounded-lg px-3 py-2 text-sm text-slate-600 hover:bg-slate-100"
                              >
                                {item.label}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
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