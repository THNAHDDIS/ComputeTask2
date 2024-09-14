import { MdOutlineDragHandle } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import GlobalContext from "../context/GlobalContext";
import { useContext, useState } from "react";

function EventForm (){
    const {setShowEventForm} = useContext(GlobalContext);
   const [title,setTitle] = useState("")

    return <>
    <div className="h-screen w-full left-0 top-0 flex justify-center items-center fixed  ">
    <form className="bg-white rounded-lg shadow-2xl w-1/4"  action="">
    <header className="bg-grey-100 px-4 py-2 flex jusitfy-between ">
        <span><MdOutlineDragHandle /></span>
        <button onClick={()=> setShowEventForm(false)}>
        <IoMdClose />
        </button>
    </header>
    <div className="grid grid-cols-1/5 items-end gap-y-7">
            <div></div>
            <input
              type="text"
              name="title"
              placeholder="Add title"
              value={title}
              required
              className="pt-3 border-0 text-gray-600 text-xl font-semibold pb-2 w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500"
              onChange={(e) => setTitle(e.target.value)}
            />
    </div>
    </form>
    </div>
    </>
}

export default EventForm;
