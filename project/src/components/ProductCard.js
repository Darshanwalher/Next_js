import { FaStar } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";

const ProductCard = ({ product }) => {
  return (
    <div className="group bg-[#111827] rounded-2xl overflow-hidden border border-gray-800 hover:border-indigo-500 shadow-lg hover:shadow-indigo-500/20 transition-all duration-500">

      {/* Product Image */}
      <div className="bg-[#1F2937] h-64 flex items-center justify-center overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className="h-44 object-contain group-hover:scale-110 transition duration-500"
        />
      </div>

      {/* Content */}
      <div className="p-5">

        {/* Category */}
        <span className="inline-block px-3 py-1 text-xs rounded-full bg-indigo-500/20 text-indigo-400 capitalize">
          {product.category}
        </span>

        {/* Title */}
        <h2 className="mt-4 text-lg font-semibold text-white h-14 overflow-hidden">
          {product.title}
        </h2>

        {/* Rating */}
        <div className="flex items-center gap-2 mt-3">
          <FaStar className="text-yellow-400" />
          <span className="text-gray-200">{product.rating.rate}</span>
          <span className="text-gray-400 text-sm">
            ({product.rating.count})
          </span>
        </div>

        {/* Price */}
        <div className="flex items-center justify-between mt-5">
          <h3 className="text-3xl font-bold text-green-400">
            ${product.price}
          </h3>

          <button className="bg-indigo-600 hover:bg-indigo-700 p-3 rounded-xl transition">
            <FiShoppingCart className="text-white text-xl" />
          </button>
        </div>

        {/* Buy Button */}
        <button className="mt-5 w-full py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:scale-105 transition duration-300">
          Buy Now
        </button>

      </div>
    </div>
  );
};

export default ProductCard;