import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store'
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import './themes/light.css';
import './themes/dark.css';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
