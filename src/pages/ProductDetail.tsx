import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Star, ShoppingCart, Heart, ArrowLeft, Plus, Minus } from "lucide-react";
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

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const { addItem } = useCart();

  useEffect(() => {
    if (id) {
      fetchProduct(id);
    }
  }, [id]);

  const fetchProduct = async (productId: string) => {
    try {
      const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
      const data = await response.json();
      setProduct(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching product:", error);
      setLoading(false);
    }
  };

  const handleAddToCart = () => {
    if (product) {
      for (let i = 0; i < quantity; i++) {
        addItem({
          id: product.id,
          title: product.title,
          price: product.price,
          image: product.image,
        });
      }
      toast({
        title: "Added to cart",
        description: `${quantity} ${product.title}(s) added to your cart.`,
      });
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="w-12 h-12 border-4 border-luxury-gold border-t-transparent rounded-full"
        />
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-luxury-text-primary mb-4">
            Product not found
          </h2>
          <Link to="/products" className="btn-luxury">
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  // Mock additional images (in real app, these would come from API)
  const productImages = [product.image, product.image, product.image];

  return (
    <div className="min-h-screen bg-luxury-dark py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="flex items-center space-x-2 mb-8"
        >
          <Link
            to="/products"
            className="flex items-center space-x-2 text-luxury-text-muted hover:text-luxury-gold transition-colors duration-200"
          >
            <ArrowLeft size={20} />
            <span>Back to Products</span>
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            {/* Main image */}
            <div className="aspect-square bg-luxury-surface rounded-xl overflow-hidden">
              <img
                src={productImages[selectedImage]}
                alt={product.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Thumbnail images */}
            <div className="grid grid-cols-3 gap-4">
              {productImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square bg-luxury-surface rounded-lg overflow-hidden border-2 transition-colors duration-200 ${
                    selectedImage === index
                      ? "border-luxury-gold"
                      : "border-transparent hover:border-luxury-surface-hover"
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.title} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Category */}
            <span className="inline-block px-3 py-1 bg-luxury-surface text-luxury-gold text-sm font-medium rounded-full">
              {product.category}
            </span>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-bold text-luxury-text-primary">
              {product.title}
            </h1>

            {/* Rating */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    className={`${
                      i < Math.floor(product.rating.rate)
                        ? "text-luxury-gold fill-current"
                        : "text-luxury-text-muted"
                    }`}
                  />
                ))}
              </div>
              <span className="text-luxury-text-muted">
                {product.rating.rate} ({product.rating.count} reviews)
              </span>
            </div>

            {/* Price */}
            <div className="text-4xl font-bold text-luxury-gold">
              ${product.price}
            </div>

            {/* Description */}
            <p className="text-luxury-text-secondary leading-relaxed">
              {product.description}
            </p>

            {/* Quantity selector */}
            <div className="flex items-center space-x-4">
              <span className="text-luxury-text-primary font-medium">Quantity:</span>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-2 text-luxury-text-muted hover:text-luxury-gold transition-colors duration-200"
                >
                  <Minus size={20} />
                </button>
                <span className="w-12 text-center text-luxury-text-primary font-medium">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-2 text-luxury-text-muted hover:text-luxury-gold transition-colors duration-200"
                >
                  <Plus size={20} />
                </button>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex space-x-4">
              <button
                onClick={handleAddToCart}
                className="btn-luxury flex items-center space-x-2 flex-1"
              >
                <ShoppingCart size={20} />
                <span>Add to Cart</span>
              </button>
              <button className="btn-luxury-outline p-3">
                <Heart size={20} />
              </button>
            </div>

            {/* Product details */}
            <div className="border-t border-luxury-surface-hover pt-6 space-y-4">
              <h3 className="text-luxury-text-primary font-semibold">Product Details</h3>
              <div className="space-y-2 text-luxury-text-secondary">
                <div className="flex justify-between">
                  <span>Category:</span>
                  <span className="text-luxury-gold">{product.category}</span>
                </div>
                <div className="flex justify-between">
                  <span>SKU:</span>
                  <span>#{product.id.toString().padStart(6, '0')}</span>
                </div>
                <div className="flex justify-between">
                  <span>Availability:</span>
                  <span className="text-green-400">In Stock</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping:</span>
                  <span>Free worldwide shipping</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;