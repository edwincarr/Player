import Audio from "../AudioPlayer"
import {useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getSongs } from "../../store/query"
import Delete from "../Delete"
import { NavLink } from "react-router-dom"


const Main =() => {
    const dispatch = useDispatch()
    const [ currentSong, setCurrentSong ] = useState(undefined)
    useEffect(() => {
        dispatch(getSongs())
    }, [dispatch])
    const songs = useSelector(state => state.query.songs)
    return (
        <>
        {
        songs.map(song => {
            return (
                <div key={song.id} >
                    <img onClick={() => setCurrentSong(song.url)} src={song.imageUrl} height='150px'/>
                    <NavLink to={`/songs/${song.id}`}>{song.title}</NavLink>
                </div>
            )
        })}
            <Audio currentSong={currentSong}/>
        </>
    )
}

export default Main
