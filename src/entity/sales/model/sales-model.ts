export type DailySalesSummary = {
  date: string;

  totalAmount: number;
  orderCount: number;
  changeRate?: number;
};

export type GoodsSales = {
  goodsId: string;
  goodsName: string;
  quantity: number;
  unitPrice: number;
  salesAmount: number;
};
