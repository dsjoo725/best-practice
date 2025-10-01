export const PAYMENT_STATUS = ["SUCCESS", "PROCESSING", "FAILED", "PENDING"] as const;
export type PaymentStatus = (typeof PAYMENT_STATUS)[number];

export const PAYMENT_STATUS_LABEL = {
  SUCCESS: "Success",
  PROCESSING: "Processing",
  FAILED: "Failed",
  PENDING: "Pending",
} satisfies Record<PaymentStatus, string>;

export const PAYMENT_STATUS_OPTIONS = PAYMENT_STATUS.map((v) => ({
  value: v,
  label: PAYMENT_STATUS_LABEL[v],
}));

export type Payment = {
  status: PaymentStatus;
  email: string;
  amount: number;
};
