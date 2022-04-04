import Audio from "../AudioPlayer"
import {useEffect, useState } from "react"

const Main =({songs}) => {
    const [ currentSong, setCurrentSong ] = useState(null)
    useEffect(() => {

    },[currentSong])
    return (
        <>
            <Audio currentSong={currentSong}/>
        </>
    )
}

export default Main
