import axios from "axios"
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

const initialState = {
  profile: {},
  status: null,
  error: null
}

export const fetchProfile = createAsyncThunk(
  "profile/fetchProfile",
  async (id) => {
    try {
      const {data: profile} = await axios.get(`http://localhost:8080/api/users/${id}`);
      return profile
    } catch (err) {
      console.error(err)
    }
  }
)

export const editProfile = createAsyncThunk(
  "profile/editProfile",
  async (info) => {
    try {
      const {id, bio, interests, age, name} = info
      const {data} = await axios.put(`http://localhost:8080/api/users/${id}`, {bio, interests, age, name})
      return data
    } catch (err) {
      console.error(err)
    }
  }
)

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchProfile.pending]: (state, action) => {
      state.status = "loading"
    },
    [fetchProfile.fulfilled]: (state, action) => {
      console.log('action is', action )
      state.profile = action.payload
      state.status = "success"
    },
    [fetchProfile.rejected]: (state, action) => {
      state.status = "failed",
      state.error = action.payload
    },
    [editProfile.pending]: (state, action) => {
      state.status = "loading"
    },
    [editProfile.fulfilled]: (state, action) => {
      console.log('payload is', action)
      state.profile = action.payload
      state.status = "success"
    },
    [editProfile.rejected]: (state, action) => {
      state.status = "failed",
      state.error = action.payload
    },
  }
})

const userProfileReducer = profileSlice.reducer
export default userProfileReducer
