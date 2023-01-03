import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import LoadingButton from '@mui/lab/LoadingButton';
import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react';
import { httpDeleteSongs } from '../../hooks/requests/song'
import { useSelector } from "react-redux";
export default function DeleteDialog({ isOpen, deleteSongs, onDeleteSuccessful, onClose }) {
    const language = useSelector(state => state.language)
    const [open, setOpen] = useState(isOpen);
    const [deleteSuccessful, setDeleteSuccessful] = useState(true)
    const [end, setEnd] = useState(false)
    const [message, setMessage] =  useState(false)
    React.useEffect(() => {
        setOpen(isOpen)
    }, [isOpen])

    const handleClose = () => {
        setOpen(false);
        onClose()
    };
    
    const handleOnSubmit = async () => {
        if (deleteSongs.length > 0) {
            setDeleteSuccessful(false)
            const res = await httpDeleteSongs(deleteSongs)
            console.log(res)
            if (res.status === 200) {
                setDeleteSuccessful(true)
                setEnd(true)
                onDeleteSuccessful()
                setMessage(language.Message.Delete_200)
            } else {
                setDeleteSuccessful(true)
                setEnd(true)
                setMessage(language.Message.Delete_500)
            }          
        }

    }

    return (
        <div>
            <Dialog open={open} onClose={handleClose}>
                {end || <div>
                    <DialogTitle>{language.Title.Delete}</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                        <i class="fa-regular fa-circle-question" style={{paddingRight: 10}} ></i>
                        {language.Title.DeleteInfo}
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button id="btn-cancel" variant="contained"
                            color="error" onClick={handleClose}>
                            {language.No}
                        </Button>
                        {deleteSuccessful && <Button variant="contained" onClick={handleOnSubmit}>
                        {language.Yes}
                        </Button>}
                        {deleteSuccessful || <LoadingButton
                            loading
                            loadingPosition="start"
                            startIcon={<AddIcon />}
                            variant="outlined"
                        >
                            Deleting
                        </LoadingButton>}
                    </DialogActions>
                </div>}
                {end && <div>
                    <DialogTitle>{language.Title.Delete}</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                        <i className="fa-solid fa-circle-info" style={{paddingRight: 10}}></i>
                        {message}
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        {<Button variant="contained" onClick={handleClose}>
                            OK
                        </Button>}
                    </DialogActions>
                </div>}
            </Dialog>
        </div>
    );
}