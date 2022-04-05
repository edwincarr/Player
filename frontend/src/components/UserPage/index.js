import { useParams } from "react-router-dom"


const UserPage = () => {
    const { userId } = useParams()


    return (
        <h1>account Stuff</h1>
    )
}
export default UserPage
