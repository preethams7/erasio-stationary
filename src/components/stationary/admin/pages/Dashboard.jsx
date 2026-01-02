// admin/pages/Dashboard.jsx
import StatCard from '../components/StatCard';
import RecentOrders from '../components/RecentOrders';

const Dashboard = () => {
  return (
    <>
      <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <StatCard title="Orders" value="2,304" />
        <StatCard title="Sales" value="₹12,54,240" />
        <StatCard title="Customers" value="829" />
        <StatCard title="Products" value="4,532" />
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white p-4 rounded shadow">
          Sales Chart (API later)
        </div>
        <RecentOrders />
      </div>
    </>
  );
};

export default Dashboard;
