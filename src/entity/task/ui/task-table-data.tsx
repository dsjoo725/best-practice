import { DataTable, SelectCell, SelectHeader } from "@/base-package";
import type { Task } from "../model/task.model";
import type { ColumnDef } from "@tanstack/react-table";
import {
  TASK_PRIORITY_ICON,
  TASK_PRIORITY_LABEL,
  TASK_STATUS_ICON,
  TASK_STATUS_LABEL,
} from "../model/task.config";
import { MoreHorizontalIcon } from "lucide-react";
import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/base";

const columns: ColumnDef<Task>[] = [
  {
    id: "select",
    header: (ctx) => <SelectHeader {...ctx} />,
    cell: (ctx) => <SelectCell {...ctx} />,
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "id",
    header: "Task",
    cell: (ctx) => `TASK-${ctx.getValue()}`,
  },
  {
    accessorKey: "title",
    header: "Title",
    cell: (ctx) => ctx.getValue(),
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.original.status;

      return (
        <div className="flex gap-2 items-center">
          {TASK_STATUS_ICON[status]} {TASK_STATUS_LABEL[status]}
        </div>
      );
    },
  },
  {
    accessorKey: "priority",
    header: "Priority",
    cell: ({ row }) => {
      const priority = row.original.priority;

      return (
        <div className="flex gap-2 items-center">
          {TASK_PRIORITY_ICON[priority]} {TASK_PRIORITY_LABEL[priority]}
        </div>
      );
    },
  },
  {
    id: "actions",
    cell: () => (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            className="data-[state=open]:bg-muted text-muted-foreground flex size-8"
            size="icon"
          >
            <MoreHorizontalIcon />
            <span className="sr-only">Open menu</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-32">
          <DropdownMenuItem>Edit</DropdownMenuItem>
          <DropdownMenuItem>Make a copy</DropdownMenuItem>
          <DropdownMenuItem>Favorite</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem variant="destructive">Delete</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    ),
  },
];

type Props = {
  tasks: Task[];
};
export const TaskTableData = ({ tasks }: Props) => {
  return <DataTable rows={tasks} columns={columns} />;
};
