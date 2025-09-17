"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const SocialIcon = ({ children, href, label }) => (
  <motion.a
    href={href}
    aria-label={label}
    whileHover={{ y: -2 }}
    whileTap={{ y: 1 }}
    className="text-primary-300 hover:text-primary-200 transition-colors duration-300"
  >
    {children}
  </motion.a>
);

const Footer = () => {
  const footerLinks = [
    { href: "#", label: "Contact", id: "contact" },
    { href: "#", label: "Privacy Policy", id: "privacy" },
    { href: "#", label: "Terms of Service", id: "terms" },
  ];

  return (
    <footer className="bg-gradient-to-t from-warm-50/50 to-primary-50 border-t border-warm-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="py-12"
        >
          {/* Footer Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 mb-8">
            {footerLinks.map((link, index) => (
              <motion.div
                key={link.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Link
                  href={link.href}
                  className="text-primary-300 text-base font-normal leading-normal hover:text-primary-200 transition-colors duration-300 relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-200 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Social Media Icons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-6 mb-8"
          >
            <SocialIcon key="instagram" href="#" label="Instagram">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 256 256"
              >
                <path d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160ZM176,24H80A56.06,56.06,0,0,0,24,80v96a56.06,56.06,0,0,0,56,56h96a56.06,56.06,0,0,0,56-56V80A56.06,56.06,0,0,0,176,24Zm40,152a40,40,0,0,1-40,40H80a40,40,0,0,1-40-40V80A40,40,0,0,1,80,40h96a40,40,0,0,1,40,40ZM192,76a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z" />
              </svg>
            </SocialIcon>

            <SocialIcon key="pinterest" href="#" label="Pinterest">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 256 256"
              >
                <path d="M216,112c0,22.57-7.9,43.2-22.23,58.11C180.39,184,162.25,192,144,192c-17.88,0-29.82-5.86-37.43-12L95.79,225.83A8,8,0,0,1,88,232a8.24,8.24,0,0,1-1.84-.21,8,8,0,0,1-6-9.62l32-136a8,8,0,0,1,15.58,3.66l-16.9,71.8C114,166,123.3,176,144,176c27.53,0,56-23.94,56-64A72,72,0,1,0,65.63,148a8,8,0,0,1-13.85,8A88,88,0,1,1,216,112Z" />
              </svg>
            </SocialIcon>

            <SocialIcon key="facebook" href="#" label="Facebook">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 256 256"
              >
                <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm8,191.63V152h24a8,8,0,0,0,0-16H136V112a16,16,0,0,1,16-16h16a8,8,0,0,0,0-16H152a32,32,0,0,0-32,32v24H96a8,8,0,0,0,0-16h24v63.63a88,88,0,1,1,16,0Z" />
              </svg>
            </SocialIcon>
          </motion.div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-primary-300 text-base font-normal leading-normal">
              © 2024 Knot2Heart. All rights reserved.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
