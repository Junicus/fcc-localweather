import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AsyncApp from './containers/AsyncApp';
import store from './store';
import registerServiceWorker from './registerServiceWorker';

import './index.css';

ReactDOM.render(
    <Provider store={store}>
        <AsyncApp />
    </Provider>, document.getElementById('root'));
registerServiceWorker();
