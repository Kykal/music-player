import React from 'react'
import ReactDOM from 'react-dom/client'


//React Router Dom
import { RouterProvider } from 'react-router-dom';
import router from './router';


//Context
import { CurrentSongContextProvider } from './contexts/current-song-context';


//Global styles
import './main.css'



ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<CurrentSongContextProvider>
			<RouterProvider
				router={router}
			/>
		</CurrentSongContextProvider>
	</React.StrictMode>,
);
