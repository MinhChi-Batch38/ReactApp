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
export default function DeleteDialog({ isOpen, deleteSongs, onDeleteSuccessful, onClose }) {
    const [open, setOpen] = useState(isOpen);
    const [deleteSuccessful, setDeleteSuccessful] = useState(true)
    const [end, setEnd] = useState(false)
    const [failed, setFailed] = useState(false)
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
            if (res === 200) {
                setDeleteSuccessful(true)
                setEnd(true)
                onDeleteSuccessful()
            } else {
                setDeleteSuccessful(true)
                setFailed(true)
                setEnd(true)
            }
        }

    }

    return (
        <div>
            <Dialog open={open} onClose={handleClose}>
                {end || <div>
                    <DialogTitle>Delete Songs</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                        <i class="fa-regular fa-circle-question" style={{paddingRight: 10}}></i>
                            Are you sure to delete all the songs are selected?
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button id="btn-cancel" variant="contained"
                            color="error" onClick={handleClose}>
                            No
                        </Button>
                        {deleteSuccessful && <Button variant="contained" onClick={handleOnSubmit}>
                            Yes
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
                    <DialogTitle>Delete Songs</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                        <i className="fa-solid fa-circle-info" style={{paddingRight: 10}}></i>
                            {!failed ? <p>Delete successfully!</p> : <p>Delete failed!</p>}
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