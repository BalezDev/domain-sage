import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MountainIcon, MenuIcon, XIcon } from "lucide-react";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <header className="bg-primary text-primary-foreground shadow-lg">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <MountainIcon className="h-8 w-8 text-primary-foreground" />
            <span className="text-2xl font-bold text-primary-foreground">
              Domain Sage
            </span>
          </Link>
          <nav className="hidden md:flex space-x-4">
            <Button
              variant="ghost"
              className="text-primary-foreground hover:text-primary-foreground/80"
              asChild
            >
              <Link href="/">Home</Link>
            </Button>
            <Button
              variant="ghost"
              className="text-primary-foreground hover:text-primary-foreground/80"
              asChild
            >
              <Link href="/domains">Domains</Link>
            </Button>
            <Button
              variant="ghost"
              className="text-primary-foreground hover:text-primary-foreground/80"
              asChild
            >
              <Link href="/blog">Blog</Link>
            </Button>
          </nav>
          <Button
            variant="outline"
            size="icon"
            className="md:hidden text-primary-foreground border-primary-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <XIcon className="h-6 w-6" />
            ) : (
              <MenuIcon className="h-6 w-6" />
            )}
          </Button>
        </div>
        {isMenuOpen && (
          <div className="md:hidden">
            <nav className="flex flex-col space-y-2 px-4 py-2">
              <Button
                variant="ghost"
                className="text-primary-foreground hover:text-primary-foreground/80 justify-start"
                asChild
              >
                <Link href="/">Home</Link>
              </Button>
              <Button
                variant="ghost"
                className="text-primary-foreground hover:text-primary-foreground/80 justify-start"
                asChild
              >
                <Link href="/domains">Domains</Link>
              </Button>
              <Button
                variant="ghost"
                className="text-primary-foreground hover:text-primary-foreground/80 justify-start"
                asChild
              >
                <Link href="/blog">Blog</Link>
              </Button>
            </nav>
          </div>
        )}
      </header>
      <main className="flex-grow">{children}</main>
      <footer className="bg-muted text-muted-foreground">
        <div className="container mx-auto px-4 py-6 text-center">
          <p>&copy; 2023 Domain Sage. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
