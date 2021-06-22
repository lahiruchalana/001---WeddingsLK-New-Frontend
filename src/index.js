import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

/// new imports for react-redux issue in useDispatch start ////

import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import { reducers } from './Reducers';


const store = createStore(reducers, compose(applyMiddleware(thunk)));

//// new imports for react redux issue in useDispatch end //// 


ReactDOM.render(

  /// START -> MERN tutorial 12 hour video first video -. why i include this here ////

  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  // document.getElementById('root'),

  /// END -> MERN tutorial 12 hour video first video -. why i include this here ////



  //// new imports for react redux issue in useDispatch start //// 

  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),


  //// new imports for react redux issue in useDispatch end //// 


);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
