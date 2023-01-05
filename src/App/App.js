
import './App.css';
import Head from '../components/Head';
import Home from '../pages/Home';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import EditSong from '../pages/EditSong/EditSong';

function App() {
  return (
    <BrowserRouter>
      <div className='app-container'>
        <div className='header'>
            <Head />
          </div>
          <div className='content'>
        <Routes>
            <Route path="/" element={<Home />} />,
            <Route path="/home" element={<Home />} />,
            <Route path="/edit" element={<EditSong />} />,
        </Routes>
        </div>
      </div>

    </BrowserRouter >
  );
}

export default App;
