"use client";
import { useRef, useMemo, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring, AnimatePresence, useMotionValueEvent } from "framer-motion";
import { UserRound, Users, Wallet } from "lucide-react";

// ─── Types ───────────────────────────────────────────────────────────────────

interface Step {
    id: number;
    label: string;
    title: string;
    desc: string;
    image: string;
}

// ─── Data ────────────────────────────────────────────────────────────────────

const STEPS: Step[] = [
    {
        id: 1,
        label: "Step one",
        title: "Vehicles",
        desc: "Manage your entire fleet with real-time vehicle tracking, maintenance schedules, utilization insights, and operational status from a centralized dashboard.",
        image:
            "https://images.unsplash.com/photo-1501700493788-fa1a4fc9fe62?w=500&h=500&fit=crop&crop=center",
    },
    {
        id: 2,
        label: "Step two",
        title: "Drivers",
        desc: "Monitor driver assignments, licenses, trip history, attendance, and performance to ensure safe and efficient transportation operations.",
        image:
            "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=500&h=500&fit=crop&crop=center",
    },
    {
        id: 3,
        label: "Step three",
        title: "Customers",
        desc: "Streamline customer management with shipment tracking, delivery updates, communication history, and service records in one place.",
        image:
            "https://images.unsplash.com/photo-1556740749-887f6717d7e4?w=500&h=500&fit=crop&crop=center",
    },
    {
        id: 4,
        label: "Step four",
        title: "Accounting",
        desc: "Simplify financial operations with automated invoicing, expense tracking, payment reconciliation, and comprehensive transport cost reports.",
        image:
            "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=500&h=500&fit=crop&crop=center",
    },
];

// ─── SVG helpers ─────────────────────────────────────────────────────────────

function polarToXY(cx: number, cy: number, r: number, deg: number) {
    const rad = ((deg - 90) * Math.PI) / 180;
    return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
}

// ─── Icons ───────────────────────────────────────────────────────────────────

const TruckIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="3" width="15" height="13" rx="1.5" />
        <path d="M16 8h4l3 4v5h-7V8z" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
    </svg>
);

const ClockIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
    </svg>
);

const PinIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
        <circle cx="12" cy="9" r="2.5" />
    </svg>
);

// ─── Orbit Diagram ────────────────────────────────────────────────────────────

const CX = 240;
const CY = 240;
const R = 195;

const NODES = [
    { id: "truck", deg: 270, step: 0 },
    { id: "pin", deg: 0, step: 1 },
    { id: "quotes", deg: 90, step: 2 },
    { id: "clock", deg: 180, step: 3 },
];

interface OrbitDiagramProps {
    progress: any;
    activeStep: number;
}

function OrbitDiagram({ progress, activeStep }: OrbitDiagramProps) {
    const pathD = useMemo(() => {
        const start = polarToXY(CX, CY, R, 271);
        const end = polarToXY(CX, CY, R, 270);
        return `M ${start.x} ${start.y} A ${R} ${R} 0 1 1 ${end.x} ${end.y}`;
    }, []);

    return (
        <div className="relative w-[480px] h-[480px] flex-shrink-0">
            <svg
                width="480"
                height="480"
                viewBox="0 0 480 480"
                className="absolute inset-0 overflow-visible"
            >
                <circle
                    cx={CX}
                    cy={CY}
                    r={R}
                    fill="none"
                    stroke="#e5e7eb"
                    strokeWidth="1.5"
                    strokeDasharray="5 5"
                />
                <motion.path
                    d={pathD}
                    fill="none"
                    stroke="#003b8f"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    style={{
                        pathLength: progress,
                        filter: "drop-shadow(0 0 2px rgba(220,38,38,0.3))"
                    }}
                />
            </svg>

            {NODES.map((node) => {
                const pos = polarToXY(CX, CY, R, node.deg);
                const isActive = activeStep >= node.step;
                const isCurrent = activeStep === node.step;

                return (
                    <motion.div
                        key={node.id}
                        initial={false}
                        animate={{
                            scale: isCurrent ? 1.12 : 1,
                            backgroundColor: isActive ? "#003b8f" : "#ffffff",
                            borderColor: isActive ? "#003b8f" : "#d1d5db",
                            // boxShadow: isCurrent
                            //     ? "0 10px 30px rgba(220,38,38,0.4)"
                            //     : "0 0px 0px rgba(0,0,0,0)",
                        }}
                        transition={{
                            type: "spring",
                            stiffness: 150,
                            damping: 20,
                            mass: 1
                        }}
                        className="absolute w-16 h-16 rounded-full flex items-center justify-center border-2 border-dashed z-10 transition-colors duration-400"
                        style={{
                            left: pos.x - 30,
                            top: pos.y - 30,
                        }}
                    >
                        <div className={`transition-colors duration-400 ${isActive ? "text-white" : "text-gray-400"}`}>
                            {node.id === "truck" && <TruckIcon />}
                            {node.id === "clock" && <Wallet />}
                            {node.id === "pin" && <UserRound />}
                            {node.id === "quotes" && <Users />}
                        </div>
                    </motion.div>
                );
            })}

            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] h-[220px] rounded-full overflow-hidden shadow-[0_8px_48px_rgba(0,0,0,0.15)] z-20 bg-gray-100">
                <AnimatePresence mode="wait">
                    <motion.img
                        key={activeStep}
                        src={STEPS[activeStep].image}
                        alt={STEPS[activeStep].title}
                        initial={{
                            scale: 1.15,
                        }}
                        animate={{
                            scale: 1.05,
                        }}
                        exit={{
                            scale: 1.3,
                        }}
                        transition={{
                            duration: 1.2,
                            ease: "easeOut",
                        }}
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                </AnimatePresence>
            </div>
        </div>
    );
}

// ─── Step Card ────────────────────────────────────────────────────────────────

interface StepCardProps {
    step: Step;
    opacity: any;
    y: any;
}

function StepCard({ step, opacity, y }: StepCardProps) {
    return (
        <motion.div
            style={{ opacity, y }}
            className="bg-primary/5 flex flex-col justify-center gap-2 rounded-xl p-6 pb-5 w-full relative overflow-hidden min-h-[180px] flex-shrink-0 shadow-md"
        >
            <p className="text-sm text-[#003b8f] font-normal uppercase">
                {step.label}
            </p>
            <p className="text-xl font-bold text-[#003b8f] ">
                {step.title}
            </p>
            <p className="text-base text-gray-600">
                {step.desc}
            </p>
        </motion.div>
    );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function MovingPlanSection() {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const card1Opacity = useTransform(smoothProgress, [0.02, 0.15], [0, 1]);
    const card1Y = useTransform(smoothProgress, [0.02, 0.15], [60, 0]);

    const card2Opacity = useTransform(smoothProgress, [0.22, 0.35], [0, 1]);
    const card2Y = useTransform(smoothProgress, [0.22, 0.35], [60, 0]);

    const card3Opacity = useTransform(smoothProgress, [0.47, 0.60], [0, 1]);
    const card3Y = useTransform(smoothProgress, [0.47, 0.60], [60, 0]);

    const card4Opacity = useTransform(smoothProgress, [0.72, 0.85], [0, 1]);
    const card4Y = useTransform(smoothProgress, [0.72, 0.85], [60, 0]);

    const activeStepIndex = useTransform(
        smoothProgress,
        [0, 0.25, 0.5, 0.75, 1],
        [0, 1, 2, 3, 4]
    );
    const truckX = useTransform(smoothProgress, [0, 1], ["-10%", "88%"]);

    const [activeIdx, setActiveIdx] = useState(0);

    useMotionValueEvent(smoothProgress, "change", (value) => {
        let step = 0;

        if (value >= 0.75) {
            step = 3;
        } else if (value >= 0.5) {
            step = 2;
        } else if (value >= 0.25) {
            step = 1;
        } else {
            step = 0;
        }

        setActiveIdx(step);
    });

    return (
        <div
            ref={containerRef}
            className="h-[500vh] relative px-0 lg:px-10 xl:px-0 lg:block hidden"
        >
            <div className="sticky top-0 h-screen w-full flex flex-col overflow-hidden">
                {/* Header */}
                <div className="text-center pt-11 pb-5 flex-shrink-0">
                    <div className="inline-flex items-center gap-1.5 mb-3">
                        <span className="text-[13px] text-gray-700 font-medium">Our work process</span>
                    </div>
                    <h2 className="text-[clamp(30px,4vw,50px)] font-extrabold text-gray-900 m-0 tracking-tight leading-[1.1]">
                        Everything Connected
                    </h2>
                </div>

                {/* Main layout */}
                <div className=" flex items-center justify-center gap-9 px-8 overflow-hidden">
                    {/* Left column */}
                    <div className="flex flex-col gap-7 w-1/4 flex-shrink-0 lg:relative lg:-right-10 xl:left-0">
                        <StepCard step={STEPS[0]} opacity={card1Opacity} y={card1Y} />
                        <StepCard step={STEPS[1]} opacity={card2Opacity} y={card2Y} />
                    </div>

                    {/* Center: orbit diagram */}
                    <OrbitDiagram progress={smoothProgress} activeStep={activeIdx} />

                    {/* Right column */}
                    <div className="flex flex-col gap-7 w-1/4 flex-shrink-0 lg:relative lg:-left-10 xl:left-0">
                        <StepCard step={STEPS[2]} opacity={card3Opacity} y={card3Y} />
                        <StepCard step={STEPS[3]} opacity={card4Opacity} y={card4Y} />
                    </div>
                </div>

                {/* Truck bar */}
                <div className="relative h-[100px] flex-shrink-0 overflow-hidden">
                    {/* Progress track background */}
                    <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gray-100" />

                    {/* Progress Fill */}
                    <motion.div
                        className="absolute bottom-0 left-0 h-[3px] bg-[#003b8f]"
                        style={{ width: truckX }}
                    />

                    <motion.div
                        className="absolute bottom-0 h-full"
                        style={{ left: truckX }}
                    >
                        <img
                            src="/truchHub.png"
                            alt="Truck"
                            className="h-30"
                        />
                    </motion.div>
                </div>
            </div>
        </div>
    );
}