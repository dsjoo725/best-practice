export type CalendarDay = {
  date: Date;
  inMonth: boolean;
  isToday: boolean;
  isSunday: boolean;
  isSaturday: boolean;
};

export type CalendarWeek = CalendarDay[];

export type CalendarWeeks = CalendarWeek[];
