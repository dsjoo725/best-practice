import { useMemo, useState, type ReactNode } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';

import { Button, cn } from '@/base';

import { addMonths, formatYearMonth, startOfDay } from '../lib/day-utils';
import { getMonthMatrix } from '../lib/get-month-matrix';

type Props = {
  renderCellContent?: (date: Date) => ReactNode;
};
export const Calendar = ({ renderCellContent }: Props) => {
  const [selectedDate, setSelectedDate] = useState(() => startOfDay(new Date()));

  const year = selectedDate.getFullYear();
  const month = selectedDate.getMonth();

  const weeks = useMemo(() => getMonthMatrix(year, month), [year, month]);

  const go = (delta: number) => setSelectedDate((v) => addMonths(v, delta));

  return (
    <section className="flex flex-col gap-2" aria-label="calendar">
      <header className="flex items-center justify-center gap-1">
        <Button variant="outline" size="icon" aria-label="prev-month" onClick={() => go(-1)}>
          <ChevronLeftIcon />
        </Button>

        <h2 id="calendar-heading" className="min-w-40 text-center font-semibold">
          {formatYearMonth(new Date(year, month, 1))}
        </h2>

        <Button variant="outline" size="icon" aria-label="next-month" onClick={() => go(1)}>
          <ChevronRightIcon />
        </Button>
      </header>

      <main>
        <div
          role="grid"
          aria-labelledby="calendar-heading"
          className="border text-sm font-medium select-none"
        >
          <div role="row" className="grid grid-cols-7 border-b">
            {['일', '월', '화', '수', '목', '금', '토'].map((d, i) => (
              <div
                key={d}
                role="columnheader"
                className={cn(
                  'h-6 border-r text-center font-medium last:border-r-0',
                  i === 0 && 'text-red-500',
                  i === 6 && 'text-blue-500',
                )}
              >
                {d}
              </div>
            ))}
          </div>

          {weeks.map((week, wi) => (
            <div key={wi} role="row" className="grid grid-cols-7 border-b last:border-b-0">
              {week.map(({ date, inMonth, isToday }, di) => {
                const content = renderCellContent?.(date);
                const isContent = Boolean(content);

                return (
                  <div
                    key={di}
                    role="gridcell"
                    aria-current={isToday ? 'date' : undefined}
                    className={cn(
                      'border-r text-sm last:border-r-0',
                      inMonth ? 'text-foreground' : 'text-muted-foreground',
                    )}
                  >
                    <div
                      className={cn(
                        'flex h-6 items-center px-2',
                        isContent && 'bg-secondary',
                        isToday && isContent && 'bg-primary/20',
                        di === 0 && 'text-red-500',
                        di === 6 && 'text-blue-500',
                      )}
                    >
                      {date.getDate()}
                    </div>
                    <div className="min-h-30">{content}</div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </main>
    </section>
  );
};
