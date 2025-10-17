import { useEffect, useState } from 'react';

import { Calendar, isSameDay } from '@/base-package/calendar';
import {
  DAILY_SALES_SUMMARY,
  DailySalesSummaryCell,
  DailySalesSummaryCellSkeleton,
  GOODS_SALES_BY_DATE,
  type DailySalesSummary,
  type GoodsSales,
} from '@/entity/sales';
import { ThemeToggle } from '@/base/components/theme-toggle';
import { FetchBoundary } from '@/base/components/fetch-boundary';
import { DataTable } from '@/base-package/data-table';
import type { ColumnDef } from '@tanstack/react-table';

const columns: ColumnDef<GoodsSales>[] = [
  {
    accessorKey: 'goodsName',
    header: '상품명',
  },
  {
    accessorKey: 'quantity',
    header: '수량',
  },
  {
    accessorKey: 'unitPrice',
    header: '단가',
  },
  {
    accessorKey: 'salesAmount',
    header: '매출',
  },
];

export const CalendarPage = () => {
  const [summaryList, setSummaryList] = useState<DailySalesSummary[]>();
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    setIsFetching(true);
    setTimeout(() => {
      setSummaryList(DAILY_SALES_SUMMARY);
      setIsFetching(false);
    }, 500);
  }, []);

  const [selectedDate, setSelectedDate] = useState<string>();
  const [goodsSales, setGoodsSales] = useState<GoodsSales[]>([]);

  useEffect(() => {
    if (!selectedDate) {
      return;
    }

    setTimeout(() => {
      setGoodsSales(GOODS_SALES_BY_DATE[selectedDate] ?? []);
    }, 500);
  }, [selectedDate]);

  return (
    <div className="p-4">
      <div>
        <ThemeToggle />
      </div>
      <div className="flex gap-4">
        <Calendar
          className="h-130 w-220"
          renderDay={(props) => {
            const summary = summaryList?.find((d) => isSameDay(new Date(d.date), props.date));

            return (
              <FetchBoundary
                isFetching={isFetching}
                fallback={<DailySalesSummaryCellSkeleton {...props} />}
              >
                <DailySalesSummaryCell
                  summary={summary}
                  selected={summary && summary.date === selectedDate}
                  onClick={() => setSelectedDate(summary?.date)}
                  {...props}
                />
              </FetchBoundary>
            );
          }}
        />
        <div className="flex-1 pt-13">
          <DataTable columns={columns} rows={goodsSales} onRowsChange={setGoodsSales} />
        </div>
      </div>
    </div>
  );
};
