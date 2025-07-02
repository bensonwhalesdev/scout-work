import React from "react";

const LayoutFooter = () => {

  return (
    <footer className="w-full bg-white border-t-2 border-green-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
        <p>&copy; {new Date().getFullYear()} ScoutWork. All rights reserved.</p>

        <div className="flex gap-4 mt-3 md:mt-0">
          <a href="/privacy-policy" className="hover:text-green-600 transition">Privacy Policy</a>
          <a href="/terms-of-service" className="hover:text-green-600 transition">Terms of Service</a>
          <a href="/contact" className="hover:text-green-600 transition">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default LayoutFooter;
