"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { name: "Accueil", href: "/" },
  { name: "Services", href: "#services" },
  { name: "À Propos", href: "#about" },
  { name: "Parcours", href: "#experience" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Tarifs", href: "#pricing" },
  { name: "Blog", href: "#blogs" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-4 left-0 right-0 z-50 mx-auto max-w-screen-2xl px-8 md:px-24 lg:px-40 transition-all duration-300",
        scrolled ? "top-2" : "top-4",
      )}
    >
      <div className="flex items-center justify-between rounded-full bg-brand-navy/90 px-6 py-3 text-white shadow-lg backdrop-blur-md border border-white/10">
        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-bold tracking-wider flex items-center gap-2"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-orange text-white font-bold">
            FD
          </div>
          <span>Fredy dieuba.</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="hover:text-brand-orange transition-colors duration-200"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Contact Button */}
        <div className="hidden md:block">
          <Link
            href="#contact"
            className="rounded-full bg-white px-6 py-2 text-sm font-semibold text-brand-navy hover:bg-brand-orange hover:text-white transition-all duration-300"
          >
            Me Contacter
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-20 left-4 right-4 rounded-3xl bg-brand-navy shadow-xl p-6 md:hidden border border-white/10"
          >
            <div className="flex flex-col gap-4 items-center">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-white hover:text-brand-orange text-lg font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="#contact"
                className="mt-4 rounded-full bg-brand-orange px-8 py-3 text-white font-bold w-full text-center"
                onClick={() => setIsOpen(false)}
              >
                Me Contacter
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
