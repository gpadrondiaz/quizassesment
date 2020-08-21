import Axios from 'axios';
import { Dispatch } from 'react';
import { BaseAction } from 'redux-actions';
import * as QuizConstants from '../constants/QuizConstants';

interface IResult {
    result: any;
}

const API_URL = 'http://localhost:4000/api/questions';

const getQuestionsStart = () => ({
  type: QuizConstants.QUIZ_QUESTIONS_GET_REQUESTED,
});

const getQuestionsError = () => ({
  type: QuizConstants.QUIZ_QUESTIONS_GET_ERROR,
});

const getQuestionsSuccessful = (results: IResult) => ({
  type: QuizConstants.QUIZ_QUESTIONS_GET_SUCCESSFUL,
  payload: results,
});

export function getTriviaQuestions(dispatch: Dispatch<BaseAction>) {
  dispatch(getQuestionsStart());

  return Axios.get(API_URL)
    .then(response => response.data)
    .then(data => dispatch(getQuestionsSuccessful(data)))
    .catch(() => getQuestionsError());
}

export function setAnswer (answer: string, index: number) {
  return { 
      type: QuizConstants.QUIZ_SET_ANSWER,
      answer,
      index
  }
}
