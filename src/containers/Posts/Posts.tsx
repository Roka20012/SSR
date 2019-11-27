import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Post from '../../components/Post';
import Spinner from '../../components/Spinner';
import { getPosts } from '../../actions/posts';
import { deletePost } from '../../actions/post';

const Container = styled.div`
	margin: 0 auto;
	display: flex;
	justify-content: space-between;
	flex-direction: column;
	width: 100%;
`;

const Error = styled.div`
	margin: 0 auto;
	width: 100%;
	margin: 50px 0;
	text-align: center;
	font-size: 20px;
`;

const Posts = ({ deletePost, getPosts, posts, loaded, error }) => {
	useEffect(() => {
		if (!posts) {
			getPosts();
		}
	}, []);

	if (error)
		return <Error>Something went wrong please reload the page -_-</Error>;
	if (!loaded && !posts) return <Spinner />;
	const showOpenButton: boolean = true;
	return (
		<Container>
			{!loaded && <Spinner />}
			{posts ? (
				posts.map(post => (
					<Post
						loaded={loaded}
						post={post}
						deletePost={deletePost}
						showOpenButton={showOpenButton}
						key={post.id}
					/>
				))
			) : (
				<Container>There is no posts!</Container>
			)}
		</Container>
	);
};

const mapStateToProps = ({ posts, loaded, error }) => ({
	posts,
	loaded,
	error
});

const mapDispatchToProps = dispatch => ({
	getPosts: () => dispatch(getPosts()),
	deletePost: id => dispatch(deletePost(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
