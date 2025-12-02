# E-Commerce Mini Website

A full-stack e-commerce application built with React (Vite), Tailwind CSS, TanStack Query, Node.js, and Express.

## 🚀 Features

- **Product Browsing**: View all products with images, prices, and ratings
- **Search & Filter**: Search by name, filter by category, sort by price/rating
- **Product Details**: Detailed product view with full description
- **Shopping Cart**: Add, update, remove items with quantity management
- **Quick Cart Actions**: Increase/decrease quantity directly from product listing
- **Checkout**: Simple checkout form with order confirmation
- **Responsive Design**: Mobile-friendly UI with Tailwind CSS
- **Data Caching**: Efficient data fetching with TanStack Query

## 📁 Project Structure

```
ecommerce-mini/
├── backend/
│   ├── server.js
│   ├── routes/
│   │   ├── products.js
│   │   ├── cart.js
│   │   └── checkout.js
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── ProductCard.jsx
│   │   │   └── Filters.jsx
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── ProductDetails.jsx
│   │   │   ├── Cart.jsx
│   │   │   └── Checkout.jsx
│   │   ├── services/
│   │   │   └── api.js
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── index.html
│   ├── package.json
│   ├── vite.config.js
│   └── tailwind.config.js
└── README.md
```

## 🛠️ Tech Stack

### Frontend
- **React 18** with Vite
- **TanStack Query** for data fetching and caching
- **React Router** for navigation
- **Tailwind CSS** for styling
- **Axios** for HTTP requests

### Backend
- **Node.js** with Express
- **Axios** for FakeStore API proxy
- **CORS** enabled
- In-memory cart storage

## 📦 Installation

### Backend Setup

```bash
cd backend
npm install
npm start
```

Server runs on `http://localhost:5000`

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Frontend runs on `http://localhost:3000`

## 🔌 API Endpoints

### Products
- `GET /api/products` - Get all products (with optional query params: category, sort, search)
- `GET /api/products/:id` - Get single product

### Cart
- `GET /api/cart` - Get cart items
- `POST /api/cart/add` - Add item to cart
- `PUT /api/cart/update` - Update item quantity
- `DELETE /api/cart/remove/:id` - Remove item from cart
- `DELETE /api/cart/clear` - Clear entire cart

### Checkout
- `POST /api/checkout` - Submit order

## 🎯 Usage

1. **Browse Products**: View all products on the home page
2. **Search & Filter**: Use the filter bar to search, filter by category, or sort
3. **View Details**: Click on any product to see full details
4. **Add to Cart**: Click "Add to Cart" button
5. **Manage Cart**: Update quantities or remove items in the cart page
6. **Checkout**: Fill in delivery information and place your order
7. **Confirmation**: Receive order ID upon successful checkout

## 🌟 Key Features Implementation

### Quick Cart Management
- Add items to cart from product listing
- Increase/decrease quantity without leaving the page
- Real-time cart count updates in navbar
- Seamless shopping experience

### TanStack Query Integration
- Automatic caching and background refetching
- Loading and error states
- Query invalidation on mutations

### Cart Management
- Frontend: React state + localStorage persistence
- Backend: In-memory storage (can be replaced with database)

### Responsive Design
- Mobile-first approach with Tailwind CSS
- Grid layouts that adapt to screen size
- Touch-friendly UI elements
- Festive hover effects and animations

## 🔄 Data Flow

1. Frontend makes request via TanStack Query
2. Request goes to Express backend
3. Backend proxies to FakeStore API
4. Backend processes/filters data
5. Response cached by TanStack Query
6. UI updates automatically

## 🚀 Future Enhancements

- User authentication
- Persistent cart storage (database)
- Payment integration
- Order history
- Product reviews
- Wishlist functionality
- Admin dashboard

## 📝 License

MIT

## 👨‍💻 Author

Built as a full-stack e-commerce demo project
