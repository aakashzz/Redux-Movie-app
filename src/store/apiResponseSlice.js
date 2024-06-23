import {createSlice} from '@reduxjs/toolkit'

const responseSlice = createSlice({
    name:'response',
    initialState:{
        data:[null]
    },
    reducers:{
        dataCatch: (state, action)=>{
            state.data = [action.payload.data];
        },
        dataRemove: (state) =>{
            state.data = [null]
        }
    }
})

export const {dataRemove, dataCatch} = responseSlice.actions;
export default responseSlice.reducer;