// import { combineReducers } from 'redux';

// // import posts from './post';
// import auth from './UserAuth';


// // post should be removed from parameters


// export const reducers = combineReducers({ auth });

  
import { combineReducers } from 'redux';

import posts from './FeedBacks';
// this posts === feedbacks 
import auth from './UserAuth';

export const reducers = combineReducers({ posts, auth });