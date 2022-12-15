
import './App.css';
import Head from '../components/Head';
import Home from '../pages/Home';
import Login from '../pages/Login/Login';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import AddSong from '../pages/AddSong/AddSong';
import EditSong from '../pages/EditSong/EditSong';

function App() {
  return (
    <BrowserRouter>
    <div className='app-container'>
      <div className='header'>
        <Head/>
      </div>
      <div className='content'>
         <Routes>
          <Route path='/' element={<Login />} />,
          <Route path='/login' element={<Login />} />,
          <Route path="/home" element={<Home/>} />,
          <Route path="/add" element={<AddSong/>} />,
          <Route path="/edit" element={<EditSong />} />,
      </Routes>       
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
