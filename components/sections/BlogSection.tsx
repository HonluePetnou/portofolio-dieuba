"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const articles = [
  {
    title: "Transformation Digitale : Pourquoi 90% des PME échouent",
    description:
      "Numériser une entreprise, ce n'est pas juste créer une page Facebook, c'est repenser tout le processus de vente.",
    tags: ["Stratégie", "Business"],
  },
  {
    title: "Le Design n'est pas une dépense, c'est un actif",
    description:
      "Comment une identité visuelle cohérente réduit le coût d'acquisition client et augmente la valeur perçue de l'offre.",
    tags: ["Branding", "ROI"],
  },
  {
    title: "Marketing de Précision : Arrêtez de deviner",
    description:
      "Avec des outils comme Metricool et Meta Ads, l'analyse des comportements clients permet de piloter une croissance prévisible.",
    tags: ["Data", "Marketing"],
  },
  {
    title: "L'Architecture de Solution",
    description:
      "Pourquoi l'isolation de vos outils digitaux tue votre productivité et comment l'intégration totale change la donne.",
    tags: ["Tech", "Automatisation"],
  },
  {
    title: "Le Leader Créatif",
    description:
      "Comment incarner l'autorité dans votre secteur pour attirer les opportunités sans les chasser.",
    tags: ["Leadership", "Personal Branding"],
  },
];

export function BlogSection() {
  return (
    <section className="py-20 bg-brand-navy" id="blogs">
      <div className="container mx-auto px-8 md:px-24 lg:px-40">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <span className="text-brand-orange font-bold uppercase tracking-wider text-sm border-b-2 border-brand-orange pb-1">
            - Blog & Insights
          </span>
          <h2 className="text-4xl font-bold text-white mt-4">
            Dernières <span className="text-gradient">Réflexions</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100 p-6 flex flex-col items-start"
            >
              <div className="flex gap-2 mb-4">
                {article.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-xs font-bold text-brand-orange bg-brand-orange/10 px-2 py-1 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="text-xl font-bold text-brand-navy mb-3 group-hover:text-brand-orange transition-colors">
                {article.title}
              </h3>
              <p className="text-gray-600 text-sm mb-6 leading-relaxed grow">
                {article.description}
              </p>

              <a
                href="#"
                className="flex items-center gap-2 text-brand-navy font-bold text-sm hover:gap-3 transition-all mt-auto"
              >
                Lire l'article <ArrowRight size={16} />
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
