import type { MetaFunction } from '@remix-run/node';
import CustomerDashboardNavbar from '~/components/customerDashboard/Navbar';
import StoreLists from '~/components/customerDashboard/StoreLists';
import StoresSummaries from '~/components/customerDashboard/StoresSummaries';

export const meta: MetaFunction = () => {
  return [
    { title: 'Dashboard 2' },
    { name: 'Customer Dashboard', content: 'Welcome to Your Dashboard!' },
  ];
};

export default function Index() {
  return (
    <div className="flex min-h-screen flex-col">
      <CustomerDashboardNavbar />
      <main className="grid flex-1 gap-6 p-4 md:p-6">
        <StoresSummaries />
        <StoreLists />
      </main>
    </div>
  );
}
