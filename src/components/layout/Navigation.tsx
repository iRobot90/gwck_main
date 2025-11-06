import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ExternalLink, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/ThemeToggle";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

const logoSrc = "/branding/logo.png";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Who We Are", path: "/who-we-are" },
    { name: "Our Initiatives", path: "/initiatives" },
    { name: "Our Communities", path: "/communities" },
    { name: "Transformation", path: "/transformation" },
    { name: "Team", path: "/team" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm z-50 border-b border-border">
      <div className="container mx-auto container-padding">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <img
              src={logoSrc}
              alt="Green World Campaign Kenya"
              className="h-10 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-smooth ${
                  isActive(item.path)
                    ? "bg-primary text-primary-foreground"
                    : "hover:bg-muted"
                }`}
              >
                {item.name}
              </Link>
            ))}

            {/* Resources dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="px-3 py-2 rounded-md text-sm font-medium hover:bg-muted inline-flex items-center gap-1 focus:outline-none data-[state=open]:bg-muted">
                Resources <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem asChild>
                  <Link to="/resources/me-reports" className="w-full">
                    M&E Reports
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/resources/annual-reports" className="w-full">
                    Annual Reports
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/resources/gallery" className="w-full">
                    Gallery
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <ThemeToggle />
            <Button variant="outline" size="sm" asChild className="ml-2">
              <a
                href="https://greenworld.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1"
              >
                Main Site
                <ExternalLink className="w-3 h-3" />
              </a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-md hover:bg-muted transition-smooth"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden border-t border-border bg-background animate-fade-in">
          <div className="container-padding py-4 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-2 rounded-md text-sm font-medium transition-smooth ${
                  isActive(item.path)
                    ? "bg-primary text-primary-foreground"
                    : "hover:bg-muted"
                }`}
              >
                {item.name}
              </Link>
            ))}
            {/* Mobile Resources group */}
            <div className="pt-2">
              <div className="px-4 py-2 text-xs uppercase tracking-wide text-muted-foreground">
                Resources
              </div>
              <div className="space-y-1">
                <Link
                  to="/resources/me-reports"
                  onClick={() => setIsOpen(false)}
                  className="block px-6 py-2 rounded-md text-sm hover:bg-muted transition-smooth"
                >
                  M&E Reports
                </Link>
                <Link
                  to="/resources/annual-reports"
                  onClick={() => setIsOpen(false)}
                  className="block px-6 py-2 rounded-md text-sm hover:bg-muted transition-smooth"
                >
                  Annual Reports
                </Link>
                <Link
                  to="/resources/gallery"
                  onClick={() => setIsOpen(false)}
                  className="block px-6 py-2 rounded-md text-sm hover:bg-muted transition-smooth"
                >
                  Gallery
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-between px-4 py-2">
              <span className="text-sm font-medium text-muted-foreground">Theme</span>
              <ThemeToggle />
            </div>
            <a
              href="https://greenworld.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium hover:bg-muted transition-smooth"
            >
              Main Site
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
