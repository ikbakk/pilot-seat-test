/* eslint-disable jsx-a11y/anchor-is-valid */
import { PlusIcon, Package2Icon } from 'lucide-react';
import { Button } from '../shadcn/ui/button';

const CustomerDashboardNavbar1 = () => {
  return (
    <header className="flex h-16 items-center justify-between border-b bg-background px-4 md:px-6">
      <div className="flex items-center gap-4">
        <a href="#" className="flex items-center gap-2">
          <Package2Icon className="h-6 w-6" />
          <span className="text-lg font-semibold">Acme Analytics</span>
        </a>
        <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
          <a href="#" className="text-primary">
            KPIs
          </a>
          <a href="#" className="text-muted-foreground hover:text-foreground">
            Reports
          </a>
          <a href="#" className="text-muted-foreground hover:text-foreground">
            Settings
          </a>
        </nav>
      </div>
      <div className="flex items-center gap-4">
        <Button variant="outline" size="sm">
          <PlusIcon className="mr-2 h-4 w-4" />
          Add Metric
        </Button>
      </div>
    </header>
  );
};

export default CustomerDashboardNavbar1;
