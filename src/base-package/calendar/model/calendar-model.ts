export type DayCell = {
  date: Date;
  inMonth: boolean;
  isToday: boolean;
  isSunday: boolean;
  isSaturday: boolean;
};

type WeekRow = DayCell[];

export type CalendarGrid = WeekRow[];
