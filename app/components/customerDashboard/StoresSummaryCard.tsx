import { formatCurrency } from '~/lib/currencyFormatter';
import { Card, CardContent, CardHeader, CardTitle } from '../shadcn/ui/card';

type StoreSummaryCardProps = {
  title: string;
  percentage: number;
  revenue: number;
};

const StoreSummaryCard = ({
  title,
  percentage,
  revenue,
}: StoreSummaryCardProps) => {
  const percentColor = percentage > 0 ? 'text-green-500' : 'text-red-500';
  return (
    <Card className="border">
      <CardHeader className="flex items-center justify-between">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <div className={percentColor}>{percentage}%</div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{formatCurrency(revenue)}</div>
      </CardContent>
    </Card>
  );
};

export default StoreSummaryCard;
