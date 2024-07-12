import { Bar, BarChart, CartesianGrid, XAxis } from 'recharts';
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '../shadcn/ui/chart';

const BarchartChart = (props: React.HTMLAttributes<HTMLDivElement>) => {
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
            { month: 'July', desktop: 186 },
            { month: 'August', desktop: 305 },
            { month: 'September', desktop: 237 },
            { month: 'October', desktop: 73 },
            { month: 'November', desktop: 209 },
            { month: 'December', desktop: 214 },
          ]}
        >
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="month"
            tickLine={false}
            tickMargin={1}
            axisLine={false}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent hideLabel />}
          />
          <Bar
            dataKey="desktop"
            radius={4}
            className="transition duration-300"
            fill="rgba(156, 39, 176, 0.5)"
            style={{ transition: 'fill 0.3s ease' }}
            onMouseEnter={(e) => (e.target.style.fill = '#9C27B0')}
            onMouseLeave={(e) =>
              (e.target.style.fill = 'rgba(156, 39, 176, 0.5)')
            }
          />
        </BarChart>
      </ChartContainer>
    </div>
  );
};

export default BarchartChart;
