import axios from 'axios';
import { API } from '../constants';
import { ADD_POST, DELETE_POST, GET_POST } from '../constants';
import { loaded } from './loaded';
import { error } from './error';

export const getPostSuccess = (post: object[] | null): object => ({
	type: GET_POST,
	payload: {
		...post
	}
});

export const getPost = (id: string): object => async dispatch => {
	try {
		dispatch(loaded(false));
		const response: any = await axios(`${API}/posts/${id}?_embed=comments`);
		const post: object[] = response.data;
		dispatch(getPostSuccess(post));
		dispatch(loaded(true));
	} catch (err) {
		dispatch(loaded(true));
		dispatch(error(err));
	}
};

export const createPostSuccess = (newPost: object): object => ({
	type: ADD_POST,
	payload: {
		...newPost
	}
});

export const createPost = (post: object): object => async dispatch => {
	try {
		dispatch(loaded(false));
		const response = await axios.post(`${API}/posts`, post);
		const newPost = response.data;
		dispatch(createPostSuccess(newPost));
		dispatch(loaded(true));
	} catch (err) {
		dispatch(loaded(true));
		dispatch(error(err));
	}
};

export const deletePostSuccess = (id: string): object => ({
	type: DELETE_POST,
	payload: {
		id
	}
});

export const deletePost = (id: string): object => async dispatch => {
	try {
		dispatch(loaded(false));
		await axios.delete(`${API}/posts/${id}`);
		dispatch(deletePostSuccess(id));
		dispatch(loaded(true));
	} catch (err) {
		dispatch(loaded(true));
		console.log('Error in delete post');
		dispatch(error(err));
	}
};
