import { Card, CardContent, CardHeader, CardTitle } from '../shadcn/ui/card';

type KpiCardProps = {
  title: string;
  value: string;
  percentage: number;
};

const KpiCard = ({ title, value, percentage }: KpiCardProps) => {
  return (
    <Card>
      <CardHeader className="flex items-center justify-between">
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-3xl font-bold">{value}</div>
        <p className="text-sm text-muted-foreground">
          {`${percentage > 0 ? '+' : ''}${percentage}%`} from last month
        </p>
      </CardContent>
    </Card>
  );
};

export default KpiCard;
