import React from 'react';
import PropTypes from 'prop-types';

const questionElements = (list) => {
  console.log(list);
  return list.map((item, i) => <li key={i}>{item.category}</li>);
};

const List = (props) => {
  console.log('props', props);
  return <ul>{questionElements(props.questions)}</ul>;
};

List.propTypes = {
  questions: PropTypes.node,
};

export default List;
