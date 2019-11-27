import React from 'react';
import Router from 'next/router';
import Link from 'next/link';
import {
	CardWrapper,
	CardHeader,
	CardHeading,
	CardBody,
	CardFieldset,
	CardOptionsItem,
	CardOptions,
	CardOptionsNote,
	CardButton
} from './Card';

const Post = ({ post, deletePost, showOpenButton }): any => {
	const { id, title, body } = post;
	return (
		<CardWrapper>
			<CardHeader>
				<CardHeading>{title}</CardHeading>
			</CardHeader>
			<CardBody>
				<CardFieldset>
					<CardOptionsNote>{body}</CardOptionsNote>
				</CardFieldset>
				<CardFieldset>
					<CardOptions>
						{showOpenButton && (
							<CardOptionsItem>
								<Link href='/posts/[id]' as={`/posts/${id}`}>
									<CardButton type='button'>Open</CardButton>
								</Link>
							</CardOptionsItem>
						)}
						<CardOptionsItem>
							<CardButton
								type='button'
								onClick={() => {
									deletePost(id);
									Router.push('/');
								}}
							>
								Delete
							</CardButton>
						</CardOptionsItem>
					</CardOptions>
				</CardFieldset>
			</CardBody>
		</CardWrapper>
	);
};

export default Post;
