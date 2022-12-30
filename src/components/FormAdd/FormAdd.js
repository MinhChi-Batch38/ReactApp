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
import { httpAddSong, httpUpload, httpCheckSong } from '../../hooks/requests/song'
import { GENRE, REGEXP } from '../../Config/Constant'
import Selection from '../Input/Selection';
export default function FormAdd({ isOpen, onChange, onAdd }) {
    const [newSong, setNewSong] = useState({})
    const [open, setOpen] = useState(isOpen);
    const [addSuccessful, setAddSuccessful] = useState(true)
    const [end, setEnd] = useState(false)
    const [message, setMessage] = useState(false)
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
        const check = await httpCheckSong(newSong.name, newSong.singer)
        if (check.status === 200) {
            setNewSong(newSong)
            const link = await httpUpload(newSong.link);
            if (link === 404) {
                setMessage("Unsupport file")
                setAddSuccessful(true)
            } else {
                if (link !== "Unsuccessfully Uploaded!") {
                    newSong.link = link
                    const res = await httpAddSong(newSong)
                    console.log(res)
                    if (res.status !== 201) {
                        setAddSuccessful(true)
                        setEnd(true)
                    } else {
                        setNewSong({})
                        setAddSuccessful(true)
                        setEnd(true)
                        onAdd(res.song)
                    }
                    setMessage(res.message)
                }
            }
        } else {
            setMessage(check.message)
            setAddSuccessful(true)
            setEnd(true)
        }



    }

    return (
        <div>
            <Dialog open={open} onClose={handleClose}>
                {end || <div>
                    <DialogTitle>Add new song</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            <i className="fa-solid fa-circle-info" style={{ paddingRight: 10 }}></i>
                            To add new song, please enter all the song's information
                        </DialogContentText>
                        <Input title="Song" name="name" onChange={handleOnChange} />
                        <Input title="Singer" name="singer" onChange={handleOnChange} />
                        <Selection options={GENRE} onChange={handleOnChange} title="Genre" />
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
                            <i className="fa-solid fa-circle-info" style={{ paddingRight: 10 }}></i>
                            {message}
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