import type { CalendarGrid, DayCell } from '../model/calendar-model';
import { daysInMonth, isSameDay } from './date-utils';

export const getCalendarGrid = (year: number, month: number): CalendarGrid => {
  const weekStartsOn = 0; // 일요일
  const monthIndex = month - 1;

  const firstDay = new Date(year, monthIndex).getDay();
  const leading = (firstDay - weekStartsOn + 7) % 7;
  const inMonthDays = daysInMonth(year, month);
  const total = Math.ceil((leading + inMonthDays) / 7) * 7;

  const today = new Date();

  const cells: DayCell[] = Array.from({ length: total }, (_, i) => {
    const offset = i - leading;
    const d = new Date(year, monthIndex, offset + 1);

    const inMonth = offset >= 0 && offset < inMonthDays;
    const isToday = isSameDay(today, d);
    const isSunday = d.getDay() === 0;
    const isSaturday = d.getDay() === 6;

    return { date: d, inMonth, isToday, isSunday, isSaturday };
  });

  return cells.reduce<CalendarGrid>(
    (acc, _, i) => (i % 7 ? acc : [...acc, cells.slice(i, i + 7)]),
    [],
  );
};
