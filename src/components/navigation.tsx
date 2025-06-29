"use client";

import { NAVIGATION_ITEMS } from "@/config/navigation";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "./button";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    // call straight away so if the page has been scrolled and is refreshed,
    // the nav won't be transparent.
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/80 py-3 shadow-lg backdrop-blur-md"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4">
        <div className="text-xl font-bold">
          <span className="text-gradient">Corey</span>
          Hines
        </div>

        {/* Desktop Navigation */}
        <div className="hidden gap-8 md:flex">
          {NAVIGATION_ITEMS.map((item, index) => (
            <Link
              key={index}
              href={`#${item.id}`}
              className="transition-colors hover:text-violet-500"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Contact */}
        <div className="hidden gap-4 md:flex">
          <Button
            variant="outline"
            className="gap-2"
            target="_blank"
            href="https://github.com/coreyyy34"
          >
            <i className="devicon-github-original text-xl"></i>
          </Button>
          <Button
            variant="outline"
            className="gap-2"
            target="_blank"
            href="https://www.linkedin.com/in/coreyhiness/"
          >
            <i className="devicon-linkedin-plain text-xl"></i>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="text-white md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="absolute top-full right-0 left-0 flex flex-col gap-4 border-t border-zinc-800 bg-black/95 p-4 backdrop-blur-md md:hidden">
          {NAVIGATION_ITEMS.map((item, index) => (
            <Link
              key={index}
              href={`#${item.id}`}
              className="rounded-md px-4 py-2 hover:bg-zinc-800/50"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default NavBar;
