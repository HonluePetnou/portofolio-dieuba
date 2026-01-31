"use client";

import { motion } from "framer-motion";
import { Download } from "lucide-react";
import Image from "next/image";

export function AboutSection() {
  return (
    <section
      className="bg-white py-20 text-brand-navy relative overflow-hidden"
      id="about"
    >
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-orange/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-blue/10 rounded-full blur-[100px]" />

      <div className="container mx-auto px-8 md:px-24 lg:px-40 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content - Bio */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <span className="text-brand-orange font-bold uppercase tracking-wider mb-2 block text-sm">
                L'Architecte derrière le Projet
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold leading-tight text-brand-navy">
                Plus qu'un créatif : un{" "}
                <span className="text-gradient">stratège</span> au service de
                votre entreprise
              </h2>
            </div>

            <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
              <p>
                Co-fondateur de{" "}
                <strong className="text-brand-navy">Soluty Agency</strong>,
                j’évolue à l’intersection précise entre le design d’impact, la
                stratégie marketing et l’intelligence des données. Mon approche
                est celle d’un Lead Creative Strategist qui refuse le hasard :
                chaque concept créatif que je déploie est une réponse directe à
                un défi business, de la création à la croissance d’entreprise.
              </p>
              <p>
                Plus qu'un créatif, je me définis comme un architecte de
                solutions technologiques innovantes. La différence réside dans
                ma capacité à parler le langage des ingénieurs (code), des
                créatifs (design) et des managers (stratégie).
              </p>
              <p className="border-l-4 border-brand-orange pl-6 py-2 italic text-gray-700 bg-gray-50 rounded-r-lg">
                "Je ne me contente pas de rendre votre entreprise visible ; je
                la rends performante."
              </p>
            </div>

            <div className="pt-4">
              <a
                href="/cv-fredy-dieuba.pdf"
                target="_blank"
                className="inline-flex items-center gap-2 bg-brand-orange text-white px-8 py-3.5 rounded-full hover:bg-brand-navy transition-all font-bold shadow-lg shadow-brand-orange/20"
              >
                Télécharger mon CV <Download size={18} />
              </a>
            </div>
          </motion.div>

          {/* Right Content - Stats & Visual */}
          <div className="grid grid-cols-1 gap-6">
            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative w-72 mx-auto aspect-5/5 rounded-b-full overflow-hidden glass-card border border-gray-200 shadow-2xl"
            >
              <Image
                src="/Branding-images/03dnvf-hd.png"
                alt="Fredy Dieuba Profile"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500 object-top"
              />
              <div className="absolute inset-0 bg-linear-to-t from-brand-navy/60 to-transparent opacity-60"></div>
            </motion.div>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="p-6 rounded-2xl bg-brand-navy border border-brand-navy shadow-lg"
              >
                <div className="text-4xl font-bold text-brand-orange mb-2">
                  8+
                </div>
                <div className="text-sm text-white font-medium">
                  Agences & ONG
                  <br />
                  accompagnées
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="p-6 rounded-2xl bg-brand-navy border border-brand-navy shadow-lg"
              >
                <div className="text-4xl font-bold text-brand-blue mb-2">
                  15+
                </div>
                <div className="text-sm text-white font-medium">
                  Identités visuelles
                  <br />
                  créées
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="p-8 rounded-2xl bg-gray-50 border border-gray-100 text-center shadow-md"
            >
              <div className="text-6xl font-black text-transparent bg-clip-text bg-linear-to-r from-brand-navy to-brand-blue mb-2">
                100%
              </div>
              <div className="text-xl font-bold text-brand-navy uppercase tracking-widest">
                Engagé pour votre croissance
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
