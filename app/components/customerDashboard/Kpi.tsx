/**
 * v0 by Vercel.
 * @see https://v0.dev/t/nv4wY8OhB23
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from '../shadcn/ui/button';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
} from '../shadcn/ui/dropdown-menu';

import { CalendarIcon, FilterIcon } from 'lucide-react';
import KpiCard from './KpiCard';

export default function Kpi() {
  const kpiData = [
    {
      id: 1,
      title: 'Total Revenue',
      value: '$125,345',
      percentage: 12,
      data: [
        { month: 'January', value: 100 },
        { month: 'February', value: 120 },
        { month: 'March', value: 110 },
        { month: 'April', value: 130 },
        { month: 'May', value: 115 },
        { month: 'June', value: 140 },
        { month: 'July', value: 130 },
      ],
    },
    {
      id: 2,
      title: 'New Customers',
      value: '1,234',
      percentage: 5,
      data: [
        { month: 'January', value: 200 },
        { month: 'February', value: 180 },
        { month: 'March', value: 220 },
        { month: 'April', value: 210 },
        { month: 'May', value: 230 },
        { month: 'June', value: 240 },
        { month: 'July', value: 250 },
      ],
    },
    {
      id: 3,
      title: 'Orders',
      value: '3,456',
      percentage: 8,
      data: [
        { month: 'January', value: 300 },
        { month: 'February', value: 350 },
        { month: 'March', value: 330 },
        { month: 'April', value: 360 },
        { month: 'May', value: 340 },
        { month: 'June', value: 380 },
        { month: 'July', value: 370 },
      ],
    },
    {
      id: 4,
      title: 'Conversion Rate',
      value: '4.5%',
      percentage: 0.2,
      data: [
        { month: 'January', value: 4.1 },
        { month: 'February', value: 4.3 },
        { month: 'March', value: 4.2 },
        { month: 'April', value: 4.4 },
        { month: 'May', value: 4.3 },
        { month: 'June', value: 4.5 },
        { month: 'July', value: 4.6 },
      ],
    },
    {
      id: 5,
      title: 'Avg. Order Value',
      value: '$45.67',
      percentage: 3,
      data: [
        { month: 'January', value: 40 },
        { month: 'February', value: 42 },
        { month: 'March', value: 41 },
        { month: 'April', value: 43 },
        { month: 'May', value: 44 },
        { month: 'June', value: 46 },
        { month: 'July', value: 45 },
      ],
    },
    {
      id: 6,
      title: 'Returning Customers',
      value: '32%',
      percentage: 1,
      data: [
        { month: 'January', value: 28 },
        { month: 'February', value: 30 },
        { month: 'March', value: 29 },
        { month: 'April', value: 31 },
        { month: 'May', value: 32 },
        { month: 'June', value: 33 },
        { month: 'July', value: 32 },
      ],
    },
  ];

  return (
    <section>
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">KPIs</h1>
        <div className="flex items-center gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                size="sm"
                className="flex items-center gap-2"
              >
                <FilterIcon className="h-4 w-4" />
                Filters
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-64">
              <DropdownMenuLabel>Filter by</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuCheckboxItem checked>
                Revenue
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem>Customers</DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem>Orders</DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem>Marketing</DropdownMenuCheckboxItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                size="sm"
                className="flex items-center gap-2"
              >
                <CalendarIcon className="h-4 w-4" />
                Last 30 days
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-64">
              <DropdownMenuLabel>Select date range</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuRadioGroup
                value="last30days"
                onValueChange={(value: string) => console.log(value)}
              >
                <DropdownMenuRadioItem value="last30days">
                  Last 30 days
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="last90days">
                  Last 90 days
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="last12months">
                  Last 12 months
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="custom">
                  Custom
                </DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
        {kpiData.map((data) => (
          <KpiCard
            key={data.title}
            title={data.title}
            value={data.value}
            data={data.data}
            percentage={data.percentage}
          />
        ))}
      </div>
    </section>
  );
}
