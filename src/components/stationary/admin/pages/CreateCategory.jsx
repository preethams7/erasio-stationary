import { useState } from "react";
import axios from "axios";
import axiosInstance from "../../../context/axiosInstance";

export default function CreateCategory() {
  const [category, setCategory] = useState("");
  const [descr, setDescr] = useState("");
  const [enabled, setEnabled] = useState(true);
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!category || !image) {
      alert("Category name and image are required");
      return;
    }

    const formData = new FormData();
    formData.append("category", category);
    formData.append("descr", descr);
    formData.append("enabled", enabled);
    formData.append("image", image);

    try {
      setLoading(true);
      await axiosInstance.post(
  "/category/create",
  formData,
  { headers: { "Content-Type": "multipart/form-data" } }
);

      alert("Category created successfully");

      // reset
      setCategory("");
      setDescr("");
      setEnabled(true);
      setImage(null);
      setPreview(null);
    } catch (err) {
      alert("Failed to create category");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto mt-4 bg-white p-8 rounded-lg shadow">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Add New Category
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Category Name */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">
            Category Name
          </label>
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="Enter category name"
          />
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">
            Description
          </label>
          <textarea
            rows={3}
            value={descr}
            onChange={(e) => setDescr(e.target.value)}
            className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="Enter description"
          />
        </div>

        {/* Image Upload */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">
            Category Image
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => {
              const file = e.target.files[0];
              setImage(file);
              setPreview(URL.createObjectURL(file));
            }}
            className="w-full"
          />
        </div>

        {/* Image Preview */}
        {preview && (
          <div>
            <p className="text-sm text-gray-600 mb-2">Image Preview</p>
            <img
              src={preview}
              alt="Preview"
              className="w-40 h-40 object-cover rounded border"
            />
          </div>
        )}

        {/* Enabled */}
        <div className="flex items-center gap-3">
          <input
            type="checkbox"
            checked={enabled}
            onChange={(e) => setEnabled(e.target.checked)}
            className="h-4 w-4"
          />
          <span className="text-sm font-medium text-gray-700">
            Enabled
          </span>
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white py-2 rounded-md font-semibold hover:bg-blue-700 transition disabled:opacity-50"
        >
          {loading ? "Saving..." : "Save Category"}
        </button>
      </form>
    </div>
  );
}
