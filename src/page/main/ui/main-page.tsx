import { DataTable } from "@/base-package";
import { InputCell } from "@/base-package/data-table/ui/input-cell";
import type { ColumnDef } from "@tanstack/react-table";
import { useEffect, useState } from "react";

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
    cell: (props) => <InputCell {...props} />,
  },
];

export const MainPage = () => {
  const [rows, setRows] = useState<User[]>([]);

  console.log(rows);

  useEffect(() => {
    const timer = setTimeout(() => {
      const next: User[] = Array.from({ length: 100 }, (_, i) => ({
        id: i + 1,
        name: `User ${i + 1}`,
        email: `user${i + 1}@test.com`,
      }));
      setRows(next);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-200 p-4">
      <DataTable rows={rows} columns={columns} onRowsChange={setRows} />
    </div>
  );
};
