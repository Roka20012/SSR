import React from 'react';

const Post = ({ post }) => {
  const { id, title, body } = post;
  return (
    <>
      <div>{title}</div>
      <div>{body}</div>
      <br/>
    </>
  );
};

export default Post;
