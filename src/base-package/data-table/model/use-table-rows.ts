import { useControllableState } from "@/base/model/use-controllable-state";

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

  const updateCell = (rowIndex: number, columnKey: string, value: unknown) => {
    setRows((prev) => {
      if (rowIndex < 0 || rowIndex >= prev.length) return prev;
      const next = prev.slice();
      next[rowIndex] = { ...prev[rowIndex], [columnKey]: value };
      return next;
    });
  };

  return { rows, updateCell };
};
