import { configureStore } from '@reduxjs/toolkit'
import { PersonSlice } from '../reducers'

const store = configureStore({
  reducer: {
    person: PersonSlice,
  }
})

export default store