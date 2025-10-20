import type { ReactNode } from 'react';
import { cn } from '@/base/lib/utils';
import type { CalendarDay, CalendarWeeks } from '../model/calendar-model';

type Props = {
  weeks: CalendarWeeks;
  renderDay?: (day: CalendarDay) => ReactNode;
};
export const CalendarBody = ({ weeks, renderDay }: Props) => {
  return (
    <main className="flex-1 overflow-hidden">
      <div
        role="grid"
        aria-labelledby="calendar-heading"
        className="flex h-full flex-col overflow-auto rounded-sm border"
      >
        <div
          role="row"
          className={cn('grid grid-cols-7 border-b', 'bg-background sticky top-0 z-10')}
        >
          {['일', '월', '화', '수', '목', '금', '토'].map((d, i) => (
            <div
              key={d}
              role="columnheader"
              className={cn(
                'border-r px-2 py-1 text-center text-sm last:border-r-0',
                i === 0 && 'text-red-600',
                i === 6 && 'text-blue-600',
              )}
            >
              {d}
            </div>
          ))}
        </div>

        {weeks.map((week, rowIndex) => (
          <div
            key={rowIndex}
            role="row"
            className="grid flex-1 grid-cols-7 border-b text-sm last:border-b-0"
          >
            {week.map((day, cellIndex) => {
              const { date, isToday, inMonth, isSaturday, isSunday } = day;

              return (
                <div
                  key={cellIndex}
                  role="gridcell"
                  aria-current={isToday ? 'date' : undefined}
                  className={cn('border-r last:border-r-0')}
                >
                  {renderDay ? (
                    renderDay(day)
                  ) : (
                    <div
                      className={cn(
                        'px-2 py-1',
                        isSunday && 'text-red-600',
                        isSaturday && 'text-blue-600',
                        !inMonth && 'opacity-40',
                      )}
                    >
                      {date.getDate()}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </main>
  );
};
