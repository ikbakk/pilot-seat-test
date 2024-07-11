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
    { id: 1, title: 'Total Revenue', value: '$125,345', percentage: 12 },
    { id: 2, title: 'New Customers', value: '1,234', percentage: 5 },
    { id: 3, title: 'Orders', value: '3,456', percentage: 8 },
    { id: 4, title: 'Conversion Rate', value: '4.5%', percentage: 0.2 },
    { id: 5, title: 'Avg. Order Value', value: '$45.67', percentage: 3 },
    { id: 6, title: 'Returning Customers', value: '32%', percentage: 1 },
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
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {kpiData.map((data) => (
          <KpiCard
            key={data.title}
            title={data.title}
            value={data.value}
            percentage={data.percentage}
          />
        ))}
      </div>
    </section>
  );
}
