# Clothing E-commerce Website

A modern, fully functional clothing e-commerce website built with React JSX, featuring sustainable fashion, comprehensive product management, and integrated payment processing.

## 🌟 Features

### 🏠 **7 Complete Pages**
- **Home** - Hero section, featured products, collections showcase
- **About Us** - Company story, team, values, and mission
- **Shop by Category** - Separate pages for Men's and Women's collections
- **Collection** - Curated product collections and seasonal offerings
- **Community** - User stories, events, and social media integration
- **Sustainability** - Environmental initiatives and sustainable practices
- **Contact Us** - Contact form, store information, and FAQ

### 🛒 **E-commerce Functionality**
- Product catalog with filtering and sorting
- Shopping cart with quantity management
- Wishlist functionality
- Product detail pages with image galleries
- Size and color selection
- Product ratings and reviews

### 💳 **Payment Integration**
- **Razorpay Integration** with multiple payment options:
  - Net Banking
  - UPI (Unified Payments Interface)
  - Credit/Debit Cards
  - Digital Wallets
- Secure checkout process
- Order confirmation and tracking

### 📱 **Responsive Design**
- Mobile-first approach
- Fully responsive across all devices
- Modern UI/UX with smooth animations
- Accessible design patterns

### 🎨 **Design Inspiration**
Inspired by modern fashion brands like:
- **TerraTribe** - Sustainable fashion focus
- **Sabyasachi** - Elegant design and typography
- Clean, minimalist aesthetic
- Premium feel with attention to detail

## 🚀 Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd clothing-ecommerce
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

### Building for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## 🏗️ Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Layout.js       # Main layout with navigation
│   └── Footer.js       # Footer component
├── context/            # React Context for state management
│   └── AppContext.js   # Global state management
├── data/               # Mock data and constants
│   └── mockData.js     # Products, categories, testimonials
├── pages/              # Page components
│   ├── Home.js         # Homepage
│   ├── About.js        # About page
│   ├── ShopMen.js      # Men's collection
│   ├── ShopWomen.js    # Women's collection
│   ├── Collection.js   # Collections page
│   ├── Community.js    # Community page
│   ├── Sustainability.js # Sustainability page
│   ├── Contact.js      # Contact page
│   ├── ProductDetail.js # Product detail page
│   ├── Cart.js         # Shopping cart
│   └── Checkout.js     # Checkout process
├── App.js              # Main App component with routing
├── App.css             # Global styles
├── index.js            # Entry point
└── index.css           # Base styles
```

## 🛠️ Technologies Used

- **React 18** - Frontend framework
- **React Router DOM** - Client-side routing
- **Context API** - State management
- **Lucide React** - Icon library
- **Framer Motion** - Animation library
- **Razorpay** - Payment gateway integration
- **CSS3** - Styling with modern features
- **Responsive Design** - Mobile-first approach

## 🎯 Key Features Explained

### State Management
- Global state management using React Context
- Cart and wishlist functionality
- User preferences and filters
- Search and category management

### Product Management
- Comprehensive product catalog
- Advanced filtering (price, color, size, availability)
- Sorting options (price, rating, newest, featured)
- Product variants (size, color)
- Image galleries with thumbnails

### Payment Processing
- Razorpay integration for secure payments
- Multiple payment methods support
- Order processing and confirmation
- Error handling and validation

### Responsive Design
- Mobile-first CSS approach
- Flexible grid layouts
- Touch-friendly interactions
- Optimized for all screen sizes

## 🎨 Design System

### Color Palette
- **Primary**: Black (#000000)
- **Secondary**: White (#FFFFFF)
- **Accent**: Green (#4CAF50) for sustainability
- **Text**: Dark Gray (#333333)
- **Background**: Light Gray (#F8F9FA)

### Typography
- **Headings**: Playfair Display (serif)
- **Body**: Inter (sans-serif)
- **Hierarchy**: Clear size and weight variations

### Components
- Consistent button styles
- Card-based layouts
- Form elements with validation
- Loading states and animations

## 📱 Mobile Optimization

- Touch-friendly interface
- Optimized images and assets
- Fast loading times
- Intuitive navigation
- Swipe gestures support

## 🔧 Customization

### Adding New Products
Edit `src/data/mockData.js` to add new products:

```javascript
{
  id: 9,
  name: "New Product",
  price: 2999,
  category: "men",
  image: "image-url",
  // ... other properties
}
```

### Styling Modifications
- Global styles in `src/index.css`
- Component-specific styles in individual CSS files
- CSS variables for easy theme customization

### Payment Configuration
Update Razorpay configuration in `src/pages/Checkout.js`:

```javascript
const options = {
  key: 'your-razorpay-key',
  // ... other options
}
```

## 🚀 Deployment

### Netlify
1. Build the project: `npm run build`
2. Deploy the `build` folder to Netlify

### Vercel
1. Connect your GitHub repository
2. Vercel will automatically build and deploy

### Other Platforms
- Any static hosting service
- CDN for optimal performance

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Design inspiration from TerraTribe and Sabyasachi
- Icons by Lucide React
- Images from Unsplash
- Payment processing by Razorpay

## 📞 Support

For support or questions, please contact:
- Email: hello@clothingstore.com
- Phone: +1 (555) 123-4567

---

**Built with ❤️ for sustainable fashion**
