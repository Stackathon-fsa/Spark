import axios from "axios"

const GET_USER = "GET_USER"

export const getUser = (user) => {
  return {
    type: GET_USER,
    user,
  }
}

export const fetchUser = () => {
    console.log("ayyyyyyyyy")
    return async (dispatch) => {
        try {
         
      const { data } = await axios.get(`http://localhost:8080/api/users`)
      dispatch(getUser(data))
    } catch (error) {
      console.error(error)
    }
  }
}

const initialState = []

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case GET_USER:
      return [action.user]
    default:
      return state
  }
}
