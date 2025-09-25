import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Filter, SortAsc, Grid, List, Heart, ShoppingBag, Star } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { products } from '../data/mockData';
import './Shop.css';

const Shop = () => {
  const { addToCart, addToWishlist, sortBy, setSortBy, filters, setFilters } = useApp();
  const [viewMode, setViewMode] = useState('grid');
  const [showFilters, setShowFilters] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const handleAddToCart = (product) => {
    addToCart(product, product.sizes[0], product.colors[0]);
  };

  const handleAddToWishlist = (product) => {
    addToWishlist(product);
  };

  const handleFilterChange = (filterType, value) => {
    if (filterType === 'colors' || filterType === 'sizes') {
      const currentFilters = filters[filterType];
      const newFilters = currentFilters.includes(value)
        ? currentFilters.filter(item => item !== value)
        : [...currentFilters, value];
      setFilters({ [filterType]: newFilters });
    } else {
      setFilters({ [filterType]: value });
    }
  };

  const clearFilters = () => {
    setFilters({
      priceRange: [0, 10000],
      colors: [],
      sizes: [],
      inStock: false
    });
  };

  // Filter products based on selected category
  let filteredProducts = products;
  if (selectedCategory !== 'all') {
    filteredProducts = products.filter(product => product.category === selectedCategory);
  }

  // Apply other filters
  if (filters.searchQuery) {
    filteredProducts = filteredProducts.filter(product =>
      product.name.toLowerCase().includes(filters.searchQuery.toLowerCase())
    );
  }

  filteredProducts = filteredProducts.filter(product =>
    product.price >= filters.priceRange[0] && product.price <= filters.priceRange[1]
  );

  if (filters.colors.length > 0) {
    filteredProducts = filteredProducts.filter(product =>
      product.colors.some(color => filters.colors.includes(color))
    );
  }

  if (filters.sizes.length > 0) {
    filteredProducts = filteredProducts.filter(product =>
      product.sizes.some(size => filters.sizes.includes(size))
    );
  }

  if (filters.inStock) {
    filteredProducts = filteredProducts.filter(product => product.inStock);
  }

  // Apply sorting
  switch (sortBy) {
    case 'price-low':
      filteredProducts.sort((a, b) => a.price - b.price);
      break;
    case 'price-high':
      filteredProducts.sort((a, b) => b.price - a.price);
      break;
    case 'newest':
      filteredProducts.sort((a, b) => b.isNew - a.isFeatured);
      break;
    case 'rating':
      filteredProducts.sort((a, b) => b.rating - a.rating);
      break;
    default:
      filteredProducts.sort((a, b) => b.isFeatured - a.isFeatured);
  }

  const allColors = [...new Set(products.flatMap(p => p.colors))];
  const allSizes = [...new Set(products.flatMap(p => p.sizes))];

  return (
    <div className="shop">
      <div className="shop-header">
        <div className="container">
          <h1>Shop</h1>
          <p>Discover our curated collection of sustainable fashion</p>
        </div>
      </div>

      <div className="shop-content">
        <div className="container">
          <div className="shop-layout">
            {/* Filters Sidebar */}
            <aside className={`filters-sidebar ${showFilters ? 'active' : ''}`}>
              <div className="filters-header">
                <h3>Filters</h3>
                <button onClick={clearFilters} className="clear-filters">
                  Clear All
                </button>
              </div>

              {/* Category Filter */}
              <div className="filter-group">
                <h4>Category</h4>
                <div className="category-options">
                  <button 
                    className={`category-btn ${selectedCategory === 'all' ? 'active' : ''}`}
                    onClick={() => setSelectedCategory('all')}
                  >
                    All Products
                  </button>
                  <button 
                    className={`category-btn ${selectedCategory === 'men' ? 'active' : ''}`}
                    onClick={() => setSelectedCategory('men')}
                  >
                    Men's
                  </button>
                  <button 
                    className={`category-btn ${selectedCategory === 'women' ? 'active' : ''}`}
                    onClick={() => setSelectedCategory('women')}
                  >
                    Women's
                  </button>
                </div>
              </div>

              {/* Price Range */}
              <div className="filter-group">
                <h4>Price Range</h4>
                <div className="price-range">
                  <input
                    type="range"
                    min="0"
                    max="10000"
                    value={filters.priceRange[1]}
                    onChange={(e) => setFilters({ priceRange: [filters.priceRange[0], parseInt(e.target.value)] })}
                    className="price-slider"
                  />
                  <div className="price-labels">
                    <span>₹{filters.priceRange[0]}</span>
                    <span>₹{filters.priceRange[1]}</span>
                  </div>
                </div>
              </div>

              {/* Colors */}
              <div className="filter-group">
                <h4>Colors</h4>
                <div className="color-options">
                  {allColors.map(color => (
                    <label key={color} className="color-option">
                      <input
                        type="checkbox"
                        checked={filters.colors.includes(color)}
                        onChange={() => handleFilterChange('colors', color)}
                      />
                      <span>{color}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Sizes */}
              <div className="filter-group">
                <h4>Sizes</h4>
                <div className="size-options">
                  {allSizes.map(size => (
                    <label key={size} className="size-option">
                      <input
                        type="checkbox"
                        checked={filters.sizes.includes(size)}
                        onChange={() => handleFilterChange('sizes', size)}
                      />
                      <span>{size}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* In Stock */}
              <div className="filter-group">
                <label className="checkbox-option">
                  <input
                    type="checkbox"
                    checked={filters.inStock}
                    onChange={(e) => handleFilterChange('inStock', e.target.checked)}
                  />
                  <span>In Stock Only</span>
                </label>
              </div>
            </aside>

            {/* Main Content */}
            <main className="shop-main">
              <div className="shop-toolbar">
                <div className="toolbar-left">
                  <button 
                    className="filter-toggle"
                    onClick={() => setShowFilters(!showFilters)}
                  >
                    <Filter size={16} />
                    Filters
                  </button>
                  <span className="results-count">
                    {filteredProducts.length} products found
                  </span>
                </div>
                <div className="toolbar-right">
                  <div className="sort-dropdown">
                    <SortAsc size={16} />
                    <select 
                      value={sortBy} 
                      onChange={(e) => setSortBy(e.target.value)}
                    >
                      <option value="featured">Featured</option>
                      <option value="newest">Newest</option>
                      <option value="price-low">Price: Low to High</option>
                      <option value="price-high">Price: High to Low</option>
                      <option value="rating">Customer Rating</option>
                    </select>
                  </div>
                  <div className="view-toggle">
                    <button 
                      className={viewMode === 'grid' ? 'active' : ''}
                      onClick={() => setViewMode('grid')}
                    >
                      <Grid size={16} />
                    </button>
                    <button 
                      className={viewMode === 'list' ? 'active' : ''}
                      onClick={() => setViewMode('list')}
                    >
                      <List size={16} />
                    </button>
                  </div>
                </div>
              </div>

              <div className={`products-grid ${viewMode}`}>
                {filteredProducts.map(product => (
                  <div key={product.id} className="product-card">
                    <div className="product-image">
                      <img src={product.image} alt={product.name} />
                      <div className="product-overlay">
                        <button 
                          className="wishlist-btn"
                          onClick={() => handleAddToWishlist(product)}
                        >
                          <Heart size={20} />
                        </button>
                        <button 
                          className="quick-view-btn"
                          onClick={() => handleAddToCart(product)}
                        >
                          <ShoppingBag size={20} />
                        </button>
                      </div>
                      {product.isNew && <span className="new-badge">New</span>}
                      {product.originalPrice > product.price && (
                        <span className="sale-badge">
                          {Math.round((1 - product.price / product.originalPrice) * 100)}% OFF
                        </span>
                      )}
                    </div>
                    <div className="product-info">
                      <h3>{product.name}</h3>
                      <div className="product-rating">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            size={14} 
                            fill={i < Math.floor(product.rating) ? '#ffd700' : 'none'}
                            color={i < Math.floor(product.rating) ? '#ffd700' : '#ddd'}
                          />
                        ))}
                        <span>({product.reviews})</span>
                      </div>
                      <div className="product-price">
                        <span className="current-price">₹{product.price.toLocaleString()}</span>
                        {product.originalPrice > product.price && (
                          <span className="original-price">₹{product.originalPrice.toLocaleString()}</span>
                        )}
                      </div>
                      <Link to={`/product/${product.id}`} className="btn btn-outline">
                        View Details
                      </Link>
                    </div>
                  </div>
                ))}
              </div>

              {filteredProducts.length === 0 && (
                <div className="no-products">
                  <h3>No products found</h3>
                  <p>Try adjusting your filters to see more results.</p>
                  <button onClick={clearFilters} className="btn btn-primary">
                    Clear Filters
                  </button>
                </div>
              )}
            </main>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
