import React from 'react'
import ReactDOM from 'react-dom/client'


//React Router Dom
import { RouterProvider } from 'react-router-dom';
import router from './router';


//Global styles
import './main.css'


//Context
import CurrentSongContextProvider from './contexts/CurrentSong/CurrentSongContextProvider';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<CurrentSongContextProvider>
			<RouterProvider
				router={router}
			/>
		</CurrentSongContextProvider>
	</React.StrictMode>,
);
