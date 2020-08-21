import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { App } from './client/components/App';
import { Questions } from './client/components/Questions';
import { Result } from './client/components/Result';
import configureStore from './client/stores/Store';

import './styles/index.scss';

class TriviaApp extends React.Component {
  render() {
    return (
      <div className="index">
        <Switch>
          <Redirect to="/home" from="/" exact />
          <Route exact path="/home">
            <App />
          </Route>
          <Route path="/questions">
            <Questions />
          </Route>
          <Route path="/result">
            <Result />
          </Route>
          <Redirect to="/home" />
        </Switch>
      </div>
    );
  }
}

const store = configureStore();
ReactDOM.render(
    <Provider store={store}>
        <Router>
            <TriviaApp />
        </Router>
    </Provider>,
    document.getElementById('root')
);
