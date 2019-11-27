import axios from 'axios';
import { API } from '../constants';
import { GET_POSTS } from '../constants';
import { loaded } from './loaded';
import { error } from './error';

export const getPostsSuccess = (posts: object[]): object => ({
	type: GET_POSTS,
	payload: {
		posts
	}
});

export const getPosts = (): object => async dispatch => {
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
