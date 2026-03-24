import { motion } from 'framer-motion';

interface PixelAvatarProps {
  size?: number;
  className?: string;
}

export function PixelAvatar({ size = 200, className = '' }: PixelAvatarProps) {
  return (
    <motion.div
      className={`relative ${className}`}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.3 }}
    >
      {/* Pixel frame decoration */}
      <div className="absolute -inset-4 border-4 border-dashed border-pixel-blue/30 rounded-lg" />
      
      {/* Corner pixels - colores de la paleta */}
      <div className="absolute -top-2 -left-2 w-5 h-5 bg-pixel-blue" />
      <div className="absolute -top-2 -right-2 w-5 h-5 bg-pixel-purple" />
      <div className="absolute -bottom-2 -left-2 w-5 h-5 bg-pixel-mint" />
      <div className="absolute -bottom-2 -right-2 w-5 h-5 bg-pixel-pink" />
      
      {/* Main avatar container */}
      <div 
        className="relative overflow-hidden rounded-lg"
        style={{ 
          width: size, 
          height: size * 1.4,
          imageRendering: 'pixelated'
        }}
      >
        {/* Glow effect behind avatar */}
        <div className="absolute inset-0 bg-gradient-to-br from-pixel-blue/30 to-pixel-purple/30 blur-2xl" />
        
        {/* Pixel avatar image */}
        <img
          src="./pixel-avatar.jpg"
          alt="Pixel Avatar"
          className="relative z-10 w-full h-full object-contain drop-shadow-2xl"
          style={{ imageRendering: 'pixelated' }}
        />
      </div>
      
      {/* Floating pixel particles */}
      <motion.div
        className="absolute -top-6 right-0 w-4 h-4 bg-pixel-yellow"
        animate={{ 
          y: [0, -8, 0],
          opacity: [1, 0.5, 1]
        }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      <motion.div
        className="absolute -bottom-4 left-4 w-3 h-3 bg-pixel-mint"
        animate={{ 
          y: [0, 6, 0],
          opacity: [1, 0.5, 1]
        }}
        transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }}
      />
      <motion.div
        className="absolute top-1/2 -right-6 w-3 h-3 bg-pixel-pink"
        animate={{ 
          x: [0, 4, 0],
          opacity: [1, 0.5, 1]
        }}
        transition={{ duration: 2.5, repeat: Infinity, delay: 0.6 }}
      />
    </motion.div>
  );
}
