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
import { httpEditSong, httpCheckSong } from "../../hooks/requests/song";
import { REGEXP, GENRE } from "../../Config/Constant";
import MessageDialog from "../../components/Dialog/MessageDialog";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const regexp = REGEXP

function setNewSong(song, name, singer, genre) {
    var newSong = song
    newSong.name = name
    newSong.singer = singer
    newSong.genre = genre
    return newSong
}

export default function EditSong() {
    const song = useSelector(state => state.audio)
    const [name, setName] = useState(song.name)
    const [singer, setSinger] = useState(song.singer)
    const [genre, setGenre] = useState(song.genre)
    const [editSuccessful, setEditSuccessful] = useState(true)
    const [message, setMessage] = useState(false)

    const handleOnSongChange = (value) => {
        setName(value)
    }
    const handleOnSingerChange = (value) => {
        setSinger(value)
    }
    const handleOnGenreChange = (value) => {
        setGenre(value)
    }

    const handleOnSubmit = async () => {
        if (!name || !singer || !genre) {
            alert("Please provide all elements")
            return
        }
        if (regexp.test(name) || regexp.test(singer) || regexp.test(genre)) {
            alert('Please provide valid elements!')
            return
        }
        if (name === song.name && singer === song.singer && genre === song.genre) {
            return
        }
        setEditSuccessful(false)
        const newSong = setNewSong(song, name, singer, genre)
        const check = await httpCheckSong(newSong.name, newSong.singer)
        if (check.status === 200) {
            const res = await httpEditSong(newSong)
            console.log(res.song)
            if (res.status !== 200) {         
                setEditSuccessful(true)
            } else {
                setEditSuccessful(true)
            }
            setMessage(res.message)
        } else {
            setMessage(check.message)
            setEditSuccessful(true)
        }

    }

    const handleOnCancel = () => {
        setName(song.name)
        setSinger(song.singer)
        setGenre(song.genre)
        setMessage(false)
    }

    return (
        <div className="edit-page">
            {message && <MessageDialog
                title="Edit songs"
                message="Edit successfully! The song has been updated!"
                isOpen={message}
                onClose={handleOnCancel} />}
            <div className="music-player">
                <MusicPlayerSlider song={song} />
            </div>
            <div className="form-edit-song">
                <div className="item-item">
                    {<Box
                        sx={{
                            width: 500,
                            maxWidth: '100%',

                        }}
                    >
                        <TextField fullWidth label="Song"
                            onChange={e => handleOnSongChange(e.target.value)}
                            value={name} required
                        />
                    </Box>}
                </div>
                <div className="item-item">
                    {<Box
                        sx={{
                            width: 500,
                            maxWidth: '100%',

                        }}
                    >
                        <TextField fullWidth label="Singer"
                            onChange={e => handleOnSingerChange(e.target.value)}
                            value={singer} required
                        />
                    </Box>}
                </div>
                <div className="item-item">
                    {/* {<Box
                        sx={{
                            width: 500,
                            maxWidth: '100%',

                        }}
                    >
                        <Selection options={GENRE} onChange={e => handleOnGenreChange(e.target.value)} title="Genre" />
                        <TextField fullWidth label="Genre"
                            onChange={e => handleOnGenreChange(e.target.value)}
                            value={genre} required
                        />
                    </Box>} */}
                    <Box sx={{ minWidth: 120 }}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Genre</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={genre}
                                label="Genre"
                                onChange={e => handleOnGenreChange(e.target.value)}
                            >
                                {GENRE.map(option => (
                                    <MenuItem key={option} value={option}>{option}</MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Box>
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