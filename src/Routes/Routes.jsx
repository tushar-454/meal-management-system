import { createBrowserRouter } from 'react-router-dom';
import AddMeal from '../Components/AddMeal/AddMeal';
import AddMoney from '../Components/AddMoney/AddMoney';
import ForgotPassword from '../Components/ForgotPassword/ForgotPassword';
import Home from '../Components/Home/Home';
import Login from '../Components/Login/Login';
import MonthlyAllDetails from '../Components/MonthlyAllDetails/MonthlyAllDetails';
import PublicRoutes from '../Components/PublicRoutes/PublicRoutes';
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
        element: (
          <PublicRoutes>
            <Login />
          </PublicRoutes>
        ),
      },
      {
        path: '/signup',
        element: (
          <PublicRoutes>
            <Signup />
          </PublicRoutes>
        ),
      },
      {
        path: '/forgot-password',
        element: (
          <PublicRoutes>
            <ForgotPassword />
          </PublicRoutes>
        ),
      },
      {
        path: '/add-meal',
        element: <AddMeal />,
      },
      {
        path: '/your-meal',
        element: <YourMeal />,
      },
      {
        path: '/add-money',
        element: <AddMoney />,
      },
      {
        path: '/monthly-all-details',
        element: <MonthlyAllDetails />,
      },
    ],
  },
]);

export default routes;
