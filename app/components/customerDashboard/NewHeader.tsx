import {
  HomeIcon,
  LineChartIcon,
  MenuIcon,
  Package2Icon,
  PackageIcon,
  Search,
  SettingsIcon,
  ShoppingCartIcon,
  UsersIcon,
} from 'lucide-react';
import { Button } from '../shadcn/ui/button';
import { Link } from '@remix-run/react';
import { Sheet, SheetContent, SheetTrigger } from '../shadcn/ui/sheet';
import { Input } from '../shadcn/ui/input';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../shadcn/ui/dropdown-menu';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
} from '../shadcn/ui/breadcrumb';

const NewHeader = () => {
  return (
    <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b px-4 py-2 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6 md:bg-background">
      <Sheet>
        <SheetTrigger asChild>
          <Button size="icon" variant="outline" className="sm:hidden">
            <MenuIcon className="h-5 w-5" />
            <span className="sr-only">Toggle Menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="sm:max-w-xs">
          <nav className="grid gap-6 text-lg font-medium">
            <Link
              to="#"
              className="group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:text-base"
            >
              <Package2Icon className="h-5 w-5 transition-all group-hover:scale-110" />
              <span className="sr-only">Acme Inc</span>
            </Link>
            <Link
              to="#"
              className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
            >
              <HomeIcon className="h-5 w-5" />
              Dashboard
            </Link>
            <Link
              to="#"
              className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
            >
              <ShoppingCartIcon className="h-5 w-5" />
              Orders
            </Link>
            <Link
              to="#"
              className="flex items-center gap-4 px-2.5 text-foreground"
            >
              <PackageIcon className="h-5 w-5" />
              Products
            </Link>
            <Link
              to="#"
              className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
            >
              <UsersIcon className="h-5 w-5" />
              Customers
            </Link>
            <Link
              to="#"
              className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
            >
              <LineChartIcon className="h-5 w-5" />
              Analytics
            </Link>
            <Link
              to="#"
              className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
            >
              <SettingsIcon className="h-5 w-5" />
              Settings
            </Link>
          </nav>
        </SheetContent>
      </Sheet>
      <Breadcrumb className="hidden md:flex">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link to="#">Dashboard</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="relative ml-auto flex items-center gap-2 md:grow-0">
        <Search className="absolute left-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Search..."
          className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]"
        />
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="overflow-hidden rounded-full"
          >
            SP
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Settings</DropdownMenuItem>
          <DropdownMenuItem>Support</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Logout</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  );
};

export default NewHeader;
