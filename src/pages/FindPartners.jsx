import React, { useEffect, useState } from "react";
import API from "../services/api";
import PartnerCard from "../components/PartnerCard";
import { toast } from "react-toastify";

const FindPartners = () => {
  const [partners, setPartners] = useState([]);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("all");

  // ✅ Fetch all partners once
  useEffect(() => {
    const fetchPartners = async () => {
      try {
        const res = await API.get("/partners");
        setPartners(res.data);
      } catch (err) {
        toast.error(err.message);
      }
    };

    fetchPartners();
  }, []);

  // ✅ Filter + Sort logic
  const filteredPartners = partners
    .filter((p) => p.subject?.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => {
      if (sort === "all") return 0;

      const order = ["Beginner", "Intermediate", "Expert"];
      return sort === "Beginner"
        ? order.indexOf(a.experienceLevel) - order.indexOf(b.experienceLevel)
        : order.indexOf(b.experienceLevel) - order.indexOf(a.experienceLevel);
    });

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Find Partners</h2>

      <div className="flex mb-4 gap-2 flex-wrap">
        <input
          type="text"
          placeholder="Search by subject"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="p-2 rounded border focus:outline-none"
        />
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="p-2 rounded border"
        >
          <option value="all">Sort by Experience</option>
          <option value="Beginner">Beginner</option>
          <option value="Intermediate">Intermediate</option>
          <option value="Expert">Expert</option>
        </select>
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        {filteredPartners.length > 0 ? (
          filteredPartners.map((partner) => (
            <PartnerCard key={partner._id} partner={partner} />
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-3">
            No partners found.
          </p>
        )}
      </div>
    </div>
  );
};

export default FindPartners;
