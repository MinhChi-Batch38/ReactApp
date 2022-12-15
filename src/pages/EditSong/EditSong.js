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
    const [changeValue, setChangeValue] = useState(value);
    const handleOnChange = (name) => {
        setChangeValue(name);
        onChange(title, name)
    }
    return (
        <Box
            sx={{
                width: 500,
                maxWidth: '100%',   
                
            }}
        >
            <TextField fullWidth label={title} pattern="[A-Za-z]" 
            onChange={ e => handleOnChange(e.target.value)} value={changeValue} required />
        </Box>
    )
}

export default function EditSong() {
    const song = useSelector(state => state.audio)
    const initialSong = useSelector(state => state.audio)
    const [editSong, setEditSong] = useState(song)
    const [editSuccessful, setEditSuccessful] = useState(true)
    const [success, setSuccess] = useState(false)
    const [failed, setFailed] = useState(false)

    const handleOnChange = (title, value) => {
        if (title === "Song") {
            // actualSong.name = value   
            // setEditSong(actualSong)
            setEditSong(pre => {
                pre.name = value
                return pre
            })
        }
        if (title === "Singer") {
        //    actualSong.singer = value
        //    setEditSong(actualSong)
        setEditSong(pre => {
            pre.singer = value
            return pre
        })
        }
        if (title === "Genre") {
            // actualSong.genre = value
            // setEditSong(actualSong)
            setEditSong(pre => {
                pre.genre = value
                return pre
            })
        }
        console.log(editSong)
    }
    const handleOnSubmit = async () => {
        if (!editSong.name || !editSong.singer || !editSong.genre || !editSong.link) {
            alert("Please provide all elements")
            return
        }
        if (editSong.name.lenght > 1) {
            alert("Name is too long!")
        }
        setEditSuccessful(false)
            const res = await httpEditSong(editSong)
            if (res !== 200) {
                setFailed(true)
                setSuccess(false)
                setEditSuccessful(true)
            } else {
                setSuccess(true)
                setFailed(false)
                setEditSong(editSong)
                setEditSuccessful(true)
            }
        
    }
    
    const handleOnCancel = () => {
        setEditSong(song)
        console.log(initialSong)
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