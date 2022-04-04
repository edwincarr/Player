import './index.css'
import { useDispatch, useSelector } from 'react-redux'
import { getSongs } from '../../store/query'

const AudioPlayer = () => {
    const dispatch = useDispatch()
    const click = () => {
        dispatch(getSongs())
    }
    const songsO = useSelector(state => state.query.songs)
    console.log(songsO)
    return (
        <div className="player">
            <audio controls>
                <source src={require('../../files/AllFallsDown.mp4')}/>
            </audio>
            <div onClick={click}>words be wording</div>
        </div>
    )
}

export default AudioPlayer
