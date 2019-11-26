import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Link from 'next/link';
import Router from 'next/router';
import Post from '../../components/Post';
import { getPosts } from '../../actions/posts';

const Posts = ({ getPosts, posts, loaded, error }) => {
  useEffect(() => {
    console.log('Call POSTS');
    (async function() {
      await getPosts();
    })();
  }, []);

  if (error) return <div>Something went wrong please reload the page -_-</div>;
  if (!loaded) return <div>Loading...</div>;
  return (
    <div>
      <button onClick={getPosts}>Get posts</button>
      <Link href='/posts/new'>
        <a>
          <button>Create New Post</button>
        </a>
      </Link>
      <ul>
        {posts.map(post => (
          <Link
            href={`/posts/${post.id}`}
            as={`/posts/${post.id}`}
            key={post.id}
          >
            <li
              onClick={() => {
                // Router.push(`/posts?id=${post.id}`);
              }}
              key={post.id}
            >
              <Post post={post} />
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = ({ posts, loaded, error }) => ({
  posts,
  loaded,
  error
});

const mapDispatchToProps = dispatch => ({
  getPosts: () => dispatch(getPosts())
});

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
