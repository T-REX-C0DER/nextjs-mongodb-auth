"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";

export default function Login() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const res = await fetch("/api/auth/login", {
      method: "POST",
      body: JSON.stringify(form),
    });

    const data = await res.text();
    alert(data);
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-slate-900">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-24 h-72 w-72 rounded-full bg-amber-400/25 blur-3xl" />
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-cyan-400/20 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-emerald-400/20 blur-3xl" />
      </div>

      <div className="relative mx-auto flex min-h-screen w-full max-w-6xl items-center px-6 py-16">
        <div className="grid w-full gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-stretch">
          <div className="hidden flex-col justify-between rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 p-10 text-white shadow-2xl lg:flex">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-300">
                Welcome Back
              </p>
              <h1 className="mt-4 text-4xl font-semibold leading-tight">
                Sign in to pick up right where you left off.
              </h1>
              <p className="mt-4 text-base leading-relaxed text-slate-300">
                Access your dashboard, manage your account, and continue building with a
                secure, streamlined login experience.
              </p>
            </div>

            <div className="space-y-4 rounded-2xl border border-white/10 bg-white/5 p-5 text-sm text-slate-200">
              <div>
                <p className="font-semibold text-white">Secure sessions</p>
                <p className="text-slate-300">
                  We keep you signed in safely with encrypted tokens.
                </p>
              </div>
              <div>
                <p className="font-semibold text-white">Fast access</p>
                <p className="text-slate-300">
                  Return in seconds with browser auto-fill and smart hints.
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center">
            <div className="w-full rounded-3xl border border-white/10 bg-white/95 p-8 shadow-2xl backdrop-blur">
              <div className="space-y-2">
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-500">
                  Sign In
                </p>
                <h2 className="text-3xl font-semibold text-slate-900">
                  Welcome back
                </h2>
                <p className="text-sm text-slate-500">
                  Enter your details to continue to your account.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    autoComplete="email"
                    placeholder="you@example.com"
                    required
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm text-slate-900 shadow-sm outline-none transition focus:border-slate-400 focus:ring-4 focus:ring-slate-200/60"
                  />
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="password"
                      className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500"
                    >
                      Password
                    </label>
                    <span className="text-xs text-slate-400">
                      Minimum 8 characters
                    </span>
                  </div>
                  <input
                    id="password"
                    type="password"
                    name="password"
                    autoComplete="current-password"
                    placeholder="••••••••"
                    required
                    onChange={(e) =>
                      setForm({ ...form, password: e.target.value })
                    }
                    className="h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm text-slate-900 shadow-sm outline-none transition focus:border-slate-400 focus:ring-4 focus:ring-slate-200/60"
                  />
                </div>

                <div className="flex items-center justify-between text-sm">
                  <label className="flex items-center gap-2 text-slate-500">
                    <input
                      type="checkbox"
                      className="h-4 w-4 rounded border-slate-300 text-slate-900 focus:ring-slate-300"
                    />
                    Remember me
                  </label>
                  <span className="text-xs text-slate-400">Need help?</span>
                </div>

                <button
                  type="submit"
                  className="group relative inline-flex h-12 w-full items-center justify-center overflow-hidden rounded-xl bg-slate-900 text-sm font-semibold text-white shadow-lg shadow-slate-900/20 transition hover:-translate-y-0.5 hover:bg-slate-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900"
                >
                  <span className="relative z-10">Log in</span>
                  <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-amber-400/20 via-white/10 to-cyan-400/20 transition group-hover:translate-x-0" />
                </button>
              </form>

              <p className="mt-6 text-center text-sm text-slate-500">
                New here?{" "}
                <Link
                  href="/signup"
                  className="font-semibold text-slate-900 underline-offset-4 hover:underline"
                >
                  Create an account
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
