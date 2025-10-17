import type { DailySalesSummary, GoodsSales } from '../model/sales-model';

export const DAILY_SALES_SUMMARY: DailySalesSummary[] = [
  { date: '2025-10-01', totalAmount: 725000, orderCount: 90, changeRate: 0.5 },
  { date: '2025-10-02', totalAmount: 748300, orderCount: 92, changeRate: 3.2 },
  { date: '2025-10-03', totalAmount: 811200, orderCount: 98, changeRate: 8.4 },
  { date: '2025-10-04', totalAmount: 905600, orderCount: 114, changeRate: 11.7 },
  { date: '2025-10-05', totalAmount: 692400, orderCount: 83, changeRate: -23.6 },
];

export const GOODS_SALES_BY_DATE: Record<string, GoodsSales[]> = {
  '2025-10-01': [
    {
      goodsId: 'G001',
      goodsName: '아메리카노',
      quantity: 30,
      unitPrice: 4500,
      salesAmount: 135000,
    },
    { goodsId: 'G002', goodsName: '카페라떼', quantity: 25, unitPrice: 5500, salesAmount: 137500 },
    { goodsId: 'G003', goodsName: '샌드위치', quantity: 15, unitPrice: 6200, salesAmount: 93000 },
    { goodsId: 'G004', goodsName: '베이글', quantity: 20, unitPrice: 4600, salesAmount: 92000 },
    { goodsId: 'G005', goodsName: '머핀', quantity: 10, unitPrice: 4800, salesAmount: 48000 },
  ],
  '2025-10-02': [
    {
      goodsId: 'G001',
      goodsName: '아메리카노',
      quantity: 32,
      unitPrice: 4500,
      salesAmount: 144000,
    },
    { goodsId: 'G002', goodsName: '카페라떼', quantity: 28, unitPrice: 5500, salesAmount: 154000 },
    { goodsId: 'G003', goodsName: '샌드위치', quantity: 20, unitPrice: 6200, salesAmount: 124000 },
    { goodsId: 'G004', goodsName: '베이글', quantity: 18, unitPrice: 4600, salesAmount: 82800 },
    { goodsId: 'G006', goodsName: '케이크조각', quantity: 10, unitPrice: 6800, salesAmount: 68000 },
  ],
  '2025-10-03': [
    {
      goodsId: 'G001',
      goodsName: '아메리카노',
      quantity: 35,
      unitPrice: 4500,
      salesAmount: 157500,
    },
    { goodsId: 'G002', goodsName: '카페라떼', quantity: 30, unitPrice: 5500, salesAmount: 165000 },
    { goodsId: 'G003', goodsName: '샌드위치', quantity: 22, unitPrice: 6200, salesAmount: 136400 },
    { goodsId: 'G004', goodsName: '베이글', quantity: 18, unitPrice: 4600, salesAmount: 82800 },
    { goodsId: 'G007', goodsName: '쿠키세트', quantity: 10, unitPrice: 7200, salesAmount: 72000 },
  ],
  '2025-10-04': [
    {
      goodsId: 'G001',
      goodsName: '아메리카노',
      quantity: 38,
      unitPrice: 4500,
      salesAmount: 171000,
    },
    { goodsId: 'G002', goodsName: '카페라떼', quantity: 35, unitPrice: 5500, salesAmount: 192500 },
    { goodsId: 'G003', goodsName: '샌드위치', quantity: 25, unitPrice: 6200, salesAmount: 155000 },
    { goodsId: 'G004', goodsName: '베이글', quantity: 20, unitPrice: 4600, salesAmount: 92000 },
    { goodsId: 'G005', goodsName: '머핀', quantity: 15, unitPrice: 4800, salesAmount: 72000 },
  ],
  '2025-10-05': [
    {
      goodsId: 'G001',
      goodsName: '아메리카노',
      quantity: 28,
      unitPrice: 4500,
      salesAmount: 126000,
    },
    { goodsId: 'G002', goodsName: '카페라떼', quantity: 26, unitPrice: 5500, salesAmount: 143000 },
    { goodsId: 'G003', goodsName: '샌드위치', quantity: 18, unitPrice: 6200, salesAmount: 111600 },
    { goodsId: 'G004', goodsName: '베이글', quantity: 15, unitPrice: 4600, salesAmount: 69000 },
    { goodsId: 'G006', goodsName: '케이크조각', quantity: 8, unitPrice: 6800, salesAmount: 54400 },
  ],
};
