import React, { useState, useEffect } from 'react';
import axios from 'axios';
import dayjs from 'dayjs';
import { Day } from './Day';

export function Months({ month }) {
  const [holidays, setHolidays] = useState({});

  useEffect(() => {
    axios.get('https://mocki.io/v1/7b47d683-984a-4fe8-9d40-4fc57a71145a')
      .then(res => {
        const monthEvents = {};
        const holidays = res.data.response.holidays;
        holidays.forEach(holiday => {
          const date = dayjs(holiday.date.iso).format('YYYY-MM-DD');
          
          if (!monthEvents[date]) {
            monthEvents[date] = [];
          }
          monthEvents[date].push({ name: holiday.name, isHoliday: true });
        });
        setHolidays(monthEvents);
        console.log('Fetched Holidays:', monthEvents); // Debugging line
      })
      .catch(error => {
        console.error('Error fetching holiday data:', error);
      });
  }, []);

  return (
    <div className="flex-1 grid grid-cols-7 grid-rows-5">
      {month.map((row, i) => (
        <React.Fragment key={i}>
          {row.map((day, index) => (
            <Day 
              day={day} 
              key={index} 
              rowIndex={i} 
              holidays={holidays[day.format('YYYY-MM-DD')]} 
            />
          ))}
        </React.Fragment>
      ))}
    </div>
  );
}
