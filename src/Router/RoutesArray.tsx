import React, { Suspense } from 'react'
import { lazy } from 'react'
import { RouteObject } from 'react-router'
import AuthLayout from '../Layouts/AuthLayout'
import HomePage from 'src/Pages/HomePage'
import PublicLayout from 'src/Layouts/PublicLayout'

const UserDashboard = lazy(() => import('../Pages/DashboardPage'))
const LoginPage = lazy(() => import('../Pages/LoginPage'))
const UserProfilePage = lazy(() => import('../Pages/UserProfilePage'))
const ChatPage = lazy(() => import('../Pages/ChatPage'))

const routes: RouteObject[] = [
  //Public routes
  {
    path: '/',
    element: <PublicLayout />,
    errorElement: <>error element</>,
    children: [
      { path: '/', index: true, element: <HomePage /> },
      { path: 'login', element: <LoginPage /> },
    ],
  },
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
        path: 'chat',
        element: <ChatPage />,
      },
    ],
  },
]

export default routes
