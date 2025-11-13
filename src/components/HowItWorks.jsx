import React from "react";
import { motion } from "framer-motion";

const steps = [
  {
    icon: "🔍",
    title: "Find Partners",
    desc: "Search for study partners by subject, skill, or location to match your learning style.",
  },
  {
    icon: "📝",
    title: "Create Profile",
    desc: "Build your study partner profile with your subjects, availability, and expertise level.",
  },
  {
    icon: "🤝",
    title: "Connect & Collaborate",
    desc: "Send requests, connect with partners, and achieve academic goals together effectively.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-gray-100 dark:bg-gray-800 py-12 px-4 rounded-xl">
      <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
        How It Works
      </h2>
      <div className="grid md:grid-cols-3 gap-8 text-center">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow"
          >
            <div className="text-4xl mb-4">{step.icon}</div>
            <h3 className="font-semibold mb-2">{step.title}</h3>
            <p>{step.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
