import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Link from 'next/link';
import { getPosts } from '../../actions/posts';
import { StyledHeader, Button } from './HeaderStyles';

const Header = ({ getPosts }) => {
	return (
		<StyledHeader>
			<Link href='/'>
				<Button>Home</Button>
			</Link>
			<Link href='/posts/new'>
				<Button>Create New Post</Button>
			</Link>
			<Button onClick={getPosts}>Refresh posts</Button>
		</StyledHeader>
	);
};

const mapDispatchToProps = dispach => ({
	getPosts: () => dispach(getPosts())
});

export default connect(null, mapDispatchToProps)(Header);
