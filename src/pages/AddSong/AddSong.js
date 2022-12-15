import './AddSong.css'
import Input from '../../components/Input/Input'
import { httpAddSong, httpUpload } from '../../hooks/requests/song'
import * as React from 'react';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import CancelIcon from '@mui/icons-material/Cancel';
import { useState } from 'react';
import LoadingButton from '@mui/lab/LoadingButton';
import Alert from '../../components/Alert/Alert';
//import { useNavigate } from 'react-router-dom';

function AddSong() {
    const [newSong, setNewSong] = useState({})
    //const navigate = useNavigate()
    //var song = {}
    const [failed, setFailed] = useState(false)
    const [success, setSuccess] = useState(false)
    const [addSuccessful, setAddSuccessful] = useState(true)
    const handleOnChange = (title, value) => {
        if (title === "Song") {
            // song.name = value
            setNewSong(pre => {
                pre.name = value
                return pre
            })
        }
        if (title === "Singer") {
            // song.singer = value
            setNewSong(pre => {
                pre.singer = value
                return pre
            })
        }
        if (title === "Genre") {
            // song.genre = value
            setNewSong(pre => {
                pre.genre = value
                return pre
            })
        }
        if (title === "Audio") {
            // song.link = value
            setNewSong(pre => {
                pre.link = value
                return pre
            })
        }
        console.log(newSong)
    }
    const handleOnSubmit = async () => {
        if (!newSong.link || !newSong.name || !newSong.singer || !newSong.genre) {
            alert("Please provide all elements")
            return
        }
        setAddSuccessful(false)
        setNewSong(newSong)
        const link = await httpUpload(newSong.link);
        if (link === 404) {
            setFailed("Unsupport file")
            setAddSuccessful(true)
        } else {
            if (link !== "Unsuccessfully Uploaded!") {
                newSong.link = link
                const res = await httpAddSong(newSong)
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

    const handleAlert = (state) => {
        if (state === "success") {
            setSuccess(false)
        } else {
            setFailed(false)
        }
    }

    const handleOnCancel = () => {
        setNewSong({})
        console.log(newSong)
    }

    return (
        <div>
            <label className='add-song'>Add Song</label>
            <div className='form-add'>
                {failed && <Alert failed={true} content="Fail to add songs!" onAlert={handleAlert} />}
                {success && <Alert success={true} content="Added successfully!" onAlert={handleAlert} />}
                <div className='name'>
                    <Input title="Song" name="name" value={newSong.name && newSong.name} onChange={handleOnChange} />
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
                <div className='cancel'>
                    <Button id="btn-cancel" variant="contained"
                        color="error" startIcon={<CancelIcon />} onClick={handleOnCancel}>
                        Cancel
                    </Button>
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