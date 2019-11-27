import React, { useState, useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { createPost } from '../../actions/post';
import {
	CardWrapper,
	CardHeader,
	CardHeading,
	CardBody,
	CardFieldset,
	CardButton,
	CardInput,
	CardOptions,
	CardOptionsNote
} from '../../components/Post/Card';
import Spinner from '../../components/Spinner';

const NewPostPage = ({ error, loaded, createPost }) => {
	const [newPost, setNewPost] = useState({});
	const [isPostCreated, setIsPostCreated] = useState(null);
	const [expiredTimer, setExpiredTimer] = useState(false);
	const inputTitle = useRef(null);
	const inputBody = useRef(null);

	useEffect(() => {
		inputTitle.current.focus();
	}, []);

	const handleInput = ({ target: { name, value } }) => {
		console.log(name, value);
		setNewPost(post => ({
			...post,
			[name]: value
		}));
	};

	return (
		<>
			{expiredTimer && <Spinner />}
			<form
				onSubmit={async e => {
					e.preventDefault();
					if (!(inputTitle.current.value && inputBody.current.value)) {
						setIsPostCreated(false);
					} else {
						setExpiredTimer(true);
						await createPost(newPost);
						setExpiredTimer(false);
						setIsPostCreated(error || true);
					}
					setTimeout(() => {
						setIsPostCreated(null);
						setExpiredTimer(false);
					}, 1500);
				}}
			>
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
								ref={inputTitle}
							/>
						</CardFieldset>
						<CardFieldset>
							<CardInput
								onChange={e => handleInput(e)}
								placeholder='Text'
								type='text'
								name='body'
								required
								ref={inputBody}
							/>
						</CardFieldset>
						<CardFieldset>
							<CardButton
								type='submit'
								onClick={async e => {
									e.preventDefault();
									if (!(inputTitle.current.value && inputBody.current.value)) {
										setIsPostCreated(false);
									} else {
										setExpiredTimer(true);
										await createPost(newPost);
										setExpiredTimer(false);
										setIsPostCreated(error || true);
									}
									setTimeout(() => {
										setIsPostCreated(null);
									}, 1500);
								}}
							>
								Create
							</CardButton>
						</CardFieldset>
						{(isPostCreated || isPostCreated === false) && (
							<CardFieldset>
								<CardOptions>
									{(isPostCreated && (
										<CardOptionsNote>Post is created</CardOptionsNote>
									)) ||
										((isPostCreated === false || error) && (
											<CardOptionsNote>
												Error or you need write some text -_-
											</CardOptionsNote>
										))}
								</CardOptions>
							</CardFieldset>
						)}
					</CardBody>
				</CardWrapper>
			</form>
		</>
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
