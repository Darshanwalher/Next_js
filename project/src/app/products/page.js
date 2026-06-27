import ProductCard from "@/components/ProductCard";
import ProtectedRoute from "@/components/ProtectedRoute";

const Page = async () => {
  const res = await fetch("https://fakestoreapi.com/products", {
    cache: "no-store",
  });

  const products = await res.json();

  return (
    <ProtectedRoute>
      <main className="min-h-screen bg-background">
      <div className="container mx-auto px-6 py-10">

        {/* Heading */}
        <div className="mb-10">
          <h1 className="text-4xl font-bold tracking-tight">
            Our Products
          </h1>
          <p className="mt-2 text-muted-foreground">
            Explore our latest collection of premium products.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>

      </div>
    </main>
    </ProtectedRoute>
  );
};

export default Page;