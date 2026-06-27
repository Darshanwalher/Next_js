"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Star, ShoppingCart, ArrowLeft, Truck, ShieldCheck, RotateCcw, Plus, Minus, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function ProductDetailsClient({ product }) {
  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);
  const [isWishlisted, setIsWishlisted] = useState(false);

  const handleAddToCart = () => {
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  const incrementQty = () => setQuantity((q) => q + 1);
  const decrementQty = () => setQuantity((q) => (q > 1 ? q - 1 : 1));

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      
      {/* Back Link */}
      <div>
        <Link
          href="/products"
          className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors group"
        >
          <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
          Back to products
        </Link>
      </div>

      {/* Main Grid */}
      <div className="grid gap-12 lg:grid-cols-12 items-start">
        
        {/* Product Image Panel (Left) */}
        <div className="lg:col-span-6 flex items-center justify-center p-8 bg-muted/30 dark:bg-muted/10 border border-border rounded-3xl overflow-hidden min-h-[400px] md:min-h-[500px] relative group/img">
          <img
            src={product.image}
            alt={product.title}
            className="max-h-[350px] md:max-h-[450px] object-contain transition-transform duration-500 group-hover/img:scale-105"
          />
          <button
            onClick={() => setIsWishlisted(!isWishlisted)}
            className="absolute top-4 right-4 p-3 rounded-full border border-border bg-background/80 backdrop-blur-sm text-muted-foreground hover:text-rose-500 transition-colors shadow-sm"
          >
            <Heart className={`h-5 w-5 ${isWishlisted ? "fill-rose-500 text-rose-500" : ""}`} />
          </button>
        </div>

        {/* Product Info Panel (Right) */}
        <div className="lg:col-span-6 space-y-6">
          
          {/* Category & Rating */}
          <div className="flex flex-wrap items-center gap-3">
            <Badge variant="secondary" className="capitalize px-3 py-1 text-xs">
              {product.category}
            </Badge>
            <div className="flex items-center gap-1.5 text-sm">
              <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
              <span className="font-semibold text-foreground">{product.rating?.rate}</span>
              <span className="text-muted-foreground">({product.rating?.count} reviews)</span>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-foreground">
            {product.title}
          </h1>

          {/* Price */}
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-extrabold text-indigo-600 dark:text-indigo-400">
              ${product.price}
            </span>
            <span className="text-sm text-muted-foreground line-through">
              ${(product.price * 1.25).toFixed(2)}
            </span>
          </div>

          <hr className="border-border" />

          {/* Description */}
          <div className="space-y-2">
            <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Description</h3>
            <p className="text-foreground/90 leading-relaxed text-sm md:text-base">
              {product.description}
            </p>
          </div>

          <hr className="border-border" />

          {/* Quantity & Action Buttons */}
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <span className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Quantity</span>
              <div className="flex items-center border border-border rounded-xl bg-background overflow-hidden">
                <button
                  onClick={decrementQty}
                  className="p-2.5 hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="w-12 text-center font-semibold text-sm text-foreground">
                  {quantity}
                </span>
                <button
                  onClick={incrementQty}
                  className="p-2.5 hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Button
                onClick={handleAddToCart}
                className={`flex-1 py-6 rounded-xl font-semibold gap-2 border shadow-sm transition-all duration-300 ${
                  isAdded
                    ? "bg-emerald-600 border-emerald-600 text-white hover:bg-emerald-700"
                    : "bg-indigo-600 border-indigo-600 text-white hover:bg-indigo-700 hover:scale-[1.01]"
                }`}
              >
                <ShoppingCart className="h-5 w-5" />
                {isAdded ? "Added to Cart! ✓" : "Add to Cart"}
              </Button>
              <Button
                variant="outline"
                className="flex-1 py-6 rounded-xl font-semibold hover:bg-muted/80 hover:scale-[1.01] transition-transform"
              >
                Buy It Now
              </Button>
            </div>
          </div>

          <hr className="border-border" />

          {/* Value Props */}
          <div className="grid grid-cols-3 gap-4 pt-2 text-center">
            <div className="flex flex-col items-center gap-1.5 p-3 rounded-xl border border-border/50 bg-card">
              <Truck className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
              <span className="text-[11px] font-bold text-foreground">Free Shipping</span>
              <span className="text-[10px] text-muted-foreground">Orders over $50</span>
            </div>
            <div className="flex flex-col items-center gap-1.5 p-3 rounded-xl border border-border/50 bg-card">
              <ShieldCheck className="h-5 w-5 text-purple-600 dark:text-purple-400" />
              <span className="text-[11px] font-bold text-foreground">Secure Checkout</span>
              <span className="text-[10px] text-muted-foreground">SSL Encrypted</span>
            </div>
            <div className="flex flex-col items-center gap-1.5 p-3 rounded-xl border border-border/50 bg-card">
              <RotateCcw className="h-5 w-5 text-pink-600 dark:text-pink-400" />
              <span className="text-[11px] font-bold text-foreground">30-Day Returns</span>
              <span className="text-[10px] text-muted-foreground">Hassle-Free</span>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
