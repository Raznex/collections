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
import AddModel from './pages/AddModel/AddModel';
import Profile from './pages/Profile/Profile';
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
        path: '/my-models',
        element: <Catalog />,
      },
      {
        path: '/product/:id',
        element: <Product />,
      },
      {
        path: '/editmodel/:id',
        element: <EditingModel />,
      },
      {
        path: '/addmodel',
        element: <AddModel />,
      },
      {
        path: '/profile',
        element: <Profile />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
