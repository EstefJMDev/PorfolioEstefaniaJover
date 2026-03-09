import { motion } from 'framer-motion';

// Pixel Heart
export function PixelHeart({ className = '', color = '#FF7BA3' }: { className?: string; color?: string }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className={className} style={{ imageRendering: 'pixelated' }}>
      <path d="M4 4h4v4H4V4zm12 0h4v4h-4V4zM2 6h2v4H2V6zm18 0h2v4h-2V6zM0 8h2v8H0V8zm22 0h2v8h-2V8zM2 14h2v4H2v-4zm18 0h2v4h-2v-4zM4 16h4v4H4v-4zm12 0h4v4h-4v-4zM8 18h8v4H8v-4z" fill={color}/>
    </svg>
  );
}

// Pixel Star
export function PixelStar({ className = '', color = '#FFF07F' }: { className?: string; color?: string }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className={className} style={{ imageRendering: 'pixelated' }}>
      <path d="M10 0h4v4h-4V0zm4 4h4v4h-4V4zM6 4h4v4H6V4zm8 4h4v4h-4V8zM2 8h4v4H2V8zm16 0h4v4h-2V8zM0 12h2v4H0v-4zm22 0h2v4h-2v-4zM2 16h4v4H2v-4zm16 0h4v4h-4v-4zM6 18h4v4H6v-4zm8 0h4v4h-4v-4z" fill={color}/>
    </svg>
  );
}

// Pixel Code brackets
export function PixelCode({ className = '', color = '#7FFFD4' }: { className?: string; color?: string }) {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className={className} style={{ imageRendering: 'pixelated' }}>
      <path d="M8 4h4v4H8V4zm-4 4h4v4H4V8zm0 4h4v4H4v-4zm4 4h4v4H8v-4zm4 4h4v4h-4v-4zM24 4h4v4h-4V4zm4 4h4v4h-4V8zm0 4h4v4h-4v-4zm-4 4h4v4h-4v-4zm-4 4h4v4h-4v-4z" fill={color}/>
    </svg>
  );
}

// Floating pixel decorations for background
export function FloatingPixels() {
  const pixels = [
    { x: '10%', y: '20%', color: '#5174FF', size: 8, delay: 0 },
    { x: '85%', y: '15%', color: '#9B7BFF', size: 6, delay: 0.5 },
    { x: '75%', y: '60%', color: '#7FFFD4', size: 10, delay: 1 },
    { x: '15%', y: '70%', color: '#FFF07F', size: 6, delay: 1.5 },
    { x: '90%', y: '80%', color: '#FF7BA3', size: 8, delay: 2 },
    { x: '5%', y: '45%', color: '#5174FF', size: 4, delay: 0.3 },
    { x: '60%', y: '10%', color: '#9B7BFF', size: 6, delay: 0.8 },
    { x: '30%', y: '85%', color: '#7FFFD4', size: 8, delay: 1.3 },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {pixels.map((pixel, index) => (
        <motion.div
          key={index}
          className="absolute"
          style={{
            left: pixel.x,
            top: pixel.y,
            width: pixel.size,
            height: pixel.size,
            backgroundColor: pixel.color,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0.3, 0.6, 0.3],
            scale: [1, 1.2, 1],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 3 + index * 0.5,
            repeat: Infinity,
            delay: pixel.delay,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}

// Pixel border frame
export function PixelFrame({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <div className="absolute -top-2 -left-2 w-4 h-4 bg-pixel-blue" />
      <div className="absolute -top-2 -right-2 w-4 h-4 bg-pixel-purple" />
      <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-pixel-mint" />
      <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-pixel-pink" />
      <div className="absolute inset-0 border-4 border-dashed border-pixel-blue/30" />
      <div className="relative z-10">{children}</div>
    </div>
  );
}

// Pixel skill bar
export function PixelSkillBar({ name, level, color }: { name: string; level: number; color: string }) {
  const filledBlocks = Math.ceil(level / 10);
  const totalBlocks = 10;

  return (
    <div className="mb-4">
      <div className="flex justify-between mb-2">
        <span className="text-sm font-medium text-slate-300">{name}</span>
        <span className="text-sm text-slate-500">{level}%</span>
      </div>
      <div className="flex gap-1">
        {Array.from({ length: totalBlocks }).map((_, i) => (
          <motion.div
            key={i}
            className="h-2 flex-1"
            style={{ backgroundColor: i < filledBlocks ? color : 'rgba(51, 65, 85, 0.5)' }}
            initial={{ opacity: 0, scaleY: 0 }}
            animate={{ opacity: 1, scaleY: 1 }}
            transition={{ duration: 0.3, delay: i * 0.05 }}
          />
        ))}
      </div>
    </div>
  );
}
