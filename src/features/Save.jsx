import { createSlice } from "@reduxjs/toolkit";


const saveSlice = createSlice({

    name:"gif",
    initialState:{ value:{
                            id: '',
                            embed_url: '',
                            url: '',
                            title:'',
                            images:[] }},
    reducers:{
        gif:(state,action)=>{
            state.value=action.payload
        }

    }
    }); 


  export const {gif}=   saveSlice.actions
  export default saveSlice.reducer  