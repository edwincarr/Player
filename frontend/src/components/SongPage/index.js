import { useEffect, useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { useParams } from 'react-router-dom'
import { getSong } from '../../store/song'
import Delete from '../Delete'
import Update from '../Update'
import LikeButton from './LikeButton'
import { isLikedFunc } from '../../store/like'

const SongPage = () => {
    const dispatch = useDispatch()
    const { songId } = useParams()
    const current = useSelector(state=> state.song.currentSong)
    const sessionUser = useSelector(state => state.session.user)
    useEffect(async() => {
        dispatch(getSong(songId))
        const payload = {
            userId: sessionUser.id,
            songId: songId
        }
        dispatch(isLikedFunc(payload))
    },[dispatch])
    const isLiked = useSelector(state=>state.like.isLiked)
    return (
        <>
            <h1>{current.title}</h1>
            <img src={current.imageUrl} onError={(e) => e.target.src=require('../../files/default.png')} height='400px'/>
            {current.userId === sessionUser.id?
            <>
                    <Delete songId={current.id}/>
                    <Update songId={current.id}/>
            </>
            :
                    null
                }
                <LikeButton isLiked={isLiked} id={current.id}/>
        </>

    )

}
export default SongPage
