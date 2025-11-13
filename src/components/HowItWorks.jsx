import React from "react";
import { motion } from "framer-motion";
import { BookOpen, Users, Rocket } from "lucide-react";

const steps = [
  {
    icon: <BookOpen size={40} />,
    title: "1. Create Your Profile",
    desc: "Sign up and tell us about your study preferences, subjects, and availability.",
  },
  {
    icon: <Users size={40} />,
    title: "2. Find a Partner",
    desc: "Browse through profiles and find your ideal study partner based on interests.",
  },
  {
    icon: <Rocket size={40} />,
    title: "3. Start Learning Together",
    desc: "Connect, collaborate, and reach your academic goals faster.",
  },
];

const HowItWorks = () => (
  <motion.section
    className="py-12 bg-gray-50 dark:bg-gray-900 text-center"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
  >
    <h2 className="text-3xl font-bold mb-8">How It Works</h2>
    <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
      {steps.map((s, idx) => (
        <motion.div
          key={idx}
          className="bg-white dark:bg-gray-800 p-6 rounded shadow hover:shadow-lg transition flex flex-col items-center"
          whileHover={{ scale: 1.05 }}
        >
          <div className="text-indigo-600 mb-4">{s.icon}</div>
          <h3 className="font-semibold text-lg mb-2">{s.title}</h3>
          <p className="text-gray-600 dark:text-gray-300">{s.desc}</p>
        </motion.div>
      ))}
    </div>
  </motion.section>
);

export default HowItWorks;
