import { csrfFetch } from './csrf'


const SONGS = '/song/songs'
const SONG = '/song/song'
const PLAYING = '/song/playing'
const CLEAR = '/song/clear'

const songs = (data) => {
    return {
        type: SONGS,
        payload: data
    }
}

const song = (data) => {
  return {
    type: SONG,
    payload: data
  }
}

const playingSong = (data) => {
  return {
    type: PLAYING,
    payload: data
  }
}

export const clearCurrent = () => {
  return {
    type: CLEAR
  }
}

export const getSongs = () => async dispatch => {
    const response = await csrfFetch('/api/song/')
    const data = await response.json()
    dispatch(songs(data))
  };

  export const postSong = (payload) => async dispatch => {
    const response = await csrfFetch('/api/song/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify(payload)
    })
    const data = await response.json()
    return data
  }

  export const delSong = (payload) => async dispatch => {
    const response = await csrfFetch('/api/song/delete',{
      method: 'DELETE',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(payload)
    })
    const data = await response.json()
    return data
  }

  export const getSong = (payload) => async dispatch => {
    const response = await csrfFetch(`/api/song/${payload}`)
    const data = await response.json()
    dispatch(song(data))
    return data
  }

  export const updateSong = (payload) => async dispatch => {
    const response = await csrfFetch(`/api/song/${payload.id}`,{
      method: 'PUT',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(payload)
    })
    const data = await response.json()
    return data
  }


  export const getPlayingSong = (payload) => async dispatch => {
    const response = await csrfFetch(`/api/song/${payload}`)
    const data = await response.json()
    dispatch(playingSong(data))
    return data
  }


  const initialState = { songs: [], currentSong: {}, playingSong: {}};

const songReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case SONGS:
        newState = {...state}
        newState.songs = action.payload
        return newState
    case SONG:
        newState = {...state}
        newState.currentSong = action.payload
        return newState
    case PLAYING:
      newState = {...state}
      newState.playingSong = action.payload
      return newState
    case CLEAR:
      newState = {...state}
      newState.currentSong = {}
      return newState
    default:
      return state;
  }
};

export default songReducer;
