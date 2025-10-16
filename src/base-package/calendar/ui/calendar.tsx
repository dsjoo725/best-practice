import { useMemo } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';

import { Button, cn } from '@/base';

import { getCalendarGrid } from '../lib/get-calendar-grid';

type CalendarProps = { year: number; month: number; onPrev: () => void; onNext: () => void };

export const Calendar = ({ year, month, onPrev, onNext }: CalendarProps) => {
  const weeks = useMemo(() => getCalendarGrid(year, month), [year, month]);

  return (
    <section className="flex flex-col gap-2" aria-label="calendar">
      <header className="flex items-center justify-center gap-1">
        <Button variant="outline" size="icon" aria-label="prev-month" onClick={onPrev}>
          <ChevronLeftIcon />
        </Button>

        <h2 id="calendar-heading" className="min-w-40 text-center font-semibold">
          {`${year}년 ${month}월`}
        </h2>

        <Button variant="outline" size="icon" aria-label="next-month" onClick={onNext}>
          <ChevronRightIcon />
        </Button>
      </header>

      <main>
        <div role="grid" aria-labelledby="calendar-heading" className="border select-none">
          <div role="row" className="grid grid-cols-7 border-b text-sm font-medium">
            {['일', '월', '화', '수', '목', '금', '토'].map((d, i) => (
              <div
                key={d}
                role="columnheader"
                className={cn(
                  'border-r px-2 py-0.5 text-center font-medium last:border-r-0',
                  i === 0 && 'text-red-500',
                  i === 6 && 'text-blue-500',
                )}
              >
                {d}
              </div>
            ))}
          </div>

          {weeks.map((week, wi) => (
            <div key={wi} role="row" className="grid grid-cols-7 border-b text-sm last:border-b-0">
              {week.map(({ date, inMonth, isToday }, di) => {
                return (
                  <div
                    key={di}
                    role="gridcell"
                    aria-current={isToday ? 'date' : undefined}
                    className={cn('border-r px-2 py-0.5 last:border-r-0')}
                  >
                    <div
                      className={cn(
                        di === 0 && 'text-red-500',
                        di === 6 && 'text-blue-500',
                        !inMonth && 'opacity-40',
                      )}
                    >
                      {date.getDate()}
                    </div>
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
