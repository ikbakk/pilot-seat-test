import { ColumnDef } from '@tanstack/react-table';
import { Payment } from '../../../lib/payment';

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: 'order.id',
    header: 'Order',
  },
  {
    accessorKey: 'order.date',
    header: 'Date',
  },
  {
    accessorKey: 'customer.name',
    header: 'Customer',
  },
  {
    accessorKey: 'customer.location',
    header: 'Location',
  },
  {
    accessorKey: 'total',
    header: 'Total',
  },
  {
    accessorKey: 'paymentMethod',
    header: 'Payment Method',
  },
  {
    accessorKey: 'items.count',
    header: 'Items',
  },
  {
    accessorKey: 'items.description',
    header: 'Description',
  },
];
