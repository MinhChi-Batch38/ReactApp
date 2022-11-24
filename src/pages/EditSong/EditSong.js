import { useState } from "react"
import MusicPlayerSlider from "../../components/PlayMusic/MusicPlayerSlider"
import './EditSong.css'
import EditIcon from '@mui/icons-material/Edit';
import LoadingButton from '@mui/lab/LoadingButton';
import Button from '@mui/material/Button';
import CancelIcon from '@mui/icons-material/Cancel';
import { useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { httpEditSong } from "../../hooks/requests/song";

function EditInput({ title, value, onChange, defaultValue }) {
    return (
        <Box
            sx={{
                width: 500,
                maxWidth: '100%',   
                
            }}
        >
            <TextField fullWidth label={title} pattern="[A-Za-z]" onChange={(e) => onChange(title, e.target.value)} value={value} required />
        </Box>
    )
}

export default function EditSong() {


    const song = useSelector(state => state.audio)
    const [editSong, setEditSong] = useState(song)
    var actualSong = song
    const [editSuccessful, setEditSuccessful] = useState(true)
    const [success, setSuccess] = useState(false)
    const [failed, setFailed] = useState(false)

    const handleOnChange = (title, value) => {
        if (title === "Song") {
            actualSong.name = value   
            setEditSong(actualSong)
        }
        if (title === "Singer") {
           actualSong.singer = value
        }
        if (title === "Genre") {
            actualSong.genre = value
        }
    }
    const handleOnSubmit = async () => {
        if (!actualSong.name || !actualSong.singer || !actualSong.genre || !actualSong.link) {
            alert("Please provide all elements")
            return
        }
        if (actualSong.name.lenght > 1) {
            alert("Name is too long!")
        }
        setEditSuccessful(false)
            const res = await httpEditSong(actualSong)
            if (res !== 200) {
                setFailed(true)
                setSuccess(false)
                setEditSuccessful(true)
            } else {
                setSuccess(true)
                setFailed(false)
                setEditSong(actualSong)
                setEditSuccessful(true)
            }
        
    }
    
    const handleOnCancel = () => {
        setEditSong(song)
        actualSong = song
    }

    return (
        <div className="edit-page">
            <div className="music-player">
                <MusicPlayerSlider song={song} />
            </div>
            <div className="form-edit-song">
                {failed && <div className="item-item"><label className='failed'>Something's wrong! Please try again</label></div>}
                {success && <div className="item-item"><label className='success'>The song has been edited!</label></div>}
                <div className="item-item">
                    {/* <Input title="Song" name="name" value={editSong.name} onChange={handleOnChange} /> */}
                    <EditInput title="Song" value={editSong.name} onChange={handleOnChange}/>
                </div>
                <div className="item-item">
                    {/* <Input title="Singer" name="singer" value={editSong.singer} onChange={handleOnChange} /> */}
                    <EditInput title="Singer" value={editSong.singer} onChange={handleOnChange}/>
                </div>
                <div className="item-item">
                    {/* <Input title="Genre" name="genre" value={editSong.genre} onChange={handleOnChange} /> */}
                    <EditInput title="Genre" value={editSong.genre} onChange={handleOnChange}/>
                </div>
                <div >
                    <Button id="btn-cancel" variant="contained" color="error" startIcon={<CancelIcon />} onClick={handleOnCancel}>
                        Cancel
                    </Button>
                    {editSuccessful && <Button id="btn-edit" variant="contained" startIcon={<EditIcon />} onClick={handleOnSubmit}>
                        Save
                    </Button>}
                    {editSuccessful || <LoadingButton
                        id="btn-edit"
                        loading
                        loadingPosition="start"
                        startIcon={<EditIcon />}
                        variant="outlined"
                    >
                        Saving
                    </LoadingButton>}
                </div>
            </div>
        </div>
    )
}