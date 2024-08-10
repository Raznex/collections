import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './pages/App/App';

const router = createBrowserRouter([
  {
    element: <App />,
    // errorElement: <PagesNotFound />,
    children: [
      {
        path: '/',
        // element: <Knowledge />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
