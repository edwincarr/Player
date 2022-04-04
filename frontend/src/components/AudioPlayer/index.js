import './index.css'

const AudioPlayer = () => {
    
    return (
        <div className="player">
            <audio controls>
                <source src={require('../../files/AllFallsDown.mp4')}/>
            </audio>
        </div>
    )
}

export default AudioPlayer
