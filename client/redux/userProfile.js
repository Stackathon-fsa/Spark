import axios from "axios"
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

const initialState = {
  profile: {},
  status: null,
  error: null
}

// axios request to grab user profile by id
export const fetchProfile = createAsyncThunk(
  "profile/fetchProfile",
  async (id) => {
    try {
      const {data: profile} = axios.get(`http://localhost:8080/api/users/${id}`);
      return profile
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
    [fetchProfile.fulfilled]: (state, { payload }) => {
      state.user = payload
      state.status = "success"
    },
    [fetchProfile.rejected]: (state, action) => {
      state.status = "failed",
      state.error = action.payload
    },
  }
})

// export default profileSlice.reducer;
const userProfileReducer = profileSlice.reducer
export default userProfileReducer
