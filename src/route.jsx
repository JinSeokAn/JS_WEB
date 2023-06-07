import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import NotFound from 'pages/NotFound';
import Home from 'pages/Home';
import Login from 'pages/Login';
import JoinUs from 'pages/JoinUs';
import ForgotAccount from 'pages/ForgotAccount';
import OderTableForm from 'pages/OrderTableForm';
import OrderSheet from 'pages/OrderSheet';


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
        path: 'find',
        element: <ForgotAccount />,
      },
      {
        path: 'join',
        element: <JoinUs />,
      },
      { 
        path: 'order',
        element: <OderTableForm />,
      },
      {
        path: 'order/:id',
        element: <OrderSheet />,
      },
    ],
  },
]);

export default router;
