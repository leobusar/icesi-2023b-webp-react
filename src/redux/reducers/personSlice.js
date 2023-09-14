import { createSlice } from '@reduxjs/toolkit'

const personSlice = createSlice({
  name: 'person',
  initialState: {
    personEdit: {id: "", name: "", username:"", email:""}
  },

  reducers: {
    setPersonEdit(state, action){
        state.personEdit = {...action.payload}
    },
  }
})

export const { setPersonEdit } = personSlice.actions
export default personSlice.reducer