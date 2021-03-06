import AudioPlayer from 'react-h5-audio-player'
import 'react-h5-audio-player/lib/styles.css';
import { useSelector } from 'react-redux';
import LoginFormModal from '../LoginFormModal';
import { NavLink } from 'react-router-dom';
import './index.css'

const Audio = () => {
    const song = useSelector(state => state.song.playingSong)
    const sessionUser = useSelector(state => state.session.user)
    return (
        <div className="player">
            <div className='songinfo'>
                <img src={song.imageUrl} onError={(e) => e.target.src=require('../../files/default.png')} height='50px'/>
                {sessionUser? <NavLink to={`/songs/${song.id}`}>{song.title}</NavLink> : <LoginFormModal name={song.title}/>}
            </div>
            <AudioPlayer customAdditionalControls={[]} layout="horizontal-reverse" src={song.url}/>
        </div>
    )
}

export default Audio
