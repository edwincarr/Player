import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Redirect, useHistory } from "react-router-dom"
import { postSong } from "../../store/song"

const Upload = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const [title, setTitle] = useState('')
    const [url, setUrl ] = useState('')
    const [imageUrl, setImageUrl ] = useState('')
    const [ errors, setErrors ] = useState([])
    const sessionUser = useSelector(state => state.session.user);
    const onSubmit = async(e) => {
        e.preventDefault()

        const payload = {
            title,
            url,
            imageUrl,
            userId: sessionUser.id
        }

        const res = await dispatch(postSong(payload))

        if(res.id){

        }
        setErrors(res)
    }
    if(sessionUser){
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
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                required
                placeholder="Url"
              />
              <input
                type='text'
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
                required
                placeholder="ImageUrl"
              />
            <button type="submit">Upload</button>
          </form>
        )
    }else{
        return (
            <Redirect to='/'/>
        )
    }
}
export default Upload
