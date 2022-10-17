import { combineReducers } from 'redux';
import homeReducer from './home.reducer';

const appReducer = combineReducers({
  home: homeReducer
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
