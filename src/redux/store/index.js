import { configureStore } from '@reduxjs/toolkit'
import personReducer from '../reducers/personSlice'

const store = configureStore({
  reducer: {
    person: personReducer,
  }
})

export default store