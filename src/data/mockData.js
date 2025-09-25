// Mock data for the clothing e-commerce application

export const categories = [
  {
    id: 1,
    name: "Men",
    slug: "men",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=500&h=600&fit=crop",
    description: "Premium menswear collection"
  },
  {
    id: 2,
    name: "Women",
    slug: "women",
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=500&h=600&fit=crop",
    description: "Elegant womenswear collection"
  }
];

export const products = [
  // Men's Products
  {
    id: 1,
    name: "Classic White Shirt",
    price: 2999,
    category: "men",
    subcategory: "shirts",
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&h=500&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&h=500&fit=crop",
      "https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=400&h=500&fit=crop",
      "https://images.unsplash.com/photo-1621184455862-c163dfb30e0f?w=400&h=500&fit=crop"
    ],
    description: "Premium cotton white shirt with perfect fit and elegant design.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["White", "Blue", "Black"],
    inStock: true,
    rating: 4.8,
    reviews: 124,
    isNew: true,
    isFeatured: true
  },
  {
    id: 2,
    name: "Denim Jacket",
    price: 4999,
    category: "men",
    subcategory: "jackets",
    image: "https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=400&h=500&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=400&h=500&fit=crop",
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=500&fit=crop"
    ],
    description: "Classic denim jacket with vintage wash and modern fit.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Blue", "Black"],
    inStock: true,
    rating: 4.6,
    reviews: 89,
    isNew: false,
    isFeatured: true
  },
  {
    id: 3,
    name: "Chino Pants",
    price: 2499,
    originalPrice: 3299,
    category: "men",
    subcategory: "pants",
    image: "https://images.unsplash.com/photo-1506629905607-1b5a0b5b5b5b?w=400&h=500&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1506629905607-1b5a0b5b5b5b?w=400&h=500&fit=crop"
    ],
    description: "Comfortable chino pants perfect for casual and semi-formal occasions.",
    sizes: ["28", "30", "32", "34", "36", "38"],
    colors: ["Khaki", "Navy", "Black"],
    inStock: true,
    rating: 4.4,
    reviews: 67,
    isNew: false,
    isFeatured: false
  },
  {
    id: 4,
    name: "Sneakers",
    price: 3999,
    originalPrice: 4999,
    category: "men",
    subcategory: "shoes",
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=500&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=500&fit=crop"
    ],
    description: "Comfortable and stylish sneakers for everyday wear.",
    sizes: ["7", "8", "9", "10", "11", "12"],
    colors: ["White", "Black", "Navy"],
    inStock: true,
    rating: 4.7,
    reviews: 156,
    isNew: true,
    isFeatured: true
  },

  // Women's Products
  {
    id: 5,
    name: "Floral Summer Dress",
    price: 3999,
    originalPrice: 5499,
    category: "women",
    subcategory: "dresses",
    image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400&h=500&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400&h=500&fit=crop",
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=500&fit=crop"
    ],
    description: "Beautiful floral summer dress with elegant design and comfortable fit.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Floral", "Solid Navy", "Solid Black"],
    inStock: true,
    rating: 4.9,
    reviews: 203,
    isNew: true,
    isFeatured: true
  },
  {
    id: 6,
    name: "Blazer",
    price: 5999,
    originalPrice: 7999,
    category: "women",
    subcategory: "blazers",
    image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=500&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=500&fit=crop"
    ],
    description: "Professional blazer perfect for office and formal occasions.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Black", "Navy", "Gray"],
    inStock: true,
    rating: 4.5,
    reviews: 78,
    isNew: false,
    isFeatured: true
  },
  {
    id: 7,
    name: "High-Waist Jeans",
    price: 3499,
    originalPrice: 4499,
    category: "women",
    subcategory: "jeans",
    image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400&h=500&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400&h=500&fit=crop"
    ],
    description: "Trendy high-waist jeans with perfect fit and modern styling.",
    sizes: ["24", "26", "28", "30", "32", "34"],
    colors: ["Blue", "Black", "White"],
    inStock: true,
    rating: 4.6,
    reviews: 142,
    isNew: false,
    isFeatured: false
  },
  {
    id: 8,
    name: "Heeled Sandals",
    price: 2999,
    category: "women",
    subcategory: "shoes",
    image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400&h=500&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400&h=500&fit=crop"
    ],
    description: "Elegant heeled sandals perfect for evening wear and special occasions.",
    sizes: ["6", "7", "8", "9", "10"],
    colors: ["Black", "Nude", "Red"],
    inStock: true,
    rating: 4.3,
    reviews: 91,
    isNew: true,
    isFeatured: false
  }
];

export const collections = [
  {
    id: 1,
    name: "Summer Collection 2024",
    description: "Fresh and vibrant pieces perfect for the summer season",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop",
    products: [1, 5, 8]
  },
  {
    id: 2,
    name: "Sustainable Fashion",
    description: "Eco-friendly clothing made from sustainable materials",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop",
    products: [2, 3, 6]
  },
  {
    id: 3,
    name: "Office Wear",
    description: "Professional attire for the modern workplace",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop",
    products: [1, 6, 3]
  }
];

export const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    location: "Bangalore",
    rating: 5,
    comment: "Amazing quality and perfect fit! The sustainable materials make me feel good about my purchase. Love supporting local Indian brands!",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face"
  },
  {
    id: 2,
    name: "Arjun Patel",
    location: "Mumbai",
    rating: 5,
    comment: "Great customer service and fast shipping within India. The clothes are exactly as described and perfect for Indian weather.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
  },
  {
    id: 3,
    name: "Kavya Reddy",
    location: "Delhi",
    rating: 4,
    comment: "Love the design and comfort. Will definitely order again! The Bangalore-based team really understands Indian fashion needs.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
  }
];

export const sustainabilityInitiatives = [
  {
    id: 1,
    title: "Sustainable Materials",
    description: "We use 100% organic cotton and recycled materials in our production process.",
    icon: "🌱"
  },
  {
    id: 2,
    title: "Carbon Neutral Shipping",
    description: "All our shipping is carbon neutral through partnerships with eco-friendly logistics.",
    icon: "🚚"
  },
  {
    id: 3,
    title: "Ethical Manufacturing",
    description: "We ensure fair wages and safe working conditions for all our manufacturing partners.",
    icon: "👥"
  },
  {
    id: 4,
    title: "Plastic-Free Packaging",
    description: "All our packaging is made from recycled and biodegradable materials.",
    icon: "📦"
  }
];
