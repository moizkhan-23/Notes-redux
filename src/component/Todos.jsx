import { useState,useEffect } from "react"
import { removeTodo ,setInitialTodos} from "../feature/TodoSlice"
import { useDispatch,useSelector } from "react-redux"
import UpdateTodo from "./updateTodo"
import TodoForm from "./TodoForm"

export default function Todos(){
  const todos= useSelector(state=>state.todos.todos)
  const dispatch=useDispatch()
  
console.log(todos);

useEffect(() => {
  const storedTodos = JSON.parse(localStorage.getItem("todos")) || [];
  if (storedTodos.length > 0) {
    dispatch(setInitialTodos(storedTodos)); // Dispatch action to initialize todos in Redux
  }
}, [dispatch]);

// Save todos to local storage whenever the todos state changes
useEffect(() => {
  localStorage.setItem("todos", JSON.stringify(todos));
}, [todos]);





    return(

        <>
     
     <div className="bg-[#172842] min-h-screen py-8 ">
                 <h1 className="text-[50px] px-20 mt-32   font-serif text-[#EBEAFF] text-center mb-5  bg-[#172842] z-10 ">
                
      Your Notes
     </h1> 
    {/* <h1 className="text-[50px] font-serif text-[#EBEAFF] text-center  mb-5 mt-32 ">Your Notes </h1> */}
     <div className=" max-w-2xl 
      mx-auto  shadow-md rounded-lg px-4 py-3  text-white    ">   
                    <div className=" mb-4  ">
                      <TodoForm></TodoForm>
                    </div>
                    <div className=" flex flex-col gap-y-3 ">
                        {/*Loop and Add TodoItem here */}
                        {todos.map((todo) => (
  <div key={todo.id} className="flex items-center justify-between">
    <UpdateTodo todo={todo} />
  </div>
))}
                    </div>
                </div>
            </div>




        </>
    )
  }
  

