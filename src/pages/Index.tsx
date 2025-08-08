import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Star, Shield, Truck, Award } from "lucide-react";
import { useCart } from "@/hooks/useCart";
import { toast } from "@/hooks/use-toast";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

const Index = () => {
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const { addItem } = useCart();

  useEffect(() => {
    fetchFeaturedProducts();
  }, []);

  const fetchFeaturedProducts = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products?limit=4");
      const data = await response.json();
      setFeaturedProducts(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching products:", error);
      setLoading(false);
    }
  };

  const handleAddToCart = (product: Product) => {
    addItem({
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.image,
    });
    toast({
      title: "Added to cart",
      description: `${product.title} has been added to your cart.`,
    });
  };

  const features = [
    {
      icon: Shield,
      title: "Authenticity Guaranteed",
      description: "Every product comes with a certificate of authenticity"
    },
    {
      icon: Truck,
      title: "Free Worldwide Shipping",
      description: "Complimentary shipping on all orders above $500"
    },
    {
      icon: Award,
      title: "Premium Quality",
      description: "Curated selection of the finest luxury goods"
    }
  ];

  return (
    <div className="min-h-screen bg-luxury-dark">
      {/* Hero Section */}
      <section className="hero-section relative py-20 lg:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold text-luxury-text-primary mb-6">
                Discover
                <span className="block bg-gradient-luxury bg-clip-text text-transparent">
                  Luxury
                </span>
                Redefined
              </h1>
              <p className="text-xl md:text-2xl text-luxury-text-secondary max-w-3xl mx-auto mb-12 leading-relaxed">
                Experience the epitome of elegance with our curated collection of 
                premium products designed for those who appreciate the finer things in life.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/products" className="btn-luxury group">
                  Explore Collection
                  <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
                <Link to="/about" className="btn-luxury-outline">
                  Our Story
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-luxury-gold/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-luxury-gold/5 rounded-full blur-2xl animate-pulse"></div>
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
              The LUXE Experience
            </h2>
            <p className="text-xl text-luxury-text-secondary max-w-2xl mx-auto">
              We're committed to providing an unparalleled luxury shopping experience 
              with every interaction.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
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

      {/* Featured Products */}
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
              Featured Collection
            </h2>
            <p className="text-xl text-luxury-text-secondary max-w-2xl mx-auto">
              Handpicked selection of our most coveted luxury items, each chosen for 
              its exceptional quality and timeless appeal.
            </p>
          </motion.div>

          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="card-luxury p-6 animate-pulse">
                  <div className="aspect-square bg-luxury-surface-hover rounded-lg mb-4"></div>
                  <div className="h-4 bg-luxury-surface-hover rounded mb-2"></div>
                  <div className="h-4 bg-luxury-surface-hover rounded w-3/4"></div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="card-luxury overflow-hidden product-card group"
                >
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-luxury-gold text-sm font-medium">
                        {product.category}
                      </span>
                      <div className="flex items-center space-x-1">
                        <Star className="text-luxury-gold fill-current" size={16} />
                        <span className="text-luxury-text-muted text-sm">
                          {product.rating.rate}
                        </span>
                      </div>
                    </div>
                    <h3 className="text-luxury-text-primary font-semibold mb-2 line-clamp-2">
                      {product.title}
                    </h3>
                    <div className="flex items-center justify-between">
                      <span className="text-luxury-gold text-xl font-bold">
                        ${product.price}
                      </span>
                      <div className="space-x-2">
                        <Link
                          to={`/products/${product.id}`}
                          className="btn-luxury-ghost text-sm"
                        >
                          View
                        </Link>
                        <button
                          onClick={() => handleAddToCart(product)}
                          className="btn-luxury text-sm"
                        >
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link to="/products" className="btn-luxury-outline">
              View All Products
            </Link>
          </motion.div>
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
              Join the Elite Circle
            </h2>
            <p className="text-xl text-luxury-text-secondary mb-8 leading-relaxed">
              Be the first to discover new arrivals, exclusive collections, and receive 
              personalized recommendations from our luxury specialists.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-luxury">
                Get Exclusive Access
              </Link>
              <Link to="/about" className="btn-luxury-outline">
                Learn More
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;
