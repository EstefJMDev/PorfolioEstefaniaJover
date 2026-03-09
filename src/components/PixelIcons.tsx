import { motion } from 'framer-motion';

// Pixel Home Icon - BIGGER
export function PixelHome({ className = '', color = '#5174FF' }: { className?: string; color?: string }) {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className={className} style={{ imageRendering: 'pixelated' }}>
      <path d="M8 2h8v2H8V2zm-2 2h2v2H6V4zm12 0h2v2h-2V4zM4 6h2v2H4V6zm14 0h2v2h-2V6zM2 8h2v8H2V8zm20 0h2v8h-2V8zM4 16h2v4H4v-4zm14 0h2v4h-2v-4zM6 18h4v4H6v-4zm8 0h4v4h-4v-4z" fill={color}/>
    </svg>
  );
}

// Pixel User Icon - BIGGER
export function PixelUser({ className = '', color = '#9B7BFF' }: { className?: string; color?: string }) {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className={className} style={{ imageRendering: 'pixelated' }}>
      <path d="M8 2h8v4H8V2zM6 6h2v4H6V6zm10 0h2v4h-2V6zM4 10h2v4H4v-4zm14 0h2v4h-2v-4zM2 14h4v8H2v-8zm16 0h4v8h-4v-8zM6 18h12v4H6v-4z" fill={color}/>
    </svg>
  );
}

// Pixel Folder/Projects Icon - BIGGER
export function PixelFolder({ className = '', color = '#7FFFD4' }: { className?: string; color?: string }) {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className={className} style={{ imageRendering: 'pixelated' }}>
      <path d="M2 4h8v2H2V4zm8 2h4v2h-4V6zM2 6h2v14H2V6zm4 0h14v2H6V6zm14 2h2v12h-2V8zM6 10h14v10H6V10z" fill={color}/>
    </svg>
  );
}

// Pixel Skills/Tools Icon - BIGGER
export function PixelTools({ className = '', color = '#FFF07F' }: { className?: string; color?: string }) {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className={className} style={{ imageRendering: 'pixelated' }}>
      <path d="M4 2h4v4H4V2zm12 0h4v4h-4V2zM2 6h4v4H2V6zm16 0h4v4h-4V6zM6 8h4v4H6V8zm8 0h4v4h-4V8zM4 12h4v4H4v-4zm12 0h4v4h-4v-4zM2 16h4v6H2v-6zm16 0h4v6h-4v-6z" fill={color}/>
    </svg>
  );
}

// Pixel Mail/Contact Icon - BIGGER
export function PixelMail({ className = '', color = '#FF7BA3' }: { className?: string; color?: string }) {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className={className} style={{ imageRendering: 'pixelated' }}>
      <path d="M2 4h20v2H2V4zm0 4h4v2H2V8zm16 0h4v2h-4V8zM2 10h2v10H2V10zm20 0h2v10h-2V10zM4 18h16v2H4v-2z" fill={color}/>
    </svg>
  );
}

// Pixel Code Icon - BIGGER
export function PixelCodeIcon({ className = '', color = '#5174FF' }: { className?: string; color?: string }) {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className={className} style={{ imageRendering: 'pixelated' }}>
      <path d="M6 4h4v4H6V4zm-2 4h2v4H4V8zm0 4h2v4H4v-4zm2 4h4v4H6v-4zm8-12h4v4h-4V4zm4 4h2v4h-2V8zm0 4h2v4h-2v-4zm-2 4h4v4h-4v-4z" fill={color}/>
    </svg>
  );
}

// Pixel Download Icon - BIGGER
export function PixelDownload({ className = '', color = '#5174FF' }: { className?: string; color?: string }) {
  return (
    <svg width="28" height="28" viewBox="0 0 20 20" fill="none" className={className} style={{ imageRendering: 'pixelated' }}>
      <path d="M6 2h8v4h-2V4H8v2H6V2zm2 4h4v6h2v2h-2v2H8v-2H6v-2h2V6zM4 14h12v4H4v-4z" fill={color}/>
    </svg>
  );
}

// Pixel Arrow Down - BIGGER
export function PixelArrowDown({ className = '', color = '#FFFFFF' }: { className?: string; color?: string }) {
  return (
    <svg width="24" height="24" viewBox="0 0 16 16" fill="none" className={className} style={{ imageRendering: 'pixelated' }}>
      <path d="M6 2h4v8h2v2h-2v2H8v-2H6v-2h2V2z" fill={color}/>
    </svg>
  );
}

// Pixel Send Icon - BIGGER
export function PixelSend({ className = '', color = '#FFFFFF' }: { className?: string; color?: string }) {
  return (
    <svg width="28" height="28" viewBox="0 0 20 20" fill="none" className={className} style={{ imageRendering: 'pixelated' }}>
      <path d="M2 4h4v2H2V4zm4 2h4v2H6V6zm4 2h4v2h-4V8zm4 2h4v4h-4v-4zM2 14h4v4H2v-4z" fill={color}/>
    </svg>
  );
}

// Pixel Heart Icon - BIGGER
export function PixelHeartIcon({ className = '', color = '#FF7BA3' }: { className?: string; color?: string }) {
  return (
    <svg width="28" height="28" viewBox="0 0 20 20" fill="none" className={className} style={{ imageRendering: 'pixelated' }}>
      <path d="M4 2h4v2H4V2zm8 0h4v2h-4V2zM2 4h2v4H2V4zm14 0h2v4h-2V4zM0 6h2v8H0V6zm18 0h2v8h-2V6zM2 12h2v4H2v-4zm14 0h2v4h-2v-4zM4 14h4v4H4v-4zm8 0h4v4h-4v-4z" fill={color}/>
    </svg>
  );
}

// Animated pixel icon wrapper
interface AnimatedPixelIconProps {
  children: React.ReactNode;
  delay?: number;
}

export function AnimatedPixelIcon({ children, delay = 0 }: AnimatedPixelIconProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ 
        duration: 0.3, 
        delay,
        type: 'spring',
        stiffness: 200
      }}
      whileHover={{ scale: 1.2, rotate: 5 }}
    >
      {children}
    </motion.div>
  );
}
