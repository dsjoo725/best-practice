import type { CalendarDay } from '@/base-package/calendar';

import { cn } from '@/base/lib/utils';
import { Skeleton } from '@/base/ui/skeleton';

export const DailySalesSummaryCellSkeleton = ({
  date,
  inMonth,
  isSaturday,
  isSunday,
  isToday,
}: CalendarDay) => {
  return (
    <div className={cn('flex h-full flex-col', !inMonth && 'opacity-50')}>
      <div
        className={cn(
          'bg-accent flex justify-between px-1 py-0.5',
          isToday && 'bg-primary-foreground',
        )}
      >
        <span
          className={cn('font-medium', isSunday && 'text-red-600', isSaturday && 'text-blue-600')}
        >
          {date.getDate()}
        </span>
      </div>

      <ul className="space-y-1 p-1">
        <Skeleton className="h-4 w-full rounded-sm" />
        <Skeleton className="h-4 w-full rounded-sm" />
      </ul>
    </div>
  );
};
