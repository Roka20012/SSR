import { GET_POSTS, ADD_POST, DELETE_POST, EDIT_POST } from '../constants';

export const posts = (state = null, { type, payload }) => {
	switch (type) {
		case GET_POSTS:
			return payload.posts;
		case ADD_POST:
			if (!state) return state;
			return [...state, payload];
		case DELETE_POST:
			return state.filter(({ id }) => id !== payload.id);
		default:
			return state;
	}
};
