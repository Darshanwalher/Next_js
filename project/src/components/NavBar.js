import Link from "next/link";
import { ModeToggle } from "./toggleTheme";

const NavBar = () => {
  return (
    <nav className="bg-background/80 backdrop-blur-md border-b border-border sticky top-0 z-50 w-full transition-colors duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4">

        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-foreground tracking-tight hover:opacity-90 transition-opacity">
          Street<span className="text-indigo-600 dark:text-indigo-400">Wear</span>
        </Link>

        {/* Navigation */}
        <div className="flex items-center gap-6 sm:gap-8">
          <Link
            href="/"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Home
          </Link>

          <Link
            href="/products"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Products
          </Link>

          {/* Theme Toggle */}
          <div className="pl-2 border-l border-border">
            <ModeToggle />
          </div>
        </div>

      </div>
    </nav>
  );
};

export default NavBar;