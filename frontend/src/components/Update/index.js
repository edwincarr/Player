import { NavLink, useParams } from "react-router-dom"


const Update = ({ songId}) => {
    const update = async(id) => {
        
    }
    return (
        <NavLink to={`/update/${songId}`} onClick={() => update(songId)}>Update</NavLink>
    )
}
export default Update
