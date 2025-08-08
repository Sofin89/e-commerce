import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real app, you would send this to Getform.io or Formspree
    // For demo purposes, we'll just show a success message
    try {
      // Simulated API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Message sent successfully!",
        description: "Thank you for contacting us. We'll get back to you within 24 hours.",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again later or contact us directly.",
        variant: "destructive"
      });
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: "luxury@luxestore.com",
      description: "Send us an email anytime"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: "+1 (555) 123-4567",
      description: "Mon-Fri 9AM-6PM EST"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: "123 Luxury Avenue, New York, NY 10001",
      description: "Our flagship showroom"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: "Mon-Sat: 9AM-8PM",
      description: "Sunday: 11AM-6PM"
    }
  ];

  return (
    <div className="min-h-screen bg-luxury-dark">
      {/* Hero Section */}
      <section className="hero-section py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-luxury-text-primary mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-luxury-text-secondary max-w-2xl mx-auto">
              Have a question about our luxury collection? Our expert team is here to help 
              you find the perfect piece or answer any inquiries you may have.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card-luxury p-6 text-center group hover:shadow-glow transition-all duration-300"
              >
                <div className="w-12 h-12 bg-luxury-gold rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <info.icon size={24} className="text-luxury-dark" />
                </div>
                <h3 className="text-luxury-text-primary font-semibold mb-2">
                  {info.title}
                </h3>
                <p className="text-luxury-gold font-medium mb-1">
                  {info.details}
                </p>
                <p className="text-luxury-text-muted text-sm">
                  {info.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Form */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="card-luxury p-8">
                <h2 className="text-3xl font-bold text-luxury-text-primary mb-6">
                  Send us a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="input-luxury"
                      required
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="input-luxury"
                      required
                    />
                  </div>
                  
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="input-luxury w-full"
                    required
                  >
                    <option value="">Select Subject</option>
                    <option value="product-inquiry">Product Inquiry</option>
                    <option value="order-support">Order Support</option>
                    <option value="shipping">Shipping Information</option>
                    <option value="returns">Returns & Exchanges</option>
                    <option value="general">General Question</option>
                    <option value="partnership">Partnership Opportunity</option>
                  </select>

                  <textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    className="input-luxury w-full resize-none"
                    required
                  />

                  <button
                    type="submit"
                    className="btn-luxury w-full flex items-center justify-center space-x-2"
                  >
                    <Send size={20} />
                    <span>Send Message</span>
                  </button>
                </form>
              </div>
            </motion.div>

            {/* Additional Info */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="card-luxury p-8">
                <h3 className="text-2xl font-bold text-luxury-text-primary mb-6">
                  Luxury Concierge Service
                </h3>
                <div className="space-y-4 text-luxury-text-secondary">
                  <p>
                    Our dedicated concierge team provides personalized assistance 
                    for all your luxury shopping needs. From product recommendations 
                    to special orders, we're here to make your experience exceptional.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-luxury-gold rounded-full"></div>
                      <span>Personal shopping consultation</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-luxury-gold rounded-full"></div>
                      <span>Exclusive product access</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-luxury-gold rounded-full"></div>
                      <span>White-glove delivery service</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-luxury-gold rounded-full"></div>
                      <span>24/7 premium support</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card-luxury p-8">
                <h3 className="text-2xl font-bold text-luxury-text-primary mb-6">
                  Visit Our Showroom
                </h3>
                <p className="text-luxury-text-secondary mb-6">
                  Experience our luxury products in person at our flagship showroom 
                  in the heart of Manhattan. Schedule a private viewing with one of 
                  our luxury specialists.
                </p>
                <button className="btn-luxury-outline w-full">
                  Schedule Appointment
                </button>
              </div>

              <div className="card-luxury p-8">
                <h3 className="text-2xl font-bold text-luxury-text-primary mb-4">
                  Response Time
                </h3>
                <div className="space-y-3 text-luxury-text-secondary">
                  <div className="flex justify-between">
                    <span>Email inquiries:</span>
                    <span className="text-luxury-gold font-medium">Within 4 hours</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Phone support:</span>
                    <span className="text-luxury-gold font-medium">Immediate</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Concierge service:</span>
                    <span className="text-luxury-gold font-medium">Within 1 hour</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;