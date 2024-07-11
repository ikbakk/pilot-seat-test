import { Card, CardContent, CardHeader, CardTitle } from '../shadcn/ui/card';

type ChartCardProps = {
  title: string;
  children: React.ReactNode;
};

const ChartCard = ({ title, children }: ChartCardProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );
};

export default ChartCard;
