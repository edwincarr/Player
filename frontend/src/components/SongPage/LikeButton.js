
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {isLikedFunc, like } from '../../store/like'
import './LikeButton.css'

const LikeButton = ({isLiked, id}) => {
    const dispatch = useDispatch()
    const currentUser = useSelector(state => state.session.user)
    const [style,setStyle] = useState(isLiked? {'color':'red'}:{'color': 'white'})

    const handleClick = async(id) => {
        const payload = {
            userId: currentUser.id,
            songId: id
        }
            let data = await dispatch(like(payload))
            if(data === 'isLiked'){
                setStyle({'color':'white'})
            }else{
                setStyle({'color':'red'})
            }
    }
        return (
            <>
                <i style={ style } className={`fa-solid fa-heart fa-2x`} onClick={() => handleClick(id)}></i>
            </>
        )


}
export default LikeButton
