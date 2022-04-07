import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { getComments, postComment } from "../../store/comment"
import './comments.css'


const Comments = ({ user }) => {
    const [comment, setComment] = useState('')
    const dispatch = useDispatch()
    const {songId} = useParams()
    const comments = useSelector(state => state.comment.comments)
    const [isLoaded, setIsLoaded] = useState(false)

    const submitHandler = (e) => {
        e.preventDefault()
        const payload = {
            songId:songId,
            userId: user?.id,
            body:comment
        }
        dispatch(postComment(payload)).then(() => setComment(''))
    }
    useEffect(async() => {
        dispatch(getComments(songId)).then(() => setIsLoaded(true))
    },[dispatch])

    return (
        <>
        <form onSubmit={(e) => submitHandler(e)}>
            <input
            placeholder="post a comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            ></input>
            <button type="submit">Post</button>
        </form>
        {isLoaded && comments?.map(comment => {
            return (
                <div className='comment' key={comment?.id}>
                    <h3 >{comment?.body}</h3>
                    <p>{comment?.User.username}</p>
                    {user?.id === comment?.User.id? <><p>Delete</p><p>update</p></>:null}
                </div>
            )
        })}
        </>
    )
}
export default Comments
