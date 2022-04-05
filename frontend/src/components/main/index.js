import Audio from "../AudioPlayer"
import {useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getSongs } from "../../store/query"
import Delete from "../Delete"


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
                    <img onClick={() => setCurrentSong(song.url)} src={song.imageUrl} height='150px'/>
                    {/* <NavLink to={`/songs/${song.id}`}>{song.title}</NavLink>
                    <NavLink to={`/users/${song.User.id}`} >{song.User.username}</NavLink> */}
                    {song.userId === sessionUser?.id?
                    <Delete songId={song.id}/>:
                    null
                }
                </div>
            )
        })}
            <Audio currentSong={currentSong}/>
        </>
    )
}

export default Main
