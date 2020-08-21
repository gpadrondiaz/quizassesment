import React, { useState, useEffect } from 'react'
import _ from 'lodash';
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from "react-router-dom";
import * as QuizActions from '../actions/QuizActions';
import * as QuizConstants from '../constants/QuizConstants';
import { AllHtmlEntities } from 'html-entities';

import '../../styles/question.scss';

const entities = new AllHtmlEntities();

interface StateProps {
    questions: Array<QuizConstants.Question>;
    questionIndex: number;
}

interface QuestionProps {
    question : string;
    type : string;
    options: Array<string>;
    answerQuestion: (value: string) => void;
}

const Question: React.FunctionComponent<QuestionProps> = (props) => {
    const [answer, setAnswer] = useState('');

    const answerQuestion = (answer: string): void => {
        setAnswer('');
        props.answerQuestion(answer);
    };

    return (
      <div className="question">
        <h1>{entities.decode(props.question)}</h1>
        <div className="options">
            { props.type === 'text' 
                ? <input type="text" value={answer} onChange={(event) => setAnswer(event.target.value)} />
                : props.options.map((option) =>  <label><input type="radio" value={option} checked={option === answer} onChange={() => setAnswer(option)} />{entities.decode(option)}</label>) 
            }
        </div>
        <div className="response">
          <button disabled= {props.type !== 'text'&& answer === ''} className="quiz-button" onClick={() => answerQuestion(answer)}>
            Next
          </button>
         </div>
      </div>
    );
};

export const Questions = () => {
    const dispatch = useDispatch();
    const questions = useSelector((store: StateProps) => store.questions || []);
    const questionIndex = useSelector((store: StateProps) => store.questionIndex);
    let type: string = '', question: string = '', incorrect_answers, correct_answer, options: Array<string> = []; 

    if (!_.isEmpty(questions)) {
        const quizQuestion = questions[questionIndex];
        type = quizQuestion.type;
        question = quizQuestion.question;
        incorrect_answers = quizQuestion.incorrect_answers;
        correct_answer = quizQuestion.correct_answer;
        options = type !== 'text' ? _.shuffle([correct_answer, ...incorrect_answers]) : []
    }

    const history = useHistory();
    useEffect(() => {
        if (_.isEmpty(questions)) {
            history.push('/home');
        } 
    });
   

    const answerQuestion = (answer: string): void => {
        dispatch(QuizActions.setAnswer(answer, questionIndex));
        if (questionIndex === QuizConstants.QUESTION_NUMBERS - 1) {
            history.push('/result');
        }
    };

    return (
        <Question question={question} type={type} options={options} answerQuestion={answerQuestion} />
    )
}