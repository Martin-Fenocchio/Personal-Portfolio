"use client";

import { motion, useScroll } from "framer-motion";

const ReadingProgress = () => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      id="scroll-indicator"
      style={{
        scaleX: scrollYProgress,
        originX: 0,
      }}
      className="bg-green fixed top-0 left-0 right-0 h-1 z-50"
    />
  );
};

export default ReadingProgress;
