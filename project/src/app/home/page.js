import React from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, TrendingUp, ShieldCheck, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import ProtectedRoute from "@/components/ProtectedRoute";



export default function Page() {
  return (
    <ProtectedRoute>
      <div className="flex flex-col gap-20 py-8 md:py-16">
      
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-3xl bg-radial from-indigo-500/10 via-background to-background border border-border p-8 md:p-16 text-center flex flex-col items-center justify-center min-h-[60vh] gap-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/5 text-xs text-indigo-600 dark:text-indigo-400 font-semibold tracking-wide animate-pulse">
          <Sparkles className="h-4 w-4" />
          NEW SUMMER DROP '26 IS LIVE
        </div>

        <h1 className="max-w-3xl text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight text-foreground">
          Redefining Modern <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">Streetwear</span>
        </h1>

        <p className="max-w-xl text-muted-foreground text-base md:text-lg leading-relaxed">
          Express your identity with curated urban apparel that blends premium quality fabrics with cutting-edge streetwear design.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-4 w-full sm:w-auto">
          <Link href="/products" className="w-full sm:w-auto">
            <Button size="lg" className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-700 text-white font-semibold gap-2 py-6 px-8 rounded-xl shadow-lg shadow-indigo-600/20 hover:scale-[1.02] transition-transform">
              Shop Collection
              <ArrowRight className="h-5 w-5" />
            </Button>
          </Link>
          <Link href="/products" className="w-full sm:w-auto">
            <Button size="lg" variant="outline" className="w-full sm:w-auto font-semibold py-6 px-8 rounded-xl hover:bg-muted/80">
              Browse Categories
            </Button>
          </Link>
        </div>

        {/* Decorative Grid Line Accents */}
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30"></div>
      </section>

      {/* Highlights Section */}
      <section className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        
        {/* Highlight 1 */}
        <div className="flex flex-col gap-4 p-8 rounded-2xl border border-border bg-card hover:shadow-md transition-shadow">
          <div className="h-12 w-12 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
            <Zap className="h-6 w-6" />
          </div>
          <h3 className="text-xl font-bold text-foreground">Premium Quality</h3>
          <p className="text-muted-foreground leading-relaxed text-sm">
            Crafted from highly durable, custom-knit cotton and high-density fabrics engineered to last.
          </p>
        </div>

        {/* Highlight 2 */}
        <div className="flex flex-col gap-4 p-8 rounded-2xl border border-border bg-card hover:shadow-md transition-shadow">
          <div className="h-12 w-12 rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center">
            <TrendingUp className="h-6 w-6" />
          </div>
          <h3 className="text-xl font-bold text-foreground">Trendsetting Designs</h3>
          <p className="text-muted-foreground leading-relaxed text-sm">
            Stand out with exclusive, limited-edition designs curated in collaboration with top urban artists.
          </p>
        </div>

        {/* Highlight 3 */}
        <div className="flex flex-col gap-4 p-8 rounded-2xl border border-border bg-card hover:shadow-md transition-shadow sm:col-span-2 lg:col-span-1">
          <div className="h-12 w-12 rounded-xl bg-pink-500/10 text-pink-600 dark:text-pink-400 flex items-center justify-center">
            <ShieldCheck className="h-6 w-6" />
          </div>
          <h3 className="text-xl font-bold text-foreground">Ethical Production</h3>
          <p className="text-muted-foreground leading-relaxed text-sm">
            100% transparent sourcing and fair labor practices, creating styles you can feel genuinely good wearing.
          </p>
        </div>

      </section>

      {/* Showcase Banner / Call-to-action */}
      <section className="rounded-3xl border border-border bg-card overflow-hidden grid lg:grid-cols-12 items-center">
        <div className="p-8 md:p-12 lg:col-span-7 flex flex-col gap-6">
          <span className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-widest">Limited Edition Drop</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground tracking-tight">
            The Neo-Tokyo Capsule Collection
          </h2>
          <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
            Inspired by cyberpunk aesthetics and high-tech street utility. Featuring heavy-duty oversized hoodies, modular cargo pants, and reflective windbreakers. Once it's gone, it's gone for good.
          </p>
          <div>
            <Link href="/products">
              <Button className="bg-foreground text-background hover:opacity-90 font-medium px-6 py-3 rounded-xl">
                Explore The Drop
              </Button>
            </Link>
          </div>
        </div>
        
        {/* Abstract Graphic Section */}
        <div className="relative h-64 lg:h-full min-h-[300px] lg:col-span-5 bg-gradient-to-br from-indigo-600 to-pink-500 flex items-center justify-center text-white p-8">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative text-center z-10 space-y-2">
            <h3 className="text-5xl font-black tracking-widest italic opacity-20">TOKYO</h3>
            <h3 className="text-5xl font-black tracking-widest italic scale-110">STREETS</h3>
            <h3 className="text-5xl font-black tracking-widest italic opacity-20">2026</h3>
          </div>
        </div>
      </section>
      
      </div>
    </ProtectedRoute>
  );
}
