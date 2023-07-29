import { createSlice } from '@reduxjs/toolkit'

const initialStateValues = {
  name : '',
  email : '',
  phone_number :'',
  age : '',
  location : '',
  photo : ''
}



const counterSlice = createSlice({
  name: 'counter',
  initialState: initialStateValues,
  reducers: {
        getDetails: (state,action) => {
            state.name=action.payload.name;
            state.phone_number=action.payload.phone_number;
            state.email=action.payload.email;
            state.age=action.payload.age;
            state.location=action.payload.location;
            state.photo=action.payload.photo;
        },
 
  },
})

// Action creators are generated for each case reducer function
export const { getDetails } = counterSlice.actions

export default counterSlice.reducer