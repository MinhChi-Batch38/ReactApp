import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Input from '../Input/Input';
import AddIcon from '@mui/icons-material/Add';
import CancelIcon from '@mui/icons-material/Cancel';
import LoadingButton from '@mui/lab/LoadingButton';
import { useState } from 'react';
import { httpAddSong, httpUpload } from '../../hooks/requests/song'
import {GENRE, REGEXP}  from '../../Config/Constant'
import Selection from '../Input/Selection';
export default function FormAdd({ isOpen, onChange, onAdd }) {
    const [newSong, setNewSong] = useState({})
    const [open, setOpen] = useState(isOpen);
    const [addSuccessful, setAddSuccessful] = useState(true)
    const [end, setEnd] = useState(false)
    const [failed, setFailed] = useState(false)
    const regexp = REGEXP
    React.useEffect(() => {
        setOpen(isOpen)
    }, [isOpen])

    const handleClose = () => {
        setNewSong({})
        setOpen(false);
        onChange();
    };
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
            var ext = value.name.substr(value.name.lastIndexOf('.'))
            if (ext.includes('mp3')) {
                setNewSong(pre => {
                    pre.link = value
                    return pre
                })
            }
        }
        console.log(newSong)
    }
    const handleOnSubmit = async () => {
        if (!newSong.name || !newSong.singer || !newSong.genre) {
            alert("Please provide all elements!")
            return
        }
        if (regexp.test(newSong.name) || regexp.test(newSong.singer) || regexp.test(newSong.genre)) {
            alert('Please provide valid elements!')
            return
        }
        if (!newSong.link) {
            alert("You need to provide mp3 file!")
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
                console.log(res)
                if (res.status !== 201) {
                    setFailed("Can't add song")
                    setAddSuccessful(true)
                    setEnd(true)
                } else {
                    setFailed(false)
                    setNewSong({})
                    setAddSuccessful(true)
                    setEnd(true)
                    onAdd(res.song)
                }
            }
        }

    }

    return (
        <div>
            <Dialog open={open} onClose={handleClose}>
                {end || <div>
                    <DialogTitle>Add new song</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            To add new song, please enter all the song's information
                        </DialogContentText>
                        <Input title="Song" name="name" onChange={handleOnChange} />
                        <Input title="Singer" name="singer" onChange={handleOnChange} />
                        <Selection options={GENRE} onChange={handleOnChange} title="Genre"/>
                        {/* <Input title="Genre" name="genre" onChange={handleOnChange} /> */}
                        <Input title="Audio" name="link" type="file" onChange={handleOnChange} />
                    </DialogContent>
                    <DialogActions>
                        <Button id="btn-cancel" variant="contained"
                            color="error" startIcon={<CancelIcon />} onClick={handleClose}>
                            Cancel
                        </Button>
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
                    </DialogActions>
                </div>}
                {end && <div>
                    <DialogTitle>Add New Song</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            {!failed ? <p>Add successfully!</p> : <p>Add failed!</p>}
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        {<Button variant="contained" onClick={handleClose}>
                            OK
                        </Button>}
                        {addSuccessful || <LoadingButton
                            loading
                            loadingPosition="start"
                            variant="outlined"
                        >
                            Adding
                        </LoadingButton>}
                    </DialogActions>
                </div>}
            </Dialog>
        </div>
    );
}