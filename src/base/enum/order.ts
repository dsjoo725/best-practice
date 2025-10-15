/** 주문 유형 */
export type OrderType = 'IN_STORE' | 'TAKEOUT' | 'DELIVERY';
export const ORDER_TYPE_LABELS = {
  IN_STORE: '매장',
  TAKEOUT: '포장',
  DELIVERY: '배달',
} satisfies Record<OrderType, string>;
