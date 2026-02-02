"use client";

import { motion } from "framer-motion";

const tools = [
  { name: "Figma (UI/UX)", percentage: 60, color: "bg-brand-orange" },
  { name: "Canva", percentage: 90, color: "bg-brand-blue" },
  { name: "Wordpress & Elementor", percentage: 85, color: "bg-brand-navy" },
  { name: "N8N", percentage: 50, color: "bg-brand-orange" },
  { name: "MERN stack", percentage: 60, color: "bg-brand-blue" },
  { name: "Adobe Suite", percentage: 60, color: "bg-brand-navy" },
  { name: "Meta Ads & Google Ads", percentage: 90, color: "bg-brand-orange" },
  { name: "CapCut", percentage: 95, color: "bg-brand-blue" },
  { name: "Metricool", percentage: 95, color: "bg-brand-navy" },
];

export function ToolsSection() {
  return (
    <section className="py-20 bg-white" id="tools">
      <div className="container mx-auto px-8 md:px-24 lg:px-40">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-brand-navy">
            Ma Maîtrise <span className="text-brand-orange">Technique</span>
          </h2>
          <p className="text-gray-500 mt-2">Mes outils de prédilection</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tools.map((tool, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.1,
                duration: 0.5,
                ease: [0.21, 0.47, 0.32, 0.98],
              }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-gray-50 p-6 rounded-2xl shadow-sm hover:shadow-xl hover:bg-white transition-all duration-300 group"
            >
              <div className="flex justify-between items-center mb-4">
                <span className="font-bold text-brand-navy text-lg group-hover:text-brand-orange transition-colors">
                  {tool.name}
                </span>
                <span className="font-bold text-brand-orange">
                  {tool.percentage}%
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden shadow-inner">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${tool.percentage}%` }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 1.5,
                    delay: 0.5 + index * 0.1,
                    ease: "easeOut",
                  }}
                  className={`h-full rounded-full ${tool.color} relative overflow-hidden`}
                >
                  <motion.div
                    animate={{ x: ["-100%", "100%"] }}
                    transition={{
                      repeat: Infinity,
                      duration: 2,
                      ease: "linear",
                    }}
                    className="absolute inset-0 bg-white/20 skew-x-[-20deg]"
                  />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
