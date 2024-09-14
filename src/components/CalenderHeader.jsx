import React,{useContext} from "react"
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import GlobalContext from "../context/GlobalContext";
import dayjs from "dayjs"

export function CalenderHeader (){
    const{monthIndex,setMonthIndex}= useContext(GlobalContext) 
    function handlePrevMonth (){
        setMonthIndex(monthIndex - 1);
    }

    function handleNextMonth (){
        setMonthIndex(monthIndex + 1);
    }
    function handleReset(){
        setMonthIndex(dayjs().month())
    }
    
    return<>
    <header className="px-4 py-2 flex items-center">
        <img src="../src/assets/logo.png" alt="MainLogo" className="w-12 h-12 mr-2" />
        <h1 className="mr-10 text-xl text-gray-500 font-bold">Calender</h1>
        <button onClick={handleReset} className="border rounded py-2 px-4 mr-5">Today</button>
        <button onClick={ handlePrevMonth }>
            <span className="material-icons cursor-pointer text-grey-600 mx-8">
            <FaChevronLeft/>
            </span>
        </button>
        <button onClick={ handleNextMonth}
        ><span className="material-icons cursor-pointer text-grey-600 mx-8"><FaChevronRight/>
            </span></button>

            <h2 className="ml-4 text-xl text-gray-500 font-bold">
                {dayjs(new Date(dayjs().year(),monthIndex)).format("MMMM YYYY")}
                </h2>

    </header>
    </>
}