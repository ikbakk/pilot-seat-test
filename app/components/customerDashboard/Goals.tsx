import { PlusIcon } from 'lucide-react';
import { Button } from '../shadcn/ui/button';
import GoalCard from './GoalCard';

const Goals = () => {
  const goalData = [
    {
      title: 'Revenue Goal',
      goal: '$150,000',
      current: '$125,345',
      progress: 83.5,
    },
    {
      title: 'New Customers Goal',
      goal: '1,500',
      current: '1,234',
      progress: 82.3,
    },
    {
      title: 'Orders Goal',
      goal: '4,000',
      current: '3,456',
      progress: 86.4,
    },
    {
      title: 'Conversion Rate Alert',
      goal: '5%',
      current: '4.5%',
      progress: 90,
    },
  ];

  return (
    <section>
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold">Goals & Alerts</h2>
        <Button variant="outline" size="sm" className="flex items-center gap-2">
          <PlusIcon className="h-4 w-4" />
          Add Goal
        </Button>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {goalData.map((goal) => (
          <GoalCard key={goal.title} {...goal} />
        ))}
      </div>
    </section>
  );
};

export default Goals;
