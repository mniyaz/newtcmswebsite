import React from "react";
import {
  Shield,
  KeyRound,
  UserCheck,
  Lock,
  Server,
  Fingerprint,
  GitBranch,
  BadgeCheck,
} from "lucide-react";

const AuthenticationShowcase: React.FC = () => {
  return (
    <div className="">
      {/* HERO */}
      <section className="py-10">
        <div className="mx-auto text-center">

          <h1 className="text-3xl md:text-4xl font-bold mt-6 tracking-tight">
            Enterprise-Grade Authentication <br />& Access Control System
          </h1>

          <p className="mt-5 text-slate-600 max-w-2xl mx-auto text-base">
            Secure user authentication, token-based API protection, and
            role-based access control designed for scalable SaaS applications
            and enterprise systems.
          </p>
        </div>
      </section>

      {/* CORE FEATURES */}
      <section className="pb-10">
        <div className="mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-6 bg-white border border-slate-200 rounded-2xl hover:border-slate-300 transition shadow hover:shadow-lg">
            <KeyRound className="text-indigo-600" />
            <h3 className="font-semibold text-lg mt-4">JWT Authentication</h3>
            <p className="text-slate-600 text-sm mt-2">
              Secure token-based authentication system that eliminates session
              dependency and enables stateless API communication.
            </p>
          </div>

          <div className="p-6 bg-white border border-slate-200 rounded-2xl hover:border-slate-300 transition shadow hover:shadow-lg">
            <UserCheck className="text-indigo-600" />
            <h3 className="font-semibold text-lg mt-4">OAuth 2.0 Login</h3>
            <p className="text-slate-600 text-sm mt-2">
              Support for Google, GitHub, and external identity providers using
              secure authorization flow.
            </p>
          </div>

          <div className="p-6 bg-white border border-slate-200 rounded-2xl hover:border-slate-300 transition shadow hover:shadow-lg">
            <Server className="text-indigo-600" />
            <h3 className="font-semibold text-lg mt-4">API Protection Layer</h3>
            <p className="text-slate-600 text-sm mt-2">
              Middleware-based security that validates every request using
              tokens, permissions, and user roles.
            </p>
          </div>
        </div>
      </section>

      {/* AUTH SECURITY CAPABILITIES */}
      <section className="pb-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-10">
            Security Capabilities
          </h2>

          <div className="grid md:grid-cols-2 gap-5">
            {[
              {
                icon: Lock,
                title: "Encrypted Token Storage",
                desc: "JWT tokens are securely signed and validated using server-side secrets.",
              },
              {
                icon: Fingerprint,
                title: "Session Verification",
                desc: "Each request is verified using authentication middleware and identity checks.",
              },
              {
                icon: GitBranch,
                title: "Role-Based Access Control (RBAC)",
                desc: "Different access levels for Admin, User, and System roles.",
              },
              {
                icon: BadgeCheck,
                title: "Secure API Authorization",
                desc: "Endpoints are protected with permission-based authorization rules.",
              },
            ].map((item, i) => {
              const Icon = item.icon;

              return (
                <div
                  key={i}
                  className="flex gap-4 p-5 bg-white border border-slate-200 rounded-xl hover:border-slate-300 transition shadow hover:shadow-lg"
                >
                  <div className="p-2 bg-indigo-50 rounded-lg h-fit">
                    <Icon className="text-indigo-600" size={20} />
                  </div>

                  <div>
                    <h3 className="font-semibold">{item.title}</h3>
                    <p className="text-sm text-slate-600 mt-1">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* AUTH FLOW */}
      <section className="pb-10">
        <div className="mx-auto">
          <h2 className="text-2xl font-bold text-center mb-12">
            Authentication Lifecycle
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                step: "1",
                title: "User Login",
                desc: "User enters credentials securely",
                icon: UserCheck,
              },
              {
                step: "2",
                title: "Identity Verification",
                desc: "Server validates credentials",
                icon: Shield,
              },
              {
                step: "3",
                title: "Token Generation",
                desc: "JWT token issued after validation",
                icon: KeyRound,
              },
              {
                step: "4",
                title: "Protected Access",
                desc: "User accesses secured resources",
                icon: Lock,
              },
            ].map((item, i) => {
              const Icon = item.icon;

              return (
                <div
                  key={i}
                  className="relative p-6 bg-white border border-slate-200 rounded-xl text-center shadow hover:shadow-lg transition"
                >
                  <Icon className="mx-auto text-indigo-600" size={24} />

                  <div className="mt-3 font-semibold">
                    Step {item.step}: {item.title}
                  </div>

                  <p className="text-sm text-slate-600 mt-1">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AuthenticationShowcase;
