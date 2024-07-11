import { Area, AreaChart, CartesianGrid, XAxis } from 'recharts';
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '../shadcn/ui/chart';
import { ClassAttributes, HTMLAttributes } from 'react';
import { JSX } from 'react/jsx-runtime';

const AreachartstackedChart = (
  props: JSX.IntrinsicAttributes &
    ClassAttributes<HTMLDivElement> &
    HTMLAttributes<HTMLDivElement>,
) => {
  return (
    <div {...props}>
      <ChartContainer
        config={{
          desktop: {
            label: 'Desktop',
            color: 'hsl(var(--chart-1))',
          },
          mobile: {
            label: 'Mobile',
            color: 'hsl(var(--chart-2))',
          },
        }}
        className="min-h-[300px]"
      >
        <AreaChart
          data={[
            { month: 'January', desktop: 186, mobile: 80 },
            { month: 'February', desktop: 305, mobile: 200 },
            { month: 'March', desktop: 237, mobile: 120 },
            { month: 'April', desktop: 73, mobile: 190 },
            { month: 'May', desktop: 209, mobile: 130 },
            { month: 'June', desktop: 214, mobile: 140 },
          ]}
          margin={{
            left: 12,
            right: 12,
          }}
        >
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="month"
            tickLine={false}
            axisLine={false}
            tickMargin={8}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent indicator="dot" />}
          />
          <Area
            dataKey="mobile"
            type="natural"
            fill="var(--color-mobile)"
            fillOpacity={0.4}
            stroke="var(--color-mobile)"
            stackId="a"
          />
          <Area
            dataKey="desktop"
            type="natural"
            fill="var(--color-desktop)"
            fillOpacity={0.4}
            stroke="var(--color-desktop)"
            stackId="a"
          />
        </AreaChart>
      </ChartContainer>
    </div>
  );
};

export default AreachartstackedChart;
