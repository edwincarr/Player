import { csrfFetch } from './csrf'

const LIKED = '/like/isLiked'

const isLiked = (data) => {
    return {
        type: LIKED,
        payload: data
    }
}

export const like = (payload) => async dispatch => {
    const response = await csrfFetch(`/api/like/new`,{
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(payload)
    })
    const data = await response.json()
    return data
  }

  export const isLikedFunc = (payload) => async dispatch => {
    const response = await csrfFetch(`/api/like/isLiked`,{
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(payload)
    })
    const data = await response.json()
    if(data === 'isLiked'){
        dispatch(isLiked(true))
    }else{
        dispatch(isLiked(false))
    }
    return data
  }

  const initialState = { isLiked:{}};

  const LikeReducer = (state = initialState, action) => {
      let newState
      switch(action.type){
          case LIKED:
              newState = {...state}
              newState.isLiked = action.payload
              return newState
          default:
              return state
      }
  }

  export default LikeReducer
