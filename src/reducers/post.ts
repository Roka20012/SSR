import { GET_POST, EDIT_POST } from '../constants';

export const post = (state = null, { type, payload }) => {
  switch (type) {
    case GET_POST:
      return payload;
    default:
      return state;
  }
};
