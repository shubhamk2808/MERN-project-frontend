import React from 'react'
import { lazy } from 'react';
import { RouteObject } from 'react-router';
import AuthLayout from '../Layouts/AuthLayout';
import HomePage from 'src/Pages/HomePage';

const UserDashboard = lazy(() => import('../Pages/DashboardPage'));
const LoginPage = lazy(() => import('../Pages/LoginPage'));
const UserProfilePage = lazy(() => import('../Pages/UserProfilePage'));

  const routes:RouteObject[] = [
    { path: '/', element: <HomePage /> },
    { path: '/login', element: <LoginPage /> },
    // Private routes
    {
      path: '/',
      element: <AuthLayout />,
      children: [
        {
          path: 'users/:username',
          element: <UserProfilePage />,
        },
        {
          path: 'dashboard',
          element: <UserDashboard />,
        },
        {
          path: 'nested',
          children: [
            { path: 'child1', element: <UserProfilePage /> },
            { path: 'child2', element: <UserProfilePage /> },
          ],
        },
      ],
    },
  ];

export default routes;
