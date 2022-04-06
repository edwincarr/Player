import { NavLink } from "react-router-dom"


const Update = ({ songId }) => {
    return (
        <NavLink to={`/update/${songId}`} >Update</NavLink>
    )
}
export default Update
