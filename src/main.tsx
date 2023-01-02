import React from 'react'
import ReactDOM from 'react-dom/client'


//React Router Dom
import { RouterProvider } from 'react-router-dom';
import router from './router';


//Context
import CurrentSongContext from './context/current-song-context';
import { CURRENT_SONG_INIT } from './constants';


//Global styles
import './main.css'



ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <CurrentSongContext.Provider value={CURRENT_SONG_INIT}>
      <RouterProvider
        router={router}
      />
    </CurrentSongContext.Provider>
  </React.StrictMode>,
);
