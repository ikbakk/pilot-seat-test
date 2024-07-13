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
import {
  ChevronDownIcon,
  CircleDot,
  Download,
  ShoppingCart,
  Upload,
} from 'lucide-react';
import BarchartChart from './BarChart';
import { Separator } from '../shadcn/ui/separator';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../shadcn/ui/dropdown-menu';
import VisitorChart from './VisitorChart';
import PieChartCustom from './PieChart';

const CustomerDashboard = () => {
  return (
    <main className="flex min-h-screen w-full flex-col bg-white/80 p-4 backdrop-blur-3xl md:flex-row">
      <section className="grid w-full grid-cols-1 gap-4 sm:px-6 sm:py-0 md:gap-8">
        <h1 className="mt-4 text-2xl font-semibold">Welcome Back, User!</h1>
        <div className="grid h-fit w-full grid-cols-2 gap-4 md:grid-cols-4">
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

        <section className="bg-transparent outline-none lg:hidden lg:w-[30%] 2xl:w-[25%]">
          <Card className="border-none bg-transparent">
            <CardHeader className="flex flex-row items-center justify-center">
              <CardTitle className="text-center">Total Balance</CardTitle>
            </CardHeader>
            <CardContent className="text-sm">
              <div className="grid gap-4">
                <div className="text-center text-4xl font-semibold">
                  $30,503,708
                </div>

                <div className="flex items-center justify-center gap-2">
                  <CircleDot className="h-4 w-4 text-purple-500" />
                  <p className="text-center font-semibold">12.81%</p>
                </div>

                <div className="flex w-full items-center justify-around">
                  <Button className="rounded-lg bg-black text-white hover:bg-black/80">
                    Send <Upload className="ml-2 h-4 w-4" />
                  </Button>
                  <Button className="rounded-lg bg-black text-white hover:bg-black/80">
                    Receive <Download className="ml-2 h-4 w-4" />
                  </Button>
                </div>

                <div className="flex items-center justify-between font-semibold">
                  <span className="text-foreground">Quick transfer</span>
                </div>
                <div className="flex w-full items-center justify-between">
                  <div className="rounded-full bg-purple-800 p-2 font-semibold text-white hover:cursor-pointer">
                    SB
                  </div>
                  <div className="rounded-full bg-purple-800 p-2 font-semibold text-white hover:cursor-pointer">
                    AB
                  </div>
                  <div className="rounded-full bg-purple-800 p-2 font-semibold text-white hover:cursor-pointer">
                    ER
                  </div>
                  <div className="rounded-full bg-purple-800 p-2 font-semibold text-white hover:cursor-pointer">
                    DF
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col items-center gap-4 border-t px-6 py-3">
              <div className="flex w-full justify-between">
                <div className="font border-spacing-4 border-b-2 border-purple-500 font-semibold text-purple-500">
                  Marketplace
                </div>
                <div>History</div>
                <div>Payment</div>
              </div>
              <div className="flex w-full flex-col gap-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <ShoppingCart />
                    <div className="font-semibold">Online Store 1</div>
                  </div>
                  <Button>Connected</Button>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <ShoppingCart />
                    <div className="font-semibold">Online Store 2</div>
                  </div>
                  <Button>Connected</Button>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <ShoppingCart />
                    <div className="font-semibold">Online Store 3</div>
                  </div>
                  <Button className="bg-purple-500 text-white">Connect</Button>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <ShoppingCart />
                    <div className="font-semibold">Online Store 4</div>
                  </div>
                  <Button className="bg-purple-500 text-white">Connect</Button>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <ShoppingCart />
                    <div className="font-semibold">Online Store 5</div>
                  </div>
                  <Button className="bg-purple-500 text-white">Connect</Button>
                </div>
              </div>
            </CardFooter>
          </Card>
        </section>

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
          <CardContent className="grid grid-cols-1 items-center lg:grid-cols-2">
            <LinechartChart />
            <BarchartChart />
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

      <section className="hidden bg-transparent outline-none lg:flex lg:w-[30%] 2xl:w-[25%]">
        <Card className="border-none bg-transparent">
          <CardHeader className="flex flex-row items-center justify-center">
            <CardTitle className="text-center">Total Balance</CardTitle>
          </CardHeader>
          <CardContent className="text-sm">
            <div className="grid gap-4">
              <div className="text-center text-4xl font-semibold">
                $30,503,708
              </div>

              <div className="flex items-center justify-center gap-2">
                <CircleDot className="h-4 w-4 text-purple-500" />
                <p className="text-center font-semibold">12.81%</p>
              </div>

              <div className="flex w-full items-center justify-around">
                <Button className="rounded-lg bg-black text-white hover:bg-black/80">
                  Send <Upload className="ml-2 h-4 w-4" />
                </Button>
                <Button className="rounded-lg bg-black text-white hover:bg-black/80">
                  Receive <Download className="ml-2 h-4 w-4" />
                </Button>
              </div>

              <div className="flex items-center justify-between font-semibold">
                <span className="text-foreground">Quick transfer</span>
              </div>
              <div className="flex w-full items-center justify-between">
                <div className="rounded-full bg-purple-800 p-2 font-semibold text-white hover:cursor-pointer">
                  SB
                </div>
                <div className="rounded-full bg-purple-800 p-2 font-semibold text-white hover:cursor-pointer">
                  AB
                </div>
                <div className="rounded-full bg-purple-800 p-2 font-semibold text-white hover:cursor-pointer">
                  ER
                </div>
                <div className="rounded-full bg-purple-800 p-2 font-semibold text-white hover:cursor-pointer">
                  DF
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col items-center gap-4 border-t px-6 py-3">
            <div className="flex w-full justify-between">
              <div className="font border-spacing-4 border-b-2 border-purple-500 font-semibold text-purple-500">
                Marketplace
              </div>
              <div>History</div>
              <div>Payment</div>
            </div>
            <div className="flex w-full flex-col gap-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <ShoppingCart />
                  <div className="font-semibold">Online Store 1</div>
                </div>
                <Button>Connected</Button>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <ShoppingCart />
                  <div className="font-semibold">Online Store 2</div>
                </div>
                <Button>Connected</Button>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <ShoppingCart />
                  <div className="font-semibold">Online Store 3</div>
                </div>
                <Button className="bg-purple-500 text-white">Connect</Button>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <ShoppingCart />
                  <div className="font-semibold">Online Store 4</div>
                </div>
                <Button className="bg-purple-500 text-white">Connect</Button>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <ShoppingCart />
                  <div className="font-semibold">Online Store 5</div>
                </div>
                <Button className="bg-purple-500 text-white">Connect</Button>
              </div>
            </div>
          </CardFooter>
        </Card>
      </section>
    </main>
  );
};

export default CustomerDashboard;
