import React from 'react';
import ReactDOM from 'react-dom/client';
import './App/index.css';
import App from './App/App';
import reportWebVitals from './App/reportWebVitals';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import audioReducer from './reducers/audioReducer';
import searchReducer from './reducers/searchReducer';
import playReducer from './reducers/playReducer';
import playSongReducer from './reducers/playSongReducer';
import languageReducer from './reducers/languageReducer';

const store = configureStore({
  reducer: {
    "play": playReducer,
    "songPlay": playSongReducer, 
    "audio": audioReducer,
    "kw": searchReducer,
    "language": languageReducer,
  }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
