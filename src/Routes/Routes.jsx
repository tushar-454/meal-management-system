import { createBrowserRouter } from 'react-router-dom';
import ForgotPassword from '../Components/ForgotPassword/ForgotPassword';
import Home from '../Components/Home/Home';
import Login from '../Components/Login/Login';
import Signup from '../Components/Signup/Signup';
import Layout from './Layout';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/signup',
        element: <Signup />,
      },
      {
        path: '/forgot-password',
        element: <ForgotPassword />,
      },
    ],
  },
]);

export default routes;
