import { Variants } from 'framer-motion';

// F1-inspired animations
export const speedStreakVariants: Variants = {
  initial: { opacity: 0, scaleX: 0 },
  animate: { 
    opacity: [0, 1, 0],
    scaleX: [0, 1, 1.2],
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  }
};

export const gridStartVariants: Variants = {
  initial: { opacity: 0, scale: 0.8 },
  animate: (custom: number) => ({
    opacity: 1,
    scale: 1,
    transition: { 
      delay: custom * 0.5,
      duration: 0.4,
      ease: [0.33, 1, 0.68, 1]
    }
  }),
  exit: {
    opacity: 0,
    scale: 1.2,
    transition: { duration: 0.3 }
  }
};

// Apple-style animations
export const smoothRevealVariants: Variants = {
  initial: { 
    opacity: 0,
    y: 100,
    scale: 0.95
  },
  animate: { 
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 1,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

export const parallaxVariants = {
  initial: { y: 0 },
  animate: (scrollY: number) => ({
    y: scrollY * 0.5,
    transition: { type: 'spring', stiffness: 100, damping: 30 }
  })
};

export const pinSlideVariants: Variants = {
  initial: { opacity: 0, y: 100 },
  animate: { 
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

// Kinetic typography variants
export const kineticTextVariants: Variants = {
  initial: { 
    opacity: 0,
    y: 20,
    rotateX: 90
  },
  animate: (custom: number) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      duration: 0.8,
      delay: custom * 0.1,
      ease: [0.16, 1, 0.3, 1]
    }
  })
};

// Track line effect
export const trackLineVariants: Variants = {
  initial: { pathLength: 0 },
  animate: { 
    pathLength: 1,
    transition: { 
      duration: 2,
      ease: "easeInOut"
    }
  }
};

// Background ambient movement
export const ambientBackgroundVariants: Variants = {
  animate: {
    scale: [1, 1.1, 1],
    opacity: [0.5, 0.7, 0.5],
    transition: {
      duration: 20,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse"
    }
  }
}; 