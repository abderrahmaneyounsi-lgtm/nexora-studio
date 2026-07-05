"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { SectionHeader, useStaggerContainer, staggerItem } from "./SectionHeader";

const testimonials = [
  {
    text: "Nexora Studio a transformé notre présence en ligne. Notre landing page a augmenté nos réservations de 40% en un mois !",
    name: "Sophie Martin",
    role: "Gérante, Café Lumière — Paris",
    initials: "SM",
  },
  {
    text: "Travail impeccable, livré en 4 jours. Le design est exactement ce que je voulais, moderne et professionnel.",
    name: "Lucas Bernard",
    role: "Fondateur, Éclat Paris",
    initials: "LB",
  },
  {
    text: "Très réactif, à l'écoute et compétent. Je recommande Nexora Studio sans hésitation pour tout projet web.",
    name: "Marie Dupont",
    role: "Directrice, Cabinet Juridique Martin",
    initials: "MD",
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const containerVariants = useStaggerContainer(0.15);

  return (
    <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-card/30">
      <div className="max-w-7xl mx-auto">
        <SectionHeader title="Ce que disent nos clients" />

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.name}
              variants={staggerItem}
              className="bg-card border border-border rounded-2xl p-6 md:p-8 transition-all duration-300 hover:border-primary/40 hover:shadow-[0_0_40px_rgba(124,58,237,0.1)]"
            >
              <div className="text-lg mb-4 tracking-wider">⭐⭐⭐⭐⭐</div>
              <p className="font-body text-sm md:text-base text-text-secondary leading-relaxed mb-6 italic">
                &ldquo;{testimonial.text}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-brand flex items-center justify-center font-body text-sm font-semibold text-white shrink-0">
                  {testimonial.initials}
                </div>
                <div>
                  <div className="font-body text-sm font-semibold text-text-primary">
                    {testimonial.name}
                  </div>
                  <div className="font-body text-xs text-text-secondary">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
