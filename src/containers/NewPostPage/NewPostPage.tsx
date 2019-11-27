import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createPost } from '../../actions/post';
import {
	CardWrapper,
	CardHeader,
	CardHeading,
	CardBody,
	CardFieldset,
	CardButton,
	CardInput
} from '../../components/Post/Card';

const NewPostPage = ({ error, loaded, createPost }) => {
	const [newPost, setNewPost] = useState({});

	const handleInput = ({ target: { name, value } }) => {
		console.log(name, value);
		setNewPost(post => ({
			...post,
			[name]: value
		}));
	};

	return (
		<form onSubmit={() => createPost(newPost)}>
			<CardWrapper>
				<CardHeader>
					<CardHeading>Create New Post</CardHeading>
				</CardHeader>
				<CardBody>
					<CardFieldset>
						<CardInput
							onChange={e => handleInput(e)}
							placeholder='Title'
							type='text'
							name='title'
							required
						/>
					</CardFieldset>
					<CardFieldset>
						<CardInput
							onChange={e => handleInput(e)}
							placeholder='Text'
							type='text'
							name='body'
							required
						/>
					</CardFieldset>
					<CardFieldset>
						<CardButton
							type='submit'
							onClick={e => {
								e.preventDefault();
								console.log('new post is', newPost);
								createPost(newPost);
							}}
						>
							Create
						</CardButton>
					</CardFieldset>
				</CardBody>
			</CardWrapper>
		</form>
	);
};

const mapStateToProps = ({ error, loaded }) => ({
	error,
	loaded
});

const mapDispatchToProps = dispatch => ({
	createPost: post => dispatch(createPost(post))
});

export default connect(mapStateToProps, mapDispatchToProps)(NewPostPage);
