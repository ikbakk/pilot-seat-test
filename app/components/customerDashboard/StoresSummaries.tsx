import StoreSummaryCard from './StoresSummaryCard';

const StoresSummaries = () => {
  const storeSummaryData = [
    { id: 1, title: 'Net Revenue', percentage: 10.9, revenue: 30503708 },
    { id: 2, title: 'Orders', percentage: 12.33, revenue: 87801 },
    { id: 3, title: 'Items', percentage: 13.33, revenue: 800130 },
    { id: 4, title: 'Average Order Net', percentage: -4.71, revenue: 347.4 },
    { id: 5, title: 'New Customers', percentage: 7.21, revenue: 62827 },
    { id: 6, title: 'Average Items', percentage: -6.71, revenue: 9.2 },
    { id: 7, title: 'Net Profit', percentage: 10.9, revenue: 25378861 },
    { id: 8, title: 'Net Total Cost', percentage: 5.35, revenue: 5025157 },
  ];
  return (
    <section className="rounded-lg bg-white p-4 shadow-md">
      <h2 className="text-lg font-bold">Totals for 4 Stores</h2>
      <div className="mt-4 grid grid-cols-4 gap-4">
        {storeSummaryData.map((data) => (
          <StoreSummaryCard
            key={data.id}
            title={data.title}
            percentage={data.percentage}
            revenue={data.revenue}
          />
        ))}
      </div>
    </section>
  );
};

export default StoresSummaries;
