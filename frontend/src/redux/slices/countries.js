import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  data: null,
}

export default createSlice({
  name: 'countries',
  initialState,
  reducers: {
    setData: (state, action) => {
      state.data = action.payload
    },
  },
})
