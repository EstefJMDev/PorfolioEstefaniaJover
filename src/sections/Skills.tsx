import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Code2, 
  Database, 
  Cloud, 
  Smartphone, 
  Terminal,
  GitBranch,
  Container,
  Cpu
} from 'lucide-react';

const skillCategories = [
  {
    title: 'Desarrollo Móvil',
    icon: Smartphone,
    color: 'from-[#5174FF] to-[#9B7BFF]',
    skills: [
      { name: 'Kotlin (Android)', level: 85 },
      { name: 'Android Studio', level: 82 },
      { name: 'APIs REST/JSON', level: 80 },
      { name: 'SQLite', level: 78 },
      { name: 'Flutter', level: 65 },
    ],
  },
  {
    title: 'Backend & Bases de Datos',
    icon: Database,
    color: 'from-[#7FFFD4] to-[#5174FF]',
    skills: [
      { name: 'Java', level: 75 },
      { name: 'SQL', level: 80 },
      { name: 'SQLite', level: 85 },
      { name: 'Firebase', level: 70 },
      { name: 'Node.js', level: 60 },
    ],
  },
  {
    title: 'DevOps & Sistemas',
    icon: Cloud,
    color: 'from-[#FF7BA3] to-[#5174FF]',
    skills: [
      { name: 'Docker', level: 75 },
      { name: 'Docker Compose', level: 72 },
      { name: 'Linux', level: 80 },
      { name: 'Git', level: 78 },
      { name: 'Contenedores', level: 70 },
    ],
  },
  {
    title: 'Soporte & Herramientas',
    icon: Terminal,
    color: 'from-[#FFF07F] to-[#7FFFD4]',
    skills: [
      { name: 'Microsoft 365', level: 88 },
      { name: 'Testing / QA', level: 75 },
      { name: 'Soporte N1', level: 90 },
      { name: 'Resolución de incidencias', level: 85 },
      { name: 'Atención al cliente', level: 92 },
    ],
  },
];

const technologies = [
  { name: 'Kotlin', icon: Code2 },
  { name: 'Android Studio', icon: Smartphone },
  { name: 'Java', icon: Code2 },
  { name: 'SQL', icon: Database },
  { name: 'SQLite', icon: Database },
  { name: 'Docker', icon: Container },
  { name: 'Linux', icon: Terminal },
  { name: 'Git', icon: GitBranch },
  { name: 'Firebase', icon: Cloud },
  { name: 'Microsoft 365', icon: Cpu },
];

function SkillBar({ name, level, color, delay }: { name: string; level: number; color: string; delay: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <div ref={ref} className="mb-4">
      <div className="flex justify-between mb-2">
        <span className="text-sm font-medium text-slate-300">{name}</span>
        <span className="text-sm text-slate-500">{level}%</span>
      </div>
      <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
        <motion.div
          className={`h-full rounded-full bg-gradient-to-r ${color}`}
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : {}}
          transition={{ duration: 1, delay, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </div>
  );
}

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#5174FF]/5 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-2 rounded-full bg-[#7FFFD4]/10 border border-[#7FFFD4]/20 text-[#7FFFD4] text-sm mb-6"
          >
            Habilidades
          </motion.span>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Tecnologías que <span className="gradient-text">Domino</span>
          </h2>

          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Stack tecnológico moderno y versátil para crear soluciones 
            escalables en cualquier plataforma.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + categoryIndex * 0.1 }}
              whileHover={{ y: -4 }}
              className="relative group"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 rounded-2xl blur-xl transition-opacity`} />
              <div className="relative p-8 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-[#5174FF]/30 transition-all">
                {/* Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{category.title}</h3>
                </div>

                {/* Skills */}
                <div>
                  {category.skills.map((skill, skillIndex) => (
                    <SkillBar
                      key={skill.name}
                      name={skill.name}
                      level={skill.level}
                      color={category.color}
                      delay={0.4 + categoryIndex * 0.1 + skillIndex * 0.1}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech Stack Cloud */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold mb-8 text-slate-300">
            Stack Tecnológico
          </h3>
          
          <div className="flex flex-wrap justify-center gap-4">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.8 + index * 0.05 }}
                whileHover={{ 
                  scale: 1.1, 
                  y: -4,
                  transition: { duration: 0.2 }
                }}
                className="group"
              >
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700 hover:border-[#5174FF]/50 hover:bg-[#5174FF]/10 transition-all cursor-default">
                  <tech.icon className="w-4 h-4 text-slate-400 group-hover:text-[#5174FF] transition-colors" />
                  <span className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors">
                    {tech.name}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
