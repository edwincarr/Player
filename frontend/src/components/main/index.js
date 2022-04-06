import Audio from "../AudioPlayer"
import {useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getSongs } from "../../store/query"
import { NavLink } from "react-router-dom"
import LoginFormModal from '../LoginFormModal';

const Main =() => {
    const dispatch = useDispatch()
    const [ currentSong, setCurrentSong ] = useState(undefined)
    useEffect(() => {
        dispatch(getSongs())
    }, [dispatch])
    const songs = useSelector(state => state.query.songs)
    const sessionUser = useSelector(state => state.session.user)
    return (
        <>
        {
        songs.map(song => {
            return (
                <div key={song.id} >
                    <img onClick={() => setCurrentSong(song.url)} src={song.imageUrl} onError={(e) => e.target.src=require('../../files/default.png')} height='150px' alt={song.title}/>
                    {sessionUser? <NavLink to={`/songs/${song.id}`}>{song.title}</NavLink> : <LoginFormModal name={song.title}/>}
                </div>
            )
        })}
            <Audio currentSong={currentSong}/>
        </>
    )
}

export default Main
