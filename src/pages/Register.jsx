import React, { useContext, useState } from "react";

import { Link, useNavigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../providers/AuthProvider";

const Register = () => {
  const { createUser, googleLogin, updateProfile } = useContext(AuthContext);
  const [name, setName] = useState("");
  const [photo, setPhoto] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!/[A-Z]/.test(password))
      return toast.error("Password must have at least one uppercase letter.");
    if (!/[a-z]/.test(password))
      return toast.error("Password must have at least one lowercase letter.");
    if (password.length < 6)
      return toast.error("Password must be at least 6 characters long.");

    try {
      const result = await createUser(email, password);
      await updateProfile(result.user, { displayName: name, photoURL: photo });
      toast.success("Registration successful!");
      navigate(from, { replace: true });
    } catch (err) {
      toast.error(err.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await googleLogin();
      toast.success("Login with Google successful!");
      navigate(from, { replace: true });
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="bg-white dark:bg-gray-800 p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full p-3 rounded border dark:border-gray-600 bg-gray-100 dark:bg-gray-700 focus:outline-none"
          />
          <input
            type="text"
            placeholder="Photo URL"
            value={photo}
            onChange={(e) => setPhoto(e.target.value)}
            required
            className="w-full p-3 rounded border dark:border-gray-600 bg-gray-100 dark:bg-gray-700 focus:outline-none"
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full p-3 rounded border dark:border-gray-600 bg-gray-100 dark:bg-gray-700 focus:outline-none"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full p-3 rounded border dark:border-gray-600 bg-gray-100 dark:bg-gray-700 focus:outline-none"
          />
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-3 rounded hover:bg-indigo-500 transition"
          >
            Register
          </button>
        </form>
        <button
          onClick={handleGoogleLogin}
          className="w-full mt-3 bg-red-500 text-white py-3 rounded hover:bg-red-400 transition"
        >
          Register/Login with Google
        </button>
        <p className="mt-4 text-center">
          Already have an account?{" "}
          <Link to="/login" className="text-indigo-500 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
