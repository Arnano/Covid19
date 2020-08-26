import { motion } from "framer-motion";

export const Logo = () => {
  return (
    <div style={{ width: "300px", margin: "80px auto" }}>
      <motion.img
        animate={{ rotate: 360 }}
        transition={{ loop: Infinity, duration: 2 }}
        src="/spin.jpeg"
      />
    </div>
  );
};
