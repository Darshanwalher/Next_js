import Link from "next/link";
import { Star, ShoppingCart } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const ProductCard = ({ product }) => {
  return (
    <Card className="group overflow-hidden rounded-2xl transition-all duration-300 hover:shadow-xl hover:-translate-y-1">

      {/* Product Image */}
      <Link href={`/products/${product.id}`}>
        <div className="flex h-64 items-center justify-center bg-muted overflow-hidden cursor-pointer">
          <img
            src={product.image}
            alt={product.title}
            className="h-44 object-contain transition-transform duration-500 group-hover:scale-110"
          />
        </div>
      </Link>

      <CardContent className="space-y-4 p-5">

        {/* Category */}
        <Badge variant="secondary" className="capitalize">
          {product.category}
        </Badge>

        {/* Title */}
        <Link href={`/products/${product.id}`}>
          <h2 className="line-clamp-2 cursor-pointer text-lg font-semibold hover:text-primary transition-colors">
            {product.title}
          </h2>
        </Link>

        {/* Description */}
        <p className="line-clamp-3 text-sm text-muted-foreground">
          {product.description}
        </p>

        {/* Rating */}
        <div className="flex items-center gap-2 text-sm">
          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
          <span>{product.rating.rate}</span>
          <span className="text-muted-foreground">
            ({product.rating.count} Reviews)
          </span>
        </div>

        {/* Price + Cart */}
        <div className="flex items-center justify-between">
          <h3 className="text-3xl font-bold text-green-500">
            ${product.price}
          </h3>

          <Button size="icon">
            <ShoppingCart className="h-5 w-5" />
          </Button>
        </div>

        {/* Buy Now */}
        <Button className="w-full">
          Buy Now
        </Button>

      </CardContent>
    </Card>
  );
};

export default ProductCard;