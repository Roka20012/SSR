import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Router from 'next/router';
import 'isomorphic-fetch';
import { getPost, deletePost, editPost } from '../../actions/post';

const PostPage = props => {
  const { deletePost, editPost, getPost, post, loaded, error, id } = props;
  useEffect(() => {
    console.log('Call POST');
    (async function() {
      await getPost(id);
    })();
  }, []);

  const [editedPost, setEditedPost] = useState({ id });

  if (!loaded) return <div>Loading...</div>;
  if (error) return <div>Something went wrong -_-</div>;

  const { title, body } = post;

  const handleInput = ({ target: { name, value } }) => {
    console.log(name, value);
    setEditedPost(post => ({
      ...post,
      [name]: value
    }));
  };

  return (
    <>
      <div>Post id is {id}</div>
      <br />
      <div>{title}</div>
      <br />
      <div>{body}</div>
      <br />
      <button
        onClick={async () => {
          await deletePost(id);
          Router.push('/');
        }}
      >
        deletePost
      </button>

      <form
        onSubmit={e => {
          e.preventDefault();
          editPost(editedPost);
        }}
      >
        Title: <input onChange={e => handleInput(e)} type='text' name='title' />
        Body: <input onChange={e => handleInput(e)} type='text' name='body' />
        <button
          onClick={e => {
            e.preventDefault();
            editPost(editedPost);
          }}
        >
          editPost
        </button>
      </form>
    </>
  );
};

const mapStateToProps = ({ posts, loaded, error, post }, { id }) => {
  console.log('id is', id);
  console.log(
    'post is',
    post ? post : posts.find(post => post.id === (+id || id))
  );
  return {
    post: post ? post : posts.find(post => post.id === id),
    loaded,
    error
  };
};

const mapDispatchToProps = dispatch => ({
  deletePost: id => dispatch(deletePost(id)),
  editPost: post => dispatch(editPost(post)),
  getPost: id => dispatch(getPost(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(PostPage);
