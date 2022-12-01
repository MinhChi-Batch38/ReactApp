import './AddSong.css'
import Input from '../components/Input'
import { httpAddSong, httpUpload } from '../hooks/requests/song'
import * as React from 'react';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react';
import LoadingButton from '@mui/lab/LoadingButton';
import Alert from '../components/Alert/Alert';
//import { useNavigate } from 'react-router-dom';

function AddSong() {
    const [newSong, setNewSong] = useState({})
    //const navigate = useNavigate()
    var song = {}
    const [failed, setFailed] = useState(null)
    const [success, setSuccess] = useState(false)
    const [addSuccessful, setAddSuccessful] = useState(true)
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
        if (!song.link || !song.name || !song.singer || !song.genre) {
            alert("Please provide all elements")
            return
        }
        setAddSuccessful(false)
        setNewSong(song)
        const link = await httpUpload(song.link);
        if (link === 404) {
            setFailed("Unsupport file")
            setAddSuccessful(true)
        } else {
            if (link !== "Unsuccessfully Uploaded!") {
                song.link = link
                const res = await httpAddSong(song)
                if (res !== 201) {
                    setFailed("Can't add song")
                    setSuccess(false)
                    setAddSuccessful(true)
                } else {
                    setSuccess(true)
                    setFailed(false)
                    setNewSong({})
                    setAddSuccessful(true)
                }
            }
        }

    }

    return (
        <div>
            <label className='add-song'>Add Song</label>
            <div className='form-add'>
                {failed && <Alert/>}
                {success && <label className='success'>The song has been added!</label>}
                <div className='name'>
                    <Input title="Song" name="name" value={newSong.name} onChange={handleOnChange} />
                </div>
                <div className='singer'>
                    <Input title="Singer" name="singer" value={newSong.singer} onChange={handleOnChange} />
                </div>
                <div className='genre'>
                    <Input title="Genre" name="genre" value={newSong.genre} onChange={handleOnChange} />
                </div>
                <div className='audio'>
                    <Input title="Audio" name="link" type="file" value={newSong.link} onChange={handleOnChange} />
                </div>
                <div className='submit'>
                    {/* <button className="submit" onClick={handleOnSubmit}>Add</button>
                 */}
                    {addSuccessful && <Button variant="contained" startIcon={<AddIcon />} onClick={handleOnSubmit}>
                        Add
                    </Button>}
                    {addSuccessful || <LoadingButton
                        loading
                        loadingPosition="start"
                        startIcon={<AddIcon />}
                        variant="outlined"
                    >
                        Adding
                    </LoadingButton>}

                </div>
            </div>
        </div>
    )
}

export default AddSong