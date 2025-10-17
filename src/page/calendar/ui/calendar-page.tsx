import { Calendar, isSameDay } from '@/base-package/calendar';
import { cn } from '@/base/lib/utils';
import { Badge } from '@/base/ui/badge';
import { DAILY_SALES_SUMMARY, type DailySalesSummary } from '@/entity/sales';
import { TrendingDown, TrendingUp } from 'lucide-react';
import { useEffect, useState } from 'react';

export const CalendarPage = () => {
  const [summary, setSummary] = useState<DailySalesSummary[]>();

  useEffect(() => {
    setTimeout(() => {
      setSummary(DAILY_SALES_SUMMARY);
    }, 200);
  }, []);

  return (
    <div className="p-4">
      <Calendar
        className="h-140 w-220"
        renderDay={({ date, isSunday, isSaturday, inMonth }) => {
          const s = summary?.find((s) => isSameDay(new Date(s.date), date));

          return (
            <div className={cn('flex h-full flex-col gap-1', !inMonth && 'opacity-50')}>
              <div className={cn('flex justify-between px-1 py-0.5', s && 'bg-accent')}>
                <span
                  className={cn(
                    'font-medium',
                    isSunday && 'text-red-600',
                    isSaturday && 'text-blue-600',
                  )}
                >
                  {date.getDate()}
                </span>
                {s && (
                  <Badge className="bg-white" variant={'outline'}>
                    {s.changeRate && s.changeRate > 0 && (
                      <>
                        <TrendingUp />+{s.changeRate}%
                      </>
                    )}
                    {s.changeRate && s.changeRate < 0 && (
                      <>
                        <TrendingDown />
                        {s.changeRate}%
                      </>
                    )}
                  </Badge>
                )}
              </div>
              {s && (
                <ul className="text-ss px-1">
                  <li className="flex justify-between">
                    <span>건수</span>
                    <span>{s.orderCount.toLocaleString()}</span>
                  </li>
                  <li className="flex justify-between">
                    <span>매출</span>
                    <span>{s.totalAmount.toLocaleString()}</span>
                  </li>
                </ul>
              )}
            </div>
          );
        }}
      />
    </div>
  );
};
