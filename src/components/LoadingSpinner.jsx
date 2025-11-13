import React from "react";
import { motion } from "framer-motion";

const LoaderSpinner = () => {
  return (
    <div className="flex justify-center items-center h-[70vh] bg-transparent">
      <motion.div
        className="w-16 h-16 border-4 border-indigo-500 border-t-transparent rounded-full"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
      />
    </div>
  );
};

export default LoaderSpinner;
