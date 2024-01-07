import Auth from 'pages/auth/Auth';
import Home from 'pages/home';
import Personinfo from 'pages/user/dashboard';

export const routes = [
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/auth',
    element: <Auth />
  },
  {
    path: '/personinfo/*',
    element: <Personinfo />
  }
];
