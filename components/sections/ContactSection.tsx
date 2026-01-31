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
            className="space-y-8"
          >
            <div>
              <span className="text-brand-orange font-bold uppercase tracking-wider text-sm border-b-2 border-brand-orange pb-1">
                Contact
              </span>
              <h2 className="text-4xl font-bold text-brand-navy mt-4 mb-4">
                Let's Talk for Your <br />
                <span className="text-gradient">Next Project</span>
              </h2>
              <p className="text-gray-600 text-lg">
                Prêt à libérer votre potentiel ? Travaillons ensemble pour
                propulser votre marque vers de nouveaux sommets.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-brand-navy/5 rounded-full flex items-center justify-center text-brand-navy">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-brand-navy">Localisation</h4>
                  <p className="text-gray-600">Douala / Yaoundé, Cameroun</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-brand-navy/5 rounded-full flex items-center justify-center text-brand-navy">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-brand-navy">WhatsApp</h4>
                  <p className="text-gray-600">+237 677 40 55 62</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-brand-navy/5 rounded-full flex items-center justify-center text-brand-navy">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-brand-navy">Email</h4>
                  <p className="text-gray-600">fredydieuba@gmail.com</p>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-gray-100">
              <h4 className="font-bold text-brand-navy mb-4">Suivez-moi</h4>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-brand-navy text-white flex items-center justify-center hover:bg-brand-orange transition-colors"
                >
                  <Linkedin size={18} />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-brand-navy text-white flex items-center justify-center hover:bg-brand-orange transition-colors"
                >
                  <Instagram size={18} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gray-50 rounded-3xl p-8 border border-gray-100 shadow-lg"
          >
            <form className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-brand-navy">
                  Nom Complet
                </label>
                <input
                  type="text"
                  placeholder="Votre nom"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 outline-none transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-brand-navy">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="votre@email.com"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 outline-none transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-brand-navy">
                  Objet / Pack
                </label>
                <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 outline-none transition-all bg-white">
                  <option>Sélectionnez un sujet</option>
                  <option>Pack IDENTITY</option>
                  <option>Pack ACCELERATOR</option>
                  <option>Pack ECOSYSTEM</option>
                  <option>Autre demande</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-brand-navy">
                  Message
                </label>
                <textarea
                  rows={4}
                  placeholder="Parlez-moi de votre projet..."
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 outline-none transition-all resize-none"
                />
              </div>

              <button className="w-full bg-brand-orange text-white font-bold py-4 rounded-xl hover:bg-brand-navy transition-all flex items-center justify-center gap-2 shadow-lg shadow-brand-orange/20">
                Démarrer mon projet sur WhatsApp <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
