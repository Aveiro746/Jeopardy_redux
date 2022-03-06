import {FETCH_START,FETCH_FAIL, QUESTIONS_FETCH_COMPLETE} from "../actions/actions"
let initialState = {
    //fill in state here
}

export function reducer(state=initialState, action){
    switch(action.type){
        case FETCH_START: 
            return{
                ...state, isFetching: true , category: state.category.title, //Work on these         error: ""
            }
        case FETCH_FAIL:
            return{
                ...state, isFetching: false //copy rest from fetch start                             error: action.payload
            }

        // case QUESTIONS_FETCH_COMPLETE 
        default:
            return state
    }
}

