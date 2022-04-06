import {useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getPlayingSong, getSongs } from "../../store/song"
import { NavLink } from "react-router-dom"
import LoginFormModal from '../LoginFormModal';

const Main =() => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getSongs())
    }, [dispatch])
    const songs = useSelector(state => state.song.songs)
    const sessionUser = useSelector(state => state.session.user)
    const handleClick = async(id) => {
        dispatch(getPlayingSong(id))
    }
    return (
        <>
        {
        songs.map(song => {
            return (
                <div key={song.id} >
                    <img onClick={() => handleClick(song.id)} src={song.imageUrl} onError={(e) => e.target.src=require('../../files/default.png')} height='150px' alt={song.title}/>
                    {sessionUser? <NavLink to={`/songs/${song.id}`}>{song.title}</NavLink> : <LoginFormModal name={song.title}/>}
                </div>
            )
        })}
        </>
    )
}

export default Main
