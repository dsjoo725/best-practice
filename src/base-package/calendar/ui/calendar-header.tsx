import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';

import { Button } from '@/base/ui/button';

import { formatYearMonth } from '../lib/date-utils';

type Props = {
  month: Date;
  onPrev: () => void;
  onNext: () => void;
};
export const CalendarHeader = ({ month, onPrev, onNext }: Props) => {
  return (
    <header className="flex items-center justify-center gap-1">
      <Button variant="outline" size="icon" aria-label="prev-month" onClick={onPrev}>
        <ChevronLeftIcon />
      </Button>

      <h2 id="calendar-heading" className="min-w-30 text-center font-medium">
        {formatYearMonth(month)}
      </h2>

      <Button variant="outline" size="icon" aria-label="next-month" onClick={onNext}>
        <ChevronRightIcon />
      </Button>
    </header>
  );
};
