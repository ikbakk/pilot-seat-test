import { Download } from 'lucide-react';
import { Button } from '../shadcn/ui/button';
import StoreListsCard from './StoreListsCard';

const StoreLists = () => {
  const storeListsData = [
    {
      storeName: 'Pet Light Demo',
      revenue: 909730,
      percentage: 10.9,
      orders: 531,
      items: 2000,
      customers: 87,
      averageOrderNet: 187.8,
      averageOrderItems: 4.5,
      netProfit: 908,
    },
    {
      storeName: 'Shopup Records #2',
      revenue: 18917525,
      percentage: 12.24,
      orders: 70304,
      items: 700132,
      customers: 60000,
      averageOrderNet: 213.7,
      averageOrderItems: 4.5,
      netProfit: 18918982,
    },
    {
      storeName: 'Shopup Records 3 Shopify',
      revenue: 909,
      percentage: 200,
      orders: 17,
      items: 68,
      customers: 7,
      averageOrderNet: 56.8,
      averageOrderItems: 4.0,
      netProfit: 908,
    },
    {
      storeName: 'Shopup Records [MTK]',
      revenue: 10810110,
      percentage: -5.21,
      orders: 7946,
      items: 2394,
      customers: 60,
      averageOrderNet: 1010,
      averageOrderItems: 3.5,
      netProfit: -902835,
    },
  ];

  return (
    <section className="rounded-lg bg-white p-4 shadow-md">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-bold">Stores</h2>
        <Button variant="outline">
          <Download className="h-5 w-5" />
          Export
        </Button>
      </div>
      <div className="mt-4 grid grid-cols-4 gap-4">
        {storeListsData.map((data) => (
          <StoreListsCard
            key={data.storeName}
            storeName={data.storeName}
            revenue={data.revenue}
            percentage={data.percentage}
            orders={data.orders}
            items={data.items}
            customers={data.customers}
            averageOrderNet={data.averageOrderNet}
            averageOrderItems={data.averageOrderItems}
            netProfit={data.netProfit}
          />
        ))}
      </div>
    </section>
  );
};

export default StoreLists;
