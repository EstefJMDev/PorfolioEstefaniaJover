import { ParticleBackground } from '@/components/ParticleBackground';
import { Navigation } from '@/components/Navigation';
import { FloatingPixels } from '@/components/PixelDecorations';
import { Hero } from '@/sections/Hero';
import { About } from '@/sections/About';
import { Projects } from '@/sections/Projects';
import { Skills } from '@/sections/Skills';
import { Contact } from '@/sections/Contact';
import { Footer } from '@/sections/Footer';

function App() {
  return (
    <div className="relative min-h-screen bg-[#1a1f2e] text-white overflow-x-hidden">
      {/* Particle Background */}
      <ParticleBackground />
      
      {/* Floating Pixel Decorations */}
      <FloatingPixels />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Main Content */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
