import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-100 py-8 mt-10">
      <div className="container mx-auto text-center space-y-2">
        <h2 className="text-xl font-bold">StudyMate</h2>
        <p>
          Connect with the best study partners for a better learning experience.
        </p>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="#" className="hover:text-indigo-500">
            Facebook
          </a>
          <a href="#" className="hover:text-indigo-500">
            Twitter
          </a>
          <a href="#" className="hover:text-indigo-500">
            LinkedIn
          </a>
          <a href="#" className="hover:text-indigo-500">
            Instagram
          </a>
        </div>
        <p className="mt-2 text-sm">
          &copy; {new Date().getFullYear()} StudyMate. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
