"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function CTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" className="py-20 md:py-28 px-4 sm:px-6 lg:px-8">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-5xl mx-auto rounded-3xl bg-gradient-brand p-10 md:p-16 text-center relative overflow-hidden"
      >
        {/* Decorative orbs */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

        <div className="relative z-10">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Prêt à lancer votre projet ?
          </h2>
          <p className="font-body text-base md:text-lg text-white/80 max-w-xl mx-auto mb-8">
            Obtenez un devis gratuit en 24h. Pas d&apos;engagement, pas de surprise.
          </p>

          <a
            href="mailto:nexorastudio169@gmail.com"
            className="inline-flex items-center px-8 py-3.5 rounded-full bg-white font-body text-base font-semibold text-background transition-transform duration-200 hover:scale-105 hover:shadow-lg mb-8"
          >
            Démarrer maintenant →
          </a>

          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 font-body text-sm text-white/90">
            <span>✓ Réponse en 24h</span>
            <span>✓ Devis gratuit</span>
            <span>✓ Sans engagement</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
