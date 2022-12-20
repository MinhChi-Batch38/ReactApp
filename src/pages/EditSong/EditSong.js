import { useEffect, useState } from "react"
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

const regexp = /[^0-9a-zA-Z]/

function EditInput({ title, value, onChange}) {
    const [changeValue, setChangeValue] = useState(value);
    useEffect(() => {
        setChangeValue(value)
    }, [value])
    const handleOnChange = (name) => {
        setChangeValue(name)
        onChange(title, name)
    }
    return (
        <Box
            sx={{
                width: 500,
                maxWidth: '100%',   
                
            }}
        >
            <TextField fullWidth label={title}
            onChange={ e => handleOnChange(e.target.value)} value={changeValue} required />
        </Box>
    )
}

function reset(editSong)
{
    var newSong = {}
    newSong.id = editSong.id
    newSong.name = editSong.name
    newSong.singer = editSong.singer
    newSong.genre = editSong.genre
    newSong.link = editSong.link
    return newSong
}

export default function EditSong() {
    const song = useSelector(state => state.audio)
    
    const [editSong, setEditSong] = useState(song)
    const [newSong, setNewSong] = useState(reset(editSong))
    const [editSuccessful, setEditSuccessful] = useState(true)
    const [success, setSuccess] = useState(false)
    const [failed, setFailed] = useState(false)

    const handleOnChange = (title, value) => {
        if (title === "Song") {
            // setEditSong(pre => {
            //     pre.name = value
            //     return pre
            // })
            setNewSong(pre => {
                pre.name = value
                return pre
            })
        }
        if (title === "Singer") {
            setNewSong(pre => {
                pre.singer = value
                return pre
            })
        // setEditSong(pre => {
        //     pre.singer = value
        //     return pre
        // })
        }
        if (title === "Genre") {
            setNewSong(pre => {
                pre.genre = value
                return pre
            })
            // setEditSong(pre => {
            //     pre.genre = value
            //     return pre
            // })
        }
        console.log(newSong)
    }
    const handleOnSubmit = async () => {
        if (!newSong.name || !newSong.singer || !newSong.genre || !newSong.link) {
            alert("Please provide all elements")
            return
        }
        if (regexp.test(newSong.name) || regexp.test(newSong.singer) || regexp.test(newSong.genre)) {
            alert('Please provide valid elements!')
            return
        }
        setEditSuccessful(false)
            const res = await httpEditSong(newSong)
            if (res !== 200) {
                setFailed(true)
                setSuccess(false)
                setEditSuccessful(true)
            } else {
                setSuccess(true)
                setFailed(false)
                setEditSong(newSong)
                setEditSuccessful(true)
            }
        
    }
    
    const handleOnCancel = () => {
        setNewSong(reset(editSong))
        console.log(reset(editSong))
        console.log(editSong)
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
                    <EditInput title="Song" value={newSong.name} onChange={handleOnChange}/>
                </div>
                <div className="item-item">
                    {/* <Input title="Singer" name="singer" value={newSong.singer} onChange={handleOnChange} /> */}
                    <EditInput title="Singer" value={newSong.singer} onChange={handleOnChange}/>
                </div>
                <div className="item-item">
                    {/* <Input title="Genre" name="genre" value={newSong.genre} onChange={handleOnChange} /> */}
                    <EditInput title="Genre" value={newSong.genre} onChange={handleOnChange}/>
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