import React from 'react';
import { Provider } from 'react-redux';
import store from '../src/store';
import Posts from '../src/containers/Posts';

store.subscribe(() => console.log('STORE IS', store.getState()));

const HomePage = () => {
  return <Posts />;
};

export default HomePage;
