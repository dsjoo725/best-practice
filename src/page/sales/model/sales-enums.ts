/** 결제 방식 */
export const PAYMENT_METHODS = ['CARD', 'CASH', 'PREPAID'] as const;
export type PaymentMethod = (typeof PAYMENT_METHODS)[number];
export const PAYMENT_METHOD_LABELS = {
  CARD: '카드',
  CASH: '현금',
  PREPAID: '선불',
} satisfies Record<PaymentMethod, string>;

/** 주문 유형 */
export const ORDER_TYPES = ['IN_STORE', 'TAKEOUT', 'DELIVERY'] as const;
export type OrderType = (typeof ORDER_TYPES)[number];
export const ORDER_TYPE_LABELS = {
  IN_STORE: '매장',
  TAKEOUT: '포장',
  DELIVERY: '배달',
} satisfies Record<OrderType, string>;

/** 거래 상태 */
export const SALES_STATUSES = ['PAID', 'CANCELED'] as const;
export type SalesStatus = (typeof SALES_STATUSES)[number];
export const SALES_STATUS_LABELS = {
  PAID: '결제 완료',
  CANCELED: '결제 취소',
} satisfies Record<SalesStatus, string>;
