import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="space-y-8 py-6 md:py-10">
      
      {/* Back Link Placeholder */}
      <Skeleton className="h-5 w-28" />

      {/* Main Grid */}
      <div className="grid gap-12 lg:grid-cols-12 items-start">
        
        {/* Product Image Panel Placeholder (Left) */}
        <Skeleton className="lg:col-span-6 h-[400px] md:h-[500px] rounded-3xl" />

        {/* Product Info Panel Placeholder (Right) */}
        <div className="lg:col-span-6 space-y-6">
          
          {/* Category & Rating Row */}
          <div className="flex items-center gap-3">
            <Skeleton className="h-6 w-24 rounded-full" />
            <Skeleton className="h-5 w-32" />
          </div>

          {/* Title */}
          <div className="space-y-2">
            <Skeleton className="h-10 w-full" />
            <Skeleton className="h-10 w-2/3" />
          </div>

          {/* Price */}
          <Skeleton className="h-8 w-32" />

          <hr className="border-border" />

          {/* Description */}
          <div className="space-y-3">
            <Skeleton className="h-4 w-20" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
          </div>

          <hr className="border-border" />

          {/* Quantity & Actions */}
          <div className="space-y-4">
            <Skeleton className="h-6 w-28" />
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Skeleton className="h-12 flex-1 rounded-xl" />
              <Skeleton className="h-12 flex-1 rounded-xl" />
            </div>
          </div>

          <hr className="border-border" />

          {/* Value Props Row */}
          <div className="grid grid-cols-3 gap-4 pt-2">
            <Skeleton className="h-20 rounded-xl" />
            <Skeleton className="h-20 rounded-xl" />
            <Skeleton className="h-20 rounded-xl" />
          </div>

        </div>

      </div>

    </div>
  );
}
