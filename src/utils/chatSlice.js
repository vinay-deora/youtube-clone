import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
    name:"chat",
    initialState: {
        messages : [],
    },
    reducers:{
        addMessage:(state,action)=>{
      // Check if the messages array has more than 5 messages
    //   if (state.messages.length > 6) {
        // Remove the oldest message(s) to keep only the latest 5
        // state.messages.splice(0, state.messages.length - 6);
    //   }        
            state.messages.push(action.payload)
        }
    }
})
export const {addMessage}= chatSlice.actions
export default chatSlice.reducer