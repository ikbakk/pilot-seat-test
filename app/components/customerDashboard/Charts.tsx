import { CalendarIcon, MonitorDotIcon } from 'lucide-react';
import { Button } from '../shadcn/ui/button';
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../shadcn/ui/dropdown-menu';
import ChartCard from './ChartCard';
import LinechartChart from './LineChart';
import BarchartChart from './BarChart';
import AreachartstackedChart from './AreaStackedChart';

const Charts = () => {
  return (
    <section>
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold">Performance</h2>
        <div className="flex items-center gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                size="sm"
                className="flex items-center gap-2"
              >
                <MonitorDotIcon className="h-4 w-4" />
                Metrics
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-64">
              <DropdownMenuLabel>Select Metrics</DropdownMenuLabel>
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
                onValueChange={(value) => console.log(value)}
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
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
        <ChartCard title="Revenue">
          <LinechartChart className="aspect-[4/3]" />
        </ChartCard>
        <ChartCard title="New Customers">
          <BarchartChart className="aspect-[4/3]" />
        </ChartCard>
        <ChartCard title="Orders">
          <AreachartstackedChart className="aspect-[4/3]" />
        </ChartCard>
        <ChartCard title="Conversion Rate">
          <LinechartChart className="aspect-[4/3]" />
        </ChartCard>
      </div>
    </section>
  );
};

export default Charts;
