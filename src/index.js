import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './pages/App/App';
import Login from './pages/Login/Login';
import Card from './components/Card/Card';
import Register from './pages/Register/Register';
import Product from './pages/Product/Product';
import EditingModel from './pages/EditingModel/EditingModel';
import Catalog from './pages/Catalog/Catalog';

const router = createBrowserRouter([
  {
    element: <App />,
    // errorElement: <PagesNotFound />,
    children: [
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/register',
        element: <Register />,
      },
      {
        path: '/',
        element: <Catalog />,
      },
      {
        path: '/product',
        element: <Product />,
      },
      {
        path: '/editmodel',
        element: <EditingModel />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
