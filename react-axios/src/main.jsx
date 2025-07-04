import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import {createBrowserRoute, RouterProvider, Route} from "react-router-dom";


//portas

import Home from "./routes/Home.jsx";
import NewPost from "./routes/NewPost.jsx";

import './index.css'
import App from './App.jsx'

const router = createBrowserRoute([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/new",
        element:<NewPost />,
      },
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
