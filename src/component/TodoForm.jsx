import { useState } from "react"
import { useDispatch } from "react-redux"
import { addTodo } from "../feature/TodoSlice"


export default function TodoForm(){
    let [inp,setInp]=useState("")
    const dispatch=useDispatch()


function handleSubmit(e){
    e.preventDefault()
    dispatch(addTodo(inp))
    setInp('')


}


    return(<>
   <form onSubmit={handleSubmit} className='flex'>



 <div className="  mt-5  sm:flex sm:justify-center sm:items-center sm:flex-row flex flex-col justify-center items-center
 
 w-full
 sm:space-y-0 
 space-y-3
 
  ">



<input type="text" value={inp} placeholder="Write your Notes..." onChange={(e)=> setInp(e.target.value)} className=" border  w-full border-black/10 sm:rounded-l-lg sm:rounded-none  rounded-md  px-3 outline-none duration-150 bg-white/20 py-1.5 font-serif   "/>

<button 
  type="submit" className="sm:rounded-r-lg sm:px-3 font-bold px-10 py-[7px]  sm:py-[7px] sm:rounded-none rounded-lg bg-green-600   text-white shrink-0">
  Add
</button>


</div>




</form>



    
    
    
    
    </>
    )
}