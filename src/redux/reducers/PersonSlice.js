import { createSlice } from '@reduxjs/toolkit'

const PersonSlice = createSlice({
  name: 'person',
  initialState: {personEdit: {}},

  reducers: {
    setPersonEdit(state, action){
        state.personEdit = {...action.payload}
    },
  }
})

export const { setPersonEdit } = PersonSlice.actions
export default PersonSlice.reducer