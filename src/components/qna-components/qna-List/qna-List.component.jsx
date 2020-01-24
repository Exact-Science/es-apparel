import React from 'react';
import './qna-List.styles.scss';
import propTypes from 'prop-types';
import Question from '../qna-question/qna-question.component';

const QnAList = (props) => {
  // console.log("the props: ", props);
  const { questionBody } = props;
  return (
    // const {question_body} = props.question_body;}
    <div className="qna-List-container">
      <br />
      <Question questionBody={questionBody} />
    </div>
  );
};

QnAList.propTypes = {
  questionBody: propTypes.string.isRequired,
};

export default QnAList;
