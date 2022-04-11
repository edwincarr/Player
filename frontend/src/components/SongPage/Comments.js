import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { getComments } from "../../store/comment"
import CommentDelete from "./commentDelete"
import './comments.css'


const Comments = ({ user }) => {
    const dispatch = useDispatch()
    const {songId} = useParams()
    const comments = useSelector(state => state.comment.comments)
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(async() => {
        dispatch(getComments(songId)).then(() => setIsLoaded(true))
    },[dispatch])

    return (
        <div className="comment-container">
        {isLoaded && comments?.map(comment => {
            return (
                <div className='comment' key={comment?.id}>
                    <h3 >{comment?.body}</h3>
                    <p>{comment?.User.username}</p>
                    {user?.id === comment?.User.id? <CommentDelete songId={songId} commentId={comment?.id}/> :null}
                </div>
            )
        })}
        </div>
    )
}
export default Comments
