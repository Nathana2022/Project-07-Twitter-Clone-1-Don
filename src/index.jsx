import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/home';
import Layout from './components/layout';
import Profile from './pages/profile';
import NewTweet from './components/NewTweet'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: ":username",
        element: <Profile />,
      },

    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NewTweet>
    <RouterProvider router={router} />
    </NewTweet>
  </React.StrictMode>
);
