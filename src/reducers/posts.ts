import { GET_POSTS, ADD_POST, DELETE_POST, EDIT_POST } from '../constants';

export const posts = (state = [], { type, payload }) => {
  switch (type) {
    case GET_POSTS:
      return payload.posts;
    case ADD_POST:
      return [...state, payload];
    case DELETE_POST:
      return state.filter(({ id }) => id !== payload.id);
    case EDIT_POST:
      return state.map(post => (post.id === payload.id ? payload : post));
    default:
      return state;
  }
};
