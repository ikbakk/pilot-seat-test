export interface Order {
  id: string;
  date: string;
  status: 'completed' | 'renewal';
}

export interface Customer {
  name: string;
  location: string;
  avatar: string;
}

export interface Items {
  count: number;
  description: string;
}

export interface Payment {
  order: Order;
  customer: Customer;
  total: string;
  paymentMethod: string;
  items: Items;
}

export const payments: Payment[] = [
  {
    order: {
      id: '#585',
      date: 'May 31, 2018',
      status: 'completed',
    },
    customer: {
      name: 'Bryce Adams',
      location: 'Caulfield Junction, Australia',
      avatar: 'https://via.placeholder.com/150',
    },
    total: '$40.00',
    paymentMethod: 'Credit Card (Stripe)',
    items: {
      count: 2,
      description: 'Variable Collar – Blue',
    },
  },
  {
    order: {
      id: '#579',
      date: 'May 22, 2018',
      status: 'renewal',
    },
    customer: {
      name: 'Bryce Adams',
      location: 'Caulfield Junction, Australia',
      avatar: 'https://via.placeholder.com/150',
    },
    total: '$40.00',
    paymentMethod: 'Credit Card (Stripe)',
    items: {
      count: 2,
      description: 'Monthly Corgi Box',
    },
  },
  {
    order: {
      id: '#577',
      date: 'May 22, 2018',
      status: 'renewal',
    },
    customer: {
      name: 'Bryce Adams',
      location: 'Caulfield Junction, Australia',
      avatar: 'https://via.placeholder.com/150',
    },
    total: '$25.00',
    paymentMethod: 'Credit Card (Stripe)',
    items: {
      count: 1,
      description: 'Monthly Corgi Box',
    },
  },
  {
    order: {
      id: '#574',
      date: 'April 22, 2018',
      status: 'completed',
    },
    customer: {
      name: 'Bryce Adams',
      location: 'Caulfield Junction, Australia',
      avatar: 'https://via.placeholder.com/150',
    },
    total: '$40.00',
    paymentMethod: 'Credit Card (Stripe)',
    items: {
      count: 2,
      description: 'Monthly Corgi Box',
    },
  },
  {
    order: {
      id: '#571',
      date: 'April 22, 2018',
      status: 'completed',
    },
    customer: {
      name: 'Bryce Adams',
      location: 'Caulfield Junction, Australia',
      avatar: 'https://via.placeholder.com/150',
    },
    total: '$25.00',
    paymentMethod: 'Credit Card (Stripe)',
    items: {
      count: 1,
      description: 'Monthly Corgi Box',
    },
  },
  {
    order: {
      id: '#449',
      date: 'April 20, 2018',
      status: 'completed',
    },
    customer: {
      name: 'Colleen Bergnaum',
      location: 'Ciénaga de Oro, Colombia',
      avatar: 'https://via.placeholder.com/150',
    },
    total: '$250.00',
    paymentMethod: 'Paypal',
    items: {
      count: 10,
      description: 'Blue Collar',
    },
  },
];
