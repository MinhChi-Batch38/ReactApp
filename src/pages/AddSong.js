import './AddSong.css'
import Input from '../components/Input'
import {httpAddSong} from '../hooks/requests/song'

function AddSong() {
    var song = {}
    const handleOnChange = (title, value) => {
        if (title==="Song") {
            song.name = value
        }
        if (title==="Singer") {
            song.singer = value
        }
        if (title==="Genre") {
            song.genre = value
        }
        if (title==="Audio") {
            song.link = value
            console.log(song.link)
        }
    }
    const handleOnSubmit = async () => {
        if (!song.name || !song.singer || !song.genre || !song.link) {
            alert("Please provide all elements")
            return
        } 
        const res = await httpAddSong(song);
        console.log(res)
    }
    
    return (
        <div>
            
            <label className='add-song'>Add Song</label>
            <form className='form-add' onSubmit={handleOnSubmit}>
            <div className='name'>
                <Input title="Song" name="name" onChange={handleOnChange}/>
            </div>
            <div className='singer'>
                <Input title="Singer" name="singer" onChange={handleOnChange}/>
            </div>
            <div className='genre'>
                <Input title="Genre" name="genre" onChange={handleOnChange}/>
            </div>
            <div className='audio'>
                <Input title="Audio" name="link" type="file" onChange={handleOnChange}/>
            </div>
            <div className='submit'>
                <input type="submit" value="Add" className="submit"/>
            </div>
            <div className='choose-audio'>
            </div>
            </form>
        </div>
    )
}

export default AddSong