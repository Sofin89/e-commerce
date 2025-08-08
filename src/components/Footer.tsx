import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Instagram, Twitter, Facebook, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Mail, href: "#", label: "Email" },
  ];

  const footerLinks = [
    {
      title: "Company",
      links: [
        { name: "About Us", href: "/about" },
        { name: "Contact", href: "/contact" },
        { name: "Careers", href: "#" },
        { name: "Press", href: "#" },
      ],
    },
    {
      title: "Support",
      links: [
        { name: "Help Center", href: "#" },
        { name: "Shipping", href: "#" },
        { name: "Returns", href: "#" },
        { name: "Size Guide", href: "#" },
      ],
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", href: "#" },
        { name: "Terms of Service", href: "#" },
        { name: "Cookie Policy", href: "#" },
        { name: "GDPR", href: "#" },
      ],
    },
  ];

  return (
    <footer className="bg-luxury-darker border-t border-luxury-surface-hover">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand section */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-3xl font-bold bg-gradient-luxury bg-clip-text text-transparent"
              >
                LUXE
              </motion.div>
            </Link>
            <p className="text-luxury-text-muted mb-6 max-w-md">
              Discover extraordinary luxury products crafted for those who appreciate 
              the finest things in life. Every piece tells a story of elegance and 
              sophistication.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 text-luxury-text-muted hover:text-luxury-gold transition-colors duration-200"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Footer links */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="text-luxury-text-primary font-semibold mb-4">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-luxury-text-muted hover:text-luxury-gold transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-luxury-surface-hover mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-luxury-text-muted text-sm">
            © {currentYear} LUXE. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link
              to="#"
              className="text-luxury-text-muted hover:text-luxury-gold text-sm transition-colors duration-200"
            >
              Privacy Policy
            </Link>
            <Link
              to="#"
              className="text-luxury-text-muted hover:text-luxury-gold text-sm transition-colors duration-200"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;