import React, { useEffect, useState, useContext } from "react";

import API from "../services/api";
import { motion } from "framer-motion";
import { AuthContext } from "../providers/AuthProvider";

const MyConnections = () => {
  const { user } = useContext(AuthContext);
  const [connections, setConnections] = useState([]);

  useEffect(() => {
    const fetchConnections = async () => {
      if (!user?.email) return;
      const res = await API.get(`/connections?email=${user.email}`);
      setConnections(res.data);
    };
    fetchConnections();
  }, [user]);

  return (
    <motion.div
      className="max-w-6xl mx-auto p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <h2 className="text-2xl font-bold mb-4">My Study Connections</h2>
      {connections.length === 0 ? (
        <p className="text-gray-500">No connections found.</p>
      ) : (
        <div className="grid md:grid-cols-3 gap-4">
          {connections.map((conn) => (
            <motion.div
              key={conn._id}
              className="bg-white dark:bg-gray-800 p-4 rounded shadow"
              whileHover={{ scale: 1.03 }}
            >
              <h3 className="font-semibold text-lg">{conn.partnerName}</h3>
              <p className="text-sm text-gray-500">{conn.subject}</p>
              <p className="mt-2 text-sm">Rating: {conn.rating}</p>
            </motion.div>
          ))}
        </div>
      )}
    </motion.div>
  );
};

export default MyConnections;
