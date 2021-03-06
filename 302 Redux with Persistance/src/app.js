
import React, { Component } from 'react-native';
import { Provider } from 'react-redux';

import LoadingView from './features/loadingview/LoadingView';
import TTTView from './features/ttt/TTTView';

import store from './store';

export default class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<LoadingView>
					<TTTView />
				</LoadingView>
			</Provider>
		);
	}
}
