import { RiReactjsLine } from "react-icons/ri";
import { RiHtml5Fill } from "react-icons/ri";
import { RiCss3Fill } from "react-icons/ri";
import { RiJavascriptFill } from "react-icons/ri";
import { RiBootstrapFill } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { DiSass } from "react-icons/di";
import { DiMaterializecss } from "react-icons/di";
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
      </div>
    </div>
  );
};

export default Technology;
