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
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-gray-50 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex justify-between items-center mb-4">
                <span className="font-bold text-brand-navy text-lg">
                  {tool.name}
                </span>
                <span className="font-bold text-brand-orange">
                  {tool.percentage}%
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${tool.percentage}%` }}
                  transition={{ duration: 1, delay: 0.2 }}
                  className={`h-full rounded-full ${tool.color}`}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
