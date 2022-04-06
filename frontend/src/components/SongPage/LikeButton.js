
import { useDispatch, useSelector } from 'react-redux'
import {like } from '../../store/like'
import './LikeButton.css'

const LikeButton = ({isLiked, id}) => {
    const dispatch = useDispatch()
    const currentUser = useSelector(state => state.session.user)

    const handleClick = async(id) => {
        const payload = {
            userId: currentUser.id,
            songId: id
        }
        dispatch(like(payload))
    }
        return (
            <i style={isLiked ? {"color":"red"}:{"color":"white"}} className="fa-solid fa-heart fa-2x" onClick={() => handleClick(id)}></i>
        )


}
export default LikeButton
