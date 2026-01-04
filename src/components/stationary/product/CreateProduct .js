import React, { useEffect, useState } from "react";
import AdminNavbar from "../admin/layout/AdminNavbar";
import axiosInstance from "../../context/axiosInstance";


const CreateProduct = () => {
  const [product, setProduct] = useState({
    name: "",
    brand: "",
    category: "",
    price: "",
    discountPrice: "",
    stock: "",
    description: "",
    attributes: [{ key: "", value: "" }],
    images: [],
  });

  useEffect(()=>{
    const handledropdown=async()=>{
     const categories=await axiosInstance.get("/category/");
     console.log(categories)
    }
    handledropdown();
  })
  // Handle text inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  // Handle attributes
  const handleAttributeChange = (index, field, value) => {
    const updated = [...product.attributes];
    updated[index][field] = value;
    setProduct({ ...product, attributes: updated });
  };

  const addAttribute = () => {
    setProduct({
      ...product,
      attributes: [...product.attributes, { key: "", value: "" }],
    });
  };

  // Handle images
  const handleImageChange = (e) => {
    setProduct({ ...product, images: [...e.target.files] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // FormData for backend
    const formData = new FormData();
    Object.keys(product).forEach((key) => {
      if (key === "attributes") {
        formData.append(key, JSON.stringify(product.attributes));
      } else if (key === "images") {
        product.images.forEach((img) => formData.append("images", img));
      } else {
        formData.append(key, product[key]);
      }
    });

    console.log("Submitting product:", product);
    alert("Product ready to be sent to backend 🚀");
  };

  return (
    <div className="min-h-screen bg-gray-100">
    
      <div className="max-w-4xl mx-auto mt-8 bg-white p-6 rounded shadow">
        <h2 className="text-2xl font-bold mb-6">Create Product</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input name="name" placeholder="Product Name" onChange={handleChange} className="w-full border p-2" required />
          <input name="brand" placeholder="Brand" onChange={handleChange} className="w-full border p-2" required />
          <input name="category" placeholder="Category" onChange={handleChange} className="w-full border p-2" required />

          <div className="grid grid-cols-2 gap-4">
            <input name="price" type="number" placeholder="Price" onChange={handleChange} className="border p-2" required />
            <input name="discountPrice" type="number" placeholder="Discount Price" onChange={handleChange} className="border p-2" />
          </div>

          <input name="stock" type="number" placeholder="Stock Quantity" onChange={handleChange} className="w-full border p-2" required />

          <textarea name="description" placeholder="Product Description" onChange={handleChange} className="w-full border p-2" rows="4" />

          {/* Attributes */}
          <div>
            <h4 className="font-semibold mb-2">Attributes</h4>
            {product.attributes.map((attr, index) => (
              <div key={index} className="flex gap-2 mb-2">
                <input
                  placeholder="Key (e.g. Color)"
                  value={attr.key}
                  onChange={(e) => handleAttributeChange(index, "key", e.target.value)}
                  className="border p-2 w-1/2"
                />
                <input
                  placeholder="Value (e.g. Black)"
                  value={attr.value}
                  onChange={(e) => handleAttributeChange(index, "value", e.target.value)}
                  className="border p-2 w-1/2"
                />
              </div>
            ))}
            <button type="button" onClick={addAttribute} className="text-blue-600 text-sm">
              + Add Attribute
            </button>
          </div>

          {/* Images */}
          <input type="file" multiple onChange={handleImageChange} />

          <button className="w-full bg-blue-600 text-white py-2 rounded">
            Create Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateProduct;
