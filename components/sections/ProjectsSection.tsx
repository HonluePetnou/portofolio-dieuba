"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { MoveRight } from "lucide-react";

const projects = [
  {
    title: "FUNIFY",
    category: "Agence Événementielle",
    description:
      "Maximiser la performance d'équipe par des packages d'épanouissement.",
    image: "/section-projet-images/funify.png",
  },
  {
    title: "SOLUTY AGENCY",
    category: "Lead Creative Agency",
    description:
      "Développement de solutions digitales et branding stratégique pour PME.",
    image: "/section-projet-images/SOLUTY-AGENCY.png",
  },
  {
    title: "HMA4S.ATE",
    category: "Stratégie ONG",
    description:
      "Stratégie de communication digitale pour une ONG dédiée au développement.",
    image: "/section-projet-images/Hma4s-ate.png",
  },
  {
    title: "ELITE TRADING",
    category: "Finance & Trading",
    description:
      "Identité visuelle et design d'E-books pour la gestion de capitaux.",
    image: "/section-projet-images/Elite-tradin.png",
  },
  {
    title: "NEW SAMUEL SHOP ONLINE",
    category: "E-commerce Fashion",
    description:
      "Branding & Identité Visuelle pour une boutique en ligne tendance.",
    image: "/section-projet-images/nsso.png",
  },
  {
    title: "SOCIAL MEDIA DESIGN",
    category: "Content Creation",
    description:
      "Conception graphique et gestion publicitaire pour réseaux sociaux.",
    image: "/section-projet-images/SOCIAL-MEDIA-DESIGN.png",
  },
  // {
  //   title: "FANNSTUDIO",
  //   category: "Creative Agency",
  //   description:
  //     "Design d'espace et identité visuelle pour un studio de création.",
  //   image: "/section-projet-images/Fannstudio 2.png",
  // },
];

export function ProjectsSection() {
  return (
    <section className="py-20 bg-brand-navy" id="portfolio">
      <div className="container mx-auto px-8 md:px-24 lg:px-40">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.span
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-brand-orange font-bold uppercase tracking-wider text-sm border-b-2 border-brand-orange pb-1"
            >
              - Portfolio
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-4xl font-bold text-white mt-4"
            >
              Études de Cas
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-gray-300 mt-2"
            >
              Mise en avant visuelle de mes réalisations
            </motion.p>
          </motion.div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.21, 0.47, 0.32, 0.98],
              }}
              whileHover={{ y: -10 }}
              className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-transparent hover:border-brand-orange/20"
            >
              <div className="relative h-[250px] w-full bg-gray-200 overflow-hidden border-b border-gray-900">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-1000 ease-out"
                />
                <div className="absolute inset-0 bg-brand-navy/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <motion.span
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-brand-orange text-white px-6 py-2 rounded-full font-bold transform translate-y-4 group-hover:translate-y-0 transition-all duration-300"
                  >
                    Voir le Projet
                  </motion.span>
                </div>
              </div>

              <div className="p-6">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  className="text-xs font-bold text-brand-orange uppercase mb-2"
                >
                  {project.category}
                </motion.div>
                <motion.h3
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 + 0.4 }}
                  className="text-xl font-bold text-brand-navy mb-2 group-hover:text-brand-orange transition-colors"
                >
                  {project.title}
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 + 0.5 }}
                  className="text-gray-500 text-sm leading-relaxed mb-4"
                >
                  {project.description}
                </motion.p>
                <div className="flex justify-end">
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 15 }}
                    className="w-10 h-10 rounded-full bg-gray-100 text-brand-navy flex items-center justify-center group-hover:bg-brand-navy group-hover:text-white transition-all"
                  >
                    <MoveRight size={18} />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
