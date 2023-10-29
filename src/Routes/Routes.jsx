import { createBrowserRouter } from 'react-router-dom';
import Home from '../Components/Home/Home';
import Layout from './Layout';
import Login from '../Components/Login/Login';

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
    ],
  },
]);

export default routes;
