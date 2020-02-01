import React, { useEffect } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { getPost, deletePost } from '../../actions/post';
import Post from '../../components/Post';
import Spinner from '../../components/Spinner';

const Error = styled.div`
	margin: 0 auto;
	width: 100%;
	margin: 50px 0;
	text-align: center;
	font-size: 20px;
`;

const PostPage = props => {
	const { deletePost, getPost, post, loaded, error, id } = props;
	useEffect(() => {
		if (!post || post.id != id) {
			getPost(id);
		}
	}, []);

	if (!loaded && !post) return <Spinner />;
	if (error) return <Error>Something went wrong -_-</Error>;
	const showOpenButton: boolean = false;

	return (
		<Post
			post={post}
			deletePost={deletePost}
			showOpenButton={showOpenButton}
			loaded={loaded}
		/>
	);
};

const mapStateToProps = ({ posts, loaded, error, post }, { id }) => ({
	post: posts ? posts.find(post => post.id == id) : post,
	loaded,
	error
});

const mapDispatchToProps = dispatch => ({
	deletePost: id => dispatch(deletePost(id)),
	getPost: id => dispatch(getPost(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(PostPage);
