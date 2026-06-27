import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

const Loading = () => {
  return (
    <div className="min-h-screen bg-background py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {Array.from({ length: 8 }).map((_, index) => (
          <div
            key={index}
            className="bg-card border border-border rounded-2xl overflow-hidden shadow-sm"
          >
            {/* Image */}
            <Skeleton className="h-64 w-full rounded-none" />

            <div className="p-5 space-y-4">
              {/* Category */}
              <Skeleton className="h-6 w-28 rounded-full" />

              {/* Title */}
              <div className="space-y-2">
                <Skeleton className="h-6 w-full" />
                <Skeleton className="h-6 w-3/4" />
              </div>

              {/* Description */}
              <div className="space-y-2">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-2/3" />
              </div>

              {/* Rating */}
              <Skeleton className="h-5 w-32" />

              {/* Price + Cart */}
              <div className="flex items-center justify-between pt-2">
                <Skeleton className="h-8 w-24" />
                <Skeleton className="h-10 w-10 rounded-xl" />
              </div>

              {/* Button */}
              <Skeleton className="h-10 w-full rounded-xl" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Loading;