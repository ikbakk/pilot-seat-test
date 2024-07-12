import { LineChart, CartesianGrid, XAxis, Line } from 'recharts';
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '../shadcn/ui/chart';

type ChartData = {
  [key: string]: number | string;
};

type CustomLineChartProps = {
  data: ChartData[];
  xAxisDataKey: string;
  yAxisDataKey: string;
  strokeColor: string;
} & React.HTMLAttributes<HTMLDivElement>;

const CustomLineChart = ({
  data,
  xAxisDataKey,
  yAxisDataKey,
  strokeColor = 'var(--color-desktop)',
  ...props
}: CustomLineChartProps) => {
  const config = {};
  return (
    <div {...props}>
      <ChartContainer config={config}>
        <LineChart
          data={data}
          margin={{
            left: 12,
            right: 12,
            top: 12,
          }}
        >
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey={xAxisDataKey}
            tickLine={false}
            axisLine={false}
            tickMargin={8}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent hideLabel />}
          />
          <Line
            dataKey={yAxisDataKey}
            type="natural"
            stroke={strokeColor}
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ChartContainer>
    </div>
  );
};

export default CustomLineChart;
