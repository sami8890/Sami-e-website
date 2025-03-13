import { Github, Twitter, Linkedin } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-black border-t border-emerald-500/20 py-12">
      <div className="container px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link href="/" className="flex items-center space-x-2">
              <div className="size-8 rounded bg-emerald-500 rotate-45" />
              <span className="text-lg font-bold bg-gradient-to-r from-white to-emerald-500 bg-clip-text text-transparent">
               Sami-e
              </span>
            </Link>
          </div>
          <nav className="flex space-x-4 mb-4 md:mb-0">
            <Link
              href="#"
              className="text-muted-foreground hover:text-white transition-colors"
            >
              About
            </Link>
            <Link
              href="#"
              className="text-muted-foreground hover:text-white transition-colors"
            >
              Services
            </Link>
            <Link
              href="#"
              className="text-muted-foreground hover:text-white transition-colors"
            >
              Projects
            </Link>
            <Link
              href="#"
              className="text-muted-foreground hover:text-white transition-colors"
            >
              Contact
            </Link>
          </nav>
          <div className="flex space-x-4">
            <a
              href="#"
              className="text-muted-foreground hover:text-white transition-colors"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-white transition-colors"
            >
              <Twitter className="h-6 w-6" />
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-white transition-colors"
            >
              <Linkedin className="h-6 w-6" />
            </a>
          </div>
        </div>
        <div className="mt-8 text-center text-muted-foreground">
          © {new Date().getFullYear()} weCreate. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
