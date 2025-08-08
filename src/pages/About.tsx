import { motion } from "framer-motion";
import { Award, Shield, Truck, Users } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Award,
      title: "Premium Quality",
      description: "Every product is carefully curated and meets our highest standards of luxury and craftsmanship."
    },
    {
      icon: Shield,
      title: "Authenticity Guaranteed",
      description: "All our products come with certificates of authenticity and are sourced directly from authorized dealers."
    },
    {
      icon: Truck,
      title: "Worldwide Shipping",
      description: "Free insured shipping worldwide with tracking and signature confirmation included."
    },
    {
      icon: Users,
      title: "Expert Support",
      description: "Our luxury specialists are available 24/7 to assist you with any questions or concerns."
    }
  ];

  const stats = [
    { number: "50K+", label: "Happy Customers" },
    { number: "10K+", label: "Luxury Products" },
    { number: "99.9%", label: "Customer Satisfaction" },
    { number: "150+", label: "Countries Served" }
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
              Crafting Luxury
              <span className="block bg-gradient-luxury bg-clip-text text-transparent">
                Since 1985
              </span>
            </h1>
            <p className="text-xl text-luxury-text-secondary max-w-3xl mx-auto leading-relaxed">
              At LUXE, we believe that luxury is not just about owning beautiful things—it's about 
              experiencing moments of pure elegance and sophistication that elevate everyday life.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-luxury-text-primary mb-6">
                Our Story
              </h2>
              <div className="space-y-6 text-luxury-text-secondary leading-relaxed">
                <p>
                  Founded in 1985 by master craftsman Alexander Montclair, LUXE began as a small 
                  atelier in the heart of Paris, dedicated to creating exceptional luxury goods 
                  for discerning clientele.
                </p>
                <p>
                  What started as a passion for perfection has evolved into a global destination 
                  for luxury enthusiasts. Today, we partner with the world's finest artisans 
                  and luxury brands to bring you an unparalleled collection of premium products.
                </p>
                <p>
                  Our commitment remains unchanged: to provide our customers with access to the 
                  most exquisite luxury items while maintaining the highest standards of quality, 
                  authenticity, and service.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="aspect-square bg-luxury-surface rounded-2xl overflow-hidden"
            >
              <div className="w-full h-full bg-gradient-luxury opacity-20"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-luxury-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-luxury-text-primary mb-6">
              Why Choose LUXE
            </h2>
            <p className="text-xl text-luxury-text-secondary max-w-2xl mx-auto">
              We're more than just a luxury retailer—we're your trusted partner in 
              discovering extraordinary experiences.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="w-16 h-16 bg-luxury-gold rounded-full flex items-center justify-center mx-auto mb-6 group-hover:shadow-glow transition-all duration-300">
                  <feature.icon size={32} className="text-luxury-dark" />
                </div>
                <h3 className="text-xl font-semibold text-luxury-text-primary mb-4">
                  {feature.title}
                </h3>
                <p className="text-luxury-text-secondary leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-luxury-text-primary mb-6">
              Trusted by Luxury Enthusiasts Worldwide
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-luxury-gold mb-2">
                  {stat.number}
                </div>
                <div className="text-luxury-text-secondary font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-luxury-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-luxury-text-primary mb-6">
              Experience Luxury Like Never Before
            </h2>
            <p className="text-xl text-luxury-text-secondary mb-8 leading-relaxed">
              Join thousands of satisfied customers who have discovered the perfect blend 
              of quality, elegance, and exceptional service.
            </p>
            <div className="space-x-4">
              <a href="/products" className="btn-luxury">
                Explore Collection
              </a>
              <a href="/contact" className="btn-luxury-outline">
                Get in Touch
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;