import axios from "axios"
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

export const fetchAllProfiles = createAsyncThunk("user/fetchUser", async () => {
  try {
    const { data } = await axios.get(`http://localhost:8080/api/profiles`)
    console.log("Data From Thunk", data)
    return data
  } catch (error) {
    console.error(error)
  }
})


// export const fetchAllProfiles = createAsyncThunk("user/fetchUser", async (id) => {
//   try {
//     const { data } = await axios.get(`http://localhost:8080/api/profiles/${id}`)
//     console.log("Data From Thunk", data)
//     return data
//   } catch (error) {
//     console.error(error)
//   }
// })

export const homeSlice = createSlice({
  name: "user",
  initialState: {
    profiles: [],
    status: null,
    error: null,
  },
  reducers: {},
  extraReducers: {
    [fetchAllProfiles.pending]: (state, action) => {
      state.status = "loading"
    },
    [fetchAllProfiles.fulfilled]: (state, action) => {
      console.log("action is", action)
      state.profiles = action.payload
      state.status = "success"
    },
    [fetchAllProfiles.rejected]: (state, action) => {
      ;(state.status = "failed"), (state.error = action.payload)
    },
  },
})

export default homeSlice.reducer
