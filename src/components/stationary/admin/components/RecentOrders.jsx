// admin/components/RecentOrders.jsx
const RecentOrders = () => {
  return (
    <div className="bg-white p-4 rounded shadow">
      <h3 className="font-semibold mb-3">Recent Orders</h3>
      <ul className="text-sm space-y-2">
        <li>#ORD1023 – ₹12,999 – Shipped</li>
        <li>#ORD1024 – ₹9,999 – Pending</li>
        <li>#ORD1025 – ₹5,499 – Delivered</li>
      </ul>
    </div>
  );
};

export default RecentOrders;
