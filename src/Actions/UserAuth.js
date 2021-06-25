import { AUTH } from '../Constants/ActionTypes';
import * as api from '../Api/Index.js';

export const signin = (form, history) => async (dispatch) => {
  try {
    // const { data } = await api.signIn(formData);

    // dispatch({ type: AUTH, data });

    // router.push('/');
    history.push('/');
  } catch (error) {
    console.log(error);
  }
};

/// make attention on (form, history) //////////////////

export const signup = (form, history) => async (dispatch) => {
    try {
      // const { data } = await api.signIn(formData);
  
      // dispatch({ type: AUTH, data });
  
      // router.push('/');
      history.push('/');
    } catch (error) {
      console.log(error);
    }
  };
  

// export const signup = (formData, router) => async (dispatch) => {
//   try {
//     const { data } = await api.signUp(formData);

//     dispatch({ type: AUTH, data });

//     router.push('/');
//   } catch (error) {
//     console.log(error);
//   }
// };