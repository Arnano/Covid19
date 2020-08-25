import { motion } from "framer-motion";

export const withMotion = WrappedComponent => ({ motionProps, ...props }) => (
  <motion.div {...motionProps}>
    <WrappedComponent {...props} />
  </motion.div>
);
