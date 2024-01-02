import Register from 'pages/auth/register';
import Home from 'pages/home';

export const routes = [
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/register',
    element: <Register />
  }
];
