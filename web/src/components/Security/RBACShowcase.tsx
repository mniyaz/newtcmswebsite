import React from "react";
import {
  ShieldCheck,
  Lock,
  Users,
  KeyRound,
  BadgeCheck,
  Fingerprint,
  Settings,
  Database,
  Eye,
  GitBranch,
  Activity,
  AlertTriangle,
  Layers,
  FileCheck,
  UserCheck,
} from "lucide-react";

const RBACShowcase: React.FC = () => {
  const roles = [
    {
      role: "Admin",
      icon: ShieldCheck,
      color: "text-red-600",
      access: ["Full System Access", "User Management", "Settings Control"],
    },
    {
      role: "Manager",
      icon: Users,
      color: "text-blue-600",
      access: ["Team Data", "Reports Access", "Limited Settings"],
    },
    {
      role: "Employee",
      icon: UserCheck,
      color: "text-green-600",
      access: ["Dashboard", "Assigned Tasks", "Profile Only"],
    },
  ];

  const features = [
    {
      icon: KeyRound,
      title: "Permission Engine",
      desc: "Controls access using structured permission rules.",
    },
    {
      icon: Lock,
      title: "Secure Authorization",
      desc: "Blocks unauthorized access to sensitive modules.",
    },
    {
      icon: Layers,
      title: "Role Hierarchy",
      desc: "Supports nested roles and multi-level access control.",
    },
    {
      icon: Database,
      title: "Data Protection",
      desc: "Secures database-level and API-level access.",
    },
    {
      icon: FileCheck,
      title: "Policy Enforcement",
      desc: "Automatically applies security policies system-wide.",
    },
    {
      icon: Eye,
      title: "Dynamic UI Control",
      desc: "UI adapts based on user roles and permissions.",
    },
    {
      icon: Activity,
      title: "Real-Time Validation",
      desc: "Checks permissions on every request/action.",
    },
    {
      icon: AlertTriangle,
      title: "Access Blocking",
      desc: "Stops unauthorized actions before execution.",
    },
    {
      icon: BadgeCheck,
      title: "Verified Roles",
      desc: "Ensures only validated roles can access systems.",
    },
  ];

  return (
    <div className="">
      {/* HERO SECTION */}
      <div className="mx-auto py-10 grid lg:grid-cols-2 gap-12 items-center">
        {/* LEFT CONTENT */}
        <div>

          <h1 className="text-4xl font-bold text-slate-800 leading-tight">
            Role-Based Access Control (RBAC)
          </h1>

          <p className="mt-4 text-slate-600">
            RBAC ensures that users only access what they are authorized to use.
            It improves security, scalability, and simplifies permission
            management in modern enterprise systems.
          </p>

          {/* BADGES */}
          <div className="flex flex-wrap gap-2 mt-6">
            <span className="flex items-center gap-1 text-sm bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-semibold">
              Secure Access
            </span>
            <span className="flex items-center gap-1 text-sm bg-green-100 text-green-700 px-3 py-1 rounded-full font-semibold">
              Role Based
            </span>
            <span className="flex items-center gap-1 text-sm bg-purple-100 text-purple-700 px-3 py-1 rounded-full font-semibold">
               Permission Engine
            </span>
            <span className="flex items-center gap-1 text-sm bg-slate-200 text-slate-700 px-3 py-1 rounded-full font-semibold">
              Verified Access
            </span>
          </div>
        </div>

        {/* RIGHT LOGIN IMAGE */}
        <div className="relative">

          <div className="relative bg-white border border-slate-200 rounded-2xl shadow-xl overflow-hidden">
            {/* LOGIN PAGE IMAGE */}
            <img
              src="/webpImages/login.webp"
              alt="Login UI Preview"
              className="w-auto h-[40vh] mx-auto"
            />
          </div>
        </div>
      </div>

      {/* ROLE CARDS */}
      <div className="mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-5">
        {roles.map((r, i) => {
          const Icon = r.icon;
          return (
            <div
              key={i}
              className="bg-white border border-slate-300 rounded-2xl p-6 shadow hover:shadow-lg transition"
            >
              <div className="flex items-center gap-3 mb-4">
                <Icon className={r.color} />
                <h2 className="text-xl font-semibold text-slate-800">
                  {r.role}
                </h2>
              </div>

              <div className="flex flex-wrap gap-2">
                {r.access.map((a, idx) => (
                  <span
                    key={idx}
                    className="text-xs bg-slate-200 px-3 py-1 rounded-full"
                  >
                    {a}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* FEATURES */}
      <div className=" mx-auto mt-10">
        <h2 className="text-2xl font-bold text-center text-slate-800 mb-10">
          RBAC Security Features
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <div
                key={i}
                className="bg-white border border-slate-300 rounded-2xl p-6 hover:border-blue-300 shadow hover:shadow-md transition"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-blue-50 text-blue-600 rounded-xl">
                    <Icon size={18} />
                  </div>
                  <h3 className="font-semibold text-slate-800">{f.title}</h3>
                </div>
                <p className="text-sm text-slate-600">{f.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default RBACShowcase;
