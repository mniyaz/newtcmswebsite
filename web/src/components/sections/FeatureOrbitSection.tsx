"use client";

import { useEffect, useState } from "react";
import { MaterialIcon } from "@/components/ui/MaterialIcon";

const orbitFeatures = [
  {
    id: 1,
    title: "Live Tracking",
    description:
      "Track vehicles in real-time with precise location updates and route visibility.",
    icon: "location_on",
  },
  {
    id: 2,
    title: "Driver Management",
    description:
      "Monitor driver performance, attendance and trip efficiency from one dashboard.",
    icon: "badge",
  },
  {
    id: 3,
    title: "Customer Updates",
    description:
      "Automatically notify customers with shipment and delivery progress.",
    icon: "forum",
  },
  {
    id: 4,
    title: "Analytics & Reports",
    description:
      "Gain actionable insights through detailed reports and operational analytics.",
    icon: "analytics",
  },
];

const positions = ["top", "right", "bottom", "left"];

export function FeatureOrbitSection() {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prev) => (prev + 1) % 4);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const getPosition = (index: number) => {
    return positions[(index - rotation + 4) % 4];
  };

  const positionClasses: Record<string, string> = {
    top: `
      left-[340px]
      top-0
      -translate-x-1/2
    `,
    right: `
      left-[650px]
      top-1/2
      -translate-y-1/2
    `,
    bottom: `
      left-[340px]
      bottom-0
      -translate-x-1/2
    `,
    left: `
      left-[30px]
      top-1/2
      -translate-y-1/2
    `,
  };

  return (
    <section className="overflow-hidden bg-[#F8F9FA] py-20">
      <div className="mx-auto container">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold text-gray-900">
            Connected Operations Ecosystem
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-lg text-gray-600">
            Everything works together through a centralized platform,
            connecting drivers, customers, tracking, and analytics.
          </p>
        </div>

        <div className="relative mx-auto h-[650px] w-full">
          {/* Outer Orbit Ring */}
          <div
            className="
              absolute
              left-[320px]
              top-1/2
              h-[520px]
              w-[520px]
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              border
              border-blue-100
            "
          />

          {/* Dashed Orbit Ring */}
          <div
            className="
              absolute
              left-[320px]
              top-1/2
              h-[420px]
              w-[420px]
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              border-2
              border-dashed
              border-blue-200
            "
          />

          {/* Center Hub */}
          <div
            className="
              absolute
              left-[320px]
              top-1/2
              z-30
              h-72
              w-72
              -translate-x-1/2
              -translate-y-1/2
            "
          >
            <div
              className="
                flex
                h-full
                w-full
                flex-col
                items-center
                justify-center
                rounded-3xl
                border-[6px]
                border-blue-200
                bg-[#00327D]
                text-white
                shadow-2xl
              "
            >
              <h3 className="text-5xl font-bold">RTS</h3>

              <p className="mt-4 font-medium uppercase tracking-[0.4em]">
                PLATFORM
              </p>
            </div>
          </div>

          {/* Orbit Cards */}
          {orbitFeatures.map((item, index) => {
            const position = getPosition(index);

            return (
              <div
                key={item.id}
                className={`
                  absolute
                  z-20
                  transition-all
                  duration-1000
                  ease-in-out
                  ${positionClasses[position]}
                `}
              >
                <div
                  className="
                    w-[280px]
                    rounded-3xl
                    border
                    border-gray-200
                    bg-white
                    p-6
                    shadow-xl
                    transition-all
                    duration-1000
                  "
                >
                  <div className="flex items-start gap-4">
                    <div
                      className="
                        flex
                        h-14
                        w-14
                        shrink-0
                        items-center
                        justify-center
                        rounded-2xl
                        bg-blue-50
                      "
                    >
                      <MaterialIcon
                        name={item.icon}
                        className="text-3xl text-primary"
                      />
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-gray-900">
                        {item.title}
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}