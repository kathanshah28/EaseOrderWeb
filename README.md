# EaseOrderWeb 🛒

A comprehensive full-stack web application for order management and e-commerce operations. EaseOrderWeb provides a complete system with separate frontend, backend, and admin interfaces to manage products, orders, and customers efficiently.

---

## 📋 Table of Contents

- [Project Overview](#project-overview)
- [System Architecture](#system-architecture)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Features](#features)
- [Installation & Setup](#installation--setup)
- [Running the Application](#running-the-application)
- [Environment Configuration](#environment-configuration)
- [API Documentation](#api-documentation)
- [Database Schema](#database-schema)
- [Contributing](#contributing)
- [License](#license)

---

## 🎯 Project Overview

**EaseOrderWeb** is a modern order management system designed to streamline e-commerce operations. It consists of three main applications:

1. **Frontend** - Customer-facing web application for browsing and placing orders
2. **Backend** - RESTful API server handling all business logic and data management
3. **Admin Dashboard** - Administrative interface for managing products, orders, and users

The system leverages modern technologies and best practices to ensure scalability, security, and maintainability.

---

## 🏗️ System Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                   EaseOrderWeb System                       │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐       │
│  │   Frontend   │  │    Admin     │  │   Mobile     │       │
│  │  (Customer)  │  │  Dashboard   │  │   (Future)   │       │
│  └──────┬───────┘  └──────┬───────┘  └──────┬───────┘       │
│         │                 │                  │              │
│         └─────────────────┼──────────────────┘              │
│                           │                                 │
│                    ┌──────▼──────┐                          │
│                    │   Backend    │                         │
│                    │   API Server │                         │
│                    │  (Express.js)│                         │
│                    └──────┬───────┘                         │
│                           │                                 │
│         ┌─────────────────┼─────────────────┐               │
│         │                 │                 │               │
│    ┌────▼────┐  ┌────────▼────────┐  ┌────▼────┐            │
│    │ MongoDB  │  │   Cloudinary    │  │ Stripe   │          │
│    │ Database │  │ (Image Storage) │  │(Payments)│          │
│    └──────────┘  └─────────────────┘  └──────────┘          │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## 🛠️ Tech Stack

### **Backend**
| Technology | Version | Purpose |
|-----------|---------|---------|
| **Node.js** | - | JavaScript runtime |
| **Express.js** | 4.19.2 | Web framework & REST API |
| **MongoDB** | - | NoSQL database (via Mongoose) |
| **Mongoose** | 8.3.2 | MongoDB object modeling |
| **JWT** | 9.0.2 | Authentication & authorization |
| **Bcrypt** | 5.1.1 | Password hashing & security |
| **Stripe** | 15.4.0 | Payment processing |
| **Cloudinary** | 2.2.0 | Image upload & storage |
| **Multer** | 1.4.5-lts.1 | File upload middleware |
| **CORS** | 2.8.5 | Cross-origin resource sharing |
| **Dotenv** | 16.4.5 | Environment variables |
| **Validator** | 13.11.0 | Input validation |
| **Body-parser** | 1.20.2 | Request body parsing |
| **Nodemon** | 3.1.0 | Development server auto-reload |

### **Frontend (Customer Application)**
| Technology | Version | Purpose |
|-----------|---------|---------|
| **React** | 18.2.0 | UI library |
| **Vite** | 5.2.0 | Build tool & dev server |
| **React Router DOM** | 6.22.3 | Client-side routing |
| **Axios** | 1.6.8 | HTTP client |
| **Tailwind CSS** | 3.4.3 | Utility-first CSS framework |
| **Material-Tailwind** | 2.1.9 | React UI components |
| **React Icons** | 5.1.0 | Icon library |
| **React Toastify** | 10.0.5 | Toast notifications |
| **ESLint** | 8.57.0 | Code linting |
| **PostCSS** | 8.4.38 | CSS transformation |
| **Autoprefixer** | 10.4.19 | CSS vendor prefixing |

### **Admin Dashboard**
| Technology | Version | Purpose |
|-----------|---------|---------|
| **React** | 18.2.0 | UI library |
| **Vite** | 5.2.0 | Build tool & dev server |
| **React Router DOM** | 6.23.0 | Client-side routing |
| **Axios** | 1.6.8 | HTTP client |
| **Tailwind CSS** | 3.4.3 | Utility-first CSS framework |
| **Material-Tailwind** | 2.1.9 | React UI components |
| **React Icons** | 5.1.0 | Icon library |
| **React Toastify** | 10.0.5 | Toast notifications |
| **ESLint** | 8.57.0 | Code linting |

### **External Services**
- **MongoDB Atlas** - Cloud database (optional local instance)
- **Cloudinary** - Image hosting and management
- **Stripe** - Payment gateway integration
- **SMTP Server** - Email notifications (future feature)

---

## 📁 Project Structure

```
EaseOrderWeb/
├── Backend/                          # Express.js REST API
│   ├── server.js                     # Main server entry point
│   ├── package.json                  # Backend dependencies
│   ├── .env.example                  # Environment variables template
│   ├── routes/                       # API routes
│   │   ├── auth.js                   # Authentication routes
│   │   ├── products.js               # Product routes
│   │   ├── orders.js                 # Order routes
│   │   └── users.js                  # User management routes
│   ├── controllers/                  # Business logic
│   ├── models/                       # Mongoose schemas
│   │   ├── User.js                   # User model
│   │   ├── Product.js                # Product model
│   │   └── Order.js                  # Order model
│   ├── middleware/                   # Custom middleware
│   │   ├── auth.js                   # Authentication middleware
│   │   └── errorHandler.js           # Error handling
│   ├── config/                       # Configuration files
│   └── utils/                        # Utility functions
│
├── Frontend/                         # React + Vite Customer App
│   ├── src/
│   │   ├── main.jsx                  # React entry point
│   │   ├── App.jsx                   # Root component
│   │   ├── index.css                 # Global styles
│   │   ├── components/               # Reusable components
│   │   │   ├── Header.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── ProductCard.jsx
│   │   │   └── ...
│   │   ├── pages/                    # Page components
│   │   │   ├── Home.jsx
│   │   │   ├── Products.jsx
│   │   │   ├── Cart.jsx
│   │   │   ├── Checkout.jsx
│   │   │   ├── Orders.jsx
│   │   │   └── Profile.jsx
│   │   ├── services/                 # API calls
│   │   │   ├── authService.js
│   │   │   ├── productService.js
│   │   │   └── orderService.js
│   │   ├── context/                  # React Context
│   │   └── utils/                    # Utility functions
│   ├── public/                       # Static assets
│   ├── vite.config.js                # Vite configuration
│   ├── tailwind.config.js            # Tailwind CSS config
│   ├── package.json                  # Frontend dependencies
│   └── index.html                    # HTML template
│
├── admin/                            # React + Vite Admin Dashboard
│   ├── src/
│   │   ├── main.jsx                  # React entry point
│   │   ├── App.jsx                   # Root component
│   │   ├── index.css                 # Global styles
│   │   ├── components/               # Reusable components
│   │   │   ├── Sidebar.jsx
│   │   │   ├── Header.jsx
│   │   │   └── ...
│   │   ├── pages/                    # Admin pages
│   │   │   ├── Dashboard.jsx
│   │   │   ├── ProductManagement.jsx
│   │   │   ├── OrderManagement.jsx
│   │   │   ├── UserManagement.jsx
│   │   │   └── Analytics.jsx
│   │   ├── services/                 # API calls
│   │   ├── context/                  # React Context
│   │   └── utils/                    # Utility functions
│   ├── public/                       # Static assets
│   ├── vite.config.js                # Vite configuration
│   ├── tailwind.config.js            # Tailwind CSS config
│   ├── package.json                  # Admin dependencies
│   └── index.html                    # HTML template
│
└── README.md                         # Project documentation
```

---

## ✨ Features

### **Frontend (Customer Application)**
- ✅ User authentication (Sign up, Sign in, Sign out)
- ✅ Product catalog with search and filtering
- ✅ Shopping cart functionality
- ✅ Secure checkout process
- ✅ Order placement and tracking
- ✅ User profile management
- ✅ Order history
- ✅ Responsive design (Mobile-first)
- ✅ Real-time notifications via toast alerts
- ✅ Image viewing from Cloudinary

### **Admin Dashboard**
- ✅ Admin authentication
- ✅ Product management (Create, Read, Update, Delete)
- ✅ Order management and status updates
- ✅ User management
- ✅ Analytics and reporting
- ✅ Dashboard statistics
- ✅ Bulk operations
- ✅ Role-based access control

### **Backend API**
- ✅ RESTful API endpoints
- ✅ JWT-based authentication
- ✅ User management
- ✅ Product management
- ✅ Order processing
- ✅ Payment integration (Stripe)
- ✅ Image upload (Cloudinary)
- ✅ Input validation
- ✅ Error handling
- ✅ CORS support
- ✅ Password hashing with Bcrypt

---

## 🚀 Installation & Setup

### **Prerequisites**
- **Node.js** (v16 or higher)
- **npm** or **yarn** package manager
- **MongoDB** (local or MongoDB Atlas)
- **Cloudinary Account** (for image storage)
- **Stripe Account** (for payment processing)

### **Step 1: Clone the Repository**
```bash
git clone https://github.com/kathanshah28/EaseOrderWeb.git
cd EaseOrderWeb
```

### **Step 2: Backend Setup**
```bash
cd Backend

# Install dependencies
npm install

# Create .env file
cp .env.example .env

# Update .env with your configuration (see Environment Configuration)

# Start the server
npm run server
```

The backend will run on `http://localhost:5000` (or configured port).

### **Step 3: Frontend Setup**
```bash
cd ../Frontend

# Install dependencies
npm install

# Create .env file
echo "VITE_API_BASE_URL=http://localhost:5000" > .env.local

# Start the development server
npm run dev
```

The frontend will run on `http://localhost:5173`.

### **Step 4: Admin Dashboard Setup**
```bash
cd ../admin

# Install dependencies
npm install

# Create .env file
echo "VITE_API_BASE_URL=http://localhost:5000" > .env.local

# Start the development server
npm run dev
```

The admin dashboard will run on `http://localhost:5174` (or another available port).

---

## ⚙️ Running the Application

### **Development Mode**

**Terminal 1 - Backend:**
```bash
cd Backend
npm run server
```

**Terminal 2 - Frontend:**
```bash
cd Frontend
npm run dev
```

**Terminal 3 - Admin:**
```bash
cd admin
npm run dev
```

### **Production Build**

**Frontend:**
```bash
cd Frontend
npm run build
npm run preview
```

**Admin:**
```bash
cd admin
npm run build
npm run preview
```

---

## 🔐 Environment Configuration

### **Backend .env Template**
```env
# Server Configuration
PORT=5000
NODE_ENV=development

# Database
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/easeorder

# JWT Authentication
JWT_SECRET=your_jwt_secret_key_here
JWT_EXPIRE=7d

# Cloudinary Configuration
CLOUDINARY_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

# Stripe Configuration
STRIPE_SECRET_KEY=your_stripe_secret_key
STRIPE_PUBLIC_KEY=your_stripe_public_key

# Email Configuration (Optional)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_email@gmail.com
SMTP_PASS=your_email_password

# Frontend URL (for CORS)
FRONTEND_URL=http://localhost:5173
ADMIN_URL=http://localhost:5174

# Other
ALLOWED_ORIGINS=http://localhost:5173,http://localhost:5174
```

### **Authentication Endpoints**

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/auth/register` | Register a new user |
| POST | `/auth/login` | Login user |
| POST | `/auth/logout` | Logout user |
| POST | `/auth/refresh-token` | Refresh JWT token |

### **Product Endpoints**

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/products` | Get all products |
| GET | `/products/:id` | Get single product |
| POST | `/products` | Create product (Admin) |
| PUT | `/products/:id` | Update product (Admin) |
| DELETE | `/products/:id` | Delete product (Admin) |

### **Order Endpoints**

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/orders` | Get user orders |
| GET | `/orders/:id` | Get single order |
| POST | `/orders` | Create new order |
| PUT | `/orders/:id` | Update order status (Admin) |
| DELETE | `/orders/:id` | Cancel order |

### **User Endpoints**

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/users/profile` | Get user profile |
| PUT | `/users/profile` | Update user profile |
| GET | `/users` | Get all users (Admin) |
| PUT | `/users/:id` | Update user (Admin) |
| DELETE | `/users/:id` | Delete user (Admin) |

### **Payment Endpoints**

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/payments/create-intent` | Create Stripe payment intent |
| POST | `/payments/webhook` | Stripe webhook handler |

---

## 💾 Database Schema

### **User Model**
```javascript
{
  _id: ObjectId,
  name: String,
  email: String (unique),
  password: String (hashed),
  phone: String,
  address: String,
  city: String,
  state: String,
  pincode: String,
  role: String (user/admin),
  profileImage: String,
  createdAt: Date,
  updatedAt: Date
}
```

### **Product Model**
```javascript
{
  _id: ObjectId,
  name: String,
  description: String,
  price: Number,
  discountedPrice: Number,
  category: String,
  image: String,
  images: [String],
  stock: Number,
  ratings: Number,
  reviews: [{
    userId: ObjectId,
    comment: String,
    rating: Number,
    date: Date
  }],
  createdAt: Date,
  updatedAt: Date
}
```

### **Order Model**
```javascript
{
  _id: ObjectId,
  userId: ObjectId,
  items: [{
    productId: ObjectId,
    quantity: Number,
    price: Number
  }],
  totalAmount: Number,
  status: String (pending/confirmed/shipped/delivered/cancelled),
  shippingAddress: String,
  paymentMethod: String,
  paymentStatus: String,
  paymentIntentId: String,
  trackingNumber: String,
  createdAt: Date,
  updatedAt: Date
}
```

---

## 🤝 Contributing

Contributions are welcome! To contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 🎉 Acknowledgments

- Built with modern web technologies
- Inspired by best practices in full-stack development
- Thanks to all contributors and the open-source community

---

**Happy Coding! 🚀**

Last Updated: October 2024
