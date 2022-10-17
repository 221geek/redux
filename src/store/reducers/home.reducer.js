const initialState = {
  posts: [],
  currentUser: null,
  comments: []
}

export const FETCH_POST = 'FETCH_POST';
export const FETCH_COMMENT = 'FETCH_COMMENT';
export const FETCH_CURRENT_USER = 'FETCH_CURRENT_USER';

const homeReducer = (state = initialState, action) => {

  switch (action.type) {
    case FETCH_POST:
      return {
        ...state,
        posts: action.payload
      }

    case FETCH_COMMENT:
      return {
        ...state,
        comments: action.payload
      }

    case FETCH_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload
      }

    default:
      return state;
  }
}

export default homeReducer;