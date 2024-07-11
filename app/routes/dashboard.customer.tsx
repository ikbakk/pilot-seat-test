import type { MetaFunction } from '@remix-run/node';
import CustomerDashboard from '~/components/customerDashboard/CustomerDashboard';
import CustomerDashboardNavbar1 from '~/components/customerDashboard/Navbar1';

export const meta: MetaFunction = () => {
  return [
    { title: 'Dashboard' },
    { name: 'Customer Dashboard', content: 'Welcome to Your Dashboard!' },
  ];
};

export default function Index() {
  return (
    <div className="flex min-h-screen flex-col">
      <CustomerDashboardNavbar1 />
      <main className="grid flex-1 gap-6 p-4 md:p-6">
        <CustomerDashboard />
      </main>
    </div>
  );
}
