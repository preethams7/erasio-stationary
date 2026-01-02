import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import LoginPopup from "../stationary/LoginPopup"; 

/* ------------------ DUMMY DATA ------------------ */

const dummyProducts = [
  {
  id: 1,
  name: "Classmate Long Notebook – Ruled",
  brand: "Classmate",
  description:
    "Classmate long notebook is designed for everyday writing with premium quality paper that ensures smooth writing without ink bleeding. Ideal for school, college, and office use.",
  price: 120,
  mrp: 150,
  rating: 4,
  reviewsCount: 128,
  stock: true,
  delivery: "Same day delivery within 4 hours",
  offers: [
    "10% instant discount on UPI payment",
    "Buy 2 get extra 5% off",
    "Free delivery today"
  ],
  images: [
    "https://picsum.photos/500/500?1",
    "https://picsum.photos/500/500?2"
  ],
  highlights: [
    "300 ruled pages",
    "Premium smooth paper",
    "Strong binding for durability"
  ],
  specs: {
    Size: "Long Notebook",
    Pages: "300",
    Binding: "Soft Bound",
    GSM: "70"
  },
  reviews: [
    {
      user: "Amit",
      rating: 5,
      comment: "Paper quality is excellent. Worth the price."
    },
    {
      user: "Sneha",
      rating: 4,
      comment: "Good notebook for daily use."
    }
  ]
}
,
  {
    id: 2,
    name: "Gel Pen Set",
    price: "180",
    rating: 4,
    image: "https://picsum.photos/400/400?2",
  },
  {
    id: 3,
    name: "Mechanical Pencil",
    price: "90",
    rating: 4,
    image: "https://picsum.photos/400/400?3",
  },
  {
    id: 4,
    name: "Highlighter Pack",
    price: "150",
    rating: 5,
    image: "https://picsum.photos/400/400?4",
  },
  {
    id: 5,
    name: "Scientific Calculator",
    price: "550",
    rating: 5,
    image: "https://picsum.photos/400/400?5",
  },
  {
    id: 6,
    name: "Desk Organizer",
    price: "320",
    rating: 4,
    image: "https://picsum.photos/400/400?6",
  },
  {
    id: 7,
    name: "Sticky Notes",
    price: "70",
    rating: 4,
    image: "https://picsum.photos/400/400?7",
  },
  {
    id: 8,
    name: "File Folder Set",
    price: "200",
    rating: 3,
    image: "https://picsum.photos/400/400?8",
  },
  {
    id: 9,
    name: "Color Sketch Pens",
    price: "260",
    rating: 5,
    image: "https://picsum.photos/400/400?9",
  },
  {
    id: 10,
    name: "Whiteboard Marker Set",
    price: "140",
    rating: 4,
    image: "https://picsum.photos/400/400?10",
  },
];

const categories = [
  { id: 1, name: "Writing Instruments", image: "https://picsum.photos/300/200?11" },
  { id: 2, name: "Notebooks & Paper", image: "https://picsum.photos/300/200?12" },
  { id: 3, name: "School Essentials", image: "https://picsum.photos/300/200?13" },
  { id: 4, name: "Office Supplies", image: "https://picsum.photos/300/200?14" },
  { id: 5, name: "Art Supplies", image: "https://picsum.photos/300/200?15" },
];

const adImages = [
  "https://picsum.photos/1200/400?ad1",
  "https://picsum.photos/1200/400?ad2",
  "https://picsum.photos/1200/400?ad3",
];

/* ------------------ COMPONENTS ------------------ */

const CategoryCard = ({ category }) => (
  <div className="bg-white rounded shadow p-2 text-center">
    <img
      src={category.image}
      alt={category.name}
      className="w-full h-24 object-cover rounded"
    />
    <p className="text-sm font-semibold mt-2">{category.name}</p>
  </div>
);

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const { isLoggedIn } = useAuth(); // check login status
  const [showLoginPopup, setShowLoginPopup] = useState(false);

  const handleAddToCart = (e) => {
    e.stopPropagation(); // prevent navigating to product page
    if (!isLoggedIn) {
      setShowLoginPopup(true);
    } else {
      // TODO: Add product to cart logic
      console.log("Added to cart:", product);
    }
  };

  return (
    <>
      <div
        className="bg-white rounded shadow p-4 text-center cursor-pointer hover:shadow-lg transition-shadow"
        onClick={() => navigate(`/product/${product.id}`)}
      >
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-40 object-cover rounded"
        />
        <h4 className="font-semibold mt-2">{product.name}</h4>
        <p className="text-sm text-gray-500">₹{product.price}</p>
        <div className="text-yellow-500 text-sm">{"★".repeat(product.rating)}</div>
        <button
          onClick={handleAddToCart}
          className="mt-3 w-full bg-blue-600 text-white py-1 rounded"
        >
          Add to Cart
        </button>
      </div>

      {/* Login popup */}
      <LoginPopup open={showLoginPopup} onClose={() => setShowLoginPopup(false)} />
    </>
  );
};



const AdvertisementSlider = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const i = setInterval(
      () => setIndex((v) => (v + 1) % adImages.length),
      3000
    );
    return () => clearInterval(i);
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="h-56 sm:h-64 rounded-lg overflow-hidden shadow">
        <img
          src={adImages[index]}
          className="w-full h-full object-cover"
          alt="Advertisement"
        />
      </div>
    </div>
  );
};

/* ------------------ SECTION ------------------ */

const Section = ({ title, products = [], items = [], type }) => {
  const scrollRef = useRef(null);
  const CARD_WIDTH = type === "category" ? 160 : 260;

  const scroll = (dir) => {
    scrollRef.current.scrollBy({
      left: dir === "left" ? -CARD_WIDTH * 5 : CARD_WIDTH * 5,
      behavior: "smooth",
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 relative group">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>

      <button
        onClick={() => scroll("left")}
        className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 rounded-full hidden group-hover:flex items-center justify-center z-10"
      >
        <span className="text-white text-2xl">❮</span>
      </button>

      <button
        onClick={() => scroll("right")}
        className="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 rounded-full hidden group-hover:flex items-center justify-center z-10"
      >
        <span className="text-white text-2xl">❯</span>
      </button>

      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-hidden"
      >
        {(type === "category" ? items : products).map((item) => (
          <div
            key={item.id}
            style={{ minWidth: CARD_WIDTH }}
            className="flex-shrink-0"
          >
            {type === "category" ? (
              <CategoryCard category={item} />
            ) : (
              <ProductCard product={item} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

/* ------------------ MAIN PAGE ------------------ */

const StationeryServicesHome = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 py-6">
        <h1 className="text-3xl font-bold">Erasio Stationery Store</h1>
        <p className="text-gray-600">Your one-stop shop for supplies</p>
      </div>

      <div className="space-y-14">
        <AdvertisementSlider />
        <Section title="✨ New Launches" products={dummyProducts} />
        <Section title="📦 Categories" items={categories} type="category" />
        <Section title="⭐ Best Sellers" products={dummyProducts.slice(5)} />
      </div>

      <footer className="bg-gray-900 text-white mt-12"> <div className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8"> <div className="grid grid-cols-2 md:grid-cols-4 gap-8"> {/* Logo and Contact */} <div> <h4 className="text-xl font-bold text-blue-400 mb-4">Erasio</h4> <p className="text-sm text-gray-400 mb-4">Your campus partner for stationary and supplies.</p> <p className="text-sm text-gray-400">Email: support@erasio.com</p> <p className="text-sm text-gray-400">Phone: +1 (555) 123-4567</p> </div> {/* Quick Links */} <div> <h4 className="text-lg font-semibold mb-4">Quick Links</h4> <ul className="space-y-2 text-sm"> <li><Link to="/about" className="text-gray-400 hover:text-blue-400 transition-colors">About Us</Link></li> <li><Link to="/faq" className="text-gray-400 hover:text-blue-400 transition-colors">FAQ</Link></li> <li><Link to="/shipping" className="text-gray-400 hover:text-blue-400 transition-colors">Shipping & Returns</Link></li> <li><Link to="/privacy" className="text-gray-400 hover:text-blue-400 transition-colors">Privacy Policy</Link></li> </ul> </div> {/* Social Media Section */} <div> <h4 className="text-lg font-semibold mb-4">Connect</h4> <div className="flex space-x-4"> {/* Instagram */} <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-500 transition-colors"> <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6"><path d="M7.8 2h8.4C17.7 2 19 3.3 19 4.8v8.4c0 1.5-1.3 2.8-2.8 2.8H7.8C6.3 16 5 14.7 5 13.2V4.8C5 3.3 6.3 2 7.8 2zm0 1.5c-.7 0-1.3.6-1.3 1.3v8.4c0 .7.6 1.3 1.3 1.3h8.4c.7 0 1.3-.6 1.3-1.3V4.8c0-.7-.6-1.3-1.3-1.3H7.8zM12 7.5c-2.5 0-4.5 2-4.5 4.5s2 4.5 4.5 4.5 4.5-2 4.5-4.5-2-4.5-4.5-4.5zm0 1.5c1.7 0 3 1.3 3 3s-1.3 3-3 3-3-1.3-3-3 1.3-3 3-3zm5.7-4.2c.7 0 1.3.6 1.3 1.3s-.6 1.3-1.3 1.3-1.3-.6-1.3-1.3.6-1.3 1.3-1.3z"></path></svg> </a> {/* Facebook */} <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-600 transition-colors"> <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3 8h-2V7h-3v3H8v2h2v3h3v-3h2v-2z"></path></svg> </a> {/* LinkedIn */} <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors"> <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6"><path d="M20 20h-3v-5.6c0-1.33-.02-3.05-1.86-3.05-1.87 0-2.15 1.46-2.15 2.95V20h-3V10h2.82v1.27h.04c.39-.74 1.35-1.53 2.79-1.53 3 0 3.56 1.98 3.56 4.55V20zM7 8.5c-1.3 0-2.35-1.05-2.35-2.35S5.7 3.8 7 3.8s2.35 1.05 2.35 2.35S8.3 8.5 7 8.5zM8.5 20H5V10h3.5v10z"></path></svg> </a> </div> </div> {/* Newsletter (Example section) */} <div className="col-span-2 md:col-span-1"> <h4 className="text-lg font-semibold mb-4">Newsletter</h4> <p className="text-sm text-gray-400 mb-3">Get our best deals delivered straight to your inbox.</p> <form className="flex"> <input type="email" placeholder="Enter your email" className="p-2 w-full rounded-l-md text-gray-900 focus:outline-none" /> <button type="submit" className="bg-blue-600 p-2 rounded-r-md hover:bg-blue-700 transition-colors text-sm font-medium" > Sign Up </button> </form> </div> </div> {/* Copyright */} <div className="border-t border-gray-700 mt-8 pt-6 text-center"> <p className="text-sm text-gray-500"> &copy; 2025 Erasio. All rights reserved. </p> </div> </div> </footer>
    </div>
  );
};

export default StationeryServicesHome;
export { dummyProducts };
