import React, { useEffect, useState } from "react";
import axios from "axios";
import StationeryServicesHome from "../../StationeryServicesHome";

const DEFAULT_SECTIONS = [
  { id: "ads", name: "Sliding Advertisements", enabled: true, order: 0 },
  { id: "newLaunches", name: "New Launches", enabled: true, order: 1 },
  { id: "categories", name: "Shop by Categories", enabled: true, order: 2 }, // ✅ added
  { id: "bestSellers", name: "Best Sellers", enabled: true, order: 3 },
];

const PageHome = () => {
  const [sections, setSections] = useState([]);
  const [dragIndex, setDragIndex] = useState(null);
  const [expanded, setExpanded] = useState(false);
  const [loading, setLoading] = useState(true);

  /* ---------------- FETCH CONFIG ---------------- */
  useEffect(() => {
    axios
      .get("http://localhost:8080/api/home/config")
      .then((res) => {
        if (res.data && res.data.length > 0) {
          setSections(res.data.sort((a, b) => a.order - b.order));
        } else {
          setSections(DEFAULT_SECTIONS);
        }
      })
      .catch(() => {
        setSections(DEFAULT_SECTIONS);
      })
      .finally(() => setLoading(false));
  }, []);

  /* ---------------- TOGGLE ---------------- */
  const toggleSection = (id) => {
    setSections((prev) =>
      prev.map((s) => (s.id === id ? { ...s, enabled: !s.enabled } : s))
    );
  };

  /* ---------------- DRAG ---------------- */
  const onDragStart = (index) => setDragIndex(index);

  const onDrop = (dropIndex) => {
    const updated = [...sections];
    const draggedItem = updated[dragIndex];

    updated.splice(dragIndex, 1);
    updated.splice(dropIndex, 0, draggedItem);

    const reordered = updated.map((s, i) => ({
      ...s,
      order: i,
    }));

    setSections(reordered);
    setDragIndex(null);
  };

  /* ---------------- SAVE ---------------- */
  const saveConfig = () => {
    axios
      .post("http://localhost:8080/api/home/config", sections)
      .then(() => alert("Home page configuration saved"))
      .catch(() => alert("Failed to save configuration"));
  };

  if (loading) {
    return <div className="p-6">Loading home page config...</div>;
  }

  return (
    <div
      className={`p-6 bg-gray-100 min-h-screen ${
        expanded ? "" : "grid grid-cols-1 lg:grid-cols-2 gap-6"
      }`}
    >
      {/* LEFT: CONTROLS */}
      {!expanded && (
        <div>
          <h1 className="text-2xl font-bold mb-4">Manage Home Page</h1>

          <p className="text-gray-600 mb-4">
            Drag sections to reorder. Toggle to enable/disable.
          </p>

          <div className="space-y-3">
            {sections.map((section, index) => (
              <div
                key={section.id}
                draggable
                onDragStart={() => onDragStart(index)}
                onDragOver={(e) => e.preventDefault()}
                onDrop={() => onDrop(index)}
                className="bg-white p-4 rounded shadow flex justify-between items-center cursor-move"
              >
                <span className="font-medium">{section.name}</span>

                <input
                  type="checkbox"
                  checked={section.enabled}
                  onChange={() => toggleSection(section.id)}
                />
              </div>
            ))}
          </div>

          <button
            onClick={saveConfig}
            className="mt-6 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
          >
            Save Changes
          </button>
        </div>
      )}

      {/* RIGHT: LIVE PREVIEW */}
      <div className="bg-white rounded shadow overflow-hidden">
        <div className="flex justify-between items-center p-3 border-b">
          <span className="font-semibold text-gray-700">Live Preview</span>

          <button
            onClick={() => setExpanded(!expanded)}
            className="text-sm px-3 py-1 border rounded hover:bg-gray-100"
          >
            {expanded ? "Collapse" : "Expand"}
          </button>
        </div>

        <div className="h-[80vh] overflow-y-auto">
          <StationeryServicesHome previewConfig={sections} />
        </div>
      </div>
    </div>
  );
};

export default PageHome;
