import ProductCard from "@/components/ProductCard";

const Page = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  const products = await res.json();

  return (
   <div className="min-h-screen bg-[#030712] p-10">
  <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
    {products.map((product) => (
      <ProductCard key={product.id} product={product} />
    ))}
  </div>
</div>
  );
};

export default Page;