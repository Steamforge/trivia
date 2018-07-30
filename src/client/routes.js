import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import {
    HomePage,
    Page,
    Question,
    NotFoundPage,
} from './containers';

const Root = ({ store }) => (
    <Provider store={store}>
        <Router>
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/page" component={Page} />
                <Route path="/question/:id?" component={Question} />
                <Route component={NotFoundPage} />
            </Switch>
        </Router>
    </Provider>
);

Root.propTypes = {
    store: PropTypes.object.isRequired,
};

export default Root;
