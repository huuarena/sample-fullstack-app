import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  data: null,
}

export default createSlice({
  name: 'country',
  initialState,
  reducers: {
    setData: (state, action) => {
      state.data = action.payload
    },
  },
})
