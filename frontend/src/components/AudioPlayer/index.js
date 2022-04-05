import AudioPlayer from 'react-h5-audio-player'
import './index.css'

const Audio = ({currentSong}) => {
    return (
        <div className="player">
            <AudioPlayer controls src={currentSong}/>
        </div>
    )
}

export default Audio
