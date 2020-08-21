import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from "react-router-dom";
import Loader from 'react-loader-spinner';
import * as QuizActions from '../actions/QuizActions';
import * as QuizConstants from '../constants/QuizConstants';


interface StateProps {
    questions: Array<QuizConstants.Question>;
    loading: Boolean;
}

export const App = () => {
    const dispatch = useDispatch();
    const loading = useSelector((store: StateProps) => store.loading);
    const history = useHistory();

    function handleClick() {
        history.push("/questions");
    }

    useEffect(() => {
        dispatch(QuizActions.getTriviaQuestions);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (loading === true) {
        return (
          <div className="home">
            <Loader type="TailSpin" color="#3cf" />
            <p>Loading Quiz</p>
          </div>
        );
    } else {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h1>Lucid</h1>
            <h2>Welcome to UI Team code assessment!</h2>
            <div className='col-xs-12  col-sm-12 col-md-12 col-lg-12'>
                <button className="quiz-button" onClick={handleClick}>
                    Start
                </button>
            </div>
        </div>
        )
    }
}
