import { Link } from "react-router-dom";
import { Twitter, Instagram, Music } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto container-padding py-12 md:py-16">
        <div className="grid grid-cols-1 gap-8 mb-8 md:grid-cols-4">
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">
              Green World Campaign Kenya
            </h3>
            <p className="text-sm opacity-90">
              Regenerating landscapes and empowering communities across coastal Kenya.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-medium mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/who-we-are" className="opacity-90 hover:opacity-100 transition-smooth">
                  Who We Are
                </Link>
              </li>
              <li>
                <Link to="/initiatives" className="opacity-90 hover:opacity-100 transition-smooth">
                  Our Initiatives
                </Link>
              </li>
              <li>
                <Link to="/communities" className="opacity-90 hover:opacity-100 transition-smooth">
                  Our Communities
                </Link>
              </li>
              <li>
                <Link to="/team" className="opacity-90 hover:opacity-100 transition-smooth">
                  Team
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-medium mb-4">Connect</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/contact" className="opacity-90 hover:opacity-100 transition-smooth">
                  Contact Us
                </Link>
              </li>
              <li>
                <a
                  href="https://greenworld.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="opacity-90 hover:opacity-100 transition-smooth"
                >
                  Main Website
                </a>
              </li>
              <li>
                <a
                  href="https://www.airsgreenworld.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="opacity-90 hover:opacity-100 transition-smooth"
                >
                  AIRS Program
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-medium mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a
                href="https://twitter.com/gwc_kenya"
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-90 hover:opacity-100 transition-smooth"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com/gwc_kenya"
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-90 hover:opacity-100 transition-smooth"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://tiktok.com/@gwc_kenya"
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-90 hover:opacity-100 transition-smooth"
                aria-label="TikTok"
              >
                <Music className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-primary-foreground/20 text-center text-xs md:text-sm opacity-75">
          <p>
            © {currentYear} Green World Campaign Kenya. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
