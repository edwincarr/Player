import Audio from "../AudioPlayer"
import {useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getSongs } from "../../store/query"

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
            return <img onClick={() => setCurrentSong(song.url)} src={song.imageUrl} key={song.id} height='300px'/>
        })}
            <Audio currentSong={currentSong}/>
        </>
    )
}

export default Main
