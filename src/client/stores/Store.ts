import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import quiz from '../reducers/quiz';

function configureStore() {
  const enhancer = compose(applyMiddleware(thunkMiddleware));
  return createStore(quiz, enhancer);
}

export default configureStore;
