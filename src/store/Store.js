import { configureStore } from "@reduxjs/toolkit";
import todoReducer from '../feature/TodoSlice'


export const store=configureStore({
    reducer: {
        todos: todoReducer, // Key must match what you use in useSelector
      },

      
}

)
console.log("State after dispatch:", store.getState().todos);

