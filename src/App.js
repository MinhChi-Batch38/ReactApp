
import './App.css';
import Head from './components/Head';
import Home from './pages/Home';
import Play from './components/Play';
import Login from './pages/Login';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

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
      </Routes>
        
      </div>
      <div className='playing-song'>
        <Play />
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
