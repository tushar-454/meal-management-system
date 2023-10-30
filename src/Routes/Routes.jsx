import { createBrowserRouter } from 'react-router-dom';
import AddMeal from '../Components/AddMeal/AddMeal';
import ForgotPassword from '../Components/ForgotPassword/ForgotPassword';
import Home from '../Components/Home/Home';
import Login from '../Components/Login/Login';
import Signup from '../Components/Signup/Signup';
import YourMeal from '../Components/YourMeal/YourMeal';
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
      {
        path: '/add-meal',
        element: <AddMeal />,
      },
      {
        path: '/your-meal',
        element: <YourMeal />,
      },
    ],
  },
]);

export default routes;
