import type { OrderType, PaymentMethod, SalesStatus } from "./sales-enums";

export type SalesTransaction = {
  id: number;
  saleDate: string;
  receiptNo: string;
  paymentMethod: PaymentMethod;
  orderType: OrderType;
  status: SalesStatus;
  deviceId: string;
  deviceName: string;
  saleAmount: number;
  paymentAmount: number;
  discountAmount: number;
  vatAmount: number;
};
