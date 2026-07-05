"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { SectionHeader, useStaggerContainer, staggerItem } from "./SectionHeader";

const services = [
  {
    icon: "🎯",
    title: "Landing Page",
    description:
      "Une page percutante qui transforme vos visiteurs en clients. Design moderne, optimisée pour la conversion et le SEO.",
    price: "À partir de 150€",
  },
  {
    icon: "🌐",
    title: "Site Vitrine",
    description:
      "Un site complet 3 à 5 pages pour présenter votre activité professionnellement et inspirer confiance.",
    price: "À partir de 300€",
  },
  {
    icon: "⚡",
    title: "Site E-commerce",
    description:
      "Boutique en ligne complète avec catalogue produits, panier et paiement sécurisé intégré.",
    price: "À partir de 500€",
  },
  {
    icon: "🔧",
    title: "Maintenance & SEO",
    description:
      "Mises à jour régulières, optimisation des performances et référencement naturel pour rester visible.",
    price: "À partir de 50€/mois",
  },
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const containerVariants = useStaggerContainer(0.15);

  return (
    <section id="services" className="py-20 md:py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title="Nos Services"
          subtitle="Tout ce dont vous avez besoin pour briller en ligne"
        />

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={staggerItem}
              className="group relative bg-card border border-border rounded-2xl p-6 md:p-8 transition-all duration-300 hover:border-primary/40 hover:shadow-[0_0_40px_rgba(124,58,237,0.15)]"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="font-heading text-xl md:text-2xl font-semibold text-text-primary mb-3">
                {service.title}
              </h3>
              <p className="font-body text-sm md:text-base text-text-secondary leading-relaxed mb-6">
                {service.description}
              </p>
              <span className="inline-block px-4 py-1.5 rounded-full bg-gradient-brand font-body text-sm font-semibold text-white">
                {service.price}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
