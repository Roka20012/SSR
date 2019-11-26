import React from 'react';
import { Provider } from 'react-redux';
import App, { AppContext } from 'next/app';
import { Store } from 'redux';
import withRedux from 'next-redux-wrapper';
import configureStore from '../src/store/configureStore';

interface Props {
  store: Store;
}

class MyApp extends App<Props> {
  static async getInitialProps({ Component, ctx }: AppContext) {
    return {
      pageProps: Component.getInitialProps
        ? await Component.getInitialProps(ctx)
        : {}
    };
  }

  render() {
    const { Component, pageProps, store } = this.props;

    return (
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    );
  }
}

export default withRedux(configureStore)(MyApp);
