import { useEffect, useState } from 'react';

import { Calendar, isSameDay } from '@/base-package/calendar';
import {
  DAILY_SALES_SUMMARY,
  DailySalesSummaryCell,
  DailySalesSummaryCellSkeleton,
  type DailySalesSummary,
} from '@/entity/sales';

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

  return (
    <div className="p-4">
      <Calendar
        className="h-130 w-220"
        renderDay={(props) => {
          if (isFetching) return <DailySalesSummaryCellSkeleton {...props} />;

          const summary = summaryList?.find((d) => isSameDay(new Date(d.date), props.date));
          return <DailySalesSummaryCell summary={summary} {...props} />;
        }}
      />
    </div>
  );
};
