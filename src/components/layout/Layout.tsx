import { ReactNode } from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";
import { cn } from "@/lib/utils";

interface LayoutProps {
  children: ReactNode;
  /**
   * Optional utility classes to customize the <main> region.
   * Useful for pages that need different vertical alignment.
   */
  mainClassName?: string;
}

const Layout = ({ children, mainClassName }: LayoutProps) => {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:text-primary-foreground"
      >
        Skip to main content
      </a>

      <Navigation />

      <main
        id="main-content"
        className={cn("flex-1", mainClassName)}
      >
        {children}
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
