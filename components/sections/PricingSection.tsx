"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Pack IDENTITY",
    subtitle: "L'Essentiel Stratégique",
    price: "85 000 FCFA",
    usd: "$145 (One-shot)",
    description: "L'offre Quick Start pour exister avec autorité.",
    features: [
      "Audit de Marque & Positionnement",
      "Identité Visuelle Signature",
      "Kit Social Media Ready",
      "Consultation Stratégique (1h30)",
      "Support & Conseil (15 jours)",
    ],
    highlight: false,
    color: "bg-white",
    textColor: "text-brand-navy",
    buttonVariant: "outline",
  },
  {
    name: "Pack ACCELERATOR",
    subtitle: "La Performance Continue",
    price: "150 000 FCFA",
    usd: "300k+ / mois",
    description: "Le moteur de votre croissance digitale au quotidien.",
    features: [
      "Gestion Social Media & Ads",
      "Stratégie de Contenu 'DUR'",
      "Optimisation & Reporting Mensuel",
      "Design de Campagne Illimité",
      "Lead Creative Management",
    ],
    highlight: true,
    tag: "Best-seller",
    color: "bg-brand-navy",
    textColor: "text-white",
    buttonVariant: "solid",
  },
  {
    name: "Pack ECOSYSTEM",
    subtitle: "L'Infrastructure de Leader",
    price: "Dès 320 000 FCFA",
    usd: "500K+ / projet",
    description: "La transformation 360° pour dominer votre secteur.",
    features: [
      "Architecture Web & Transformation",
      "Branding Institutionnel Complet",
      "Système d'Automatisation (CRM)",
      "Accompagnement VIP (Co-fondateur)",
      "Stratégie de Lancement 360°",
    ],
    highlight: false,
    color: "bg-white",
    textColor: "text-brand-navy",
    buttonVariant: "outline",
  },
];

export function PricingSection() {
  return (
    <section className="py-20 bg-gray-50" id="pricing">
      <div className="container mx-auto px-8 md:px-24 lg:px-40">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="text-brand-orange font-bold uppercase tracking-wider text-sm border-b-2 border-brand-orange pb-1">
            Investissements Rentables
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-brand-navy mt-4">
            My Business <span className="text-gradient">Impact</span> Models
          </h2>
          <p className="text-gray-500 mt-2 max-w-2xl mx-auto">
            Trois niveaux d'intervention pour transformer votre potentiel en
            performance mesurable.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative rounded-3xl p-8 border ${
                plan.highlight
                  ? "border-brand-navy shadow-2xl scale-105 z-10"
                  : "border-gray-200 shadow-lg hover:shadow-xl"
              } ${plan.color} transition-all duration-300`}
            >
              {plan.highlight && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-orange text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg">
                  {plan.tag}
                </div>
              )}

              <div className="mb-6">
                <h3
                  className={`text-xl font-bold ${plan.highlight ? "text-white" : "text-brand-navy"}`}
                >
                  {plan.name}
                </h3>
                <p
                  className={`text-sm font-medium opacity-80 ${plan.highlight ? "text-gray-300" : "text-brand-orange"}`}
                >
                  {plan.subtitle}
                </p>
              </div>

              <div className="mb-6">
                <div
                  className={`text-3xl font-bold ${plan.highlight ? "text-white" : "text-brand-navy"}`}
                >
                  {plan.price}
                </div>
                <div
                  className={`text-sm ${plan.highlight ? "text-gray-300" : "text-gray-500"}`}
                >
                  {plan.usd}
                </div>
              </div>

              <p
                className={`text-sm mb-8 leading-relaxed ${plan.highlight ? "text-gray-300" : "text-gray-600"}`}
              >
                {plan.description}
              </p>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div
                      className={`mt-0.5 w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${
                        plan.highlight
                          ? "bg-brand-orange text-white"
                          : "bg-brand-navy/10 text-brand-navy"
                      }`}
                    >
                      <Check size={12} />
                    </div>
                    <span
                      className={`text-sm ${plan.highlight ? "text-gray-200" : "text-gray-600"}`}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 rounded-full font-bold transition-all ${
                  plan.highlight
                    ? "bg-white text-brand-navy hover:bg-brand-orange hover:text-white"
                    : "bg-brand-navy text-white hover:bg-brand-orange"
                }`}
              >
                Choisir ce Pack
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
