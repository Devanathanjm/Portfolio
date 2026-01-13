import {
  RiReactjsLine,
  RiHtml5Fill,
  RiCss3Fill,
  RiJavascriptFill,
  RiBootstrapFill,
  RiTailwindCssFill,
} from "react-icons/ri";
import { DiMaterializecss, DiSass, DiWordpress  } from "react-icons/di";
import { FaFigma } from "react-icons/fa";
import { FaWebflow } from "react-icons/fa6";
import { FiFramer } from "react-icons/fi";

import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technology = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <h1 className="text-center text-4xl my-20 text-white">Technologies</h1>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl p-4 border-4 border-neutral-800"
        >
          <RiHtml5Fill className="text-7xl text-orange-800" />
        </motion.div>
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl p-4 border-4 border-neutral-800"
        >
          <RiCss3Fill className="text-7xl text-blue-800" />
        </motion.div>
        <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl p-4 border-4 border-neutral-800"
        >
          <DiSass className="text-7xl text-pink-500" />
        </motion.div>
        <motion.div
          variants={iconVariants(5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl p-4 border-4 border-neutral-800"
        >
          <RiBootstrapFill className="text-7xl text-violet-800" />
        </motion.div>
        <motion.div
          variants={iconVariants(6)}
          initial="initial"
          animate="animate"
          className="rounded-2xl p-4 border-4 border-neutral-800"
        >
          <RiTailwindCssFill className="text-7xl text-sky-400" />
        </motion.div>
        <motion.div
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl p-4 border-4 border-neutral-800"
        >
          <DiMaterializecss className="text-7xl text-sky-400" />
        </motion.div>

        <motion.div
          variants={iconVariants(6)}
          initial="initial"
          animate="animate"
          className="rounded-2xl p-4 border-4 border-neutral-800"
        >
          <RiJavascriptFill className="text-7xl text-yellow-500" />
        </motion.div>
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl p-4 border-4 border-neutral-800"
        >
          <RiReactjsLine className="text-7xl text-cyan-800" />
        </motion.div>
        <motion.div
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl p-4 border-4 border-neutral-800"
        >
          <FaFigma className="text-7xl text-pink-600" />
        </motion.div>

        <motion.div
          variants={iconVariants(2.2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl p-4 border-4 border-neutral-800"
        >
          <DiWordpress  className="text-7xl text-blue-700" />
        </motion.div>

        <motion.div
          variants={iconVariants(2.4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl p-4 border-4 border-neutral-800"
        >
          <FaWebflow className="text-7xl text-blue-500" />
        </motion.div>
        <motion.div
          variants={iconVariants(2.6)}
          initial="initial"
          animate="animate"
          className="rounded-2xl p-4 border-4 border-neutral-800"
        >
          <FiFramer className="text-7xl text-black dark:text-white" />
        </motion.div>
       
      </div>
    </div>
  );
};

export default Technology;
