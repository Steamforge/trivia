import React, { Component } from 'react';
import PropTypes from 'prop-types';

// import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../actions';

import { Link, withRouter } from 'react-router-dom';

import { List } from '../components';

class Page extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {};
    }

    componentDidMount() {
        const url = 'api/questions/';
        this.props.fetchData(url);
    }

    render() {
        const { questions } = this.props;
        console.log(this.props);

        return (
            <div>
                <h1>Page</h1>
                <Link to="/">home page</Link>
                <List questions={questions} />
            </div>
        );
    }
}

Page.propTypes = {
    fetchData: PropTypes.func,
    actions: PropTypes.func,
    dispatch: PropTypes.func,
    questions: PropTypes.array,
};

const mapStateToProps = (state) => {
    console.log(state);
    return {
        questions: state.questions,
    };
};

const mapDispatchToProps = dispatch => ({
    fetchData: url => dispatch(actions.fetchQuestions(url)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Page));
