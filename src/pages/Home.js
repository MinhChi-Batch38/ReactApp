import "./style.css"
import Item from "../components/Item/Item";
import Bottom from "../components/Bottom/Bottom";
import { useSongs } from "../hooks/use/useSongs";
import { useState } from "react";
import Play from "../components/Play/Play";
import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import FormAdd from "../components/FormAdd/FormAdd";
import { useEffect } from "react";
import DeleteDialog from "../components/Dialog/DeleteDialog";
import { useSelector } from "react-redux";

function DeleteFromArray(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    arr2 = arr2.filter(function (au) {
      return au !== arr1[i]
    })
  }
  return arr2
}

function Home() {
  const language = useSelector(state => state.language)
  const kw = useSelector(state => state.kw)
  const audio = useSelector(state => state.songPlay)
  const play = useSelector(state => state.play)
  const [isPlay, setIsPlay] = useState(false)
  const [pageNumber, setPageNumber] = useState(1)
  const [pageSize, setPageSize] = useState(10)
  var initialSongs = useSongs(kw, pageNumber-1, pageSize)
  const [songs, setSongs] = useState([])
  const [total, setTotal] = useState(0)
  useEffect(() => {
    setSongs(initialSongs.content)
    setTotal(initialSongs.totalElements)
  }, [initialSongs])
  
  const [deleteSongs, setDeleteSongs] = useState([])
  const [check, setCheck] = useState(false)
  const [addOpen, setAddOpen] = useState(false)
  const [deleteOpen, setDeleteOpen] = useState(false)

  const handleOnCheck = () => {
    check === false ? setDeleteSongs(songs) : setDeleteSongs([])
    setCheck(pre => !pre)
  }
  const handleOnItemCheck = (song) => {
    setDeleteSongs(pre => {
      return [...pre, song]
    })
  }
  const handleOnItemUnCheck = (song) => {

    setDeleteSongs(pre => {
      return pre.filter(function (au) {
        return au !== song;
      });

    })
  }
  const handlePreviousPageClick = value => {
    if (isNaN(value)) {
      console.log("NaN")
      return
    }
    if (pageNumber > 1) {
      setPageNumber(pre => pre - 1)
    }
  }

  const handleNextPageClick = value => {
    if (isNaN(value)) {
      console.log("NaN")
      return
    }
    if (pageNumber < total / pageSize) {
      setPageNumber(pre => pre + 1)
    }
  }

  const handleSelectButtomOnChange = (value) => {
    setPageSize(Number(value))
  }

  const handleInputButtomOnChange = (value) => {
    var num = Number(value)
    if (num > total / pageSize + 1 || num < total / pageSize) {
      console.log("big or small")
      num = pageNumber
    }
    if (num === 0) {
      num = 1
    }
    setPageNumber(num)
  }

  const handleOnDeleteClick = () => {
    console.log(deleteSongs.length)
    console.log(deleteOpen)
    if (deleteSongs.length > 0) {
      setDeleteOpen(true)
    }
  }
  const HandleOnDeleteSuccessful = () => {
    setSongs(DeleteFromArray(deleteSongs, songs))
    setTotal(pre => pre - deleteSongs.length)
    setDeleteSongs([])
    setCheck(false)
  }

  const handleDeleteDialogClose = () => {
    setDeleteOpen(false)
  }
  const handleOnCloseDialog = () => {
    setAddOpen(false)
    console.log(addOpen)
  }
  const handleOnOpenDialog = () => {
    setAddOpen(true)
  }

  const HandleOnAddSong = (song) => {
    setSongs(pre => [song, ...pre])
    setTotal(pre => pre + 1)
  }
  
  const handleOnPlay = () => {
    setIsPlay(true)
  }
  const handleOnPause = () => {
    setIsPlay(false)
  }
  //Render
  return (
    <div>
      <div className="nav-bar">
        <Box sx={{ '& > :not(style)': { m: 1 } }} className="btn-add" onClick={handleOnOpenDialog}>
          <Fab color="primary" aria-label="add" title="Add">
            <AddIcon />
          </Fab>
        </Box>
        <Box sx={{ '& > :not(style)': { m: 1 } }} className="btn-delete" onClick={handleOnDeleteClick}>
          <Fab color="secondary" aria-label="delete" title="Delete selected">
            <DeleteIcon />
          </Fab>
        </Box>
      </div>
      <div id="table_wrapper">
        <div>
          {addOpen && <FormAdd isOpen={addOpen} onChange={handleOnCloseDialog} onAdd={HandleOnAddSong}></FormAdd>}
        </div>
        <div>
          {deleteOpen && <DeleteDialog isOpen={true} deleteSongs={deleteSongs}
            onDeleteSuccessful={HandleOnDeleteSuccessful}
            onClose={handleDeleteDialogClose} />}
        </div>
        { total>0 ?
           <div>
            <div id="header">
              <div id="head1">
                <input type="checkbox" onClick={handleOnCheck} checked={check}/>
              </div>
              <div id="head2">{language.Name}</div>
              <div id="head3">
              {language.Genre}
              </div>
              <div id="head4">{language.Action}</div>
            </div>
            <div id="tbody">
              <table>
                {songs && songs.map(song => (
                  <tr key={song.id}>
                      { (song.id === audio.id && play) ?
                        <Item
                        song={song}
                        onPlay={handleOnPlay}
                        onPause={handleOnPause}
                        checked={check}
                        onChecked={handleOnItemCheck}
                        onUnChecked={handleOnItemUnCheck}
                        play={true} />:
                        <Item
                        song={song}
                        onPlay={handleOnPlay}
                        onPause={handleOnPause}
                        checked={check}
                        onChecked={handleOnItemCheck}
                        onUnChecked={handleOnItemUnCheck}
                        play={false} />}
                  </tr>
                ))}
              </table>
            </div>
          </div> 
          :
            <div>
              <i className="no-song fa-solid fa-plus fa-6x" onClick={handleOnOpenDialog}></i>
              <h2 id="no-song">There is no song to display</h2>
            </div>
        }
      </div>
      <div className="bottom">
        <Bottom
          total={total}
          selected={deleteSongs.length}
          selectOnchange={handleSelectButtomOnChange}
          inputOnChange={handleInputButtomOnChange}
          previousPageClick={handlePreviousPageClick}
          nextPageClick={handleNextPageClick}
          pageNumber={pageNumber}
        />
      </div>
      <div className='playing-song'>
        {isPlay && <Play />}
      </div>
    </div>
  );
}

export default Home;