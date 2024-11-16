import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './pages/App/App';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Product from './pages/Product/Product';
import EditingModel from './pages/EditingModel/EditingModel';
import AddModel from './pages/AddModel/AddModel';
import Profile from './pages/Profile/Profile';
import Catalog from './pages/Catalog/Catalog';
import PageNotFound from './components/PageNotFound/PageNotFound';
import RedirectAuth from './utils/PrivateRoutes/RedirectAuth';
import RedirectUnAuth from './utils/PrivateRoutes/RedirectUnAuth';
import MainPage from './pages/MainPage/MainPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <PageNotFound />,
    children: [
      // Публичные маршруты
      {
        index: true,
        element: <MainPage />,
      },
      {
        index: true,
        path: 'catalog',
        element: <Catalog />,
      },
      {
        path: 'product/:id',
        element: <Product />,
      },
      {
        element: <RedirectUnAuth />,
        children: [
          {
            path: 'login',
            element: <Login />,
          },
          {
            path: 'register',
            element: <Register />,
          },
        ],
      },
      // Приватные маршруты
      {
        element: <RedirectAuth />,
        children: [
          {
            path: 'editmodel/:id',
            element: <EditingModel />,
          },
          {
            path: 'addmodel',
            element: <AddModel />,
          },
          {
            path: 'profile',
            element: <Profile />,
          },
          {
            path: 'my-models',
            element: <Catalog />,
          },
        ],
      },
      {
        path: '*',
        element: <PageNotFound />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
