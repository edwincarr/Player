import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router-dom"
import { updateSong } from "../../store/song"

const UpdatePage = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const current = useSelector(state => state.song.currentSong)
    const [title, setTitle] = useState(current.title)
    const [imageUrl, setImageUrl] = useState(current.imageUrl)
    const [errors, setErrors] = useState([])
    const onSubmit = async(e) => {
        e.preventDefault()

        const payload = {
            id: current.id,
            title,
            imageUrl
        }
        const res = await dispatch(updateSong(payload))
        if(res === 'success'){
            history.push(`/songs/${current.id}`)
        }else{
            setErrors(res)
        }
    }
    return (
        <form className='uploadForm' onSubmit={onSubmit}>
        <ul className="errors">
          {errors && errors.map((error, idx) => <li key={idx}>{error}</li>)}
        </ul>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            placeholder="Title"
          />
          <input
            type='text'
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            required
            placeholder="ImageUrl"
          />
        <button type="submit">Update</button>
      </form>
    )
}
export default UpdatePage
