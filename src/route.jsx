import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import NotFound from 'pages/NotFound';
import Home from 'pages/Home';
import Login from 'pages/Login';
import JoinUs from 'pages/JoinUs';
import ForgotAccount from 'pages/ForgotAccount';
import PrdOrder from 'pages/PrdOrder';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'forgot-account',
        element: <ForgotAccount />,
      },
      {
        path: 'join-us',
        element: <JoinUs />,
      },
     
      { 
        path: 'order',
        element: <PrdOrder />,
      },
    ],
  },
]);

export default router;
