/** 결제 수단 */
export type PaymentMethod = 'CARD' | 'CASH' | 'PREPAID';
export const PAYMENT_METHOD_LABELS = {
  CARD: '카드',
  CASH: '현금',
  PREPAID: '선불',
} as const satisfies Record<PaymentMethod, string>;

/** 결제 상태 */
export type PaymentStatus = 'PENDING' | 'PAID' | 'CANCELLED' | 'FAILED' | 'REFUNDED';
export const PAYMENT_STATUS_LABELS = {
  PENDING: '결제 대기',
  PAID: '결제 완료',
  CANCELLED: '결제 취소',
  FAILED: '결제 실패',
  REFUNDED: '환불 완료',
} as const satisfies Record<PaymentStatus, string>;
