import { SUBMIT_FORM_DATA } from "./types"

export const setFormData = (dispatch, data) => {

    dispatch({
        type:SUBMIT_FORM_DATA,
        payload: data
    })
}