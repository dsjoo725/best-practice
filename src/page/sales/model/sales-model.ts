import type { OrderType, PaymentMethod, PaymentStatus } from '@/base';

export type SalesTransaction = {
  id: number;
  saleDate: string;
  receiptNo: string;
  paymentMethod: PaymentMethod;
  orderType: OrderType;
  status: PaymentStatus;
  deviceId: string;
  deviceName: string;
  saleAmount: number;
  paymentAmount: number;
  discountAmount: number;
  vatAmount: number;
};
