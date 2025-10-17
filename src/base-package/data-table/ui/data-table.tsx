import {
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
  type ColumnDef,
} from '@tanstack/react-table';
import { useState } from 'react';

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/base/ui/table';
import { cn } from '@/base/lib/utils';

import { useTableRows } from '../model/use-table-rows';

type DataTableProps<TData, TValue> = {
  rows?: TData[];
  defaultRows?: TData[];
  columns: ColumnDef<TData, TValue>[];
  emptyMessage?: string;
  onRowsChange?: (updater: TData[] | ((prev: TData[]) => TData[])) => void;
};

export const DataTable = <TData extends Record<string, unknown>, TValue>({
  rows: rowsProps,
  defaultRows,
  columns,
  emptyMessage = '표시할 항목이 없어요.',
  onRowsChange,
}: DataTableProps<TData, TValue>) => {
  const { rows, ...updater } = useTableRows<TData>({
    rowsProps,
    defaultRows,
    onRowsChange,
  });

  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 10,
  });

  const table = useReactTable({
    data: rows,
    columns: columns,
    getCoreRowModel: getCoreRowModel(),

    state: {
      pagination,
    },
    onPaginationChange: setPagination,
    getPaginationRowModel: getPaginationRowModel(),
    meta: {
      ...updater,
    },
  });

  return (
    <Table>
      <TableHeader>
        {table.getHeaderGroups().map((headerGroup) => (
          <TableRow key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <TableHead
                key={header.id}
                className={cn(
                  header.column.columnDef.meta?.align === 'center' && 'text-center',
                  header.column.columnDef.meta?.align === 'right' && 'text-right',
                  header.column.columnDef.meta?.align === 'left' && 'text-left',
                )}
              >
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
            <TableRow key={row.id} data-state={row.getIsSelected() && 'selected'}>
              {row.getVisibleCells().map((cell) => (
                <TableCell
                  key={cell.id}
                  className={cn(
                    cell.column.columnDef.meta?.align === 'center' && 'text-center',
                    cell.column.columnDef.meta?.align === 'right' && 'text-right',
                    cell.column.columnDef.meta?.align === 'left' && 'text-left',
                  )}
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </TableCell>
              ))}
            </TableRow>
          ))
        ) : (
          <TableRow>
            <TableCell colSpan={table.getAllLeafColumns().length} className="h-24 text-center">
              {emptyMessage}
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};
