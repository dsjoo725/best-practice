import type { DayCell, MonthMatrix } from '../model/calendar-model';
import { daysInMonth, startOfDay } from './day-utils';

export const getMonthMatrix = (year: number, month: number): MonthMatrix => {
  const weekStartsOn = 0; // 일요일
  const firstDay = new Date(year, month, 1).getDay();
  const leading = (firstDay - weekStartsOn + 7) % 7;
  const inMonthDays = daysInMonth(year, month);
  const total = Math.ceil((leading + inMonthDays) / 7) * 7;

  const today = startOfDay(new Date());

  const cells: DayCell[] = Array.from({ length: total }, (_, i) => {
    const offset = i - leading;
    const d = new Date(year, month, offset + 1);

    const inMonth = offset >= 0 && offset < inMonthDays;
    const isToday = startOfDay(d).getTime() === today.getTime();

    return { date: d, inMonth, isToday };
  });

  return cells.reduce<MonthMatrix>(
    (acc, _, i) => (i % 7 ? acc : [...acc, cells.slice(i, i + 7)]),
    [],
  );
};
