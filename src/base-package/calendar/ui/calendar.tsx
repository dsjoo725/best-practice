import { useMemo, type ReactNode } from 'react';

import { useControllableState } from '@/base';

import { getCalendarWeeks } from '../lib/get-calendar-weeks';
import { addMonths } from '../lib/date-utils';
import type { CalendarDay } from '../model/calendar-model';

import { CalendarHeader } from './calendar-header';
import { CalendarBody } from './calendar-body';

type CalendarProps = {
  month?: Date;
  defaultMonth?: Date;
  onMonthChange?: (updater: Date | ((prev: Date) => Date)) => void;

  renderDay?: (day: CalendarDay) => ReactNode;
};

export const Calendar = ({
  month: monthProps,
  defaultMonth,
  onMonthChange,
  renderDay,
}: CalendarProps) => {
  const [month, setMonth] = useControllableState({
    prop: monthProps,
    defaultProp: defaultMonth ?? new Date(),
    onChange: onMonthChange,
  });

  const weeks = useMemo(() => getCalendarWeeks(month), [month]);

  return (
    <section className="flex flex-col gap-2" aria-label="calendar">
      <CalendarHeader
        month={month}
        onNext={() => setMonth((prev) => addMonths(prev, 1))}
        onPrev={() => setMonth((prev) => addMonths(prev, -1))}
      />
      <CalendarBody weeks={weeks} renderDay={renderDay} />
    </section>
  );
};
