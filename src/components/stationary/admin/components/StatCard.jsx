// admin/components/StatCard.jsx
const StatCard = ({ title, value }) => (
  <div className="bg-white rounded-lg p-4 shadow">
    <p className="text-gray-500 text-sm">{title}</p>
    <h2 className="text-2xl font-bold mt-2">{value}</h2>
  </div>
);

export default StatCard;
