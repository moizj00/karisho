import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedPageProps {
  children: React.ReactNode;
}

const pageVariants = {
  initial: { 
    opacity: 0, 
    y: 20,
    filter: "blur(5px)"
  },
  in: { 
    opacity: 1, 
    y: 0,
    filter: "blur(0px)"
  },
  out: { 
    opacity: 0, 
    y: -20,
    filter: "blur(5px)"
  }
};

const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.5
};

const AnimatedPage: React.FC<AnimatedPageProps> = ({ children }) => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="w-full"
    >
      {children}
    </motion.div>
  );
};

export default AnimatedPage;