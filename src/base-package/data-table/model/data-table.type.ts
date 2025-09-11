import type { ColumnDef, Row } from "@tanstack/react-table";

export type TableProps<TData, TValue> = {
  rows: TData[];
  columns: ColumnDef<TData, TValue>[];
  onRowsChange?: (updater: TData[] | ((prev: TData[]) => TData[])) => void;
  getRowId?: (originalRow: TData, index: number, parent?: Row<TData> | undefined) => string;
};
