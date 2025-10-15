export const startOfDay = (d: Date) => new Date(d.getFullYear(), d.getMonth(), d.getDate());

export const daysInMonth = (year: number, month: number) => new Date(year, month + 1, 0).getDate();

export const addMonths = (date: Date, offset: number) =>
  new Date(date.getFullYear(), date.getMonth() + offset, 1);

export const formatYearMonth = (date: Date, locale = 'ko-KR') =>
  new Intl.DateTimeFormat(locale, { year: 'numeric', month: 'long' }).format(date);

export const isSameDay = (a: Date, b: Date) =>
  a.getFullYear() === b.getFullYear() &&
  a.getMonth() === b.getMonth() &&
  a.getDate() === b.getDate();
