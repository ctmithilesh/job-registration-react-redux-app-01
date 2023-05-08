import { FETCH_USER_DATA, SUBMIT_FORM_DATA } from "../actions/types";

const initialState = {
    form: []
}

const formReducer = (state = initialState, action) => {


    const newState = {...state}

    switch(action.type){


            case SUBMIT_FORM_DATA:
                console.log('SUBMIT_FORM_DATA')
                return{
                    ...newState,
                    form: [action.payload]
                }
            case FETCH_USER_DATA:
                console.log('FETCH_USER_DATA')
                return{
                    ...newState,

                }
            default:
                return newState

    }

}
export default formReducer;