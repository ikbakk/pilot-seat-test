// import Kpi from './Kpi';
// import Charts from './Charts';
// import Goals from './Goals';
// import DataTable from './table/DataTable';
import { payments } from '~/lib/payment';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../shadcn/ui/card';
import LinechartChart from './LineChart';
import { Button } from '../shadcn/ui/button';
import { ChevronDownIcon, RefreshCwIcon } from 'lucide-react';
import BarchartChart from './BarChart';
import { Separator } from '../shadcn/ui/separator';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../shadcn/ui/dropdown-menu';
import VisitorChart from './VisitorChart';
import PieChartCustom from './PieChart';

export const loader = async () => {
  return payments;
};

const CustomerDashboard = () => {
  return (
    <main className="flex min-h-screen w-full bg-gray-100 p-4">
      <section className="grid w-full grid-cols-1 gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
        <div className="flex h-fit w-full gap-4">
          <Card className="relative w-full">
            <div className="absolute top-4 h-10 w-1 rounded-r-md bg-red-500" />
            <CardHeader className="pb-2">
              <CardDescription>This Week</CardDescription>
              <CardTitle className="text-4xl">$1,329</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-xs text-muted-foreground">
                +25% from last week
              </div>
            </CardContent>
          </Card>
          <Card className="relative w-full">
            <div className="absolute top-4 h-10 w-1 rounded-r-md bg-purple-500" />
            <CardHeader className="pb-2">
              <CardDescription>This Month</CardDescription>
              <CardTitle className="text-4xl">$5,329</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-xs text-muted-foreground">
                +10% from last month
              </div>
            </CardContent>
          </Card>
          <Card className="relative w-full">
            <div className="absolute top-4 h-10 w-1 rounded-r-md bg-green-500" />
            <CardHeader className="pb-2">
              <CardDescription>New Customers</CardDescription>
              <CardTitle className="text-4xl">+250</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-xs text-muted-foreground">
                +15% from last month
              </div>
            </CardContent>
          </Card>
          <Card className="relative w-full">
            <div className="absolute top-4 h-10 w-1 rounded-r-md bg-orange-500" />
            <CardHeader className="pb-2">
              <CardDescription>Conversion Rate</CardDescription>
              <CardTitle className="text-4xl">3.6%</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-xs text-muted-foreground">
                +0.2% from last month
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="h-fit">
          <div className="flex gap-16 p-6">
            <div>
              <CardDescription>Total Orders</CardDescription>
              <CardTitle>3,456</CardTitle>
            </div>
            <div>
              <CardDescription>Periods</CardDescription>
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center font-bold">
                  <p>Months</p>
                  <ChevronDownIcon className="ml-2 h-4 w-4 opacity-50" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="font-bold">
                  <DropdownMenuItem>Years</DropdownMenuItem>
                  <DropdownMenuItem>Days</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
          <Separator />
          <CardContent className="grid grid-cols-2 items-end">
            <LinechartChart className="scale-75" />
            <BarchartChart className="scale-75" />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Revenue Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <PieChartCustom />
          </CardContent>
        </Card>

        <Card className="h-fit">
          <CardHeader>
            <CardTitle>Visitor Overview</CardTitle>
            <CardDescription>
              Total visitors for the last 6 months
            </CardDescription>
          </CardHeader>
          <CardContent>
            <VisitorChart />
          </CardContent>
        </Card>
      </section>

      <section className="w-[30%]">
        <Card className="backdrop-blur-md">
          <CardHeader className="flex flex-row items-start bg-muted/50">
            <div className="grid gap-0.5">
              <CardTitle>Total 4 Stores</CardTitle>
              <CardDescription>As of today</CardDescription>
            </div>
            <Button size="icon" variant="outline" className="ml-auto h-6 w-6">
              <RefreshCwIcon className="h-3.5 w-3.5" />
              <span className="sr-only">Refresh</span>
            </Button>
          </CardHeader>
          <CardContent className="p-6 text-sm">
            <div className="grid gap-3">
              <div className="-mb-3 text-sm font-semibold text-foreground">
                Net Revenue
              </div>
              <div className="text-4xl font-semibold">$30,503,708</div>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Orders</span>
                <span>3,456</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Customers</span>
                <span>1,234 people</span>
              </div>
              <Separator className="my-2" />
              <div className="flex items-center justify-between font-semibold">
                <span className="text-foreground">
                  Quick access to your store
                </span>
              </div>
              <div className="flex w-full items-center justify-between">
                <div className="rounded-full bg-muted-foreground p-2 font-semibold hover:cursor-pointer hover:bg-foreground hover:text-white">
                  SB
                </div>
                <div className="rounded-full bg-muted-foreground p-2 font-semibold hover:cursor-pointer hover:bg-foreground hover:text-white">
                  AB
                </div>
                <div className="rounded-full bg-muted-foreground p-2 font-semibold hover:cursor-pointer hover:bg-foreground hover:text-white">
                  ER
                </div>
                <div className="rounded-full bg-muted-foreground p-2 font-semibold hover:cursor-pointer hover:bg-foreground hover:text-white">
                  DF
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex flex-row items-center border-t bg-muted/50 px-6 py-3">
            <Button size="sm" variant="default" className="w-full">
              See All Stores
            </Button>
          </CardFooter>
        </Card>
      </section>
    </main>
  );
};

export default CustomerDashboard;
