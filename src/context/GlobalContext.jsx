import React, { createContext } from 'react';

const GlobalContext = createContext({
  monthIndex: 0,
  setMonthIndex: (index) => {},
  showEventForm: false,
  setShowEventForm: ()=>{


  }
});

export default GlobalContext;
