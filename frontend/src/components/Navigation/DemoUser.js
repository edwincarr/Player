import { useDispatch } from "react-redux"
import { login } from '../../store/session'

const DemoUser = () => {
    const dispatch = useDispatch()
    const handleClick = () => {
        const payload = {
            credential : 'Demo-lition',
            password: 'password'
        }
        dispatch(login(payload))
    }
    return (
        <>
            <div className="navlinks" onClick={handleClick}>Demo</div>
        </>
    )
}
export default DemoUser
