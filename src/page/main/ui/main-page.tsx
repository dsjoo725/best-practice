import { DataTable } from "@/base-package";
import type { ColumnDef } from "@tanstack/react-table";
import { useState } from "react";

type User = {
  id: number;
  name: string;
  email: string;
};

const columns: ColumnDef<User>[] = [
  {
    accessorKey: "id",
    header: "ID",
    cell: (info) => info.getValue(),
  },
  {
    accessorKey: "name",
    header: "Name",
    cell: (info) => info.getValue(),
  },
  {
    accessorKey: "email",
    header: "Email",
    cell: (info) => info.getValue(),
  },
];

export const MainPage = () => {
  const [rows, setRows] = useState<User[]>([
    { id: 1, name: "Alice", email: "alice@test.com" },
    { id: 2, name: "Bob", email: "bob@test.com" },
  ]);

  return (
    <div className="w-200 p-4">
      <DataTable rows={rows} columns={columns} onRowsChange={setRows} />
    </div>
  );
};
