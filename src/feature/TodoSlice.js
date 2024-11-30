import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";

const initialState={
    todos:[]
}


 export const todoSlice=createSlice({

name:'Todo',
initialState,
reducers:{
addTodo:(state,action)=>{
const todo={
    
    id:nanoid(),
    text:action.payload
}
state.todos.push(todo)

},
setInitialTodos: (state, action) => {
  state.todos = action.payload;
},

removeTodo:(state,action)=>{
    state.todos=state.todos.filter((todo)=> todo.id !== action.payload)
},

updateTodo: (state, action) => {
    const { id, updateInp } = action.payload;
    state.todos = state.todos.map((item) =>
      item.id === id ? { ...item, text: updateInp } : item
    );
  },
  



}


})
export const {addTodo,removeTodo,updateTodo,setInitialTodos}=todoSlice.actions
 export default todoSlice.reducer