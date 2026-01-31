export function Footer() {
  return (
    <footer className="bg-brand-navy text-white py-12 border-t border-white/10">
      <div className="container mx-auto px-8 md:px-24 lg:px-40">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-2xl font-bold flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-orange text-white font-bold">
              F
            </div>
            Fredy.
          </div>

          <div className="flex gap-8 text-sm text-gray-300">
            <a href="#" className="hover:text-brand-orange transition-colors">
              Home
            </a>
            <a
              href="#services"
              className="hover:text-brand-orange transition-colors"
            >
              Services
            </a>
            <a
              href="#about"
              className="hover:text-brand-orange transition-colors"
            >
              About
            </a>
            <a
              href="#portfolio"
              className="hover:text-brand-orange transition-colors"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="hover:text-brand-orange transition-colors"
            >
              Contact
            </a>
          </div>

          <div className="text-sm text-gray-400">
            © {new Date().getFullYear()} Fredy Dieuba. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
