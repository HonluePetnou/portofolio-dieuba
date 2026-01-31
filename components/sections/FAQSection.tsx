"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "Dans quels secteurs d'activité avez-vous de l'expérience ?",
    answer:
      "J'ai accompagné des structures variées allant de la Haute Couture (NSS) et l'événementiel (Funify) jusqu'aux ONG (HMA4S.ATE) et la Haute Finance (Elite Trading). Mon approche s'adapte à tout secteur exigeant une stratégie de marque forte.",
  },
  {
    question: "Puis-je télécharger votre CV pour plus d'informations ?",
    answer:
      "Absolument. Un bouton dédié dans la section 'À Propos' vous permet de télécharger mon parcours détaillé, incluant mes diplômes académiques et mes réussites.",
  },
  {
    question: "Êtes-vous disponible pour des missions en Freelance ?",
    answer:
      "Oui, j'accepte des mandats stratégiques en freelance pour des projets ambitieux nécessitant un audit complet, du branding ou une stratégie marketing 360°.",
  },
  {
    question: "Quels outils utilisez-vous pour vos stratégies et designs ?",
    answer:
      "Je maîtrise un écosystème complet : Figma (UI/UX), la suite Adobe (Branding), Meta Ads (Performance), ainsi que Webflow et WordPress pour le développement web.",
  },
  {
    question: "Comment se déroule la collaboration sur un projet ?",
    answer:
      "Chaque projet suit mon processus rigoureux : Diagnostic (Audit des besoins), Stratégie (Plan d'action), et Déploiement (Exécution créative et technique) pour transformer votre vision en moteur de croissance.",
  },
  {
    question:
      "Quelle est la différence entre un designer classique et un Creative Strategist ?",
    answer:
      "Là où un designer se concentre sur l'esthétique, je me définis comme un architecte de solutions. Mon travail fusionne le design d'impact avec l'intelligence des données pour un objectif business concret.",
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 bg-brand-navy" id="faq">
      <div className="container mx-auto px-8 md:px-24 lg:px-40">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <span className="text-brand-orange font-bold uppercase tracking-wider text-sm border-b-2 border-brand-orange pb-1">
            FAQ
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mt-4">
            Questions <span className="text-brand-orange">Fréquentes</span>
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-white/10 rounded-2xl overflow-hidden hover:border-brand-orange/30 transition-colors bg-white shadow-xl"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
              >
                <span
                  className={`font-bold text-lg ${openIndex === index ? "text-brand-orange" : "text-brand-navy"}`}
                >
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <Minus className="text-brand-orange shrink-0" />
                ) : (
                  <Plus className="text-gray-400 shrink-0" />
                )}
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? "max-h-48" : "max-h-0"
                }`}
              >
                <p className="px-6 pb-6 text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
