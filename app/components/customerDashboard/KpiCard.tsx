import { ChevronDown, ChevronUp } from 'lucide-react';
import { Card, CardContent, CardTitle } from '../shadcn/ui/card';
import CustomLineChart from './CustomLineChart';

type ChartData = {
  [key: string]: number | string;
};

type KpiCardProps = {
  title: string;
  value: string;
  percentage: number;
  data: ChartData[];
};

const colors = ['#22c55e', '#f97316', '#3b82f6', '#a855f7'];

const getRandomColor = () => {
  return colors[Math.floor(Math.random() * colors.length)];
};

const KpiCard = ({ title, value, percentage, data }: KpiCardProps) => {
  const datakeys = data.length > 0 ? Object.keys(data[0]) : [];
  const xAxisDataKey = datakeys[0] || '';
  const yAxisDataKey = datakeys[1] || '';
  const randomColor = getRandomColor();

  return (
    <Card>
      <div
        className="h-1 rounded-t-lg"
        style={{ backgroundColor: randomColor }}
      />
      <CardContent className="grid grid-cols-2 items-center gap-8 p-6">
        <div>
          <CardTitle>{title}</CardTitle>
          <div className="text-3xl font-bold">{value}</div>
          <p className="flex items-center text-sm text-muted-foreground">
            <span>
              {percentage > 0 ? (
                <ChevronUp className="text-green-500" />
              ) : (
                <ChevronDown className="text-red-500" />
              )}
            </span>
            {`${percentage > 0 ? '+' : ''}${percentage}%`}
          </p>
        </div>
        <div>
          <CustomLineChart
            data={data}
            xAxisDataKey={xAxisDataKey}
            yAxisDataKey={yAxisDataKey}
            strokeColor={randomColor}
            className="aspect-[4/3]"
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default KpiCard;
