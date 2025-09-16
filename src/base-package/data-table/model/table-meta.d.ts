import type { Updater } from "@tanstack/react-table";
import type { useTableRows } from "./use-table-rows";

export type UpdateRows<T> = (updater: Updater<T[]>) => void;

declare module "@tanstack/react-table" {
  interface ColumnMeta {
    align?: "left" | "center" | "right";
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  interface TableMeta<TData extends RowData>
    extends Omit<ReturnType<typeof useTableRows<TData>>, "rows"> {}
}
