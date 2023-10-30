import { createBrowserRouter } from 'react-router-dom';
import AddMeal from '../Components/AddMeal/AddMeal';
import AddMoney from '../Components/AddMoney/AddMoney';
import ForgotPassword from '../Components/ForgotPassword/ForgotPassword';
import Home from '../Components/Home/Home';
import Login from '../Components/Login/Login';
import MonthlyAllDetails from '../Components/MonthlyAllDetails/MonthlyAllDetails';
import PrivateRoutes from '../Components/PrivateRoutes/PrivateRoutes';
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
        element: (
          <PrivateRoutes>
            <AddMeal />
          </PrivateRoutes>
        ),
      },
      {
        path: '/your-meal',
        element: (
          <PrivateRoutes>
            <YourMeal />
          </PrivateRoutes>
        ),
      },
      {
        path: '/add-money',
        element: (
          <PrivateRoutes>
            <AddMoney />
          </PrivateRoutes>
        ),
      },
      {
        path: '/monthly-all-details',
        element: (
          <PrivateRoutes>
            <MonthlyAllDetails />
          </PrivateRoutes>
        ),
      },
    ],
  },
]);

export default routes;
