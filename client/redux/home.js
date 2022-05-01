import axios from "axios"
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

// export const fetchAllProfiles = createAsyncThunk("user/fetchUser", async () => {
//   try {
//     const { data } = await axios.get(`http://localhost:8080/api/profiles`)
//     console.log("Data From fetchAllProfiles Thunk", data)
//     return data
//   } catch (error) {
//     console.error(error)
//   }
// })

export const fetchAllProfiles = createAsyncThunk("user/fetchUser", async (id) => {
  try {
    const { data } = await axios.get(`http://localhost:8080/api/profiles/${id}`)
    console.log("Data From fetchAllProfiles Thunk", data)
    return data
  } catch (error) {
    console.error(error)
  }
})

export const addMatch = createAsyncThunk(
  "user/addMatch",
  async ({userId, matchId, like}) => {
    try {
      console.log("THUNK INPUT", userId, matchId, like)
      const { data } = await axios.post(`http://localhost:8080/api/matches`, {
        userId: userId,
        matchId: matchId,
        like: like,
      })
      console.log("Data From AddMatch Thunk", data)
      return data
    } catch (error) {
      console.error(error)
    }
  }
)

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
    [addMatch.pending]: (state, action) => {
      state.status = "loading"
    },
    [addMatch.fulfilled]: (state, action) => {
      state.profiles = state.profiles.filter((profile) => {
        console.log('PALOAD REDUCER' , action.payload)
        if (profile.id !== action.payload.matchId) {
          return profile
        }
      })
      console.log("action is", action)
      state.status = "success"
    },
    [addMatch.rejected]: (state, action) => {
      ;(state.status = "failed"), (state.error = action.payload)
    },
  },
})

export default homeSlice.reducer
