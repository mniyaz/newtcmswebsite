"use client";

import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

import type { HomepageContent } from "@/lib/content/schema";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { MaterialIcon } from "@/components/ui/MaterialIcon";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

interface EcosystemSectionProps {
  ecosystem: HomepageContent["ecosystem"];
}

export function EcosystemSection({
  ecosystem,
}: EcosystemSectionProps) {
  const [vehicles, drivers, customers, accounting] =
    ecosystem.nodes;

  const hubControls = useAnimation();
  const cardsControls = useAnimation();

  useEffect(() => {
    const runAnimation = async () => {
      while (true) {
        // Phase 1
        await cardsControls.start({
          x: 0,
          y: 0,
          scale: 0.8,
          opacity: 0,
          transition: {
            duration: 0,
          },
        });

        // Phase 2 - Expand
        await cardsControls.start((custom: any) => ({
          x: custom.x,
          y: custom.y,
          scale: 1,
          opacity: 1,
          transition: {
            duration: 1,
            type: "spring",
            stiffness: 90,
            damping: 15,
          },
        }));

        // Phase 3 - Pause
        await new Promise((resolve) =>
          setTimeout(resolve, 1000)
        );

        // Phase 4 - Collapse
        await cardsControls.start({
          x: 0,
          y: 0,
          scale: 0.85,
          opacity: 0,
          transition: {
            duration: 1,
            ease: "easeInOut",
          },
        });

        // Phase 5 - Hub Rotation
        await hubControls.start({
          rotate: 360,
          scale: [1, 1.05, 1],
          transition: {
            duration: 1.2,
            ease: "easeInOut",
          },
        });

        await hubControls.set({
          rotate: 0,
        });
      }
    };

    runAnimation();
  }, [hubControls, cardsControls]);

  const cards = [
    {
      data: customers,
      x: 0,
      y: -220,
      position: "top",
    },
    {
      data: drivers,
      x: 290,
      y: 0,
      position: "right",
    },
    {
      data: accounting,
      x: 0,
      y: 220,
      position: "bottom",
    },
    {
      data: vehicles,
      x: -290,
      y: 0,
      position: "left",
    },
  ];

  return (
    <div className="py-8 md:py-16 bg-[#F8F9FA] px-5">
      <SectionHeader
        title={ecosystem.title}
        subtitle={ecosystem.subtitle}
      />

      {/* Mobile */}
      <div className="grid grid-cols-2 gap-4 lg:hidden">
        {[vehicles, drivers, customers, accounting].map(
          (item, index) =>
            item && (
              <div
                key={index}
                className="rounded-2xl border border-gray-200 bg-white p-4 shadow-lg"
              >
                <div className="flex flex-col items-center text-center">
                  <MaterialIcon
                    name={item.icon}
                    className="text-3xl text-primary mb-2"
                  />
                  <span className="font-semibold">
                    {item.label}
                  </span>
                </div>
              </div>
            )
        )}
      </div>

      {/* Desktop */}
      <RevealOnScroll>
        <div className="relative hidden lg:flex items-center justify-center h-[600px] overflow-hidden">
          {/* Glow Layer */}
          <motion.div
            animate={{
              scale: [1, 1.08, 1],
              opacity: [0.4, 0.8, 0.4],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute w-[340px] h-[340px] rounded-full bg-blue-500/20 blur-3xl"
          />

          {/* Animated Cards */}
          {cards.map(
            (card, index) =>
              card.data && (
                <motion.div
                  key={index}
                  custom={{
                    x: card.x,
                    y: card.y,
                  }}
                  initial={{
                    x: 0,
                    y: 0,
                    scale: 0.8,
                    opacity: 0,
                  }}
                  animate={cardsControls}
                  className="absolute z-20"
                >
                  <div className="w-[220px] rounded-3xl border border-white/60 bg-white/80 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.08)] px-6 py-5">
                    <div className="flex flex-col items-center text-center">
                      <MaterialIcon
                        name={card.data.icon}
                        className="text-4xl text-primary mb-3"
                      />

                      <p className="font-semibold text-lg text-gray-900">
                        {card.data.label}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )
          )}

          {/* Hub */}
          <motion.div
            animate={hubControls}
            className="relative z-30 w-[220px] h-[220px]"
          >
            <div className="absolute inset-0 rounded-[40px] bg-gradient-to-br from-blue-500 via-blue-600 to-[#00327D] shadow-[0_30px_80px_rgba(0,50,125,0.45)]" />

            <div className="absolute inset-[2px] rounded-[38px] border border-white/20 bg-gradient-to-br from-blue-500 to-[#00327D]" />

            <div className="relative h-full flex flex-col items-center justify-center text-center text-white">
              <h3 className="text-4xl font-bold">
                {ecosystem.hubLabel}
              </h3>

              <p className="mt-5 text-sm font-semibold uppercase text-blue-100">
                {ecosystem.hubSublabel}
              </p>
            </div>
          </motion.div>
        </div>
      </RevealOnScroll>
    </div>
  );
}