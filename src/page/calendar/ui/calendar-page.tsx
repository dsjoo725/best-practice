import { Calendar, isSameDay } from '@/base-package/calendar';

export const CalendarPage = () => {
  const data = [
    {
      date: '2025-09-18',
      sales: {
        card: 379015,
        cash: 181800,
        discount: 1285,
        cancel: 0,
        total: 593400,
      },
    },
    {
      date: '2025-09-19',
      sales: {
        card: 76000,
        cash: 71500,
        discount: 0,
        cancel: 0,
        total: 147500,
      },
    },
    {
      date: '2025-09-20',
      sales: {
        card: 253000,
        cash: 121000,
        discount: 3500,
        cancel: 0,
        total: 370500,
      },
    },
    {
      date: '2025-09-21',
      sales: {
        card: 481200,
        cash: 294800,
        discount: 1800,
        cancel: 0,
        total: 774200,
      },
    },
    {
      date: '2025-10-15',
      sales: {
        card: 402000,
        cash: 150000,
        discount: 1000,
        cancel: 0,
        total: 551000,
      },
    },
  ];

  return (
    <div className="p-4">
      <Calendar
        renderCellContent={(date) => {
          const record = data.find((d) => {
            const target = new Date(d.date);
            return isSameDay(date, target);
          });

          if (!record) return null;

          const { card, cash, discount, cancel, total } = record.sales;
          return (
            <div className="flex flex-col px-2 py-1 text-sm">
              <div className="flex justify-between font-medium">
                <span>카드</span> <span>{card.toLocaleString()}</span>
              </div>
              <div className="flex justify-between font-medium">
                <span>현금</span> <span>{cash.toLocaleString()}</span>
              </div>
              <div className="flex justify-between font-medium">
                <span>할인</span> <span>{discount.toLocaleString()}</span>
              </div>
              <div className="flex justify-between font-medium">
                <span>취소</span> <span>{cancel.toLocaleString()}</span>
              </div>
              <div className="my-1 h-[1px] border-t"></div>
              <div className="flex items-center justify-between font-medium">
                <span>매출</span>
                <span className="text-base font-semibold">{total.toLocaleString()}</span>
              </div>
            </div>
          );
        }}
      />
    </div>
  );
};
