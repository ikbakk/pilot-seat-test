import { PieChart, Pie, Tooltip } from 'recharts';
import { ChartContainer } from '../shadcn/ui/chart';
import { CardContent, CardFooter } from '../shadcn/ui/card';
import { formatCurrency } from '~/lib/currencyFormatter';

const data = [
  {
    name: 'Delivered GMV',
    value: 600000,
    fill: '#6A1B9A',
  },
  {
    name: 'Cost of Goods',
    value: 180000,
    fill: '#7B1FA2',
  },
  {
    name: 'Cost of Services',
    value: 485000,
    fill: '#8E24AA',
  },
  {
    name: 'Cost of Marketing',
    value: 105000,
    fill: '#9C27B0',
  },
  {
    name: 'Net Profit',
    value: 171840,
    fill: '#AB47BC',
  },
  {
    name: 'Inventory Value',
    value: 120000,
    fill: '#BA68C8',
  },
];

const chartConfig = {
  deliveredGMV: {
    label: 'Delivered GMV',
    color: '#6A1B9A',
  },
  costOfGoods: {
    label: 'Cost of Goods',
    color: '#7B1FA2',
  },
  costOfServices: {
    label: 'Cost of Services',
    color: '#8E24AA',
  },
  costOfMarketing: {
    label: 'Cost of Marketing',
    color: '#9C27B0',
  },
  netProfit: {
    label: 'Net Profit',
    color: '#AB47BC',
  },
  inventoryValue: {
    label: 'Inventory Value',
    color: '#BA68C8',
  },
};

const PieChartComponent = () => {
  return (
    <div className="flex flex-col gap-2 lg:flex">
<<<<<<< HEAD
      <CardContent className="flex flex-1 flex-col pb-0 xl:flex-row xl:items-center xl:justify-around">
=======
      <CardContent className="flex flex-1 flex-col pb-0 lg:flex-row lg:items-center lg:justify-around">
>>>>>>> 44cbb250d06b67a88c943fb8918807ecae1afc53
        <ChartContainer className="min-h-[250px] pb-0" config={chartConfig}>
          <PieChart>
            <Tooltip />
            <Pie data={data} dataKey="value" label nameKey="name" />
          </PieChart>
        </ChartContainer>
        <ul className="flex flex-col gap-2">
          {data.map((item) => (
            <li className="flex justify-between" key={item.name}>
              <div className="flex items-center gap-2">
                <div
                  className="inline-block h-2 w-2 rounded-full"
                  style={{ backgroundColor: item.fill }}
                />
                <span className="font-semibold">{item.name}</span>
              </div>
              <span className="ml-4">{formatCurrency(item.value)}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="text-center leading-none text-muted-foreground">
          Showing total revenue overview for the last 6 months
        </div>
      </CardFooter>
    </div>
  );
};

export default PieChartComponent;
