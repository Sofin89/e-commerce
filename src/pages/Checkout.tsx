import { useState } from "react";
import { motion } from "framer-motion";
import { CreditCard, Lock, Shield, Truck } from "lucide-react";
import { useCart } from "@/hooks/useCart";
import { toast } from "@/hooks/use-toast";

const Checkout = () => {
  const { items, getTotalPrice, clearCart } = useCart();
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    cardName: "",
  });

  const totalPrice = getTotalPrice();
  const tax = totalPrice * 0.08;
  const finalTotal = totalPrice + tax;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate order processing
    toast({
      title: "Order placed successfully!",
      description: "Thank you for your purchase. You will receive a confirmation email shortly.",
    });
    
    // Clear cart after successful "purchase"
    clearCart();
    
    // In a real app, you would redirect to a success page
    console.log("Order processed:", { formData, items, total: finalTotal });
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-luxury-dark flex items-center justify-center">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-luxury-text-primary mb-4">
            Your cart is empty
          </h2>
          <p className="text-luxury-text-muted mb-8">
            Add some items to your cart to proceed with checkout.
          </p>
          <a href="/products" className="btn-luxury">
            Start Shopping
          </a>
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
            Checkout
          </h1>
          <p className="text-xl text-luxury-text-secondary">
            Complete your luxury shopping experience
          </p>
        </motion.div>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Checkout Form */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Contact Information */}
            <div className="card-luxury p-6">
              <h2 className="text-2xl font-bold text-luxury-text-primary mb-6">
                Contact Information
              </h2>
              <div className="space-y-4">
                <input
                  type="email"
                  name="email"
                  placeholder="Email address"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="input-luxury w-full"
                  required
                />
              </div>
            </div>

            {/* Shipping Address */}
            <div className="card-luxury p-6">
              <h2 className="text-2xl font-bold text-luxury-text-primary mb-6">
                Shipping Address
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First name"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="input-luxury"
                  required
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last name"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="input-luxury"
                  required
                />
                <input
                  type="text"
                  name="address"
                  placeholder="Address"
                  value={formData.address}
                  onChange={handleInputChange}
                  className="input-luxury md:col-span-2"
                  required
                />
                <input
                  type="text"
                  name="city"
                  placeholder="City"
                  value={formData.city}
                  onChange={handleInputChange}
                  className="input-luxury"
                  required
                />
                <input
                  type="text"
                  name="state"
                  placeholder="State"
                  value={formData.state}
                  onChange={handleInputChange}
                  className="input-luxury"
                  required
                />
                <input
                  type="text"
                  name="zipCode"
                  placeholder="ZIP Code"
                  value={formData.zipCode}
                  onChange={handleInputChange}
                  className="input-luxury"
                  required
                />
                <select
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                  className="input-luxury"
                  required
                >
                  <option value="">Select Country</option>
                  <option value="US">United States</option>
                  <option value="CA">Canada</option>
                  <option value="UK">United Kingdom</option>
                  <option value="DE">Germany</option>
                  <option value="FR">France</option>
                </select>
              </div>
            </div>

            {/* Payment Information */}
            <div className="card-luxury p-6">
              <div className="flex items-center space-x-2 mb-6">
                <CreditCard className="text-luxury-gold" size={24} />
                <h2 className="text-2xl font-bold text-luxury-text-primary">
                  Payment Information
                </h2>
                <Lock className="text-luxury-text-muted" size={20} />
              </div>
              <div className="grid grid-cols-1 gap-4">
                <input
                  type="text"
                  name="cardNumber"
                  placeholder="Card number"
                  value={formData.cardNumber}
                  onChange={handleInputChange}
                  className="input-luxury"
                  required
                />
                <input
                  type="text"
                  name="cardName"
                  placeholder="Name on card"
                  value={formData.cardName}
                  onChange={handleInputChange}
                  className="input-luxury"
                  required
                />
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="expiryDate"
                    placeholder="MM/YY"
                    value={formData.expiryDate}
                    onChange={handleInputChange}
                    className="input-luxury"
                    required
                  />
                  <input
                    type="text"
                    name="cvv"
                    placeholder="CVV"
                    value={formData.cvv}
                    onChange={handleInputChange}
                    className="input-luxury"
                    required
                  />
                </div>
              </div>
              
              {/* Security badges */}
              <div className="flex items-center justify-center space-x-4 mt-6 pt-6 border-t border-luxury-surface-hover">
                <div className="flex items-center space-x-2 text-luxury-text-muted text-sm">
                  <Shield size={16} />
                  <span>SSL Secured</span>
                </div>
                <div className="flex items-center space-x-2 text-luxury-text-muted text-sm">
                  <Lock size={16} />
                  <span>256-bit Encryption</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Order Summary */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            {/* Order Items */}
            <div className="card-luxury p-6">
              <h2 className="text-2xl font-bold text-luxury-text-primary mb-6">
                Order Summary
              </h2>
              
              <div className="space-y-4 mb-6">
                {items.map((item) => (
                  <div key={item.id} className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-luxury-surface rounded-lg overflow-hidden flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-luxury-text-primary font-medium text-sm">
                        {item.title}
                      </h3>
                      <p className="text-luxury-text-muted text-sm">
                        Qty: {item.quantity}
                      </p>
                    </div>
                    <div className="text-luxury-gold font-bold">
                      ${(item.price * item.quantity).toFixed(2)}
                    </div>
                  </div>
                ))}
              </div>

              {/* Price breakdown */}
              <div className="space-y-3 border-t border-luxury-surface-hover pt-4">
                <div className="flex justify-between text-luxury-text-secondary">
                  <span>Subtotal</span>
                  <span>${totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-luxury-text-secondary">
                  <span>Shipping</span>
                  <span className="text-green-400">Free</span>
                </div>
                <div className="flex justify-between text-luxury-text-secondary">
                  <span>Tax</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                <div className="border-t border-luxury-surface-hover pt-3">
                  <div className="flex justify-between text-luxury-text-primary text-xl font-bold">
                    <span>Total</span>
                    <span className="text-luxury-gold">${finalTotal.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Shipping Info */}
            <div className="card-luxury p-6">
              <div className="flex items-center space-x-3 mb-4">
                <Truck className="text-luxury-gold" size={24} />
                <h3 className="text-luxury-text-primary font-semibold">
                  Free Luxury Shipping
                </h3>
              </div>
              <p className="text-luxury-text-muted text-sm mb-4">
                Your order will be carefully packaged and shipped within 2-3 business days.
              </p>
              <div className="space-y-2 text-luxury-text-muted text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>Insured shipping</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>Signature confirmation</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>Tracking included</span>
                </div>
              </div>
            </div>

            {/* Place Order Button */}
            <button
              type="submit"
              className="btn-luxury w-full text-lg py-4"
            >
              Complete Order
            </button>

            <p className="text-luxury-text-muted text-sm text-center">
              By placing this order, you agree to our Terms of Service and Privacy Policy.
            </p>
          </motion.div>
        </form>
      </div>
    </div>
  );
};

export default Checkout;