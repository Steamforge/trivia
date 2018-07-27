import React from 'react';
import PropTypes from 'prop-types';

const Question = ({ match }) => {
    const index = match.params.id;
    return (
        <div>
            <div>question {index}</div>
        </div>
    );
};

Question.propTypes = {
    match: PropTypes.object,
};

export default Question;
