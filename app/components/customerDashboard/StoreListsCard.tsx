import { Expand } from 'lucide-react';
import { Button } from '../shadcn/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../shadcn/ui/card';
import { formatCurrency } from '~/lib/currencyFormatter';

type StoreListsCardProps = {
  storeName: string;
  revenue: number;
  percentage: number;
  orders: number;
  items: number;
  customers: number;
  averageOrderNet: number;
  averageOrderItems: number;
  netProfit: number;
};

const StoreListsCard = ({
  storeName,
  revenue,
  percentage,
  orders,
  items,
  customers,
  averageOrderNet,
  averageOrderItems,
  netProfit,
}: StoreListsCardProps) => {
  return (
    <Card className="border">
      <CardHeader className="flex items-center justify-between">
        <CardTitle className="text-sm font-medium">{storeName}</CardTitle>
        <Button variant="ghost" size="icon">
          <Expand className="h-5 w-5" />
        </Button>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{formatCurrency(revenue)}</div>
        <p className="text-xs text-muted-foreground">Net Revenue</p>
        <div className="text-xs text-green-500">{percentage}%</div>
        <div className="mt-2 text-sm">{orders} Orders</div>
        <div className="mt-2 text-sm">{items} Items</div>
        <div className="mt-2 text-sm">{customers} New Customers</div>
        <div className="mt-2 text-sm">
          {formatCurrency(averageOrderNet)} Average Order Net
        </div>
        <div className="mt-2 text-sm">
          {averageOrderItems} Average Order Items
        </div>
        <div className="mt-2 text-sm">
          ({formatCurrency(netProfit)}) Net Profit
        </div>
      </CardContent>
    </Card>
  );
};

export default StoreListsCard;
