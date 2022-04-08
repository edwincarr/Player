import AudioPlayer from 'react-h5-audio-player'
import 'react-h5-audio-player/lib/styles.css';
import { useSelector } from 'react-redux';
import './index.css'

const Audio = () => {
    const song = useSelector(state => state.song.playingSong)
    return (
        <div className="player">
            <div className='songinfo'>
                <img src={song.imageUrl} height='50px'/>
                <p>{song.title}</p>
            </div>
            <AudioPlayer customAdditionalControls={[]} layout="horizontal-reverse" src={song.url}/>
        </div>
    )
}

export default Audio
