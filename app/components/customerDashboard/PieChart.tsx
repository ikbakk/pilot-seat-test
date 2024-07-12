import React from 'react';
import { PieChart, Pie, Cell, Legend, Tooltip } from 'recharts';

const data = [
  { name: 'Delivered GMV', value: 6000000 },
  { name: 'Cost of Goods', value: 1800000 },
  { name: 'Cost of Services', value: 485000 },
  { name: 'Cost of Marketing', value: 1250000 },
  { name: 'Net Profit', value: 2465000 },
  { name: 'Inventory Value', value: 1200000 },
];

const COLORS = [
  '#0088FE',
  '#00C49F',
  '#FFBB28',
  '#FF8042',
  '#FF6347',
  '#6a5acd',
];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="#2f2f2f"
      textAnchor={x > cx ? 'start' : 'end'}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const PieChartComponent = (props: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div {...props}>
      <PieChart width={800} height={400}>
        <Tooltip />
        <Legend
          margin={{ left: 300 }}
          layout="vertical"
          verticalAlign="middle"
          align="right"
        />
        <Pie
          data={data}
          cx={200}
          cy={200}
          innerRadius={0}
          outerRadius={150}
          fill="#8884d8"
          paddingAngle={2}
          dataKey="value"
          labelLine={false}
          label={renderCustomizedLabel}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </div>
  );
};

export default PieChartComponent;
