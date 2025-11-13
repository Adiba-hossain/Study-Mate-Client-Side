import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../services/api";
import { motion } from "framer-motion";

const PartnerDetails = () => {
  const { id } = useParams();
  const [partner, setPartner] = useState(null);

  useEffect(() => {
    const fetchPartner = async () => {
      const res = await API.get(`/partners/${id}`);
      setPartner(res.data);
    };
    fetchPartner();
  }, [id]);

  if (!partner) return <p className="text-center mt-10">Loading...</p>;

  return (
    <motion.div
      className="max-w-3xl mx-auto p-6 bg-white dark:bg-gray-800 rounded shadow"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col items-center">
        <img
          src={partner.profileimage}
          alt={partner.name}
          className="w-32 h-32 rounded-full object-cover mb-3"
        />
        <h2 className="text-2xl font-bold mb-1">{partner.name}</h2>
        <p className="text-gray-500">{partner.subject}</p>
        <p className="mt-2">
          {partner.experienceLevel} • {partner.studyMode}
        </p>
        <p className="text-sm mt-2 text-gray-600 dark:text-gray-300">
          {partner.location}
        </p>
        <div className="flex gap-2 mt-3">
          <span className="bg-indigo-100 dark:bg-indigo-700 px-3 py-1 rounded-full text-sm">
            ⭐ {partner.rating}
          </span>
          <span className="bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full text-sm">
            Partners: {partner.partnerCount}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default PartnerDetails;
