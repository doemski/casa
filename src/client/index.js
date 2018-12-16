import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './pages/App';
import store from './store';
import { BrowserRouter } from 'react-router-dom';

const rootEl = document.getElementById('page');

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>,
    rootEl
  );
};
render();
