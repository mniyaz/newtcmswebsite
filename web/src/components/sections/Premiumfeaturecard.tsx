'use client'
import { useEffect, useState } from "react";
import { motion, useAnimationControls } from "framer-motion";
import {
  Truck,
  UserRound,
  Users,
  Wallet,
} from "lucide-react";


interface FeatureCardDef {
    icon: React.ReactNode;
    label: string;
    sub: string;
    cardCn: string;
    shadowColor: string;
    rotate: number;
    zIndex: number;
    left: number;
    top: number;
}

const CARDS: FeatureCardDef[] = [
  {
    icon: <Truck size={18} strokeWidth={2.3} />,
    label: "Vehicles",
    sub: "Ship in seconds",
    cardCn: "#003b8f",
    shadowColor: "rgba(245,158,11,0.45)",
    rotate: -10,
    zIndex: 11,
    left: -180,
    top: 18,
  },
  {
    icon: <UserRound size={18} strokeWidth={2.3} />,
    label: "Drivers",
    sub: "End-to-end encrypted",
    cardCn: "#00d492",
    shadowColor: "rgba(5,150,105,0.5)",
    rotate: -3,
    zIndex: 14,
    left: 0,
    top: -4,
  },
  {
    icon: <Users size={18} strokeWidth={2.3} />,
    label: "Customers",
    sub: "Real-time insights",
    cardCn: "#006e25",
    shadowColor: "rgba(59,130,246,0.45)",
    rotate: 3,
    zIndex: 13,
    left: 180,
    top: -4,
  },
  {
    icon: <Wallet size={18} strokeWidth={2.3} />,
    label: "Accounting",
    sub: "Composable layers",
    cardCn: "#0047ab",
    shadowColor: "rgba(124,58,237,0.45)",
    rotate: 10,
    zIndex: 11,
    left: 350,
    top: 18,
  },
];

export default function PremiumFeatureCard() {
    const whiteCardControls = useAnimationControls();
    const cardControls = [
        useAnimationControls(),
        useAnimationControls(),
        useAnimationControls(),
        useAnimationControls(),
    ];
    const floatControls = [
        useAnimationControls(),
        useAnimationControls(),
        useAnimationControls(),
        useAnimationControls(),
    ];
    const titleControls = useAnimationControls();
    const subtitleControls = useAnimationControls();

    useEffect(() => {
        let cancelled = false;
        const sleep = (ms: number) => new Promise<void>((r) => setTimeout(r, ms));

        const runFloat = (
            ctrl: ReturnType<typeof useAnimationControls>,
            baseRotate: number,
            delay: number
        ) => {
            ctrl.start({
                y: [0, -4, 4, -4, 0],
                rotate: [baseRotate, baseRotate - 1.2, baseRotate + 1.2, baseRotate - 1.2, baseRotate],
                transition: {
                    duration: 3.2,
                    delay,
                    repeat: Infinity,
                    repeatType: "loop",
                    ease: [0.45, 0.05, 0.55, 0.95],
                },
            });
        };

        const stopFloat = (
            ctrl: ReturnType<typeof useAnimationControls>,
            baseRotate: number
        ) => ctrl.start({ y: 0, rotate: baseRotate, transition: { duration: 0.3 } });

        const animate = async () => {
            if (cancelled) return;


            floatControls.forEach((c) => c.stop());
            await whiteCardControls.set({ opacity: 0, scale: 0.92 });
            await titleControls.set({ opacity: 0, y: 12 });
            await subtitleControls.set({ opacity: 0, y: 10 });
            for (let i = 0; i < CARDS.length; i++) {
                await cardControls[i].set({ opacity: 0, y: 44, scale: 0.88, rotate: CARDS[i].rotate });
                await floatControls[i].set({ y: 0, rotate: 0 });
            }

            if (cancelled) return;

            // Phase 1 — white card
            await whiteCardControls.start({
                opacity: 1,
                scale: 1,
                transition: { type: "spring", stiffness: 260, damping: 22 },
            });

            if (cancelled) return;
            await sleep(80);

            // Phase 2 — staggered card rise
            for (let i = 0; i < CARDS.length; i++) {
                cardControls[i].start({
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    rotate: CARDS[i].rotate,
                    transition: { type: "spring", stiffness: 230, damping: 20 },
                });
                await sleep(120);
                if (cancelled) return;
            }

            await sleep(260);
            if (cancelled) return;

            // Phase 3 — draw path
            await sleep(1200);
            if (cancelled) return;

            // Phase 4 — text fade in
            titleControls.start({ opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } });
            await sleep(150);
            if (cancelled) return;
            await subtitleControls.start({ opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } });

            if (cancelled) return;
            await sleep(500);

            // Phase 5 — float loop
            CARDS.forEach((card, i) => runFloat(floatControls[i], card.rotate, i * 0.35));

            await sleep(3600);
            if (cancelled) return;

            await Promise.all(CARDS.map((card, i) => stopFloat(floatControls[i], card.rotate)));
            if (cancelled) return;

            await Promise.all([
                whiteCardControls.start({ opacity: 0, scale: 0.94, transition: { duration: 0.4 } }),
                ...cardControls.map((c) => c.start({ opacity: 0, y: 22, transition: { duration: 0.3 } })),
                titleControls.start({ opacity: 0, transition: { duration: 0.25 } }),
                subtitleControls.start({ opacity: 0, transition: { duration: 0.25 } }),
            ]);

            if (cancelled) return;
            await sleep(280);
            if (!cancelled) animate();
        };

        animate();
        return () => { cancelled = true; };
    }, []);

    return (
        <div className=" lg:flex items-center justify-center pt-20 hidden">
            <motion.div
                animate={whiteCardControls}
                initial={{ opacity: 0, scale: 0.92 }}
                className="relative bg-white rounded-xl xl:w-1/2 w-3/4 px-7 pb-8 pt-28 flex flex-col items-center gap-3 shadow-2xl shadow-slate-300/50 ring-1 ring-black/[0.04]"
                style={{ willChange: "transform, opacity" }}
            >
                {/* ── Card cluster ── */}
                {/*
          Cluster is 304px wide, centred over the white card (320px wide).
          We offset left by 50% of white card then shift back 152px (half of 304).
        */}
                <div
                    className="absolute pointer-events-none w-[500px] h-[104px] -top-14 left-1/2 -translate-x-[152px]"
                >
                    {CARDS.map((card, i) => (
                        <motion.div
                            key={i}
                            animate={cardControls[i]}
                            initial={{ opacity: 0, y: 44, scale: 0.88 }}
                            className="absolute"
                            style={{
                                left: card.left,
                                top: card.top,
                                zIndex: card.zIndex,
                                rotate: card.rotate,
                                willChange: "transform, opacity",
                            }}
                        >
                            <motion.div
                                animate={floatControls[i]}
                                style={{ willChange: "transform" }}
                            >
                                {/* Feature card */}
<div
  className="w-35 rounded-lg flex flex-col justify-center gap-4 items-center py-4 shadow-2xl"
  style={{
    backgroundColor: card.cardCn,
  }}
>
                                    {/* Icon badge */}
                                    <div className="w-[30px] h-[30px] rounded-[9px] bg-white/30 flex items-center justify-center text-white">
                                        {card.icon}
                                    </div>
                                    {/* Text */}
                                    <div className="flex flex-col gap-0.5">
                                        <span className="text-white font-semibold text-lg">
                                            {card.label}
                                        </span>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>

                {/* Divider */}
                <div className="w-full h-px bg-slate-100 mb-1" />
                <div className="flex flex-col py-5 gap-3">
                    {/* Title */}
                    <motion.h2
                        animate={titleControls}
                        initial={{ opacity: 0, y: 12 }}
                        className="text-4xl font-bold text-center"
                        style={{ willChange: "transform, opacity" }}
                    >
                        TCMS.ai
                    </motion.h2>

                    {/* Subtitle */}
                    <motion.p
                        animate={subtitleControls}
                        initial={{ opacity: 0, y: 10 }}
                        className="text-slate-600 text-sm text-center"
                        style={{ willChange: "transform, opacity" }}
                    >
                        CORE HUB
                    </motion.p>
                </div>
            </motion.div>
        </div>
    );
}