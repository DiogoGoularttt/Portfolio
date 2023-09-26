import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App.jsx';
import ProjectsPage from './components/ProjectsPage.jsx';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './styles/main.sass';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/projetos",
    element: <ProjectsPage/>
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
