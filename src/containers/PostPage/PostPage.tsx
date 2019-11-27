import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getPost, deletePost } from '../../actions/post';
import Post from '../../components/Post';
import Spinner from '../../components/Spinner';

const PostPage = props => {
	const { deletePost, getPost, post, loaded, error, id } = props;
	useEffect(() => {
		if (!post || post.id !== id) {
			getPost(id);
		}
	}, []);

	if (!loaded) return <Spinner />;
	if (error) return <div>Something went wrong -_-</div>;
	const showOpenButton: boolean = false;

	return (
		<Post post={post} deletePost={deletePost} showOpenButton={showOpenButton} />
	);
};

const mapStateToProps = ({ posts, loaded, error, post }, { id }) => ({
	post: posts ? posts.find(post => post.id === id) : post,
	loaded,
	error
});

const mapDispatchToProps = dispatch => ({
	deletePost: id => dispatch(deletePost(id)),
	getPost: id => dispatch(getPost(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(PostPage);
