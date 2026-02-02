"use client";

import { motion } from "framer-motion";
import { GraduationCap, Briefcase } from "lucide-react";

export function TimelineSection() {
  return (
    <section className="py-20 bg-brand-navy" id="experience">
      <div className="container mx-auto px-8 md:px-24 lg:px-40">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="text-brand-orange font-bold uppercase tracking-wider text-sm border-b-2 border-brand-orange pb-1">
            Mon Parcours
          </span>
          <h2 className="text-4xl font-bold text-white mt-6">
            Académique & Professionnel
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="flex items-center gap-4 mb-8">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-12 h-12 rounded-xl bg-white text-brand-navy flex items-center justify-center shadow-lg"
              >
                <GraduationCap size={24} />
              </motion.div>
              <h3 className="text-2xl font-bold text-white">Éducation</h3>
            </div>

            <div className="space-y-8 relative pl-8 border-l-2 border-white/10">
              {[
                {
                  year: "2026",
                  title: "Analyste des Affaires & TI",
                  school:
                    "Yaoundé Higher School of Economics and Management (YSEM)",
                  color: "bg-brand-orange",
                },
                {
                  year: "2025",
                  title: "Economie & Gestion",
                  school:
                    "Yaoundé Higher School of Economics and Management (YSEM)",
                  color: "bg-white",
                },
                {
                  year: "2023",
                  title: "Baccalauréat D",
                  school: "Lycée Classique de Bangangté",
                  color: "bg-gray-500",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 + 0.3 }}
                  className="relative"
                >
                  <motion.span
                    whileHover={{ scale: 1.5 }}
                    className={`absolute -left-[39px] top-1 h-5 w-5 rounded-full border-4 border-brand-navy ${item.color} shadow-md transition-transform`}
                  ></motion.span>
                  <span
                    className={`${item.year === "2026" ? "text-brand-orange" : "text-gray-400"} font-bold font-mono text-sm block mb-1`}
                  >
                    {item.year}
                  </span>
                  <h4 className="text-lg font-bold text-white">{item.title}</h4>
                  <p className="text-gray-400 text-sm">{item.school}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="bg-white/5 p-6 rounded-2xl italic text-gray-300 text-sm border-l-4 border-brand-orange"
            >
              "Mon parcours n'est pas qu'une suite de diplômes : c'est
              l'évolution où j’ai compris que la technologie est le levier de
              croissance le plus puissant pour l'entreprise moderne."
            </motion.div>
          </motion.div>

          {/* Experience Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="flex items-center gap-4 mb-8">
              <motion.div
                whileHover={{ scale: 1.1, rotate: -5 }}
                className="w-12 h-12 rounded-xl bg-brand-orange text-white flex items-center justify-center shadow-lg"
              >
                <Briefcase size={24} />
              </motion.div>
              <h3 className="text-2xl font-bold text-white">Expériences</h3>
            </div>

            <div className="space-y-8 relative pl-8 border-l-2 border-white/10">
              {/* 2026 */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="relative"
              >
                <motion.span
                  whileHover={{ scale: 1.5 }}
                  className="absolute -left-[39px] top-1 h-5 w-5 rounded-full border-4 border-brand-navy bg-brand-orange shadow-md transition-transform"
                ></motion.span>
                <span className="text-brand-orange font-bold font-mono text-sm block mb-1">
                  2026
                </span>
                <h4 className="text-lg font-bold text-white">
                  Co-fondateur & Responsable Com.
                </h4>
                <p className="text-brand-blue font-semibold text-sm mb-1">
                  Soluty Agency
                </p>
                <ul className="text-gray-400 text-sm list-disc pl-4 space-y-1">
                  <li>Elite Trading : Graphic Designer</li>
                  <li>Projets Freelance : Accompagnement NSS</li>
                </ul>
              </motion.div>

              {[
                {
                  year: "2025",
                  title: "Freelance & Entrepreneur",
                  subtitle: "Soluty, Funify, HMA4S.ATE",
                  extra: "Stage Académique NOFIA SA",
                  color: "bg-white",
                },
                {
                  year: "2024",
                  title: "Freelance Marketing & Design",
                  subtitle: "NSS, New Solution Style, NR Fashion",
                  color: "bg-gray-500",
                },
                {
                  year: "2023",
                  title: "Designer Indépendant",
                  subtitle: "Prestataire de services numériques",
                  color: "bg-gray-600",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 + 0.4 }}
                  className="relative"
                >
                  <motion.span
                    whileHover={{ scale: 1.5 }}
                    className={`absolute -left-[39px] top-1 h-5 w-5 rounded-full border-4 border-brand-navy ${item.color} shadow-md transition-transform`}
                  ></motion.span>
                  <span className="text-gray-500 font-bold font-mono text-sm block mb-1">
                    {item.year}
                  </span>
                  <h4 className="text-lg font-bold text-white">{item.title}</h4>
                  <p className="text-gray-400 text-sm">{item.subtitle}</p>
                  {item.extra && (
                    <p className="text-gray-500 text-xs mt-1">{item.extra}</p>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
