import { Menu, Store, ChevronDown, Check, Calendar } from 'lucide-react';
import { Button } from '../shadcn/ui/button';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from '../shadcn/ui/dropdown-menu';
import { Input } from '../shadcn/ui/input';

const CustomerDashboardNavbar = () => {
  return (
    <header className="flex items-center justify-between bg-white p-4 shadow-md">
      <div className="flex items-center space-x-4">
        <Button variant="ghost">
          <Menu className="h-4 w-4" />
        </Button>
        <h1 className="text-xl font-bold">Customer Dashboard</h1>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="flex items-center gap-2">
              <Store className="h-5 w-5" />
              Multistore
              <ChevronDown className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" className="w-[200px]">
            <DropdownMenuItem>
              <div className="flex items-center justify-between">
                <span>Pet Light Demo</span>
                <Check className="h-4 w-4 text-green-500" />
              </div>
            </DropdownMenuItem>
            <DropdownMenuItem>Shopup Records #2</DropdownMenuItem>
            <DropdownMenuItem>Shopup Records 3 Shopify</DropdownMenuItem>
            <DropdownMenuItem>Shopup Records [MTK]</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <Button variant="outline" className="ml-4">
          Full Screen
        </Button>
      </div>
      <div className="flex items-center space-x-4">
        <Input
          type="search"
          placeholder="Search all customers"
          className="w-[300px]"
        />
        <Button variant="outline">
          <Calendar className="h-5 w-5" />
          Compare
        </Button>
        <div className="flex items-center space-x-2">
          <Button variant="outline">
            <Calendar className="h-5 w-5" />
            Oct 29, 2017 - Oct 29, 2023
          </Button>
        </div>
      </div>
    </header>
  );
};

export default CustomerDashboardNavbar;
