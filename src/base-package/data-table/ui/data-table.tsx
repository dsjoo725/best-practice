import { useCallback, useEffect, useMemo, useState } from "react";
import type { TableProps } from "../model/data-table.type";
import { flexRender, getCoreRowModel, useReactTable } from "@tanstack/react-table";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/base";

export const DataTable = <TData extends Record<string, unknown>, TValue>({
  rows,
  columns,
  onRowsChange,
  getRowId,
}: TableProps<TData, TValue>) => {
  const isControlled = Boolean(onRowsChange);
  const [uncontrolledRows, setUncontrolledRows] = useState<TData[]>(() => rows);

  useEffect(() => {
    if (!isControlled) {
      setUncontrolledRows(rows);
    }
  }, [rows, isControlled]);

  const currentRows = isControlled ? rows : uncontrolledRows;

  const updateRows = useCallback(
    (updater: TData[] | ((prev: TData[]) => TData[])) => {
      if (isControlled) {
        onRowsChange?.(updater);
      } else {
        setUncontrolledRows(updater);
      }
    },
    [isControlled, onRowsChange]
  );

  const memoColumns = useMemo(() => columns, [columns]);
  const memoData = useMemo(() => currentRows, [currentRows]);

  const table = useReactTable({
    data: memoData,
    columns: memoColumns,
    getCoreRowModel: getCoreRowModel(),
    getRowId,
    meta: {
      updateRows,
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
