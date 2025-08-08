import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { ShoppingCart, Menu, X, User } from "lucide-react";
import { SignInButton, SignUpButton, UserButton, useUser } from "@clerk/clerk-react";
import { useCart } from "@/hooks/useCart";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { user, isSignedIn } = useUser();
  const { items } = useCart();

  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 nav-blur"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold bg-gradient-luxury bg-clip-text text-transparent"
            >
              LUXE
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`relative font-medium transition-colors duration-200 ${
                  isActive(item.path)
                    ? "text-luxury-gold"
                    : "text-luxury-text-secondary hover:text-luxury-gold"
                }`}
              >
                {item.name}
                {isActive(item.path) && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-luxury-gold"
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Right side items */}
          <div className="flex items-center space-x-4">
            {/* Cart */}
            <Link to="/cart" className="relative">
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 text-luxury-text-secondary hover:text-luxury-gold transition-colors duration-200"
              >
                <ShoppingCart size={24} />
                {totalItems > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-1 -right-1 bg-luxury-gold text-luxury-dark text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center"
                  >
                    {totalItems}
                  </motion.span>
                )}
              </motion.div>
            </Link>

            {/* Auth */}
            {isSignedIn ? (
              <UserButton afterSignOutUrl="/" />
            ) : (
              <div className="hidden md:flex items-center space-x-3">
                <SignInButton mode="modal">
                  <button className="text-luxury-text-secondary hover:text-luxury-gold transition-colors duration-200">
                    Sign In
                  </button>
                </SignInButton>
                <SignUpButton mode="modal">
                  <button className="btn-luxury-outline">
                    Sign Up
                  </button>
                </SignUpButton>
              </div>
            )}

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-luxury-text-secondary hover:text-luxury-gold transition-colors duration-200"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden py-4 border-t border-luxury-surface-hover"
          >
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`font-medium transition-colors duration-200 ${
                    isActive(item.path)
                      ? "text-luxury-gold"
                      : "text-luxury-text-secondary hover:text-luxury-gold"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              {!isSignedIn && (
                <div className="flex flex-col space-y-2 pt-4 border-t border-luxury-surface-hover">
                  <SignInButton mode="modal">
                    <button className="text-left text-luxury-text-secondary hover:text-luxury-gold transition-colors duration-200">
                      Sign In
                    </button>
                  </SignInButton>
                  <SignUpButton mode="modal">
                    <button className="btn-luxury-outline text-sm">
                      Sign Up
                    </button>
                  </SignUpButton>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;