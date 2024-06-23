import {configureStore} from '@reduxjs/toolkit'
import responseReducer from './apiResponseSlice'
 const store = configureStore({
    reducer: {
        response: responseReducer
    }
})

export default store