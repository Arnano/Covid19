import { motion, AnimatePresence } from "framer-motion";

export const withAnimatePresence = WrappedComponent => ({
  motionProps,
  ...props
}) => {
  return (
    <AnimatePresence>
      <motion.div {...motionProps}>
        <WrappedComponent {...props} />
      </motion.div>
    </AnimatePresence>
  );
};
