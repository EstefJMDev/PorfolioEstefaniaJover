import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PixelAvatar } from '@/components/PixelAvatar';
import { PixelHeart, PixelStar, PixelCode } from '@/components/PixelDecorations';
import { PROFILE_LINKS } from '@/lib/site-config';
import { scrollToHashSection } from '@/lib/scroll';

const socialLinks = [
  { icon: Github, href: PROFILE_LINKS.github, label: 'GitHub' },
  { icon: Linkedin, href: PROFILE_LINKS.linkedin, label: 'LinkedIn' },
  { icon: Mail, href: PROFILE_LINKS.email, label: 'Correo electrónico' },
];

const codeSnippets = [
  { text: 'const developer = {', delay: 0 },
  { text: '  name: "Estefanía Jover Martínez",', delay: 0.1 },
  { text: '  role: "DAM Student",', delay: 0.2 },
  { text: '  location: "Murcia, España",', delay: 0.3 },
  { text: '};', delay: 0.4 },
];

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 grid-pattern" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-pixel-blue/20 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pixel-purple/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />

      <motion.div
        className="absolute top-32 left-20"
        animate={{ y: [0, -15, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      >
        <PixelStar color="#FFF07F" />
      </motion.div>

      <motion.div
        className="absolute top-40 right-32"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
      >
        <PixelHeart color="#FF7BA3" />
      </motion.div>

      <motion.div
        className="absolute bottom-40 left-32"
        animate={{ x: [0, 10, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      >
        <PixelCode color="#7FFFD4" />
      </motion.div>

      <motion.div
        className="absolute top-1/3 right-20 w-4 h-4 bg-pixel-blue"
        animate={{ opacity: [0.3, 0.8, 0.3], scale: [1, 1.2, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-1/3 left-16 w-3 h-3 bg-pixel-purple"
        animate={{ opacity: [0.3, 0.8, 0.3], scale: [1, 1.2, 1] }}
        transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
      />
      <motion.div
        className="absolute top-20 right-1/3 w-2 h-2 bg-pixel-mint"
        animate={{ opacity: [0.3, 0.8, 0.3], y: [0, -10, 0] }}
        transition={{ duration: 3, repeat: Infinity, delay: 0.8 }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center mb-8 lg:hidden"
        >
          <PixelAvatar size={200} />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 lg:space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pixel-mint-10 border border-pixel-mint-20 text-pixel-mint text-sm">
                <span className="w-2 h-2 bg-pixel-mint animate-pulse" />
                En prácticas de desarrollo
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
            >
              Estefanía Jover{' '}
              <span className="gradient-text">Martínez</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-slate-400 max-w-lg"
            >
              Estudiante de Desarrollo de Aplicaciones Multiplataforma con experiencia
              reciente en soporte técnico y desarrollo Android con Kotlin, consumo de
              APIs REST/JSON y trabajo en entornos Linux y contenedores.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <Button
                size="lg"
                onClick={() => scrollToHashSection('#projects')}
                className="bg-gradient-to-r from-pixel-blue to-pixel-purple hover:shadow-lg hover:shadow-pixel-blue/30 transition-shadow rounded-full px-8"
              >
                Ver Proyectos
                <ArrowDown className="ml-2 w-4 h-4" />
              </Button>

              <a
                href="/cv-estefania-jover-martinez.pdf"
                download
                className="inline-flex"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="border-slate-700 hover:bg-white/5 rounded-full px-8 hover:border-pixel-mint/50"
                >
                  <Download className="mr-2 w-4 h-4" />
                  Descargar CV
                </Button>
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex gap-3"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  title={social.label}
                  className="w-12 h-12 rounded-xl bg-slate-800/50 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-white hover:border-pixel-blue/50 hover:bg-pixel-blue-10 transition-all"
                  whileHover={{ scale: 1.1, y: -4 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:flex flex-col items-center gap-8"
          >
            <PixelAvatar size={180} />

            <div className="relative w-full">
              <div className="absolute -inset-4 bg-gradient-to-r from-pixel-blue/30 to-pixel-purple/30 rounded-2xl blur-xl" />

              <div className="relative bg-slate-900/90 backdrop-blur-xl rounded-2xl border border-slate-700 overflow-hidden shadow-2xl">
                <div className="flex items-center gap-2 px-4 py-3 bg-slate-800/50 border-b border-slate-700">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 bg-pixel-pink" />
                    <div className="w-3 h-3 bg-pixel-yellow" />
                    <div className="w-3 h-3 bg-pixel-mint" />
                  </div>
                  <div className="flex-1 text-center">
                    <span className="text-xs text-slate-500">developer.js</span>
                  </div>
                </div>

                <div className="p-6 font-mono text-sm">
                  {codeSnippets.map((snippet, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.8 + snippet.delay }}
                      className="flex"
                    >
                      <span className="text-slate-600 w-8 select-none">
                        {index + 1}
                      </span>
                      <span className={
                        snippet.text.includes('const') || snippet.text.includes('name') || snippet.text.includes('role') || snippet.text.includes('location')
                          ? 'text-pixel-purple'
                          : snippet.text.includes('"')
                          ? 'text-pixel-mint'
                          : 'text-slate-300'
                      }>
                        {snippet.text}
                      </span>
                    </motion.div>
                  ))}

                  <motion.span
                    className="inline-block w-2 h-5 bg-pixel-mint ml-8"
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
