import React from "react";
import ProductDetailsClient from "@/components/ProductDetailsClient";

export async function generateMetadata({ params }) {
  const { id } = await params;
  try {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    const product = await res.json();
    return {
      title: `${product.title} | StreetWear`,
      description: product.description.substring(0, 160),
    };
  } catch (error) {
    return {
      title: "Product Details | StreetWear",
    };
  }
}

const Page = async ({ params }) => {
  const { id } = await params;

  const res = await fetch(`https://fakestoreapi.com/products/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh] gap-4">
        <h1 className="text-2xl font-bold text-foreground">Failed to load product</h1>
        <p className="text-muted-foreground">The product details could not be retrieved at this time.</p>
      </div>
    );
  }

  const product = await res.json();

  return (
    <main className="min-h-screen py-6 md:py-10">
      <ProductDetailsClient product={product} />
    </main>
  );
};

export default Page;
