import { Bar, BarChart, CartesianGrid, XAxis } from 'recharts';
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '../shadcn/ui/chart';

type CustomBarChartProps = {
  showXAxis?: boolean;
  color?: string;
  barsize?: number;
} & React.HTMLAttributes<HTMLDivElement>;

const BarchartChart = ({
  showXAxis = true,
  barsize,
  color,
  ...props
}: CustomBarChartProps) => {
  return (
    <div {...props}>
      <ChartContainer
        config={{
          desktop: {
            label: 'Desktop',
            color: 'hsl(var(--chart-1))',
          },
        }}
        className="min-h-[300px]"
      >
        <BarChart
          data={[
            { month: 'January', desktop: 186 },
            { month: 'February', desktop: 305 },
            { month: 'March', desktop: 237 },
            { month: 'April', desktop: 73 },
            { month: 'May', desktop: 209 },
            { month: 'June', desktop: 214 },
          ]}
        >
          <CartesianGrid vertical={false} />
          <XAxis
            hide={showXAxis}
            dataKey="month"
            tickLine={false}
            tickMargin={3}
            axisLine={false}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent hideLabel />}
          />
          <Bar
            dataKey="desktop"
            barSize={barsize}
            fill={color ?? 'var(--color-desktop)'}
            radius={8}
          />
        </BarChart>
      </ChartContainer>
    </div>
  );
};

export default BarchartChart;
