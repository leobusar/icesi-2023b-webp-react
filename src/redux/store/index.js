import { configureStore } from '@reduxjs/toolkit'
import { PersonSlice } from '../reducers'

export const store = configureStore({
  reducer: {
    person: PersonSlice,
  }
})