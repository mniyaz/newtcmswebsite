"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export function CmsLoginForm() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    setIsLoading(true);
    setError("");

    const response = await fetch("/api/auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });

    if (!response.ok) {
      setError("Invalid password. Check CMS_ADMIN_PASSWORD in your environment.");
      setIsLoading(false);
      return;
    }

    router.refresh();
    setIsLoading(false);
  }

  return (
    <div className="mx-auto flex min-h-screen max-w-md items-center px-6">
      <form
        onSubmit={handleSubmit}
        className="w-full rounded-2xl border border-outline-variant bg-white p-8 shadow-xl"
      >
        <p className="mb-2 font-label-md uppercase text-primary">TCMS CMS</p>
        <h1 className="mb-6 font-headline-md text-headline-md">Admin Sign In</h1>
        <label className="mb-2 block font-label-md uppercase text-on-surface-variant">
          Password
        </label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mb-4 w-full rounded-lg border border-outline-variant p-3 outline-none focus:ring-2 focus:ring-primary"
          placeholder="Enter admin password"
          required
        />
        {error && <p className="mb-4 text-sm text-error">{error}</p>}
        <button
          type="submit"
          disabled={isLoading}
          className="w-full rounded-lg bg-primary py-3 font-semibold text-on-primary transition-opacity disabled:opacity-60"
        >
          {isLoading ? "Signing in..." : "Sign In"}
        </button>
      </form>
    </div>
  );
}
