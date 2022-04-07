import { useDispatch, useSelector } from "react-redux"
import { clearCurrent, getPlayingSong, getSongs} from "../../store/song"
import { NavLink } from "react-router-dom"
import LoginFormModal from '../LoginFormModal';
import './main.css'
import { useEffect } from "react";

const Main =() => {
    const dispatch = useDispatch()
    const songs = useSelector(state => state.song.songs)
    const sessionUser = useSelector(state => state.session.user)
    useEffect(() => {
        dispatch(getSongs())
        dispatch(clearCurrent())
    },[dispatch])
    const handleClick = async(id) => {
        dispatch(getPlayingSong(id))
    }
    return (
        <div className="body">
        <img src={require('../../files/gradient.jpg')} id='welcomeGradient' alt="LOL"/>
        <h1>Discover New Music...</h1>
        <div className='main'>
        {
            songs.map(song => {
                return (
                    <div key={song.id} className='song-block'>
                    <img onClick={() => handleClick(song.id)} src={song.imageUrl} onError={(e) => e.target.src=require('../../files/default.png')} height='150px' width='150px' alt={song.title}/>
                    {sessionUser? <NavLink to={`/songs/${song.id}`}>{song.title}</NavLink> : <LoginFormModal name={song.title}/>}
                    <p>{song.User.username}</p>
                </div>
            )
        })}
        </div>
        </div>
    )
}

export default Main
