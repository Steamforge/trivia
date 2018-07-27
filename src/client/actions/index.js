import * as types from './actionTypes';

export const fetchQuestionsSuccess = questions => ({
    type: types.FETCH_QUESTIONS_SUCCESS,
    questions,
});

export function fetchQuestions(url) {
    console.log('fetchQuestions');
    return (dispatch) => {
        return fetch(url)
            .then(res => res.json())
            .then((data) => {
                console.log('data', data);
                dispatch(fetchQuestionsSuccess(data.results));
                return data.results;
            })
            .catch((err) => {
                throw err;
            });
    };
}
