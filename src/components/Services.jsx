import { useEffect, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useInView,
  useAnimation,
} from "framer-motion";

import { SERVICES } from "../constance";

export default function Services() {
  const ref = useRef(null);
  const isView = useInView(ref, { amount: 0.4 });
  const mainControlls = useAnimation();

  useEffect(() => {
    if (isView) {
      mainControlls.start("animate");
    }
  }, [isView, mainControlls]);

  return (
    <div className="md:py-14 py-8 md:px-16 text-center md:my-16">
      <h2 className="text-4xl mb-4">خدماتنا </h2>
      <div className="grid md:grid-cols-3 grid-cols-2 md: gap-5">
        <AnimatePresence>
          {SERVICES.map((service) => (
            <motion.div
              variants={variants}
              initial="initial"
              animate={mainControlls}
              ref={ref}
              className="md:mb-0 md:p-8 p- mb-4"
            >
              <motion.div
                variants={variants}
                className="md:h-16 md:w-16 h-16 w-16 mx-auto"
              >
                <img src={service.image} alt="" />
              </motion.div>
              <motion.h3 variants={variants} className="text-2xl">
                {service.title}
              </motion.h3>
              <motion.h3 variants={variants} className="line-clamp-2">
                {service.text}
              </motion.h3>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}

const variants = {
  initial: { opacity: 0, x: 200 },
  animate: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, staggerChildren: 0.2 },
  },
  exit: { opacity: 0, x: 200 },
};
