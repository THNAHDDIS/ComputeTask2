import { useState } from 'react';
import GlobalContext from './GlobalContext';
import dayjs from 'dayjs';


const ContextWrapper = (props) => {
  const [monthIndex, setMonthIndex] = useState(dayjs().month());
  const [showEventForm,setShowEventForm]= useState(false)

  return (
    <GlobalContext.Provider value={{ monthIndex, setMonthIndex, showEventForm, setShowEventForm }}>
      {props.children}
    </GlobalContext.Provider>
  );
};

export default ContextWrapper;
