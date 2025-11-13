import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen text-center bg-gradient-to-br from-indigo-50 to-white dark:from-gray-900 dark:to-gray-800 transition-all duration-500">
      <motion.h1
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="text-[8rem] font-extrabold text-indigo-600 dark:text-indigo-400"
      >
        404
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-2xl md:text-3xl font-semibold text-gray-800 dark:text-gray-200"
      >
        Oops! Page Not Found
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-3 text-gray-600 dark:text-gray-400 max-w-md"
      >
        The page you’re looking for doesn’t exist or may have been moved.
      </motion.p>

      <Link
        to="/"
        className="mt-6 bg-indigo-600 text-white px-6 py-3 rounded-full hover:bg-indigo-700 transition-colors"
      >
        Back to Home
      </Link>

      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-10 opacity-20"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-40 h-40 text-indigo-300"
        >
          <path d="M12 2a10 10 0 0110 10c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2z" />
        </svg>
      </motion.div>
    </div>
  );
};

export default NotFound;
