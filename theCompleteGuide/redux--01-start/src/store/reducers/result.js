import * as actionTypes from '../actions';

const initialState = {
    results: []
};

const reducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.STORE_RESULT:
            return {
                ...state,
                results: state.results.concat(state.counter)
            }
        case actionTypes.DELETE_RESULT:
            return {
                ...state,
                counter: state.counter -1 
            }
        default: 
            return state
    }
};

export default reducer;