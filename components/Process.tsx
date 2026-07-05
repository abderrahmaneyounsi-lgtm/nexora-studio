"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { SectionHeader, useStaggerContainer, staggerItem } from "./SectionHeader";

const steps = [
  {
    emoji: "📞",
    title: "Découverte",
    description:
      "On discute de votre projet, vos objectifs et votre budget lors d'un appel gratuit de 30 min.",
  },
  {
    emoji: "🎨",
    title: "Design",
    description:
      "On crée une maquette de votre site sous 48h pour validation avant tout développement.",
  },
  {
    emoji: "⚙️",
    title: "Développement",
    description:
      "On développe votre site en 3 à 5 jours avec des technologies modernes et performantes.",
  },
  {
    emoji: "🚀",
    title: "Livraison",
    description:
      "Mise en ligne, formation et support inclus. Votre site est prêt à convertir.",
  },
];

export default function Process() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const containerVariants = useStaggerContainer(0.15);

  return (
    <section id="process" className="py-20 md:py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title="Comment ça marche ?"
          subtitle="Un processus simple et transparent"
        />

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="relative"
        >
          {/* Timeline line - desktop */}
          <div className="hidden lg:block absolute top-8 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-brand opacity-30" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                variants={staggerItem}
                className="relative text-center lg:text-left"
              >
                {/* Step number circle */}
                <div className="relative z-10 w-16 h-16 mx-auto lg:mx-0 rounded-full bg-card border-2 border-primary flex items-center justify-center text-2xl mb-4">
                  {step.emoji}
                </div>

                <div className="lg:pl-0">
                  <div className="flex items-center justify-center lg:justify-start gap-2 mb-2">
                    <span className="font-heading text-xs font-semibold text-primary">
                      Étape {index + 1}
                    </span>
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-text-primary mb-2">
                    {step.title}
                  </h3>
                  <p className="font-body text-sm text-text-secondary leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
