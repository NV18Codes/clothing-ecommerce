import React, { createContext, useContext, useReducer, useState } from 'react';

// Initial state
const initialState = {
  cart: [],
  wishlist: [],
  user: null,
  isAuthenticated: false,
  searchQuery: '',
  selectedCategory: 'all',
  sortBy: 'featured',
  filters: {
    priceRange: [0, 10000],
    colors: [],
    sizes: [],
    inStock: false
  }
};

// Action types
export const ACTIONS = {
  ADD_TO_CART: 'ADD_TO_CART',
  REMOVE_FROM_CART: 'REMOVE_FROM_CART',
  UPDATE_CART_QUANTITY: 'UPDATE_CART_QUANTITY',
  CLEAR_CART: 'CLEAR_CART',
  ADD_TO_WISHLIST: 'ADD_TO_WISHLIST',
  REMOVE_FROM_WISHLIST: 'REMOVE_FROM_WISHLIST',
  SET_USER: 'SET_USER',
  SET_SEARCH_QUERY: 'SET_SEARCH_QUERY',
  SET_CATEGORY: 'SET_CATEGORY',
  SET_SORT_BY: 'SET_SORT_BY',
  SET_FILTERS: 'SET_FILTERS',
  RESET_FILTERS: 'RESET_FILTERS'
};

// Reducer
const appReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.ADD_TO_CART:
      const existingItem = state.cart.find(item => 
        item.id === action.payload.id && 
        item.size === action.payload.size && 
        item.color === action.payload.color
      );
      
      if (existingItem) {
        return {
          ...state,
          cart: state.cart.map(item =>
            item.id === action.payload.id && 
            item.size === action.payload.size && 
            item.color === action.payload.color
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        };
      } else {
        return {
          ...state,
          cart: [...state.cart, { ...action.payload, quantity: 1 }]
        };
      }

    case ACTIONS.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter(item => item.cartId !== action.payload)
      };

    case ACTIONS.UPDATE_CART_QUANTITY:
      return {
        ...state,
        cart: state.cart.map(item =>
          item.cartId === action.payload.cartId
            ? { ...item, quantity: action.payload.quantity }
            : item
        )
      };

    case ACTIONS.CLEAR_CART:
      return {
        ...state,
        cart: []
      };

    case ACTIONS.ADD_TO_WISHLIST:
      const isInWishlist = state.wishlist.find(item => item.id === action.payload.id);
      if (!isInWishlist) {
        return {
          ...state,
          wishlist: [...state.wishlist, action.payload]
        };
      }
      return state;

    case ACTIONS.REMOVE_FROM_WISHLIST:
      return {
        ...state,
        wishlist: state.wishlist.filter(item => item.id !== action.payload)
      };

    case ACTIONS.SET_USER:
      return {
        ...state,
        user: action.payload,
        isAuthenticated: !!action.payload
      };

    case ACTIONS.SET_SEARCH_QUERY:
      return {
        ...state,
        searchQuery: action.payload
      };

    case ACTIONS.SET_CATEGORY:
      return {
        ...state,
        selectedCategory: action.payload
      };

    case ACTIONS.SET_SORT_BY:
      return {
        ...state,
        sortBy: action.payload
      };

    case ACTIONS.SET_FILTERS:
      return {
        ...state,
        filters: { ...state.filters, ...action.payload }
      };

    case ACTIONS.RESET_FILTERS:
      return {
        ...state,
        filters: initialState.filters
      };

    default:
      return state;
  }
};

// Create context
const AppContext = createContext();

// Provider component
export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authModalCallback, setAuthModalCallback] = useState(null);

  // Helper functions
  const addToCart = (product, size, color) => {
    // Check if user is authenticated
    if (!state.user) {
      setAuthModalCallback(() => () => addToCart(product, size, color));
      setShowAuthModal(true);
      return;
    }

    const cartId = `${product.id}-${size}-${color}`;
    dispatch({
      type: ACTIONS.ADD_TO_CART,
      payload: { ...product, size, color, cartId }
    });
  };

  const removeFromCart = (cartId) => {
    dispatch({
      type: ACTIONS.REMOVE_FROM_CART,
      payload: cartId
    });
  };

  const updateCartQuantity = (cartId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(cartId);
    } else {
      dispatch({
        type: ACTIONS.UPDATE_CART_QUANTITY,
        payload: { cartId, quantity }
      });
    }
  };

  const clearCart = () => {
    dispatch({ type: ACTIONS.CLEAR_CART });
  };

  const addToWishlist = (product) => {
    dispatch({
      type: ACTIONS.ADD_TO_WISHLIST,
      payload: product
    });
  };

  const removeFromWishlist = (productId) => {
    dispatch({
      type: ACTIONS.REMOVE_FROM_WISHLIST,
      payload: productId
    });
  };

  const setUser = (user) => {
    dispatch({
      type: ACTIONS.SET_USER,
      payload: user
    });
  };

  const setSearchQuery = (query) => {
    dispatch({
      type: ACTIONS.SET_SEARCH_QUERY,
      payload: query
    });
  };

  const setCategory = (category) => {
    dispatch({
      type: ACTIONS.SET_CATEGORY,
      payload: category
    });
  };

  const setSortBy = (sortBy) => {
    dispatch({
      type: ACTIONS.SET_SORT_BY,
      payload: sortBy
    });
  };

  const setFilters = (filters) => {
    dispatch({
      type: ACTIONS.SET_FILTERS,
      payload: filters
    });
  };

  const resetFilters = () => {
    dispatch({ type: ACTIONS.RESET_FILTERS });
  };

  const handleAuthSuccess = () => {
    if (authModalCallback) {
      authModalCallback();
      setAuthModalCallback(null);
    }
    setShowAuthModal(false);
  };

  const closeAuthModal = () => {
    setShowAuthModal(false);
    setAuthModalCallback(null);
  };

  // Calculate totals
  const cartTotal = state.cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  const cartItemsCount = state.cart.reduce((count, item) => count + item.quantity, 0);

  const value = {
    ...state,
    cartTotal,
    cartItemsCount,
    showAuthModal,
    setShowAuthModal,
    handleAuthSuccess,
    closeAuthModal,
    addToCart,
    removeFromCart,
    updateCartQuantity,
    clearCart,
    addToWishlist,
    removeFromWishlist,
    setUser,
    setSearchQuery,
    setCategory,
    setSortBy,
    setFilters,
    resetFilters
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

// Custom hook to use context
export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
