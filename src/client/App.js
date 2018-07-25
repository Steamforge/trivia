import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import HomePage from './HomePage';
import Page from './Page';
import NotFoundPage from './NotFoundPage';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { questions: [] };
  }

  componentDidMount() {
    // const url = 'https://opentdb.com/api.php?amount=10';
    const url = 'api/mock';
    fetch(url)
      .then(res => res.json())
      .then((data) => {
        console.log('data', data);
        this.setState({ questions: data.results });
      })
      .catch(reason => console.log(reason.message));
  }

  render() {
    // const { questions } = this.state;
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/page" component={Page} />
          <Route component={NotFoundPage} />
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  children: PropTypes.element,
};
