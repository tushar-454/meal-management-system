import { RouterProvider } from 'react-router-dom';
import routes from './Routes/Routes';

const App = () => {
  return <RouterProvider router={routes} />;
};

export default App;
