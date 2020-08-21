import _ from 'lodash';
import * as QuizConstants from '../constants/QuizConstants';

const initialState: QuizConstants.InitialState = {
  loading: false,
  questions: [],
  questionIndex: 0,
  score: 0,
};

export default (state = initialState, action: any) => {
  const {
    type,
    payload,
    answer,
    index,
  } = action;

  switch (type) {
    case QuizConstants.QUIZ_QUESTIONS_GET_REQUESTED: {
      return {
        ...state,
        loading: true,
      };
    }
    case QuizConstants.QUIZ_QUESTIONS_GET_ERROR: {
      return {
        ...state,
        loading: false,
      };
    }
    case QuizConstants.QUIZ_QUESTIONS_GET_SUCCESSFUL: {
      const quizQuestions = _.shuffle(payload.results);
      const questions = _.take(quizQuestions, QuizConstants.QUESTION_NUMBERS);
      return {
        ...state,
        loading: false,
        questions,
        questionIndex: 0,
      };
    }
    case QuizConstants.QUIZ_SET_ANSWER: {
      let { questionIndex, score } = state;
      let questions: Array<QuizConstants.Question> = state.questions;
      const isCorrect = questions[index].correct_answer === answer;

      if (index < questions.length - 1) {
        questionIndex = index + 1;
      }
      questions = [
        ...questions.slice(0, index),
        {
          ...questions[index],
          isCorrect,
        },
        ...questions.slice(index + 1),
      ];

      if (isCorrect) {
        score += 1;
      }

      return {
        ...state,
        questionIndex,
        questions,
        score,
      };
    }
    default:
      return state;
  }
};
