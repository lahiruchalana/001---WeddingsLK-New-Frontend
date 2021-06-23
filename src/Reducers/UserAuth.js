
import * as actionType from '../Constants/ActionTypes';

const authReducer = (state = { authData: null }, action) => {
  switch (action.type) {

    case actionType.AUTH:
      localStorage.setItem('profile', JSON.stringify({ ...action?.data }));

      return { ...state, authData: action?.data };
      // return { ...state, authData: action?.data , loading: false, errors: null };

    case actionType.LOGOUT:
      localStorage.clear();

      return { ...state, authData: null };
      // return { ...state, authData: null, loading: false, errors: null };

    default:
      return state;
  }
};

export default authReducer;