// 이번 달의 마지막 날짜(일 수) 구하기: 다음 달의 0일 = 이번 달의 마지막 날
export const daysInMonth = (year: number, month: number) => {
  const monthIndex = month - 1;
  return new Date(year, monthIndex, 0).getDate();
};

export const addMonths = (date: Date, offset: number) =>
  new Date(date.getFullYear(), date.getMonth() + offset);

export const isSameDay = (a: Date, b: Date) =>
  a.getFullYear() === b.getFullYear() &&
  a.getMonth() === b.getMonth() &&
  a.getDate() === b.getDate();
