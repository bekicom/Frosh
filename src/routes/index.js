import Auth from 'pages/auth/Auth';
import Home from 'pages/home';
import Personinfo from 'pages/personinfo/Personinfo';

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
