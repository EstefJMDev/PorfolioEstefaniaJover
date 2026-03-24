import { motion } from 'framer-motion';
import { Code2, Heart, ArrowUp } from 'lucide-react';
import { scrollToHashSection } from '@/lib/scroll';

const footerLinks = [
  {
    title: 'Navegación',
    links: [
      { label: 'Inicio', href: '#hero' },
      { label: 'Sobre Mí', href: '#about' },
      { label: 'Proyectos', href: '#projects' },
      { label: 'Habilidades', href: '#skills' },
      { label: 'Contacto', href: '#contact' },
    ],
  },
  {
    title: 'Servicios',
    links: [
      { label: 'Desarrollo Móvil', href: '#contact' },
      { label: 'Desarrollo Web', href: '#contact' },
      { label: 'Consultoría', href: '#contact' },
      { label: 'UI/UX Design', href: '#contact' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacidad', href: '/legal/privacidad.html' },
      { label: 'Términos', href: '/legal/terminos.html' },
      { label: 'Cookies', href: '/legal/cookies.html' },
    ],
  },
];

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      scrollToHashSection(href);
    }
  };

  return (
    <footer className="relative py-16 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent" />
      <div className="absolute inset-0 grid-pattern opacity-50" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <motion.a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#hero');
              }}
              className="flex items-center gap-2 mb-6 group"
              whileHover={{ scale: 1.02 }}
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#5174FF] to-[#9B7BFF] flex items-center justify-center">
                <Code2 className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-xl">Estefanía Jover</span>
            </motion.a>
            <p className="text-slate-400 mb-6 max-w-sm">
              Estudiante de DAM en prácticas, apasionada por el desarrollo móvil 
              y la creación de soluciones tecnológicas innovadoras.
            </p>
            
            {/* Back to Top */}
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700 hover:border-[#5174FF]/50 hover:bg-[#5174FF]/10 transition-all text-sm text-slate-400 hover:text-white"
            >
              <ArrowUp className="w-4 h-4" />
              Volver arriba
            </motion.button>
          </div>

          {/* Links */}
          {footerLinks.map((group, groupIndex) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: groupIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="font-semibold text-white mb-4">{group.title}</h3>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={(e) => {
                        if (link.href.startsWith('#')) {
                          e.preventDefault();
                          scrollToSection(link.href);
                        }
                      }}
                      className="text-slate-400 hover:text-[#5174FF] transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent mb-8" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm text-center md:text-left">
            © {new Date().getFullYear()} Estefanía Jover. Todos los derechos reservados.
          </p>
          <p className="text-slate-500 text-sm flex items-center gap-1">
            Hecho con <Heart className="w-4 h-4 text-red-500 fill-red-500" /> y mucho café
          </p>
        </div>
      </div>
    </footer>
  );
}
