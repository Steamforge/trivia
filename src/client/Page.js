import React from 'react';
import { Link } from 'react-router-dom';
import { QuestionContext } from './context';

import List from './List';

const Page = () => (
  <div>
    <h1>Page</h1>
    <Link to="/">home page</Link>
    <QuestionContext.Consumer>
      {questions => (
        <List questions={questions}/>
      )}
    </QuestionContext.Consumer>
  </div>
);

export default Page;
