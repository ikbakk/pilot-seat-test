import type { MetaFunction } from '@remix-run/node';
import CustomerDashboard from '~/components/customerDashboard/CustomerDashboard';
import NewHeader from '~/components/customerDashboard/NewHeader';
import Sidebar from '~/components/customerDashboard/Sidebar';

export const meta: MetaFunction = () => {
  return [
    { title: 'Dashboard' },
    { name: 'Customer Dashboard', content: 'Welcome to Your Dashboard!' },
  ];
};

export default function Index() {
  return (
    <div className="bg-custom-gradient flex min-h-screen w-full flex-col">
      <main className="flex w-full overflow-hidden">
        <Sidebar />
        <div className="w-full md:ml-14">
          <NewHeader />
          <CustomerDashboard />
        </div>
      </main>
    </div>
  );
}
