import type { HomepageContent } from "@/lib/content/schema";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { MaterialIcon } from "@/components/ui/MaterialIcon";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

interface EcosystemSectionProps {
  ecosystem: HomepageContent["ecosystem"];
}

export function EcosystemSection({ ecosystem }: EcosystemSectionProps) {
  const [vehicles, drivers, customers, accounting] = ecosystem.nodes;

  return (
    <div className="md:py-10 py-5 px-5 md:px-10 lg:px-0 !bg-[#F8F9FA]">
      <SectionHeader title={ecosystem.title} subtitle={ecosystem.subtitle} />
      {/* Mobile & Tablet */}
      <div className="grid grid-cols-2 gap-4 md:gap-6 lg:hidden">
        {[vehicles, drivers, customers, accounting].map(
          (item, index) =>
            item && (
              <RevealOnScroll key={index}>
                <div className="flex flex-col items-center justify-center rounded-lg border border-gray-200 bg-white px-3 py-3 shadow-lg text-center">
                  <MaterialIcon
                    name={item.icon}
                    className="text-3xl text-primary mb-2"
                  />
                  <p className="text-base font-semibold text-gray-900">
                    {item.label}
                  </p>
                </div>
              </RevealOnScroll>
            )
        )}
      </div>

      {/* Desktop */}
      <div className="relative mx-auto hidden max-w-7xl items-center justify-between lg:flex">
        {/* Vehicles */}
        {vehicles && (
          <RevealOnScroll>
            <div className="flex px-10 py-4 flex-col items-center justify-center bg-white border border-gray-200 rounded-2xl shadow-lg">
              <MaterialIcon
                name={vehicles.icon}
                className="text-3xl text-primary"
              />
              <p className="font-semibold text-gray-900 text-lg">
                {vehicles.label}
              </p>
            </div>
          </RevealOnScroll>
        )}

        {/* Center Hub */}
        <RevealOnScroll>
          <div className="relative w-70 h-70">
            {/* Customers */}
            {customers && (
              <div className="absolute left-1/2 top-2 -translate-x-1/2 flex px-10 py-4 flex-col items-center justify-center bg-white border border-gray-200 rounded-2xl shadow-lg">
                <MaterialIcon
                  name={customers.icon}
                  className="text-3xl text-primary-dark"
                />
                <p className="font-semibold text-gray-900 text-lg">
                  {customers.label}
                </p>
              </div>
            )}

            {/* Hub */}
            <div className="absolute z-40 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-full w-full text-center text-white rounded-2xl bg-[#00327D] border-4 border-blue-200 shadow-2xl flex flex-col items-center justify-center animate-pulse">
              <h3 className="text-5xl font-bold">
                {ecosystem.hubLabel}
              </h3>

              <p className="mt-4 text-lg font-semibold uppercase tracking-[0.3em]">
                {ecosystem.hubSublabel}
              </p>
            </div>

            {/* Accounting */}
            {accounting && (
              <div className="absolute left-1/2 bottom-2 -translate-x-1/2 flex px-10 py-4 flex-col items-center justify-center bg-white border border-gray-200 rounded-2xl shadow-lg">
                <MaterialIcon
                  name={accounting.icon}
                  className="text-3xl text-primary-dark"
                />
                <p className="font-semibold text-gray-900 text-lg">
                  {accounting.label}
                </p>
              </div>
            )}
          </div>
        </RevealOnScroll>

        {/* Drivers */}
        {drivers && (
          <RevealOnScroll>
            <div className="flex px-10 py-4 flex-col items-center justify-center bg-white border border-gray-200 rounded-2xl shadow-lg">
              <MaterialIcon
                name={drivers.icon}
                className="text-3xl text-primary"
              />
              <p className="font-semibold text-gray-900 text-lg">
                {drivers.label}
              </p>
            </div>
          </RevealOnScroll>
        )}
      </div>
    </div>
  );
}
