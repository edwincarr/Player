import AudioPlayer from 'react-h5-audio-player'
import 'react-h5-audio-player/lib/styles.css';
import './index.css'

const Audio = ({currentSong}) => {
    return (
        <div className="player">
            <AudioPlayer controls src={require('../../files/AllFallsDown.mp4')}/>
        </div>
    )
}

export default Audio
