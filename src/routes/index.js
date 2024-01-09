import Auth from 'pages/auth/Auth';
import Home from 'pages/home';
import Personinfo from 'pages/user';
import Announcements from 'pages/announcements';
import AnnouncementSingle from 'pages/announcements/single';
import CreateAnnouncement from 'pages/announcements/create';

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
  },
  {
    path: '/announcements',
    element: <Announcements />
  },
  {
    path: '/announcement/:id',
    element: <AnnouncementSingle />
  },
  {
    path: '/announcement/create',
    element: <CreateAnnouncement />
  }
];
