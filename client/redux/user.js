import axios from "axios"
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

export const fetchUser = createAsyncThunk(
  "user/fetchUser",
  async () => {
    try {
      const { data } = await axios.get(`http://localhost:8080/api/users`)
      console.log('Data From Thunk', data);
      return data
    } catch (error) {
      console.error(error)
    }
  }
)

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: [],
    status: null,
    error: null,
  },
  reducers: {},
  extraReducers: {
    [fetchUser.pending]: (state, action) => {
      state.status = "loading"
    },
    [fetchUser.fulfilled]: (state, { payload }) => {
      state.user = payload
      state.status = "success"
    },
    [fetchUser.rejected]: (state, action) => {
      state.status = "failed",
      state.error = action.payload
    },
  },
})

export default userSlice.reducer;

