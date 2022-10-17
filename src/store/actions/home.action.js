import { FETCH_POST } from "../reducers/home.reducer"

export const getPosts = (posts) => {
  return async (dispatch, getState) => {
    dispatch({ type: FETCH_POST, payload: posts })
  }
}
