"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden bg-brand-light">
      {/* Background Gradients */}
      <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-brand-orange/5 blur-[120px] rounded-full mix-blend-multiply filter opacity-70 animate-blob" />
      <div className="absolute bottom-0 left-0 w-[50%] h-[50%] bg-brand-blue/5 blur-[120px] rounded-full mix-blend-multiply filter opacity-70 animate-blob animation-delay-2000" />

      {/* Main Content */}
      <div className="container mx-auto px-8 md:px-24 lg:px-40 z-10 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="inline-block px-4 py-2 bg-brand-navy/5 text-brand-navy rounded-full text-sm font-semibold tracking-wide uppercase border border-brand-navy/10">
              Bonjour ! Je me nomme Fredy Dieuba
            </div>

            <h1 className="text-5xl lg:text-5xl font-bold text-brand-navy leading-tight">
              Lead <span className="text-gradient">Creative Strategist</span>
              <br />& Digital Marketer.
            </h1>

            <p className="text-xl font-bold text-brand-orange uppercase tracking-wide">
              Co-fondateur de Soluty Agency
            </p>

            <p className="text-gray-600 text-lg max-w-lg leading-relaxed">
              Je ne me contente pas de rendre votre entreprise visible ; je la
              rends performante. J'aide les Micro, PME et les entrepreneurs
              ambitieux à transformer leur présence digitale en un véritable
              moteur d’impact et de croissance stratégique.
            </p>

            <div className="flex flex-wrap gap-4 pt-6">
              <Link
                href="#portfolio"
                className="flex items-center gap-2 bg-brand-navy text-white rounded-full px-8 py-3.5 font-semibold hover:bg-brand-navy/90 hover:scale-105 transition-all duration-300 shadow-lg shadow-brand-navy/20"
              >
                Découvrir mes projets
                <ArrowRight size={18} />
              </Link>

              <Link
                href="https://wa.me/237677405562"
                target="_blank"
                className="flex items-center gap-2 bg-brand-orange text-white rounded-full px-8 py-3.5 font-semibold hover:bg-brand-orange/90 hover:scale-105 transition-all duration-300 shadow-lg shadow-brand-orange/20"
              >
                Me contacter
                <MessageCircle size={18} />
              </Link>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center items-center"
          >
            {/* Abstract Background Shapes */}
            <div className="absolute w-[400px] h-[400px] bg-brand-blue/10 rounded-full animate-pulse" />
            <div className="absolute w-[350px] h-[350px] bg-brand-orange/10 rounded-full translate-x-10 translate-y-10" />

            {/* Profile Image Container */}
            <div className="relative z-10 w-[350px] lg:w-[420px] aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl rotate-3 hover:rotate-0 transition-all duration-500 glass-panel p-2">
              <div className="w-full h-full rounded-[1.5rem] overflow-hidden relative bg-gray-200">
                <Image
                  src="/Branding-images/01-Master-Class.png"
                  alt="Fredy Dieuba"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Floating Cards (Stats) */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute top-10 -right-4 lg:-right-8 glass-card p-4 rounded-xl flex items-center gap-3 shadow-xl backdrop-blur-md bg-white/10 z-30 border border-white/20"
            >
              <div className="w-10 h-10 bg-brand-orange rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                8+
              </div>
              <div className="text-sm font-semibold text-brand-navy">
                Agences & ONG
                <br />
                Accompagnées
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{
                repeat: Infinity,
                duration: 5,
                ease: "easeInOut",
                delay: 1,
              }}
              className="absolute bottom-20 -left-8 lg:-left-12 glass-card p-4 rounded-xl flex items-center gap-3 shadow-xl backdrop-blur-md bg-white/10 z-30 border border-white/20"
            >
              <div className="w-10 h-10 bg-brand-blue rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                100%
              </div>
              <div className="text-sm font-semibold text-brand-navy">
                Engagé pour
                <br />
                votre croissance
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
