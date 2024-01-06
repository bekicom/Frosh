import Auth from 'pages/auth/Auth';
import Home from 'pages/home';

export const routes = [
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/auth',
    element: <Auth />
  }
];
