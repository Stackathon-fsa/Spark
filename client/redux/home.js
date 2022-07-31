import axios from "axios"
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

export const fetchAllProfiles = createAsyncThunk("user/fetchUser", async (id) => {
  try {
    const { data } = await axios.get(`http://localhost:8080/api/profiles/${id}`)
    return data
  } catch (error) {
    console.error(error)
  }
})

export const addMatch = createAsyncThunk(
  "user/addMatch",
  async ({userId, matchId, like}) => {
    try {
      const { data } = await axios.post(`http://localhost:8080/api/matches`, {
        userId: userId,
        matchId: matchId,
        like: like,
      })
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
        if (profile.id !== action.payload.matchId) {
          return profile
        }
      })
      state.status = "success"
    },
    [addMatch.rejected]: (state, action) => {
      ;(state.status = "failed"), (state.error = action.payload)
    },
  },
})

export default homeSlice.reducer
