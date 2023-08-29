import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

const HomePage = React.lazy(() => import('../pages/HomePage'));
const AppRoot = React.lazy(() => import('../pages/AppRootPage'));

const router = createBrowserRouter([
  {
    path: '',
    index: true,
    Component: HomePage,
  },
  {
    path: 'app',
    Component: AppRoot,
    children: [
      {
        path: 'server/:serverId',
        Component: React.lazy(() => import('../pages/ServerPage')),
        children: [
          {
            path: 'channel/:channelId',
            Component: React.lazy(() => import('../pages/ChannelPage')),
          },
        ],
      },
    ],
  },
]);

export default router;
