import { Calendar } from '@/base-package/calendar';

export const CalendarPage = () => {
  return (
    <div className="p-4">
      <Calendar year={2025} month={10} onNext={() => {}} onPrev={() => {}} />
    </div>
  );
};
