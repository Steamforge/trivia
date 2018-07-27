import React from 'react';
import { render } from 'react-dom';

import configureStore from './store';

import Root from './routes';
// import { fetchQuestions } from './actions';

const store = configureStore();
// store.dispatch(fetchQuestions());

render(
    <Root store={store}/>,
    document.getElementById('root')
);
