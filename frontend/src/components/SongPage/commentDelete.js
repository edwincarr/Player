import { useDispatch } from "react-redux"
import { deleteComment } from "../../store/comment"

const CommentDelete = ({ commentId, songId }) => {
    const dispatch = useDispatch()
    const handleClick = () => {
        const payload = {
            commentId,
            songId
        }
        dispatch(deleteComment(payload))
    }
    return (
        <div onClick={handleClick}>Delete</div>
    )
}
export default CommentDelete
