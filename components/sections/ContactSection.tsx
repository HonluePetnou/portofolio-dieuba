"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Instagram, Linkedin, Send } from "lucide-react";
import Image from "next/image";

export function ContactSection() {
  return (
    <section className="py-20 bg-white" id="contact">
      <div className="container mx-auto px-8 md:px-24 lg:px-40">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Side - Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            <div>
              <motion.span
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="text-brand-orange font-bold uppercase tracking-wider text-sm border-b-2 border-brand-orange pb-1"
              >
                Contact
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-4xl font-bold text-brand-navy mt-4 mb-4"
              >
                Let's Talk for Your <br />
                <span className="text-gradient animate-shimmer">
                  Next Project
                </span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-gray-600 text-lg"
              >
                Prêt à libérer votre potentiel ? Travaillons ensemble pour
                propulser votre marque vers de nouveaux sommets.
              </motion.p>
            </div>

            <div className="space-y-6">
              {[
                {
                  icon: <MapPin size={20} />,
                  title: "Localisation",
                  detail: "Douala / Yaoundé, Cameroun",
                },
                {
                  icon: <Phone size={20} />,
                  title: "WhatsApp",
                  detail: "+237 677 40 55 62",
                },
                {
                  icon: <Mail size={20} />,
                  title: "Email",
                  detail: "fredydieuba@gmail.com",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-4 group cursor-pointer"
                >
                  <div className="w-12 h-12 bg-brand-navy/5 rounded-full flex items-center justify-center text-brand-navy group-hover:bg-brand-orange group-hover:text-white transition-all duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-navy group-hover:text-brand-orange transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-gray-600">{item.detail}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="pt-8 border-t border-gray-100"
            >
              <h4 className="font-bold text-brand-navy mb-4">Suivez-moi</h4>
              <div className="flex gap-4">
                {[
                  { icon: <Linkedin size={18} />, href: "#" },
                  { icon: <Instagram size={18} />, href: "#" },
                ].map((social, i) => (
                  <motion.a
                    key={i}
                    href={social.href}
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 rounded-full bg-brand-navy text-white flex items-center justify-center hover:bg-brand-orange transition-colors shadow-md"
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="bg-gray-50 rounded-3xl p-8 border border-gray-100 shadow-xl"
          >
            <form className="space-y-6">
              {[
                {
                  label: "Nom Complet",
                  type: "text",
                  placeholder: "Votre nom",
                },
                {
                  label: "Email",
                  type: "email",
                  placeholder: "votre@email.com",
                },
              ].map((field, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="space-y-2"
                >
                  <label className="text-sm font-bold text-brand-navy">
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    placeholder={field.placeholder}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 outline-none transition-all shadow-sm"
                  />
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="space-y-2"
              >
                <label className="text-sm font-bold text-brand-navy">
                  Objet / Pack
                </label>
                <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 outline-none transition-all bg-white shadow-sm">
                  <option>Sélectionnez un sujet</option>
                  <option>Pack IDENTITY</option>
                  <option>Pack ACCELERATOR</option>
                  <option>Pack ECOSYSTEM</option>
                  <option>Autre demande</option>
                </select>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="space-y-2"
              >
                <label className="text-sm font-bold text-brand-navy">
                  Message
                </label>
                <textarea
                  rows={4}
                  placeholder="Parlez-moi de votre projet..."
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 outline-none transition-all resize-none shadow-sm"
                />
              </motion.div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-brand-orange text-white font-bold py-4 rounded-xl hover:bg-brand-navy transition-all flex items-center justify-center gap-2 shadow-lg shadow-brand-orange/20 hover:shadow-brand-navy/30"
              >
                Démarrer mon projet sur WhatsApp <Send size={18} />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
