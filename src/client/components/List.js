import React from 'react';
import PropTypes from 'prop-types';

const questionElements = list =>
    list.map((item, i) => <li key={i}><a href={`/question/${i}`}>{item.category}</a></li>);

const List = props => <ul>{questionElements(props.questions)}</ul>;

List.propTypes = {
    questions: PropTypes.node,
};

export default List;
