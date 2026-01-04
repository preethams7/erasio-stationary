import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../../../Navbar";
import { dummyProducts } from "../../StationeryServicesHome";
import { FaArrowLeft } from "react-icons/fa";


const ProductDetails = () => {
  const { productId } = useParams();
  console.log(productId)
  const navigate = useNavigate();
  const product = dummyProducts.find(p => p.id == parseInt(productId));

  const [quantity, setQuantity] = useState(1);

  if (!product) return <p className="p-4">Product not found</p>;

  const totalPrice = product.price * quantity;
  const discountPercent = Math.round(
    ((product.mrp - product.price) / product.mrp) * 100
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="max-w-6xl mx-auto py-6 px-4 grid md:grid-cols-2 gap-8">

      
        <div>
          <button
  onClick={() => navigate(-1)}
  className="mb-3 flex items-center gap-2 text-gray-700 hover:text-blue-600"
>
  <FaArrowLeft /> Back
</button>
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-96 object-cover rounded shadow"
          />
        </div>

        {/* RIGHT – PRODUCT INFO */}
        <div className="space-y-4">
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="text-sm text-gray-600">Brand: <b>{product.brand}</b></p>

          {/* Rating */}
          <div className="flex items-center gap-2">
            <span className="text-yellow-500">
              {"★".repeat(product.rating)}
              {"☆".repeat(5 - product.rating)}
            </span>
            <span className="text-sm text-gray-600">
              ({product.reviewsCount} ratings)
            </span>
          </div>

          {/* Price */}
          <div>
            <span className="text-3xl font-bold text-gray-900">₹{product.price}</span>
            <span className="line-through text-gray-500 ml-3">₹{product.mrp}</span>
            <span className="text-green-600 ml-2">{discountPercent}% off</span>
          </div>

          {/* Stock & Delivery */}
          <p className="text-green-700 font-semibold">In Stock</p>
          <p className="text-sm text-gray-700">
            🚚 <b>{product.delivery}</b>
          </p>

          {/* Offers */}
          <div className="bg-green-50 p-3 rounded">
            <h3 className="font-semibold mb-1">Available Offers</h3>
            <ul className="list-disc pl-5 text-sm">
              {product.offers.map((offer, i) => (
                <li key={i}>{offer}</li>
              ))}
            </ul>
          </div>

          {/* Quantity */}
          <div className="flex items-center gap-3">
            <span className="font-semibold">Quantity:</span>
            <input
              type="number"
              min="1"
              value={quantity}
              onChange={(e) => setQuantity(parseInt(e.target.value))}
              className="border rounded w-20 p-1 text-center"
            />
          </div>

          {/* Total */}
          <p className="font-semibold text-lg">
            Total: ₹{totalPrice}
          </p>

          {/* Buttons */}
          <div className="flex gap-4">
            <button className="bg-yellow-400 px-6 py-2 rounded hover:bg-yellow-500">
              Add to Cart
            </button>
            <button className="bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600">
              Buy Now
            </button>
          </div>

          
        </div>
      </div>

      {/* ABOUT */}
      <div className="max-w-6xl mx-auto px-4 mt-8">
        <h2 className="text-2xl font-semibold mb-2">About this item</h2>
        <p className="text-gray-700 mb-4">{product.description}</p>

        <ul className="list-disc pl-5 space-y-1">
          {product.highlights.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>

      {/* SPECIFICATIONS */}
      <div className="max-w-6xl mx-auto px-4 mt-8">
        <h2 className="text-2xl font-semibold mb-2">Product Details</h2>
        <table className="w-full border">
          <tbody>
            {Object.entries(product.specs).map(([key, value]) => (
              <tr key={key} className="border-b">
                <td className="p-2 bg-gray-100 font-medium w-1/3">{key}</td>
                <td className="p-2">{value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* CUSTOMER REVIEWS */}
      <div className="max-w-6xl mx-auto px-4 mt-8 mb-12">
        <h2 className="text-2xl font-semibold mb-4">Customer Reviews</h2>

        {product.reviews.map((review, i) => (
          <div key={i} className="border-b py-3">
            <p className="font-semibold">{review.user}</p>
            <span className="text-yellow-500">
              {"★".repeat(review.rating)}
              {"☆".repeat(5 - review.rating)}
            </span>
            <p className="text-gray-700">{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductDetails;
