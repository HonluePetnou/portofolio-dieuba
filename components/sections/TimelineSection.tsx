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
            className="space-y-8"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-xl bg-white text-brand-navy flex items-center justify-center shadow-lg">
                <GraduationCap size={24} />
              </div>
              <h3 className="text-2xl font-bold text-white">Éducation</h3>
            </div>

            <div className="space-y-8 relative pl-8 border-l-2 border-white/10">
              {/* 2026 */}
              <div className="relative">
                <span className="absolute -left-[39px] top-1 h-5 w-5 rounded-full border-4 border-brand-navy bg-brand-orange shadow-md"></span>
                <span className="text-brand-orange font-bold font-mono text-sm block mb-1">
                  2026
                </span>
                <h4 className="text-lg font-bold text-white">
                  Analyste des Affaires & TI
                </h4>
                <p className="text-gray-400 text-sm">
                  Yaoundé Higher School of Economics and Management (YSEM)
                </p>
              </div>

              {/* 2025 */}
              <div className="relative">
                <span className="absolute -left-[39px] top-1 h-5 w-5 rounded-full border-4 border-brand-navy bg-white shadow-md"></span>
                <span className="text-white font-bold font-mono text-sm block mb-1">
                  2025
                </span>
                <h4 className="text-lg font-bold text-white">
                  Economie & Gestion
                </h4>
                <p className="text-gray-400 text-sm">
                  Yaoundé Higher School of Economics and Management (YSEM)
                </p>
              </div>

              {/* 2023 */}
              <div className="relative">
                <span className="absolute -left-[39px] top-1 h-5 w-5 rounded-full border-4 border-brand-navy bg-gray-500 shadow-md"></span>
                <span className="text-gray-400 font-bold font-mono text-sm block mb-1">
                  2023
                </span>
                <h4 className="text-lg font-bold text-white">Baccalauréat D</h4>
                <p className="text-gray-400 text-sm">
                  Lycée Classique de Bangangté
                </p>
              </div>
            </div>

            <div className="bg-white/5 p-6 rounded-2xl italic text-gray-300 text-sm border-l-4 border-brand-orange">
              "Mon parcours n'est pas qu'une suite de diplômes : c'est
              l'évolution où j’ai compris que la technologie est le levier de
              croissance le plus puissant pour l'entreprise moderne."
            </div>
          </motion.div>

          {/* Experience Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-xl bg-brand-orange text-white flex items-center justify-center shadow-lg">
                <Briefcase size={24} />
              </div>
              <h3 className="text-2xl font-bold text-white">Expériences</h3>
            </div>

            <div className="space-y-8 relative pl-8 border-l-2 border-white/10">
              {/* 2026 */}
              <div className="relative">
                <span className="absolute -left-[39px] top-1 h-5 w-5 rounded-full border-4 border-brand-navy bg-brand-orange shadow-md"></span>
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
              </div>

              {/* 2025 */}
              <div className="relative">
                <span className="absolute -left-[39px] top-1 h-5 w-5 rounded-full border-4 border-brand-navy bg-white shadow-md"></span>
                <span className="text-white font-bold font-mono text-sm block mb-1">
                  2025
                </span>
                <h4 className="text-lg font-bold text-white">
                  Freelance & Entrepreneur
                </h4>
                <p className="text-gray-400 text-sm">
                  Soluty, Funify, HMA4S.ATE
                </p>
                <p className="text-gray-500 text-xs mt-1">
                  Stage Académique NOFIA SA
                </p>
              </div>

              {/* 2024 */}
              <div className="relative">
                <span className="absolute -left-[39px] top-1 h-5 w-5 rounded-full border-4 border-brand-navy bg-gray-500 shadow-md"></span>
                <span className="text-gray-500 font-bold font-mono text-sm block mb-1">
                  2024
                </span>
                <h4 className="text-lg font-bold text-white">
                  Freelance Marketing & Design
                </h4>
                <p className="text-gray-400 text-sm">
                  NSS, New Solution Style, NR Fashion
                </p>
              </div>

              {/* 2023 */}
              <div className="relative">
                <span className="absolute -left-[39px] top-1 h-5 w-5 rounded-full border-4 border-brand-navy bg-gray-600 shadow-md"></span>
                <span className="text-gray-500 font-bold font-mono text-sm block mb-1">
                  2023
                </span>
                <h4 className="text-lg font-bold text-white">
                  Designer Indépendant
                </h4>
                <p className="text-gray-400 text-sm">
                  Prestataire de services numériques
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
