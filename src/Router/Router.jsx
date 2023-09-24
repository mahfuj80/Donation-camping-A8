import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layout/MainLayout';
import ErrorPage from '../Pages/Error/ErrorPage';
import Home from '../Pages/Home/Home';
import Donation from '../Pages/Donation/Donation';
import Statics from '../Pages/Statics/Statics';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: fetch('./Card.json'),
      },
      {
        path: '/donation',
        element: <Donation></Donation>,
      },
      {
        path: '/statics',
        element: <Statics></Statics>,
      },
    ],
  },
]);

export default router;
