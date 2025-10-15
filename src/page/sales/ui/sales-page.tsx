import type { ColumnDef } from '@tanstack/react-table';

import { DataTable, SelectCell, SelectHeader } from '@/base-package';
import { SALES_TRANSACTION_DATA } from '../model/sales-data';
import type { SalesTransaction } from '../model/sales-model';
import {
  ORDER_TYPE_LABELS,
  PAYMENT_METHOD_LABELS,
  PAYMENT_STATUS_LABELS,
  type OrderType,
  type PaymentMethod,
  type PaymentStatus,
} from '@/base';

const SALES_COLUMNS: ColumnDef<SalesTransaction>[] = [
  {
    accessorKey: 'select',
    header: (info) => <SelectHeader {...info} />,
    cell: (info) => <SelectCell {...info} />,
  },
  {
    accessorKey: 'saleDate',
    header: '매출일자',
  },
  {
    accessorKey: 'receiptNo',
    header: '영수 번호',
  },
  {
    accessorKey: 'paymentMethod',
    header: '결제 방식',
    cell: (info) => PAYMENT_METHOD_LABELS[info.getValue<PaymentMethod>()],
  },
  {
    accessorKey: 'orderType',
    header: '주문 방식',
    cell: (info) => ORDER_TYPE_LABELS[info.getValue<OrderType>()],
  },
  {
    accessorKey: 'status',
    header: '상태',
    cell: (info) => PAYMENT_STATUS_LABELS[info.getValue<PaymentStatus>()],
  },
  {
    accessorKey: 'deviceId',
    header: '장비 ID',
  },
  {
    accessorKey: 'deviceName',
    header: '장비명',
  },
  {
    accessorKey: 'saleAmount',
    header: '매출 금액',
    meta: {
      align: 'right',
    },
    cell: (info) => `${info.getValue<number>().toLocaleString('ko-KR')}원`,
  },
  {
    accessorKey: 'paymentAmount',
    header: '결제 금액',
    meta: {
      align: 'right',
    },
    cell: (info) => `${info.getValue<number>().toLocaleString('ko-KR')}원`,
  },
  {
    accessorKey: 'discountAmount',
    header: '할인 금액',
    meta: {
      align: 'right',
    },
    cell: (info) => `${info.getValue<number>().toLocaleString('ko-KR')}원`,
  },
  {
    accessorKey: 'vatAmount',
    header: '부가세액',
    meta: {
      align: 'right',
    },
    cell: (info) => `${info.getValue<number>().toLocaleString('ko-KR')}원`,
  },
] as const;

export const SalesPage = () => {
  return (
    <div>
      <h1>매출 분석</h1>
      <div className="p-4">
        <DataTable columns={SALES_COLUMNS} defaultRows={SALES_TRANSACTION_DATA} />
      </div>
    </div>
  );
};
