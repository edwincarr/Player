import { csrfFetch } from "./csrf";

const COMMENTS = '/comment/comments'

const comments = (payload) => {
    return {
        type: COMMENTS,
        payload
    }
}


export const getComments = (payload) => async dispatch => {
    const response = await csrfFetch(`/api/comments/${payload}`)
    const data = await response.json()
    dispatch(comments(data))
    return data
}

export const postComment = (payload) => async dispatch => {
    const response = await csrfFetch(`/api/comments/${payload.songId}`,{
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(payload)
    })
    const data = await response.json()
    if(data.msg){

    }else{
        dispatch(getComments(data.songId))
    }
}

const initialState = {comments:{}}

const commentReducer = (state = initialState, action) => {
    let newState
    switch(action.type){
        case COMMENTS:
            newState = {...state}
            newState.comments = action.payload
            return newState
        default:
            return state
    }
}

export default commentReducer
