import axios from 'axios';
import { API } from '../constants';
import { ADD_POST, DELETE_POST, GET_POST, EDIT_POST } from '../constants';
import { loaded } from './loaded';
import { error } from './error';

export const getPostSuccess = post => ({
	type: GET_POST,
	payload: {
		...post
	}
});

export const getPost = id => async dispatch => {
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

export const createPostSuccess = newPost => ({
	type: ADD_POST,
	payload: {
		...newPost
	}
});

export const createPost = post => async dispatch => {
	try {
		dispatch(loaded(false));
		console.log('POST IS', post);
		const response = await axios.post(`${API}/posts`, post);
		const newPost = response.data;
		dispatch(createPostSuccess(newPost));
		dispatch(loaded(true));
	} catch (err) {
		dispatch(loaded(true));
		dispatch(error(err));
	}
};

export const editPostSuccess = post => ({
	type: EDIT_POST,
	payload: {
		...post
	}
});

export const editPost = post => async dispatch => {
	try {
		const { id } = post; //{id, title, body}
		console.log('POST is', post);
		dispatch(loaded(false));
		// const response = await axios.put(`${API}/posts/${id}`, post);
		// const editedPost = response.data;
		const editedPost = await axios
			.put(`${API}/posts/${id}`, post)
			.then(res => res.data)
			.catch(err => console.error("Wasn't able to update property.", err));
		console.log('EDITED POST IS', editedPost);
		dispatch(editPostSuccess(editedPost));
		dispatch(loaded(true));
	} catch (err) {
		dispatch(loaded(true));
		dispatch(error(err));
	}
};

export const deletePostSuccess = id => ({
	type: DELETE_POST,
	payload: {
		id
	}
});

export const deletePost = id => async dispatch => {
	try {
		dispatch(loaded(false));
		await axios.delete(`${API}/posts/${id}`);
		dispatch(deletePostSuccess(id));
		dispatch(loaded(true));
	} catch (err) {
		dispatch(loaded(true));
		console.log('Error in delete post');
		// dispatch(error(err));
	}
};
