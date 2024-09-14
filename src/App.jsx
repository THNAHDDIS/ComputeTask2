
import './App.css'
import React, { useState,useContext,useEffect} from "react"
import { CalenderHeader } from './components/CalenderHeader'
import { Months } from './components/Months'
import EventForm from './components/EventForm'
import { getMonth } from './util'
import GlobalContext from './context/GlobalContext'

function App() {
const [currentMonth,setCurrentMonth] = useState(getMonth())
const{monthIndex,showEventForm}= useContext(GlobalContext)

useEffect(()=>{
  setCurrentMonth(getMonth(monthIndex))
},[monthIndex])


  return (
    <>
    <React.Fragment>
   
     {/* <EventForm/> */}
      <div className='h-screen flex flex-col '>
        <CalenderHeader/>
        <div className="flex flex-1">
        
          <Months month={currentMonth}/>
        </div>
      </div>

    </React.Fragment>
      
    </>
  )
}

export default App
