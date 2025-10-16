import type { CalendarDay, CalendarWeeks } from '../model/calendar-model';
import { daysInMonth, isSameDay } from './date-utils';

export const getCalendarWeeks = (month: Date): CalendarWeeks => {
  const weekStartsOn = 0; // 일요일

  const firstDay = new Date(month.getFullYear(), month.getMonth(), 1).getDay();
  const leading = (firstDay - weekStartsOn + 7) % 7;
  const inMonthDays = daysInMonth(month);
  // const total = Math.ceil((leading + inMonthDays) / 7) * 7;
  const total = 42;

  const today = new Date();

  const days: CalendarDay[] = Array.from({ length: total }, (_, i) => {
    const offset = i - leading;
    const d = new Date(month.getFullYear(), month.getMonth(), offset + 1);

    const inMonth = offset >= 0 && offset < inMonthDays;
    const isToday = isSameDay(today, d);
    const isSunday = d.getDay() === 0;
    const isSaturday = d.getDay() === 6;

    return { date: d, inMonth, isToday, isSunday, isSaturday };
  });

  return days.reduce<CalendarWeeks>(
    (acc, _, i) => (i % 7 ? acc : [...acc, days.slice(i, i + 7)]),
    [],
  );
};
