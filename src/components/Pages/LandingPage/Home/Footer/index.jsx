import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#195A22] text-gray-300 py-10 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand */}
        <div>
          <h2 className="text-xl font-bold text-white mb-3">Scout-Work</h2>
          <p className="text-sm">
            Connecting freelancers with clients in the easiest, most trustworthy way.
          </p>
        </div>

        {/* Explore */}
        <div>
          <h3 className="text-sm font-semibold text-white mb-3 uppercase tracking-wide">Explore</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">Browse Freelancers</a></li>
            <li><a href="#" className="hover:text-white">Post a Task</a></li>
            <li><a href="#" className="hover:text-white">Find Work</a></li>
            <li><a href="#" className="hover:text-white">Categories</a></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-sm font-semibold text-white mb-3 uppercase tracking-wide">Company</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">About Us</a></li>
            <li><a href="#" className="hover:text-white">How It Works</a></li>
            <li><a href="#" className="hover:text-white">Careers</a></li>
            <li><a href="#" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h3 className="text-sm font-semibold text-white mb-3 uppercase tracking-wide">Follow Us</h3>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white">
              <Facebook size={20} />
            </a>
            <a href="#" className="hover:text-white">
              <Twitter size={20} />
            </a>
            <a href="#" className="hover:text-white">
              <Instagram size={20} />
            </a>
            <a href="#" className="hover:text-white">
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-10 text-center text-xs text-white">
        &copy; {new Date().getFullYear()} Scout-Work. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
