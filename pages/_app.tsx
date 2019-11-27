import React from 'react';
import { Provider } from 'react-redux';
import App, { AppContext } from 'next/app';
import { Store } from 'redux';
import withRedux from 'next-redux-wrapper';
import configureStore from '../src/store/configureStore';
import Header from '../src/containers/Header';
import Footer from '../src/components/Footer';

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
				<Header />
				<Component {...pageProps} />
				<Footer>All rights reserved</Footer>
			</Provider>
		);
	}
}

export default withRedux(configureStore)(MyApp);
