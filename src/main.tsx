import React from 'react'
import ReactDOM from 'react-dom/client'


//React Router Dom
import { RouterProvider } from 'react-router-dom';
import router from './router';


//Global styles
import './index.css'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider
      router={router}
    />
  </React.StrictMode>,
);
