import {
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
  type ColumnDef,
} from "@tanstack/react-table";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/base";
import { useTableRows } from "../model/use-table-rows";

type DataTableProps<TData, TValue> = {
  rows?: TData[];
  defaultRows?: TData[];
  columns: ColumnDef<TData, TValue>[];
  onRowsChange?: (updater: TData[] | ((prev: TData[]) => TData[])) => void;
};

export const DataTable = <TData extends Record<string, unknown>, TValue>({
  rows: rowsProps,
  defaultRows,
  columns,
  onRowsChange,
}: DataTableProps<TData, TValue>) => {
  const { rows, ...updater } = useTableRows<TData>({
    rowsProps,
    defaultRows,
    onRowsChange,
  });

  const table = useReactTable({
    data: rows,
    columns: columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    meta: {
      ...updater,
    },
  });

  return (
    <div className="w-full overflow-x-auto">
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((hg) => (
            <TableRow key={hg.id}>
              {hg.headers.map((header) => (
                <TableHead key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(header.column.columnDef.header, header.getContext())}
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>

        <TableBody>
          {table.getRowModel().rows.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow key={row.id} data-state={row.getIsSelected() && "selected"}>
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={table.getAllLeafColumns().length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};
