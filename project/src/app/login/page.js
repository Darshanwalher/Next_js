"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Mail, Lock, Eye, EyeOff, ArrowRight, Sparkles } from "lucide-react";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { api } from "@/lib/api";


export default function LoginPage() {



  const [formData, setFormData] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();


  

  const handleChange = (e) => {
    setFormData({
        ...formData,
        [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await api.post('/api/auth/login', formData);
      console.log(res);
      alert("Successfully logged in!");
      router.push('/home');
    } catch (err) {
      console.log("error in login", err);
      setError(err?.response?.data?.message || "Login failed. Please check your credentials.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-[80vh] items-center justify-center py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">

      {/* Background decoration grid */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20"></div>

      <div className="w-full max-w-md space-y-8 bg-card border border-border p-8 sm:p-10 rounded-3xl shadow-xl transition-all duration-300">

        {/* Header */}
        <div className="text-center space-y-2">
          <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
            <Sparkles className="h-5 w-5" />
          </div>
          <h2 className="text-3xl font-extrabold text-foreground tracking-tight">
            Welcome Back
          </h2>
          <p className="text-sm text-muted-foreground">
            Sign in to access your StreetWear account
          </p>
        </div>

        {/* Social Login Buttons */}
        <div className="grid grid-cols-2 gap-4">
          <button
            type="button"
            className="flex items-center justify-center gap-2 px-4 py-2.5 border border-border rounded-xl bg-background text-sm font-medium hover:bg-muted/80 transition-colors"
          >
            <FaGoogle className="h-4 w-4 text-rose-500" />
            <span>Google</span>
          </button>
          <button
            type="button"
            className="flex items-center justify-center gap-2 px-4 py-2.5 border border-border rounded-xl bg-background text-sm font-medium hover:bg-muted/80 transition-colors"
          >
            <FaGithub className="h-4 w-4 text-foreground" />
            <span>GitHub</span>
          </button>
        </div>

        {/* Divider */}
        <div className="relative flex items-center justify-center">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-border"></div>
          </div>
          <span className="relative px-3 bg-card text-xs text-muted-foreground uppercase">
            Or continue with
          </span>
        </div>

        {/* Form */}
        <form className="space-y-6" onSubmit={handleSubmit}>
          
          {/* Error Message */}
          {error && (
            <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-500 text-xs font-semibold">
              {error}
            </div>
          )}

          {/* Email Input */}
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider" htmlFor="email">
              Email Address
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-muted-foreground pointer-events-none">
                <Mail className="h-4 w-4" />
              </span>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email || ""}
                onChange={handleChange}
                placeholder="you@example.com"
                className="w-full pl-10 pr-4 py-3 bg-background border border-border focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 rounded-xl text-sm outline-none transition-all placeholder:text-muted-foreground/60"
              />
            </div>
          </div>

          {/* Password Input */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between">
              <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider" htmlFor="password">
                Password
              </label>
              <Link href="#" className="text-xs text-indigo-600 dark:text-indigo-400 hover:underline">
                Forgot password?
              </Link>
            </div>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-muted-foreground pointer-events-none">
                <Lock className="h-4 w-4" />
              </span>
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                required
                value={formData.password || ""}
                onChange={handleChange}
                placeholder="••••••••"
                className="w-full pl-10 pr-10 py-3 bg-background border border-border focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 rounded-xl text-sm outline-none transition-all placeholder:text-muted-foreground/60"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-muted-foreground hover:text-foreground transition-colors"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>
          </div>


          {/* Submit Button */}
          <Button
            type="submit"
            disabled={loading}
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-6 rounded-xl shadow-lg shadow-indigo-600/10 flex items-center justify-center gap-2 hover:scale-[1.01] active:scale-[0.99] transition-all disabled:opacity-50"
          >
            {loading ? (
              <span className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
            ) : (
              <>
                Sign In
                <ArrowRight className="h-4 w-4" />
              </>
            )}
          </Button>

        </form>

        {/* Footer Link */}
        <p className="text-center text-sm text-muted-foreground">
          Don't have an account?{" "}
          <Link href="/register" className="font-semibold text-indigo-600 dark:text-indigo-400 hover:underline">
            Sign up here
          </Link>
        </p>

      </div>
    </div>
  );
}
