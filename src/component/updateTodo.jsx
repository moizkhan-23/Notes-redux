   

import { useState } from "react"

import {useDispatch } from "react-redux"

import { removeTodo, updateTodo } from "../feature/TodoSlice"




   export default function UpdateTodo({todo}){
    const dispatch=useDispatch()
 const [updateInp,setUpdateInp]=useState(todo.text)
    const [redOnlyInp,setRedOnlyInp]=useState(false)
    
function editInp(){
    dispatch(updateTodo({ id: todo.id, updateInp }))
    setRedOnlyInp(false)



}


    

    return(
    
<>

  <div className="flex border border-black/10 w-full  rounded-lg bg-[#EBEAFF] px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black">
    
    {/* Input Field */}
    <input 
      type="text" 
      value={updateInp} 
      readOnly={!redOnlyInp} 
      onChange={(e) => setUpdateInp(e.target.value)}
      className={` w-full px-2  border outline-none bg-transparent font-serif  rounded-lg ${
        redOnlyInp ? "border-black/10 px-2" : "border-transparent"
    } `}/>
    {/* ${todo.completed ? "line-through" : ""} */}
    {/* Edit Button */}
    <button
       className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
              
      onClick={() => {
        if (redOnlyInp) {
          editInp();
        } else {
          setRedOnlyInp((pre) => !pre);
        }
      }}
    >
     {redOnlyInp ? "📁" : "✏️"}
    </button>
    
    {/* Remove Button */}
    <button
      className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
             
      onClick={() => dispatch(removeTodo(todo.id))}
    >
       ❌
    </button>
  </div>



  </>
        
  
  ) }










//    <div className="border border-blue-500 w-full sm:flex sm:justify-center sm:items-center ">
//    <div className="space-x-6 mt-10">

//    {/* className="text-black bg-pink-200 py-2 px-3 w-[500px] outline-none"  */}
   
//    <input type="text" value={updateInp} readOnly={!redOnlyInp}   onChange={(e)=> setUpdateInp(e.target.value)}
//    />
//    <button
//      className="py-2 px-4 bg-red-500 text-white font-bold rounded-sm transition-colors"
//    onClick={()=>{
// if(redOnlyInp){
// editInp()
// }else{
// setRedOnlyInp((pre)=> !pre)
// }

//    }}
//    >
//      Edit
//    </button>
//    <button
//      className="py-2 px-4 bg-red-500 text-white font-bold rounded-sm hover:bg-red-600 transition-colors"
//      onClick={() => dispatch(removeTodo(todo.id))}
//    >
//      Remove
//    </button>
//    </div>
//    </div>
