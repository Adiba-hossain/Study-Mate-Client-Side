import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const reviews = [
  {
    name: "Aisha Rahman",
    text: "StudyMate helped me find a partner who perfectly matched my learning pace. Highly recommend!",
    image: "https://i.ibb.co/CvVqfqk/user1.jpg",
  },
  {
    name: "Rafiul Islam",
    text: "Learning together has never been easier. My partner and I cracked our exams with top grades!",
    image: "https://i.ibb.co/Gp3xPzD/user2.jpg",
  },
  {
    name: "Sadia Karim",
    text: "Great UI, easy to use, and excellent for finding serious learners.",
    image: "https://i.ibb.co/9ZzFwbr/user3.jpg",
  },
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const timer = setInterval(
      () => setIndex((prev) => (prev + 1) % reviews.length),
      5000
    );
    return () => clearInterval(timer);
  }, []);

  const { name, text, image } = reviews[index];

  return (
    <motion.section
      className="py-16 bg-indigo-50 dark:bg-gray-800 text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl font-bold mb-6">Testimonials</h2>
      <motion.div
        key={name}
        className="max-w-3xl mx-auto flex flex-col items-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <img
          src={image}
          alt={name}
          className="w-24 h-24 rounded-full mb-4 object-cover"
        />
        <p className="italic text-gray-700 dark:text-gray-300 mb-3 max-w-lg">
          {text}
        </p>
        <h3 className="font-semibold text-indigo-600">{name}</h3>
      </motion.div>
    </motion.section>
  );
};

export default Testimonials;
