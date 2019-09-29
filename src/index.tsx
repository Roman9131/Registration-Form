import * as React from 'react';
import reactDom from 'react-dom';
import { Provider } from 'react-redux';

import './index.sass';
import App from './App';
import store from './store';
import * as serviceWorker from './serviceWorker';

reactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  window.document.getElementById('root'),
);

serviceWorker.unregister();
