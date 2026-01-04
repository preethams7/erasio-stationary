import { Link } from "react-router-dom";
import { useState } from "react";
import {
  FaHome,
  FaTachometerAlt,
  FaBoxOpen,
  FaShoppingCart,
  FaUsers,
  FaCog,
  FaChevronDown,
  FaFileAlt
} from "react-icons/fa";

const Sidebar = () => {
  const [openMenu, setOpenMenu] = useState(null);

  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  return (
    <aside className="w-64 bg-gray-900 text-white flex flex-col">

      {/* LOGO */}
      <div className="p-6 text-xl font-bold text-blue-400">
        Erasio Admin
      </div>

      {/* NAV */}
      <nav className="flex-1 px-3 space-y-1 text-sm">

        {/* DASHBOARD */}
        <Link
          to="/admin"
          className="flex items-center gap-3 p-2 rounded hover:bg-gray-700"
        >
          <FaTachometerAlt /> Dashboard
        </Link>

        {/* HOME PAGE (CMS) */}
        <button
          onClick={() => toggleMenu("homePage")}
          className="w-full flex items-center justify-between p-2 rounded hover:bg-gray-700"
        >
          <span className="flex items-center gap-3">
            <FaHome /> Home Page
          </span>
          <FaChevronDown
            className={`transition-transform ${
              openMenu === "homePage" ? "rotate-180" : ""
            }`}
          />
        </button>

        {openMenu === "homePage" && (
          <div className="ml-8 space-y-1 text-gray-300">
            <Link
              to="/admin/page-home"
              className="flex items-center gap-2 p-2 rounded hover:bg-gray-700"
            >
              <FaFileAlt /> Page Home
            </Link>
          </div>
        )}

        {/* PRODUCTS */}
        <button
          onClick={() => toggleMenu("products")}
          className="w-full flex items-center justify-between p-2 rounded hover:bg-gray-700"
        >
          <span className="flex items-center gap-3">
            <FaBoxOpen /> Products
          </span>
          <FaChevronDown
            className={`transition-transform ${
              openMenu === "products" ? "rotate-180" : ""
            }`}
          />
        </button>

        {openMenu === "products" && (
          <div className="ml-8 space-y-1 text-gray-300">
            <Link to="/admin/products" className="block p-2 rounded hover:bg-gray-700">
              All Products
            </Link>
            <Link to="/admin/products/add" className="block p-2 rounded hover:bg-gray-700">
              Add Product
            </Link>
            
            <Link to="/admin/products/inventory" className="block p-2 rounded hover:bg-gray-700">
              Inventory / Stock
            </Link>
          </div>
        )}
<button
          onClick={() => toggleMenu("categories")}
          className="w-full flex items-center justify-between p-2 rounded hover:bg-gray-700"
        >
          <span className="flex items-center gap-3">
            <FaBoxOpen /> Categories
          </span>
          <FaChevronDown
            className={`transition-transform ${
              openMenu === "categories" ? "rotate-180" : ""
            }`}
          />
        </button>
        {openMenu === "categories" && (
          <div className="ml-8 space-y-1 text-gray-300">
            <Link to="/admin/categories" className="block p-2 rounded hover:bg-gray-700">
              All Category
            </Link>
            <Link to="/admin/categories/add" className="block p-2 rounded hover:bg-gray-700">
              Add Category
            </Link>
          </div>
        )}

        {/* ORDERS */}
        <button
          onClick={() => toggleMenu("orders")}
          className="w-full flex items-center justify-between p-2 rounded hover:bg-gray-700"
        >
          <span className="flex items-center gap-3">
            <FaShoppingCart /> Orders
          </span>
          <FaChevronDown
            className={`transition-transform ${
              openMenu === "orders" ? "rotate-180" : ""
            }`}
          />
        </button>

        {openMenu === "orders" && (
          <div className="ml-8 space-y-1 text-gray-300">
            <Link to="/admin/orders" className="block p-2 rounded hover:bg-gray-700">
              All Orders
            </Link>
            <Link to="/admin/orders/pending" className="block p-2 rounded hover:bg-gray-700">
              Pending Orders
            </Link>
            <Link to="/admin/orders/returns" className="block p-2 rounded hover:bg-gray-700">
              Returns / Refunds
            </Link>
            <Link to="/admin/orders/invoices" className="block p-2 rounded hover:bg-gray-700">
              Invoices
            </Link>
          </div>
        )}

        {/* CUSTOMERS */}
        <Link
          to="/admin/customers"
          className="flex items-center gap-3 p-2 rounded hover:bg-gray-700"
        >
          <FaUsers /> Customers
        </Link>

        {/* SETTINGS */}
        <Link
          to="/admin/settings"
          className="flex items-center gap-3 p-2 rounded hover:bg-gray-700"
        >
          <FaCog /> Settings
        </Link>

      </nav>
    </aside>
  );
};

export default Sidebar;
