"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "15+", label: "Projets livrés" },
  { value: "100%", label: "Clients satisfaits" },
  { value: "3-5j", label: "Délai moyen" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-50" />

      {/* Floating gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 md:w-96 md:h-96 rounded-full bg-primary/20 blur-3xl animate-float pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 md:w-80 md:h-80 rounded-full bg-secondary/20 blur-3xl animate-float-delayed pointer-events-none" />
      <div className="absolute top-1/2 right-1/3 w-48 h-48 md:w-64 md:h-64 rounded-full bg-primary/10 blur-3xl animate-float-slow pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card/50 backdrop-blur-sm mb-8"
        >
          <span className="text-primary text-sm">✦</span>
          <span className="font-body text-sm text-text-secondary">
            Développeur Web Freelance
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-[72px] font-bold leading-tight mb-6"
        >
          <span className="gradient-text">On Crée Des Sites Web</span>
          <br />
          <span className="gradient-text">Qui Font La Différence</span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="font-body text-base md:text-lg text-text-secondary max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Nexora Studio conçoit des landing pages et sites vitrines modernes pour
          les entreprises ambitieuses. Design soigné, code propre, résultats
          mesurables.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <a
            href="#portfolio"
            className="inline-flex items-center px-8 py-3.5 rounded-full bg-gradient-brand font-body text-base font-semibold text-white transition-transform duration-200 hover:scale-105 glow-violet-hover"
          >
            Voir nos projets
          </a>
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-3.5 rounded-full border border-border font-body text-base font-semibold text-text-primary transition-all duration-200 hover:border-primary/50 hover:scale-105"
          >
            Nous contacter
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="flex flex-wrap items-center justify-center gap-8 md:gap-16"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-heading text-2xl md:text-3xl font-bold gradient-text mb-1">
                {stat.value}
              </div>
              <div className="font-body text-sm text-text-secondary">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
