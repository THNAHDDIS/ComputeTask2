import React from 'react';
import dayjs from 'dayjs';

export function Day({ day, rowIndex, holidays }) {
  function getCurrentDayClass() {
    return day.format('DD-MM-YY') === dayjs().format('DD-MM-YY') ? 
      'bg-blue-600 text-white rounded-full w-7' : ' ';
  }

  console.log('Holidays for', day.format('YYYY-MM-DD'), holidays); // Debugging line

  return (
    <div className="border border-grey-200 flex flex-col">
      <header className="flex flex-col items-center">
        {rowIndex === 0 && (
          <p className="text-sm mt-1">
            {day.format('ddd').toUpperCase()}
          </p>
        )}
        <p className={`text-sm p-1 my-1 text-center ${getCurrentDayClass()}`}>
          {day.format('DD')}
        </p>
        {Array.isArray(holidays) && holidays.length > 0 && (
          <div className="holidays">
            {holidays.map((holiday, index) => (
              <p key={index} className="text-xs text-red-500">{holiday.name}</p>
            ))}
          </div>
        )}
      </header>
    </div>
  );
}

export default Day;
