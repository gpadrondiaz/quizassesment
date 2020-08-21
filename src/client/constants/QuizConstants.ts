export const QUIZ_QUESTIONS_GET_REQUESTED = 'QUIZ_QUESTIONS_GET_REQUESTED';
export const QUIZ_QUESTIONS_GET_ERROR = 'QUIZ_QUESTIONS_GET_ERROR';
export const QUIZ_QUESTIONS_GET_SUCCESSFUL = 'QUIZ_QUESTIONS_GET_SUCCESSFUL';
export const QUIZ_SET_ANSWER = 'QUIZ_SET_ANSWER';
export const QUESTION_NUMBERS = 10;

export interface Question {
    category: string;
    type: string;
    difficulty: string;
    question: string;
    correct_answer: string;
    incorrect_answers: Array<string>;
    isCorrect: true | false | undefined;
  }
  
export interface InitialState {  
    loading: boolean,
    questions: Array<Question>,
    questionIndex: number,
    score: number,
};
