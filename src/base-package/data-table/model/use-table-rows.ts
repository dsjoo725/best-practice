import { useControllableState } from "@/base/model/use-controllable-state";
import { useCallback } from "react";

type Props<TData> = {
  rowsProps?: TData[];
  defaultRows?: TData[];
  onRowsChange?: (updater: TData[] | ((prev: TData[]) => TData[])) => void;
};
export const useTableRows = <TData>({ rowsProps, defaultRows, onRowsChange }: Props<TData>) => {
  const [rows, setRows] = useControllableState<TData[]>({
    prop: rowsProps,
    defaultProp: defaultRows ?? [],
    onChange: onRowsChange,
  });

  const updateCell = useCallback(
    (rowIndex: number, columnKey: keyof TData, value: TData[keyof TData]) => {
      setRows((prev) => {
        if (rowIndex < 0 || rowIndex >= prev.length) return prev;
        const next = prev.slice();
        next[rowIndex] = { ...prev[rowIndex], [columnKey]: value };
        return next;
      });
    },
    [setRows]
  );

  return { rows, updateCell };
};
