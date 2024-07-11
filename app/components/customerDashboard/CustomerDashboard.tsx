import Kpi from './Kpi';
import Charts from './Charts';
import Goals from './Goals';

const CustomerDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <main className="mt-6 space-y-6">
        <Kpi />
        <Charts />
        <Goals />
      </main>
    </div>
  );
};

export default CustomerDashboard;
