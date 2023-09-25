import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layout/MainLayout';
import ErrorPage from '../Pages/Error/ErrorPage';
import Home from '../Pages/Home/Home';
import Donation from '../Pages/Donation/Donation';
import Statics from '../Pages/Statics/Statics';
import CardDetails from '../Pages/CardDetails/CardDetails';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('/Card.json'),
      },
      {
        path: '/donation',
        element: <Donation></Donation>,
      },
      {
        path: '/statics',
        element: <Statics></Statics>,
      },
      {
        path: '/card-details/:id',
        element: <CardDetails></CardDetails>,
        loader: () => fetch('/Card.json'),
      },
    ],
  },
]);

export default router;
