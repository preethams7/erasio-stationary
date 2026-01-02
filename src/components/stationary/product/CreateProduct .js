import React, { useState } from "react";
import Navbar from "../Navbar";

const CreateProduct = () => {
  const [product, setProduct] = useState({
    name: "",
    price: "",
    description: "",
    image: null,
    imagePreview: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setProduct({
      ...product,
      image: file,
      imagePreview: URL.createObjectURL(file),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Later you can send this to backend using FormData
    console.log("Product Data:", product);

    alert("Product created successfully!");

    // Reset form
    setProduct({
      name: "",
      price: "",
      description: "",
      image: null,
      imagePreview: null,
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="max-w-3xl mx-auto mt-10 bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Create New Product
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Product Name */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Product Name
            </label>
            <input
              type="text"
              name="name"
              value={product.name}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Enter product name"
            />
          </div>

          {/* Price */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Price (₹)
            </label>
            <input
              type="number"
              name="price"
              value={product.price}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Enter price"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Description
            </label>
            <textarea
              name="description"
              value={product.description}
              onChange={handleChange}
              rows="3"
              className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Enter product description"
            />
          </div>

          {/* Image Upload */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Product Image
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="w-full"
            />
          </div>

          {/* Image Preview */}
          {product.imagePreview && (
            <div className="mt-4">
              <p className="text-sm text-gray-600 mb-2">Image Preview</p>
              <img
                src={product.imagePreview}
                alt="Preview"
                className="w-40 h-40 object-cover rounded-md border"
              />
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md font-semibold hover:bg-blue-700 transition-colors"
          >
            Create Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateProduct;
