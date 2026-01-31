"use client";

import { motion } from "framer-motion";
import {
  Code,
  TrendingUp,
  Megaphone,
  Share2,
  Palette,
  MoveRight,
  Cpu,
} from "lucide-react";

const services = [
  {
    icon: <Code className="w-8 h-8 text-white" />,
    title: "Développement Web & Automatisation",
    description:
      "Création de plateformes robustes et optimisation des processus.",
  },
  {
    icon: <TrendingUp className="w-8 h-8 text-white" />,
    title: "Stratégie de Croissance",
    description: "Plans d'actions ciblés pour propulser votre business.",
  },
  {
    icon: <Megaphone className="w-8 h-8 text-white" />,
    title: "Marketing Digital",
    description: "Déploiement de votre présence en ligne avec cohérence.",
  },
  {
    icon: <Share2 className="w-8 h-8 text-white" />,
    title: "Social Media & Ads",
    description: "Gestion de campagnes Ads et animation de communautés.",
  },
  {
    icon: <Palette className="w-8 h-8 text-white" />,
    title: "Design Graphique",
    description:
      "Création d'univers visuels mémorables et ergonomiques (UI/UX).",
  },
];

export function ServicesSection() {
  return (
    <section
      className="relative py-20 bg-brand-navy overflow-hidden"
      id="services"
    >
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-[10%] -left-[10%] w-[500px] h-[500px] bg-brand-orange/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-[10%] -right-[10%] w-[500px] h-[500px] bg-brand-blue/5 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-8 md:px-24 lg:px-40 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center max-w-3xl mx-auto"
        >
          <span className="text-brand-orange font-bold uppercase tracking-wider text-sm border-b-2 border-brand-orange pb-1">
            Compétences & Expertise
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-6 mb-8">
            Ma Philosophie
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            Maîtriser un outil n'est qu'une étape ; savoir l'utiliser pour
            générer de la valeur est ma priorité. Mon expertise garantit des
            solutions esthétiques, fonctionnelles et durables.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white p-8 rounded-3xl hover:shadow-2xl transition-all duration-300 border border-transparent hover:border-brand-orange/10 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-orange/5 rounded-bl-[100px] -mr-8 -mt-8 transition-transform group-hover:scale-150 duration-500" />

              <div className="w-16 h-16 bg-brand-navy rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-brand-navy/20 group-hover:scale-110 group-hover:bg-brand-orange transition-all duration-300">
                {service.icon}
              </div>

              <h3 className="text-2xl font-bold text-brand-navy mb-4 group-hover:text-brand-orange transition-colors">
                {service.title}
              </h3>

              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              <div className="w-8 h-8 rounded-full bg-blue-300 flex items-center justify-center group-hover:bg-brand-navy group-hover:text-white transition-all duration-300">
                <MoveRight size={16} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
