import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Github, Construction, Shield, Clock, Code2, Layers } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const projects = [
  {
    id: 1,
    title: 'ObraManager',
    description: 'Aplicación integral para encargados de obra que permite gestionar equipos, seguimiento de tareas, control de inventario y reportes de progreso en tiempo real desde el móvil.',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=600&fit=crop',
    status: 'en-desarrollo',
    progress: 65,
    tags: ['React Native', 'Node.js', 'PostgreSQL', 'Firebase'],
    features: ['Gestión de equipos', 'Tareas diarias', 'Reportes fotográficos', 'Sincronización offline'],
    repoUrl: null,
    color: 'from-[#5174FF] to-[#9B7BFF]',
    icon: Construction,
  },
  {
    id: 2,
    title: 'PhishGuard',
    description: 'Sistema de protección contra phishing que analiza URLs, emails y mensajes en tiempo real para detectar intentos de suplantación de identidad y alertar a los usuarios.',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop',
    status: 'en-desarrollo',
    progress: 40,
    tags: ['Flutter', 'Python', 'TensorFlow', 'AWS'],
    features: ['Análisis de URLs', 'Detección ML', 'Alertas en tiempo real', 'Base de datos de amenazas'],
    repoUrl: null,
    color: 'from-[#7FFFD4] to-[#5174FF]',
    icon: Shield,
  },
];

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  return (
    <section id="projects" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#9B7BFF]/5 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-2 rounded-full bg-[#5174FF]/10 border border-[#5174FF]/20 text-[#5174FF] text-sm mb-6"
          >
            <Layers className="w-4 h-4 inline mr-2" />
            Portafolio
          </motion.span>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Proyectos en <span className="gradient-text">Desarrollo</span>
          </h2>

          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Actualmente estoy trabajando en estas aplicaciones multiplataforma. 
            Próximamente estarán disponibles para su uso.
          </p>
        </motion.div>

        {/* Projects Grid - 2 columns for featured projects */}
        <motion.div
          layout
          className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.15 }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              className="group relative"
            >
              {/* Card */}
              <div className="relative h-full rounded-2xl overflow-hidden bg-slate-900/50 border border-slate-800 hover:border-[#5174FF]/30 transition-all duration-500">
                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                  <motion.div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${project.image})` }}
                    animate={{
                      scale: hoveredProject === project.id ? 1.05 : 1,
                    }}
                    transition={{ duration: 0.6 }}
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-30`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
                  
                  {/* Status Badge */}
                  <div className="absolute top-4 left-4">
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/80 backdrop-blur-sm border border-slate-700">
                      <Clock className="w-4 h-4 text-amber-400" />
                      <span className="text-xs font-medium text-amber-400">En desarrollo</span>
                    </div>
                  </div>

                  {/* Progress Indicator */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs text-slate-300">Progreso</span>
                      <span className="text-xs font-medium text-white">{project.progress}%</span>
                    </div>
                    <div className="h-2 bg-slate-800/80 rounded-full overflow-hidden backdrop-blur-sm">
                      <motion.div
                        className={`h-full rounded-full bg-gradient-to-r ${project.color}`}
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${project.progress}%` } : {}}
                        transition={{ duration: 1.5, delay: 0.5 + index * 0.2, ease: [0.22, 1, 0.36, 1] }}
                      />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Icon & Title */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${project.color} flex items-center justify-center`}>
                      <project.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-[#5174FF] transition-colors">
                        {project.title}
                      </h3>
                      <span className="text-xs text-slate-500">Multiplataforma</span>
                    </div>
                  </div>

                  <p className="text-slate-400 text-sm mb-5 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Features */}
                  <div className="mb-5">
                    <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">
                      Características principales
                    </h4>
                    <ul className="grid grid-cols-2 gap-2">
                      {project.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-slate-400">
                          <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${project.color}`} />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="bg-slate-800 text-slate-300 border-0 text-xs"
                      >
                        <Code2 className="w-3 h-3 mr-1" />
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Action Button */}
                  {project.repoUrl ? (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-slate-800/50 border border-slate-700 hover:border-[#5174FF]/50 hover:bg-[#5174FF]/10 transition-all text-sm font-medium text-slate-300 hover:text-white"
                    >
                      <Github className="w-4 h-4" />
                      Ver en GitHub
                    </a>
                  ) : (
                    <div className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-slate-800/30 border border-slate-800 text-sm font-medium text-slate-500 cursor-not-allowed select-none">
                      <Github className="w-4 h-4" />
                      Repositorio próximamente
                    </div>
                  )}
                </div>

                {/* Glow Effect */}
                <motion.div
                  className={`absolute -inset-px rounded-2xl bg-gradient-to-r ${project.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity`}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Coming Soon Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl bg-slate-900/50 border border-slate-800">
            <div className="w-10 h-10 rounded-full bg-[#5174FF]/20 flex items-center justify-center">
              <Construction className="w-5 h-5 text-[#5174FF]" />
            </div>
            <div className="text-left">
              <p className="text-sm font-medium text-white">Más proyectos próximamente</p>
              <p className="text-xs text-slate-400">Estoy constantemente trabajando en nuevas ideas</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
