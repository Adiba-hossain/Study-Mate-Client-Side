import React from "react";
import { motion } from "framer-motion";

const slides = [
  {
    image: "https://i.ibb.co/qJ5zCgC/study-hero1.jpg",
    title: "Find Your Perfect Study Partner",
    subtitle: "Connect, learn, and grow together with like-minded students.",
  },
  {
    image: "https://i.ibb.co/F4R9dVq/study-hero2.jpg",
    title: "Learn Smarter, Not Harder",
    subtitle: "Collaborate and achieve academic success with StudyMate.",
  },
  {
    image: "https://i.ibb.co/GpR8DQJ/study-hero3.jpg",
    title: "Boost Your Grades With Teamwork",
    subtitle: "Study together, share ideas, and reach your goals.",
  },
];

const HeroSlider = () => {
  const [current, setCurrent] = React.useState(0);
  React.useEffect(() => {
    const timer = setInterval(
      () => setCurrent((prev) => (prev + 1) % slides.length),
      4000
    );
    return () => clearInterval(timer);
  }, []);

  const { image, title, subtitle } = slides[current];

  return (
    <motion.div
      className="relative h-[80vh] flex items-center justify-center text-center overflow-hidden rounded-xl shadow-md"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      key={image}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="bg-black/60 w-full h-full flex flex-col justify-center items-center px-4">
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-white mb-3"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          {title}
        </motion.h1>
        <motion.p
          className="text-lg text-gray-200 max-w-xl"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          {subtitle}
        </motion.p>
      </div>
    </motion.div>
  );
};

export default HeroSlider;
