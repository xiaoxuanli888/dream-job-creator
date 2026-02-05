import { useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "Features", href: "#features" },
    { name: "About", href: "#about" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-foreground rounded-full flex items-center justify-center">
              <span className="text-background font-bold text-lg">JH</span>
            </div>
            <span className="font-bold text-xl tracking-tight hidden sm:block">
              Job Hunt Master
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-foreground transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button className="px-6 py-2.5 bg-foreground text-background rounded-full font-medium text-sm hover:opacity-90 transition-opacity">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            "md:hidden overflow-hidden transition-all duration-300",
            mobileMenuOpen ? "max-h-64 pb-6" : "max-h-0"
          )}
        >
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.name}
              </a>
            ))}
            <button className="w-full mt-2 px-6 py-2.5 bg-foreground text-background rounded-full font-medium text-sm">
              Get Started
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
