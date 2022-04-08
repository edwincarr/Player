import { useEffect, useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { Redirect, useParams } from 'react-router-dom'
import { getSong } from '../../store/song'
import Delete from '../Delete'
import Update from '../Update'
import LikeButton from './LikeButton'
import { isLikedFunc, likeCounter } from '../../store/like'
import { getPlayingSong } from '../../store/song'
import './SongPage.css'
import Comments from './Comments'
import PostComment from './postComment'

const SongPage = () => {
    const dispatch = useDispatch()
    const { songId } = useParams()
    const current = useSelector(state=> state.song.currentSong)
    const sessionUser = useSelector(state => state.session.user)
    const isLiked = useSelector(state=>state.like.isLiked)
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(async() => {
        dispatch(getSong(songId))
        const payload = {
            userId: sessionUser.id,
            songId: songId
        }
        dispatch(isLikedFunc(payload))
        .then(()=> setIsLoaded(true))
    },[dispatch])

    const handleClick = async(id) => {
        dispatch(getPlayingSong(id))
    }
    if(sessionUser){

        return (
            <div className='songpage'>
            <h1>{current.title}</h1>
            <img onClick={() => handleClick(current.id)} src={current.imageUrl} onError={(e) => e.target.src=require('../../files/default.png')} height='400px'/>
            {current?.userId === sessionUser?.id?
            <div className='ifOwned'>
                    <Delete songId={current?.id}/>
                    <Update songId={current?.id}/>
            </div>
            :
                    null
                }
                <div className='interactions'>
                    {isLoaded && <LikeButton isLiked={isLiked} id={current?.id}/>}
                    <PostComment user={sessionUser} />
                </div>
                    <Comments user={sessionUser}/>
        </div>

)
}else {
    return <Redirect to='/'/>
}

}
export default SongPage
