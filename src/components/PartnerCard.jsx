import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { toast } from "react-toastify";

export default function PartnerCard({ partner, user }) {
  const navigate = useNavigate();

  const handleViewProfile = () => {
    if (!user) {
      toast.info("Please login to view profile!");
      navigate("/login");
      return;
    }
    navigate(`/partner/${partner._id}`);
  };

  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow flex flex-col items-center text-center space-y-4"
    >
      <img
        src={partner.profileimage}
        alt={partner.name}
        className="w-24 h-24 rounded-full object-cover border-2 border-indigo-500"
      />
      <h3 className="font-semibold text-lg">{partner.name}</h3>
      <p className="text-gray-600 dark:text-gray-300">{partner.subject}</p>
      <p className="text-yellow-500 font-semibold">Rating: {partner.rating}</p>
      <button
        onClick={handleViewProfile}
        className="bg-indigo-500 text-white px-4 py-2 rounded-lg hover:bg-indigo-600 transition"
      >
        View Profile
      </button>
    </motion.div>
  );
}
