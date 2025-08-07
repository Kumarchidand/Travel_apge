import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#111827] text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* Left: About */}
        <div>
          <h4 className="text-xl font-bold text-white mb-4">Travel Agency</h4>
          <p className="text-sm">
            Your trusted partner for unforgettable travel experiences.
            <br />
            Explore the world with us.
          </p>
        </div>

        {/* Center: Links */}
        <div>
          <h4 className="text-xl font-bold text-white mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">Home</a></li>
            <li><a href="#" className="hover:text-white">Shop</a></li>
            <li><a href="#" className="hover:text-white">About Us</a></li>
            <li><a href="#" className="hover:text-white">Contact Us</a></li>
          </ul>
        </div>

        {/* Right: Social + Subscribe */}
        <div>
          <h4 className="text-xl font-bold text-white mb-4">Follow Us</h4>
          <div className="flex gap-4 mb-6">
            <FaFacebookF className="text-blue-500 hover:text-white cursor-pointer" />
            <FaTwitter className="text-sky-400 hover:text-white cursor-pointer" />
            <FaInstagram className="text-pink-500 hover:text-white cursor-pointer" />
            <FaLinkedinIn className="text-blue-700 hover:text-white cursor-pointer" />
          </div>
          <form className="flex">
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-3 py-2 text-sm rounded-l-md bg-gray-800 text-white border border-gray-600 focus:outline-none"
            />
            <button
              type="submit"
              className="px-4 bg-blue-600 text-white text-sm font-semibold rounded-r-md hover:bg-blue-700"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-sm text-center md:flex md:justify-between md:text-left px-6">
        <p className="mb-2 md:mb-0">&copy; 2024 Travel Agency. All rights reserved.</p>
        <div className="flex justify-center gap-6">
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <a href="#" className="hover:text-white">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
