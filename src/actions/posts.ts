import axios from 'axios';
import { API } from '../constants';
import { GET_POSTS } from '../constants';
import { loaded } from './loaded';
import { error } from './error';

export const getPostsSuccess = (posts: object[]) => ({
  type: GET_POSTS,
  payload: {
    posts
  }
});

export const getPosts = () => async dispatch => {
  try {
    dispatch(loaded(false));
    const response: any = await axios.get(`${API}/posts`);
    const posts: object[] = response.data;
    dispatch(getPostsSuccess(posts));
    dispatch(loaded(true));
  } catch (err) {
    dispatch(loaded(true));
    dispatch(error(err));
  }
};

// [
//   {
//     title: 'React is all about',
//     body: "blablabla"
//     id: 125,
//     comments: [
//       {
//         postId: 125,
//         body: 'SRGSRGSRH',
//         id: 7193
//       }
//     ]
//   }
// ];
