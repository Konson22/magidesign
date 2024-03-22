import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function AnimatedText({ text }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div>
      <AnimatePresence>
        {isVisible && (
          <motion.span
            className="text-6xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 5.5, staggerChildren: 1 }}
          >
            {text.split("").map((char, index) => (
              <motion.span key={index} style={{ display: "inline-block" }}>
                {char}
              </motion.span>
            ))}
          </motion.span>
        )}
      </AnimatePresence>
    </div>
  );
}
