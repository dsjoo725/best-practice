import { Input } from "@/base/ui/input";
import { Label } from "@radix-ui/react-label";
import type { CellContext } from "@tanstack/react-table";
import { useEffect, useState } from "react";

export const InputCell = <TData, TValue>(ctx: CellContext<TData, TValue>) => {
  const { table, row, column, getValue } = ctx;

  const label = typeof column.columnDef.header === "string" ? column.columnDef.header : column.id;
  const inputId = `${row.id}-${label}`;
  const externalValue = String(getValue() ?? "");

  const [value, setValue] = useState(externalValue);

  useEffect(() => {
    setValue(externalValue);
  }, [externalValue]);

  const updateCell = (next: string) => {
    if (next !== externalValue) {
      table.options.meta?.updateCell?.(
        row.index,
        column.id as keyof TData,
        next as TData[keyof TData]
      );
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    updateCell(e.currentTarget.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.currentTarget.blur();
    } else if (e.key === "Escape") {
      e.currentTarget.value = externalValue;
      e.currentTarget.blur();
    }
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <Label htmlFor={inputId} className="sr-only">
        {label}
      </Label>
      <Input
        className="hover:bg-input/30 focus-visible:bg-background dark:hover:bg-input/30 dark:focus-visible:bg-input/30 h-8 w-40 border-transparent bg-transparent  shadow-none focus-visible:border dark:bg-transparent"
        id={inputId}
        value={value}
        onChange={(e) => setValue(e.currentTarget.value)}
        onBlur={handleBlur}
        onKeyDown={handleKeyDown}
      />
    </form>
  );
};
