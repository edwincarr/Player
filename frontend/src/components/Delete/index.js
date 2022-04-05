import { useDispatch } from "react-redux"
import { NavLink, useHistory } from "react-router-dom"
import { delSong } from "../../store/query"

const Delete = ({songId}) => {
    const dispatch = useDispatch()
    const history = useHistory()
    const del = async(id) => {
        const payload = {
            id: id
        }
        const res = await dispatch(delSong(payload))
        if(res === 'success'){
            console.log('YASSSS')
        }
    }
    return (
        <>
            <h3 onClick={() => del(songId)}>Delete</h3>
        </>
    )
}
export default Delete
