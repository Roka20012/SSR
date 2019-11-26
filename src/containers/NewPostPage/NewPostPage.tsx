import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createPost } from '../../actions/post';

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
      Title: <input onChange={e => handleInput(e)} type='text' name='title' />
      Body: <input onChange={e => handleInput(e)} type='text' name='body' />
      <button
        type='submit'
        onClick={e => {
          e.preventDefault();
          console.log('new post is', newPost);
          createPost(newPost);
        }}
      >
        Add post
      </button>
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
