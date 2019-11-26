import { combineReducers } from 'redux';
import { posts } from './posts';
import { post } from './post';
import { error } from './error';
import { loaded } from './loaded';

export default combineReducers({
  posts,
  post,
  error,
  loaded
});
