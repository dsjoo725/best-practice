import {
  Button,
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectValue,
  SelectTrigger,
} from "@/base";
import { DataTable } from "@/base-package";

import type { ColumnDef } from "@tanstack/react-table";
import { PAYMENT_STATUS_OPTIONS, type Payment, type PaymentStatus } from "../model/payment-model";

const PAYMENT_COLUMN_DEFS: ColumnDef<Payment>[] = [
  {
    accessorKey: "status",
    header: "Status",
    meta: {
      align: "left",
    },
    cell: ({ getValue, table, row, column }) => {
      const value = getValue<PaymentStatus>();
      const updateCell = table.options.meta?.updateCell;

      return (
        <Select
          value={value}
          onValueChange={(value: PaymentStatus) => {
            updateCell?.(row.index, column.id, value);
          }}
        >
          <SelectTrigger aria-label="Status" className="w-30">
            <SelectValue placeholder="Select a status" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Status</SelectLabel>
              {PAYMENT_STATUS_OPTIONS.map((opt) => (
                <SelectItem key={opt.value} value={opt.value} aria-label={opt.label}>
                  {opt.label}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      );
    },
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "amount",
    header: "Amount",
    meta: {
      align: "right",
    },
    cell: (info) => {
      const value = info.getValue<number>() ?? 0;
      return value.toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
      });
    },
  },
] as const;

const PAYMENTS: Payment[] = [
  { status: "SUCCESS", email: "ken99@example.com", amount: 316 },
  { status: "SUCCESS", email: "abe45@example.com", amount: 242 },
  { status: "PROCESSING", email: "monserrat44@example.com", amount: 837 },
  { status: "FAILED", email: "carmella@example.com", amount: 721 },
  { status: "PENDING", email: "jason78@example.com", amount: 450 },
  { status: "SUCCESS", email: "sarah23@example.com", amount: 1280 },
] as const;

export const PaymentPage = () => {
  return (
    <div className="p-4">
      <Card className="w-200">
        <CardHeader>
          <CardTitle>Payments</CardTitle>
          <CardDescription>Manage your payments</CardDescription>
          <CardAction>
            <Button>Add Payment</Button>
          </CardAction>
        </CardHeader>
        <CardContent>
          <DataTable columns={PAYMENT_COLUMN_DEFS} defaultRows={PAYMENTS} />
        </CardContent>
      </Card>
    </div>
  );
};
