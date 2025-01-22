import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Newsletter Section */}
        <div className="flex flex-col md:flex-row items-start md:items-center gap-8 pb-12 border-b border-gray-200">
          <div className="flex items-center gap-3">
            <div className="bg-[#FF4B6E] p-2 rounded">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 6h18v12H3V6zm9 7L4 8v9h16V8l-8 5z" fill="white"/>
              </svg>
            </div>
            <span className="text-xl font-bold">do List</span>
          </div>
          <div className="flex-1">
            <p className="text-sm text-gray-600 mb-2">
              Subscribe to our newsletter for the latest features and updates delivered to you
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email here"
                className="flex-1 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#FF4B6E] focus:border-transparent"
              />
              <button className="px-6 py-2 bg-[#FF4B6E] text-white rounded hover:bg-[#FF758C] transition-colors">
                Join
              </button>
            </div>
            <p className="mt-2 text-xs text-gray-500">
              By subscribing, you consent to our Privacy Policy and agree to receive updates
            </p>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 py-12">
          {/* Useful Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase mb-4">Useful Links</h3>
            <ul className="space-y-3">
              <li><a href="/" className="text-gray-600 hover:text-gray-900">Home Page</a></li>
              <li><a href="/about" className="text-gray-600 hover:text-gray-900">About Us</a></li>
              <li><a href="/contact" className="text-gray-600 hover:text-gray-900">Contact Us</a></li>
              <li><a href="/blog" className="text-gray-600 hover:text-gray-900">Blog Posts</a></li>
              <li><a href="/faqs" className="text-gray-600 hover:text-gray-900">FAQs</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase mb-4">Resources</h3>
            <ul className="space-y-3">
              <li><a href="/help" className="text-gray-600 hover:text-gray-900">Help Center</a></li>
              <li><a href="/guide" className="text-gray-600 hover:text-gray-900">User Guide</a></li>
              <li><a href="/community" className="text-gray-600 hover:text-gray-900">Community Forum</a></li>
              <li><a href="/feedback" className="text-gray-600 hover:text-gray-900">Feedback</a></li>
              <li><a href="/support" className="text-gray-600 hover:text-gray-900">Support</a></li>
            </ul>
          </div>

          {/* Connect With Us */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase mb-4">Connect With Us</h3>
            <ul className="space-y-3">
              <li>
                <a href="https://facebook.com" className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
                  <Facebook className="w-5 h-5" />
                  <span>Facebook</span>
                </a>
              </li>
              <li>
                <a href="https://instagram.com" className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
                  <Instagram className="w-5 h-5" />
                  <span>Instagram</span>
                </a>
              </li>
              <li>
                <a href="https://twitter.com" className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
                  <Twitter className="w-5 h-5" />
                  <span>X</span>
                </a>
              </li>
              <li>
                <a href="https://linkedin.com" className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
                  <Linkedin className="w-5 h-5" />
                  <span>LinkedIn</span>
                </a>
              </li>
              <li>
                <a href="https://youtube.com" className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
                  <Youtube className="w-5 h-5" />
                  <span>YouTube</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Cookie Settings */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase mb-4">Cookie Settings</h3>
            <p className="text-sm text-gray-600">
              Manage your cookie preferences and learn about how we use cookies to improve your experience.
            </p>
            <button className="mt-4 px-4 py-2 border border-gray-300 rounded text-sm text-gray-700 hover:bg-gray-50">
              Manage Settings
            </button>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-600">
              © {currentYear} Organizer. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="/privacy" className="text-sm text-gray-600 hover:text-gray-900">Privacy Policy</a>
              <a href="/terms" className="text-sm text-gray-600 hover:text-gray-900">Terms of Service</a>
              <a href="/cookie-policy" className="text-sm text-gray-600 hover:text-gray-900">Cookie Settings</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}