import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Sparkles, Zap, Target, Users, Gamepad2 } from 'lucide-react';
import { PixelHeart, PixelStar, PixelFrame } from '@/components/PixelDecorations';

const stats = [
  { value: 'DAM', label: 'En Formación', icon: Sparkles },
  { value: '6+', label: 'Años Liderando Equipos', icon: Users },
  { value: '2', label: 'Proyectos en Desarrollo', icon: Zap },
  { value: '100%', label: 'Compromiso', icon: Target },
];

const highlights = [
  {
    title: 'Desarrollo Móvil Nativo',
    description: 'Experiencia en Kotlin con Android Studio, implementando consumo de APIs REST/JSON y persistencia local con SQLite.',
  },
  {
    title: 'DevOps & Contenedores',
    description: 'Configuración de entornos de desarrollo con Docker y Docker Compose para despliegues reproducibles.',
  },
  {
    title: 'Pixel Art & Diseño',
    description: 'Apasionada del pixel art y el diseño retro. Me encanta crear assets y elementos visuales con estética 8-bit.',
  },
];

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#5174FF]/5 to-transparent" />
      
      {/* Floating Pixel Decorations */}
      <motion.div
        className="absolute top-40 right-20"
        animate={{ y: [0, -10, 0], rotate: [0, 15, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        <PixelStar color="#FFF07F" />
      </motion.div>
      <motion.div
        className="absolute bottom-60 left-16"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
      >
        <PixelHeart color="#FF7BA3" />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#9B7BFF]/10 border border-[#9B7BFF]/20 text-[#9B7BFF] text-sm mb-6"
          >
            <Gamepad2 className="w-4 h-4" />
            Sobre Mí
          </motion.span>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Transformando <span className="gradient-text">Ideas</span> en Realidad
          </h2>
          
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Estudiante de último año de Desarrollo de Aplicaciones Multiplataforma 
            con base en Sistemas Microinformáticos y Redes. Amante del pixel art 
            y los videojuegos retro.
          </p>
        </motion.div>

        {/* Photo + Stats Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {/* Photo with Pixel Frame */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-1"
          >
            <PixelFrame className="h-full">
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src="./profile-photo.jpg"
                  alt="Estefanía Jover"
                  className="w-full h-80 object-cover object-top"
                />
                {/* Pixel overlay effect */}
                <div 
                  className="absolute inset-0 pointer-events-none opacity-5"
                  style={{
                    backgroundImage: 'linear-gradient(90deg, transparent 50%, rgba(0,0,0,0.5) 50%), linear-gradient(transparent 50%, rgba(0,0,0,0.5) 50%)',
                    backgroundSize: '4px 4px'
                  }}
                />
              </div>
            </PixelFrame>
            
            {/* Pixel decoration below photo */}
            <div className="flex justify-center gap-2 mt-4">
              <motion.div
                className="w-3 h-3 bg-[#5174FF]"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
              <motion.div
                className="w-3 h-3 bg-[#9B7BFF]"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
              />
              <motion.div
                className="w-3 h-3 bg-[#7FFFD4]"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: 0.4 }}
              />
            </div>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-2 grid grid-cols-2 gap-4"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#5174FF]/20 to-[#9B7BFF]/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-[#5174FF]/30 transition-colors text-center h-full flex flex-col justify-center">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-br from-[#5174FF]/20 to-[#9B7BFF]/20 flex items-center justify-center">
                    <stat.icon className="w-6 h-6 text-[#5174FF]" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-slate-400">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Highlights Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.15 }}
              whileHover={{ y: -8 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#5174FF]/10 to-[#9B7BFF]/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative h-full p-8 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-[#5174FF]/30 transition-all">
                {/* Number Badge - Pixel Style */}
                <div className="absolute -top-4 -right-4 w-10 h-10 bg-gradient-to-br from-[#5174FF] to-[#9B7BFF] flex items-center justify-center text-white font-bold text-sm">
                  0{index + 1}
                </div>
                
                {/* Pixel corner decorations */}
                <div className="absolute top-4 left-4 w-2 h-2 bg-[#5174FF]/50" />
                <div className="absolute bottom-4 right-4 w-2 h-2 bg-[#9B7BFF]/50" />
                
                <h3 className="text-xl font-bold mb-4 text-white group-hover:text-[#5174FF] transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-400 leading-relaxed">
                  {item.description}
                </p>
                
                {/* Decorative Pixel Line */}
                <div className="mt-6 flex gap-1">
                  {Array.from({ length: 6 }).map((_, i) => (
                    <motion.div
                      key={i}
                      className="h-2 flex-1"
                      style={{
                        backgroundColor: i < 4 ? '#5174FF' : 'rgba(81, 116, 255, 0.2)'
                      }}
                      initial={{ scaleX: 0 }}
                      animate={isInView ? { scaleX: 1 } : {}}
                      transition={{ duration: 0.3, delay: 0.7 + i * 0.1 }}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quote with Pixel Decoration */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 text-center"
        >
          <blockquote className="relative inline-block">
            {/* Pixel quote marks */}
            <div className="absolute -top-8 -left-8 flex gap-1">
              <div className="w-4 h-4 bg-[#5174FF]" />
              <div className="w-4 h-4 bg-[#9B7BFF]" />
            </div>
            <p className="text-2xl md:text-3xl font-light text-slate-300 italic max-w-3xl px-8">
              El código es como el humor. Cuando tienes que explicarlo, es malo.
            </p>
            <div className="absolute -bottom-4 -right-4 flex gap-1">
              <div className="w-4 h-4 bg-[#7FFFD4]" />
              <div className="w-4 h-4 bg-[#FF7BA3]" />
            </div>
            <footer className="mt-4 text-slate-500">
              — Cory House
            </footer>
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
}
