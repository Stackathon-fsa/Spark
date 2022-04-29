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
      // console.log("action is", action)
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

// const GET_USER = "GET_USER"

// export const getUser = (user) => {
//   return {
//     type: GET_USER,
//     user,
//   }
// }

// export const fetchUser = () => {
//     console.log("ayyyyyyyyy")
//     return async (dispatch) => {
//         try {

//           const { data } = await axios.get(`http://localhost:8080/api/users`)
//           dispatch(getUser(data))

//     } catch (error) {
//       console.error(error)
//     }
//   }
// }

// const initialState = []

// export default function userReducer(state = initialState, action) {
//   switch (action.type) {
//     case GET_USER:
//       return [action.user]
//     default:
//       return state
//   }
// }
