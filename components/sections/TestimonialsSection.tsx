"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    text: "Fredy a réussi l'impossible : transformer un atelier traditionnel en une marque de luxe digitale. Sa compréhension de la haute couture combinée à sa maîtrise des Meta Ads a propulsé nos ventes dès le premier mois. Un vrai stratège !",
    client: "Mélanie Maya",
    role: "Directrice, New Solution Style",
    company: "NSS",
    logo: "/part-logo/NSSO.png",
  },
  {
    text: "Dans le trading, la confiance est tout. Grâce à l'identité visuelle institutionnelle et au design de nos produits numériques créés par Fredy, notre académie a acquis une crédibilité immédiate sur le marché financier.",
    client: "Noé Ketchakeu",
    role: "Fondateur, Elite Trading",
    company: "Elite Trading",
    logo: "/part-logo/optima-logo.png",
  },
  {
    text: "Porter un message de paix et de développement demande de la clarté. L'audit stratégique et l'architecture digitale de Fredy ont permis à notre ONG d'être enfin audible et visible auprès de nos partenaires internationaux.",
    client: "Njih Hassan",
    role: "Directeur & Fondateur, HMA4S.ATE",
    company: "HMA4S.ATE",
    logo: "/part-logo/HMA4s.ate.jpeg",
  },
  {
    text: "Notre présence sur les réseaux sociaux manquait de cohérence. Fredy a restructuré tout notre marketing digital avec un design social media qui donne faim et qui convertit nos abonnés en clients fidèles.",
    client: "Suzane Back",
    role: "Co-fondatrice, Yummy Parfait",
    company: "Yummy Parfait",
    logo: "/part-logo/TRAVELAS.jpg",
  },
  {
    text: "En tant que co-fondateur, Fredy apporte une vision qui dépasse le design. Sa méthode pour packager nos services d'épanouissement en entreprise a été le levier principal de notre croissance cette année.",
    client: "Wagne Daniel",
    role: "Co-fondateur, Funify Event",
    company: "Funify Event",
    logo: "/part-logo/funify-icon.png",
  },
  {
    text: "La transformation digitale de notre offre de formation a été fluide et sans friction. Fredy ne se contente pas d'exécuter, il anticipe les besoins technologiques de demain. Une expertise rare au Cameroun.",
    client: "Honlue Mussa",
    role: "CEO, Skill Blocks",
    company: "Skill Blocks",
    logo: "/part-logo/NR_fashion.jpg",
  },
];

export function TestimonialsSection() {
  return (
    <section
      className="py-20 bg-gray-50 text-brand-navy relative overflow-hidden"
      id="testimonials"
    >
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-brand-orange/5 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-8 md:px-24 lg:px-40 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="text-brand-orange font-bold uppercase tracking-wider text-sm border-b-2 border-brand-orange pb-1">
            Témoignages
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold mt-6 text-brand-navy">
            Ce qu'en disent les{" "}
            <span className="text-brand-orange">leaders d'entreprise</span>
          </h2>
          <p className="text-gray-600 mt-2 text-lg">
            La preuve par l'impact : Quand la stratégie rencontre la
            performance.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl relative border border-gray-100 shadow-lg hover:shadow-xl hover:border-brand-orange/30 transition-all hover:-translate-y-1"
            >
              <Quote className="text-brand-orange/20 absolute top-4 right-4 w-12 h-12" />

              <div className="mb-6 relative z-10">
                <p className="italic text-gray-600 leading-relaxed text-sm">
                  "{item.text}"
                </p>
              </div>

              <div className="flex items-center gap-3 mt-auto pt-4 border-t border-gray-100">
                <div className="relative w-12 h-12 rounded-lg overflow-hidden bg-white border border-gray-200 flex items-center justify-center p-1">
                  <Image
                    src={item.logo}
                    alt={item.company}
                    fill
                    className="object-contain"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-brand-navy text-sm">
                    {item.client}
                  </h4>
                  <p className="text-brand-orange text-xs">{item.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
