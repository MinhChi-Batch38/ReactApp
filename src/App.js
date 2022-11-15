
import './App.css';
import Head from './components/Head';
import Home from './pages/Home';
import Login from './pages/Login';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import AddSong from './pages/AddSong';

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
      </Routes>
        
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
