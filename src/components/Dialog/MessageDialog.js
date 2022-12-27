import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from 'react';

export default function MessageDialog({ title, message, isOpen, onClose}) {
    const [open, setOpen] = useState(isOpen);
    React.useEffect(() => {
        setOpen(isOpen)
    }, [isOpen])

    const handleClose = () => {
        setOpen(false);
        onClose()
    };


    return (
        <div>
            <Dialog open={open} onClose={handleClose}>
                 <div>
                    <DialogTitle>{title}</DialogTitle>
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
                </div>
            </Dialog>
        </div>
    );
}