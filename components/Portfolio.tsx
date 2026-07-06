"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { SectionHeader, useStaggerContainer, staggerItem } from "./SectionHeader";

const projects = [
  {
    tag: "Landing Page",
    title: "Café Lumière",
    description:
      "Landing page pour un café parisien — réservations en ligne, menu digital et ambiance chaleureuse.",
    tech: ["React", "Tailwind", "Vercel"],
    gradient: "from-amber-500 via-orange-500 to-yellow-600",
    link: "https://cafe-lumiere.vercel.app",
  },
  {
    tag: "Boutique en ligne",
    title: "Éclat Paris",
    description:
      "Landing page e-commerce pour une boutique de mode parisienne — collection, promotions et newsletter.",
    tech: ["Next.js", "Tailwind", "Stripe"],
    gradient: "from-rose-400 via-pink-500 to-amber-400",
    link: "https://eclat-paris.vercel.app",
  },
  {
    tag: "Site Vitrine",
    title: "Cabinet Juridique Martin",
    description:
      "Site vitrine 5 pages pour un cabinet d'avocats — sobre, professionnel et optimisé SEO.",
    tech: ["Next.js", "Tailwind", "SEO"],
    gradient: "from-blue-600 via-indigo-700 to-slate-800",
    link: "https://nexora-studio-qoyv.vercel.app/",
  },
];
export default function Portfolio() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const containerVariants = useStaggerContainer(0.15);

  return (
    <section id="portfolio" className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-card/30">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title="Nos Réalisations"
          subtitle="Des projets concrets, des résultats réels"
        />

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project) => (
            <motion.article
              key={project.title}
              variants={staggerItem}
              className="group bg-card border border-border rounded-2xl overflow-hidden transition-all duration-300 hover:border-primary/40 hover:shadow-[0_0_40px_rgba(124,58,237,0.15)]"
            >
              {/* Gradient placeholder image */}
              <div
                className={`h-48 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}
              >
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
              </div>

              <div className="p-6">
                <span className="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/20 font-body text-xs text-primary mb-3">
                  {project.tag}
                </span>
                <h3 className="font-heading text-xl font-semibold text-text-primary mb-2">
                  {project.title}
                </h3>
                <p className="font-body text-sm text-text-secondary leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-md bg-background border border-border font-body text-xs text-text-secondary"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center font-body text-sm font-semibold text-primary hover:text-secondary transition-colors duration-200 group/link"
>
  Voir le projet
  <span className="ml-1 transition-transform duration-200 group-hover/link:translate-x-1">
    →
  </span>
</a>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
