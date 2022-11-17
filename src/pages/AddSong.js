import './AddSong.css'
import Input from '../components/Input'
import { httpAddSong, httpUpload } from '../hooks/requests/song'
import * as React from 'react';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

function AddSong() {
    var song = {}
    const handleOnChange = (title, value) => {
        if (title === "Song") {
            song.name = value
        }
        if (title === "Singer") {
            song.singer = value
        }
        if (title === "Genre") {
            song.genre = value
        }
        if (title === "Audio") {
            song.link = value

        }
    }
    const handleOnSubmit = async () => {
        console.log(song.link)
        if (!song.link) {
            alert("Please provide all elements")
            return
        }
        const link = await httpUpload(song.link);
        console.log(link)
        if (link !== "Unsuccessfully Uploaded!") {
            song.link = link
            const res = await httpAddSong(song)
            console.log(res)
        }

    }

    return (
        <div>
            <label className='add-song'>Add Song</label>
            <div className='form-add'>
            <div className='name'>
                <Input title="Song" name="name" onChange={handleOnChange} />
            </div>
            <div className='singer'>
                <Input title="Singer" name="singer" onChange={handleOnChange} />
            </div>
            <div className='genre'>
                <Input title="Genre" name="genre" onChange={handleOnChange} />
            </div>
            <div className='audio'>
                <Input title="Audio" name="link" type="file" onChange={handleOnChange} />
            </div>
            <div className='submit'>
                {/* <button className="submit" onClick={handleOnSubmit}>Add</button>
                 */}
                <Button variant="contained" endIcon={<SendIcon />} onClick={handleOnSubmit}>
                    Add
                </Button>
            </div>
            </div>
        </div>
    )
}

export default AddSong