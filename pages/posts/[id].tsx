import React from 'react';
import { useRouter } from 'next/router';
import PostPage from '../../src/containers/PostPage';

const Post = () => {
  const router = useRouter();
  const { id }: any = router.query;

  return <PostPage id={id} />;
};

export default Post;
