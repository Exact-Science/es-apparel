import React from 'react';
import propTypes from 'prop-types';
import Answer from '../answer/qna-answer.component';
import Utility from '../utility/qna-utility.component';
import './qna-question.styles.scss';

const Question = ({ questionId, questionBody, questionHelpfulness, questionAnswers }) => (
  <div className="qna-question">
    <div className="question-utility-container">
      <div className="question-identifier">Q</div>
      <div className="question-utility">
        <div className="question-body">{questionBody}</div>
        <Utility
          questionId={questionId}
          questionHelpfulness={questionHelpfulness}
        />
      </div>
    </div>
    <div className="qna-answer-container">
      <div className="answer-identifier">A: </div>
      <div>
        {Object.keys(questionAnswers).map(
          (answer) => (
            <Answer
              answerId={questionAnswers[answer].id}
              answerBody={questionAnswers[answer].body}
              answerDate={questionAnswers[answer].date}
              answerHelpfulness={questionAnswers[answer].helpfulness}
              answererName={questionAnswers[answer].answerer_name}
              answerImages={questionAnswers[answer].photos}
              key={`a${questionAnswers[answer].id}`}
            />
          ),
        )}
      </div>
    </div>
  </div>
);

Question.propTypes = {
  questionBody: propTypes.string.isRequired,
  questionHelpfulness: propTypes.number.isRequired,
  questionAnswers: propTypes.shape({}).isRequired,
};

export default Question;
