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
    image: "/Branding-images/02MASTER_CLASS2.png",
  },
  {
    title: "NEW SOLUTION STYLE (NSS)",
    category: "Branding & Couture",
    description:
      "Branding complet pour un atelier de haute couture et modélisme.",
    image: "/Branding-images/04.png",
  },
  {
    title: "HMA4S.ATE",
    category: "Stratégie ONG",
    description:
      "Stratégie de communication digitale pour une ONG dédiée au développement.",
    image: "/Branding-images/06.png",
  },
  {
    title: "ELITE TRADING",
    category: "Identité Visuelle",
    description:
      "Identité visuelle et design d'E-books pour la gestion de capitaux.",
    image: "/Branding-images/07.png",
  },
  {
    title: "NEW SAMUEL SHOP ONLINE",
    category: "E-commerce Fashion",
    description:
      "Branding & Identité Visuelle pour une boutique en ligne tendance.",
    image: "/Branding-images/08.png",
  },
  {
    title: "SOCIAL MEDIA & ADS",
    category: "Campagnes Publicitaires",
    description: "Interventions graphiques pour diverses marques et campagnes.",
    image: "/Branding-images/09.png",
  },
];

export function ProjectsSection() {
  return (
    <section className="py-20 bg-brand-navy" id="portfolio">
      <div className="container mx-auto px-8 md:px-24 lg:px-40">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-brand-orange font-bold uppercase tracking-wider text-sm border-b-2 border-brand-orange pb-1">
              - Portfolio
            </span>
            <h2 className="text-4xl font-bold text-white mt-4">
              Études de Cas
            </h2>
            <p className="text-gray-300 mt-2">
              Mise en avant visuelle de mes réalisations
            </p>
          </motion.div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-transparent hover:border-brand-orange/20"
            >
              <div className="relative h-[250px] w-full bg-gray-200 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-brand-navy/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="bg-brand-orange text-white px-6 py-2 rounded-full font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    Voir le Projet
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="text-xs font-bold text-brand-orange uppercase mb-2">
                  {project.category}
                </div>
                <h3 className="text-xl font-bold text-brand-navy mb-2 group-hover:text-brand-orange transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex justify-end">
                  <div className="w-10 h-10 rounded-full bg-gray-100 text-brand-navy flex items-center justify-center group-hover:bg-brand-navy group-hover:text-white transition-all">
                    <MoveRight size={18} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
