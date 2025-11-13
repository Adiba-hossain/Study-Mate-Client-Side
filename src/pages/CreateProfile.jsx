import React, { useContext, useState } from "react";

import API from "../services/api";
import { toast } from "react-toastify";
import { AuthContext } from "../providers/AuthProvider";

const CreateProfile = () => {
  const { user } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    name: user?.displayName || "",
    profileimage: user?.photoURL || "",
    subject: "",
    studyMode: "Online",
    availabilityTime: "",
    location: "",
    experienceLevel: "Beginner",
    rating: 0,
    partnerCount: 0,
    email: user?.email || "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post("/partners", formData);
      toast.success("Profile created successfully!");
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Create Partner Profile</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {Object.keys(formData).map((key) =>
          key !== "rating" && key !== "partnerCount" ? (
            <input
              key={key}
              type="text"
              name={key}
              placeholder={key.charAt(0).toUpperCase() + key.slice(1)}
              value={formData[key]}
              onChange={handleChange}
              disabled={key === "email"}
              className="w-full p-3 rounded border dark:border-gray-600 bg-gray-100 dark:bg-gray-700 focus:outline-none"
            />
          ) : null
        )}
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-3 rounded hover:bg-indigo-500 transition"
        >
          Create Profile
        </button>
      </form>
    </div>
  );
};

export default CreateProfile;
