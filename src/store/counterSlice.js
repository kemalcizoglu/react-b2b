import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({

  name: 'counter',
  initialState: {
    value: 'User..'
  },

  reducers: {
    getUserDisplayName: (state, action) => {
      state.value = action.payload
    }
  }
})

export const { getUserDisplayName } = counterSlice.actions

export default counterSlice.reducer