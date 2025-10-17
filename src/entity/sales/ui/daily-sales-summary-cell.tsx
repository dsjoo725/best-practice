import { TrendingDown, TrendingUp } from 'lucide-react';

import type { CalendarDay } from '@/base-package/calendar';
import { cn } from '@/base/lib/utils';
import { Badge } from '@/base/ui/badge';

import type { DailySalesSummary } from '../model/sales-model';

type Props = {
  summary?: DailySalesSummary;
} & CalendarDay;

export const DailySalesSummaryCell = ({
  date,
  inMonth,
  isSaturday,
  isSunday,
  isToday,
  summary,
}: Props) => {
  const hasSummary = !!summary;
  return (
    <div className={cn('flex h-full flex-col', !inMonth && 'opacity-50')}>
      <div
        className={cn(
          'flex justify-between px-1 py-0.5',
          hasSummary && 'bg-accent',
          hasSummary && isToday && 'bg-primary-foreground',
        )}
      >
        <span
          className={cn('font-medium', isSunday && 'text-red-600', isSaturday && 'text-blue-600')}
        >
          {date.getDate()}
        </span>
        {hasSummary && <ChangeRateBadge rate={summary.changeRate} />}
      </div>

      {hasSummary && (
        <ul className="text-ss p-1">
          <li className="flex justify-between">
            <span>건수</span>
            <span>{summary.orderCount.toLocaleString()}</span>
          </li>
          <li className="flex justify-between">
            <span>매출</span>
            <span>{summary.totalAmount.toLocaleString()}</span>
          </li>
        </ul>
      )}
    </div>
  );
};

const ChangeRateBadge = ({ rate }: { rate?: number }) => {
  if (rate == null) return null;

  if (rate > 0) {
    return (
      <Badge className="bg-background" variant="outline">
        <TrendingUp />+{rate}%
      </Badge>
    );
  }

  if (rate < 0) {
    return (
      <Badge className="bg-background" variant="outline">
        <TrendingDown />
        {rate}%
      </Badge>
    );
  }

  return null;
};
