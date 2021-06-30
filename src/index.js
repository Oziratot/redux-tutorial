import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { BrowserRouter } from 'react-router-dom';
import { composeWithDevTools } from 'redux-devtools-extension';

import App from './App';
import rootReducer from './reducers';

import './index.css';

const store = createStore(rootReducer,
    composeWithDevTools(applyMiddleware(thunk)));

render(
    <React.StrictMode>
            <Provider store={store}>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </Provider>
    </React.StrictMode>,
    document.getElementById('root'),
)