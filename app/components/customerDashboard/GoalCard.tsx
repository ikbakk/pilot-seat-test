import { Card, CardContent, CardHeader, CardTitle } from '../shadcn/ui/card';

type GoalCardProps = {
  title: string;
  current: string;
  goal: string;
  progress: number;
};

const GoalCard = ({ title, current, goal, progress }: GoalCardProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between">
          <div>
            <div className="text-3xl font-bold">{goal}</div>
            <p className="text-sm text-muted-foreground">Goal</p>
          </div>
          <div>
            <div className="text-3xl font-bold">{current}</div>
            <p className="text-sm text-muted-foreground">Current</p>
          </div>
        </div>
        <div className="mt-4 h-2 w-full rounded-full bg-muted">
          <div className={`h-2 w-[${progress}%] rounded-full bg-primary`} />
        </div>
        <p className="mt-2 text-sm text-muted-foreground">
          {progress}% of goal
        </p>
      </CardContent>
    </Card>
  );
};

export default GoalCard;
