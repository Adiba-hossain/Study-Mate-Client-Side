import React, { useEffect, useState, useContext } from "react";

import API from "../services/api";
import { motion } from "framer-motion";

import PartnerCard from "./PartnerCard";
import { AuthContext } from "../providers/AuthProvider";

export default function TopPartners() {
  const [partners, setPartners] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    // define async function inside the effect
    const fetchTopPartners = async () => {
      try {
        const res = await API.get("/top-partners?limit=3");
        setPartners(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchTopPartners(); // call it immediately
  }, []);

  return (
    <section className="space-y-6">
      <h2 className="text-2xl md:text-3xl font-bold text-center">
        Top Study Partners
      </h2>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="grid gap-6 md:grid-cols-3"
      >
        {partners.map((partner) => (
          <PartnerCard key={partner._id} partner={partner} user={user} />
        ))}
      </motion.div>
    </section>
  );
}
