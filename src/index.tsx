import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './store/rootStore';
import Example from 'src/component/Application';

ReactDOM.render(
	<Provider store={store}>
		<Example/>
	</Provider>,
	document.getElementById('root'),
);
