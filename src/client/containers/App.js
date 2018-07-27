import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Provider } from 'react-redux';
import configureStore from '../store';
import { fetchQuestions } from '../actions';
const store = configureStore();
store.dispatch(fetchQuestions());

import { HomePage, Page, Question, NotFoundPage } from '../containers';

export default class App extends Component {

    render() {
        // const { questions } = this.state;
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/" component={HomePage} />
                        <Route path="/page" component={Page} />
                        <Route path="/question/:id?" component={Question} />
                        <Route component={NotFoundPage} />
                    </Switch>
                </BrowserRouter>
            </Provider>
        );
    }
}

App.propTypes = {
    children: PropTypes.element,
};
