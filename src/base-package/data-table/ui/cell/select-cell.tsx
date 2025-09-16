import { Checkbox } from "@radix-ui/react-checkbox";
import type { CellContext, HeaderContext } from "@tanstack/react-table";

export const SelectCell = <TData, TValue>({ row }: CellContext<TData, TValue>) => {
  return (
    <div className="flex items-center justify-center">
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    </div>
  );
};

export const SelectHeader = <TData, TValue>({ table }: HeaderContext<TData, TValue>) => {
  return (
    <div className="flex items-center justify-center">
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() || (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    </div>
  );
};
