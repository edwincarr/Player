import { csrfFetch } from './csrf'


const SONGS = '/query/songs'

const songs = (data) => {
    return {
        type: SONGS,
        payload: data
    }
}

export const getSongs = () => async dispatch => {
    const response = await csrfFetch('/api/query/songs')
    const data = await response.json()
    dispatch(songs(data))
  };

  export const postSong = (payload) => async dispatch => {
    const response = await csrfFetch('/api/query/songs', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify(payload)
    })
    const data = await response.json()
    return data
  }

  export const delSong = (payload) => async dispatch => {
    const response = await csrfFetch('/api/query/delete',{
      method: 'DELETE',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(payload)
    })
    const data = await response.json()
    dispatch(getSongs())
    return data
  }

  const initialState = { songs: [] };

const queryReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case SONGS:
        newState = {...state}
        newState.songs = action.payload
        return newState
    default:
      return state;
  }
};

export default queryReducer;
