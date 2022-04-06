import { useEffect, useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { useParams } from 'react-router-dom'
import { getSong } from '../../store/query'
import Delete from '../Delete'
import Update from '../Update'

const SongPage = () => {
    const dispatch = useDispatch()
    const { songId } = useParams()
    useEffect(async() => {
        const res = await dispatch(getSong(songId))
    },[dispatch])
    const current = useSelector(state=> state.query.currentSong)
    const sessionUser = useSelector(state => state.session.user)
    return (
        <>
            <h1>{current.title}</h1>
            <img src={current.imageUrl}/>
            {current.userId === sessionUser.id?
            <>
                    <Delete songId={current.id}/>
                    <Update songId={current.id}/>
            </>
            :
                    null
                }
        </>

    )

}
export default SongPage
