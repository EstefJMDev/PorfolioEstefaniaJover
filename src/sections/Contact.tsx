import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Mail, MapPin, Send, Github, Linkedin, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { PROFILE_LINKS } from '@/lib/site-config';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'estefaniajm94@outlook.com',
    href: PROFILE_LINKS.email,
  },
  {
    icon: MapPin,
    label: 'Ubicación',
    value: 'Murcia, España',
    href: PROFILE_LINKS.locationMap,
  },
];

const socialLinks = [
  { icon: Github, href: PROFILE_LINKS.github, label: 'GitHub' },
  { icon: Linkedin, href: PROFILE_LINKS.linkedin, label: 'LinkedIn' },
];

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    setError(null);
    try {
      await emailjs.send(
        'service_tiuamvb',
        'template_mgpppny',
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        '5h4BBoI7pI78gOZ7-'
      );
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch {
      setError('No se pudo enviar el mensaje. Inténtalo de nuevo.');
    } finally {
      setIsSending(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#5174FF]/5 to-[#9B7BFF]/10" />
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-[#5174FF]/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-[#9B7BFF]/10 rounded-full blur-[100px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
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
            className="inline-block px-4 py-2 rounded-full bg-[#5174FF]/10 border border-[#5174FF]/20 text-[#5174FF] text-sm mb-6"
          >
            Contacto
          </motion.span>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Hablemos de una <span className="gradient-text">oportunidad</span>
          </h2>

          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Si quieres hablar sobre una colaboración, una práctica o una oportunidad
            profesional, puedes escribirme desde aquí.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-2 space-y-8"
          >
            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  whileHover={{ x: 4 }}
                  className="flex items-center gap-4 p-4 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-[#5174FF]/30 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#5174FF]/20 to-[#9B7BFF]/20 flex items-center justify-center group-hover:from-[#5174FF] group-hover:to-[#9B7BFF] transition-all">
                    <item.icon className="w-5 h-5 text-[#5174FF] group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <div className="text-sm text-slate-500">{item.label}</div>
                    <div className="text-white font-medium">{item.value}</div>
                  </div>
                </motion.a>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <h3 className="text-lg font-semibold mb-4 text-slate-300">Sígueme</h3>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    title={social.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                    whileHover={{ scale: 1.1, y: -4 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 rounded-xl bg-slate-800/50 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-white hover:border-[#5174FF]/50 hover:bg-[#5174FF]/10 transition-all"
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="p-6 rounded-2xl bg-gradient-to-br from-[#7FFFD4]/10 to-[#5174FF]/10 border border-[#7FFFD4]/20"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-3 h-3 rounded-full bg-[#7FFFD4] animate-pulse" />
                <span className="text-[#7FFFD4] font-medium">Disponible para colaborar</span>
              </div>
              <p className="text-sm text-slate-400">
                Actualmente estoy en prácticas de desarrollo y abierta a nuevas
                oportunidades relacionadas con software y aplicaciones.
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-3"
          >
            <div className="relative p-8 rounded-2xl bg-slate-900/50 border border-slate-800">
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-[#5174FF]/20 to-[#9B7BFF]/20 blur-xl opacity-0 hover:opacity-100 transition-opacity" />

              <div className="relative">
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-16 text-center"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                      className="w-20 h-20 rounded-full bg-[#7FFFD4]/20 flex items-center justify-center mb-6"
                    >
                      <CheckCircle className="w-10 h-10 text-[#7FFFD4]" />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      ¡Mensaje enviado!
                    </h3>
                    <p className="text-slate-400">
                      Gracias por contactarme. Te responderé pronto.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-slate-300">
                          Nombre
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Tu nombre"
                          required
                          className="bg-slate-800/50 border-slate-700 focus:border-[#5174FF] focus:ring-[#5174FF]/20 text-white placeholder:text-slate-500"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-slate-300">
                          Email
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="tu@email.com"
                          required
                          className="bg-slate-800/50 border-slate-700 focus:border-[#5174FF] focus:ring-[#5174FF]/20 text-white placeholder:text-slate-500"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject" className="text-slate-300">
                        Asunto
                      </Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="¿Sobre qué quieres hablar?"
                        required
                        className="bg-slate-800/50 border-slate-700 focus:border-[#5174FF] focus:ring-[#5174FF]/20 text-white placeholder:text-slate-500"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-slate-300">
                        Mensaje
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Cuéntame sobre tu proyecto..."
                        required
                        rows={5}
                        className="bg-slate-800/50 border-slate-700 focus:border-[#5174FF] focus:ring-[#5174FF]/20 text-white placeholder:text-slate-500 resize-none"
                      />
                    </div>

                    {error && (
                      <div className="flex items-center gap-2 text-red-400 text-sm p-3 rounded-lg bg-red-400/10 border border-red-400/20">
                        <AlertCircle className="w-4 h-4 shrink-0" />
                        {error}
                      </div>
                    )}
                    <Button
                      type="submit"
                      disabled={isSending}
                      size="lg"
                      className="w-full bg-gradient-to-r from-[#5174FF] to-[#9B7BFF] hover:shadow-lg hover:shadow-[#5174FF]/30 transition-shadow rounded-xl disabled:opacity-60"
                    >
                      {isSending ? (
                        <Loader2 className="mr-2 w-4 h-4 animate-spin" />
                      ) : (
                        <Send className="mr-2 w-4 h-4" />
                      )}
                      {isSending ? 'Enviando...' : 'Enviar Mensaje'}
                    </Button>
                  </form>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
