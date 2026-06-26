import Link from "next/link";
import { FiShoppingCart } from "react-icons/fi";

const NavBar = () => {
  return (
    <nav className="bg-[#111827] border-b border-gray-800">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-4">

        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-white">
          Street<span className="text-indigo-500">Wear</span>
        </Link>

        {/* Navigation */}
        <div className="flex items-center gap-8">
          <Link
            href="/"
            className="text-gray-300 hover:text-indigo-400 transition"
          >
            Home
          </Link>

          <Link
            href="/products"
            className="text-gray-300 hover:text-indigo-400 transition"
          >
            Products
          </Link>

          {/* Cart */}
          <button className="bg-indigo-600 hover:bg-indigo-700 p-2 rounded-lg transition">
            <FiShoppingCart className="text-white text-xl" />
          </button>
        </div>

      </div>
    </nav>
  );
};

export default NavBar;