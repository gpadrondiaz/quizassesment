import  React, { useEffect } from 'react';
import _ from 'lodash';
import { useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import * as QuizConstants from '../constants/QuizConstants';

import '../../styles/result.scss';

interface StateProps {
    score: number;
    questions: Array<QuizConstants.Question>;

}

export const Result = () => {  

    const score = useSelector((store: StateProps) => store.score);
    const questions = useSelector((store: StateProps) => store.questions || []);
    const history = useHistory();
    useEffect(() => {
        if (_.isEmpty(questions)) {
            history.push('/home');
        } 
        return () => {
            history.push('/home');
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
      <div className="results">
        <h1>
            Summary
        </h1>
        <label>Correct: <span className="result">{score}</span></label>
        <label>Wrong:  <span className="result">{QuizConstants.QUESTION_NUMBERS - score}</span></label>
        <label>Questions answered:  <span className="result">{QuizConstants.QUESTION_NUMBERS}</span></label>
        <label>Final score:  <span className="result">{_.round(((score / QuizConstants.QUESTION_NUMBERS) * 100),2)} %</span></label>
        <Link className="quiz-button" to="/">
            Restart Quiz
        </Link>
      </div>
    );  
}
