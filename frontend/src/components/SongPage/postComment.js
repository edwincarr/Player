import { useState } from "react"
import { useDispatch } from "react-redux"
import { useParams } from "react-router-dom"
import { postComment } from "../../store/comment"
import './comments.css'


const PostComment =({ user }) => {
    const [comment, setComment] = useState('')
    const dispatch = useDispatch()
    const {songId} = useParams()

    const submitHandler = (e) => {
        e.preventDefault()
        const payload = {
            songId:songId,
            userId: user?.id,
            body:comment
        }
        dispatch(postComment(payload)).then(() => setComment(''))
    }

    return (
        <form onSubmit={(e) => submitHandler(e)}>
            <input
            placeholder="post a comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            ></input>
            <button type="submit">Post</button>
        </form>
    )
}
export default PostComment
