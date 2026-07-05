import { FaWhatsapp } from "react-icons/fa";
import { HiMail } from "react-icons/hi";

const footerLinks = [
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "À propos", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-card/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#" className="inline-flex items-center gap-1 font-heading text-xl font-bold mb-4">
              <span className="gradient-text">Nexora</span>
              <span className="text-text-primary">Studio</span>
            </a>
            <p className="font-body text-sm text-text-secondary leading-relaxed max-w-sm">
              Nous créons des sites web modernes pour les entreprises qui veulent
              se démarquer.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-heading text-sm font-semibold text-text-primary mb-4 uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-body text-sm text-text-secondary hover:text-text-primary transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-sm font-semibold text-text-primary mb-4 uppercase tracking-wider">
              Contact
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:nexorastudio169@gmail.com"
                  className="inline-flex items-center gap-2 font-body text-sm text-text-secondary hover:text-text-primary transition-colors duration-200"
                >
                  <HiMail className="text-primary shrink-0" />
                  nexorastudio169@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/213676072541"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-body text-sm text-text-secondary hover:text-text-primary transition-colors duration-200"
                >
                  <FaWhatsapp className="text-primary shrink-0" />
                  +213 0676072541
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-border text-center">
          <p className="font-body text-xs text-text-secondary">
            © 2025 Nexora Studio. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
