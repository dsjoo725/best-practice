export type DayCell = {
  date: Date;
  inMonth: boolean;
  isToday: boolean;
};

type Week = DayCell[];

export type MonthMatrix = Week[];
