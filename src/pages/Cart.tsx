import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Trash2, Plus, Minus, ShoppingBag } from "lucide-react";
import { useCart } from "@/hooks/useCart";

const Cart = () => {
  const { items, updateQuantity, removeItem, getTotalPrice, clearCart } = useCart();

  const totalPrice = getTotalPrice();

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-luxury-dark flex items-center justify-center">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <ShoppingBag size={64} className="text-luxury-text-muted mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-luxury-text-primary mb-4">
            Your cart is empty
          </h2>
          <p className="text-luxury-text-muted mb-8">
            Discover our luxury collection and add some items to your cart.
          </p>
          <Link to="/products" className="btn-luxury">
            Start Shopping
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-luxury-dark py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-luxury-text-primary mb-4">
            Shopping Cart
          </h1>
          <p className="text-xl text-luxury-text-secondary">
            Review your selected items before checkout
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card-luxury p-6"
              >
                <div className="flex items-center space-x-4">
                  {/* Product Image */}
                  <div className="flex-shrink-0 w-24 h-24 bg-luxury-surface rounded-lg overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Product Info */}
                  <div className="flex-1">
                    <h3 className="text-luxury-text-primary font-semibold mb-2">
                      {item.title}
                    </h3>
                    <p className="text-luxury-gold text-xl font-bold">
                      ${item.price}
                    </p>
                  </div>

                  {/* Quantity Controls */}
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="p-1 text-luxury-text-muted hover:text-luxury-gold transition-colors duration-200"
                    >
                      <Minus size={20} />
                    </button>
                    <span className="w-12 text-center text-luxury-text-primary font-medium">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="p-1 text-luxury-text-muted hover:text-luxury-gold transition-colors duration-200"
                    >
                      <Plus size={20} />
                    </button>
                  </div>

                  {/* Total Price */}
                  <div className="text-luxury-gold text-xl font-bold min-w-[80px] text-right">
                    ${(item.price * item.quantity).toFixed(2)}
                  </div>

                  {/* Remove Button */}
                  <button
                    onClick={() => removeItem(item.id)}
                    className="p-2 text-luxury-text-muted hover:text-red-400 transition-colors duration-200"
                  >
                    <Trash2 size={20} />
                  </button>
                </div>
              </motion.div>
            ))}

            {/* Clear Cart Button */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center"
            >
              <button
                onClick={clearCart}
                className="text-luxury-text-muted hover:text-red-400 transition-colors duration-200"
              >
                Clear entire cart
              </button>
            </motion.div>
          </div>

          {/* Order Summary */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="card-luxury p-6 h-fit"
          >
            <h2 className="text-2xl font-bold text-luxury-text-primary mb-6">
              Order Summary
            </h2>

            <div className="space-y-4 mb-6">
              <div className="flex justify-between text-luxury-text-secondary">
                <span>Subtotal ({items.length} items)</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-luxury-text-secondary">
                <span>Shipping</span>
                <span className="text-green-400">Free</span>
              </div>
              <div className="flex justify-between text-luxury-text-secondary">
                <span>Tax</span>
                <span>${(totalPrice * 0.08).toFixed(2)}</span>
              </div>
              <div className="border-t border-luxury-surface-hover pt-4">
                <div className="flex justify-between text-luxury-text-primary text-xl font-bold">
                  <span>Total</span>
                  <span className="text-luxury-gold">
                    ${(totalPrice * 1.08).toFixed(2)}
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <Link to="/checkout" className="btn-luxury w-full text-center block">
                Proceed to Checkout
              </Link>
              <Link
                to="/products"
                className="btn-luxury-outline w-full text-center block"
              >
                Continue Shopping
              </Link>
            </div>

            {/* Security Features */}
            <div className="mt-6 pt-6 border-t border-luxury-surface-hover">
              <div className="text-luxury-text-muted text-sm space-y-2">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>Secure checkout</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>Free worldwide shipping</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>30-day return policy</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Cart;