import { motion } from "framer-motion";

function FramerMotion() {
  const text = "Framer Motion is a really cool tool".split("");

  return (
    <motion.div
      animate={{ y: 100 }}
      transition={{ duration: 0.5 }}
    >
      <p className="text-light">Hello, Framer Motion!</p>
    </motion.div>
  );
}

export default FramerMotion;
